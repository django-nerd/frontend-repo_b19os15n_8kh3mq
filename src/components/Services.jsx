import { motion } from 'framer-motion'
import { Sparkles, PenTool, Code2, Layout } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Brand Sites',
    desc: 'Minimal, conversion-focused websites with fast performance and clean visuals.'
  },
  {
    icon: PenTool,
    title: 'Design Systems',
    desc: 'Scalable UI kits and tokens for consistent product experiences.'
  },
  {
    icon: Code2,
    title: 'Web Apps',
    desc: 'Interactive, accessible, and reliable apps built with modern stacks.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-start justify-between gap-12 flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Sparkles size={16} className="text-rose-400" />
              <span className="text-xs text-white/80">What I do</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">Simple services that deliver results</h2>
            <p className="mt-4 text-white/70">No fluff — just the essentials done right. I combine strategy, design, and engineering to ship work that feels effortless to use.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-500/30">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
