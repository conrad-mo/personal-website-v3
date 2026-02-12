<script>
	let { title, children } = $props();
</script>

<div class="flex flex-col gap-2 text-gray-400">
	<h2 class="text-xl font-medium text-gray-200">{title}</h2>
	<ul class="flex flex-col gap-1.5 text-sm sm:gap-2 sm:text-base">
		{@render children()}
	</ul>
</div>
