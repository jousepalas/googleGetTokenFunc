// const { auth } = require('google-auth-library');

// exports.getToken = async (req, res) => {
// 	try {
// 		const client = await auth.getClient();
// 		client.email = 'josemar@bikelabyrinth.com';
// 		console.log('🚀 ~ file: index.js:24 ~ exports.getToken= ~ client:', client);

// 		const token = await client.credentials.refreshToken();
// 		return res.status(200).send(`Token: ${token.access_token}`);
// 	} catch (error) {
// 		console.error('Error generating token:', error);
// 		return res.status(500).send('Error generating token');
// 	}
// };

const { auth } = require('google-auth-library');

exports.getToken = async (req, res) => {
	try {
		const client = await auth.getClient();

		client.on('tokens', (tokens) => {
			if (tokens.refresh_token) {
				// store the refresh_token in my database!
				console.log('Refresh Token: ', tokens.refresh_token);
			}
			console.log('Access Token: ', tokens.access_token);
		});
		const projectId = 'jobandpim';
		const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
		const result = await client.request({ url });
		console.log('🚀 ~ file: index.js:33 ~ exports.getToken= ~ result:', result);
		// client.email = 'josemar@bikelabyrinth.com';
		// console.log('🚀 ~ file: index.js:24 ~ exports.getToken= ~ client:', client);

		// const token = await client.generateIdToken();
		return res.status(200).send(`Token: ${result}`);
	} catch (error) {
		console.error('Error generating token:', error);
		return res.status(500).send('Error generating token');
	}
};

// const { auth } = require('google-auth-library');

// exports.getToken = async (req, res) => {
// 	try {
// 		const client = await auth.getClient();
// 		client.email = 'josemar@bikelabyrinth.com';

// 		console.log('🚀 ~ file: index.js:24 ~ exports.getToken= ~ client:', client);

// 		const token = await client.credentials.refreshToken();

// 		console.log('🚀 ~ file: index.js:30 ~ exports.getToken= ~ token:', token);

// 		return res.status(200).send(`Token: ${token.access_token}`);
// 	} catch (error) {
// 		console.log('🚀 ~ file: index.js:27 ~ exports.getToken= ~ error:', error);
// 		return res.status(500).send('Error generating token');
// 	}
// };

// async function genToken() {

// 	// Carregar as credenciais do ambiente
// 	const client = await auth.getClient();

// 	// Construir o payload (conteúdo) do token JWT
// 	const payload = {
// 		iss: client.email,
// 		sub: client.email,
// 		aud: 'https://www.googleapis.com/oauth2/v4/token',
// 		scope: 'https://www.googleapis.com/auth/cloud-platform',
// 	};

// 	// Gerar o token JWT
// 	const token = await client.sign(payload);

// 	// Retornar o token JWT
// 	return token;
// }

// const payload = {
// 	iss: client.email,
// 	sub: client.email,
// 	aud: 'https://www.googleapis.com/oauth2/v4/token',
// 	scope: 'https://www.googleapis.com/auth/cloud-platform',
// };
// const token = await client.sign(payload);

// return res.status(200).send(`Token: ${token}`);
// Exemplo de uso
// genToken()
//   .then((token) => {
//     console.log("Token: ",token);
//   })
//   .catch((error) => {
//     console.error('Erro ao gerar o token:', error);
//   });
