import { getChapters, getBooks } from '$lib/novels.js';

export function entries() {
	return getBooks().map((book) => ({
		book: book.slug
	}));
}

export const prerender = true;

export function load({ params }) {
	const chapters = getChapters(params.book);

	if (!chapters || chapters.length === 0) {
		throw new Error(`Book not found: ${params.book}`);
	}

	return {
		book: params.book,
		chapters
	};
}
