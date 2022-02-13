const selectAttribute = (e) => {
  const elementClassList = e.target.classList;
  const elementsList = Array.from(
    document.querySelectorAll(
      `.${
        elementClassList[elementClassList.length - 1] === 'selected'
          ? elementClassList[elementClassList.length - 2]
          : elementClassList[elementClassList.length - 1]
      }`
    )
  );

  elementsList.forEach((el) => {
    if (e.target.id === el.id) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });
};

export default selectAttribute;
