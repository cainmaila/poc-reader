import { getChapter, getChapters, getBooks } from '$lib/novels.js';

export function entries() {
	const entries = [];
	getBooks().forEach((book) => {
		getChapters(book.slug).forEach((chapter) => {
			entries.push({
				book: book.slug,
				chapter: chapter.slug
			});
		});
	});
	return entries;
}

export const prerender = true;

export function load({ params }) {
	const chapter = getChapter(params.book, params.chapter);
	const chapters = getChapters(params.book);
	const currentIndex = chapters.findIndex((ch) => ch.slug === params.chapter);

	if (!chapter) {
		throw new Error('Chapter not found');
	}

	return {
		book: params.book,
		chapter: params.chapter,
		title: chapter.title,
		html: chapter.html,
		prevChapter: currentIndex > 0 ? chapters[currentIndex - 1].slug : null,
		nextChapter: currentIndex < chapters.length - 1 ? chapters[currentIndex + 1].slug : null
	};
}
