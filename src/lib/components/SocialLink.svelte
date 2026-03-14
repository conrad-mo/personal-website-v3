<script lang="ts">
	const { href = '', icon: Icon = null, label = '' } = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="group relative inline-flex items-end gap-1 pb-1"
>
	{#if Icon}
		<Icon
			class="h-4 w-4 self-end text-gray-400 transition-colors group-hover:text-[#FFB6B0] sm:h-5 sm:w-5"
		/>
	{/if}

	<span
		class="relative m-0 p-0 text-sm leading-none text-gray-400 transition-colors group-hover:text-[#FFB6B0] sm:text-base"
	>
		{label}
	</span>
</a>
