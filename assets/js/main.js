
var container = document.getElementById("display-food");
var introduction = document.getElementById("intro-text");



function getFood(params) {
  introduction.style.display = "none"
  container.style.display = "block"
  getDetails();
}

function getDetails() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(data => {
    console.log(data)   //This is just a check to show that our code runs and it returns our data
    display =
    `
    <span id="another">You dont like this meal?</span>
    <button id="getAnother" onclick="getDetails()">Get another meal</button>
    <h1>${data.meals[0].strMeal}</h1>
      <img src="${data.meals[0].strMealThumb}">
      <h3>Instructions</h3>
      <p>${data.meals[0].strInstructions}</p>
      <h3>Ingredients</h3>
      <ol>
        <li>${data.meals[0].strIngredient1} - ${data.meals[0].strMeasure1}</li>
        <li>${data.meals[0].strIngredient2} - ${data.meals[0].strMeasure2}</li>
        <li>${data.meals[0].strIngredient3} - ${data.meals[0].strMeasure3}</li>
        <li>${data.meals[0].strIngredient4} - ${data.meals[0].strMeasure4}</li>
        <li>${data.meals[0].strIngredient5} - ${data.meals[0].strMeasure5}</li>
        <li>${data.meals[0].strIngredient6} - ${data.meals[0].strMeasure6}</li>
     </ol>
      <label for="video">Watch Tutorial video</label>
      <a id="youtube" href="${data.meals[0].strYoutube}">${data.meals[0].strYoutube}</a>
    `
    container.innerHTML = display
  })
  // Incase if there is an error, this will show the error in the console
.catch(err => console.log(err))
}