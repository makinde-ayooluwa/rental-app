import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage({ auth }) {
  function authType() {
    switch (auth) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      default:
        return <Login />;
    }
  }

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      {/* ⚡ Moving Grid Background */}
      <div className="absolute inset-0 grid-bg"></div>

      {/* 🔥 Animated Light Beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="beam beam1"></div>
        <div className="beam beam2"></div>
        <div className="beam beam3"></div>
      </div>

      {/* 🧊 Glass Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl shadow-2xl p-6 w-[442px]">
        {authType()}
      </div>

      {/* 🎬 Styles */}
      <style>{`
        /* GRID BACKGROUND */
        .grid-bg {
          background-image: 
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: moveGrid 6s linear infinite;
        }

        @keyframes moveGrid {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(40px);
          }
        }

        /* LIGHT BEAMS */
        .beam {
          position: absolute;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, cyan, transparent);
          opacity: 0.6;
        }

        .beam1 {
          top: 20%;
          left: -50%;
          animation: beamMove 4s linear infinite;
        }

        .beam2 {
          top: 50%;
          left: -50%;
          animation: beamMove 6s linear infinite;
        }

        .beam3 {
          top: 80%;
          left: -50%;
          animation: beamMove 5s linear infinite;
        }

        @keyframes beamMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
      `}</style>
    </div>
  );
}
