import getProductById from '../database/getProductById';

async function productListWithId(categoryInformation) {
  const productArr = categoryInformation.category.products.map((product) =>
    getProductById(product.id)
  );
  const productArrResolved = await Promise.all(productArr);

  const treatedProductList = categoryInformation.category.products.map((product, index) => ({
    id: product.id,
    ...productArrResolved[index].product,
  }));

  return treatedProductList;
}

export default productListWithId;
