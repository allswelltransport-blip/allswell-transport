import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, MapPin, Truck, Mail, Phone } from "lucide-react";
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

  const clients = [
    "Lotte Duty Free",
    "Cocoa Trees",
    "adidas",
    "Charles & Keith",
    "Braun Büffel",
    "iStudio",
    "Marché",
    "Ralph Lauren",
    "WHSmith"
  ];

  return (
    <main className="site">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <nav className="nav">
        <div className="brand">ALLSWELL TRANSPORT</div>
        <a href={whatsapp} className="nav-button">WhatsApp Us</a>
      </nav>

      <section className="hero">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Premium Staff Transport • Singapore • 24/7
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
        <p>Trusted by businesses across airport, retail and corporate operations</p>
        <div className="client-grid">
          {clients.map((client) => (
            <span key={client}>{client}</span>
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
                business operating needs.
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
            From late-night staff movements to airport-linked operations, we focus
            on punctuality, responsiveness, safety and smooth coordination.
          </p>
        </div>

        <div className="feature-list">
          <div><Clock /> 24/7 operations</div>
          <div><ShieldCheck /> Safe & reliable coordination</div>
          <div><Truck /> 4–6 seater cars and 13-seater vans</div>
          <div><MapPin /> Singapore-wide coverage</div>
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
