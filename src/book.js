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

function calculatePageCount() {
  
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}