import { CountryAndUsers } from '@/app/components/CurrentUsers'
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
          name: 'country',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    })

    console.log(JSON.stringify(response, null, 2))

    if (!response || !response.rows) {
      return 1
    }

    const countryAndUsers = {} as CountryAndUsers

    const totalUsers = response.rows.reduce((totalUsers, row) => {
      if (row && row.metricValues && row.dimensionValues) {
        const country = row.dimensionValues[0].value
        const users = row.metricValues[0].value

        if (country && users) {
          countryAndUsers[country] = parseInt(users)
        }

        const userCount = parseInt(row.metricValues[0].value || '0')
        return totalUsers + userCount
      }

      return totalUsers > 0 ? totalUsers : 1
    }, 0)

    return { totalUsers, countryAndUsers }
  } catch (error) {
    console.error('Error querying Google Analytics Data API:', error)
    throw error
  }
}
