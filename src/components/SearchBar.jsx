function SearchBar({keyword, onChange, onSearch}) {

    function handleKeyDown(e) {
        if(e.key === "Enter"){
            onSearch();
        }
    }

    return (
        <div className="flex gap-6 m-6">
            <input className="bg-gray-600 text-white p-2 border-2 rounded-xl"
            type="text"
            placeholder="Enter a movie to Search"
            value={keyword}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            />
            <button className="text-white bg-[#E50914] px-6 py-2 rounded-lg" 
                onClick={onSearch}> Search</button>
        </div>
    )
}

export default SearchBar;