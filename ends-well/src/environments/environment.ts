/**
 * Production environment configuration.
 * These values are replaced during production builds.
 */
export const environment = {
  production: true,
  // In production, you would typically inject this via server-side rendering
  // or use a backend proxy to avoid exposing the API key
  tmdbAccessToken:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTEyNjFkNTczMWI3YTljOWEwNjQyMGE5NzE4YmNkNyIsIm5iZiI6MTc2OTYzODMzNi42MDksInN1YiI6IjY5N2E4OWMwZGIzMmM3MDBkMmZjMTJjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cr7vySO005rW9nJORM_re_51cyOPg2VDnWycu6m6hFQ",
  useMockData: true, // Fallback to mock data if no token
};
