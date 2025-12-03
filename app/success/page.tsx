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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!sessionId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Session</h1>
          <Link href="/donate" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Return to Donate Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <nav className="border-b border-amber-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JCF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Jean Cares Fund</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-emerald-100">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-emerald-600"
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

          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl p-6 mb-8 border border-emerald-200">
            <p className="text-sm text-gray-600 mb-2">Transaction ID</p>
            <p className="text-sm font-mono text-gray-800 break-all">{sessionId}</p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700">
              You will receive a confirmation email shortly with your donation receipt and impact information.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-amber-100">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Return to Home
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700">
            Questions about your donation?{" "}
            <a href="mailto:contact@jeancaresfund.org" className="text-emerald-600 hover:text-emerald-700 font-medium">
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
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
