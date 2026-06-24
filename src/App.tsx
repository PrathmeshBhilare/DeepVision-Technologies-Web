import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import CareerAccelerator from "./pages/CareerAccelerator";
import Domains from "./pages/Domains";
import DomainDetails from "./pages/DomainDetails";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PaymentSuccess from "./pages/PaymentSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="internships" element={<Internships />} />
          <Route path="dcap" element={<CareerAccelerator />} />
          <Route path="domains" element={<Domains />} />
          <Route path="domains/:id" element={<DomainDetails />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
