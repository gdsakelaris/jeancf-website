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
    bio: `Lee M Lampley ll is a former semi-professional basketball player and former financier who founded LK SMALL as a tribute to his family and the community that surrounded and raised him. Built on love, empathy, and a deep commitment to community, LK SMALL is grounded in the belief that access to life's basic necessities should always be available to our most vulnerable neighbors. LK SMALL serves as the bridge that connects communities to this essential access.`,
  },
  {
    name: 'Madan Rajavel',
    title: 'Vice President',
    image: '/madan-r.jpg',
    bio: `Madan is a strategic leader with over 25 years of experience, specializing in business transformation through technology and innovation. He excels at developing out-of-the-box strategies, standardizing technologies, and optimizing platform investments. As technology continues to evolve at an unprecedented pace, Madan's experience will be critical in leveraging these tools to reach our most vulnerable communities, while also enhancing customer engagement and overall experiences.`,
  },
  {
    name: 'Erin Hardnett',
    title: 'Secretary',
    image: '/erin-hardnett.jpg',
    bio: `Erin is a passionate advocate for using technology to address food insecurity and ensure that all at-risk children have access to quality food and fresh produce. She firmly believes that every child and adult deserves the nutrition they need to realize their full potential.

Erin is deeply committed to supporting the fund's mission of combating childhood hunger through compassionate giving and strong community partnerships.`,
  },
  {
    name: 'Jay Carter',
    title: 'Treasurer',
    image: '/jay_carter.jpg',
    bio: `Jay is deeply passionate about addressing food insecurity and strongly aligns with the organization's mission. His professional career spans over 40 years in the pharmaceutical and pharmacy space. Jay's expertise provides valuable insight as the organization works to combat food insecurity, strengthen community health outcomes, and ensure sustainable access to essential nutrition for vulnerable populations.`,
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
