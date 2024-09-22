/**
 * Este arquivo pode ser apagado, ele é apenas um exemplo de template
 * para tela inicial!
 *
 */

import reactLogo from '@/assets/svg/react.svg'
import { CountExample } from '@/components/count-example'
import { LanguageSelectExample } from '@/components/language-select-example'
import { useCountExample } from '@/stores/use-count-example'
import { useTranslation } from 'react-i18next'
import viteLogo from '/vite.svg'
// import { usePostUserCleanArch } from '@/api/presentation/queries/users/use-post-user'
import { LoadingSpinner } from '@/components/loading-spinner-example'
import { usePostUserService } from '@/api2/@queries/users/use-post-user'

export function TemplateExample() {
	const { t } = useTranslation()
	const { count, increaseCount } = useCountExample()

	// const { mutate: postUser, isPending: isPostUserLoading } =
	// 	usePostUserCleanArch()

	const { mutate: postUser, isPending: isPostUserLoading } =
		usePostUserService()

	const handlePostUser = () => {
		postUser({
			name: 'Teste',
			email: 'teste@teste.com.br',
			password: '123456',
			response_status_code: 500,
		})
	}

	return (
		<main className="flex min-h-screen w-full items-center justify-center">
			<section className="flex h-auto max-w-7xl flex-col items-center justify-center gap-y-8 rounded-lg border p-10 shadow-sm">
				<button
					type="button"
					className="text-md rounded-md border bg-slate-100 px-4 py-1 hover:bg-slate-200"
					onClick={handlePostUser}
					disabled={isPostUserLoading}
				>
					{isPostUserLoading ? <LoadingSpinner /> : t('home.createUser')}
				</button>
				<LanguageSelectExample />
				<span
					data-cy="home-language-text"
					className="text-4xl font-bold text-blue-500"
				>
					{t('home.hello')}
				</span>
				<h1 data-cy="home-title" className="text-4xl font-bold">
					BexUp Frontend Boilerplate
				</h1>
				<div className="flex w-full justify-center gap-6">
					<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
						<img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank" rel="noreferrer">
						<img src={reactLogo} className="h-12 w-12" alt="React logo" />
					</a>
				</div>
				<h2 className="text-2xl font-semibold">Vite + React</h2>
				<CountExample count={count} handleClick={increaseCount} />
				<p className="max-w-[300px] text-center">
					{t('home.readDocs')}
					<a
						href="#"
						target="_blank"
						rel="noreferrer"
						className="ml-1 text-blue-500 underline"
					>
						{t('home.clickHere')}
					</a>
				</p>
			</section>
		</main>
	)
}
