import React from "react";
//css
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import PostDetail from "./pages/detail/Detail";
//redux
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:postId' element={<PostDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
