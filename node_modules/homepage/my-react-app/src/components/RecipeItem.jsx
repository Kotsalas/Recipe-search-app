import React, {useState} from 'react';

function RecipeItem({ recipe, deleteRecipe, updateRecipe, toggleFavorite }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState(recipe);
    const [feedbackMessage, setFeedbackMessage] = useState("");

    function handleInputChange(e) {
        const { name, value } = e.target;
        setEditedRecipe({ ...editedRecipe, [name]: value });
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result; // Base64 string
                setEditedRecipe({ ...editedRecipe, image: base64String }); // Save Base64 string to recipe
            };
            reader.readAsDataURL(file); // Convert file to Base64
        }
    }

    function saveEdit() {
        if (!editedRecipe.name.trim() || !editedRecipe.description.trim() || editedRecipe.ingredients.length === 0) {
            alert("Please fill out all fields before saving.");
            return;
        }
        updateRecipe(editedRecipe);
        setIsEditing(false);
        setFeedbackMessage("Recipe updated successfully!");
        setTimeout( () => setFeedbackMessage(""), 3000 );
    }

    return(
        <div className="recipe-item">
            {feedbackMessage && <p style={ { color: 'green', fontWeight: 'bold '} }>{feedbackMessage}</p>}
            {isEditing ? (
                <div className='editing-recipe-container'>
                    <input
                      type='text'
                      name='name'
                      value={editedRecipe.name}
                      onChange={handleInputChange}
                    />
                    <input
                      type='text'
                      name='tags'
                      value={editedRecipe.tags}
                      onChange={handleInputChange}
                    />
                    <textarea
                      name='description'
                      value={editedRecipe.description}
                      onChange={handleInputChange}
                    />
                    <input
                      type='text'
                      name='ingredients'
                      value={editedRecipe.ingredients.join(', ')}
                      onChange={e => 
                        setEditedRecipe({
                            ...editedRecipe,
                            ingredients: e.target.value.split(',').map(ing => ing.trim())
                        })
                      }
                    />
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    {recipe.image && <img src={recipe.image} alt={recipe.name} style={{ width: '150px', height: 'auto' }} />}
                    <div>
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
                ) : (
                <div>
                    {recipe.image && (
                        <img
                            src={recipe.image}
                            alt={recipe.name}
                            style={{ width: '50%',maxWidth: '250px', height: 'auto', marginBottom: '10px' }}
                        />
                    )}
                    <h2>{recipe.name}</h2>
                    <p className="description">"{recipe.description}"</p><br />
                    <h4>Ingredients:</h4><br />
                    <ul>
                        {recipe.ingredients.map((ingredient, index) =>
                        <li key={index}>{ingredient}</li>)}
                    </ul>
                    <button onClick={ () => deleteRecipe(recipe.id)}>Delete</button>
                    <button onClick={ () => setIsEditing(true)}>Edit</button>
                    <button onClick={ () => toggleFavorite(recipe.id)}>
                        {recipe.favorite ? '❤️ Favorite' : '🖤 Favorite'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default RecipeItem;
