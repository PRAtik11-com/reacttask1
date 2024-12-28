import "./card.css"

function Cards() {
    let a = 8;
    return (
    
        a > 7 ? <h1>A is greater value : {a}</h1> : <h1>A is smaller value: {a}</h1>
        
    )
}

export default Cards