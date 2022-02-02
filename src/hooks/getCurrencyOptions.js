import { client, Query } from '@tilework/opus';

const getCurrencyOptions = async () => {
	client.setEndpoint('http://localhost:4000');

	const query = new Query('currencies{label, symbol}', true);

	const queryResult = await client.post(query);

	return queryResult;
};

export default getCurrencyOptions;
