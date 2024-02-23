import { ICookieClient } from '../cookie/cookie-client'
import { NookiesCookieClient } from '../cookie/nookies/nookies-cookie-client'

export function makeCookieClient(): ICookieClient {
	return new NookiesCookieClient()
}
