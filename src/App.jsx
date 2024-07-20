import Navbar from "./components/Navbar";
import Routes from "./routes/Routers";

import "./index.css";
const App = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Routes />
      </div>
    </div>
  );
};

export default App;
