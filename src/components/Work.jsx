import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Shift — SaaS Landing',
    tag: 'Design + Build',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Muse — Portfolio',
    tag: 'Design System',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'North — Brand Site',
    tag: 'Front-end',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-white/70">A few projects that reflect my focus on clarity and feel.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 font-semibold text-white hover:border-white/40 hover:bg-white/10">Book a slot</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-wider text-white/70">{p.tag}</span>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
