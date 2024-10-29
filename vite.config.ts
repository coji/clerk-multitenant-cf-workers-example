import { defineConfig } from 'vite'
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin,
} from '@remix-run/dev'
import tsconfigPaths from 'vite-tsconfig-paths'
import { getLoadContext } from './load-context'

declare module '@remix-run/server-runtime' {
  // or cloudflare, deno, etc.
  interface Future {
    v3_singleFetch: true
  }
}

export default defineConfig({
  plugins: [
    cloudflareDevProxyVitePlugin({
      getLoadContext,
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true,
        unstable_optimizeDeps: true,
      },
    }),
    tsconfigPaths(),
  ],
  ssr: {
    resolve: {
      conditions: ['workerd', 'worker', 'browser'],
    },
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  build: {
    minify: true,
  },
})
