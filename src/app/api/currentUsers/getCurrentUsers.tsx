import { BetaAnalyticsDataClient } from '@google-analytics/data'

export async function getCurrentUsers(propertyId: string) {
  try {
    const analyticsDataClient = new BetaAnalyticsDataClient()
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
      return { currentUsers: 0 }
    }

    const currentUsers = response.rows.reduce(
      (acc, row) =>
        row && row.metricValues
          ? acc + parseInt(row.metricValues[0].value || '0')
          : 0,
      0
    )

    return currentUsers
  } catch (error) {
    console.error('Error querying Google Analytics Data API:', error)
    throw error
  }
}
