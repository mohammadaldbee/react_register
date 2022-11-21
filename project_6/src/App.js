import "./App.css";
import Contant from "./contant";
import Nav from "./nav";
import Slider from "./slider";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Slider />

          <div className="col-8">
            <Nav />
            <hr />
            <Contant />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
