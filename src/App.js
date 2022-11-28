import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { ListNews } from "./components/ListNews/ListNews";
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/list" element={<ListNews />} />
          </Routes>
        </GlobalProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
