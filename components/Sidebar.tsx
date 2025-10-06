import Link from 'next/link';

type Item = { href: string; label: string };
export default function Sidebar({ items }: { items: Item[] }) {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <nav>
        {items.map(i => (
          <Link key={i.href} href={i.href}>{i.label}</Link>
        ))}
      </nav>
    </aside>
  );
}
