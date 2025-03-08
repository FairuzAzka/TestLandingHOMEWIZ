import Link from "next/link"
import { Check, ChevronDown } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kelola Properti Tanpa Ribet, Pilih Paket HomeWizz yang Sesuai untuk Anda
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nikmati kemudahan mengelola properti dengan fitur terbaik HomeWizz. Coba gratis, kerja hingga 100 unit tanpa
            batas, dan dapatkan fleksibilitas penuh dengan paket berbayar.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
              Konsultasi Gratis
            </Link>
            <Link
              href="\auth\signup"
              className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50"
            >
              Coba Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 hover:border-emerald-500 rounded-md hover:bg-emerald-50">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Starter</h3>
                <p className="text-emerald-500 mb-4">Gratis Selamanya</p>
                <p className="text-gray-600">
                  Untuk kelola properti Anda tanpa batas! Paket ini cocok untuk menggunakan skala kecil dengan fitur
                  dasar yang tersedia
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-medium mb-4">Benefit:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Tersedia 1 user admin</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Fitur dasar (Billing, Report, Property, Broadcast)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Notifikasi real-time & SumberDaya langsung dengan pengelola</span>
                  </li>
                </ul>
              </div>

              <button className="w-full px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                Konsultasi
              </button>
              <Link href="#" className="block text-center mt-4 text-emerald-500 hover:text-emerald-600">
                Coba Gratis
              </Link>
            </div>

            {/* Pro+ Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 hover:border-emerald-500 rounded-md hover:bg-emerald-50">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Pro+</h3>
                <p className="text-emerald-500 mb-4">Berbayar</p>
                <p className="text-gray-600">
                  Tingkatkan fasilitas dengan akses lebih luas dan fitur tambahan untuk kebutuhan manajemen properti
                  yang lebih kompleks
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-medium mb-4">Benefit:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Tersedia 2 user admin plus 15 user karyawan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Fitur dasar plus Add-ons untuk optimasi audit script</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span>Dashboard prioritas untuk manajemen yang lebih efektif</span>
                  </li>
                </ul>
              </div>

              <button className="w-full px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                Konsultasi Harga
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-4">Tingkatkan Kemampuan dengan Add-ons Premium</h2>
          <p className="text-center text-gray-600 mb-12">
            Dapatkan fitur tambahan eksklusif untuk mengoptimalkan pengelolaan properti yang lebih maksimal
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <button className="p-4 border rounded-lg text-left hover:border-emerald-500">Smart Management</button>
            <button className="p-4 border rounded-lg text-left hover:border-emerald-500 bg-emerald-500 text-white">
              Insight & Connectivity
            </button>
            <button className="p-4 border rounded-lg text-left hover:border-emerald-500">Priority Support</button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Insight & Connectivity</h3>
            <p className="text-gray-600 mb-8">Dapatkan wawasan lebih dalam untuk keputusan yang lebih baik</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Advanced Reporting</h4>
                <p className="text-gray-600">
                  Kelola properti dengan lebih cermat menggunakan laporan operasional dan keuangan yang detail serta
                  akurat. Tingkat wawasan
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">System Integration</h4>
                <p className="text-gray-600">
                  Sinkronisasi semua data dalam dengan menghubungkan berbagai sistem dalam satu platform terpadu. Mudah
                  digunakan
                </p>
              </div>
            </div>

            <button className="mt-8 px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Bagaimana cara membuat laporan baru?",
              "Berapa lama laporan saya akan diproses?",
              "Apakah saya bisa melacak riwayat laporan saya?",
              "Apa yang harus saya lakukan jika laporan saya belum diproses?",
              "Apakah saya bisa memberikan ulasan setelah laporan selesai?",
            ].map((question, index) => (
              <div key={index} className="rounded-lg border bg-emerald-50 hover:bg-emerald-100">
                <button className="flex justify-between items-center w-full p-4 text-left">
                  <span className="font-medium">{question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

