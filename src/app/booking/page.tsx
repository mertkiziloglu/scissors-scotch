import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Book an Appointment | Scissors & Scotch - Premium Men's Grooming",
  description: "Book your appointment at Scissors & Scotch for premium men's haircuts, beard trims, and grooming services.",
  keywords: "book barber appointment, men's haircut booking, grooming appointment, scissors and scotch booking",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Book an Appointment</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Schedule your next grooming experience at Scissors & Scotch. Choose your location, service, and preferred time.
          </p>
          
          {/* Booking form would go here */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Select Location</label>
                <select id="location" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a location</option>
                  <option value="downtown">Downtown</option>
                  <option value="midtown">Midtown</option>
                  <option value="uptown">Uptown</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Select Service</label>
                <select id="service" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a service</option>
                  <option value="haircut">Signature Haircut</option>
                  <option value="beard">Beard Trim</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="combo">Haircut & Beard Combo</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="stylist" className="block text-gray-700 font-medium mb-2">Select Stylist (Optional)</label>
                <select id="stylist" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Any available stylist</option>
                  <option value="john">John</option>
                  <option value="sarah">Sarah</option>
                  <option value="mike">Mike</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Select Date</label>
                <input type="date" id="date" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              
              <div className="mb-8">
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Select Time</label>
                <select id="time" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
              </div>
              
              <button type="submit" className="w-full py-3 px-4 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 