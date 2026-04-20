import React, { useState } from 'react'

function ContentInput({ submitInput }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        submitInput(input);
        setInput('');
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    className='cardTextInput'
                    type='text'
                    name='input'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className='addTextBtn'>+</button>
            </form>
        </section>
    )
}

export default ContentInput