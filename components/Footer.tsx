import Link from "next/link";
import { BRAND, ROUTES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4">{BRAND.name}</h4>
            <p className="text-gray-400 text-sm">
              Addressing food insecurity for children through compassionate giving and community partnership.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.donate} className="text-gray-400 hover:text-red-600">
                  Donate
                </Link>
              </li>
              <li>
                <Link href={ROUTES.home} className="text-gray-400 hover:text-red-600">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">
              Questions about our mission? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
