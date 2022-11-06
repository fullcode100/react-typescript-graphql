// A mock function to mimic making an async request for data
export function fetchSearchString(searchString = 'Can') {
  return new Promise<{ data: string }>((resolve) =>
    setTimeout(() => resolve({ data: searchString }), 500)
  );
}
