import { client, Query } from '@tilework/opus';

const getMenuOptions = async () => {
	client.setEndpoint('http://localhost:4000');

	const query = new Query('categories{name}', true);

	const queryResult = await client.post(query);

	return queryResult;
};

export default getMenuOptions;
