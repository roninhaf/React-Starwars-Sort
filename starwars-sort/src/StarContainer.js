import React from 'react';
import StarComponentLogo from './StarComponentLogo';
import StarComponentSortBar from './StarComponentSortBar';

function StarContainer() {
    return (
        <div>
            <StarComponentLogo />
            <StarComponentSortBar />
            <p>My logic.</p>
        </div>
    )
}

export default StarContainer;