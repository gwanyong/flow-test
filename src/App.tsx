import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
    </Router>
  );
}

export default App;
