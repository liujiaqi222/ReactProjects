import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="bd-grid">
          <SideBar />
          <TodoList />
        </div>
      </main>
    </div>
  );
}

export default App;
