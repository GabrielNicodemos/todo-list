import Header from "./components/Header";
import TodosList from "./components/TodosList";

// CSS
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";



function App() {
  return (
    <div className="App">
      <Header />
      <TodosList />
    </div>
  );
}

export default App;
