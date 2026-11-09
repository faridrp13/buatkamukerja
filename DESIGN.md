# Design Direction: YRES (Yura Reminder System)

## Overview & Identity
- **Product:** YRES (Yura Reminder System)
- **Role:** Internal B2B workspace productivity tool for BPJS Kesehatan reminder operators
- **Audience:** Operational office staff managing billing reconciliations and sending WhatsApp / Google Messages notifications
- **Mood:** Clean, functional, dependable, low-fatigue daily workspace

## Design Dials
- **ENERGY 1**: Functional workspace utility without marketing hype, decorative illustrations, or unnecessary gamification.
- **RHYTHM 2**: Visual variety between upload actions, template controls, and data tables while keeping parallel KPI metrics structurally aligned.
- **MOTION 1**: Meaningful feedback on interactions (subtle button presses, dialog fade-in, theme toggles) with zero continuous distracting animations.

## Typography
- **Primary Interface:** Plus Jakarta Sans (Clean, high-legibility geometric sans-serif crafted for Indonesian digital contexts)
- **Data & Numbers:** JetBrains Mono (Used for card numbers, phone numbers, and variable placeholders `{nama}`, `{no kartu}`, `{nominal}`)

## Color Architecture
- **Brand Primary:** `#4f46e5` (Indigo-600) - Distinct, professional utility identity avoiding default generic blue or purple AI gradients.
- **Success / Completed:** Emerald (`#059669` / `#10b981`) - Clear positive status indicator for sent reminders and completed billing.
- **Pending / Action Needed:** Amber (`#d97706` / `#f59e0b`) - Non-alarmist reminder status.
- **Neutrals:** Slate palette (`#0f172a` to `#f8fafc`) - High contrast dark mode support designed for extended screen time.

## Design Rules & Decisions (R-31 & R-37)
1. **No Artificial AI Slop:** No generic multi-stop purple/blue gradients, no excessive frosted glassmorphism across multiple cards, and no decorative floating blur circles.
2. **Pill & Radius Restraint:** Differentiated border radii (`rounded-xl` for compact buttons, `rounded-2xl` for cards, `rounded-3xl` for main container cards) instead of uniform pill shapes everywhere.
3. **Typography Restraint:** Sentence case and title case used naturally; no unnecessary all-caps with extreme letter-spacing on regular labels.
4. **Keyboard Accessibility:** Modals support Escape key dismissal and clear focus states.
