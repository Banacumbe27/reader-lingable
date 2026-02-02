# 🎨 Apple Design - Visual Reference & Code Snippets

## Color Palette Reference

### Primary Colors
```
Apple Blue:         #0071E3    rgb(0, 113, 227)
Apple Blue Light:   #0077ED    rgb(0, 119, 237)
Apple Gray:         #F5F5F7    rgb(245, 245, 247)
Apple Black:        #1D1D1F    rgb(29, 29, 31)
```

### Secondary Colors
```
Success Green:      #34D399    rgb(52, 211, 153)
System Green:       #10B981    rgb(16, 185, 129)
Error Red:          #FF3B30    rgb(255, 59, 48)
Error Red Light:    #FF453A    rgb(255, 69, 58)
```

### Neutral Colors
```
Text Primary:       #1D1D1F    rgb(29, 29, 31)
Text Secondary:     #86868B    rgb(134, 134, 139)
Light Gray:         #F5F5F7    rgb(245, 245, 247)
Medium Gray:        #E5E5EA    rgb(229, 229, 234)
Dark Gray:          #86868B    rgb(134, 134, 139)
```

---

## CSS Variable System

### Quick Reference
```css
:root {
    /* Colors */
    --primary: #0071E3;
    --primary-light: #0077ED;
    --secondary: #F5F5F7;
    --text-primary: #1D1D1F;
    --text-secondary: #86868B;
    --bg-primary: #FFFFFF;
    --bg-secondary: #F5F5F7;
    --success: #34D399;
    --error: #FF3B30;
    
    /* Effects */
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(255, 255, 255, 0.2);
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.12);
    --shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.16);
    
    /* Timing */
    --transition-sm: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-md: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-lg: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Ready-to-Copy CSS Snippets

### Glass Card Effect
```css
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

### Strong Glass (Modal)
```css
.glass-modal {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
}
```

### Blue Gradient Button
```css
.btn-primary {
    background: linear-gradient(135deg, #0071E3, #0077ED);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 0.875rem 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.btn-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
}

.btn-primary:active {
    transform: translateY(-2px);
}
```

### Interactive Card
```css
.card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.card:hover {
    transform: translateY(-12px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
    background: rgba(255, 255, 255, 0.85);
}
```

### Form Input
```css
.input {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 1rem;
    font-size: 1rem;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.input:focus {
    outline: none;
    border-color: #0071E3;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
    transform: translateY(-2px);
}
```

### Scroll Progress Bar
```css
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #0071E3, #0077ED);
    z-index: 100;
    transition: width 0.2s ease-out;
}
```

### Loading Skeleton
```css
.skeleton {
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.7) 50%,
        rgba(255, 255, 255, 0.5) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}
```

---

## Animation Code Snippets

### Fade In Up
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Usage */
.element { animation: fadeInUp 0.6s ease-out; }
```

### Soft Pop (Scale + Fade)
```css
@keyframes soft-pop {
    0% {
        transform: scale(0.9);
        opacity: 0;
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Usage */
.element { animation: soft-pop 0.4s ease-out; }
```

### Hover Lift
```css
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-12px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
}
```

### Stagger Animation
```css
.item {
    animation: fadeInUp 0.6s ease-out backwards;
}

.item:nth-child(1) { animation-delay: 0.1s; }
.item:nth-child(2) { animation-delay: 0.2s; }
.item:nth-child(3) { animation-delay: 0.3s; }
.item:nth-child(4) { animation-delay: 0.4s; }
.item:nth-child(5) { animation-delay: 0.5s; }
```

### Focus Ring
```css
.element:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
    border-color: #0071E3;
}
```

### Smooth Transition
```css
.element {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## HTML Structure Examples

### Story Card
```html
<div class="story-card">
    <img src="image.jpg" alt="Story" loading="lazy">
    <div class="card-content">
        <h3 class="card-title">Article Title</h3>
        <p class="card-description">Brief description here</p>
        <p class="card-preview">Content preview...</p>
    </div>
</div>
```

### Glass Modal
```html
<div class="modal-overlay">
    <div class="modal-glass">
        <h2>Confirm Action</h2>
        <p>Are you sure?</p>
        <div class="modal-actions">
            <button class="btn-secondary">Cancel</button>
            <button class="btn-primary">Confirm</button>
        </div>
    </div>
</div>
```

### Form with Glass Inputs
```html
<form class="form">
    <div class="form-group">
        <label for="input">Label</label>
        <input type="text" id="input" class="input" placeholder="Placeholder">
    </div>
    <button type="submit" class="btn-primary">Submit</button>
</form>
```

---

## JavaScript Animation Helpers

### Stagger Animation
```javascript
items.forEach((item, index) => {
    setTimeout(() => {
        item.style.animation = 'fadeInUp 0.6s ease-out';
    }, index * 100); // 100ms stagger
});
```

### Scroll Progress
```javascript
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});
```

### Smooth Navigation
```javascript
button.addEventListener('click', () => {
    button.style.animation = 'soft-pop 0.3s ease-out reverse';
    setTimeout(() => {
        window.location.href = 'page.html';
    }, 150);
});
```

### Card Hover Effect
```javascript
card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-12px)';
    card.style.boxShadow = '0 16px 40px rgba(0,0,0,0.16)';
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
});
```

---

## Responsive Design Patterns

### Fluid Typography
```css
/* Scales from 1rem to 2rem based on viewport */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
p { font-size: clamp(0.875rem, 1.8vw, 1.125rem); }
```

### Responsive Spacing
```css
/* Scales from 1rem to 2rem based on viewport */
margin: clamp(1rem, 2vw, 2rem);
padding: clamp(0.75rem, 1.5vw, 1.5rem);
```

### Responsive Grid
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(1rem, 2vw, 2rem);
}
```

### Mobile-First Media Queries
```css
/* Base: Mobile */
.element { font-size: 1rem; }

/* Tablet: 600px+ */
@media (min-width: 600px) {
    .element { font-size: 1.125rem; }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
    .element { font-size: 1.25rem; }
}
```

---

## Accessibility Patterns

### Reduce Motion
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

### Focus Visible
```css
button:focus-visible {
    outline: 2px solid #0071E3;
    outline-offset: 2px;
}
```

### High Contrast Support
```css
@media (prefers-contrast: more) {
    .element {
        border-width: 2px;
        font-weight: 600;
    }
}
```

---

## Performance Tips

### Use Transform for Animations
```css
/* ✅ Good - GPU accelerated */
.element { animation: move 0.3s ease; }
@keyframes move { from { transform: translateY(0); } to { transform: translateY(10px); } }

/* ❌ Bad - Causes reflow */
@keyframes move { from { top: 0; } to { top: 10px; } }
```

### Will Change
```css
/* Use sparingly for expensive animations */
.animated-element {
    will-change: transform;
}
```

### Contain Layout
```css
/* Limits browser repaint scope */
.container {
    contain: layout style paint;
}
```

---

## Customization Examples

### Change Primary Color
```css
:root {
    --primary: #FF6B6B; /* Change to red */
    --primary-light: #FF8080;
}
```

### Increase Animation Speed
```css
:root {
    --transition-md: 0.15s cubic-bezier(0.4, 0, 0.2, 1); /* Faster */
}
```

### Enhance Glass Blur
```css
.glass-effect {
    backdrop-filter: blur(40px); /* More blur */
    background: rgba(255, 255, 255, 0.5); /* More transparent */
}
```

### Darker Shadows
```css
:root {
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.25); /* Darker */
}
```

---

## Testing Checklist

- [ ] Test animations on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test with `prefers-reduced-motion`
- [ ] Test with high contrast mode
- [ ] Test keyboard navigation
- [ ] Test focus states
- [ ] Test touch interactions
- [ ] Check performance with DevTools
- [ ] Verify blur effects work
- [ ] Test on slow 4G network

---

## Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Edge | Mobile |
|---------|--------|---------|--------|------|--------|
| Backdrop Filter | 76+ | 103+ | 9.1+ | 17+ | ✅ |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ | ✅ |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | ✅ |
| Animations | All | All | All | All | ✅ |
| Transforms | All | All | All | All | ✅ |
| Gradients | All | All | All | All | ✅ |

---

**Complete Apple Design Reference & Code Snippets**
**Version:** 1.0
**Last Updated:** February 2026
