import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Surgery | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Surgery" subtitle="Surgical removal with negative margins is a cornerstone for localized LMS." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="Goals of Surgery">
            Achieve complete resection while preserving function. Intraoperative planning considers nearby nerves and vessels.
          </ContentSection>
          <ContentSection title="Margins and Reconstruction">
            Clear margins reduce local recurrence risk. Reconstruction may be needed depending on tumor location and size.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
