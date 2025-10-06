import Link from 'next/link';
import Hero from '../components/Hero';
import { pages } from '../content/pages';

export default function HomePage() {
  return (
    <div>
      <Hero title="Understanding LMS" subtitle="A structured guide to symptoms, diagnosis, staging, and treatment options." />
      <div className="content">
        <div className="section">
          <h2>Explore Topics</h2>
          <p>Use the mega menu above or pick a topic below to get started.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {pages.map(p => (
              <Link key={p.slug} href={`/${p.slug}`} className="card" style={{ display: 'block', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1rem' }}>
                <strong>{p.title}</strong>
                <div style={{ color: '#475569', fontSize: 14, marginTop: 6 }}>{p.summary}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
