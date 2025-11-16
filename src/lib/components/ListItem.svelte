<script>
	import { ArrowUpRight } from '@lucide/svelte';
	const { text = '', showIcon = false, underline = false, url = '' } = $props();
</script>

<li>
	{#if url}
		<a
			href={url}
			class="group relative inline-flex items-center"
			target="_blank"
			rel="noopener noreferrer"
		>
			- {text}
			{#if showIcon}
				<ArrowUpRight size={16} color="#FFB6B0" />
			{/if}

			{#if underline}
				<span
					class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FFB6B0] transition-all duration-300 group-hover:w-full"
				></span>
			{/if}
		</a>
	{:else}
		<span class="group relative inline-flex items-center">
			- {text}
			{#if showIcon}
				<ArrowUpRight size={16} color="#FFB6B0" />
			{/if}

			{#if underline}
				<span
					class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FFB6B0] transition-all duration-300 group-hover:w-full"
				></span>
			{/if}
		</span>
	{/if}
</li>
