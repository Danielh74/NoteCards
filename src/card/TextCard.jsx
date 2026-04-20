import React, { useState } from 'react'
import ContentInput from '../components/ContentInput';

function TextCard({ content: text }) {
    const [content, setContent] = useState(text || '');

    const handleSubmit = (input) => {
        setContent(content + ' ' + input);
    }

    return (
        <main className='cardContent'>
            {content.length === 0 ?
                <p className='placeholderText'>Add text to the card</p> :
                <article>
                    {content}
                </article>}

            <ContentInput submitInput={handleSubmit} />
        </main>
    )
}

export default TextCard