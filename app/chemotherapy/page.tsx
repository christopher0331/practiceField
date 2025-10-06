import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ContentSection from '../../components/ContentSection';
import { pages } from '../../content/pages';

export const metadata = { title: 'Chemotherapy | Leiomyosarcoma Portal' };

export default function Page() {
  const nav = pages.map(p => ({ href: `/${p.slug}`, label: p.title }));
  return (
    <div>
      <Hero title="Chemotherapy" subtitle="Systemic treatment options for leiomyosarcoma." />
      <div className="layout">
        <Sidebar items={nav} />
        <article className="content">
          <ContentSection title="When is Chemotherapy Used?">
            Considered for high-risk localized disease (neoadjuvant or adjuvant) and for advanced/metastatic disease to help shrink or control tumors.
          </ContentSection>
          <ContentSection title="Common Regimens">
            Examples include doxorubicin-based therapy, gemcitabine/docetaxel, trabectedin, and others depending on prior treatments and tolerance.
          </ContentSection>
        </article>
      </div>
    </div>
  );
}
