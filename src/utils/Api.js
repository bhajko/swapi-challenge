export const fetchAllCharacters = async (nextUrl) => {
  const endpoint = nextUrl ?? 'https://swapi.dev/api/people/';
  const data = await (await fetch(endpoint)).json();
  return data;
};

export const fetchCharacter = async (name) => {
  const endpoint = `https://swapi.dev/api/people/?search=${name}`;
  const data = await (await fetch(endpoint)).json();
  return data;
};
