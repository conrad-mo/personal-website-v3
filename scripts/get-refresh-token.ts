// Script to exchange Spotify authorization code for a refresh token
// Run this once with: bun run scripts/get-refresh-token.ts

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = 'https://conradmo.com/callback'; // or your local URL during development

// Paste your authorization code here (get it from visiting /spotify-auth and authorizing)
const AUTH_CODE = 'PASTE_YOUR_AUTH_CODE_HERE';

async function getRefreshToken() {
	const params = new URLSearchParams();
	params.append('grant_type', 'authorization_code');
	params.append('code', AUTH_CODE);
	params.append('redirect_uri', REDIRECT_URI);

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params.toString()
	});

	const data = await response.json();
	
	if (data.error) {
		console.error('❌ Error:', data.error);
		console.error('Description:', data.error_description);
		return;
	}

	console.log('\n✅ Success! Add this to your .env file:\n');
	console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
	console.log('\nYou can also use this access token for immediate testing:');
	console.log(`Access Token: ${data.access_token}`);
	console.log(`Expires in: ${data.expires_in} seconds\n`);
}

getRefreshToken();

