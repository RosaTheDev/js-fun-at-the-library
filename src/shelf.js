function shelfBook(bookName, shelf) {
  if(shelf.length <= 2){
    shelf.unshift(bookName)
  }
  return shelf
}

function unshelfBook() {
  
} 
module.exports = {
   shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};