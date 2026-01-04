import { defineConfig, loadEnv, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const config: UserConfig = {
    plugins: [react({ babel: { plugins: ['babel-plugin-react-compiler'] } })],

    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@pages': resolve(__dirname, './src/pages'),
        '@hooks': resolve(__dirname, './src/hooks'),
        '@stores': resolve(__dirname, './src/stores'),
        '@utils': resolve(__dirname, './src/utils'),
        '@services': resolve(__dirname, './src/services'),
        '@styles': resolve(__dirname, './src/styles'),
        '@assets': resolve(__dirname, './src/assets'),
        '@types': resolve(__dirname, './src/types'),
      },
    },

    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName:
          mode === 'production' ? '[hash:base64:8]' : '[name]__[local]--[hash:base64:5]',
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables" as *;`,
        },
      },
    },

    server: {
      port: 3300,
      open: true,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:8000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },

    build: {
      target: 'es2022',
      outDir: 'dist',
      sourcemap: mode !== 'production',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              // 将大型依赖分离打包
              if (id.includes('antd') || id.includes('@ant-design')) {
                return 'antd';
              }
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'react';
              }
              if (id.includes('framer-motion')) {
                return 'framer-motion';
              }
              if (id.includes('lucide-react')) {
                return 'icons';
              }
              return 'vendor';
            }
          },
        },
        plugins: [
          env.ANALYZE === 'true' &&
            visualizer({
              open: true,
              gzipSize: true,
              brotliSize: true,
              filename: 'dist/stats.html',
            }),
        ].filter(Boolean),
      },
      chunkSizeWarningLimit: 1000,
    },

    preview: {
      port: 4173,
      open: true,
    },
  };

  return config;
});
