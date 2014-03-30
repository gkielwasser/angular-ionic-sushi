angular.module('sushi.services', [])

  .factory('CartService', ['localStorageService', function (localStorageService) {
    var items = localStorageService.get('items');
    if (!items)  items = [];

    return{
      count: function () {
        var count = 0;
        angular.forEach(items, function (value, key) {
          count += value.quantity;
        })
        return count;
      },
      getItems: function () {
        return items;
      },
      removeItem: function (id) {
        angular.forEach(items, function (value, key) {
          if ((value.id == id)) {
            items.splice(key, 1);
          }
        })
        localStorageService.add('items', JSON.stringify(items));
      },
      addItem: function (item) {
        console.log('addItems', item);
        var found = false;
        angular.forEach(items, function (value, key) {
          if ((value.id == item.id)) {
            found = true;
            value.quantity += item.quantity;
          }
        })
        if (!found)  items.push(item);

        localStorageService.add('items', JSON.stringify(items));
      },
      downQuantity: function (id) {
        console.log("down")
        angular.forEach(items, function (value, index) {
          if (id == value.id) {
            console.log("found")
            value.quantity--;
            if (value.quantity == 0) {
              items.splice(index, 1);
            }
          }
        })
        localStorageService.add('items', JSON.stringify(items));
      },
      upQuantity: function (id) {
        angular.forEach(items, function (value, index) {
          if (id == value.id) {
            value.quantity++;
          }
        })
        localStorageService.add('items', JSON.stringify(items));
      },

      reset: function () {
        items = [];
        localStorageService.remove('items');
      }
    }
  }])

  .factory('CategoryService', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var categories = [
      { id: 0, title: 'Sushi', image: 'images/sushi.jpg', description: '',
        items: [
          {id: 0, title: 'Thon', image: 'images/thon.jpg', description: '', price: 4.60, piece: 6,
            components: ['thon'], category: 0},
          {id: 1, title: 'Crevette', image: 'images/crevette.jpg', description: '', price: 4.80, piece: 6, category: 0,
            components: ['crevette']},
          {id: 2, title: 'Saumon', image: 'images/saumon.jpg', description: '', price: 4.60, piece: 6, category: 0,
            components: ['saumon']},
          {id: 3, title: 'Avocat', image: 'images/avocat.jpg', description: '', price: 5.20, piece: 6, category: 0,
            components: ['avocat']},
          {id: 4, title: 'Seiche', image: 'images/seiche.jpg', description: '', price: 4.30, piece: 6, category: 0,
            components: ['seiche']}
        ]
      },
      { id: 1, title: 'Maki', image: 'images/maki.jpg', description: '',
        items: [
          {id: 15, title: 'Thon', image: 'images/thon.jpg', description: '', price: 4.60, piece: 6, category: 1,
            components: ['thon']},
          {id: 16, title: 'Crevette', image: 'images/crevette.jpg', description: '', price: 4.80, piece: 6, category: 1, components: ['crevette']},
          {id: 17, title: 'Saumon', image: 'images/saumon.jpg', description: '', price: 4.60, piece: 6, category: 1, components: ['saumon']},
          {id: 18, title: 'Avocat', image: 'images/avocat.jpg', description: '', price: 5.20, piece: 6, category: 1, components: ['avocat']},
          {id: 19, title: 'Seiche', image: 'images/seiche.jpg', description: '', price: 4.30, piece: 6, category: 1, components: ['seiche']}
        ]
      },
      { id: 2, title: 'Spring rolls', image: 'images/spring-rolls.jpg', description: '',
        items: [
          {id: 20, title: 'Saumon cheese', image: 'images/spring-rolls-saumon-cheese.jpg', description: '', price: 4.60, piece: 6, components: ['saumon', 'cheese'], category: 2},
          {id: 21, title: 'Végétarien', image: 'images/spring-vege.jpg', description: 'avocat tomate laitue', price: 4.80, piece: 6, components: ['avocat', 'tomate', 'laitue'], category: 2},
          {id: 22, title: 'César', image: 'images/spring-cesar.jpg', description: '', price: 4.60, piece: 6, components: ['poulet pané', 'laitue', 'parmesan', 'sauce césar'], category: 2},
          {id: 23, title: 'Cibouly', image: 'images/spring-rolls-concombre-fromage.jpg', description: '', price: 5.20, piece: 6, components: ['concombre', 'fromage', 'ciboulette'], category: 2},
          {id: 24, title: 'Aspergy', image: 'images/tomate-asperge-cheese.jpg', description: '', price: 4.30, piece: 6, components: ['asperge', 'tomate séchée'], category: 2}
        ]
      },
      { id: 3, title: 'Tartares', image: 'images/tartares.jpg', description: '',
        items: [
          {id: 30, title: 'Thon', image: 'images/thon.jpg', description: '', price: 4.60, piece: 6, category: 3, components: ['thon']},
          {id: 31, title: 'Crevette', image: 'images/crevette.jpg', description: '', price: 4.80, piece: 6, category: 3, components: ['crevette']},
          {id: 32, title: 'Saumon', image: 'images/saumon.jpg', description: '', price: 4.60, piece: 6, category: 3, components: ['saumon']},
          {id: 33, title: 'Avocat', image: 'images/avocat.jpg', description: '', price: 5.20, piece: 6, category: 3, components: ['avocat']},
          {id: 34, title: 'Seiche', image: 'images/seiche.jpg', description: '', price: 4.30, piece: 6, category: 3, components: ['seiche']}
        ]
      },
      { id: 4, title: 'Spécialités', image: 'images/spécialités.jpg', description: '',
        items: [
          {id: 40, title: 'Dragon', image: 'images/dragon.jpg', description: 'Crevette tempura, sauce spicy,avocat,masago', price: 10.00, piece: 1,
            components: ['crevette', 'sauce spicy', 'avocat', 'masago'], category: 4},
          {id: 41, title: 'Rainbow', image: 'images/rainbow.jpg', description: 'Crabe,menth,coriandre,citron,saumon, thon,avocat', price: 11.00, piece: 1,
            components: ['crabe', 'menthe', 'coriandre', 'citron', 'saumon', 'thon', 'avocat'], category: 4},
          {id: 42, title: 'Mango', image: 'images/mango.jpg', description: 'Poulet pané sauce spicy concombre enrobé de mangue et confiture de figue', price: 12.00, piece: 1,
            components: ['poulet', 'sauce spicy', 'concombre', 'mangue', 'figue'], category: 4},
          {id: 43, title: 'Flower', image: 'images/flower.jpg', description: '1 tulipe conc cheese et 3 sushi tart saum et 3 sushi chair de crabe', price: 10.00, piece: 1,
            components: ['concombre', 'cheese', 'saumon', 'crabe'], category: 4},
          {id: 44, title: 'Snake', image: 'images/snake.jpg', description: 'Kiwi saumon fumé masago cheese yuzu roquette', price: 11.50, piece: 1,
            components: ['kiwi', 'saumon fumé', 'masago', 'cheese', 'yuzu', 'roquette'], category: 4},
          {id: 45, title: 'Snake', image: 'images/imperial.jpg', description: 'Tartare de thon et ses œufs de masago', price: 12.00, piece: 1,
            components: ['thon', 'oeufs masago'], category: 4}
        ]
      }
    ];

    var getAllItems = function () {
      var all = [];
      angular.forEach(categories, function (category, index) {
        angular.forEach(category.items, function (item, index) {
          all.push(item);
        })
      })
      return all;
    }

    var exist = function (ingredient, ingredients) {
      if(_.find(ingredients, function(ing){ return ingredient == ing.text; }))  return true;
      return false;
    }

    //Init
    var allItems = getAllItems();

    return {
      all: function () {
        return categories;
      },
      get: function (petId) {
        // Simple index lookup
        return categories[petId];
      },

      getAllItems: function () {
        return allItems;
      },

      isIngredients: function (ingredient, ingredients) {
        return exist(ingredient, ingredients);
      },

      getAllIngredients: function () {
        var ingredients = [];
        angular.forEach(categories, function (category, index) {
          angular.forEach(category.items, function (item, index) {
            angular.forEach(item.components, function (ing, index) {
              if (!exist(ing, ingredients))  ingredients.push({text: ing});
            })
          })
        })
        return ingredients;
      },


      getCategory: function (id) {
        var label;
        var category = _.find(categories, function(category){ return category.id == id});
        if(category) label = category.title;
        return label;
      },
      getItem: function (categoryId, itemId) {
        var res = null;
        var category = _.find(categories, function(category){ return category.id == categoryId});
        if(category) {
          res = _.find(category.items, function(item){ return item.id == itemId});
        }
        return res;
      }
    }
  });
