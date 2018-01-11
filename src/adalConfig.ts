import { AuthenticationContextOptions } from 'adal-angular';

const adalConfig: AuthenticationContextOptions = {
  tenant: 'lyricwlddev.onmicrosoft.com',
  clientId: 'd3b731ae-7b20-4723-b3e5-2935972dd5a1',
  extraQueryParameter: 'nux=1',
  endpoints: {
    '/api/': 'https://lyricwlddev.onmicrosoft.com/d36f1a45-1dde-4539-b3d7-d31b6a4a84ab'
  },
  postLogoutRedirectUri: window.location.origin,
  redirectUri: 'https://localhost:61241/auth',
  cacheLocation: 'sessionStorage'
};

export default adalConfig;
