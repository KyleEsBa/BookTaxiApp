# Ube - Taxi Ride Booking Application

A complete React-based taxi ride booking service application with responsive design, form validation, and seamless navigation.

## Features

### ✨ Core Features
- **Homepage** - Landing page with company branding, features overview, and statistics
- **About Us** - Company information, mission, vision, and values
- **Services** - Comprehensive list of taxi services with pricing (Economy, Premium, XL, Executive, Airport Transfer, Hourly Rental)
- **Contact Form** - Contact information and validated contact form
- **Book a Ride** - Complete booking form with advanced validation
- **Navigation Menu** - Sticky navigation bar with links to all pages

### 🔐 Form Validation Features

#### Contact Form Validation:
- Required field validation
- Email format validation
- Phone number validation (minimum 10 digits)
- Success message display

#### Booking Form Validation:
- Passenger name validation (minimum 2 characters)
- Contact number validation (minimum 10 digits)
- Pickup location validation
- Drop-off location validation (must be different from pickup)
- Date validation (future dates only)
- Time validation (future times only)
- Service type selection
- Real-time error message clearing
- Success notification on booking

### 🎨 Design Features
- Modern gradient color scheme (Purple/Blue)
- Responsive grid layouts
- Smooth transitions and hover effects
- Mobile-friendly design (fully responsive)
- Consistent typography and spacing
- Professional card-based UI components

## Project Structure

```
src/
├── components/
│   └── Navigation.jsx          # Navigation menu component
├── pages/
│   ├── Home.jsx               # Homepage
│   ├── About.jsx              # About Us page
│   ├── Services.jsx           # Services listing page
│   ├── Contact.jsx            # Contact page with form
│   └── BookRide.jsx           # Booking form page
├── styles/
│   ├── Navigation.css         # Navigation styles
│   ├── Home.css              # Homepage styles
│   ├── About.css             # About page styles
│   ├── Services.css          # Services page styles
│   ├── Contact.css           # Contact form styles
│   └── BookRide.css          # Booking form styles
├── App.jsx                    # Main app with routing
├── App.css                    # Global app styles
├── main.jsx                   # React entry point with BrowserRouter
└── index.css                  # Global index styles
```

## Technologies Used

- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.0.0) - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and flexbox/grid

## Installation and Setup

1. **Clone or download the project:**
   ```bash
   cd BookTaxiProject
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:5173/
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Pages Overview

### 1. Home (/)
- Hero section with CTA button
- Features highlight with 4 main benefits
- Statistics section showing:
  - 10,000+ Happy Customers
  - 500+ Active Drivers
  - 24/7 Customer Support

### 2. About Us (/about)
- Company mission and vision
- Company history
- Core values:
  - Safety First
  - Transparency
  - Reliability
  - Sustainability
  - Community

### 3. Services (/services)
- 6 service types with detailed information:
  - **Economy** - Budget-friendly ($5 base + $2/km)
  - **Premium** - Enhanced features ($10 base + $3/km)
  - **XL** - Spacious for groups ($15 base + $4/km)
  - **Executive** - Luxury service ($20 base + $5/km)
  - **Airport Transfer** - Dedicated airport service (from $25)
  - **Hourly Rental** - Flexible timing ($50/hour)
- Additional service information cards

### 4. Contact (/contact)
- Contact information display
- Contact form with fields:
  - Full Name
  - Email Address
  - Phone Number
  - Subject
  - Message
- Form validation and success messaging
- Social media links

### 5. Book a Ride (/book)
- Comprehensive booking form with fields:
  - Full Name
  - Contact Number
  - Pickup Location
  - Drop-off Location
  - Date (with future date validation)
  - Time (with future time validation)
  - Service Type selection
- Real-time validation feedback
- Success confirmation message
- Additional booking information section with:
  - Location guidelines
  - Time requirements
  - Payment options
  - Cancellation policy

## Validation Rules

### Contact Form
- All fields are required
- Email must be in valid format (xxx@xxx.xxx)
- Phone must have at least 10 digits
- Error messages display inline below fields

### Booking Form
- Passenger name: minimum 2 characters
- Contact number: minimum 10 digits (non-numeric characters allowed)
- Pickup and drop-off cannot be the same
- Date must be in the future (today or later)
- Time must be in the future (for today's bookings)
- Service type is required
- Automatic form reset after successful booking

## Styling Guidelines

### Color Scheme
- Primary: `#667eea` (Blue-Purple)
- Secondary: `#764ba2` (Deep Purple)
- Accent: `#ff6b6b` (Red)
- Light Background: `#f8f9fa`
- Text Dark: `#333`
- Text Light: `#666`

### Responsive Breakpoints
- Desktop: > 768px
- Tablet & Mobile: ≤ 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Implemented

✅ React Router setup with 5 pages
✅ Navigation component on all pages
✅ Contact form with validation
✅ Booking form with advanced validation
✅ Date and time validation (future dates only)
✅ Real-time error messages
✅ Success notifications
✅ Responsive design
✅ Modern UI with gradient backgrounds
✅ Hover effects and transitions
✅ Mobile-friendly layout
✅ Accessibility considerations
✅ Clean and maintainable code structure

## Future Enhancements

- User authentication and profiles
- Payment gateway integration
- Real-time driver tracking
- Booking history
- Driver rating system
- Advanced date/time picker components
- Map integration for location selection
- Email confirmation for bookings
- Admin dashboard
- Analytics and reporting

## License

This project is created for educational purposes.

## Notes

- The form submissions are logged to the browser console
- No backend integration is currently implemented
- All data is client-side only
- The application uses mock data for services and information
