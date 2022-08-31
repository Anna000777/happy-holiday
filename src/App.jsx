import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { TextContextProvider } from "./context/textContext";
import { ImgContextProvider } from "./context/imgContext";

const wrapper = {
  display: 'flex',
  flexDirection:'column',
  height: '100vh',
}

const App = () => {
  return (
    <div style={wrapper}>
      <ImgContextProvider>
        <TextContextProvider>
          <Header />
          <Card />
          <Footer />
        </TextContextProvider>
      </ImgContextProvider>
    </div>
  );
}

export default App;
