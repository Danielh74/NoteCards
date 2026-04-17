import { useState } from 'react'

function ListCard({ content }) {
    const [items, setItems] = useState(content || []);
    const [itemInput, setItemInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setItems([...items, itemInput]);
        setItemInput('');
    }
    return (
        <main>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>

            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='utemInput'
                        value={itemInput}
                        onChange={(e) => setItemInput(e.target.value)}
                    />
                    <button>Add</button>
                </form>
            </section>
        </main>
    )
}

export default ListCard