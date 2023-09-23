import "./App.css"
import Footer from "./Components/Footer";
import "./NavDesign/NavbarComponent";
import NavbarComponent from "./NavDesign/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
