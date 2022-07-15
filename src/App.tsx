import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import ItemDetails from "./components/ItemDetails"
import Header from "./components/Header"
import Items from "./components/Items"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/items/" element={<Items />} />
        <Route path="/items/:id" element={<ItemDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
