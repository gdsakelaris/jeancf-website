# Jean Cares Fund - Donation Website

A Next.js website for Jean Cares Fund that accepts donations through Stripe.

## Features

- Modern, responsive design
- Secure donation processing via Stripe
- Preset and custom donation amounts
- Success confirmation page
- Mobile-friendly interface

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Stripe account (sign up at [stripe.com](https://stripe.com))
- A Vercel account for deployment (sign up at [vercel.com](https://vercel.com))

### 1. Set Up Stripe

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** and **Secret key**
3. For testing, use the test mode keys (they start with `pk_test_` and `sk_test_`)
4. For production, switch to live mode and use live keys

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your Stripe keys:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Test Donations

Use Stripe's test card numbers to test donations:
- Card number: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## Deployment to Vercel

### Method 1: Deploy via GitHub (Recommended)

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/jeancf-website.git
   git push -u origin main
   ```

3. Go to [Vercel](https://vercel.com) and sign in
4. Click "Add New Project"
5. Import your GitHub repository
6. Add environment variables in Vercel:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
7. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and add your environment variables when asked

## Connecting Your Domain (jeancf.org)

### In Cloudflare:

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain `jeancf.org`
3. Go to **DNS** settings
4. Add the following DNS records:

   **For apex domain (jeancf.org):**
   - Type: `A`
   - Name: `@`
   - Content: `76.76.21.21`
   - Proxy status: DNS only (gray cloud)

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Content: `cname.vercel-dns.com`
   - Proxy status: DNS only (gray cloud)

### In Vercel:

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Add your domain: `jeancf.org`
4. Also add: `www.jeancf.org`
5. Vercel will verify the DNS records

### Important Notes:

- DNS propagation can take up to 48 hours, but usually completes within a few hours
- Keep the proxy status as "DNS only" (gray cloud) in Cloudflare for the initial setup
- Once verified, you can enable Cloudflare's proxy (orange cloud) if desired

## Going Live with Stripe

When you're ready to accept real donations:

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Complete your account setup and business verification
3. Switch to **Live mode** (toggle in the top right)
4. Get your **Live API keys**
5. Update environment variables in Vercel:
   - Go to Settings → Environment Variables
   - Update `STRIPE_SECRET_KEY` with your live secret key
   - Update `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` with your live publishable key
6. Redeploy your application

## Project Structure

```
jeancf-website/
├── app/
│   ├── api/
│   │   └── create-checkout-session/
│   │       └── route.ts          # Stripe checkout API
│   ├── donate/
│   │   └── page.tsx              # Donation page
│   ├── success/
│   │   └── page.tsx              # Success page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── public/
│   └── logo.png                  # Jean Cares Fund logo
└── .env.local                    # Environment variables (not in git)
```

## Customization

### Update Content

Edit the text in:
- `app/page.tsx` - Homepage content
- `app/donate/page.tsx` - Donation page content
- `app/success/page.tsx` - Success page content

### Change Colors

The site uses a blue color scheme. To change colors, edit the Tailwind classes:
- Primary color: `bg-blue-600`, `text-blue-600`, etc.
- Replace `blue` with other colors like `green`, `purple`, `red`, etc.

### Preset Donation Amounts

Edit the `presetAmounts` array in `app/donate/page.tsx`:
```typescript
const presetAmounts = [25, 50, 100, 250, 500]; // Change these values
```

## Support

For questions or issues:
- Stripe documentation: [stripe.com/docs](https://stripe.com/docs)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

## License

© 2024 Jean Cares Fund. All rights reserved.
