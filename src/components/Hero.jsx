import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs text-white/80">Available for new projects</span>
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Minimal. Bold. Yours.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            I craft clean, high-performing digital experiences for brands and founders. Let’s build something people remember.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-rose-50 hover:text-rose-600 transition-colors">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white hover:border-white/40 hover:bg-white/10 transition-colors">
              See my work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
