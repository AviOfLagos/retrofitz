# Retro Fitz

> Bold Fits. Retro Vibes. The hub for celebrities and movie stylists in Lagos.

Retro Fitz is an urban streetwear brand merging old-school vibes with new-age flair, specializing in expressive, cinematic looks inspired by Lagos retro street culture. This is a modern, fully responsive static website built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Fixed Navigation**: Sticky navbar with animated hamburger menu for mobile
- **Hero Slider**: Auto-rotating hero images with manual controls
- **Featured Products Carousel**: Smooth product showcase with WhatsApp integration
- **Events Calendar**: Interactive event slides with modal details
- **Outfit Rentals**: Quick rental forms for shoots and events
- **Talent Signup**: Form for models to join the talent pool
- **FAQ Section**: Expandable accordion with 10+ common questions
- **Newsletter**: Email subscription with validation
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **No Dependencies**: Pure vanilla JavaScript - no frameworks required

## 🚀 Getting Started

### Prerequisites

All you need is a modern web browser (Chrome, Firefox, Safari, or Edge).

### Running Locally

**Option 1: Direct File Opening**
1. Clone the repository:
   ```bash
   git clone https://github.com/AviOfLagos/retrofitz.git
   cd retrofitz
   ```
2. Double-click `index.html` to open in your browser

**Option 2: Local Server (Recommended)**

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx http-server -p 8000
```

Then navigate to `http://localhost:8000`

## 📁 Project Structure

```
retrofitz/
├── index.html              # Main landing page with all sections
├── navbar.html             # Reusable navigation component
├── footer.html             # Reusable footer component
├── style.css               # All styles (organized by component)
├── script.js               # All JavaScript functionality
├── images/                 # Product images, hero slides, events
└── pages/                  # Additional pages:
    ├── shop.html           # Shop page (coming soon)
    ├── about.html          # About page (coming soon)
    ├── contact.html        # Contact page (coming soon)
    ├── products.html       # Products listing
    ├── categories.html     # Product categories
    ├── blog.html           # Blog page
    ├── events.html         # Events page
    ├── featured-fits.html  # Featured products
    ├── privacy.html        # Privacy policy
    └── faq.html           # FAQ page
```

## 🎨 Design System

### Colors
- **Base Dark**: `#0f0f0f` - Primary background
- **Off White**: `#F6F6F6` - Primary text/light backgrounds
- **Neon Blue**: `#00C8FF` - Primary CTA buttons
- **Neon Green**: `#39FF14` - Secondary CTAs
- **Hot Pink**: `#FF2D95` - Accent color & hover states
- **Orange**: `#FFA500` - Brand story sections
- **Purple**: `#8e73ff` - Footer bar

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Display Font**: Stereofidelic (CDN Fonts)

## 🛠️ Development

### Key Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern layouts with Flexbox & Grid, animations
- **Vanilla JavaScript**: No frameworks - pure ES6+

### Component Pattern
All pages use a modular component system:
```html
<div id="navbar"></div>
<!-- Page content -->
<div id="footer"></div>
<script src="script.js"></script>
<script>
  // Dynamically load navbar and footer
  fetch("navbar.html").then(res => res.text())
    .then(html => document.getElementById("navbar").innerHTML = html);
  fetch("footer.html").then(res => res.text())
    .then(html => document.getElementById("footer").innerHTML = html);
</script>
```

### Making Changes
- **Navbar/Footer**: Edit `navbar.html` or `footer.html` - changes reflect across all pages
- **Styles**: Add to `style.css` organized by component
- **Functionality**: Add to `script.js` with proper initialization

See `CLAUDE.md` for detailed development guidelines.

## 📱 Contact & Ordering

All product purchases and inquiries go through WhatsApp:
- **Phone**: +234 817 045 8819
- **Email**: info@retrofitz.com
- **Location**: Ikoyi, Bagada, Lagos

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

See `LICENSE` file for details.

## 🙏 Acknowledgments

Built with ❤️ for Lagos street culture and creative professionals.