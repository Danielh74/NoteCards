import { useState } from 'react'
import ContentInput from '../components/ContentInput';

function ListCard({ content }) {
    const [items, setItems] = useState(content || []);

    const handleSubmit = (input) => {
        setItems([...items, { id: Date.now(), item: input }]);
    }

    const deleteItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }
    return (
        <main className='cardContent'>
            {items.length === 0 ?
                <p className='placeholderText'>Add items to the list</p> :
                <ul>
                    {items.map(item =>
                        <div className='itemList'>
                            <li key={item.id}>{item.item} </li>
                            <button className='removeItemBtn' onClick={() => deleteItem(item.id)}>X</button>
                        </div>
                    )}
                </ul>
            }

            <ContentInput submitInput={handleSubmit} />
        </main>
    )
}

export default ListCard