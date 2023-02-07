import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent src="https://placekitten.com/500/500" alt="gatto" />
      </header>
      <body>
        <div className="main">
          <ButtonComponent title="Success" bg="green" />
          <ButtonComponent title="Danger" bg="red" />
          <ButtonComponent title="Disabled" bg="lightgray" />
        </div>
      </body>
    </div>
  );
}

export default App;
