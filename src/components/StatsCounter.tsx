export function StatsCounter({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="font-display text-3xl font-bold text-brand sm:text-4xl">{s.value}</p>
          <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
