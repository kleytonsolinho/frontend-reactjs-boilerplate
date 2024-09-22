import { t } from 'i18next'

export class UserAlreadyTakenError extends Error {
	constructor() {
		super(t('error-http.UserAlreadyTakenError'))
	}
}
