import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <strong>Leiomyosarcoma Portal</strong>
          <div style={{ color: '#94a3b8', fontSize: 14 }}>For educational purposes only. Not medical advice.</div>
        </div>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/overview">Overview</Link>
          <Link href="/treatment">Treatment</Link>
          <Link href="/clinical-trials">Clinical Trials</Link>
        </nav>
      </div>
    </footer>
  );
}
