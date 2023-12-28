export const prerender = true
export async function load({ url }) {
	return {
		url: url.pathname
	}
}

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });