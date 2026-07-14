<script>
	import { base } from '$app/paths';

	let { data } = $props();

	let readerEl = $state(null);
	let canGoPrev = $state(false);
	let canGoNext = $state(true);

	$effect(() => {
		if (!readerEl) return;
		readerEl.scrollLeft = 0;
		updatePageNavState();
	});

	function updatePageNavState() {
		if (!readerEl) return;
		const tolerance = 1;
		canGoPrev = readerEl.scrollLeft > tolerance;
		canGoNext = readerEl.scrollLeft < readerEl.scrollWidth - readerEl.clientWidth - tolerance;
	}

	function turnPage(direction) {
		if (!readerEl) return;
		const pageWidth = readerEl.clientWidth;
		const newScrollLeft = readerEl.scrollLeft + direction * pageWidth;
		readerEl.scrollTo({ left: newScrollLeft, behavior: 'instant' });
		updatePageNavState();
	}
</script>

<div class="reader-container">
	<div class="header">
		<h1>{data.title}</h1>
		<div class="nav-buttons">
			{#if data.prevChapter}
				<a href="{base}/novel/{data.book}/{data.prevChapter}" class="nav-btn">← 上一章</a>
			{/if}
			<a href="{base}/novel/{data.book}" class="nav-btn nav-center">目錄</a>
			{#if data.nextChapter}
				<a href="{base}/novel/{data.book}/{data.nextChapter}" class="nav-btn">下一章 →</a>
			{/if}
		</div>
	</div>

	<div class="page-nav">
		<button class="nav-btn" disabled={!canGoPrev} onclick={() => turnPage(-1)}>
			◀ 上一頁
		</button>
		<button class="nav-btn" disabled={!canGoNext} onclick={() => turnPage(1)}>
			下一頁 ▶
		</button>
	</div>

	<div class="reader" bind:this={readerEl} onscroll={updatePageNavState}>
		<div class="content">
			{@html data.html}
		</div>
	</div>

	<div class="page-nav">
		<button class="nav-btn" disabled={!canGoPrev} onclick={() => turnPage(-1)}>
			◀ 上一頁
		</button>
		<button class="nav-btn" disabled={!canGoNext} onclick={() => turnPage(1)}>
			下一頁 ▶
		</button>
	</div>

	<div class="footer">
		<div class="nav-buttons">
			{#if data.prevChapter}
				<a href="{base}/novel/{data.book}/{data.prevChapter}" class="nav-btn">← 上一章</a>
			{/if}
			<a href="{base}/novel/{data.book}" class="nav-btn">目錄</a>
			{#if data.nextChapter}
				<a href="{base}/novel/{data.book}/{data.nextChapter}" class="nav-btn">下一章 →</a>
			{/if}
		</div>
	</div>
</div>

<style>
	.reader-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: hidden;
	}

	.header {
		padding: 1.5rem;
		border-bottom: 1px solid #ddd;
		background-color: #f9f9f9;
	}

	.header h1 {
		margin: 0 0 1rem 0;
		text-align: center;
	}

	.nav-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.nav-btn {
		display: inline-block;
		padding: 0.5rem 1rem;
		background-color: #333;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		transition: background-color 0.3s;
	}

	.nav-btn:hover {
		background-color: #555;
	}

	.nav-center {
		background-color: #666;
	}

	.reader {
		flex: 1;
		overflow: hidden;
		padding: 2rem;
	}

	.content {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		line-height: 1.8;
		font-size: 1.1rem;
	}

	.content :global(p) {
		margin: 1rem 0;
	}

	.page-nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		padding: 1rem;
		flex: 0 0 auto;
	}

	.nav-btn:disabled {
		background-color: #999;
		cursor: not-allowed;
		opacity: 0.6;
	}

	.nav-btn:disabled:hover {
		background-color: #999;
	}

	.footer {
		padding: 1.5rem;
		border-top: 1px solid #ddd;
		background-color: #f9f9f9;
	}

	@media (max-width: 768px) {
		.page-content {
			writing-mode: horizontal-tb;
			display: block;
		}

		.content {
			writing-mode: horizontal-tb;
			font-size: 1rem;
			flex: none;
		}

		.page-nav {
			display: none;
		}

		.reader {
			overflow-y: auto;
			overflow-x: hidden;
		}
	}
</style>
