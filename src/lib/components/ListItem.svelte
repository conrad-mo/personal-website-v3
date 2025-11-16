<script>
	import { ArrowUpRight } from '@lucide/svelte';
	const { text = '', url = '' } = $props();
</script>

<li>
	{#if url}
		<a
			href={url}
			class="group relative inline-flex items-center wrap-break-word"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="break-all">- {text}</span>
			<ArrowUpRight
				size={16}
				color="#FFB6B0"
				class="ml-0.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
			/>
			<span
				class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FFB6B0] transition-all duration-300 group-hover:w-full"
			></span>
		</a>
	{:else}
		<span class="group relative inline-flex items-center">
			- {text}
		</span>
	{/if}
</li>
