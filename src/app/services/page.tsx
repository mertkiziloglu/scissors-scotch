import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services | Scissors & Scotch - Premium Men's Grooming",
  description: "Explore our premium men's haircuts, beard trims, hot towel shaves, and other grooming services at Scissors & Scotch.",
  keywords: "barber services, men's haircuts, beard trim, hot towel shave, grooming services",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            At Scissors & Scotch, we offer a wide range of premium grooming services designed to help you look and feel your best.
          </p>
          
          {/* Services list would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Signature Haircut</h3>
              <p className="text-gray-600 mb-4">
                Our signature haircut includes a consultation, shampoo, conditioning, cut, and style.
              </p>
              <p className="font-semibold">From $45</p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Beard Trim</h3>
              <p className="text-gray-600 mb-4">
                Keep your beard looking sharp with our professional beard trimming service.
              </p>
              <p className="font-semibold">From $25</p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Hot Towel Shave</h3>
              <p className="text-gray-600 mb-4">
                Experience the ultimate in relaxation with our traditional hot towel shave.
              </p>
              <p className="font-semibold">From $35</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 