import { Routes, Route } from "react-router-dom";
import Storefront from "./pages/Storefront";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Storefront />} />
      </Routes>
    </div>
  );
};

export default App;
