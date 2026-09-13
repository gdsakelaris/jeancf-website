import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ROUTES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Impact | Jean Cares Fund',
  description:
    'Nourishing families. Strengthening communities. Creating hope. See the children, families, and volunteers behind the work of the Jean Cares Fund.',
};

const moments = [
  {
    image: '/mont1.png',
    alt: 'A caregiver seated with five smiling children at a community meal program',
    caption:
      'Every child deserves access to fresh, nutritious food—and the opportunity to thrive.',
  },
  {
    image: '/mont3.png',
    alt: 'Volunteers serving hot meals to children lined up at a community center',
    caption: 'More than a meal—it’s dignity, hope, and a healthier future.',
  },
  {
    image: '/mont4.png',
    alt: 'Children smiling around a table as they share a hot meal together',
    caption:
      'When we nourish a child today, we invest in the possibilities of tomorrow.',
  },
  {
    image: '/mont2.png',
    alt: 'Children and volunteers gathered together, smiling after a community meal',
    caption:
      'Access to nutritious food shouldn’t be a privilege. It should be a promise to every child.',
  },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar showDonateButton={true} />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-black pt-16 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-2xl md:text-4xl font-bold text-white leading-snug text-balance mb-6">
              Nourishing families. Strengthening communities. Creating hope.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Behind every grant is a table, a meal, and a child who knows someone is
              looking out for them. These are the moments your generosity makes possible.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="bg-black pb-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {moments.map((moment) => (
              <figure
                key={moment.image}
                className="group flex flex-col bg-gray-900 rounded-2xl overflow-hidden border-t-4 border-red-600 shadow-xl hover:shadow-red-900/30 transition-shadow"
              >
                <div className="relative w-full aspect-[3/2] overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex-grow p-6 md:p-7">
                  <p className="text-lg md:text-xl font-bold text-white leading-snug text-pretty">
                    {moment.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Closing Call to Action */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Be Part of the Next Meal
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Every gift helps put fresh, nutritious food in front of a child who needs it.
              Join us in making that promise to every family we serve.
            </p>
            <Link
              href={ROUTES.donate}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Donate Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
