// Dependencies
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearch } from '../api/fetchSearch';

// Components
import { Results } from './Results';

// Custom Hook
import { useBreedList } from '../hooks/useBreedList';

// Constants
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

export const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);

  const results = useQuery(['search', requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get('animal') ?? '',
            location: formData.get('location') ?? '',
            breed: formData.get('breed') ?? '',
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select id="animal" name="animal" onChange={(e) => setAnimal(e.target.value)}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select disabled={!breeds?.length} id="breed" name="breed">
            <option />
            {breeds?.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};
