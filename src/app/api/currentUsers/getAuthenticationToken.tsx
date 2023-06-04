import { google } from 'googleapis'

export function getAuthenticationToken() {
  if (!process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error('Environment variable GOOGLE_PRIVATE_KEY missing')
  }

  return new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: JSON.parse(process.env.GOOGLE_PRIVATE_KEY),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  })
}
