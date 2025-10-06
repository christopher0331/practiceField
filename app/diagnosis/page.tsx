import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Diagnosis | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Diagnosis" subtitle="Imaging and pathology work together to confirm leiomyosarcoma." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="Imaging">
            MRI or CT scans help define size, involvement of nearby structures, and potential spread. PET/CT may be used in select cases.
          </ContentSection>
          <ContentSection title="Biopsy">
            Core needle biopsy is commonly recommended. Pathology review by sarcoma specialists improves diagnostic accuracy.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
