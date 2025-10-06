import { PropsWithChildren } from 'react';

export default function ContentSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div style={{ color: '#334155', lineHeight: 1.7 }}>{children}</div>
    </section>
  );
}
