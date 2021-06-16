function getTotalBooksCount(books) {
  return books.length;
}
/* Used .length to return the total books array.*/

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length
}
/* Used filter method to filter to create new array with books not borrowed length.*/

function getMostCommonGenres(books) {
  let genres = [];
  books.forEach((book) => {
    let genreIndex = genres.findIndex((genre) => {
      return genre.name === book.genre;
    });
    if (genreIndex !== -1) {
      genres[genreIndex].count++;
    } else {
      genres.push({ name: book.genre, count: 1 });
    }
  });
  genres.sort((a, b) => b.count - a.count);
  return genres.slice(0, 5);
} 
/* Used .forEach to execute function once for each element created new variable that 
holds the returned index of the first element in genre that satisfies the function .name === .genre.*/

function getMostPopularBooks(books) {
  let popularityBooks = [];
    books.forEach((book) => {
      popularityBooks.push({"name": book.title, "count": book.borrows.length});
    });
  popularityBooks.sort((a, b) => b.count - a.count);
 
  let numberItems=5;
  return popularityBooks.slice(0, numberItems);    
}

function getMostPopularAuthors(books, authors) {
  let authorCounts = books.reduce((acc, book) => {
if (!acc[book.authorId]) {
  acc[book.authorId] = book.borrows.length
} else {
  acc[book.authorId] += book.borrows.length
}
return acc;
  } ,{});
  return Object.keys(authorCounts)
    .sort((id1, id2) => authorCounts[id2] - authorCounts[id1])
    .slice(0, 5)
    .map((key) => {
    let author = authors.find((author) => {
      return author.id === parseInt(key);
    })
    let name = `${author.name.first} ${author.name.last}`
    return {name, count: authorCounts[key]}
  })
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
