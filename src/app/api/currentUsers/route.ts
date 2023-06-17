import { NextResponse } from 'next/server'
import { getCurrentUsers } from '../../utils/googleAnalytics/getCurrentUsers'

export async function GET() {
  const currentUsers = await getCurrentUsers()

  return NextResponse.json({ currentUsers })
}
