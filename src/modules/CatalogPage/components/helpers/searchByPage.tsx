type SearchParams = {
  [key: string]: string | null,
};

export function searchByPage(
  currentParams: URLSearchParams,
  params: SearchParams,
): string {
  currentParams.set('page', '1');
  const newParams = new URLSearchParams(
    currentParams.toString(),
  );

  Object.entries(params)
    .forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else if (Array.isArray(value)) {
        newParams.delete(key);

        value.forEach(part => {
          newParams.append(key, part);
        });
      } else {
        newParams.set(key, value);
      }
    });

  return newParams.toString();
}
