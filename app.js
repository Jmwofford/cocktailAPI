console.log($);

const initialize = () => {
  //   $(".container").empty();
  letter = prompt("Enter Letter");
  $.ajax({
    url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  }).then(data => {
    for (i = 0; i < data.drinks.length; i++) {
      name = data.drinks[i].strDrink;
      glass = data.drinks[i].strGlass;
      how_to = data.drinks[i].strInstructions;
      link = data.drinks[i].strDrinkThumb;

      recipe = [
        [data.drinks[i].Ingredient1],
        [data.drinks[i].Ingredient2],
        [data.drinks[i].Ingredient3],
        [data.drinks[i].Ingredient4]
      ];
      console.log(data.drinks[i].strDrink);

      let $btl = $("<div>")
        .addClass("bottle")
        .attr("onclick", () => {})
        .append(
          `<h3>${name}</h3><br><div>${how_to}</div><br><button class="innerBtn">${link}</button><br><p>${recipe[0]}</p>`
        );
      let $h1 = $("<h2>").text(data.drinks[i].strDrink);

      $(".container").append($btl);
      //   console.log(
      //
      //   );
    }

    console.log(data);
  });
};
$(() => {});
