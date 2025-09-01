import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaMusic,
  FaPause,
} from "react-icons/fa";
import "./home.css";

const Home = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // === Observer untuk elemen .animate-on-scroll ===
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));

    // === Observer untuk elemen .fadeUp ===
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("animate", entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".fadeUp").forEach((el) => fadeObserver.observe(el));

    // Cleanup saat komponen unmount
    return () => {
      observer.disconnect();
      fadeObserver.disconnect();
    };
  }, []);

  // === Fungsi Play/Pause Musik ===
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // === Stop musik saat pengguna keluar dari tab atau halaman ===
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden && isPlaying) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  return (
    <div>
      {/* Background */}
      <div className="image-bg"></div>
      <div className="noise"></div>

      {/* Audio Player */}
      <audio ref={audioRef} src="/audio/lagu.mp3" loop />

      {/* Tombol Musik */}
      <div className="music-controller">
        <button className="music-button" onClick={toggleMusic}>
          {isPlaying ? <FaPause /> : <FaMusic />}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="title-left animate-on-scroll">PORT</div>
        <div className="subtitle-left animate-on-scroll">Azzura</div>

        <img
          src="/assets/img/me7.png"
          alt="character"
          className="character animate-on-scroll"
        />

        <div className="title-right animate-on-scroll">FOLIO</div>
        <div className="subtitle-right animate-on-scroll">
          FULLSTACK DEVELOPER
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-container">
        <div
          className="profile-card fadeUp"
          style={{ animationDelay: "0.3s", flexDirection: "column", gap: "40px" }}
        >
          {/* Dekorasi bintang */}
          <div className="star star1"></div>
          <div className="star star2"></div>
          <div className="star star3"></div>
          <div className="star star4"></div>
          <div className="star star5"></div>

          {/* Burung pojok */}
          <img
            src="/assets/img/burung.png"
            alt="burung kanan atas"
            className="bird-decoration bird-top-right"
          />
          <img
            src="/assets/img/burung.png"
            alt="burung kiri bawah"
            className="bird-decoration bird-bottom-left"
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "60px",
              width: "100%",
            }}
          >
            {/* Foto Profil */}
            <picture className="profile-photo">
              <source srcSet="/assets/img/me5.jpg" media="(max-width: 768px)" />
              <img
                src="/assets/img/me1.jpeg"
                alt="Foto Profil"
                className="profile-photo"
              />
            </picture>

            {/* Info Profil */}
            <div className="profile-info">
              <h1 className="fadeUp" style={{ animationDelay: "0.2s" }}>
                Melani Azzura Najma
              </h1>
              <h2 className="fadeUp" style={{ animationDelay: "0.4s" }}>
                Fullstack Developer
              </h2>
              <p className="fadeUp" style={{ animationDelay: "0.6s" }}>
              I am a vocational school student majoring in Software Engineering with a deep interest in application and website development.
              During my studies, I have developed various projects that strengthen my technical competencies while improving my analytical and problem-solving skills
              in creating effective, user-oriented digital solutions.
              </p>

              {/* Skills Umum */}
              <h3 className="skill-title">Skills</h3>
              <div className="profile-skills">
                <div className="skill fadeUp" style={{ animationDelay: "0.4s" }}>
                  Fullstack Web Development
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "0.6s" }}>
                  UI/UX Design & Implementation
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "0.7s" }}>
                  Mobile Development
                </div>
              </div>

              {/* Programming / Framework */}
              <h3 className="skill-title">Programming Languages & Frameworks</h3>
              <div className="profile-skills">
                <div className="skill fadeUp" style={{ animationDelay: "0.8s" }}>
                  HTML
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "0.9s" }}>
                  CSS
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "1s" }}>
                  JavaScript
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "1.1s" }}>
                  React.js
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "1.2s" }}>
                  Node.js & Express.js
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "1.3s" }}>
                  PHP & CodeIgniter
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "1.4s" }}>
                  MySQL & MongoDB
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "1.5s" }}>
                  Git & GitHub
                </div>
                <div className="skill fadeUp" style={{ animationDelay: "1.6s" }}>
                  Flutter
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="contact-card"
            style={{
              marginTop: "40px",
              boxShadow: "none",
              padding: "0",
              background: "transparent",
              backdropFilter: "none",
              border: "none",
            }}
          >
            <h2 className="fadeUp" style={{ animationDelay: "0.2s" }}>
              Contact Me
            </h2>
            <p className="fadeUp" style={{ animationDelay: "0.4s" }}>
              Contact me via one of the following platforms:
            </p>
            <div
              className="contact-info"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                flexWrap: "wrap",
              }}
            >
              <div
                className="contact-item fadeUp"
                style={{ animationDelay: "0.4s", textAlign: "center" }}
              >
                <a
                  href="mailto:dozukim@gmail.com"
                  className="contact-icon"
                  onClick={(e) => {
                    // Tunggu sedikit lalu arahkan ke Gmail Web jika mailto gagal
                    setTimeout(() => {
                      window.open(
                        "https://mail.google.com/mail/?view=cm&fs=1&to=dozukim@gmail.com",
                        "_blank"
                      );
                    }, 800);
                  }}
                >
                  <FaEnvelope />
                </a>
                <p>Email</p>
              </div>

              <div
                className="contact-item fadeUp"
                style={{ animationDelay: "0.5s", textAlign: "center" }}
              >
                <a
                  href="https://www.instagram.com/dozu_kim/"
                  target="_blank"
                  className="contact-icon"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <p>Instagram</p>
              </div>

              <div
                className="contact-item fadeUp"
                style={{ animationDelay: "0.6s", textAlign: "center" }}
              >
                <a
                  href="https://wa.me/+6285791294380"
                  target="_blank"
                  className="contact-icon"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <p>WhatsApp</p>
              </div>

              <div
                className="contact-item fadeUp"
                style={{ animationDelay: "0.7s", textAlign: "center" }}
              >
                <a
                  href="https://github.com/Melanii2525"
                  target="_blank"
                  className="contact-icon"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Melani Azzura. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;