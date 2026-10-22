const ROW_ONE = ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Firebase', 'Tailwind CSS', 'Git & GitHub', 'Vite'];
const ROW_TWO = ['Responsive Design', 'UI / UX', 'REST APIs', 'Animations', 'Browser Extensions', 'Accessibility', 'Performance'];

function Row({ items, reverse = false }) {
  // Content is duplicated so the -50% translate loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-6 pr-6 font-display font-semibold text-xl sm:text-2xl md:text-3xl whitespace-nowrap text-slate-300 dark:text-white/15 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-300"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-violet-400" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="py-8 md:py-12 space-y-3 select-none" aria-hidden="true">
      <Row items={ROW_ONE} />
      <Row items={ROW_TWO} reverse />
    </div>
  );
}
