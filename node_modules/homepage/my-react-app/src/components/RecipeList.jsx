import RecipeItem from './RecipeItem.jsx';

function RecipeList({ currentRecipes,
                      totalRecipes,
                      recipesPerPage,
                      currentPage,
                      setCurrentPage,
                      deleteRecipe,
                      updateRecipe,
                      toggleFavorite,
                    }) {

    const totalPages = Math.ceil(totalRecipes / recipesPerPage);

    // generate page numbers
    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    console.log(totalRecipes, totalPages, pageNumbers);

    return(
        <div>
            <div className="recipe-list">
                {currentRecipes.length > 0 ? 
                    currentRecipes.map(recipe => 
                    <RecipeItem
                        key={recipe.id}
                        recipe={recipe}
                        deleteRecipe={deleteRecipe}
                        updateRecipe={updateRecipe}
                        toggleFavorite={toggleFavorite}
                    />)
                    : 
                    <p>No recipes found.</p>
                }
            </div>

            <div className='pagination'>
                {pageNumbers.map((number) => (
                    <a href='#top'><button
                        key={number}
                        className={`page-btn ${currentPage === number ? 'active' : ''}`}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button></a>
                ))}
            </div>
        </div>
    )
}

export default RecipeList;
