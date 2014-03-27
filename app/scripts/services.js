angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
  .factory('CartService', ['localStorageService', function(localStorageService){
    var items = localStorageService.get('items');
    if(!items)  items = [];

    return{
      count : function(){
        var count = 0;
        angular.forEach(items, function(value,key){
          count += value.quantity;
        })
        return count;
      },
      getItems : function(){
        return items;
      },
      removeItem : function(id){
        angular.forEach(items, function(value,key){
          if((value.id == id)){
            items.splice(key,1);
          }
        })
        localStorageService.add('items',JSON.stringify(items));
      },
      addItem : function(item){
        console.log('addItems',item);
        var found = false;
        angular.forEach(items, function(value,key){
          if((value.id == item.id)){
            found = true;
            value.quantity += item.quantity;
          }
        })
        if(!found)  items.push(item);

        localStorageService.add('items',JSON.stringify(items));
      },
      downQuantity : function(id){
        console.log("down")
        angular.forEach(items, function(value,index){
          if(id == value.id){
            console.log("found")
            value.quantity --;
            if(value.quantity == 0){
              items.splice(index,1);
            }
          }
        })
        localStorageService.add('items',JSON.stringify(items));
      },
      upQuantity : function(id){
        angular.forEach(items, function(value,index){
          if(id == value.id){
            value.quantity ++;
          }
        })
        localStorageService.add('items',JSON.stringify(items));
      }
    }
  }])

.factory('CategoryService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [
    { id: 0, title: 'Sushi', image: 'images/sushi.jpg', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.',
      items: [
        {id: 0, title: 'Thon', image: 'images/thon.jpg', description:'', price:4.60, piece:6},
        {id: 1, title: 'Crevette', image: 'images/crevette.jpg', description:'', price:4.80, piece:6},
        {id: 2, title: 'Saumon', image: 'images/saumon.jpg', description:'', price:4.60, piece:6},
        {id: 3, title: 'Avocat', image: 'images/avocat.jpg', description:'', price:5.20, piece:6},
        {id: 4, title: 'Seiche', image: 'images/seiche.jpg', description:'', price:4.30, piece:6}
      ]
    },
    { id: 1, title: 'Maki', image: 'images/maki.jpg', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.',
      items: [
        {id: 0, title: 'Thon', image: 'images/thon.jpg', description:'', price:4.60, piece:6},
        {id: 1, title: 'Crevette', image: 'images/crevette.jpg', description:'', price:4.80, piece:6},
        {id: 2, title: 'Saumon', image: 'images/saumon.jpg', description:'', price:4.60, piece:6},
        {id: 3, title: 'Avocat', image: 'images/avocat.jpg', description:'', price:5.20, piece:6},
        {id: 4, title: 'Seiche', image: 'images/seiche.jpg', description:'', price:4.30, piece:6}
      ]
    },
    { id: 2, title: 'Spring rolls', image: 'images/spring-rolls.jpg', description: 'Everyone likes turtles.',
      items: [
        {id: 0, title: 'Thon', image: 'images/thon.jpg', description:'', price:4.60, piece:6},
        {id: 1, title: 'Crevette', image: 'images/crevette.jpg', description:'', price:4.80, piece:6},
        {id: 2, title: 'Saumon', image: 'images/saumon.jpg', description:'', price:4.60, piece:6},
        {id: 3, title: 'Avocat', image: 'images/avocat.jpg', description:'', price:5.20, piece:6},
        {id: 4, title: 'Seiche', image: 'images/seiche.jpg', description:'', price:4.30, piece:6}
      ]
    },
    { id: 3, title: 'Tartares', image: 'images/tartares.jpg', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.',
      items: [
        {id: 0, title: 'Thon', image: 'images/thon.jpg', description:'', price:4.60, piece:6},
        {id: 1, title: 'Crevette', image: 'images/crevette.jpg', description:'', price:4.80, piece:6},
        {id: 2, title: 'Saumon', image: 'images/saumon.jpg', description:'', price:4.60, piece:6},
        {id: 3, title: 'Avocat', image: 'images/avocat.jpg', description:'', price:5.20, piece:6},
        {id: 4, title: 'Seiche', image: 'images/seiche.jpg', description:'', price:4.30, piece:6}
      ]
    },
    { id: 4, title: 'Spécialités', image: 'images/spécialités.jpg', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.',
      items: [
        {id: 0, title: 'Dragon', image: 'images/dragon.jpg', description:'Crevette tempura, sauce spicy,avocat,masago', price:10.00, piece:1},
        {id: 1, title: 'Rainbow', image: 'images/rainbow.jpg', description:'Crabe,menth,coriandre,citron,saumon, thon,avocat', price:11.00, piece:1},
        {id: 2, title: 'Mango', image: 'images/mango.jpg', description:'Poulet pané sauce spicy concombre enrobé de mangue et confiture de figue', price:12.00, piece:1},
        {id: 3, title: 'Flower', image: 'images/flower.jpg', description:'1 tulipe conc cheese et 3 sushi tart saum et 3 sushi chair de crabe', price:10.00, piece:1},
        {id: 4, title: 'Snake', image: 'images/snake.jpg', description:'Kiwi saumon fumé masago cheese yuzu roquette', price:11.50, piece:1},
        {id: 4, title: 'Snake', image: 'images/imperial.jpg', description:'Tartare de thon et ses œufs de masago', price:12.00, piece:1}
      ]
    }
  ];

  return {
    all: function() {
      return categories;
    },
    get: function(petId) {
      // Simple index lookup
      return categories[petId];
    },

    getCategory: function(id){
      var cat;
      angular.forEach(categories, function(category,index){
        if(category.id == id){
          cat = category.title;
        }
      })
      return cat;
    },
    getItem: function(categoryId,itemId){
      var res = null;
      angular.forEach(categories, function(category,index){
        if(category.id == categoryId){
          angular.forEach(category.items, function(item,index){
            console.log("it",item)
            if(item.id == itemId){
              console.log("ok")
              res = item;
            }
          })
        }
      })
      return res;
    }
  }
});
