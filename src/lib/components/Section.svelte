<script>
	export let title = '';
</script>

<div class="flex flex-col gap-4 text-gray-400">
	<h2 class="text-2xl font-medium text-gray-200">{title}</h2>
	<ul class="flex flex-col gap-2">
		<slot />
	</ul>
</div>
