import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { CharacterContextProvider } from './context/CharacterContext';
import { Search } from './components/Search';

function App() {
  return (
    <CharacterContextProvider>
      <Header />
      <Search />
      <Characters />
    </CharacterContextProvider>
  );
}

export default App;
