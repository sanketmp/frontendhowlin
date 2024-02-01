import Header from "./components/Header/Header";
import Title from "./components/Screens/Title";
import Clients from "./components/Screens/Clients";
import Track from "./components/Screens/Track";
import Footer from "./components/Footer/Footer";
import Services from "./components/Screens/Services";
import Hamberger from "./components/Hamburger/Hamberger";

const App = () => {
  return (
    <>
      <Header />
      <Title />
      <Clients />
      <Track />
      <Footer />
      {/* <Hamberger />
      <Services /> */}
    </>
  );
};

export default App;
