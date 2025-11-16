import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

interface SpotifyArtist {
	name: string;
}

interface SpotifyTrack {
	name: string;
	artists: SpotifyArtist[];
	album: {
		images: { url: string }[];
	};
}

interface SpotifyCurrentlyPlaying {
	is_playing: boolean;
	item: SpotifyTrack;
}

async function getAccessToken() {
	const params = new URLSearchParams();
	params.append('grant_type', 'refresh_token');
	params.append('refresh_token', SPOTIFY_REFRESH_TOKEN);

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization:
				'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params.toString()
	});

	const data = await response.json();
	return data.access_token;
}

export async function GET() {
	try {
		const accessToken = await getAccessToken();

		const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: { Authorization: `Bearer ${accessToken}` }
		});

		if (!res.ok) return new Response(JSON.stringify({ playing: false }));

		const data: SpotifyCurrentlyPlaying = await res.json();

		if (!data || !data.is_playing) return new Response(JSON.stringify({ playing: false }));

		const song = data.item.name;
		const artist = data.item.artists.map((a) => a.name).join(', ');
		const cover = data.item.album.images[0]?.url || '';

		return new Response(JSON.stringify({ playing: true, song, artist, cover }));
	} catch (error) {
		console.error('Spotify API error:', error);
		return new Response(JSON.stringify({ playing: false }));
	}
}
