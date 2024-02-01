import Header from "./components/Header";
import Title from "./components/Screens/Title";
import Clients from "./components/Screens/Clients";
import Track from "./components/Screens/Track";
import Footer from "./components/Footer";
import Services from "./components/Screens/Services";

const App = () => {
  return (
    <>
      <Header />
      <Title />
      <Services />
      <Clients />
      <Track />
      <Footer />
    </>
  );
};

export default App;
