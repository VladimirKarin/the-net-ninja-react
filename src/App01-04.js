import './App.css';

function App() {

  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.google.com'

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes {likes} times</p>

        <p>{10}</p>
        <p>'Hello, ninjas'</p>
        <p>[1, 2, 3, 4]</p>

        <a href={link}>Google Site</a>
      </div>

    </div>
  );
}

export default App;
