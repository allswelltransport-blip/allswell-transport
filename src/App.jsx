import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  MapPin,
  Truck,
  Mail,
  Phone,
  CarFront,
  Building2,
  Users,
  Route
} from "lucide-react";
import "./styles.css";

export default function App() {
  const whatsapp = "https://wa.me/6597513276";

  const services = [
    "Airport Staff Transport",
    "Midnight Staff Transport",
    "Corporate Transport",
    "Event Transport",
    "Ad-hoc Transport",
    "Contract Operations"
  ];

  const trustStats = [
    { label: "Staff movements supported daily", value: "300+" },
    { label: "Operational availability", value: "24/7" },
    { label: "Vehicle categories", value: "4–13 seater" },
    { label: "Singapore coverage", value: "Islandwide" }
  ];

  return (
    <main className="site">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="road-light road-light-one" />
      <div className="road-light road-light-two" />

      <nav className="nav">
        <div className="brand">
          <div className="brand-mark">
            <CarFront size={22} />
          </div>
          <div>
            <div className="brand-name">Allswell Transport</div>
            <div className="brand-sub">Pte Ltd</div>
          </div>
        </div>

        <a href={whatsapp} className="nav-button">
          WhatsApp Us
        </a>
      </nav>

      <section className="hero">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Staff Transport • Singapore • 24/7
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Keeping Operations <br /> Moving Around the Clock
        </motion.h1>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Reliable, responsive and professionally coordinated transport solutions
          for airport operations, corporate teams, events and businesses across Singapore.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a href={whatsapp} className="primary-button">
            Speak With Us <ArrowRight size={18} />
          </a>

          <a href="mailto:admin@allswelltransport.com" className="secondary-button">
            Email Enquiry
          </a>
        </motion.div>
      </section>

      <section className="trust">
        <p className="trust-title">
          Supporting airport, retail, hospitality and corporate operations across Singapore.
        </p>

        <div className="stat-grid">
          {trustStats.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Our Services</p>
          <h2>Transport solutions built for operational reliability.</h2>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <div className="service-card" key={service}>
              <Truck size={28} />
              <h3>{service}</h3>
              <p>
                Flexible, coordinated and scalable transport support tailored to
                your business operating needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-panel">
        <div>
          <p className="eyebrow">Why Allswell</p>
          <h2>Designed for businesses that cannot afford transport uncertainty.</h2>
          <p>
            From late-night staff movements to airport-linked operations, we focus on
            punctuality, responsiveness, safety and smooth coordination.
          </p>
        </div>

        <div className="feature-list">
          <div><Clock /> 24/7 operational support</div>
          <div><ShieldCheck /> Safe and reliable coordination</div>
          <div><CarFront /> 4–6 seater cars and 13-seater vans</div>
          <div><Route /> Efficient route planning</div>
          <div><Building2 /> Corporate transport experience</div>
          <div><Users /> Driver recruitment opportunities</div>
        </div>
      </section>

      <section className="cta">
        <h2>Let’s keep your team moving.</h2>
        <p>Available 24/7 for transport enquiries and operational coordination.</p>

        <div className="contact-row">
          <a href={whatsapp}><Phone size={18} /> +65 9751 3276</a>
          <a href="mailto:admin@allswelltransport.com"><Mail size={18} /> admin@allswelltransport.com</a>
        </div>

        <p className="address">
          100 Jalan Sultan, #02-41, Sultan Plaza, Singapore 199001
        </p>
      </section>
    </main>
  );
}
