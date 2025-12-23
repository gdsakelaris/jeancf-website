import Image from "next/image";
import Link from "next/link";
import { BRAND, ROUTES } from "@/lib/constants";

interface NavbarProps {
  showDonateButton?: boolean;
}

export default function Navbar({ showDonateButton = true }: NavbarProps) {
  return (
    <nav className="border-b border-gray-200 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={ROUTES.home} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src={BRAND.logo}
            alt={`${BRAND.name} Logo`}
            width={50}
            height={50}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-white">{BRAND.name}</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href={ROUTES.home}
            className="text-white hover:text-red-600 font-medium transition-colors hidden md:block"
          >
            Home
          </Link>
          <Link
            href={ROUTES.team}
            className="text-white hover:text-red-600 font-medium transition-colors hidden md:block"
          >
            Our Team
          </Link>
          {showDonateButton && (
            <Link
              href={ROUTES.donate}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Donate Now
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
