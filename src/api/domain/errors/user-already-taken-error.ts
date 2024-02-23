export class UserAlreadyTakenError extends Error {
	constructor() {
		super('Email ou nome de usuário já existe!')
	}
}
