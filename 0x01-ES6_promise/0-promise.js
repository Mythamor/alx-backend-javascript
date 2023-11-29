function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('true');
    }, 250);
  });
}

export default getResponseFromAPI;
