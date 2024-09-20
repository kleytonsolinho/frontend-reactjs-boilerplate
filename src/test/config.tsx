import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

function renderWithProviders(component: React.ReactNode, options?: any) {
	return render(component, {
		...options,
		wrapper: ({ children }) => {
			return (
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>{children}</BrowserRouter>
				</QueryClientProvider>
			)
		},
	})
}

function simpleRender(component: React.ReactNode, options?: any) {
	return render(component, options)
}

export { render, screen, fireEvent, waitFor } from '@testing-library/react'
export { renderWithProviders, simpleRender }
