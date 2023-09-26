import { Container } from "react-bootstrap";

import Header from "./components/Header.js";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>
            <HomeScreen />
          </h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
