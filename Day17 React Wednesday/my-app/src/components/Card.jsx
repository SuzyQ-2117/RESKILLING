const Card = (props) => {
    const name = props.name;
    const pic = props.pic;
    const age = props.age;
    const location = props.location;
    const blurb = props.blurb;
    const isActive = props.isActive

    return(
        <div className="content flex">
            <div className="divleft">
                <img src={pic} width="150px" />
                <h1>{name}</h1>
            </div>
            <div className="divright">
                <p>{age}, {location}</p>
                <p>{blurb}</p>
            </div>
        </div>
    );
}

export default Card;