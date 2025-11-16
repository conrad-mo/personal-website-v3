<script lang="ts">
	import type { Component } from 'svelte';

	export let href: string = '';
	export let icon: Component;
	export let label: string = '';
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="group relative inline-flex items-end gap-1 pb-1"
>
	<svelte:component
		this={icon}
		size={20}
		class="self-end text-gray-400
		       transition-colors
		       group-hover:text-[#FFB6B0]"
	/>

	<span
		class="relative m-0 p-0 leading-none text-gray-400
		       transition-colors
		       group-hover:text-[#FFB6B0]"
	>
		{label}
	</span>
</a>
