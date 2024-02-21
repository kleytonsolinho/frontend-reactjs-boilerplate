/**
 * Este arquivo pode ser apagado, ele é apenas um exemplo de template
 * para tela inicial!
 *
 */

import { useState } from 'react'
import { Button } from '../ui/button'

export function CountExample() {
	const [count, setCount] = useState(0)

	return (
		<div className="flex w-[400px] flex-col items-center rounded-md border px-4 py-8">
			<Button
				data-cy="home-button-count"
				className="rounded-md border bg-slate-100 px-4 py-2 text-black hover:text-white"
				onClick={() => setCount((count) => count + 1)}
			>
				count is {count}
			</Button>
			<div className="mt-4 flex flex-col text-center">
				<span>Edit</span>
				<code>src/template-boilerplate.tsx</code>
				<span>and save to test HMR</span>
			</div>
		</div>
	)
}
