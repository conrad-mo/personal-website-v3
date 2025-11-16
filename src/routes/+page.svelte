<script>
	import Section from '$lib/components/Section.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import { onMount } from 'svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import { FileUser, Linkedin, Github } from '@lucide/svelte';
	let currentlyPlaying = $state('nothing');
	let currentlyPlayingId = $state('');
	onMount(async () => {
		const res = await fetch('/api/spotify');
		const data = await res.json();

		if (data.playing) {
			currentlyPlayingId = data.id;
			currentlyPlaying = `${data.song} - ${data.artist}`;
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
			{#if currentlyPlaying !== 'nothing'}
				<ListItem
					text={`Listen to ${currentlyPlaying}`}
					showIcon={true}
					underline={true}
					url={`https://open.spotify.com/track/${currentlyPlayingId}`}
				/>
			{:else}
				<ListItem text="Listen to kpop" />
			{/if}
			<ListItem text="Eat food at new places" />
			<ListItem text="Play piano" />
			<ListItem text="Go on 5km runs" />
		</Section>

		<Section title="Where I've been">
			<ListItem
				text="Shopify"
				showIcon={true}
				underline={true}
				url={'https://www.shopify.com/ca'}
			/>
			<ListItem
				text="Hack the Valley"
				showIcon={true}
				underline={true}
				url={'https://hackthevalley.io/'}
			/>
			<ListItem
				text="Northern Labs"
				showIcon={true}
				underline={true}
				url={'https://www.northernlabs.ca/'}
			/>
		</Section>
		<hr class="border-b border-[#FFB6B0]" />
		<div class="flex items-end gap-4">
			<SocialLink href="/Conrad_Mo_resume.pdf" icon={FileUser} label="Resume" />

			<SocialLink href="https://www.linkedin.com/in/conradmo/" icon={Linkedin} label="LinkedIn" />

			<SocialLink href="https://github.com/conrad-mo" icon={Github} label="Github" />
		</div>
		<footer>
			<p class="text-gray-400">© 2025 Conrad Mo. All rights reserved.</p>
		</footer>
	</div>
</div>
