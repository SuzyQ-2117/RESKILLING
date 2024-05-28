// you'll need to import images froom their local source into a variable name 
import Storm from '../media/Storm.jpeg'

const ImageComponent = () => {
    return(
        <div>
            <p>This is my dog, Storm</p>
            {/* Use curly brackets to note your image source  */}
            <img src={Storm} alt="A black dog" width="500px"/>
        </div>
    );
}

export default ImageComponent;