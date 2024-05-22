import './App.css';
import FirstComp from './components/FirstComp';
import Image from './components/Image';
import Card from './components/Card';
import selfie from './selfie.jpeg';

function App() {
  return (
    <div className="App">
      <FirstComp />
      <Image />
      <Card pic={selfie} name={"Suzy Brown"} age={"32"} location={"Cwmbran, South Wales"} blurb={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id semper risus in. Lectus sit amet est placerat in egestas erat imperdiet."} isActive={true}/>
    </div>
  );
}

export default App;
