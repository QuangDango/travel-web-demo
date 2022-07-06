import 'grid.css';
import 'App.css';
import Header from './Components/Header/Header';
import Maincontent from './Components/MainContent/Maincontent';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App" style={{overflow:"hidden"}}>
      <Header/>
      <Maincontent />
      <Footer/>
    </div>
  );
}

export default App;
