function attributesAreEqual(attributeArray, product1, product2) {
  const notEqual = [];

  attributeArray.forEach((element) => {
    if (product1[element.id] !== product2[element.id]) {
      notEqual.push(false);
    }
  });

  return notEqual.length === 0;
}

export default attributesAreEqual;
