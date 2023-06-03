export const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRest = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRest.ok) {
    throw new Error(`details/${id} fetch not OK`);
  }

  return apiRest.json();
};
