import React from 'react'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Image
              src="/img/aa2.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-auto"
            />
            <p className="text-gray-600 text-sm">
              Empowering our community through financial cooperation and mutual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 text-sm">
                <FiPhone className="mr-2" />
                <span>+491781015092</span>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <FiMail className="mr-2" />
                <span>info@albayern.com</span>
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <FiMapPin className="mr-2" />
                <span>Munich, Germany</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Newsletter</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Al-Bayern-Ujaama Sacco. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer