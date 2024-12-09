
function TagFilter({ tags, selectedTags, onToggleTag }) {

    return (
        <div className='tag-filter'>
            <h3>Filter By Tags:</h3>
            <div className='tags'>
                {tags.map((tag, index) => (
                    <label key={index} className='tag'>
                        <input
                        type='checkbox'
                        checked={selectedTags.includes(tag)}
                        onChange={() => onToggleTag(tag)}
                        />
                        {tag}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default TagFilter;