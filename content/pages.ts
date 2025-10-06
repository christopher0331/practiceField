export type PageDef = { slug: string; title: string; summary: string };

export const pages: PageDef[] = [
  { slug: 'overview', title: 'Overview', summary: 'What leiomyosarcoma is and who it affects.' },
  { slug: 'symptoms', title: 'Symptoms', summary: 'Common signs and when to see a doctor.' },
  { slug: 'diagnosis', title: 'Diagnosis', summary: 'Imaging, biopsy, and pathology basics.' },
  { slug: 'staging', title: 'Staging', summary: 'How stage and grade are determined.' },
  { slug: 'treatment', title: 'Treatment Options', summary: 'Surgery, chemo, radiation, targeted therapy.' },
  { slug: 'surgery', title: 'Surgery', summary: 'Role of surgery and margin status.' },
  { slug: 'chemotherapy', title: 'Chemotherapy', summary: 'When chemo is used and common regimens.' },
  { slug: 'radiation', title: 'Radiation Therapy', summary: 'External beam, timing, and side effects.' },
  { slug: 'targeted-therapy', title: 'Targeted Therapy', summary: 'Therapies directed at tumor biology.' },
  { slug: 'clinical-trials', title: 'Clinical Trials', summary: 'Why trials matter and how to find them.' }
];

export const groups: { label: string; items: string[] }[] = [
  { label: 'Basics', items: ['overview', 'symptoms', 'diagnosis', 'staging'] },
  { label: 'Treatments', items: ['treatment', 'surgery', 'chemotherapy', 'radiation', 'targeted-therapy'] },
  { label: 'Research', items: ['clinical-trials'] }
];
