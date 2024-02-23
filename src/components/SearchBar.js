import React from 'react';
import { useState } from 'react';

function SearchBar ( {onSubmit} ) {

    const [term, setTerm] = useState('');
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit('test');
    };

    const handleChange= (event) => {
        setTerm(event.target.value);
        //console.log(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    );
}
export default SearchBar;