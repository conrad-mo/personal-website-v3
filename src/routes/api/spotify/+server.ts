import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN
} from '$env/static/private';

interface SpotifyArtist {
	name: string;
}

interface SpotifyTrack {
	id: string;
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
	if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
		console.error('Missing Spotify environment variables');
		throw new Error('Spotify credentials not configured');
	}

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

	if (!response.ok) {
		const errorText = await response.text();
		console.error('Spotify token error:', response.status, errorText);
		throw new Error(`Failed to get access token: ${response.status}`);
	}

	const data = await response.json();

	if (!data.access_token) {
		console.error('No access token in response:', data);
		throw new Error('No access token received');
	}

	return data.access_token;
}

export async function GET() {
	try {
		const accessToken = await getAccessToken();

		const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: { Authorization: `Bearer ${accessToken}` }
		});

		if (res.status === 204 || !res.ok) {
			return new Response(JSON.stringify({ playing: false }), {
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const text = await res.text();
		if (!text) {
			return new Response(JSON.stringify({ playing: false }), {
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const data: SpotifyCurrentlyPlaying = JSON.parse(text);

		if (!data || !data.is_playing || !data.item) {
			return new Response(JSON.stringify({ playing: false }), {
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const id = data.item.id;
		const song = data.item.name;
		const artist = data.item.artists.map((a) => a.name).join(', ');
		const cover = data.item.album.images[0]?.url || '';

		return new Response(JSON.stringify({ playing: true, song, artist, cover, id }), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Spotify API error:', error);
		return new Response(JSON.stringify({ playing: false }), {
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
