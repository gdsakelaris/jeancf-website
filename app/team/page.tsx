import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Team | Jean Cares Fund',
  description: 'Meet the dedicated board of directors behind the Jean Cares Fund, working to address food insecurity for children.',
};

const teamMembers = [
  {
    name: 'Lee Lampley',
    title: 'President',
    image: '/leel.png',
    bio: `Lee M. Lampley II, a former professional basketball player and current financier, launched LK Small as a tribute to his beloved siblings and father. Founded on family principles and rooted in community, LK Small is a minority-owned transportation and logistics company established in 2020 and headquartered in Chicago.

Lee recalls at a very young age when his father loaded him and his siblings into their green station wagon for healthcare visits, for which they had to drive for miles to the suburbs. He later realized that the reason for travel was the lack of sufficient healthcare available in underserved communities like theirs.

As President of the Jean Cares Fund, Lee brings this same commitment to addressing inequities in underserved communities, focusing on food insecurity for children and ensuring that every child has access to the nutrition they need to thrive.`,
  },
  {
    name: 'Madan Rajavel',
    title: 'Vice President',
    image: '/team/madan-rajavel.jpg',
    bio: `Madan Rajavel serves as Vice President of the Jean Cares Fund, providing strategic leadership and operational guidance to support the organization's mission. With a strong commitment to social impact and community development, Madan helps ensure that the fund's programs effectively serve children facing food insecurity.

Madan's expertise and collaborative approach are instrumental in advancing the Jean Cares Fund's vision of a world where no child goes hungry.`,
  },
  {
    name: 'Erin Hardnett',
    title: 'Secretary',
    image: '/team/erin-hardnett.jpg',
    bio: `Erin Hardnett serves as Secretary of the Jean Cares Fund, ensuring effective governance and organizational management. With strong attention to detail and commitment to transparency, Erin helps maintain the integrity and accountability of the organization's operations.

Erin is dedicated to supporting the fund's mission of addressing childhood hunger through compassionate giving and community partnership.`,
  },
  {
    name: 'Jay Carter',
    title: 'Treasurer',
    image: '/team/jay-carter.jpg',
    bio: `Jay Carter serves as Treasurer of the Jean Cares Fund, overseeing financial management and ensuring responsible stewardship of donor contributions. With expertise in nonprofit finance, Jay helps ensure that every dollar donated is used effectively to serve children in need.

Jay's commitment to financial transparency and accountability supports the fund's goal of building sustainable, impactful programs that address food insecurity.`,
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar showDonateButton={true} />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Meet the Team
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
              The Jean Cares Fund is guided by a dedicated board of directors who share a deep commitment to addressing food insecurity for children. Our team brings together expertise in nonprofit management, public health, finance, community development, and philanthropy to ensure that every dollar donated creates meaningful, sustainable impact.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mt-4 leading-relaxed">
              Together, we honor Jean's legacy of compassion and service by building stronger families and healthier communities through dignified food access for all children.
            </p>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Board of Directors
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in Joining Our Mission?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We are always looking for passionate individuals who share our commitment to ending childhood hunger. If you are interested in joining the Jean Cares Fund advisory committee or learning more about volunteer opportunities, please reach out.
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
