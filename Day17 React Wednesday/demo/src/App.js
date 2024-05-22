// we build the page in here and then it renders into the index.html file in the public folder 

import './App.css';
// remember to import the component
import FirstComponent from './components/FirstComponent';
import ImageComponent from './components/ImageComponent';

// in every app you create, this is the standard setup
function App() {
  return (
    <div className="App">
      <h1>SuzyQ</h1>
      <FirstComponent />
      <ImageComponent />
    </div>
  );
}

export default App;
