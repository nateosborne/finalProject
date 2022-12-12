var obj = {
  Recipes: [
    { 
      image: "recipe-pizza.jpg",
      name: "Supreme Pizza",
      description: "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
      time: "1h 24min",
      servings: "4 servings",
      ingredients: [
        {
          ingredient1: "1/4 batch pizza dough",
          ingredient2: "2 tablespoons Last-Minute Pizza Sauce",
          ingredient3: "10 slices pepperoni",
          ingredient4: "1 cup cooked and crumbled Italian sausage",
          ingredient5: "2 large mushrooms, sliced",
          ingredient6: "1/4 bell pepper, sliced",
          ingredient7: "1 tablespoon sliced black olives",
          ingredient8: "1 cup shredded mozzarella cheese",
          

        },
      ],
      instructions: [
        {
          instruction1: "",
          instruction2: "",
          instruction3: "",
        },
      ],
    },
    { 
      image: "recipe-burger.jpg",
      name: "Classic Burger",
      description: `Sink your teeth into a delicious
      restaurant-style, hamburger recipe 
      made from lean beef. Skip the 
      prepackaged patties and take the 
      extra time to craft up your own, 
      and that little extra effort will be 
      worth it.`,
      time: "30 min",
      servings: "4 servings",
      ingredients: [
        {
          ingredient1: "",
          ingredient2: "",
          ingredient3: "",
        },
      ],
      instructions: [
        {
          instruction1: "",
          instruction2: "",
          instruction3: "",
        },
      ],
    },
    { 
      image: "recipe-pilaf.jpg",
      name: "Chicken Biryani",
      description: `Chicken Biryani is a bold and 
      flavorful Indian dish with crazy 
      tender bites of chicken with 
      bell peppers in a deliciously 
      spiced and fragrant rice.`,
      time: "1h 15min",
      servings: "4 servings",
      ingredients: [
        {
          ingredient1: "",
          ingredient2: "",
          ingredient3: "",
        },
      ],
      instructions: [
        {
          instruction1: "",
          instruction2: "",
          instruction3: "",
        },
      ],
    },
    { 
      image: "recipe-chowmein.jpg",
      name: "Ch. Chow Mein",
      description: `A great Chow Mein comes 
      down to the sauce - it takes 
      more than just soy sauce and 
      sugar! Jam packed with a 
      surprising amount of hidden 
      vegetables, customize this 
      Chicken Chow Mein recipe 
      using your protein of choice!`,
      time: "20 min",
      servings: "4 servings",
      ingredients: [
        {
          ingredient1: "",
          ingredient2: "",
          ingredient3: "",
        },
      ],
      instructions: [
        {
          instruction1: "",
          instruction2: "",
          instruction3: "",
        },
      ],
    },
  ]
}
recipe-burger.jpg
function populateRecipes(){
  $.each(obj.Recipes, (idx, recipe) => {
    $(".yrRecipesContainer").append(
      ` <div class="yrRecCardContent">
      <div class="yrRecipeCard">
          <img class="recImg" src="assets/images/${recipe.image}" alt="your recipe image">
         
          <div class="yrRecDesc">
              <h2><a href="#viewRecipe">${recipe.name}</a></h2>
              <p>
              ${recipe.description}
              </p>
              <div class="time">
                  <img src="assets/icons/time.svg" alt="timerIcon"/>
                  <p>${recipe.time}</p>
              </div>
              <div class="servings">
                  <img src="assets/icons/servings.svg" alt="servingsIcon"/>
                  <p>${recipe.servings}</p>
              </div>
          </div>     
      </div>

      
  </div> 
`
    )
  });
}



//mobile navigation menu
 function mobileMenu() {
    //console.log("mobile menu");
    let menu = document.getElementById("mobileLinks");
        if (menu.style.display === "flex") {
          menu.style.display = "none";
        } else {
          menu.style.display = "flex";
        }
}  

