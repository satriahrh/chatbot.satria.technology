# Chatbot AI WhatsApp Business Landing Page

Landing page for Satria Technology's AI-powered chatbot service for WhatsApp Business.

**Live Site:** https://chatbot.satria.technology

## Overview

This is a static landing page built with pure HTML, CSS, and vanilla JavaScript. The site is designed to:
- Generate demo requests for the AI chatbot service
- Establish credibility for Meta Tech Provider application
- Provide information about pricing, features, and use cases
- Comply with Meta's requirements (Privacy Policy, Terms of Service)

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables, responsive design
- **Vanilla JavaScript** - No frameworks, pure JS for interactions
- **GitHub Pages** - Free hosting with custom domain support

## Project Structure

```
chatbot.satria.technology/
├── index.html              # Main landing page
├── privacy.html            # Privacy Policy (required for Meta)
├── terms.html              # Terms of Service (required for Meta)
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Images folder (add images as needed)
├── CNAME                  # Custom domain configuration
└── README.md              # This file
```

## Features

### Landing Page Sections

1. **Hero Section** - Value proposition and CTA
2. **Problem Statement** - 4 key challenges of manual customer service
3. **Solution Overview** - 5 benefits of AI chatbot
4. **How It Works** - 3-step process
5. **Key Features** - 6 main features
6. **Pricing** - 3 pricing tiers (Basic, Professional, Enterprise)
7. **Use Cases** - 5 industry examples
8. **About** - Company information and Meta Tech Provider statement
9. **Contact** - Contact form and details
10. **Footer** - Links, legal pages, copyright

### Technical Features

- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Scrolling** - Anchor link navigation
- **Mobile Menu** - Hamburger menu for mobile devices
- **Sticky Header** - Header with shadow on scroll
- **Form Validation** - Client-side validation for contact form
- **Performance Optimized** - Fast loading, minimal dependencies
- **SEO Optimized** - Meta tags, semantic HTML, proper headings

## Configuration

### Add WhatsApp Contact Number

When ready, update the WhatsApp floating button:

1. Uncomment the WhatsApp button in `index.html` (near the end, before `</body>`)
2. Replace `62XXXXXXXXXXX` with your WhatsApp Business number (with country code, no + or spaces)
3. The pre-filled message is already in Indonesian

### Add Logo and Images

To replace placeholder images:

1. Create or obtain images:
   - Logo (recommended: SVG or PNG, 200x60px)
   - Hero mockup (PNG or JPG, 800x600px)
   - Favicon (PNG or ICO, 32x32px)

2. Add images to `images/` folder

3. Update `index.html`:
   - Replace logo text with `<img src="images/logo.png" alt="Satria Technology">`
   - Replace `.placeholder-image` div with `<img src="images/hero-mockup.png" alt="WhatsApp Chatbot">`

4. Add favicon to `<head>`:
   ```html
   <link rel="icon" type="image/png" href="images/favicon.png">
   ```

### Add Google Analytics (Optional)

To track visitors:

1. Sign up for Google Analytics
2. Get your tracking ID (GA4 measurement ID)
3. Add to `<head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Testing Checklist

Before launching, verify:

### Functionality
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Mobile menu opens/closes properly
- [ ] Contact form submits successfully
- [ ] Form validation shows errors correctly
- [ ] All external links open in new tabs

### Content
- [ ] All text is proofread (Indonesian & English)
- [ ] Contact email addresses work
- [ ] Business address is correct
- [ ] Pricing information is accurate
- [ ] Privacy Policy and Terms are complete

### Technical
- [ ] Site loads on HTTPS
- [ ] Custom domain works
- [ ] Mobile responsive (test on real devices)
- [ ] Works on all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] Images optimized (<200KB each)
- [ ] Page load time <3 seconds
- [ ] No console errors

### SEO
- [ ] Meta descriptions present
- [ ] Title tags descriptive
- [ ] Heading hierarchy correct (H1, H2, H3)
- [ ] Alt text on all images
- [ ] Open Graph tags present

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome for Android

## Performance

Target metrics:
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Lighthouse Score: >90
- Total Page Size: <500KB

## Meta Tech Provider Requirements

This landing page includes all required elements for Meta Tech Provider application:

✅ Clear service description
✅ Company information
✅ Contact details with business address
✅ Privacy Policy page
✅ Terms of Service page
✅ Meta Tech Provider statement in About section
✅ Compliance with WhatsApp Business policies

## Maintenance

### Regular Updates

- Update pricing if changed
- Add client testimonials when available
- Add case studies after first clients
- Update statistics and numbers
- Refresh promotional offers

### Content Updates

To update content, simply edit the HTML files:
- `index.html` - Main content
- `privacy.html` - Privacy policy
- `terms.html` - Terms of service

After editing, commit and push to GitHub:
```bash
git add .
git commit -m "Update: [describe changes]"
git push
```

GitHub Pages will automatically deploy the changes within 1-2 minutes.

## Support

For questions or issues:
- **Email:** business@satria.technology
- **Website:** https://chatbot.satria.technology

## License

© 2025 Satria Technology. All rights reserved.

---

## Next Steps

After deploying the landing page:

1. **Submit to Meta Tech Provider**
   - Fill out Meta Tech Provider application form
   - Provide this URL: https://chatbot.satria.technology
   - Include Privacy Policy and Terms links

2. **Share with BSP (360Dialog)**
   - Send landing page URL for review
   - Ensure compliance with their requirements

3. **Set Up Email**
   - Configure business@satria.technology
   - Configure chatbot@satria.technology
   - Test email deliverability

4. **Monitor & Optimize**
   - Set up Google Analytics (optional)
   - Monitor form submissions
   - Track visitor behavior
   - Optimize based on data

5. **Marketing**
   - Share on LinkedIn
   - Add to email signature
   - Include in proposals
   - Share with potential clients

## Roadmap

Future enhancements to consider:

- [ ] Add video demo
- [ ] Create case studies section
- [ ] Add client testimonials
- [ ] Implement live chat widget
- [ ] Add FAQ section
- [ ] Create blog for SEO
- [ ] A/B testing for CTAs
- [ ] Multi-language support (full English version)

Good luck with your launch! 🚀
