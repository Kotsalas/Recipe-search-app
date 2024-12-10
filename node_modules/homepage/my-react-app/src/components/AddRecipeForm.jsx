import React, {useState} from 'react';

function AddRecipeForm({ addRecipe }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState('');

    function handleImageChange(e) {

        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }

    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !description || !ingredients){
            alert('Please fill out all fields!');
            return;
        }

        const newRecipe = {
            id: Date.now(), /*change that, make it css*/
            name,
            description,
            ingredients: ingredients.split(',').map(ing => ing.trim()),
            image,
            tags: tags.split(',').map(tag => tag.trim())
        }

        addRecipe(newRecipe);

        setName('');
        setDescription('');
        setIngredients('');
        setTags('');
        setIsOpen(false);
        setImage(null);
    }

    function showHideForm() {
        setIsOpen(!isOpen);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 onClick={showHideForm}>Add a New Recipe</h2>
            {isOpen ? 
              <>
                <div>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Tags (comma-separated)"
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Ingerdients (comma-separated)"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {image && <img src={image} alt="Preview" style={{ maxWidth: '100px', margin: '10px' }} />}
                </div>
                <button type="submit">Add Recipe</button>
              </>
            : ""}
        </form>
    );
};

export default AddRecipeForm;
