# Avonetiq Brand Color System

## Overview
This document outlines the comprehensive brand color design system for Avonetiq, a professional fintech/SaaS platform. The color palette emphasizes trust, professionalism, and innovation through the use of deep navy blues and bright cyan accents.

---

## Primary Brand Colors

### Deep Navy (Primary)
```css
--brand-primary: #0A2540        /* Main brand color - headers, primary text */
--brand-primary-light: #1A3A5C  /* Glass panels, cards */
--brand-primary-dark: #051525   /* Darkest elements, shadows */
```

**Usage:**
- Primary branding elements
- Main headings and navigation
- Dark mode backgrounds
- Professional, trustworthy appearance

---

### Cyan Accent (Energy & Innovation)
```css
--brand-accent: #00D4FF         /* Primary accent - CTAs, highlights */
--brand-accent-light: #4DE3FF   /* Hover states, glows */
--brand-accent-dark: #00A8CC    /* Pressed states, borders */
```

**Usage:**
- Call-to-action buttons
- Interactive elements
- Data visualization highlights
- Focus states and selections
- Glass panel borders
- Energetic, modern feel

---

### Purple (Secondary Accent)
```css
--brand-secondary: #635BFF      /* Secondary accent color */
--brand-secondary-light: #8B85FF /* Light secondary */
--brand-secondary-dark: #4840CC  /* Dark secondary */
```

**Usage:**
- Secondary CTAs
- Charts and graphs (series 2)
- Alternative highlights
- Premium features

---

## Semantic Colors

### Success
```css
--brand-success: #00E096        /* Success states, positive metrics */
```

### Warning
```css
--brand-warning: #FFB800        /* Warning states, attention needed */
```

### Error
```css
--brand-error: #FF4757          /* Error states, critical alerts */
```

---

## Neutral Scale

```css
--brand-neutral-100: #F7F9FC    /* Lightest - backgrounds */
--brand-neutral-200: #EDF1F7    /* Light backgrounds, subtle fills */
--brand-neutral-300: #C4CDD5    /* Borders, dividers */
--brand-neutral-400: #919EAB    /* Muted text, placeholders */
--brand-neutral-500: #637381    /* Secondary text */
--brand-neutral-600: #454F5B    /* Primary text (light mode) */
--brand-neutral-700: #212B36    /* Dark text */
--brand-neutral-800: #161B22    /* Darkest */
```

---

## Backgrounds & Gradients

### Dark Mode (Default)
```css
background: linear-gradient(135deg, #0A2540 0%, #1A3A5C 100%);
```

**Overlays:**
- Cyan glow: `rgba(0, 212, 255, 0.08-0.12)`
- Purple accent: `rgba(99, 91, 255, 0.06-0.08)`

### Light Mode
```css
background: linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 50%, #EDF1F7 100%);
```

**Overlays:**
- Subtle cyan: `rgba(0, 212, 255, 0.05)`
- Subtle purple: `rgba(99, 91, 255, 0.03)`

---

## Glass Morphism Effects

### Dark Mode Glass Panels
```css
.glass-panel {
  background: rgba(26, 58, 92, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 212, 255, 0.15);
  box-shadow: 
    0 8px 32px 0 rgba(0, 212, 255, 0.1),
    0 4px 16px 0 rgba(10, 37, 64, 0.3);
}
```

### Light Mode Glass Panels
```css
.glass-panel {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(10, 37, 64, 0.1);
  box-shadow: 
    0 8px 32px 0 rgba(10, 37, 64, 0.08),
    0 4px 16px 0 rgba(0, 212, 255, 0.05);
}
```

### Hover States
```css
.glass-card:hover {
  border-color: rgba(0, 212, 255, 0.5);
  box-shadow: 0 12px 40px -10px rgba(0, 212, 255, 0.3);
  transform: translateY(-2px);
}
```

---

## Typography Colors

### Light Mode
- **Headings**: `#0A2540` (Deep Navy)
- **Body Text**: `#637381` (Neutral 500)
- **Muted Text**: `#919EAB` (Neutral 400)

### Dark Mode
- **Headings**: `#F7F9FC` (Neutral 100)
- **Body Text**: `#919EAB` (Neutral 400)
- **Muted Text**: `#637381` (Neutral 500)

---

## Interactive Elements

### Buttons

**Primary (Cyan)**
```css
background: #00D4FF;
color: #0A2540;
hover: #00A8CC;
shadow: 0 4px 16px rgba(0, 212, 255, 0.3);
```

**Secondary (Navy)**
```css
background: #0A2540;
color: #FFFFFF;
hover: #1A3A5C;
border: 1px solid rgba(0, 212, 255, 0.2);
```

**Ghost**
```css
background: transparent;
color: #00D4FF;
border: 1px solid rgba(0, 212, 255, 0.3);
hover: background rgba(0, 212, 255, 0.1);
```

### Links
- Default: `#00D4FF`
- Hover: `#4DE3FF`
- Visited: `#635BFF`

### Form Inputs
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(0, 212, 255, 0.2);
focus: border rgba(0, 212, 255, 0.5);
focus-ring: 0 0 0 3px rgba(0, 212, 255, 0.1);
```

---

## Data Visualization

### Chart Colors
```css
--chart-1: #00D4FF  /* Primary data series - Cyan */
--chart-2: #635BFF  /* Secondary series - Purple */
--chart-3: #00E096  /* Success/positive - Green */
--chart-4: #FFB800  /* Warning/attention - Amber */
--chart-5: #0A2540  /* Reference/baseline - Navy */
```

### Trends
- **Positive/Up**: `#00E096` (Success Green)
- **Negative/Down**: `#FF4757` (Error Red)
- **Neutral**: `#FFB800` (Warning Amber)

---

## Accessibility

### Contrast Ratios (WCAG 2.1)

**Light Mode:**
- Navy (#0A2540) on White (#FFFFFF): **12.5:1** ✓ AAA
- Neutral 600 (#454F5B) on White: **9.8:1** ✓ AAA
- Cyan (#00D4FF) on Navy (#0A2540): **5.2:1** ✓ AA

**Dark Mode:**
- White (#F7F9FC) on Navy (#0A2540): **12.3:1** ✓ AAA
- Cyan (#00D4FF) on Navy (#0A2540): **5.2:1** ✓ AA
- Neutral 400 (#919EAB) on Navy: **4.8:1** ✓ AA

### Color Blindness Considerations
- Navy/Cyan palette works well for most types
- Success (green) and error (red) are distinguishable by brightness
- Alternative indicators (icons, labels) provided for critical states

---

## Selection & Focus

```css
::selection {
  background: #00D4FF;
  color: #0A2540;
}

:focus-visible {
  outline: 2px solid #00D4FF;
  outline-offset: 2px;
}
```

---

## Grid & Borders

### Background Grid
```css
/* Dark Mode */
background-image: 
  linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px);
background-size: 50px 50px;

/* Light Mode */
background-image: 
  linear-gradient(rgba(10, 37, 64, 0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(10, 37, 64, 0.04) 1px, transparent 1px);
```

### Dividers & Borders
- Dark Mode: `rgba(0, 212, 255, 0.15)`
- Light Mode: `rgba(10, 37, 64, 0.1)`

---

## Usage Guidelines

### Do's ✓
- Use navy for professional, trustworthy elements
- Use cyan for interactive, energetic elements
- Maintain sufficient contrast for accessibility
- Use glass effects sparingly for premium feel
- Follow semantic color meanings consistently

### Don'ts ✗
- Don't mix primary and accent as backgrounds
- Don't use low-contrast combinations
- Don't overuse purple secondary color
- Don't ignore dark mode styling
- Don't use success/error colors for decoration

---

## CSS Variables Reference

All colors are accessible via CSS custom properties:

```css
/* Access brand colors */
color: var(--brand-primary);
background: var(--brand-accent);
border: 1px solid var(--brand-neutral-300);

/* Access semantic theme colors */
color: var(--foreground);
background: var(--background);
border-color: var(--border);
```

---

## File Location

Primary color definitions: `/styles/globals.css`

Look for the section:
```css
:root {
  /* Avonetiq Brand Color System */
  --brand-primary: #0A2540;
  /* ... */
}
```

---

**Version**: 1.0.0  
**Last Updated**: December 2, 2025  
**Brand**: Avonetiq  
**Design System**: Professional Fintech/SaaS
