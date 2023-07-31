import { useEffect, useState } from 'react';
import { fetchAllCharacters } from '../utils/Api';

export const useCharacters = () => {
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

  useEffect(() => {
    getData();
  }, []);

  return { characterData, loading };
};
