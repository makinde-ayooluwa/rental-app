import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

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

      {/* 🧊 Glass Form */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <button
            type="submit"
            className="mt-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center text-white/70 text-sm">
          Already have an account?{" "}
          <span className="text-cyan-400 cursor-pointer">
            <Link to="/login">Login</Link>
          </span>
        </p>
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
          0% { transform: translateY(0px); }
          100% { transform: translateY(40px); }
        }

        /* LIGHT BEAMS */
        .beam {
          position: absolute;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, cyan, transparent);
          opacity: 0.6;
        }

        .beam1 { top: 20%; left: -50%; animation: beamMove 4s linear infinite; }
        .beam2 { top: 50%; left: -50%; animation: beamMove 6s linear infinite; }
        .beam3 { top: 80%; left: -50%; animation: beamMove 5s linear infinite; }

        @keyframes beamMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </div>
  );
}