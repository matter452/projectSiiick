import * as React from 'react';

export default function FooterComponent() {
  return (
    <footer className="bg-dark fixed left-0 right-0 bottom-0">
      <div className="w-full">
        <div className="flex flex-row justify-center justify gap-x-16 px-16 my-16">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">Help</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Brand Center</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
            </ul>
          </div>

          {/* Help Center Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-black mb-2">Our Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">History</a></li>
              <li><a href="#" className="hover:text-black">Environment</a></li>
              <li><a href="#" className="hover:text-black">Customer Support</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-black mb-2">Apparrel</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Shoes</a></li>
              <li><a href="#" className="hover:text-black">Hoodies</a></li>
              <li><a href="#" className="hover:text-black">Tops & T-Shirts</a></li>
              <li><a href="#" className="hover:text-black">Pants & Shorts</a></li>
              <li><a href="#" className="hover:text-black">Accessories</a></li>
            </ul>
          </div>

          {/* Download Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-black mb-2">Gear</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Complete Decks</a></li>
              <li><a href="#" className="hover:text-black">Boards</a></li>
              <li><a href="#" className="hover:text-black">Wheels</a></li>
              <li><a href="#" className="hover:text-black">Trucks</a></li>
              <li><a href="#" className="hover:text-black">Hardware</a></li>
              <li><a href="#" className="hover:text-black">Helmets & Pads</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-black mb-2">Skate</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Skating 101</a></li>
              <li><a href="#" className="hover:text-black">Your First Board</a></li>
              <li><a href="#" className="hover:text-black">Staying Safe</a></li>
              <li><a href="#" className="hover:text-black">Skatepark Ettiquette</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Icons */}
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-300">
            <p>So Siiick 2024</p>
          </div>

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a href="#" className="text-gray-400 hover:text-black"></a>
            <a href="#" className="text-gray-400 hover:text-black"></a>
            <a href="#" className="text-gray-400 hover:text-black"></a>
            <a href="#" className="text-gray-400 hover:text-black"></a>
            <a href="#" className="text-gray-400 hover:text-black"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
