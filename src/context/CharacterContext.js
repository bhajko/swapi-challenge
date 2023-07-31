import { createContext, useState } from 'react';
import { fetchAllCharacters, fetchCharacter } from '../utils/Api';

export const CharacterContext = createContext(null);

export const CharacterContextProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetchAllCharacters();
      setCharacterData({
        characters: data.results,
        nextUrl: data.next,
        count: data.count,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getSingleData = async (name) => {
    try {
      setLoading(true);
      const data = await fetchCharacter(name);
      setCharacterData({
        characters: data.results,
        nextUrl: data.next,
        count: data.count,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const data = await fetchAllCharacters(characterData.nextUrl);
      setCharacterData({
        ...characterData,
        characters: [...characterData.characters, ...data.results],
        nextUrl: data.next,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    characterData,
    loading,
    getData,
    getSingleData,
    loadMore,
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
