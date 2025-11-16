<script>
	import Section from '$lib/components/Section.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import { onMount } from 'svelte';
	let currentlyPlaying = 'nothing';
	let coverImage = '';

	onMount(async () => {
		const res = await fetch('/api/spotify');
		const data = await res.json();

		if (data.playing) {
			currentlyPlaying = `${data.song} - ${data.artist}`;
			coverImage = data.cover;
		}
	});
</script>

<div class=" flex max-h-screen min-h-screen flex-col items-center justify-center">
	<div class="flex flex-col gap-8">
		<div class="flex flex-col gap-2 text-2xl text-gray-400">
			<h1 class="text-4xl font-bold">
				<span class="bg-linear-to-r from-[#FFD3A5] to-[#FFB6B0] bg-clip-text text-transparent">
					> Hi! I'm Conrad Mo
				</span>
			</h1>
			Computer science student at the University of Toronto
		</div>
		<div class="text-gray-400">
			I&apos;m a software engineer passionate about creating software that makes everyday life
			easier and more enjoyable.<br />
			I have a strong curiosity, love solving challenging problems, and enjoy collaborating with others
			to bring ideas to life.
		</div>

		<Section title="Things I do">
			<ListItem text="Eating food at new places" showIcon={true} />
			{#if currentlyPlaying !== 'nothing'}
				<ListItem text={`Listening to ${currentlyPlaying}`} underline={true} />
			{:else}
				<ListItem text="Listening to kpop" />
			{/if}
			<ListItem text="Playing piano" />
			<ListItem text="Going on 5km runs" />
		</Section>

		<Section title="Where I've been">
			<ListItem text="Shopify" showIcon={true} underline={true} />
			<ListItem text="Hack the Valley" showIcon={true} underline={true} />
			<ListItem text="Northern Labs" showIcon={true} underline={true} />
		</Section>
	</div>
</div>
