import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import RepositoryList from "./components/RepositoryList";
import Home from "./pages/home";
import Profile from "./pages/profile";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />}>
            <Route path="repos" element={<RepositoryList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
