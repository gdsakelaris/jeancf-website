"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      setTimeout(() => setLoading(false), 500);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Session</h1>
          <Link href="/donate" className="text-red-600 hover:text-red-700 font-medium">
            Return to Donate Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo_square.png"
              alt="Jean Cares Fund Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white">Jean Cares Fund</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-2 border-gray-200">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Your Generosity!
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Your donation joins a legacy of compassion. Every gift helps ensure that children have access to nourishing food and builds stronger, more equitable communities.
          </p>

          <div className="bg-red-50 rounded-xl p-6 mb-8 border border-red-200">
            <p className="text-sm text-gray-600 mb-2">Transaction ID</p>
            <p className="text-sm font-mono text-gray-800 break-all">{sessionId}</p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700">
              You will receive a confirmation email shortly with your donation receipt and impact information.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Return to Home
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Questions about your donation?{" "}
            <a href="mailto:contact@jeancaresfund.org" className="text-red-600 hover:text-red-700 font-medium">
              Get in touch with us
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
