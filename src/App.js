import './App.css';
import './style/landingpage.css';
import NavBar from './components/Navbar.js'
import Intro from './components/Intro.js'
import Trending from './components/Trending.js'
import Horror from './components/Horror.js'
import Action from './components/Action.js'

function App() {
  return (
    <div>
      <div className="myBG">
        <NavBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="horror">
        <Horror />
      </div>
      <div className="act">
        <Action />
      </div>
    </div>
  );
}

export default App;
