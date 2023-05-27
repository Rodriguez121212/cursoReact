import { Pet } from './Pet';

export const Results = ({ pets }) => (
  <div className="search">
    {!pets.length ? (
      <h1>Not Pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          key={pet.id}
          location={`${pet.city}, ${pet.state}`}
          images={pet.images}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))
    )}
  </div>
);
