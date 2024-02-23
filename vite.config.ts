/// <reference types="vitest" />

import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config'

const vitestConfig: VitestUserConfigInterface = {
	test: {
		environment: 'jsdom',
		setupFiles: ['./src/vitest.setup.ts'],
		include: ['./src/**/*.spec.{js,ts,jsx,tsx}'],
		exclude: ['node_modules', 'build', 'coverage', 'cypress'],
		coverage: {
			reporter: ['text', 'html'],
			exclude: [
				'src/**.{js,ts,jsx,tsx}',
				'postcss.config.js',
				'tailwind.config.js',
				'.eslintrc.cjs',
				'.dependency-cruiser.cjs',
				'src/styles/**',
				'src/types/**',
				'src/assets/**',
				'src/shared/**',
				'src/components/ui/**',
				'src/api/queries/**',
				'src/language/**',
				'src/services/**',
				'src/api/presentation/**',
				'src/api/domain/entities/**',
				'src/api/domain/usecases/factories/**',
				'src/api/infra/gateways/**',
				'src/api/infra/dtos/**',
			],
		},
	},
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), viteTsconfigPaths(), svgrPlugin(), viteCommonjs()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'build',
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	test: vitestConfig.test,
	server: {
		open: true,
		port: 3000,
		host: true,
	},
	define: {
		'process.env': {},
	},
})
