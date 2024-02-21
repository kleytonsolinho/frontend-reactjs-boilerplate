/**
 * Este arquivo pode ser apagado, ele é apenas um exemplo de template
 * para tela inicial!
 *
 */

import reactLogo from '@/assets/svg/react.svg'
import { CountExample } from '@/components/count-example'
import { LanguageSelectExample } from '@/components/language-select-example'
import { useTranslation } from 'react-i18next'
import viteLogo from '/vite.svg'

export function TemplateExample() {
	const { t } = useTranslation()

	return (
		<main className="flex min-h-screen w-full items-center justify-center">
			<section className="flex h-auto max-w-7xl flex-col items-center justify-center gap-y-8 rounded-lg border p-10 shadow-sm">
				<LanguageSelectExample />
				<span
					data-cy="home-language-text"
					className="text-4xl font-bold text-blue-500"
				>
					{t('hello')}
				</span>
				<h1 data-cy="home-title" className="text-4xl font-bold">
					BexUp Frontend Boilerplate
				</h1>
				<div className="flex w-full justify-center gap-6">
					<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel="noreferrer">
						<img
							src={reactLogo}
							className="h-12 w-12 animate-spin duration-1000"
							alt="React logo"
						/>
					</a>
				</div>
				<h2 className="text-2xl font-semibold">Vite + React</h2>
				<CountExample />
				<p className="max-w-[300px] text-center">
					{t('readDocs')}
					<a
						href="#"
						target="_blank"
						rel="noreferrer"
						className="ml-1 text-blue-500 underline"
					>
						aqui
					</a>
				</p>
			</section>
		</main>
	)
}
