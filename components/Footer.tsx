import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Image src="/images/Logo_homewiz_putih.png" alt="HomeWiz Logo" width={150} height={40} className="mb-4" />
            <div className="flex space-x-3 mb-4">
              <Link href="#" className="bg-black text-white px-3 py-1 rounded-md text-xs">
                Google Play
              </Link>
              <Link href="#" className="bg-black text-white px-3 py-1 rounded-md text-xs">
                App Store
              </Link>
            </div>
            <p className="text-sm">© 2024 HomeWiz. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Fitur</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="fitur/property_perusahaan" className="hover:text-gray-900">
                    Property
                  </Link>
                </li>
                <li>
                  <Link href="fitur/broadcast_karyawan" className="hover:text-gray-900">
                    Broadcast
                  </Link>
                </li>
                <li>
                  <Link href="fitur/billing_perusahaan" className="hover:text-gray-900">
                    Billing
                  </Link>
                </li>
                <li>
                  <Link href="fitur/report_karyawan" className="hover:text-gray-900">
                    Report
                  </Link>
                </li>
                <li>
                  <Link href="fitur/karyawan" className="hover:text-gray-900">
                    Package
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solusi</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/solusi#roles" className="hover:text-gray-900">
                    Roles
                  </Link>
                </li>
                <li>
                  <Link href="/solusi#solusibisnis" className="hover:text-gray-900">
                    Untuk Bisnis
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://suiten.id/" className="hover:text-gray-900">
                    About Suiten
                  </Link>
                </li>
                <li>
                  <Link href="https://suiten.id/services" className="hover:text-gray-900">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="https://suiten.id/careers" className="hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
