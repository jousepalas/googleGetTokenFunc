const { auth } = require('google-auth-library');

async function generateToken() {
	try {
		const client = await auth.getClient();
		console.log('🚀 ~ file: getToken.js:6 ~ generateToken ~ client:', client);
		const token = await client.getAccessToken();
		console.log(`Token: ${token.token}`);
	} catch (error) {
		console.error('Error generating token:', error);
	}
}

generateToken();
