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

  const handleSort = (sort) => {
    switch (sort) {
      case 'A-Z':
        setCharacterData({
          ...characterData,
          characters: characterData.characters.sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          ),
        });
        break;
      case 'Z-A':
        setCharacterData({
          ...characterData,
          characters: characterData.characters.sort((a, b) =>
            b.name.toLowerCase().localeCompare(a.name.toLowerCase())
          ),
        });
        break;
      case 'Male':
        setCharacterData({
          ...characterData,
          characters: characterData.characters.sort((a, b) =>
            b.gender.toLowerCase().localeCompare(a.gender.toLowerCase())
          ),
        });
        break;
      case 'Female':
        setCharacterData({
          ...characterData,
          characters: characterData.characters.sort((a, b) =>
            a.gender.toLowerCase().localeCompare(b.gender.toLowerCase())
          ),
        });
        break;
      default:
        console.error('this sort is not supported');
    }
  };

  const value = {
    characterData,
    loading,
    getData,
    getSingleData,
    loadMore,
    handleSort,
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
