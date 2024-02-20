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
    <main className="w-full min-h-screen flex items-center justify-center flex-col gap-y-8">
      <h1 className="text-4xl">BexUp Frontend Boilerplate</h1>
      <div className="flex w-full justify-center gap-6">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-12 h-12" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-12 h-12 animate-spin duration-1000" alt="React logo" />
        </a>
      </div>
      <h2 className="text-2xl">Vite + React</h2>
      <div className="border rounded-md px-4 py-8 w-[400px] flex flex-col items-center">
        <button className="bg-slate-100 border rounded-md px-4 py-2" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="mt-4 text-center flex flex-col">
          <span>Edit</span>
          <code>src/template-boilerplate.tsx</code>
          <span>and save to test HMR</span>
        </div>
      </div>
      <p className="read-the-docs">
        Leia a documentação do boilerplate para mais informações clicando {' '}
        <a href="#" target="_blank" className="text-blue-500 underline">aqui</a>
      </p>
    </main>
  )
}

