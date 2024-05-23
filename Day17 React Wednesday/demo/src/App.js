// we build the page in here and then it renders into the index.html file in the public folder 

import './App.css';
// remember to import the component
import FirstComponent from './components/FirstComponent';
import ImageComponent from './components/ImageComponent';
// import Card from './components/Card';
import itemsData from './itemsData.json'
import PlantCard from './components/PlantCard';

// in every app you create, this is the standard setup
function App() {
  return (
    <div className="App">
      <h1>SuzyQ</h1>
      <FirstComponent />
      <ImageComponent />
      <br/>
      {itemsData.map((item) => (
        <PlantCard
          name = {item.name}
          price = {item.price}
          imageUrl = {item.imageUrl}
        />
      ))}

      {/* <Card name={"Suzy"} age={32} favGame={"Minecraft"} pic={"https://source.unsplash.com/random/200x200?sig=1"}/>
      <Card name={"Ben"} age={36} favGame={"GTA V"} pic={"https://source.unsplash.com/random/200x200?sig=2"}/>
      <Card name={"Dave"} age={39} favGame={"Plants vs Zombies"} pic={"https://source.unsplash.com/random/200x200?sig=3"}/>
      <Card name={"Chris"} age={44} favGame={"FIFA"} pic={"https://source.unsplash.com/random/200x200?sig=4"}/> */}
    
    </div>
  );
}

export default App;
