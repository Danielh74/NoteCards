function CardColorButton({ color, changeColor }) {
    return (
        <button
            className='colorBtn'
            style={{ backgroundColor: color }}
            onClick={() => { changeColor(color) }}
        />
    )
}

export default CardColorButton