import { t } from 'i18next'

export class UnexpectedError extends Error {
	constructor() {
		super(t('error-http.UnexpectedError'))
	}
}
