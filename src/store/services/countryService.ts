// A mock function to mimic making an async request for data
export function fetchSearchString(searchString = 'Can') {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({data: searchString}), 500),
  );
}

export function fetchCountries() {
  const resourceBase = 'https://countries.trevorblades.com';
  const myHeaders = new Headers();
   myHeaders.append('Content-Type', 'application/json');
  const options: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({
      query: `{continents{code,name}}`,
    }),
  };
  return fetch(resourceBase, options);
}
