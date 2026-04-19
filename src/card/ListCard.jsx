import { useState } from 'react'

function ListCard({ content }) {
    const [items, setItems] = useState(content || []);
    const [itemInput, setItemInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setItems([...items, { id: Date.now(), item: itemInput }]);
        setItemInput('');
    }

    const deleteItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }
    return (
        <main className='TextCardBody'>
            {items.length === 0 ?
                <p className='placeholderText'>Add items to the list</p> :
                <ul>
                    {items.map(item =>
                        <div className='itemList'>
                            <li key={item.id}>{item.item} </li>
                            <button className='removeItemBtn' onClick={() => deleteItem(item.id)}>X</button>
                        </div>
                    )}
                </ul>}

            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        className='cardTextInput'
                        type='text'
                        name='utemInput'
                        value={itemInput}
                        onChange={(e) => setItemInput(e.target.value)}
                    />
                    <button className='addTextBtn'>+</button>
                </form>
            </section>
        </main>
    )
}

export default ListCard