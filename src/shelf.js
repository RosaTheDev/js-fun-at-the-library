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

function listTitles(shelfName) {
  var newArray = [];
  for(var i = 0; i < shelfName.length; i++) {
    newArray.push(shelfName[i].title)
  }
  return newArray.join(', ')
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};