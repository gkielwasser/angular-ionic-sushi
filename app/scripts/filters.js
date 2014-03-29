angular.module('sushi.filters', [])

  .filter('ingredientsFilter', function (CategoryService) {
    var FilterArray = [], found, acceptable;

    return function (allItems, ingredients) {
      console.log("go")
      FilterArray = [];
      var loop = 0;

      angular.forEach(allItems, function (item, index) {
        acceptable = true;
        angular.forEach(ingredients, function (ingFilter) {
          if (ingFilter.checked) {
            found = false;

            angular.forEach(item.components, function (ing, index) {
              loop++;
              if (ingFilter.text == ing) found = true;
            })

            if (!found)  acceptable = false;
          }
        })

        if (acceptable) {
          FilterArray.push(item);
        }

      })
      console.log("loops", loop)
      return FilterArray;
    };
  })