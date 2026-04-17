import React, { useState } from 'react'
import './card.css'
import CardColorButton from '../components/CardColorButton';
import { FaTrashCan } from "react-icons/fa6";
import { MdPushPin } from "react-icons/md";
import TextCard from './TextCard';
import ListCard from './ListCard';

const Card = ({ id, title, pinned, deleteFn, pinFn, content, type }) => {
    const [bgColor, setBgColor] = useState('white');
    const [colorOptions, setColorOptions] = useState(false);

    const handleBgColor = (color) => {
        setBgColor(color);
        setColorOptions(false);
    }

    return (
        <div className='cardContainer' style={{ backgroundColor: bgColor }}>
            <header className='cardHeader'>
                {title}
            </header>
            <main className='cardBody'>
                {type === 'text' && <TextCard content={content} />}
                {type === 'list' && <ListCard content={content} />}
            </main>
            <footer className='cardFooter'>
                {colorOptions ?
                    <>
                        <CardColorButton color='red' changeColor={handleBgColor} />
                        <CardColorButton color='blue' changeColor={handleBgColor} />
                        <CardColorButton color='green' changeColor={handleBgColor} />
                        <CardColorButton color='yellow' changeColor={handleBgColor} />
                    </>
                    :
                    <>
                        <MdPushPin
                            style={pinned && { color: 'orange' }}
                            className='pinBtn'
                            onClick={() => { pinFn(id) }}
                        />
                        <FaTrashCan
                            className='trashBtn'
                            onClick={() => { deleteFn(id) }}
                        />
                        <button
                            className='colorOptionsBtn'
                            style={{ backgroundColor: bgColor }}
                            onClick={() => { setColorOptions(true) }}
                        />
                    </>
                }

            </footer>
        </div>
    )
}

export default Card