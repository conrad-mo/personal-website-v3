<script>
	import Section from '$lib/components/Section.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
</script>

<div class=" my-32 flex min-h-screen flex-col items-center text-gray-400">
	<div class="flex flex-col gap-8 text-gray-400">
		<div class="flex flex-col gap-2 text-2xl text-gray-400">
			<h1 class="text-4xl font-bold">
				<span class="bg-linear-to-r from-[#FFD3A5] to-[#FFB6B0] bg-clip-text text-transparent">
					> Hi! I'm Conrad Mo
				</span>
			</h1>
			Computer science student at the University of Toronto
		</div>
		I'm a software engineer

		<Section title="Things I do">
			<ListItem text="Eating food at new places" showIcon={true} />
			<ListItem text="Listening to kpop" underline={true} />
			<ListItem text="Playing piano" />
			<ListItem text="Running 5ks" />
		</Section>

		<Section title="Where I've been">
			<ListItem text="Shopify" showIcon={true} underline={true} />
			<ListItem text="Hack the Valley" showIcon={true} underline={true} />
			<ListItem text="Northern Labs" showIcon={true} underline={true} />
		</Section>
	</div>
</div>
