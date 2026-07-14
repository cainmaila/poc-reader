<script>
	import { base } from '$app/paths';

	let { data } = $props();
</script>

<div class="container">
	<h1>小說</h1>
	<div class="books-grid">
		{#each data.books as book (book.slug)}
			<a href="{base}/novel/{book.slug}" class="book-card">
				<h2>{book.title}</h2>
			</a>
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.books-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.book-card {
		display: block;
		padding: 1.5rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s;
	}

	.book-card:hover {
		border-color: #333;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.book-card h2 {
		margin: 0;
		font-size: 1.3rem;
	}
</style>
