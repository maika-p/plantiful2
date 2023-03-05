/// <reference types="vitest" />

import analog from '@analogjs/platform';

import { defineConfig, splitVendorChunkPlugin } from 'astro/config';

// https://astro.build/config
import analogjsangular from '@analogjs/astro-angular';

// https://astro.build/config
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [analogjsangular()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    ssr: {
      noExternal: ['@angular/**'],
    },
    define: {
      ngDevMode: 'false',
      ngJitMode: 'false',
      ngI18nClosureMode: 'false',
    },
  },
});

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   publicDir: 'src/assets',
//   optimizeDeps: {
//     // include: [
//     //   '@angular/core',
//     //   '@angular/common',
//     //   '@angular/forms',
//     //   '@ngrx/store',
//     // ],
//   },
//   build: {
//     target: ['es2020'],
//   },
//   resolve: {
//     mainFields: ['module'],
//   },

//   plugins: [
//     analog({
//       // ssr: true,
//       // static: true,
//       // ssrBuildDir: './dist/apps/plantiful2/ssr',
//       entryServer: './src/main.server.ts',
//       vite: {
//         inlineStylesExtension: 'scss',
//         tsconfig: './tsconfig.json',
//       },
//       nitro: {
//         rootDir: './',
//         output: {
//           dir: './dist/apps/plantiful2/server',
//           publicDir: './dist/apps/plantiful2/server/public',
//         },
//         buildDir: './dist/apps/plantiful2/.nitro',
//         // prerender: {
//         //   routes: ['/'],
//         // },
//       },
//     }),

//     // }
//     // splitVendorChunkPlugin(),
//   ],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: ['src/test.ts'],
//     include: ['**/*.spec.ts'],
//   },
//   define: {
//     'import.meta.vitest': mode !== 'production',
//   },
// }));
