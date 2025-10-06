import Link from 'next/link';
import { pages, groups } from '../content/pages';

export default function MegaMenu() {
  return (
    <nav className="navbar" aria-label="Primary">
      {groups.map(group => (
        <div key={group.label} className="navgroup">
          <button aria-haspopup="true" aria-expanded="false" style={{ background: 'transparent', border: 0, padding: '0.5rem', cursor: 'pointer', color: '#0f172a' }}>
            {group.label}
          </button>
          <div className="panel" role="menu">
            {group.items.map(slug => {
              const p = pages.find(x => x.slug === slug)!;
              return (
                <div key={slug}>
                  <Link href={`/${p.slug}`}>{p.title}</Link>
                  <div style={{ fontSize: 12, color: '#64748b' }}>{p.summary}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
