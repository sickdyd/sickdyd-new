import { BetaAnalyticsDataClient } from '@google-analytics/data'
import { getAuthenticationToken } from './getAuthenticationToken'

export async function getCurrentUsers(propertyId: string) {
  try {
    const auth = getAuthenticationToken()
    const analyticsDataClient = new BetaAnalyticsDataClient({ auth })

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '2020-03-31',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'city',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    })

    if (!response || !response.rows) {
      return 1
    }

    const currentUsers = response.rows.reduce((acc, row) => {
      if (row && row.metricValues) {
        const metricValue = parseInt(row.metricValues[0].value || '0')
        return acc + metricValue
      }

      return acc > 0 ? acc : 1
    }, 0)

    return currentUsers
  } catch (error) {
    console.error('Error querying Google Analytics Data API:', error)
    throw error
  }
}
