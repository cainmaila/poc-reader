<script>
	import { getBooks, getChapters } from '$lib/novels.js';
</script>

<!-- prerender links -->
{#each getBooks() as book (book.slug)}
	<a href="/novel/{book.slug}" style="display: none" data-sveltekit-preload-data="tap">
		{book.title}
	</a>
	{#each getChapters(book.slug) as chapter (chapter.slug)}
		<a href="/novel/{book.slug}/{chapter.slug}" style="display: none" data-sveltekit-preload-data="tap">
			{chapter.title}
		</a>
	{/each}
{/each}

<slot />
