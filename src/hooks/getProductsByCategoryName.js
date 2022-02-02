import { client, Query } from '@tilework/opus';

const getProductsByCategoryName = async (categoryName) => {
	client.setEndpoint('http://localhost:4000');

	const query = new Query(
		`category(input:{title:"${categoryName}"}){
			name, 
			products{
				id, 
				name, 
				inStock, 
				attributes{name}, 
				gallery, 
				prices{
					currency{label}, 
					amount
				}
			}
		}`,
		true
	);

	const queryResult = await client.post(query);

	return queryResult;
};

export default getProductsByCategoryName;
