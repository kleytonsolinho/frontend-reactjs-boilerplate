import App from '@/app'
import { routes } from '@/shared/routes'
import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
	return (
		<Routes>
			<Route path={routes.HOME} element={<App />} />
		</Routes>
	)
}
