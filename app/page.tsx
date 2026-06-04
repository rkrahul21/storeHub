import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#14120E] text-[#1A1A1A] dark:text-[#FAF7F2] transition-colors duration-200">
      
      <div className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-32 sm:pb-32 bg-linear-to-br from-[#FAF7F2] via-[#F5F0E6] to-[#FAF7F2] dark:from-[#14120E] dark:via-[#1B1813] dark:to-[#14120E]">
        
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Welcome to{" "}
            <span className="text-[#4B5563] dark:text-[#A39E93]">storeHUB</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-[#4B5563] dark:text-[#A39E93] mb-8 max-w-2xl mx-auto">
            Discover our curated collection of exceptional products. Premium quality at refined prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/products"
              className="px-8 py-3 bg-[#1A1A1A] text-[#FAF7F2] hover:bg-[#4B5563] dark:bg-[#FAF7F2] dark:text-[#14120E] dark:hover:bg-[#F5F0E6] font-bold rounded-lg transition-colors text-lg text-center"
            >
              Shop Now
            </Link>
            
            <a
              href="#features"
              className="px-8 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#F5F0E6] dark:border-[#FAF7F2] dark:text-[#FAF7F2] dark:hover:bg-[#1E1B15] font-bold rounded-lg transition-colors text-lg text-center"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white dark:bg-[#1E1B15] rounded-lg p-6 shadow-lg border border-[#F5F0E6] dark:border-[#2E2920]">
              <div className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                500+
              </div>
              <p className="text-[#4B5563] dark:text-[#A39E93] font-medium">Products</p>
            </div>
            
            <div className="bg-white dark:bg-[#1E1B15] rounded-lg p-6 shadow-lg border border-[#F5F0E6] dark:border-[#2E2920]">
              <div className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                4.5★
              </div>
              <p className="text-[#4B5563] dark:text-[#A39E93] font-medium">Average Rating</p>
            </div>
            
            <div className="bg-white dark:bg-[#1E1B15] rounded-lg p-6 shadow-lg border border-[#F5F0E6] dark:border-[#2E2920]">
              <div className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                24/7
              </div>
              <p className="text-[#4B5563] dark:text-[#A39E93] font-medium">Support</p>
            </div>
          </div>
        </div>
      </div>

      <div id="features" className="bg-white dark:bg-[#14120E] py-16 sm:py-24 border-t-2 border-[#F5F0E6] dark:border-[#2E2920]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-12 text-center" style={{ fontFamily: "var(--font-playfair)" }}>
            Why Choose FakeStore?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0">
                <svg className="w-8 h-8 text-[#1A1A1A] dark:text-[#A39E93]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.243 5.753 1.244a1 1 0 001.142-1.391l-7-14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2">Curated Selection</h3>
                <p className="text-[#4B5563] dark:text-[#A39E93]">Browse products by category. Each item selected for quality and style.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <svg className="w-8 h-8 text-[#1A1A1A] dark:text-[#A39E93]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2">Premium Experience</h3>
                <p className="text-[#4B5563] dark:text-[#A39E93]">Elegant design with a sophisticated shopping experience.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <svg className="w-8 h-8 text-[#1A1A1A] dark:text-[#A39E93]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2">Trusted Reviews</h3>
                <p className="text-[#4B5563] dark:text-[#A39E93]">Real customer ratings and detailed reviews to guide your choices.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <svg className="w-8 h-8 text-[#1A1A1A] dark:text-[#A39E93]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 6H6.28l-.31-1.243A1 1 0 005 4H3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#FAF7F2] mb-2">Smart Shopping</h3>
                <p className="text-[#4B5563] dark:text-[#A39E93]">Effortless cart management with persistent storage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A] dark:bg-[#1E1B15] py-16 sm:py-24 transition-colors">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FAF7F2] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Discover Premium Products?
          </h2>
          <p className="text-lg text-[#F5F0E6] dark:text-[#A39E93] mb-8">
            Explore our collection and find your next favorite item.
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-4 bg-[#FAF7F2] text-[#1A1A1A] dark:bg-[#FAF7F2] dark:text-[#14120E] font-bold rounded-lg hover:bg-[#F5F0E6] dark:hover:bg-[#F5F0E6] transition-colors text-lg"
          >
            Shop Products
          </Link>
        </div>
      </div>

      <footer className="bg-[#F5F0E6] dark:bg-[#14120E] text-[#4B5563] dark:text-[#A39E93] py-8 border-t border-[#E8E0D0] dark:border-[#2E2920] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 storeHUB. All rights reserved to Rahul Kumar.</p>
        </div>
      </footer>
    </div>


  );
}
