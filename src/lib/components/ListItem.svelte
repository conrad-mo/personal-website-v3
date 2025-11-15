<script>
	import { ArrowUpRight } from '@lucide/svelte';
	export let text = '';
	export let showIcon = false;
	export let underline = false;
</script>

<li>
	<span class="group relative inline-flex items-center">
		- {text}
		{#if showIcon}
			<ArrowUpRight size={16} />
		{/if}

		{#if underline}
			<span
				class="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-400 transition-all duration-300 group-hover:w-full"
			></span>
		{/if}
	</span>
</li>
