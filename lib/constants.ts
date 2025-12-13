// Donation preset amounts
export const PRESET_AMOUNTS = [25, 50, 100, 250, 500, 1000];

// Brand information
export const BRAND = {
  name: "Jean Cares Fund",
  tagline: "Making a Difference Through Compassionate Giving",
  email: "contact@jeancaresfund.org",
  logo: "/logo_square.png",
} as const;

// Theme colors - matches Tailwind classes
export const COLORS = {
  primary: "red-600",
  primaryHover: "red-700",
  secondary: "black",
  background: "white",
  textPrimary: "gray-900",
  textSecondary: "gray-700",
  textMuted: "gray-400",
} as const;

// API routes
export const API_ROUTES = {
  createCheckoutSession: "/api/create-checkout-session",
} as const;

// Page routes
export const ROUTES = {
  home: "/",
  donate: "/donate",
  success: "/success",
} as const;

// Validation constants
export const VALIDATION = {
  minDonationAmount: 1,
} as const;
