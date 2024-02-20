/**
 * Este arquivo pode ser apagado, ele é apenas um exemplo de template
 * para tela inicial!
 *
 */

import reactLogo from '@/assets/svg/react.svg'
import { CountBoilerplate } from '@/components/count-boilerplate'
import viteLogo from '/vite.svg'

export function TemplateBoilerplate() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center gap-y-8">
			<h1 className="text-4xl">BexUp Frontend Boilerplate</h1>
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
			<h2 className="text-2xl">Vite + React</h2>
			<CountBoilerplate />
			<p className="read-the-docs">
				Leia a documentação do boilerplate para mais informações clicando{' '}
				<a
					href="#"
					target="_blank"
					rel="noreferrer"
					className="text-blue-500 underline"
				>
					aqui
				</a>
			</p>
		</main>
	)
}
