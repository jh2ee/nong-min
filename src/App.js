import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Component/NavBar";
import Home from "./View/Home.js";
import AboutUs from "./View/AboutUs";
import Community from "./View/Community";
import Practice from "./View/Practice";
import MyPage from "./View/MyPage";
import Sign from "./View/Sign";
import Login from "./Component/Login";
import LoginHandler from "./Component/LoginHandler";
import Landing from "./View/Landing";
import SignUp from "./Component/SignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Sign />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login/oauth/callback/kakao"
            element={<LoginHandler />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
