## 5. src/App.jsx
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-semibold"
        >
          Keeping Operations <br /> Moving Around the Clock
        </motion.h1>

        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          Premium transport solutions for airport operations, corporate teams,
          and businesses across Singapore — 24/7.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href={whatsapp} className="bg-white text-black px-6 py-3 rounded-full">
            Contact Us
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16">
        <h2 className="text-2xl text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "Airport Staff Transport",
            "Midnight Staff Transport",
            "Corporate Transport",
            "Event Transport",
            "Ad-hoc Transport",
            "Contract Operations"
          ].map((s) => (
            <div key={s} className="border border-white/10 p-6 rounded-xl bg-white/5">
              <Truck className="mb-3" />
              <p>{s}</p>
            </div>
          ))}

        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="grid md:grid-cols-4 text-center gap-6">
          <div><Clock /><p>24/7 Operations</p></div>
          <div><Shield /><p>Safe & Reliable</p></div>
          <div><Truck /><p>Scalable Fleet</p></div>
          <div><MapPin /><p>Singapore Coverage</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-20 border-t border-white/10">
        <h2 className="text-3xl">Let’s Move Your Operations</h2>
        <p className="text-white/60 mt-3">Available 24/7 via WhatsApp</p>
        <a href={whatsapp} className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full">
          WhatsApp Us
        </a>

        <div className="mt-10 text-white/50 text-sm">
          <p>admin@allswelltransport.com</p>
          <p>100 Jalan Sultan, Singapore</p>
        </div>
      </section>

    </div>
  );
}
```
