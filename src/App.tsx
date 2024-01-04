import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/offers"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
