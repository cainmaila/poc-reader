<script>
	import { base } from '$app/paths';

	let { data } = $props();
</script>

<div class="container">
	<h1>{data.book}</h1>
	<div class="chapters-list">
		{#each data.chapters as chapter (chapter.slug)}
			<a href="{base}/novel/{data.book}/{chapter.slug}" class="chapter-link">
				{chapter.title}
			</a>
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.chapters-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.chapter-link {
		display: block;
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s;
	}

	.chapter-link:hover {
		background-color: #f5f5f5;
		border-color: #333;
	}
</style>
