const Card = (props) => {
    const name = props.name;
    const pic = props.pic;
    const age = props.age;
    const location = props.location;
    const blurb = props.blurb;
    const isVerified = props.isVerified;

    if(isVerified) {
        return(
            <div className="content flex">
                <div className="divleft">
                    <img src={pic} width="150px" />
                </div>
                <div className="divright">
                    <h1>{name} {isVerified && '🐾'}</h1>
                    <p>{age}, {location}</p>
                    <p>{blurb}</p>
                </div>
            </div>
        );
    } else {
        return(
            <div className="content flex">
                <div className="divleft">
                    <img src={pic} width="150px" />
                </div>
                <div className="divright">
                    <h1>{name}</h1>
                    <p>{age}, {location}</p>
                    <p>{blurb}</p>
                </div>
            </div>
        );
    }

    
}

export default Card;