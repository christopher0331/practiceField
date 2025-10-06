import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Treatment Options | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Treatment Options" subtitle="Treatment is tailored to tumor location, stage, and overall health." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="Multidisciplinary Care">
            Management often involves surgery, radiation, and systemic therapy, coordinated by a sarcoma team.
          </ContentSection>
          <ContentSection title="Goals of Treatment">
            Curative intent for localized disease; disease control and symptom relief for advanced disease.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
