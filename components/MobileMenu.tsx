"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight, Building2, Package, Megaphone, FileText, Receipt } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFeatureOpen, setIsFeatureOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="px-6 py-4">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setIsFeatureOpen(!isFeatureOpen)}
                  className="flex items-center justify-between w-full text-left py-2 text-gray-600 hover:text-gray-900"
                >
                  <span className="text-lg font-medium">Fitur</span>
                  {isFeatureOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {isFeatureOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    <Link
                      href="#"
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <Building2 size={18} />
                      <span>Fitur Property</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <Package size={18} />
                      <span>Fitur Package</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <Megaphone size={18} />
                      <span>Fitur Broadcast</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <FileText size={18} />
                      <span>Fitur Report</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-gray-900"
                      onClick={() => setIsOpen(false)}
                    >
                      <Receipt size={18} />
                      <span>Fitur Billing</span>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-lg font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Solusi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-lg font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-lg font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonial
                </Link>
              </li>
            </ul>
            <div className="mt-8 space-y-4">
              <Link
                href="#"
                className="block w-full py-2 text-center text-lg font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="block w-full py-2 text-center text-lg font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
                onClick={() => setIsOpen(false)}
              >
                Create User
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}