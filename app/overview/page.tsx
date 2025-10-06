import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'General Knowledge | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="General Knowledge" subtitle="Leiomyosarcoma (LMS) is a rare cancer that arises from smooth muscle cells." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="What is LMS?">
            LMS can occur in different parts of the body, including the uterus, abdomen, and blood vessels. Because it is rare, care at centers with sarcoma expertise is often recommended.
          </ContentSection>
          <ContentSection title="How common is it?">
            Leiomyosarcoma is uncommon compared to many other cancers. Estimates vary, but sarcomas overall make up about 1% of adult cancers.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
