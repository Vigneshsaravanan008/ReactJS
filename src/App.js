import Home from './Home';
import Question from './Pages/Question';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
