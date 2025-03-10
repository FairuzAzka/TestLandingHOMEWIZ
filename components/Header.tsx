"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Building2, Package, Megaphone, FileText, Receipt } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-8 border-b relative">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/Logo_homewiz.png" alt="HomeWiz Logo" width={120} height={30} className="mr-8" />
        </Link>
        <div className="hidden md:flex space-x-6">
          {/* Dropdown Fitur */}
          <div className="relative">
            <button
              onClick={() => setIsReportOpen(!isReportOpen)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              Fitur
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Menu */}
            {isReportOpen && (
              <div
                className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                onClick={(e) => e.stopPropagation()} // Mencegah dropdown tertutup saat diklik
              >
                <div className="p-4 grid gap-4">
                  <Link
                    href="/fitur/property_perusahaan"
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md"
                  >
                    <Building2 className="h-5 w-5 text-gray-500" />
                    <span>Fitur Property</span>
                  </Link>
                  <Link
                    href="/fitur/package_karyawan"
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md"
                  >
                    <Package className="h-5 w-5 text-gray-500" />
                    <span>Fitur Package</span>
                  </Link>
                  <Link
                    href="/fitur/broadcast_karyawan"
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md"
                  >
                    <Megaphone className="h-5 w-5 text-gray-500" />
                    <span>Fitur Broadcast</span>
                  </Link>
                  <Link
                    href="/fitur/report_perusahaan"
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md"
                  >
                    <FileText className="h-5 w-5 text-gray-500" />
                    <span>Fitur Report</span>
                  </Link>
                  <Link
                    href="/fitur/billing_perusahaan"
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md"
                  >
                    <Receipt className="h-5 w-5 text-gray-500" />
                    <span>Fitur Billing</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/solusi" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Solusi
          </Link>
          <Link href="/harga" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Harga
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Testimonial
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="hidden md:block">
          <Link href="https://homewiz.suiten.dev/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign in
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="https://homewiz.suiten.dev/signup"
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          >
            Create User
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
