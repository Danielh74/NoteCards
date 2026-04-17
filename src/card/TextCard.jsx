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
            <article>
                {content}
            </article>
            <section style={{ alignSelf: 'center' }}>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='textInput'
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)} />
                    <button>Add</button>
                </form>
            </section>
        </main>
    )
}

export default TextCard