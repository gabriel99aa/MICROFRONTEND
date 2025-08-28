import React from "react";

export default function Root({ name = "@vr/cereza-auth" }) {
  return (
    <>
      <section className="vue-hero" aria-label={`${name} microfrontend`}>
        {/* Contenido centrado */}
        <div className="vue-center">
          {/* Logo Vue */}
          <div className="vue-logo-wrap" aria-hidden="true">
            <svg
              className="vue-logo"
              viewBox="0 0 256 220"
              role="img"
              aria-label="Vue logo"
            >
              <path d="M0 0h68l60 98 60-98h68L128 220 0 0z" fill="#41B883" />
              <path d="M68 0h44l16 26 16-26h44L128 95 68 0z" fill="#35495E" />
            </svg>
          </div>

          {/* Título */}
          <h1 className="vue-title">{name}</h1>

          {/* CTA */}
          <button
            className="vue-cta"
            onClick={() => alert(`${name} • Exploración lista ✨`)}
          >
            Explorar
          </button>
        </div>

        {/* Capa de ruido/grano (recortada dentro del hero) */}
        <div className="vue-noise" aria-hidden="true" />

        {/* Accesibilidad */}
        <p className="sr-only">{name} is mounted!</p>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');

        /* Evita márgenes del documento; no tocamos overflow global */
        :where(html, body){height:100%}
        :where(body){margin:0}

        :root{
          --mint:#B9F3D6;
          --mint2:#A6EED0;
          --vue-green:#41B883;
          --vue-navy:#35495E;
          --ink:#0f172a;
          --white:#fff;
        }

        /* FULL-BLEED sin scroll */
        .vue-hero{
          position: fixed;          /* ocupa la ventana real */
          inset: 0;                 /* top/right/bottom/left = 0 */
          box-sizing: border-box;   /* padding no suma tamaño extra */
          padding: clamp(22px,5vw,56px);
          display: grid;
          place-items: center;
          background:
            radial-gradient(120% 120% at 70% 20%, var(--mint2), var(--mint)),
            linear-gradient(180deg, var(--mint), var(--mint2));
          /* Recorta cualquier rebalse (ruido/blur/shadows) */
          overflow: clip;
          /* Fallback para navegadores sin 'clip' */
          overflow: hidden;
        }

        .vue-center{
          max-width: min(92vw, 1000px);
          width: 100%;
          display:flex;
          flex-direction:column;
          align-items:center;
          text-align:center;
          gap: clamp(12px, 2.4vw, 20px);
        }

        .vue-logo{
          width: clamp(140px, 22vw, 260px);
          height: auto;
          filter:
            drop-shadow(0 6px 14px rgba(53,73,94,.25))
            drop-shadow(0 10px 28px rgba(65,184,131,.25));
          transform: translateZ(0);
          animation: vue-float 6s ease-in-out infinite;
        }
        @keyframes vue-float{
          0%,100%{ transform: translateY(0) }
          50%{ transform: translateY(-6px) }
        }

        .vue-title{
          margin: 4px 0 0;
          font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-weight: 900;
          letter-spacing: .3px;
          font-size: clamp(26px, 5.5vw, 54px);
          line-height: 1.05;
          background: linear-gradient(90deg, var(--vue-navy), var(--vue-green));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 2px 8px rgba(0,0,0,.12);
          max-inline-size: 100%;
          overflow-wrap: anywhere; /* por si el nombre es muy largo */
        }

        .vue-cta{
          border: 0;
          padding: 12px 22px;
          border-radius: 14px;
          font-weight: 800;
          font-family: 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: var(--ink);
          background:
            radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,.85), transparent 60%),
            linear-gradient(135deg, #ffffff, #e8fff5);
          box-shadow: 0 10px 24px rgba(53,73,94,.16);
          cursor:pointer;
          transition: transform .25s ease, box-shadow .25s ease;
          max-width: 100%;
        }
        .vue-cta:hover{
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(53,73,94,.20);
        }
        .vue-cta:active{ transform: translateY(0) }

        /* Capa de ruido (queda dentro del hero y por detrás) */
        .vue-noise{
          position:absolute; inset:-1px;  /* pequeño bleed interno recortado */
          pointer-events:none; opacity:.18; mix-blend-mode:overlay;
          background-image: url("data:image/svg+xml;utf8,\
            <svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>\
              <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter>\
              <rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/>\
            </svg>");
          background-size: 280px 280px;
          animation: grain 6s steps(6) infinite;
          z-index: 0;
        }
        @keyframes grain{
          0%{transform:translate(0,0)}
          20%{transform:translate(-10px,6px)}
          40%{transform:translate(8px,-12px)}
          60%{transform:translate(12px,8px)}
          80%{transform:translate(-6px,10px)}
          100%{transform:translate(0,0)}
        }

        /* contenido siempre encima del ruido */
        .vue-center, .sr-only { position: relative; z-index: 1; }

        /* Screen-reader only */
        .sr-only{
          position:absolute; width:1px; height:1px; padding:0; margin:-1px;
          overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
        }

        @media (max-width: 600px){
          .vue-logo{ width: clamp(120px, 45vw, 220px); }
        }
      `}</style>
    </>
  );
}