import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Books from "./pages/books";
import Add from "./pages/add";
import Update from "./pages/upload";
import './App.css'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Books/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update/:id"element={<Update/>}/>

      
     </Routes>

     </BrowserRouter>
      

    </div>
  );
}

export default App;
