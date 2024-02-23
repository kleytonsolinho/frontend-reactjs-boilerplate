import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import './language/i18n.ts'
import { AppRoutes } from './routes/routes.tsx'
import { TanstackQueryProvider } from './services/tanstack-query/provider.tsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TanstackQueryProvider>
			<BrowserRouter>
				<AppRoutes />
				<Toaster richColors position="top-right" />
			</BrowserRouter>
		</TanstackQueryProvider>
	</React.StrictMode>
)
