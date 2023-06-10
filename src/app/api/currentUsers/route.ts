import { NextResponse } from 'next/server'
import { getCurrentUsers } from '../../utils/googleAnalytics/getCurrentUsers'

export async function GET() {
  if (!process.env.GA4_PROPERTY_ID) {
    throw new Error('GA4_PROPERTY_ID is not set, the request cannot be done')
  }

  const currentUsers = await getCurrentUsers(process.env.GA4_PROPERTY_ID)

  return NextResponse.json({ currentUsers })
}
