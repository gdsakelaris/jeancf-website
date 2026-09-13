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
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug text-balance mb-6">
              Nourishing families. Strengthening communities. Creating hope.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Behind every grant is a table, a meal, and a child who knows someone is
              looking out for them. These are the moments your generosity makes possible.
            </p>
          </div>
        </section>

        {/* Photo + Caption Story */}
        <section className="pb-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
            {moments.map((moment, index) => (
              <div
                key={moment.image}
                className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
              >
                {/* Photo */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600">
                    <Image
                      src={moment.image}
                      alt={moment.alt}
                      width={714}
                      height={481}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Caption */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="w-16 h-1 bg-red-600 mb-6"></div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug text-pretty">
                    {moment.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Call to Action */}
        <section className="py-20 bg-black px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Be Part of the Next Meal
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every gift helps put fresh, nutritious food in front of a child who needs it.
              Join us in making that promise to every family we serve.
            </p>
            <Link
              href={ROUTES.donate}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
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
