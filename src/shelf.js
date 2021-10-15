function shelfBook(bookName, shelf) {
  if(shelf.length <= 2){
    shelf.unshift(bookName)
  }
  return shelf
}

function unshelfBook(bookName, shelfName) {

  for(var i = 0; i < shelfName.length; i ++) {
    if(shelfName[i].title === bookName) {
      shelfName.splice(i, 1)
    }
  } 
} 
module.exports = {
   shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};