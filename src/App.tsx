import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/Header";
import SkincareTracker from "./components/SkincareTracker";
import MoodJournal from "./components/MoodJournal";
import { useAppSelector } from "./store/store";

function App() {
  const theme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <div style={{
      background: theme.background,
      minHeight: "100vh",
      "--primary-color": theme.primaryColor,
      "--secondary-color": theme.secondaryColor,
      "--text-color": theme.textColor,
      "--accent-color": theme.accentColor,
    } as React.CSSProperties}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skincare" element={<SkincareTracker />} />
          <Route path="/journal" element={<MoodJournal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;