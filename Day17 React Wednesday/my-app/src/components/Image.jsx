const Image = () => {
    return(
        <div className="image">
            <img src={require('../Storm.jpg')} alt="This image won't load!" width="200px"/>
        </div>
    );
}

export default Image;