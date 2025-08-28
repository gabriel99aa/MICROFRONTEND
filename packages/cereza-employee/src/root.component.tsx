import React from "react";

export default function Root({ name = "@vr/cereza-employee" }) {
  return (
    <>
      <section className="mf-hero" aria-label={`${name} microfrontend`}>
        <div className="mf-card">
          <div className="mf-logo" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="mf-logo-svg">
              <g className="mf-orbit">
                <ellipse
                  cx="50"
                  cy="50"
                  rx="28"
                  ry="12"
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="28"
                  ry="12"
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  transform="rotate(60 50 50)"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="28"
                  ry="12"
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  transform="rotate(-60 50 50)"
                />
              </g>
              <circle cx="50" cy="50" r="8" fill="white" />
            </svg>
          </div>

          <div className="mf-text">
            <h1 className="mf-title">{name}</h1>
            <p className="mf-sub">is mounted!</p>
          </div>
        </div>

        <button className="mf-cta" onClick={() => alert(`${name} ready ✨`)}>
          Explorar
        </button>
      </section>

      <style>{`
        /* 1) Font parecida a la de tu referencia */
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&display=swap');

        /* 2) Asegurar full-bleed */
        :where(html, body){height:100%}
        :where(body){margin:0}
        
        :root{
          --react-1:#00d8ff;   /* React blue */
          --react-2:#00b0ff;
          --glass:#ffffff1a;
          --ink:#0f172a;
          --white:#fff;
          --shadow: 0 18px 40px rgba(0,0,0,.18);
          --long: rgba(0,0,0,.22);        /* sombra larga */
          --long-text: #149ac9;           /* sombra de texto (azul más oscuro) */
        }

        .mf-hero{
          min-height:100vh;
          min-height:100dvh; /* navegadores móviles modernos */
          width:100%;
          box-sizing:border-box;
          padding:clamp(24px,5vw,56px);
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:24px;
          background:
            radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,.08), transparent 60%),
            linear-gradient(135deg, var(--react-1), var(--react-2));
          background-size: 200% 200%;
          animation: mf-bg 14s ease-in-out infinite alternate;
          overflow:hidden;
        }
        @keyframes mf-bg{
          0%{ background-position: 0% 0%; }
          100%{ background-position: 100% 100%; }
        }

        .mf-card{
          position:relative;
          display:flex;
          align-items:center;
          gap: clamp(18px,3vw,28px);
          padding: clamp(18px,3.5vw,36px) clamp(22px,4vw,48px);
          border-radius: 22px;
          background: var(--glass);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow), inset 0 0 0 1px rgba(255,255,255,.18);
          animation: mf-float 6s ease-in-out infinite;
        }

        @keyframes mf-float{
          0%,100%{ transform: translateY(0); }
          50%{ transform: translateY(-6px); }
        }

        .mf-logo{
          width: clamp(60px,9vw,90px);
          height: clamp(60px,9vw,90px);
          display:grid; place-items:center;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,.18));
        }
        .mf-orbit{ transform-origin:50% 50%; animation: mf-spin 22s linear infinite; }
        @keyframes mf-spin{ to{ transform: rotate(360deg); } }

        .mf-text{ display:flex; flex-direction:column; line-height:1; }
        .mf-title{
          margin:0;
          font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-weight:800;
          font-size: clamp(34px,6.8vw,64px);
          color: var(--white);
          letter-spacing: .2px;
        }
        .mf-sub{
          margin:.45rem 0 0;
          font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-weight:700;
          font-size: clamp(14px,2.2vw,18px);
          color: rgba(255,255,255,.92);
        }

        .mf-cta{
          border:0;
          padding: 12px 18px;
          border-radius: 14px;
          font-weight: 800;
          font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: var(--ink);
          background:
            radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,.75), transparent 60%),
            linear-gradient(135deg, #ffffff, #dff7ff);
          box-shadow: 0 10px 24px rgba(0,0,0,.16);
          cursor:pointer;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .mf-cta:hover{ transform: translateY(-2px); box-shadow: 0 16px 30px rgba(0,0,0,.20); }
        .mf-cta:active{ transform: translateY(0); }

        /* Opcional: reducir márgenes en pantallas muy pequeñas */
        @media (max-width:560px){
          .mf-card{ width:100%; }
          .mf-title{ text-shadow: 10px 10px 0 var(--long-text); }
        }
      `}</style>
    </>
  );
}
