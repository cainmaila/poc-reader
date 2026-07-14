<script>
	import { base } from '$app/paths';
</script>

<div class="container">
	<h1>小說閱讀器</h1>
	<p>歡迎來到小說閱讀平台</p>
	<a href="{base}/novel">進入閱讀</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		text-align: center;
		gap: 2rem;
	}

	h1 {
		font-size: 3rem;
		margin: 0;
	}

	p {
		font-size: 1.2rem;
		color: #666;
	}

	a {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background-color: #333;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		font-size: 1.1rem;
		transition: background-color 0.3s;
	}

	a:hover {
		background-color: #555;
	}
</style>
