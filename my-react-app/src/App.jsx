import recipesData from './data/recipe.js'; 
import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import TagFilter from './components/TagFilter.jsx';

function App() {

  const [recipes, setRecipes] = useState(recipesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('name-asc');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const RECIPES_PER_PAGE = 10;

  // Local storage handling
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    if (storedRecipes && storedRecipes.length > 0) {
      setRecipes(storedRecipes);
    } else {
      setRecipes(recipesData);
      localStorage.setItem('recipes', JSON.stringify(recipesData));
    }
  }, []);

  // Sort recipes based on selected option
  const sortedRecipes = [...recipes].sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case "ingredients-asc":
        return a.ingredients.length - b.ingredients.length;
      case 'ingredients-desc':
        return b.ingredients.length - a.ingredients.length;
      default:
        return 0;
    }
  });

  // Pagination logic
  const indexOfLastRecipe = currentPage * RECIPES_PER_PAGE;
  const indexOfFirstRecipe = indexOfLastRecipe - RECIPES_PER_PAGE;

  // Add a new recipe
  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  // delete recipe handling
  function deleteRecipe(id) {
    const updatedRecipes = recipes.filter( recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  }

  // Handle page change
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // handle updated recipes on edit
  const updateRecipe = updatedRecipe => {
    const updatedRecipes = recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe);
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  }

  // handle toggling favorite recipes
  function toggleFavorite(id) {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === id
        ? { ...recipe, favorite: !recipe.favorite }
        : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  }

  // handle toggling tags
  function toggleTag(tag) {
    setSelectedTags(prevTags => 
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag)
      : [...prevTags, tag]
    );
  }

  const filteredRecipesByTag = sortedRecipes
  .filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    selectedTags.every(tag => recipe.tags.includes(tag)) &&
    (!showFavorites || recipe.favorite)
  );

  const currentRecipes = filteredRecipesByTag.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <div>
      <h1 id='top'>RECIPE SEARCH APP</h1>
      <input
        type='text'
        placeholder='Search for a recipe...'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button className='clear-input-btn' onClick={() => setSearchTerm("")}>&times;</button>
      <TagFilter 
        tags={['dinner', 'lunch', 'breakfast', 'dessert', 'appetizer']}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
      />
      <button className='favs-btn' onClick={() => setShowFavorites(prev => !prev)}>
        {showFavorites ? '😊' : '😍'}
      </button>

      <div className="sortOptions-container">
        <label htmlFor='sortOptions'>Sort by: </label>
        <select
          id='sortOptions'
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
        >
          <option value='name-asc'>Name (A-Z)</option>
          <option value='name-desc'>Name (Z-A)</option>
          <option value='ingredients-asc'>Ingredients (Ascending)</option>
          <option value='ingredients-desc'>Ingredients (Descending)</option>
        </select>
      </div>

      <AddRecipeForm addRecipe={addRecipe} />

      <RecipeList
      currentRecipes={currentRecipes}
        totalRecipes={filteredRecipesByTag.length}
        recipesPerPage={RECIPES_PER_PAGE}
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        deleteRecipe={deleteRecipe}
        updateRecipe={updateRecipe}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
