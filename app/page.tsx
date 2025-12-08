import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedHero from "@/components/AnimatedHero";
import { ROUTES } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <AnimatedHero />

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Legacy</h2>

            <div className="grid md:grid-cols-2 gap-0 items-center">
              {/* Left - Image */}
              <div className="flex flex-col items-center mb-12 md:mb-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600 w-72">
                  <Image
                    src="/mother.jpg"
                    alt="Jean - Founder's Mother"
                    width={972}
                    height={1598}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-4 italic font-medium">
                  Jean, whose legacy of compassion lives on
                </p>
              </div>

              {/* Right - Both Text Blocks Stacked */}
              <div className="space-y-8">
                {/* First Text Block */}
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    My mother had a deep passion for ensuring that every child she cared for was fed, even when she didn&apos;t always have the means. With strong faith and unwavering belief, she demonstrated that no obstacle is too great when compassion guides us.
                  </p>
                  <p className="text-lg">
                    Her example showed us that generosity isn&apos;t just about what we give—it&apos;s about the multiplying effect of community care. One person&apos;s commitment can transform into systemic change.
                  </p>
                </div>

                {/* Quote Block */}
                <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-600">
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    &ldquo;Five loaves and two fishes&rdquo;
                  </p>
                  <p className="text-lg text-gray-700 italic">
                    We partner and give grants to programs that ensure children receive the nourishment they need, not only to survive, but to thrive. By taking the baton from my mother, we honor her example and work to build community systems where access to food is equitable, dependable, and rooted in dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-red-600">
                <div className="relative w-full h-48">
                  <Image
                    src="/strategic-grants.jpg"
                    alt="Strategic Grants"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Grants</h3>
                  <p className="text-gray-700">
                    We provide targeted funding to proven food security programs that directly serve children in need.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-red-600">
                <div className="relative w-full h-48">
                  <Image
                    src="/community-systems.jpg"
                    alt="Community Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Community Systems</h3>
                  <p className="text-gray-700">
                    We build sustainable food access systems that create equitable, dependable nutrition for entire communities.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-red-600">
                <div className="relative w-full h-48">
                  <Image
                    src="/dignified-care.jpg"
                    alt="Dignified Care"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 25%' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dignified Care</h3>
                  <p className="text-gray-700">
                    Every program we support treats children and families with the respect and dignity they deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multiplying Impact Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Your Gift Multiplies</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Just like the biblical parable of five loaves feeding thousands, your generosity creates a ripple effect. Strategic grants to proven programs mean your donation reaches children and transforms communities.
            </p>
            <Link
              href={ROUTES.donate}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Make an Impact Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
