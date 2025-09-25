'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { DevelopingContentGuide } from './developing-content-guide';

const guideSections = [
  {
    title: "Authors' Guide",
    items: [
      { title: 'Checklists', href: '#' },
      {
        title: 'Course Repository',
        items: [
          { title: 'course.yml', href: '#' },
          { title: 'Course Repository Structure', href: '#' },
          { title: 'instructor/', href: '#' },
          { title: 'presentation/', href: '#' },
          { title: 'supporting/labs', href: '#' },
          { title: 'supporting/resources', href: '#' },
          { title: 'supporting/setup', href: '#' },
        ],
      },
      {
        title: 'How To...',
        items: [
          { title: 'Add an Appendix', href: '#' },
          { title: 'Add a Chapter', href: '#' },
          { title: 'Add a Draw.io Chart', href: '#' },
          { title: 'Add Files to a Chapter', href: '#' },
          { title: 'Add Files to a Lab', href: '#' },
          { title: 'Add a Lab', href: '#' },
          { title: 'Add a Mermaid Chart', href: '#' },
          { title: 'Add Software', href: '#' },
          { title: 'Add Speaker Notes', href: '#' },
          { title: 'Add Student Resources', href: '#' },
          { title: 'Debug Build Errors', href: '#' },
          { title: 'Preview a Release', href: '#' },
        ],
      },
      {
        title: 'Quick Start',
        items: [
          { title: 'Beginning Development', href: '#' },
          { title: 'Completing Development', href: '#' },
          { title: 'Authoring a New Course', href: '#' },
          { title: 'Developing Content', href: '#' },
          { title: 'Prerequisites', href: '#' },
        ],
      },
      { title: 'Slide Anatomy', href: '#' },
      {
        title: 'Courseware Standards',
        items: [
          { title: 'Accessibility', href: '#' },
          { title: 'Chapter Structure', href: '#' },
          { title: 'Course Structure', href: '#' },
          { title: 'Formatting', href: '#' },
          { title: 'Technical Standards', href: '#' },
          { title: 'Writing', href: '#' },
        ],
      },
      { title: 'Courseware Workflow', href: '#' },
    ],
  },
  {
    title: 'Logistics',
    items: [{ title: 'Versioning', href: '#' }],
  },
  {
    title: 'Developers',
    items: [{ title: 'Courseware Development Guide', href: '#' }],
  },
];

const GuideItem = ({ item }: { item: { title: string; href: string } }) => (
  <li>
    <a href={item.href} className="hover:underline text-accent">
      {item.title}
    </a>
  </li>
);

const GuideList = ({ items }: { items: any[] }) => (
  <ul className="space-y-2 pl-6 list-disc list-inside marker:text-primary">
    {items.map((item, index) =>
      item.items ? (
        <li key={index}>
          <span className="font-semibold">{item.title}</span>
          <GuideList items={item.items} />
        </li>
      ) : (
        <GuideItem key={index} item={item} />
      )
    )}
  </ul>
);

export function DocumentationGuide() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="courseware-guide">
        <AccordionTrigger className="text-lg font-headline">Courseware Guide</AccordionTrigger>
        <AccordionContent>
          <GuideList items={guideSections} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="developing-content">
        <AccordionTrigger className="text-lg font-headline">Developing Content</AccordionTrigger>
        <AccordionContent>
          <DevelopingContentGuide />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
