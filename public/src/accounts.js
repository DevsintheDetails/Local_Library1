function findAccountById(accounts, id) {
  let found = accounts.find((account)=> account.id === id)
  return (!found) ? null: found;
}
/* Used find method to return the value of the first element in the array that satisfies the functon*/

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1:-1);
}
/* Used sort method to sort accounts by last name.*/

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  books.forEach((book)=> {
    book.borrows.forEach((transaction)=> {
      if(transaction.id === account.id) counter++;
    });
  });
  return counter;
  }

  
  function getBooksPossessedByAccount(account, books, authors) {
    const array = [];
books.forEach((book) => {
  const borrowed = book.borrows.filter(
    (borrow) => borrow.id === account.id && borrow.returned === false
    );
    if (borrowed.length > 0) {
      const found = authors.find((author) => book.authorId === author.id);
      array.push({
        id: book.id,
        title: book.title,
        genre: book.genre,
        authorId: book.authorId,
        author: found,
        borrows: borrowed,
      });
    }
});
return array;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
