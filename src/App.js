import './App.css';
let name = "Devendra kumar "
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur, nesciunt sit ipsa incidunt corrupti quas placeat suscipit ducimus consectetur, iusto alias magni optio odit officia, qui dignissimos maxime dolorem!</p>
    </div>
    </>
  );
}

export default App;
