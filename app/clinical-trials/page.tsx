import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Clinical Trials | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Clinical Trials" subtitle="Trials offer access to emerging therapies and help advance care for LMS." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="Why Consider a Trial?">
            Trials evaluate new treatments or new combinations of existing therapies. Participation may expand options and contributes to research.
          </ContentSection>
          <ContentSection title="How to Find Trials">
            Speak with your care team and search reputable registries. Eligibility depends on factors like prior treatment, tumor characteristics, and performance status.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
