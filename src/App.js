import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const BASE_URL = 'https://rickandmortyapi.com/api/';

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/character/?page=${page}`);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Dead':
        return 'red';
      case 'Alive':
        return 'green';
      case 'unknown':
        return 'gray';
      default:
        return 'transparent';
    }
  };

  if (error) {
    return <div>Error!</div>;
  }

  return (

      <div className="App">
        <header className="App-header">
          <h1>Rick and Morty characters</h1>
          <button onClick={() => setPage(page - 1)} disabled={page === 0}>Previous</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
          {isLoading && <p>Loading...</p>}
        {!isLoading && characters.length === 0 && <p>No characters found</p>}
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
              <p>Status: <span style={{ color: getStatusColor(character.status) }}>{character.status}</span></p>
              <p>Species: {character.species}</p>
            </li>
          ))}
          </ul>
            </header>
      </div>
  );
}

export default App;
