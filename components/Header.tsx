"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Building2, Package, Megaphone, FileText, Receipt } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isFiturOpen, setIsFiturOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-2 md:px-8 border-b relative">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/images/Logo_homewiz.png" alt="HomeWiz Logo" width={120} height={30} className="mr-8" />
        </Link>
        <div className="hidden md:flex space-x-12">
          {/* Dropdown Fitur */}
          <div className="relative">
            <button
              onClick={() => setIsFiturOpen(!isFiturOpen)}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              Fitur
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Menu */}
            {isFiturOpen && (
              <div
                className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 grid grid-cols-2 gap-4">
                  <Link href="/fitur/property_perusahaan" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-xs">
                    <Building2 className="h-5 w-5 text-gray-500" />
                    <span>Fitur Property</span>
                  </Link>
                  <Link href="/fitur/package_karyawan" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-xs">
                    <Package className="h-5 w-5 text-gray-500" />
                    <span>Fitur Package</span>
                  </Link>
                  <Link href="/fitur/broadcast_karyawan" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-xs">
                    <Megaphone className="h-5 w-5 text-gray-500" />
                    <span>Fitur Broadcast</span>
                  </Link>
                  <Link href="/fitur/report_perusahaan" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-xs">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <span>Fitur Report</span>
                  </Link>
                  <Link href="/fitur/billing_perusahaan" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-xs">
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
            Resource
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        {/* Dropdown Language */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            ID
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Dropdown Menu */}
          {isLanguageOpen && (
            <div
              className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg border border-gray-200 z-50"
              onClick={(e) => e.stopPropagation()} // Mencegah dropdown tertutup saat diklik
            >
              <div className="p-4 grid gap-4 text-xs">
                <span>ENG</span>
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:block">
          <Link href="https://homewiz.suiten.dev/login" className="text-sm font-medium text-emerald-600 hover:text-gray-900">
            Sign In
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="/contact" className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600">
            Hubungi Sales
          </Link>
        </div>
        <div className="hidden md:block">
          <Link href="https://homewiz.suiten.dev/signup" className="px-4 py-2 text-sm font-medium border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50">
            Coba Gratis
          </Link>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
