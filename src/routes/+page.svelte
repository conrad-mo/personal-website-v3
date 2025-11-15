<script>
	import Icon from '@iconify/svelte';
</script>

<div class="mx-64 my-32 flex min-h-screen flex-col gap-8">
	<div class="flex flex-col gap-2 text-2xl text-gray-400">
		<h1 class="text-4xl font-bold">
			<!-- <span>👋</span> -->
			<span class="bg-linear-to-r from-[#FFD3A5] to-[#FFB6B0] bg-clip-text text-transparent">
				> Hi! I'm Conrad Mo
			</span>
		</h1>
		<!-- <h1
			class="bg-linear-to-r from-[#FFD3A5] to-[#FD6585] bg-clip-text text-5xl font-bold text-transparent"
		>
			👋 Hi! I'm Conrad Mo
		</h1> -->
		Computer science student at the University of Toronto
	</div>
	<div class="flex flex-col gap-4 text-gray-400">
		<h2 class="text-2xl font-medium text-gray-200">Things I do</h2>
		<ul class="flex flex-col gap-2">
			<li>
				<span class="inline-flex items-center">
					- Eating
					<Icon icon="lsicon:open-new-outline" />
				</span>
			</li>
			<li>- Piano</li>
		</ul>
	</div>
	<div class="flex flex-col gap-4 text-gray-400">
		<h2 class="text-2xl font-medium text-gray-200">Where I've been</h2>
		<ul class="flex flex-col gap-2">
			<li>
				<span class="inline-flex items-center">
					- Shopify
					<Icon icon="lsicon:open-new-outline" />
				</span>
			</li>
			<li>- Hack the Valley</li>
			<li>- Northern Labs</li>
		</ul>
	</div>
</div>
