import React from 'react';

function StarComponentSortBar() {
    return (
        <div className='buttonContainer'>
            <button id='height'>Sort by height</button>
            <button id='mass'>Sort by mass</button>
            <button id='film'>Sort by number of films</button>
            <button id='name'>Sort by name</button>
        </div>
    )
}

export default StarComponentSortBar;