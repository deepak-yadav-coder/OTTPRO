import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import BottomNav from "./components/bottom.jsx";

import HomePage from "./features/home/home-page.jsx";
import VideoPage from "./features/player/video-player.jsx";
import ChatNavigate from "./features/chats/chat-navigate.jsx";

import Logout from "./features/sidebar/logout.jsx";
import Profile from "./features/sidebar/profile.jsx";
import Settings from "./features/sidebar/settings.jsx";

import AuthPage from "./features/auth/auth-page.jsx";
import About from "./features/header/about.jsx";
import Contact from "./features/header/contact.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    // console.log(status)
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>

      {!isLoggedIn ? (
        // If NOT logged in
        <>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<AuthPage setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<AuthPage setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />} />
          </Routes>
        </>
      ) : (
        // If logged in
        <>
          <Sidebar />

          <div
            style={{ paddingBottom: "70px" }}
          >
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/logout"
                element={<Logout setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/" element={<HomePage />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/chat" element={<ChatNavigate />} />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <BottomNav />
          </div>

        </>
      )}
    </Router>
  );
}

export default App;