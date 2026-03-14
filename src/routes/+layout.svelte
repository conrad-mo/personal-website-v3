<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import inter300 from '$lib/assets/fonts/inter-latin-300-normal.woff2?url';
	import inter400 from '$lib/assets/fonts/inter-latin-400-normal.woff2?url';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={inter300} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={inter400} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children?.()}
