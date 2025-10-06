import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Targeted Therapy | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Targeted Therapy" subtitle="Therapies chosen based on tumor biology and prior treatments." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="Approach">
            Molecular profiling may identify options or clinical trials. Some agents have activity in specific sarcoma settings.
          </ContentSection>
          <ContentSection title="Considerations">
            Response and side effects vary. Ongoing monitoring and supportive care are important.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
