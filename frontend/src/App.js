import { Container } from "react-bootstrap";

import Header from "./components/Header.js";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <h1>Welcome to Cadabra!</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
