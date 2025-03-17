import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoImage from "@/components/SeoImage";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative" aria-labelledby="hero-heading">
        <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
          <SeoImage
            src="https://ext.same-assets.com/1701950190/502358705.jpeg"
            alt="Scissors & Scotch Barber Shop - Premium men's haircuts and grooming services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 text-center">Welcome to Scissors & Scotch</h1>
            <p className="text-xl md:text-2xl mb-10 text-center max-w-2xl">...or as we like to call it, the best damn part of your day.</p>
            <Link href="/booking" className="btn-primary" aria-label="Book an appointment now">
              Book Now
            </Link>
            <p className="text-sm mt-6 italic max-w-lg text-center">*Unless you won the lottery or something. Then we're probably a close second.</p>
          </div>
        </div>
      </section>

      {/* Do Yourself a Favor Section */}
      <section className="py-16 bg-white" aria-labelledby="favor-heading">
        <div className="container-custom">
          <h2 id="favor-heading" className="section-title">Do yourself a favor</h2>
          <p className="section-subtitle">
            Scissors & Scotch is the grooming experience every man deserves - where traditional barbering and modern spa services meet your favorite watering hole. Sit back, relax, get groomed - then enjoy a cocktail, coffee, or cold one in our private lounge.
          </p>

        </div>
      </section>

      {/* Come for the grooming Section */}
      <section className="py-12 bg-gray-100" aria-labelledby="grooming-heading">
        <div className="container-custom">
          <h2 id="grooming-heading" className="text-3xl font-bold mb-6 text-center">Come for the grooming. Stay for the booze.</h2>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            At Scissors & Scotch, you'll find friendly, people, an impressive offering of grooming services and a fully-stocked bar. What we like to refer to as: the best damn part of your day.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">The people have spoken</h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 text-sm">4.9 / 5 | 4,000+ Google Reviews</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"By far my favorite haircut experience ever."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/3902145908/2014903948.png"
                  alt="Jay Simpson - Scissors & Scotch Customer"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Jay Simpson</h4>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"Love this place! I highly recommend it to anyone looking for a new shop."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/3808762242/1775579771.png"
                  alt="Marquis Roy - Scissors & Scotch Customer"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Marquis Roy</h4>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"Awesome haircut. Awesome drinks. Awesome atmosphere."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/3380216555/3981322809.jpeg"
                  alt="Damien Flores - Scissors & Scotch Customer"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Damien Flores</h4>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm">
              <p className="mb-4 text-gray-700 italic">"Super friendly and helpful team. The service here is always an A+."</p>
              <div className="flex items-center">
                <SeoImage
                  src="https://ext.same-assets.com/146233034/3865889983.jpeg"
                  alt="Alex Miles - Scissors & Scotch Customer"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <h4 className="font-medium">Alex Miles</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="section-title">We're Exclusively Inclusive</h2>
          <p className="section-subtitle">
            You don't need a membership to experience Scissors & Scotch, but our packages allow you to save while also enjoying plenty of perks. Benefits include special discounts, guest passes, member-only events and unlimited booze.
          </p>
          <p className="text-center italic mb-12">(...okay not the last one, but we got your attention, right?)</p>

          {/* Perks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Perk 1 */}
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Free Upkeeps</h3>
            </div>

            {/* Perk 2 */}
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Member Events</h3>
            </div>

            {/* Perk 3 */}
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                  <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Special Discounts</h3>
            </div>
          </div>

          <div className="text-center">
            <Link href="/memberships" className="btn-primary">
              Hell Yes
            </Link>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section className="relative">
        <div className="relative h-[400px] w-full">
          <SeoImage
            src="https://ext.same-assets.com/149234666/2666641620.jpeg"
            alt="Scissors & Scotch Gear"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">See what you've been missing</h2>
            <Link href="/booking" className="btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SeoImage
                src="https://ext.same-assets.com/3464918301/3582934371.jpeg"
                alt="Scissors & Scotch Careers"
                width={500}
                height={400}
                className="rounded-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Calling all</h2>
              <p className="text-lg mb-6">
                We've built a business and a culture that prioritizes people, because solid relationships with our customers and employees will always be what matters most.
              </p>
              <Link href="https://careers.scissorsscotch.com/" target="_blank" className="btn-primary">
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom text-center">
          <h2 className="section-title">Look Good, Feel Great, Kick Ass</h2>
          <Link href="/services" className="btn-primary">
            View Our Services
          </Link>
        </div>
      </section>

      {/* Partners/Press Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">We're Getting Buzz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-12">
            {/* Logos */}
            {[
              "https://ext.same-assets.com/2919704370/4246386714.png",
              "https://ext.same-assets.com/2239177678/2823944177.png",
              "https://ext.same-assets.com/1143240669/1427935980.jpeg",
              "https://ext.same-assets.com/3529087500/3327766163.png",
              "https://ext.same-assets.com/1514726522/1882593589.png",
              "https://ext.same-assets.com/19708020/1756690088.png",
              "https://ext.same-assets.com/2023003071/2616912440.png",
            ].map((src, index) => (
              <div key={index} className="flex items-center justify-center">
                <SeoImage
                  src={src}
                  alt="Partner Logo"
                  width={100}
                  height={60}
                  className="h-auto max-h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
