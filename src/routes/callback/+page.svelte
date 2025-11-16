<!-- src/routes/callback.svelte -->
<script>
	import { page } from '$app/stores';
	$: code = $page.url.searchParams.get('code');
	console.log('Authorization code:', code);
</script>

<h1>Spotify Auth Code</h1>
<p>Check the console for the code.</p>
