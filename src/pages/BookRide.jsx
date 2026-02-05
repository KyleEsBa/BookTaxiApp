import { useState } from 'react';
import '../styles/BookRide.css';

export default function BookRide() {
  const [formData, setFormData] = useState({
    passengerName: '',
    contactNumber: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    serviceType: 'economy'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const serviceTypes = [
    { value: 'economy', label: 'Economy - $5 base' },
    { value: 'premium', label: 'Premium - $10 base' },
    { value: 'xl', label: 'XL - $15 base' },
    { value: 'executive', label: 'Executive - $20 base' },
    { value: 'airport', label: 'Airport Transfer - $25' }
  ];

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Validate passenger name
    if (!formData.passengerName.trim()) {
      newErrors.passengerName = 'Passenger name is required';
    } else if (formData.passengerName.trim().length < 2) {
      newErrors.passengerName = 'Name must be at least 2 characters';
    }

    // Validate contact number
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else {
      const phoneDigits = formData.contactNumber.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.contactNumber = 'Phone number must have at least 10 digits';
      }
    }

    // Validate pickup location
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required';
    }

    // Validate dropoff location
    if (!formData.dropoffLocation.trim()) {
      newErrors.dropoffLocation = 'Drop-off location is required';
    }

    // Check if pickup and dropoff are different
    if (formData.pickupLocation === formData.dropoffLocation && formData.pickupLocation.trim() !== '') {
      newErrors.dropoffLocation = 'Drop-off location must be different from pickup location';
    }

    // Validate date
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      selectedDate.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    // Validate time
    if (!formData.time) {
      newErrors.time = 'Time is required';
    } else {
      // Validate that time is in future if date is today
      if (formData.date) {
        const selectedDate = new Date(formData.date);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate.getTime() === currentDate.getTime()) {
          const [hours, minutes] = formData.time.split(':');
          const now = new Date();
          const selectedTime = new Date();
          selectedTime.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

          if (selectedTime <= now) {
            newErrors.time = 'Please select a future time';
          }
        }
      }
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Booking successful
      console.log('Booking submitted:', formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          passengerName: '',
          contactNumber: '',
          pickupLocation: '',
          dropoffLocation: '',
          date: '',
          time: '',
          serviceType: 'economy'
        });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="book-ride-container">
      <section className="booking-header">
        <h1>Book Your Ride</h1>
        <p>Quick and easy booking process</p>
      </section>

      <form className="booking-form" onSubmit={handleSubmit}>
        {submitted && (
          <div className="booking-success">
            <h2>✓ Booking Confirmed!</h2>
            <p>Your ride has been booked successfully. A driver will be assigned shortly.</p>
            <p>Check your email and SMS for booking details.</p>
          </div>
        )}

        {!submitted && (
          <>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="passengerName">Full Name *</label>
                <input
                  type="text"
                  id="passengerName"
                  name="passengerName"
                  value={formData.passengerName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.passengerName ? 'error' : ''}
                />
                {errors.passengerName && (
                  <span className="error-message">{errors.passengerName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number *</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className={errors.contactNumber ? 'error' : ''}
                />
                {errors.contactNumber && (
                  <span className="error-message">{errors.contactNumber}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickupLocation">Pickup Location *</label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="e.g., 123 Main Street"
                  className={errors.pickupLocation ? 'error' : ''}
                />
                {errors.pickupLocation && (
                  <span className="error-message">{errors.pickupLocation}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="dropoffLocation">Drop-off Location *</label>
                <input
                  type="text"
                  id="dropoffLocation"
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  placeholder="e.g., 456 Oak Avenue"
                  className={errors.dropoffLocation ? 'error' : ''}
                />
                {errors.dropoffLocation && (
                  <span className="error-message">{errors.dropoffLocation}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={errors.date ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.date && (
                  <span className="error-message">{errors.date}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="time">Time *</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={errors.time ? 'error' : ''}
                />
                {errors.time && (
                  <span className="error-message">{errors.time}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">Service Type *</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="service-select"
              >
                {serviceTypes.map(service => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="book-btn">
              Confirm Booking
            </button>
          </>
        )}
      </form>

      <section className="booking-info">
        <h2>Important Information</h2>
        <div className="info-grid">
          <div className="info-card">
            <h4>📍 Location</h4>
            <p>Provide complete, accurate addresses including apartment or suite numbers</p>
          </div>
          <div className="info-card">
            <h4>⏰ Time</h4>
            <p>Book at least 15 minutes in advance. Driver will arrive within the estimated time</p>
          </div>
          <div className="info-card">
            <h4>💳 Payment</h4>
            <p>Payment can be made through card, digital wallet, or cash at the end of the ride</p>
          </div>
          <div className="info-card">
            <h4>❌ Cancellation</h4>
            <p>Free cancellation up to 5 minutes before pickup time</p>
          </div>
        </div>
      </section>
    </div>
  );
}
