const recipesData = [
  {
      id: 1,
      name: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish.',
      favorite: false,
      ingredients: ['Spaghetti', 'Minced beef', 'Tomato sauce', 'Onions', 'Garlic'],
      tags: ['dinner']
  },
  {
      id: 2,
      name: 'Chicken Curry',
      description: 'A flavorful Indian curry.',
      favorite: false,
      ingredients: ['Chicken', 'Curry powder', 'Coconut milk', 'Garlic', 'Onions'],
      tags: ['dinner']
  },
  {
      id: 3,
      name: 'Vegetable Stir Fry',
      description: 'A quick and healthy dish.',
      favorite: false,
      ingredients: ['Mixed vegetables', 'Soy sauce', 'Ginger', 'Garlic'],
      tags: ['dinner']
  },
  {
      id: 4,
      name: 'Beef Tacos',
      description: 'Delicious Mexican-style tacos.',
      favorite: false,
      ingredients: ['Taco shells', 'Ground beef', 'Lettuce', 'Cheese', 'Salsa'],
      tags: ['dinner']
  },
  {
      id: 5,
      name: 'Margherita Pizza',
      description: 'A simple and tasty pizza.',
      favorite: false,
      ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil'],
      tags: ['dinner']
  },
  {
      id: 6,
      name: 'Caesar Salad',
      description: 'A crisp and refreshing salad.',
      favorite: false,
      ingredients: ['Romaine lettuce', 'Croutons', 'Caesar dressing', 'Parmesan cheese'],
      tags: ['lunch']
  },
  {
      id: 7,
      name: 'Pancakes',
      description: 'Fluffy breakfast pancakes.',
      favorite: false,
      ingredients: ['Flour', 'Eggs', 'Milk', 'Baking powder', 'Sugar'],
      tags: ['breakfast']
  },
  {
      id: 8,
      name: 'Grilled Cheese Sandwich',
      description: 'A classic comfort food.',
      favorite: false,
      ingredients: ['Bread', 'Cheese', 'Butter'],
      tags: ['lunch']
  },
  {
      id: 9,
      name: 'Tomato Soup',
      description: 'A warm and comforting soup.',
      favorite: false,
      ingredients: ['Tomatoes', 'Onions', 'Garlic', 'Cream', 'Basil'],
      tags: ['lunch']
  },
  {
      id: 10,
      name: 'Chocolate Brownies',
      description: 'Rich and gooey brownies.',
      favorite: false,
      ingredients: ['Cocoa powder', 'Flour', 'Sugar', 'Butter', 'Eggs'],
      tags: ['dessert']
  },
  {
      id: 11,
      name: 'BBQ Chicken Wings',
      description: 'Perfect for a party or game day.',
      favorite: false,
      ingredients: ['Chicken wings', 'BBQ sauce', 'Honey', 'Garlic', 'Paprika'],
      tags: ['appetizer']
  },
  {
      id: 12,
      name: 'Shrimp Scampi',
      description: 'A delicious seafood pasta.',
      favorite: false,
      ingredients: ['Shrimp', 'Pasta', 'Garlic', 'Butter', 'Lemon'],
      tags: ['dinner']
  },
  {
      id: 13,
      name: 'Beef Burgers',
      description: 'Juicy and flavorful burgers.',
      favorite: false,
      ingredients: ['Ground beef', 'Burger buns', 'Lettuce', 'Cheese', 'Tomato'],
      tags: ['lunch']
  },
  {
      id: 14,
      name: 'Veggie Burger',
      description: 'A tasty vegetarian alternative.',
      favorite: false,
      ingredients: ['Veggie patty', 'Burger buns', 'Lettuce', 'Avocado', 'Tomato'],
      tags: ['lunch']
  },
  {
      id: 15,
      name: 'Chicken Alfredo',
      description: 'A creamy pasta dish.',
      favorite: false,
      ingredients: ['Fettuccine', 'Chicken breast', 'Cream', 'Parmesan', 'Garlic'],
      tags: ['dinner']
  },
  {
      id: 16,
      name: 'French Toast',
      description: 'A sweet breakfast favorite.',
      favorite: false,
      ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon', 'Sugar'],
      tags: ['breakfast']
  },
  {
      id: 17,
      name: 'Teriyaki Chicken',
      description: 'Savory and sweet Japanese dish.',
      favorite: false,
      ingredients: ['Chicken', 'Teriyaki sauce', 'Sesame seeds', 'Rice'],
      tags: ['dinner']
  },
  {
      id: 18,
      name: 'Greek Salad',
      description: 'A fresh and healthy salad.',
      favorite: false,
      ingredients: ['Cucumber', 'Tomato', 'Feta cheese', 'Olives', 'Olive oil'],
      tags: ['lunch']
  },
  {
      id: 19,
      name: 'Stuffed Bell Peppers',
      description: 'A colorful and hearty dish.',
      favorite: false,
      ingredients: ['Bell peppers', 'Rice', 'Ground beef', 'Tomato sauce', 'Cheese'],
      tags: ['dinner']
  },
  {
      id: 20,
      name: 'Lentil Soup',
      description: 'A healthy and filling soup.',
      favorite: false,
      ingredients: ['Lentils', 'Carrots', 'Onions', 'Celery', 'Garlic'],
      tags: ['lunch']
  },
  {
      id: 21,
      name: 'Baked Salmon',
      description: 'A light and nutritious dish.',
      favorite: false,
      ingredients: ['Salmon fillets', 'Lemon', 'Dill', 'Olive oil'],
      tags: ['dinner']
  },
  {
      id: 22,
      name: 'Mushroom Risotto',
      description: 'A creamy and savory dish.',
      favorite: false,
      ingredients: ['Arborio rice', 'Mushrooms', 'Parmesan', 'Onions', 'Garlic'],
      tags: ['dinner']
  },
  {
      id: 23,
      name: 'Chicken Tacos',
      description: 'Mexican-style tacos with chicken.',
      favorite: false,
      ingredients: ['Taco shells', 'Chicken', 'Salsa', 'Cheese', 'Lettuce'],
      tags: ['dinner']
  },
  {
      id: 24,
      name: 'Vegetarian Chili',
      description: 'A spicy and hearty vegetarian dish.',
      favorite: false,
      ingredients: ['Beans', 'Tomatoes', 'Onions', 'Chili powder', 'Peppers'],
      tags: ['dinner']
  },
  {
      id: 25,
      name: 'Eggplant Parmesan',
      description: 'A cheesy and delicious Italian dish.',
      favorite: false,
      ingredients: ['Eggplant', 'Tomato sauce', 'Mozzarella', 'Parmesan'],
      tags: ['dinner']
  },
  {
      id: 26,
      name: 'Clam Chowder',
      description: 'A creamy seafood soup.',
      favorite: false,
      ingredients: ['Clams', 'Potatoes', 'Cream', 'Onions', 'Celery'],
      tags: ['lunch']
  },
  {
      id: 27,
      name: 'Ratatouille',
      description: 'A French vegetable dish.',
      favorite: false,
      ingredients: ['Zucchini', 'Eggplant', 'Tomatoes', 'Bell peppers', 'Onions'],
      tags: ['dinner']
  },
  {
      id: 28,
      name: 'Pad Thai',
      description: 'A popular Thai noodle dish.',
      favorite: false,
      ingredients: ['Rice noodles', 'Peanuts', 'Shrimp', 'Tofu', 'Tamarind sauce'],
      tags: ['dinner']
  },
  {
      id: 29,
      name: 'Fish and Chips',
      description: 'A British classic.',
      favorite: false,
      ingredients: ['Fish fillets', 'Potatoes', 'Flour', 'Eggs', 'Breadcrumbs'],
      tags: ['dinner']
  },
  {
      id: 30,
      name: 'Avocado Toast',
      description: 'A quick and trendy breakfast.',
      favorite: false,
      ingredients: ['Bread', 'Avocado', 'Lemon', 'Salt', 'Pepper'],
      tags: ['breakfast']
  },
  {
      id: 31,
      name: 'Souvlaki pork',
      description: "Greece's best street food, pork gyros",
      favorite: false,
      ingredients: ['Pita bread', 'Pork', 'Fries', 'Onions', 'Tomatoes', 'Tzatziki sauce', 'Olive oil', 'Salt', 'Paprika'],
      tags: ['dinner']
  },
  {
      id: 32,
      name: 'Souvlaki chicken',
      description: "Greece's best street food, chicken gyros",
      favorite: false,
      ingredients: ['Pita bread', 'Chicken', 'Fries', 'Onions', 'Tomatoes', 'Tzatziki sauce', 'Olive oil', 'Salt', 'Paprika'],
      tags: ['dinner']
  }
];

export default recipesData;
