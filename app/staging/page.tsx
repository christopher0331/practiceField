import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Staging | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Staging" subtitle="Stage and grade help guide treatment decisions and prognosis." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="Stage vs. Grade">
            Stage describes how far the cancer has spread; grade reflects how abnormal the cells look and how quickly they may grow.
          </ContentSection>
          <ContentSection title="Staging Workup">
            Imaging of the primary site and chest is common. Additional scans depend on location and symptoms.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
