import { Header } from './components/Header';
import { useCharacters } from './hooks/useCharacters';
import { Characters } from './components/Characters';

function App() {
  const { characterData, loading } = useCharacters();

  return (
    <>
      <Header />
      <Characters characterData={characterData} loading={loading} />
    </>
  );
}

export default App;
