import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
  define: {
    global: 'window',
    'process.env.NODE_ENV': '"development"',
    'process.env.CANISTER_ID': '"bkyz2-fmaaa-aaaaa-qaaaq-cai"'
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});