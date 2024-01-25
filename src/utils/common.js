const getRandomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);


export { getRandomArrayElement, getRandomNumber, updateItem };
