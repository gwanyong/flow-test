import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import IssueList from "./components/IssueList";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<IssueList />} />
            {/* <Route path="/issue/:id" element={IssueDetail} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
