import { useState } from 'react'
import './App.css'
import Card from './card/Card'
import TextCard from './card/TextCard';
import ListCard from './card/ListCard';
import { IoText, IoList, IoImage } from "react-icons/io5";

const db = [
  {
    id: 1,
    title: 'Card 1',
    content: 'This is the first card in the array',
    type: 'text',
    pinned: false
  },
  {
    id: 2,
    title: 'Card 2',
    content: 'React.js is good',
    type: 'text',
    pinned: false
  }, {
    id: 3,
    title: 'Card 3',
    content: 'Node.js is the best',
    type: 'text',
    pinned: false
  }, {
    id: 4,
    title: 'Card 4',
    content: 'MongoDB is amazing!!',
    type: 'text',
    pinned: false
  },
];

const contentTypes = {
  text: '',
  list: [],
  image: ''
};

function App() {
  const [data, setData] = useState(db);
  const [titleInput, setTitleInput] = useState('');
  const [cardType, setCardType] = useState('text');

  const createCard = (e) => {
    e.preventDefault();

    const newCard = {
      id: Date.now(),
      title: titleInput,
      content: contentTypes[cardType],
      pinned: false,
      type: cardType
    };

    setData(prev => ([...prev, newCard]));
    setTitleInput('');
  }

  const removeCard = (id) => {
    setData(prev => prev.filter(card => card.id !== id))
  }

  const pinCard = (id) => {
    const updatedData = data.map(card =>
      card.id === id ?
        { ...card, pinned: !card.pinned } :
        card
    )
      .sort((a, b) => b.pinned - a.pinned);

    setData(updatedData);
  }

  return (
    <div className='container'>
      <div className='addCardFormContainer'>
        <form
          className='addCardForm'
          onSubmit={createCard}
        >
          <input
            className='cardTitleInput'
            name='cardTitle'
            value={titleInput}
            onChange={(e) => { setTitleInput(e.target.value) }}
          />
          <button
            style={{ borderRadius: 0 }}
            className={`cardTypeBtn ${cardType === 'text' && 'activeCardTypeBtn'} `}
            type='button'
            onClick={() => setCardType('text')}>
            <IoText className='cardTypeIcon' />
          </button>
          <button
            className={`cardTypeBtn ${cardType === 'list' && 'activeCardTypeBtn'} `}
            type='button'
            onClick={() => setCardType('list')}>
            <IoList className='cardTypeIcon' />
          </button>
          <button
            className={`cardTypeBtn ${cardType === 'image' && 'activeCardTypeBtn'} `}
            type='button'
            onClick={() => setCardType('image')}>
            <IoImage className='cardTypeIcon' />
          </button>
        </form>
      </div>

      <div className='cardsContainer'>
        {data.map(el => {
          return <Card
            key={el.id}
            id={el.id}
            title={el.title}
            content={el.content}
            pinned={el.pinned}
            type={el.type}
            deleteFn={removeCard}
            pinFn={pinCard} />
        })}
      </div>
    </div>
  )
}

export default App
