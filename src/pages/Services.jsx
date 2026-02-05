import '../styles/Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Economy',
      icon: '🚗',
      description: 'Budget-friendly option for solo travelers and small groups',
      features: ['Seats 4 passengers', 'Air-conditioned', 'Best value for money'],
      price: '$5 base + $2/km'
    },
    {
      id: 2,
      name: 'Premium',
      icon: '🚙',
      description: 'Comfortable ride with enhanced features and services',
      features: ['Seats 5 passengers', 'Premium vehicles', 'Water & snacks included'],
      price: '$10 base + $3/km'
    },
    {
      id: 3,
      name: 'XL',
      icon: '🚐',
      description: 'Spacious option for groups and families',
      features: ['Seats 6+ passengers', 'Extra luggage space', 'Comfortable seating'],
      price: '$15 base + $4/km'
    },
    {
      id: 4,
      name: 'Executive',
      icon: '🚕',
      description: 'Luxury service for corporate clients and special occasions',
      features: ['Premium seating', 'Professional attire', 'Business amenities'],
      price: '$20 base + $5/km'
    },
    {
      id: 5,
      name: 'Airport Transfer',
      icon: '✈️',
      description: 'Dedicated service to and from the airport',
      features: ['Meet & greet', 'Flight tracking', 'Luggage assistance'],
      price: 'From $25'
    },
    {
      id: 6,
      name: 'Hourly Rental',
      icon: '⏰',
      description: 'Rent a taxi for hourly use',
      features: ['Flexible timing', 'Maximum value', 'Professional driver'],
      price: '$50/hour'
    }
  ];

  return (
    <div className="services-container">
      <section className="services-header">
        <h1>Our Services</h1>
        <p>Choose the service that best suits your needs</p>
      </section>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>

      <section className="additional-info">
        <h2>Why Our Services Stand Out</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>24/7 Availability</h3>
            <p>Book a ride anytime, day or night. We're always ready to serve you.</p>
          </div>
          <div className="info-card">
            <h3>Real-time Tracking</h3>
            <p>Track your driver in real-time and know exactly when they'll arrive.</p>
          </div>
          <div className="info-card">
            <h3>Secure Payments</h3>
            <p>Multiple payment options including cards, digital wallets, and cash.</p>
          </div>
          <div className="info-card">
            <h3>Safety Features</h3>
            <p>Driver verification, panic button, and ride sharing options available.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
