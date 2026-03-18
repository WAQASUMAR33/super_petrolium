# SEO & Google Tag Manager Setup Guide

This guide explains how to configure and use the SEO features and Google Tag Manager implementation in your Next.js application.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://superpetroleum.com

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Search Engine Verification (optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-google-verification-code
```

### Getting Your Google Tag Manager ID

1. Sign in to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container or select an existing one
3. Copy the Container ID (format: GTM-XXXXXXX)
4. Add it to your `.env.local` file

## Features Implemented

### ✅ Google Tag Manager
- Fully integrated GTM implementation
- Automatic data layer initialization
- Noscript fallback for users with JavaScript disabled
- Optimized loading strategy (`afterInteractive`)

### ✅ Comprehensive SEO Metadata
- **Open Graph** tags for social media sharing
- **Twitter Card** support
- **Structured Data (JSON-LD)** for Local Business schema
- **Canonical URLs** to prevent duplicate content
- **Robots meta tags** with Google-specific directives
- **Geo-location meta tags** for local SEO
- **Keywords meta tags**

### ✅ Technical SEO
- **Dynamic Sitemap** (`/sitemap.xml`)
- **Robots.txt** (`/robots.txt`)
- **Meta verification** tags for search engines
- **Theme color** meta tag for mobile browsers

### ✅ Structured Data
Local Business schema includes:
- Business name, description, and contact information
- Address and geographic coordinates
- Opening hours (24/7)
- Price range and services

## Using Page-Specific Metadata

For individual pages, you can use the `generatePageMetadata` utility:

```typescript
import { generatePageMetadata } from '@/app/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Our Locations - Find a Travel Center Near You',
  description: 'Find Super Petroleum travel centers and truck stops across Georgia. Get directions, hours, and contact information.',
  path: '/locations',
  image: '/images/locations-og.jpg', // Optional
  noIndex: false, // Optional, defaults to false
})
```

## File Structure

```
src/app/
├── components/
│   ├── GoogleTagManager.tsx    # GTM script component
│   └── StructuredData.tsx       # JSON-LD structured data
├── lib/
│   └── metadata.ts              # Metadata utility functions
├── layout.tsx                   # Root layout with SEO
├── robots.ts                    # Robots.txt generator
└── sitemap.ts                   # Sitemap generator
```

## Sitemap Configuration

The sitemap includes all main pages:
- Homepage
- Locations
- Services
- Fuel
- Truck Care
- Careers
- Contact
- Privacy
- Terms

To add or modify pages, edit `src/app/sitemap.ts`.

## Robots.txt Configuration

Current configuration:
- Allows all search engines
- Disallows `/api/` and `/admin/` directories
- Points to the sitemap

Edit `src/app/robots.ts` to customize.

## Testing

1. **GTM Testing:**
   - Install [Google Tag Assistant](https://tagassistant.google.com/)
   - Visit your site and verify GTM is loading
   - Check the data layer in browser console: `window.dataLayer`

2. **SEO Testing:**
   - Use [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Validate structured data
   - Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Sitemap & Robots:**
   - Visit `https://yourdomain.com/sitemap.xml`
   - Visit `https://yourdomain.com/robots.txt`

## Next Steps

1. **Add OG Image:** Create an Open Graph image (1200x630px) at `/public/og-image.jpg`
2. **Set up GTM:** Add your GTM container ID to environment variables
3. **Verify Domain:** Add verification codes for Google Search Console
4. **Configure GTM Tags:** Set up conversion tracking, analytics, etc. in GTM dashboard
5. **Submit Sitemap:** Submit your sitemap to Google Search Console

## Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Tag Manager Documentation](https://developers.google.com/tag-platform/tag-manager/web)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Open Graph Protocol](https://ogp.me/)









