import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-amber-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JCF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Jean Cares Fund</span>
          </div>
          <Link
            href="/donate"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Donate Now
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              No Child Should Go Hungry
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4 leading-relaxed">
              Addressing food insecurity for children isn't just a mission—it's a continuation of my late mother's legacy.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              She lived by the biblical parable of using five loaves of bread to feed thousands, trusting that compassion and service multiply what we give.
            </p>
            <Link
              href="/donate"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Support Children's Nutrition
            </Link>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Legacy</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    My mother had a deep passion for ensuring that every child she cared for was fed, even when she didn't always have the means. With strong faith and unwavering belief, she demonstrated that no obstacle is too great when compassion guides us.
                  </p>
                  <p>
                    Her example showed us that generosity isn't just about what we give—it's about the multiplying effect of community care. One person's commitment can transform into systemic change.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-100 via-pink-50 to-orange-50 rounded-2xl p-12 border border-rose-200">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  "Five loaves and two fishes"
                </p>
                <p className="text-lg text-gray-700 italic">
                  We partner and give grants to programs that ensure children receive the nourishment they need, not only to survive, but to thrive. By taking the baton from my mother, we honor her example and work to build community systems where access to food is equitable, dependable, and rooted in dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-emerald-500">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Grants</h3>
                <p className="text-gray-700">
                  We provide targeted funding to proven food security programs that directly serve children in need.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-amber-500">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Systems</h3>
                <p className="text-gray-700">
                  We build sustainable food access systems that create equitable, dependable nutrition for entire communities.
                </p>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-rose-500">
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dignified Care</h3>
                <p className="text-gray-700">
                  Every program we support treats children and families with the respect and dignity they deserve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multiplying Impact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Your Gift Multiplies</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Just like the biblical parable of five loaves feeding thousands, your generosity creates a ripple effect. Strategic grants to proven programs mean your donation reaches children and transforms communities.
            </p>
            <Link
              href="/donate"
              className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Make an Impact Today
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-100 py-12 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Jean Cares Fund</h4>
              <p className="text-gray-600 text-sm">
                Addressing food insecurity for children through compassionate giving and community partnership.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/donate" className="text-gray-600 hover:text-emerald-600">Donate</Link></li>
                <li><Link href="/" className="text-gray-600 hover:text-emerald-600">Home</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
              <p className="text-gray-600 text-sm">
                Questions about our mission? We'd love to hear from you.
              </p>
            </div>
          </div>
          <div className="border-t border-amber-100 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Jean Cares Fund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
