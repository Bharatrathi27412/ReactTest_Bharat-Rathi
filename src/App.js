import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent.js';
import Faq from './components/Faq';
import Categories from './components/Categories';
import Read from './components/Read';
import dash from './dash.png';
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import 'firebase/database';
import { getDatabase } from "firebase/database";
import Footer from './components/Footer';
import Topics from './components/Topics';



function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBJAh_tUO9bT7Rp7RvRqff9DWyAC0-YE-o",
  authDomain: "codestorm-a83ad.firebaseapp.com",
  databaseURL: "https://codestorm-a83ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "codestorm-a83ad",
  storageBucket: "codestorm-a83ad.appspot.com",
  messagingSenderId: "382876732430",
  appId: "1:382876732430:web:85dc32a8b245869189805f"

  };

  async function initializing (){
    const app = await initializeApp(firebaseConfig);
    console.log("done")
    const database = getDatabase(app);
  }

  initializing();

  return (
    <>
    <div className="App">
      <NavbarComponent />
      <img src={dash} width='101%' height='110%' />
      <div className='container' style={{paddingLeft:'60px'}}>
        <h1>How It Works</h1>
        <br />
        <br />
        <h4>Sea Basket delivers fresh sourced seafood in a few easy clicks</h4>
        <br /><br />
        <h1 style={{textAlign: 'left', paddingLeft: '60px'}}>Categories</h1>
      <Categories />
      <br /><br />
      <h1 style={{textAlign: 'Center', paddingLeft: '60px'}}>A GLANCE AT OUR PRODUCTS</h1>
      <br />
      <iframe style={{height: '500px', width: '100%', borderRadius: '30px'}} src='https://www.youtube.com/embed/O5hShUO6wxs'></iframe>
      <br /><br />
      <h1>FAQs</h1><br />
      <Faq />
      <br /><br />
      <h1 style={{textAlign: 'Center', paddingLeft: '60px'}}>HAVE A READ</h1>
      <br />
      <Read />
      <br/><br/>
      <h1 style={{textAlign: 'Center', paddingLeft: '60px'}}>TOPICS YOU CAN'T MISS</h1>
      <br />
      <Topics />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
