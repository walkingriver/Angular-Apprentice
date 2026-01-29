/**
 * Production environment configuration.
 * These values are replaced during production builds.
 */
export const environment = {
  production: true,
  // In production, you would typically inject this via server-side rendering
  // or use a backend proxy to avoid exposing the API key
  tmdbAccessToken: '',
  useMockData: true, // Fallback to mock data if no token
};
