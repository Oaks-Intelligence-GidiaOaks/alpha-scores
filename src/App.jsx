import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home, About, Services, Events, Contact, Register } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<center>Error page...</center>} />
      </Routes>
    </Router>
  );
}

export default App;
