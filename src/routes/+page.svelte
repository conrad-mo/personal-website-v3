<script>
	import Section from '$lib/components/Section.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
</script>

<div class="mx-64 my-32 flex min-h-screen flex-col gap-8">
	<div class="flex flex-col gap-2 text-2xl text-gray-400">
		<h1 class="text-4xl font-bold">
			<span class="bg-linear-to-r from-[#FFD3A5] to-[#FFB6B0] bg-clip-text text-transparent">
				> Hi! I'm Conrad Mo
			</span>
		</h1>
		Computer science student at the University of Toronto
	</div>

	<Section title="Things I do">
		<ListItem text="Eating" showIcon={true} underline={true} />
		<ListItem text="Piano" />
	</Section>

	<Section title="Where I've been">
		<ListItem text="Shopify" showIcon={true} underline={true} />
		<ListItem text="Hack the Valley" />
		<ListItem text="Northern Labs" />
	</Section>
</div>
