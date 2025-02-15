import axios from "axios";

const url = 'http://localhost:8000';

const livrosAPI = axios.create({baseURL: `${url}/livros`});

async function getLivros() {
	const response = await livrosAPI.get('/');
	return response.data;
}

export { getLivros }