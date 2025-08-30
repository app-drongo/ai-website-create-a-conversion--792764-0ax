import Pageheader from '@/components/Pageheader';
import Features1 from '@/components/Features1';
import Cta1 from '@/components/Cta1';

export default function ProductGridPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Features1 />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Cta1 />
      </section>
    </main>
  );
}