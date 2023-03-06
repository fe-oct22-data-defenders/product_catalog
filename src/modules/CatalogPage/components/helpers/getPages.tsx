function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export function getPages(
  firstPage: number,
  lastPage: number,
  currentPage: number,
  maxVisiblePages: number,
  pageReplacement: string,
): (string | number)[] {
  let pages = [];

  if (lastPage <= maxVisiblePages) {
    pages = getNumbers(firstPage, lastPage);
  } else if (currentPage < maxVisiblePages - 1) {
    pages = [
      ...getNumbers(firstPage, maxVisiblePages - 1),
      pageReplacement,
      lastPage,
    ];
  } else if (currentPage > lastPage - maxVisiblePages + 2) {
    pages = [
      firstPage,
      pageReplacement,
      ...getNumbers(lastPage - maxVisiblePages + 2, lastPage),
    ];
  } else {
    const middlePages = getNumbers(currentPage - 1, currentPage + 1);

    pages = [
      firstPage,
      pageReplacement,
      ...middlePages,
      pageReplacement,
      lastPage,
    ];
  }

  return pages;
}
