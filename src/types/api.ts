export const dataCatFact = async () => {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data.fact; 
  } catch (error) {
    console.log("error sad cat");
    return null;
  }
};

export const dataCatImage = async () => {
  try {
    const response = await fetch('https://cataas.com/cat');
    return response.url;
  } catch (error) {
    console.log("error");
    return null;
  }
};
