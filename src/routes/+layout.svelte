<script>
	import '../app.css';

	/** @type {import('@sveltejs/adapter-vercel').Config} */
	export const config = {
		runtime: 'nodejs20.x'
	};
</script>

<svelte:head>
	<title>Admin | Emperador Financiero</title>
</svelte:head>

<slot />
