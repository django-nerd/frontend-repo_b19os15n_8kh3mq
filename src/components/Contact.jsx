import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Let’s build your next big thing</h2>
              <p className="mt-4 text-white/70">Tell me a bit about your project — timeline, goals, and any links. I’ll get back within 24 hours.</p>
              <div className="mt-8 flex items-center gap-6 text-white/80">
                <a href="mailto:hello@you.com" className="hover:text-white">hello@you.com</a>
                <a href="https://x.com" target="_blank" className="hover:text-white" rel="noreferrer">X</a>
                <a href="https://www.linkedin.com" target="_blank" className="hover:text-white" rel="noreferrer">LinkedIn</a>
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Your name" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-500/50" />
              <input type="email" placeholder="Email" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-500/50" />
              <textarea rows="5" placeholder="Project details" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-rose-500/50" />
              <button type="button" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-rose-50 hover:text-rose-600 transition-colors">Send message</button>
            </motion.form>
          </div>
        </div>

        <div className="mt-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </section>
  )
}
