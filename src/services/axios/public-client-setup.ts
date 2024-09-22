import axios from 'axios'

const API_URI = `${import.meta.env.VITE_API_URL}`

export const publicClientSetup = () => {
	const api = axios.create({
		baseURL: API_URI,
	})

	return api
}
