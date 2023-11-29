function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("true");
    }, 250);
  });
}

export default getResponseFromAPI;
