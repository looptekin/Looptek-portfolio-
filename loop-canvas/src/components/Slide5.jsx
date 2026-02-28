// components/Slide5.jsx
import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    image:
      "https://www.ed2go.com/common/images/2/23553/2305prod-GES2143-Certified-Social-Media-Manager-935x572.webp",
    title: "Social Media Management",
    description:
      "Full-funnel content strategy, scheduling & community management across Instagram, Facebook and LinkedIn — keeping your brand active and growing 24/7.",
    number: "01",
  },
  {
    image:
      "https://www.kisworks.com/blog/wp-content/uploads/2024/06/Top-10-Reasons-to-Choose-an-Indian-Website-Development-Company-in-2024-.jpg",
    title: "Website Design & Development",
    description:
      "We build responsive, SEO-optimized websites that not only look stunning but also convert visitors into customers — tailored to your brand and business goals.",
    number: "02",
  },
  {
    image:
      "https://3.imimg.com/data3/VQ/QB/MY-9569787/collateral-designing-and-printing-services-1000x1000.jpg",
    title: "Designing & Print Collaterals",
    description:
      "We create eye-catching designs for your brand, including logos, brochures, flyers, business cards and more - along with high quality printing to bring your brand to life.",
    number: "03",
  },
];

const Slide5 = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#080818",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Background Gradient Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, #080818 0%, #0A0A22 50%, #080818 100%)",
        }}
      />

      {/* Main Cyan Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,210,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Purple Accent Glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "15%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,92,231,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          
        </motion.div>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              margin: 0,
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.05,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00d2ff 0%, #6c5ce7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Other
            </span>{" "}
            <span style={{ color: "white" }}>Services</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.45, duration: 1 }}
            viewport={{ once: true }}
            style={{
              flex: 1,
              height: 1,
              marginBottom: 10,
              background: "linear-gradient(90deg, #00d2ff, #6c5ce7)",
              opacity: 0.3,
              transformOrigin: "left",
            }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65 }}
          viewport={{ once: true }}
          style={{
            margin: "12px 0 60px",
            fontSize: 14,
            color: "rgba(255,255,255,0.42)",
            letterSpacing: "0.02em",
            maxWidth: 520,
          }}
        >
          LoopteK a One-House Solution for all your marketing needs.
        </motion.p>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.4s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(0,210,255,0.4)";
                e.currentTarget.style.background =
                  "rgba(0,210,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.08)";
                e.currentTarget.style.background =
                  "rgba(255,255,255,0.03)";
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    color: "#00d2ff",
                    letterSpacing: "0.25em",
                    marginBottom: 8,
                  }}
                >
                  {service.number}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide5;