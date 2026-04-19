import React, { useState } from 'react'

function TextCard({ content: text }) {
    const [content, setContent] = useState(text || '');
    const [textInput, setTextInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        setContent(content + ' ' + textInput);
        setTextInput('');
    }
    return (
        <main className='TextCardBody'>
            {content.length === 0 ?
                <p className='placeholderText'>Add text to the card</p> :
                <article>
                    {content}
                </article>}
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        className='cardTextInput'
                        type='text'
                        name='textInput'
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)} />
                    <button className='addTextBtn'>+</button>
                </form>
            </section>
        </main>
    )
}

export default TextCard