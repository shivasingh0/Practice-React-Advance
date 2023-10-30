import "./App.css";
import Home from "./nestedRoute/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./nestedRoute/LoginPage";
import First from "./nestedRoute/First";
import Second from "./nestedRoute/Second";
import Third from "./nestedRoute/Third";
import Hello from "./nestedRoute/Hello";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/firstuser" element={<First />}>
          <Route path="seconduser" element={<Second />} >
            <Route path="thirduser" element={<Third />} >
              <Route path="hello" element={ <Hello/> } />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
