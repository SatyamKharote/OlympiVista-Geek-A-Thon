import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function Home() {
    return (
      <div className="App">
        <div>
          <div className="white-gradient"/>
          <Header />
          <Hero />
          <Footer/>
        </div>
      </div>
    );
  }

  export default Home;