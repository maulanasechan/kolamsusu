import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import ReachUs from "./pages/ReachUs";
import Services from "./pages/Services";
import Teams from "./pages/Teams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Footer />
      {/* <Clients /> */}
      <Teams />
      <ReachUs />
    </div>
  );
}

export default App;
