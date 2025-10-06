# True Bakes - Bakery Website

A mobile-first, fully accessible static website for True Bakes bakery in Mysuru, Karnataka.

## Features

- 📱 **Mobile-First Responsive Design** - Optimized for all screen sizes
- ♿ **Fully Accessible** - WCAG compliant with keyboard navigation, ARIA labels, and screen reader support
- 🎨 **Instagram-Inspired Design** - Warm bakery colors with cream, chocolate, and berry accents
- 📦 **No Build Tools Required** - Pure HTML, CSS, and vanilla JavaScript
- 🔍 **SEO Optimized** - JSON-LD structured data, meta tags, sitemap, and robots.txt
- 💬 **WhatsApp Integration** - Direct ordering via WhatsApp
- 🖼️ **Gallery Lightbox** - Accessible image gallery with keyboard navigation
- 📝 **Order Form** - Client-side validation with localStorage demo

## Quick Start

### Local Preview

Simply open `index.html` in your web browser, or run a local server:

```bash
python -m http.server 5000
```

Then visit `http://localhost:5000` in your browser.

### Deploy to Hosting

This is a static website that can be deployed to any hosting platform:

- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Netlify**: Drag and drop the folder or connect your Git repository
- **Vercel**: Import your Git repository
- **Replit**: Already configured with a workflow - just click Run

## Replacing Placeholder Images

The site currently uses stock placeholder images. To add your real bakery photos from Instagram:

### 1. Download Your Instagram Photos

Download high-resolution photos from your Instagram account (@true_bakes). You'll need:

- **1 Hero Image** - A beautiful wide shot of your bakery or products (landscape orientation)
- **6 Product Images** - Photos of your specific menu items
- **8 Gallery Images** - Assorted photos showcasing your work

### 2. Optimize Images

For best performance:
- Resize images to appropriate dimensions (hero: 1920x1080px, products: 800x600px, gallery: 600x600px)
- Save as JPG with 80-85% quality or use WebP format
- Keep file sizes under 200KB when possible

### 3. Replace Files in /assets Folder

Replace these files with your own photos:

```
assets/
  ├── hero.jpg              (Main hero image)
  ├── product-1.jpg         (Chocolate Fudge Cake)
  ├── product-2.jpg         (Vanilla Cupcakes)
  ├── product-3.jpg         (Cookies Box)
  ├── product-4.jpg         (Red Velvet Cake)
  ├── product-5.jpg         (Berry Tart)
  ├── product-6.jpg         (Custom Cakes)
  ├── gallery-1.jpg         (Gallery photo 1)
  ├── gallery-2.jpg         (Gallery photo 2)
  ├── gallery-3.jpg         (Gallery photo 3)
  ├── gallery-4.jpg         (Gallery photo 4)
  ├── gallery-5.jpg         (Gallery photo 5)
  ├── gallery-6.jpg         (Gallery photo 6)
  ├── gallery-7.jpg         (Gallery photo 7)
  └── gallery-8.jpg         (Gallery photo 8)
```

### 4. Update Alt Text

Edit `index.html` and update the `alt` attributes on images to accurately describe your photos for accessibility.

## Customization

### Update Business Information

Edit `index.html` to update:
- Contact phone number (currently: +91 96635 50007)
- Instagram handle (currently: @true_bakes)
- Address details
- Product names and prices
- Opening hours

### Change Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
  --bg: #FFF9F6;           /* Background cream */
  --card: #FFFFFF;         /* Card background */
  --text: #2D2D2D;         /* Text color */
  --muted: #7D7D7D;        /* Muted text */
  --accent: #C75D5D;       /* Primary accent (buttons, links) */
  --accent-dark: #9b4848;  /* Hover state */
  --choco: #5B342E;        /* Headings accent */
}
```

### Update Products/Menu

Edit the product cards in `index.html` (search for "product-grid") to:
- Add or remove products
- Update names, descriptions, and prices
- Change product categories

Also update the `productDetails` object in `js/app.js` to match your changes.

## File Structure

```
.
├── index.html           # Main HTML file with all sections
├── css/
│   └── styles.css       # All styles (mobile-first)
├── js/
│   └── app.js           # Vanilla JavaScript (navigation, modals, forms)
├── assets/              # Images and media
│   ├── hero.jpg
│   ├── product-*.jpg
│   └── gallery-*.jpg
├── robots.txt           # SEO - search engine instructions
├── sitemap.xml          # SEO - site structure
└── README.md            # This file
```

## Integrating Payment/Ordering Systems

The site currently uses WhatsApp for orders. To add payment processing:

### Option 1: WhatsApp Business API
Continue using WhatsApp with automated responses

### Option 2: Google Forms + Zapier
1. Create a Google Form for orders
2. Link to Zapier to send notifications
3. Update form action in `index.html`

### Option 3: Payment Gateway
Integrate Razorpay, Stripe, or Instamojo:
1. Sign up for a payment gateway account
2. Add their JavaScript SDK to `index.html`
3. Update form submission in `js/app.js`

### Option 4: Third-party Ordering Platform
Use platforms like Swiggy, Zomato, or DineOut and link to them

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility Features

✅ Skip link for keyboard users
✅ Semantic HTML elements
✅ ARIA labels and roles
✅ Keyboard navigation support
✅ Focus visible states
✅ Screen reader friendly
✅ Respects prefers-reduced-motion
✅ Color contrast WCAG AA compliant
✅ Form validation with error messages

## SEO Features

✅ Semantic HTML structure
✅ JSON-LD LocalBusiness schema
✅ Meta descriptions
✅ OpenGraph tags for social sharing
✅ Sitemap.xml
✅ Robots.txt
✅ Descriptive alt text on images
✅ Proper heading hierarchy

## Performance

- Lazy loading for non-critical images
- Preconnect to Google Fonts
- Deferred JavaScript loading
- Optimized for mobile-first
- No heavy frameworks or dependencies

## Support & Contact

For technical questions about this website template:
- Check the code comments in HTML, CSS, and JS files
- Review this README for common customization tasks

For True Bakes bakery orders:
- WhatsApp: +91 96635 50007
- Instagram: @true_bakes
- Location: 7JQG+W47, Kuvempu Nagara, Mysuru, Karnataka 570023

## License

This website was created for True Bakes. All rights reserved.

---

**Built with ❤️ for True Bakes**
