function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age,pronouns) {
   var mainCharacter = {
  name: name,
  age: age,
  pronouns: pronouns
  }
  return mainCharacter;
}

function saveReview(criticReviews,reviews) {
    if(reviews.length === 0){
      reviews.push(criticReviews);
    } else {
      for(var i = 0; i < reviews.length; i++) {
        if(reviews[i] != criticReviews){
          reviews.push(criticReviews)
          return reviews
        } else {
          return reviews;
        }
      }
    }
}

function calculatePageCount(bookTitle) {
 return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, bookType) {
  var pageCount = calculatePageCount(bookTitle)
  var bookObject = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: pageCount,
    genre: bookType
  }
  console.log(bookObject);
  return bookObject
}
function editBook() {
  
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}