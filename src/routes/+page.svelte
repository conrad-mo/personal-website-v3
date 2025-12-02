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

<main class="flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-6 md:px-8">
	<div class="flex w-full max-w-170 flex-col gap-6">
		<div class="flex flex-col text-lg text-gray-200 sm:gap-2 sm:text-xl md:text-2xl">
			<h1 class="text-2xl font-bold sm:text-3xl md:text-4xl">
				<span class="bg-linear-to-r from-[#FFD3A5] to-[#FFB6B0] bg-clip-text text-transparent">
					> Hi! I'm Conrad Mo
				</span>
			</h1>
			Computer science student at the University of Toronto
		</div>
		<div class="text-sm text-gray-400 sm:text-base">
			I&apos;m a software engineer passionate about creating software that makes everyday life
			easier and more enjoyable.<br />
			I have a strong curiosity, love solving challenging problems, and enjoy collaborating with others
			to bring ideas to life.
		</div>

		<Section title="Things I do">
			{#if currentlyPlaying !== 'nothing'}
				<ListItem
					text={`Listen to ${currentlyPlaying}`}
					url={`https://open.spotify.com/track/${currentlyPlayingId}`}
				/>
			{:else}
				<ListItem
					text="Listen to kpop"
					url={`https://open.spotify.com/user/ag8c2igijt3qza4nu6j7n7vp9?si=a4095c84eacf46d9`}
				/>
			{/if}
			<ListItem text="Eat food at new places" url={`https://beliapp.co/app/conradmo`} />
			<ListItem text="Play piano" />
			<ListItem text="Go on 5km runs" />
		</Section>

		<Section title="Where I've been">
			<ListItem text="Shopify" url={'https://www.shopify.com/ca'} />
			<ListItem text="Hack the Valley" url={'https://hackthevalley.io/'} />
			<ListItem text="Northern Labs" url={'https://www.northernlabs.ca/'} />
		</Section>
		<hr class="border-b border-[#FFB6B0]" />
		<div class="flex flex-wrap items-end gap-3 sm:gap-4">
			<SocialLink href="/Conrad_Mo_resume.pdf" icon={FileUser} label="Resume" />

			<SocialLink href="https://www.linkedin.com/in/conradmo/" icon={Linkedin} label="LinkedIn" />

			<SocialLink href="https://github.com/conrad-mo" icon={Github} label="Github" />
		</div>
		<footer>
			<p class="text-xs text-gray-400 sm:text-sm">© 2025 Conrad Mo. All rights reserved.</p>
		</footer>
	</div>
</main>
