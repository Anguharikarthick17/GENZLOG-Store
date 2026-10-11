# GENZLOG STORE — Shop The Next.

A premium, fully functional e-commerce frontend built exclusively with **HTML5, CSS3 and Vanilla JavaScript**. No frameworks, no build step, no dependencies.

---

## Quick Start

1. Open the `GENZLOG-STORE/` folder.
2. Open `index.html` in any modern browser, **or** use VS Code Live Server.
3. No installation required.

---

## Features

| Feature | Status |
|---|---|
| 16 curated products across 3 categories | ✅ |
| Product search (name, category, keywords) | ✅ |
| Category filters + sort | ✅ |
| Product quick-view modal | ✅ |
| Wishlist (localStorage) | ✅ |
| Shopping cart drawer | ✅ |
| Quantity controls + stock validation | ✅ |
| Discount codes | ✅ |
| Free shipping progress indicator | ✅ |
| Pricing engine (subtotal, discount, tax, shipping, total) | ✅ |
| Demonstration checkout with validation | ✅ |
| Simulated order confirmation | ✅ |
| Recently viewed products | ✅ |
| Featured products section | ✅ |
| Cart + wishlist persistence (localStorage) | ✅ |
| Toast notifications | ✅ |
| Back-to-top button | ✅ |
| Responsive design (desktop / tablet / mobile) | ✅ |
| Keyboard accessibility + focus management | ✅ |
| prefers-reduced-motion support | ✅ |

---

## Discount Codes

Enter these at checkout in the shopping bag:

| Code | Discount |
|---|---|
| `GENZLOG10` | 10% off merchandise subtotal |
| `WELCOME15` | 15% off merchandise subtotal |

Codes are case-insensitive. One code per order.

---

## Pricing Rules

| Rule | Value |
|---|---|
| Estimated tax | 5% on merchandise subtotal after discount |
| Free shipping threshold | ₹2,000 (merchandise after discount) |
| Flat shipping | ₹99 when below threshold |

> **Disclaimer:** Tax and shipping figures are illustrative only. They do not represent actual GST or shipping rates applicable to real transactions in India.

---

## File Structure

```
GENZLOG-STORE/
├── index.html     — Semantic HTML5 structure
├── style.css      — Complete design system (CSS custom properties, Grid, Flexbox)
├── script.js      — All application logic (Vanilla JS, ES6+)
└── assets/
    └── images/
        ├── prod_earbuds.jpg    — AI-generated product image
        ├── prod_smartwatch.jpg — AI-generated product image
        └── prod_laptop.jpg     — AI-generated product image
```

Additional product images load from Unsplash (network required). The app remains functional with broken images — a placeholder is shown.

---

## Technical Notes

- Money is stored internally in **integer paise** and converted to ₹ only for display — no floating-point errors.
- All pricing calculations use a single central `calculateGrandTotal()` function — cart and checkout totals are always consistent.
- Cart and wishlist state is validated against the product catalogue on every page load — stale or invalid entries are removed automatically.
- No `eval()`, no unsafe HTML injection, no inline event handlers.
- Event delegation is used for all dynamically rendered product cards and cart items.

---

## Demonstration Disclaimer

This is a **frontend demonstration only**. No real orders are placed, no payments are processed and no data is sent to any server. The checkout experience is entirely simulated.

© 2026 GENZLOG. All rights reserved.
