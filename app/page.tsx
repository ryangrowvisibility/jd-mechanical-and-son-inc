"use client";

const navy = "oklch(0.22 0.055 237)";
const copper = "oklch(0.68 0.13 58)";
const bg = "oklch(0.98 0.005 210)";
const surface = "oklch(0.96 0.006 210)";
const textPrimary = "oklch(0.18 0.025 237)";
const textSecondary = "oklch(0.42 0.020 237)";
const textMuted = "oklch(0.60 0.012 237)";
const border = "oklch(0.90 0.008 210)";

const SERVICES = [
  { name: "AC Repair", desc: "Fast and accurate diagnosis of air conditioning issues. We find the problem the first time — no guessing, no return visits for the same issue." },
  { name: "Heating Repair", desc: "Furnace and heat pump servicing to keep your home warm when Bakersfield nights turn cold. Responsible work, done right." },
  { name: "HVAC Installation", desc: "Complete system replacements and new installations. Full system sizing and commissioning for maximum efficiency and comfort." },
  { name: "System Diagnosis", desc: "Thorough troubleshooting of complex HVAC issues. We don't replace parts to test — we diagnose first, then fix precisely." },
  { name: "Commercial HVAC", desc: "HVAC service for commercial properties in Bakersfield. Responsive, professional service that keeps your business running." },
  { name: "Maintenance", desc: "Preventive maintenance that catches problems before they become expensive repairs. Keep your system running at peak efficiency year-round." },
];

const TESTIMONIALS = [
  { text: "This is the best and I recommend them to everyone. Very responsible in their work — they take pride in doing things the right way.", service: "HVAC Service" },
  { text: "Great service and professionalism. Juan and his team showed up when they said they would, explained everything clearly, and did excellent work.", service: "AC Repair" },
];

function NavBar() {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: "oklch(0.98 0.005 210 / 0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "1.125rem", color: navy, letterSpacing: "0.01em" }}>JD Mechanical</span>
          <span style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 400, fontSize: "0.6875rem", color: textMuted, letterSpacing: "0.08em", textTransform: "uppercase" }}>and Son Inc.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Services", "About", "Reviews", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                style={{ color: textSecondary, fontFamily: "'Mulish', sans-serif", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", transition: "color 180ms ease", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = navy)}
                onMouseLeave={(e) => (e.currentTarget.style.color = textSecondary)}
              >{item}</a>
            ))}
          </div>
          <a href="tel:6614128222"
            style={{ backgroundColor: navy, color: "#fff", fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.875rem", padding: "0.5625rem 1.25rem", borderRadius: "6px", textDecoration: "none", transition: "background-color 160ms ease, transform 160ms ease", cursor: "pointer" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.30 0.050 237)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = navy)}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >(661) 412-8222</a>
        </div>
      </div>
    </nav>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px" }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill={copper} aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main style={{ fontFamily: "'Mulish', sans-serif" }}>

        {/* ── HERO ── */}
        <section id="hero" style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>

          {/* Background pattern */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${border} 1px, transparent 1px), linear-gradient(90deg, ${border} 1px, transparent 1px)`, backgroundSize: "48px 48px", opacity: 0.5, pointerEvents: "none" }} />

          {/* Large navy accent block */}
          <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", backgroundColor: navy, clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)", pointerEvents: "none", zIndex: 0 }} />
          <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", backgroundImage: "radial-gradient(oklch(0.68 0.13 58 / 0.08) 1.5px, transparent 1.5px)", backgroundSize: "24px 24px", clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)", pointerEvents: "none", zIndex: 1 }} />

          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "560px" }}>
              {/* Badge row */}
              <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "1.75rem" }}>
                {[{ t: "CSLB #1018705" }, { t: "BBB A+" }, { t: "Family-Owned" }].map(({ t }) => (
                  <span key={t} style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.6875rem", letterSpacing: "0.09em", textTransform: "uppercase", color: copper, backgroundColor: "oklch(0.68 0.13 58 / 0.08)", padding: "0.375rem 0.75rem", borderRadius: "999px", border: `1px solid oklch(0.68 0.13 58 / 0.2)` }}>
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="reveal-1" style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "clamp(2.75rem, 7vw, 5.5rem)", lineHeight: 1.0, color: textPrimary, letterSpacing: "-0.025em", marginBottom: "1.5rem" }}>
                Responsible.<br />
                <span style={{ color: copper }}>Professional.</span><br />
                Family.
              </h1>

              <p className="reveal-2" style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.125rem)", color: textSecondary, lineHeight: 1.7, maxWidth: "480px", marginBottom: "2rem" }}>
                Juan De La Torre and his son built JD Mechanical on the belief that HVAC work should be done right — not just fast. Licensed, insured, and backed by a BBB A+ rating that reflects the quality of every job.
              </p>

              <div className="reveal-2" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
                <StarRating count={5} />
                <span style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: textPrimary }}>4.5 stars</span>
                <span style={{ color: border, fontSize: "0.875rem" }}>·</span>
                <span style={{ fontFamily: "'Mulish', sans-serif", fontSize: "0.875rem", color: textMuted }}>Google & Yelp reviews</span>
              </div>

              <div className="reveal-3" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="tel:6614128222"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: navy, color: "#fff", fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none", transition: "background-color 160ms ease, transform 160ms ease", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.30 0.050 237)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = navy)}
                  onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                  onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.07 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Call (661) 412-8222
                </a>
                <a href="#services"
                  style={{ color: navy, fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 1.5rem", borderRadius: "8px", textDecoration: "none", border: `2px solid ${border}`, transition: "border-color 200ms ease, background-color 200ms ease", cursor: "pointer" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "oklch(0.75 0.020 237)"; e.currentTarget.style.backgroundColor = surface; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = border; e.currentTarget.style.backgroundColor = "transparent"; }}
                >Our Services</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAMILY STORY + CREDENTIALS ── */}
        <section id="about" style={{ backgroundColor: navy, padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: copper, marginBottom: "1rem" }}>Our Story</p>
              <h2 style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Built by family.<br />Built to last.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.020 237)", lineHeight: 1.7 }}>
                  JD Mechanical and Son Inc is exactly what the name says — a family business. Juan De La Torre built this company with his son as his partner, creating an operation where every job carries the weight of a family&rsquo;s reputation.
                </p>
                <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.020 237)", lineHeight: 1.7 }}>
                  Customers consistently describe JD Mechanical as &ldquo;the most responsible&rdquo; HVAC team they&rsquo;ve worked with. That&rsquo;s not an accident — it&rsquo;s the direct result of two people who care about their name being attached to every job.
                </p>
                <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "1.0625rem", color: "oklch(0.78 0.020 237)", lineHeight: 1.7 }}>
                  Based on Wible Rd in Bakersfield and serving residential and commercial clients throughout Kern County.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "CSLB License", value: "#1018705", sub: "California Contractors License" },
                { label: "BBB Rating", value: "A+", sub: "Better Business Bureau" },
                { label: "Service", value: "Residential", sub: "& Commercial HVAC" },
                { label: "Hours", value: "M–F", sub: "8:00 AM – 4:00 PM" },
              ].map(({ label, value, sub }) => (
                <div key={label} style={{ backgroundColor: "oklch(0.30 0.050 237)", border: "1px solid oklch(0.35 0.048 237)", borderRadius: "12px", padding: "1.5rem 1.25rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 600, fontSize: "0.6875rem", letterSpacing: "0.09em", textTransform: "uppercase", color: copper, marginBottom: "0.5rem" }}>{label}</div>
                  <div style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "1.625rem", color: "#fff", lineHeight: 1.1, marginBottom: "0.375rem" }}>{value}</div>
                  <div style={{ fontFamily: "'Mulish', sans-serif", fontSize: "0.8125rem", color: "oklch(0.65 0.020 237)" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" style={{ padding: "6rem 1.5rem", backgroundColor: bg }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: copper, marginBottom: "1rem" }}>Services</p>
            <h2 style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: textPrimary, lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>HVAC work you can count on.</h2>
            <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "1.0625rem", color: textSecondary, lineHeight: 1.65, maxWidth: "520px", marginBottom: "3rem" }}>
              From quick repairs to full system installations, residential to commercial — JD Mechanical handles it all with the same careful attention to quality.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {SERVICES.map((s) => (
                <div key={s.name}
                  style={{ backgroundColor: surface, border: `1px solid ${border}`, borderRadius: "12px", padding: "1.75rem", transition: "border-color 200ms ease, box-shadow 200ms ease", cursor: "default" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "oklch(0.68 0.13 58 / 0.35)"; el.style.boxShadow = "0 4px 24px oklch(0.22 0.055 237 / 0.06)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = border; el.style.boxShadow = "none"; }}
                >
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "oklch(0.22 0.055 237 / 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={navy} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v20M2 12h20" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "1.0625rem", color: textPrimary, marginBottom: "0.625rem" }}>{s.name}</h3>
                  <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "0.9375rem", color: textMuted, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" style={{ padding: "6rem 1.5rem", backgroundColor: surface }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: copper, marginBottom: "1rem" }}>Customer Reviews</p>
            <h2 style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: textPrimary, lineHeight: 1.1, marginBottom: "3rem", letterSpacing: "-0.02em" }}>
              4.5 stars. Consistently responsible.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ backgroundColor: "#fff", border: `1px solid ${border}`, borderRadius: "14px", padding: "2rem" }}>
                  <StarRating count={5} />
                  <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "1rem", color: textSecondary, lineHeight: 1.7, margin: "1rem 0", fontStyle: "italic" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: textMuted, textTransform: "uppercase", letterSpacing: "0.07em" }}>{t.service} · Verified</p>
                </div>
              ))}
            </div>

            {/* Google Maps link */}
            <div style={{ textAlign: "center" }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=JD%20Mechanical%20%26%20Son%20Inc.&query_place_id=ChIJ0S9BfcBq6oAR0nuWutXQl88"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: navy, textDecoration: "none", borderBottom: `1px solid oklch(0.22 0.055 237 / 0.35)`, paddingBottom: "2px" }}
              >
                View JD Mechanical on Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "6rem 1.5rem", backgroundColor: bg }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: copper, marginBottom: "1rem" }}>Contact</p>
              <h2 style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: textPrimary, lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Ready to get it fixed?
              </h2>
              <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "1.0625rem", color: textSecondary, lineHeight: 1.65, marginBottom: "2.5rem" }}>
                Call Juan directly. A responsible contractor picks up the phone.
              </p>
              <a href="tel:6614128222"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", backgroundColor: navy, color: "#fff", fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "1.125rem", padding: "1rem 2rem", borderRadius: "8px", textDecoration: "none", marginBottom: "2.5rem", transition: "background-color 160ms ease, transform 160ms ease", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "oklch(0.30 0.050 237)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = navy)}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.07 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                (661) 412-8222
              </a>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { label: "Address", value: "4312 Wible Rd, Bakersfield, CA 93313" },
                  { label: "Hours", value: "Monday–Friday, 8:00 AM–4:00 PM" },
                  { label: "Service Area", value: "Bakersfield and Kern County" },
                  { label: "License", value: "CSLB #1018705" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ fontFamily: "'Mulish', sans-serif", fontWeight: 700, fontSize: "0.8125rem", color: textMuted, minWidth: "90px" }}>{label}</span>
                    <span style={{ fontFamily: "'Mulish', sans-serif", fontSize: "0.9375rem", color: textSecondary, lineHeight: 1.5 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: "14px", overflow: "hidden", border: `1px solid ${border}` }}>
              <iframe
                title="JD Mechanical location in Bakersfield, CA"
                src="https://maps.google.com/maps?q=4312+Wible+Rd+Bakersfield+CA+93313&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                style={{ display: "block", border: "none" }}
              />
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: navy, padding: "2.5rem 1.5rem", borderTop: "1px solid oklch(0.30 0.050 237)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <div style={{ fontFamily: "'Josefin Slab', serif", fontWeight: 700, fontSize: "1.0625rem", color: "#fff" }}>JD Mechanical and Son Inc.</div>
              <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "0.8125rem", color: "oklch(0.60 0.020 237)", marginTop: "0.25rem" }}>CSLB #1018705 · BBB A+ · Bakersfield, CA</p>
            </div>
            <p style={{ fontFamily: "'Mulish', sans-serif", fontSize: "0.8125rem", color: "oklch(0.50 0.020 237)" }}>
              © {new Date().getFullYear()} JD Mechanical and Son Inc.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
