import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Radiation Therapy | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Radiation Therapy" subtitle="Radiation can help reduce local recurrence and alleviate symptoms." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="When is Radiation Used?">
            Often used before or after surgery for limb or trunk sarcomas. It may also be used palliatively to relieve pain or bleeding.
          </ContentSection>
          <ContentSection title="Approach and Side Effects">
            External beam techniques are most common. Side effects depend on the area treated and total dose.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
