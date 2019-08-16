import React from 'react';

import Image from './Image.js';
import Unfound from './Unfound.js';

const Images = ( props ) => {

    const results = props.data;
    let pics;

    if(results.length > 0){
        pics = results.map(photo => <Image url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />);
    } else { pics = <Unfound /> }

    return (
        <div className='photo-container'>
            <ul className="photo-container" >
                {pics}
            </ul> 
        </div>
    )

}

export default Images;