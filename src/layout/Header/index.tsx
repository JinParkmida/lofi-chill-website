import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDayNight } from "../../store/slice/modeSlice";
import { setTheme } from "../../store/slice/themeSlice";
import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import DarkLightSwitch from "../../components/DarkLightSwitch";
import { RootState } from "../../store/store";

const Header = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const daynight = useSelector((state: RootState) => state.mode);
  const themes = useSelector((state: RootState) => state.theme.availableThemes);
  const dispatch = useDispatch();
  const { mode } = daynight;
  const location = useLocation();

  const daynightHandler = () => {
    dispatch(changeDayNight());
  };

  const fullscreenHandler = () => {
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <nav className="wrap">
      <div className="logo-container">
        <Link to="/">
          <h1>K-Beauty</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/skincare" className={location.pathname === "/skincare" ? "active" : ""}>
          Skincare
        </Link>
        <Link to="/journal" className={location.pathname === "/journal" ? "active" : ""}>
          Journal
        </Link>
      </div>
      <div className="nav-menu">
        <select 
          onChange={(e) => {
            const selectedTheme = themes.find(theme => theme.name === e.target.value);
            if (selectedTheme) {
              dispatch(setTheme(selectedTheme));
            }
          }}
          className="theme-selector"
        >
          {themes.map(theme => (
            <option key={theme.name} value={theme.name}>
              {theme.name === 'cherryBlossom' ? '🌸 Cherry Blossom' : '🌧️ Rainy Seoul'}
            </option>
          ))}
        </select>
        <div onClick={daynightHandler}>
          <DarkLightSwitch theme={mode} />
        </div>
        <button onClick={fullscreenHandler} className="fullscreen-btn">
          <i className="fas fa-expand fa-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;