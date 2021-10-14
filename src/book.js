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
  reviews.push(criticReviews);
  console.log(reviews.length);
}



module.exports = {
  createTitle,
  buildMainCharacter,
   saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}