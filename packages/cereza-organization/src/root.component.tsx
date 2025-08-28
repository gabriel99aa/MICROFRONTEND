import React from "react";

export default function Root({ name = "@vr/angular-feature" }) {
  return (
    <>
      <section className="ng-hero" aria-label={`${name} microfrontend`}>
        {/* Capa de ruido/grano */}
        <div className="ng-noise" aria-hidden="true" />

        {/* Contenido centrado: logo → título → botón */}
        <div className="ng-center">
          <div className="ng-logo-wrap" aria-hidden="true">
            <svg
              className="ng-logo"
              viewBox="0 0 200 200"
              role="img"
              aria-label="Angular style logo"
            >
              <defs>
                <linearGradient id="ngGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff2d75" />
                  <stop offset="50%" stopColor="#b03cff" />
                  <stop offset="100%" stopColor="#6a00ff" />
                </linearGradient>
              </defs>
              {/* “A” estilizada */}
              <polygon points="70,40 40,150 55,160 92,60" fill="url(#ngGrad)" />
              <polygon
                points="130,40 108,60 145,160 160,150"
                fill="url(#ngGrad)"
              />
              <polygon points="100,60 84,120 116,120" fill="url(#ngGrad)" />
              <polygon points="80,130 120,130 100,160" fill="url(#ngGrad)" />
            </svg>
          </div>

          {/* Título del microfrontend */}
          <h1 className="ng-title">{name}</h1>

          {/* Botón acción */}
          <button
            className="ng-cta"
            onClick={() => alert(`${name} • ready ✨`)}
          >
            Explorar
          </button>
        </div>

        {/* Texto accesible para single-spa */}
        <p className="sr-only">{name} is mounted!</p>
      </section>

      <style>{`
        /* Fuente redondeada, elegante */
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');

        :where(html, body){height:100%}
        :where(body){margin:0}

        :root{
          --bg-deep:#130b1a;
          --bg-dark:#1a0f23;
          --magenta:#ff2d75;
          --violet:#6a00ff;
          --white:#fff;
        }

        .ng-hero{
          position:relative;
          min-height:100vh;
          min-height:100dvh;
          overflow:hidden;
          background:
            radial-gradient(70% 50% at 15% 8%, rgba(255,45,117,.35), transparent 55%),
            radial-gradient(70% 60% at 92% 82%, rgba(106,0,255,.45), transparent 60%),
            radial-gradient(120% 120% at 50% 30%, #1b0f26 0%, #0f0a13 70%),
            linear-gradient(180deg, var(--bg-dark), var(--bg-deep));
          display:grid;
          place-items:center;
          padding: clamp(24px, 5vw, 56px);
        }

        .ng-noise{
          position:absolute; inset:0; pointer-events:none; opacity:.18; mix-blend-mode:overlay;
          background-image: url("data:image/svg+xml;utf8,\
            <svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>\
              <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter>\
              <rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/>\
            </svg>");
          background-size: 280px 280px;
          animation: grain 6s steps(6) infinite;
        }
        @keyframes grain{
          0%{transform:translate(0,0)}
          20%{transform:translate(-10px,6px)}
          40%{transform:translate(8px,-12px)}
          60%{transform:translate(12px,8px)}
          80%{transform:translate(-6px,10px)}
          100%{transform:translate(0,0)}
        }

        .ng-center{
          position:relative;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap: clamp(14px, 3vw, 22px);
          text-align:center;
        }

        .ng-logo-wrap{
          filter:
            drop-shadow(0 0 24px rgba(255,45,117,.55))
            drop-shadow(0 0 48px rgba(106,0,255,.35));
          animation: pulse 5.5s ease-in-out infinite;
        }
        @keyframes pulse{ 0%,100%{transform:scale(1)} 50%{transform:scale(1.03)} }

        .ng-logo{ width: clamp(180px, 28vw, 360px); height: clamp(180px, 28vw, 360px); }

        .ng-title{
          margin: 6px 0 0;
          font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-weight: 900;
          letter-spacing: .5px;
          font-size: clamp(28px, 6vw, 56px);
          line-height: 1.05;
          background: linear-gradient(90deg, var(--magenta), #b03cff, var(--violet));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow:
            0 6px 22px rgba(106,0,255,.35),
            0 2px 8px rgba(0,0,0,.25);
        }

        .ng-cta{
          margin-top: clamp(6px, 1.5vw, 10px);
          border: 1px solid rgba(255,255,255,.22);
          padding: 12px 22px;
          border-radius: 14px;
          font-weight: 800;
          font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: var(--white);
          background:
            radial-gradient(90% 120% at 0% 0%, rgba(255,255,255,.1), transparent 60%),
            linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.06));
          box-shadow:
            0 8px 22px rgba(106,0,255,.35),
            inset 0 0 0 1px rgba(255,255,255,.12);
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .ng-cta:hover{
          transform: translateY(-2px);
          box-shadow:
            0 12px 30px rgba(106,0,255,.45),
            inset 0 0 0 1px rgba(255,255,255,.18);
          border-color: rgba(255,255,255,.35);
        }
        .ng-cta:active{ transform: translateY(0) }

        .sr-only{
          position:absolute; width:1px; height:1px; padding:0; margin:-1px;
          overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
        }

        @media (max-width: 600px){
          .ng-logo{ width: clamp(160px, 50vw, 260px); height: clamp(160px, 50vw, 260px); }
        }
      `}</style>
    </>
  );
}
