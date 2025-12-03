"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const presetAmounts = [25, 50, 100, 250, 500];

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<number>(100);

  const handlePresetClick = (value: number) => {
    setSelectedPreset(value);
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedPreset(0);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setAmount(numValue);
    }
  };

  const handleDonate = async () => {
    if (amount < 1) {
      alert("Please enter a donation amount of at least $1");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      } else {
        alert("Failed to create checkout session");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      setLoading(false);
    }
  };

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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Make a Donation
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Your generosity helps ensure that no child goes hungry. Every donation directly supports programs addressing food insecurity in our communities.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-200">
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Choose Your Impact
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  onClick={() => handlePresetClick(value)}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    selectedPreset === value
                      ? "bg-red-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ${value}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-semibold">
                  $
                </span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  placeholder="Enter custom amount"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none text-lg text-gray-900 placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-6 mb-8 border border-red-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Your Donation:</span>
              <span className="text-3xl font-bold text-red-600">
                ${amount.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleDonate}
            disabled={loading || amount < 1}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            {loading ? "Processing..." : "Continue to Payment"}
          </button>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure payment powered by Stripe</span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6 max-w-xl mx-auto leading-relaxed">
            All donations are processed securely and go directly to supporting our mission of ensuring children have access to nourishing food and building equitable community systems.
          </p>
          <Link href="/" className="inline-block text-red-600 hover:text-red-700 font-semibold transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
