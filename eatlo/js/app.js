(function(){
   var app = angular.module('EatloApp',[]);
  
var menu = [
    {
        name : "Butter Chicken with Parathas and Salad",
        price: 120.00,
        descript:  "The perfect home-style, spicy Punjabi Butter Chicken served with 3 Parathas and a crunchy Salad on the side.",
        image: "images/menu/butter-16-04-2015-12-49-00.jpg",
        type: 1 
    },
    
    {
        name : "Pita Triangles with Hummus, Cottage Cheese and Salad",
        price: 100.00,
        descript:  " A healthy meal of whole wheat Pita Triangles and creamy Hummus flavoured with spicy Peri Peri. Served with a side of Barbecued Cottage Cheese and a Salad.",
        image: "images/menu/hummus-with-pita-bread3-02-07-2015-16-17-11.png",
        type: 0 
    },
    
    {
        name : "Chicken Fattoush Salad",
        price: 120.00,
        descript:  "Try our Middle Eastern Fattoush Salad with Grilled Chicken, Lettuce, Cucumbers, Tomatoes and Grilled Pita Bread bites with a Mint and Cilantro dressing.",
        image: "images/menu/chik_salad-09-04-2015-14-01-34.jpg",
        type: 1 
    },
    
    {
        name : "Grilled Chicken with Mashed Potatoes and Veggies",
        price: 120.00,
        descript:  "Indulge in this delicious grilled Chicken (1 pc) in Barbecue Sauce with a side of herbed Mashed Potatoes and sautéed Veggies.",
        image : "images/menu/Grilled_Chicken_Breast_web-15-05-2015-05-00-34.png",
        type: 1 
    },
    
    {
        name : "Mocha Protein Smoothie",
        price: 50.00,
        descript:  "Rich, smooth, creamy and filling, protein-packed smoothie with Peanut Butter and Coffee. Served chilled.",
        image: "images/menu/web_peanut_butter_mocha_protein_smoothie-21-08-2015-10-03-44.jpg",
        type: 0 
    },
    
    {
        name : "Modinagar's Famous Jain Shikanji",
        price: 30.00,
        descript:  "Refreshing chilled Shikanji prepared with Lemon Juice and Shikanji Masala from Modinagar's famous Jain Shikanji.",
        image: "images/menu/web_shikanji-02-06-2015-16-38-20.jpg",
        type: 0 
    }
];
   app.controller('MenuController', function($scope, $http){
       this.products = menu;
   });
})();
