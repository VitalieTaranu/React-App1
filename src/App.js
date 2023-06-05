import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Bine ai venit pe noul meu blog"
  const likes = 50;
  const link = "http://www.google.com";
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
     <p>{title}</p>
     <a href={link}>Google Site</a>
     <p>We have: {likes} likes</p>
    </div>
  );
}

export default App;
