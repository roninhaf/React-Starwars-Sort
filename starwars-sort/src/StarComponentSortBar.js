import React from 'react';

function StarComponentSortBar(props) {
    return (
        <div className='buttonContainer'>
            <button id='height' onClick={props.onClick}>Sort by height</button>
            <button id='mass' onClick={props.onClick}>Sort by mass</button>
            <button id='film' onClick={props.onClick}>Sort by number of films</button>
            <button id='name' onClick={props.onClick}>Sort by name</button>
        </div>
    )
}

export default StarComponentSortBar;