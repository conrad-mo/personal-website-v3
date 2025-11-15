<script>
	let { title, children } = $props();
</script>

<div class="flex flex-col gap-4 text-gray-400">
	<h2 class="text-2xl font-medium text-gray-200">{title}</h2>
	<ul class="flex flex-col gap-2">
		{@render children()}
	</ul>
</div>
