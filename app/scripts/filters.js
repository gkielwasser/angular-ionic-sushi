angular.module('sushi.filters', [])

  .filter('ingredientsFilter', function (CategoryService) {
    var FilterArray = [], found, acceptable;

    return function (allItems, ingredients) {
      console.log("go")
      FilterArray = [];

      angular.forEach(allItems, function (item, index) {
        acceptable = true;
        angular.forEach(ingredients, function (ingFilter) {
            //Renvoi faux si l'ingrédient n'est pas trouvé
            if(ingFilter.checked && ! _.find(item.components, function(ing){ return ingFilter.text === ing; })) acceptable = false;
        })

        if (acceptable) FilterArray.push(item);
      })

      return FilterArray;
    };
  })