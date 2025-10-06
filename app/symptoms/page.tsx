import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Symptoms | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Symptoms" subtitle="Symptoms vary by tumor location and size; some people have no symptoms initially." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="Common Symptoms">
            • Painless lump or swelling
            <br/>• Abdominal discomfort or fullness
            <br/>• Bleeding (e.g., uterine)
            <br/>• Unintentional weight loss or fatigue
          </ContentSection>
          <ContentSection title="When to Seek Care">
            Any new, growing, or persistent mass should be evaluated. Early assessment can improve outcomes.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
