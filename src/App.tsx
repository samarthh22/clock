import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Clock from "./Components/Clock";
import Stopwatch from "./Components/Stopwatch";

export default function App() {
  return (
    <BrowserRouter>
      <div className='bg-black min-h-screen flex flex-col'>
        <Header />
        <div className='flex-1 flex flex-col'>
          <Routes>
            <Route path='/' element={<Clock />} />
            <Route path='/stopwatch' element={<Stopwatch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
