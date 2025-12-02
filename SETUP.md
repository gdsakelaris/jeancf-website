# Quick Setup Guide for Jean Cares Fund Website

## Immediate Next Steps

### 1. Get Your Stripe API Keys (5 minutes)

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register) and create a free account
2. After signing in, go to **Developers** → **API keys**
3. Copy both keys:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (click "Reveal" then copy, starts with `sk_test_`)

### 2. Set Up Environment Variables (2 minutes)

1. In the `jeancf-website` folder, create a file named `.env.local`
2. Add your Stripe keys:
   ```
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
   ```
3. Save the file

### 3. Test Locally (5 minutes)

Open terminal in the `jeancf-website` folder and run:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To test donations, use these Stripe test card details:
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., `12/25`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any 5 digits (e.g., `12345`)

### 4. Deploy to Vercel (10 minutes)

**Option A: Deploy via Vercel Website (Easier)**

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Choose **"Import Git Repository"** or drag your project folder
4. Click **"Deploy"**
5. In **Settings** → **Environment Variables**, add:
   - `STRIPE_SECRET_KEY` = your secret key
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your publishable key
6. Click **"Redeploy"** to apply the environment variables

**Option B: Deploy via CLI**

```bash
npm install -g vercel
cd jeancf-website
vercel
```

Follow the prompts and add environment variables when asked.

### 5. Connect Your Domain (15 minutes)

**In Vercel:**
1. Go to your project → **Settings** → **Domains**
2. Add domain: `jeancf.org`
3. Vercel will show DNS records you need to add

**In Cloudflare:**
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select `jeancf.org`
3. Go to **DNS** → **Records**
4. Add these records:
   - Type: `A`, Name: `@`, Content: `76.76.21.21`, Proxy: OFF (gray cloud)
   - Type: `CNAME`, Name: `www`, Content: `cname.vercel-dns.com`, Proxy: OFF

Wait 10-30 minutes for DNS to propagate, then your site will be live at jeancf.org!

### 6. Go Live with Real Payments

When ready to accept real donations:

1. In Stripe Dashboard, complete **Account Setup** (business verification)
2. Switch to **Live mode** (toggle in top right)
3. Get your **Live API keys**
4. Update Vercel environment variables with live keys
5. Redeploy

## Troubleshooting

- **"Missing Stripe keys" error**: Make sure .env.local file is created and has correct keys
- **Build errors**: Run `npm install` again
- **Domain not working**: Wait longer for DNS propagation (up to 48 hours max)
- **Payment not working**: Verify environment variables are set in Vercel and redeployed

## Need Help?

- Check the full [README.md](README.md) for detailed instructions
- Stripe docs: [stripe.com/docs](https://stripe.com/docs)
- Vercel support: [vercel.com/docs](https://vercel.com/docs)
