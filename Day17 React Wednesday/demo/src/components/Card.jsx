const Card = (props) => {
    const name = props.name;
    const age = props.age;
    const favGame = props.favGame;
    const pic = props.pic;

    // {name, age, favGame, pic}
    
    return(
        <div className="card">
            <img src={pic} alt="" width="150px"/> 
            <h1>{name}</h1>
            <p>{name} is {age} years old. </p>
            <p>{name} loves to play {favGame}</p>
        </div>
    );
}

export default Card;