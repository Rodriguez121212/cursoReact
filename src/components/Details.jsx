import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { fetchPet } from '../api/fetchPet';

import { Carousel } from './Carousel';

export const Details = () => {
  const { id } = useParams();
  const results = useQuery(['details', id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const [pet] = results.data.pets;

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h2>{`Hi ${pet.name}`}</h2>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city} -${pet.state}`}</h2>
        <button>Adopt me {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};
