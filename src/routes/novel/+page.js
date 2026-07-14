import { getBooks } from '$lib/novels.js';

export const prerender = true;

export function load() {
	const books = getBooks();

	return {
		books
	};
}
