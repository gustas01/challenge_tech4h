import './App.css';
import LeftPanel from './components/leftPanel/leftPanel'
import RightPanel from './components/rightPanel/rightPanel'
import Header from './components/header/header'
import Footer from './components/footer/footer';

function App() {
  return (
    <section className="globalContainer">
      <Header/>      

      <div className="panels">
        <LeftPanel/>
        <RightPanel/>
      </div>

      <Footer/>
    </section>
    )
}

export default App;
