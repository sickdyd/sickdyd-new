import { NextResponse } from 'next/server'
import { getCurrentUsers } from './getCurrentUsers'

export async function GET() {
  if (!process.env.GA4_PROPERTY_ID) {
    throw new Error('The GA4_PROPERTY_ID is required for the website to run.')
  }

  const currentUsers = await getCurrentUsers(process.env.GA4_PROPERTY_ID)

  return NextResponse.json({ currentUsers })
}
