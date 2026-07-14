import { marked } from 'marked';

const chapters = import.meta.glob('/novel/*/*.md', { query: '?raw', import: 'default', eager: true });

function parseChapters() {
	const books = {};

	for (const [path, content] of Object.entries(chapters)) {
		const match = path.match(/\/novel\/([^/]+)\/(.+?)\.md$/);
		if (!match) continue;

		const [, book, filename] = match;
		if (!books[book]) books[book] = [];

		const lines = content.split('\n');
		const title = lines[0].replace(/^#\s+/, '').trim();
		const body = lines.slice(1).join('\n');
		const html = marked.parse(body);

		books[book].push({
			slug: filename,
			title,
			html,
			filename
		});
	}

	// Sort chapters by filename (natural Chinese numeric order)
	for (const book in books) {
		books[book].sort((a, b) => a.filename.localeCompare(b.filename));
	}

	return books;
}

const booksData = parseChapters();

export function getBooks() {
	return Object.keys(booksData).map((book) => ({
		slug: book,
		title: book
	}));
}

export function getChapters(book) {
	return booksData[book] || [];
}

export function getChapter(book, slug) {
	const chapter = booksData[book]?.find((ch) => ch.slug === slug);
	return chapter ? { title: chapter.title, html: chapter.html } : null;
}

export function getChapterIndex(book, slug) {
	const chapters = booksData[book] || [];
	return chapters.findIndex((ch) => ch.slug === slug);
}
