import React, { useReducer } from 'react'
import '../CSS/Styles.css'

function SearchBar(props){

const [HideSearch, SetHideSearch] = useReducer(
    (HideSearch => !HideSearch),
    "Hidden"
)

 
    return (
        <div className="Searchbar">
            <form onSubmit="">
                <label for="searchbar">
                    <span className={HideSearch ? " " : "Hidden"}>Search</span>
                </label>            
                <input 
                    className="inside" 
                    type="text" 
                    name="searchbar" 
                    onFocus={SetHideSearch} 
                    onBlur={SetHideSearch}
                    submit={onkeypress}>
                 </input>
            </form>
        </div>
    )
};


export default SearchBar