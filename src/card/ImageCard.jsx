import React, { useState } from 'react'
import ContentInput from '../components/ContentInput'
import './card.css';

function ImageCard() {
    const [imgSource, setImageSource] = useState('');

    const handleSubmit = (input) => {
        setImageSource(input);
    }

    return (
        <main className='cardContent'>
            <img src={imgSource} className='imgCard' />
            {!imgSource && <ContentInput submitInput={handleSubmit} />}
        </main>


    )
}

export default ImageCard