/**
 * Este arquivo pode ser apagado, ele é apenas um exemplo de template
 * para tela inicial!
 *
 */

import reactLogo from '@/assets/svg/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'

export function TemplateBoilerplate() {
	const [count, setCount] = useState(0)

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
			<div className="flex w-[400px] flex-col items-center rounded-md border px-4 py-8">
				<button
					className="rounded-md border bg-slate-100 px-4 py-2"
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
				<div className="mt-4 flex flex-col text-center">
					<span>Edit</span>
					<code>src/template-boilerplate.tsx</code>
					<span>and save to test HMR</span>
				</div>
			</div>
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
