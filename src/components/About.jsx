import useReveal from '../hooks/useReveal.js';

const TRAITS = [
  {
    title: 'Team Collaboration',
    description: 'Works smoothly with designers, backend engineers, and product owners.',
  },
  {
    title: 'Performance Under Pressure',
    description: 'Keeps quality high and stays focused when timelines are tight.',
  },
  {
    title: 'Creative Problem-Solving',
    description: "Finds practical, elegant solutions to tricky UI challenges.",
  },
  {
    title: 'Cooperative Mindset',
    description: 'Communicates clearly and adapts easily within a team workflow.',
  },
];

const STATS = [
  { value: '10+', label: 'Projects Built' },
  { value: '1+', label: 'Years Learning & Building' },
  { value: '100%', label: 'Responsive Delivery' },
];

export default function About() {
  const [copyRef, copyVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
        <div
          ref={copyRef}
          className={`transition-opacity duration-700 ${copyVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="inline-flex items-center gap-2 font-mono text-sm text-teal-500 dark:text-teal-300 mb-3 before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-teal-400">
            About Me
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-5">
            Building interfaces people enjoy using
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            I'm a frontend developer focused on turning ideas into interfaces
            that feel fast, look sharp, and work everywhere — from a small
            phone screen to a wide desktop monitor. My toolkit centers on
            HTML, CSS, JavaScript, and React, and I'm comfortable taking a
            project from a blank file to a polished, deployed product.
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Outside of writing code, I enjoy collaborating closely with
            designers and backend teams, staying cooperative when priorities
            shift, and keeping a clear head when deadlines get tight. I bring
            a creative mind to problems that don't have an obvious answer,
            and I genuinely enjoy the process of refining something until it
            just feels right.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
            {TRAITS.map((trait) => (
              <div
                key={trait.title}
                className="bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/10 rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400"
              >
                <h4 className="font-display font-semibold text-sm mb-1">{trait.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={statsRef}
          className={`transition-opacity duration-700 ${statsVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#121826] dark:to-[#1a2233] border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center border-slate-200 dark:border-white/10 pb-4 sm:pb-0 sm:pr-4 ${
                  index < STATS.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''
                }`}
              >
                <div className="font-display text-3xl md:text-4xl text-teal-500 dark:text-teal-300">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
