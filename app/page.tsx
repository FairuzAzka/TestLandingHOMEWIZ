import Image from "next/image"  
import Link from "next/link"
import { ChevronDown, Building2, Package, Megaphone, FileText, Receipt, Check, ChevronRight, Users } from "lucide-react"
import MobileMenu from "@/components/MobileMenu"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-8 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Satu Aplikasi, Semua Kebutuhan Properti Terpenuhi!
              </h1>
              <p className="text-gray-600 mb-8">
                Manajemen properti jadi lebih mudah dengan aplikasi yang terintegrasi dan terorganisir. Dari pembayaran
                sewa properti hingga laporan kerusakan, semua dapat diakses dengan mudah melalui HomeWiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600 text-center"
                >
                  Download Gratis
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 text-sm font-medium text-emerald-500 border border-emerald-500 rounded-md hover:bg-emerald-100 text-center"
                >
                  Coba Demo
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/placeholder.png"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

{/* Features Section */}
<section className="px-4 py-16 md:px-8 bg-white text-black">
        <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Lebih Praktis dengan HomeWiz!</h2>
          <h3 className="font-light text-center mb-16">Lihat bagaimana Homewiz membuat segalanya terasa lebih mudah!</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ">
            {/* Left side - Pain points */}
            <div className="space-y-8 rounded-lg shadow-lg hover:bg-emerald-50 px-5 py-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-lg">Tagihan sering terlambat & sulit dilacak</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-lg">Perbaikan lambat & sulit diproses</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-lg">Komunikasi dengan pengelola ribet</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-red-500">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-lg">Akses informasi properti terbatas</p>
              </div>
            </div>

            {/* Center - App screenshots */}
            <div className="relative">
              <Image
                src="/images/iPhone16 Pro.png"
                alt="HomeWiz Mobile App"
                width={300}
                height={600}
                className="mx-auto"
              />
            </div>

            {/* Right side - Solutions */}
            <div className="space-y-8 rounded-lg shadow-lg hover:bg-emerald-50 px-5 py-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-500">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg">Notifikasi otomatis & pembayaran lebih mudah</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-500">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg">Ajukan permintaan perbaikan dalam hitungan detik</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-500">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg">Terhubung langsung dengan tim pengelola</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-emerald-500">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg">Semua informasi properti dalam satu aplikasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Features Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Fitur Lengkap, Hidup Lebih Mudah</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nikmati berbagai fitur yang memudahkan pengelolaan properti Anda
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Image
              src="/images/fiturlengkapdanmudah.png?height=400&width=600"
              alt="HomeWiz Dashboard Features"
              width={600}
              height={400}
            />
            <div className="space-y-6 ">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Property Management</h3>
                  <p className="text-gray-600">Kelola semua properti Anda dalam satu sistem yang terintegrasi</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Receipt className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Billing Payment</h3>
                  <p className="text-gray-600">Kelola pembayaran dan tagihan dengan mudah dan transparan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Property Management</h3>
                  <p className="text-gray-600">Pantau dan kelola properti Anda secara real-time</p>
                </div>
              </div>
              <Link href="#" className="inline-flex items-center text-emerald-500 hover:text-emerald-600 font-medium">
                Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Control Features Section */}
      <section className="px-4 py-16 md:px-8 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Kendalikan Properti Anda dengan Mudah!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white hover:bg-emerald-100 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Receipt className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold mb-2">Bayar Tagihan dengan Mudah</h3>
              <p className="text-gray-600">
                Semua pembayaran tersimpan dalam satu sistem yang terintegrasi dan mudah diakses
              </p>
            </div>
            <div className="p-6 bg-white hover:bg-emerald-100 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold mb-2">Ajukan Perbaikan Instan</h3>
              <p className="text-gray-600">Proses pengajuan dengan cepat tanpa perlu antri</p>
            </div>
            <div className="p-6 bg-white hover:bg-emerald-100 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold mb-2">Terhubung dengan Pengelola</h3>
              <p className="text-gray-600">Komunikasi langsung dengan pengelola, tanggap terhadap setiap keluhan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Untuk HomeWizzers, Kemudahan Adalah Segalanya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="User Avatar"
                    width={80}
                    height={80}
                    className="rounded-full mb-2"
                  />
                  <h3 className="text-lg font-semibold">Tom Holland</h3>
                  <p className="text-sm text-gray-500">Penghuni Apartment</p>
                </div>
                <p className="text-gray-600 text-center">
                  "HomeWiz sangat membantu saya dalam mengelola properti. Semua kebutuhan properti saya terpenuhi dalam
                  satu aplikasi."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Bagaimana cara membuat laporan baru?",
              "Berapa lama laporan saya akan diproses?",
              "Apakah saya bisa melacak riwayat laporan saya?",
              "Apa yang harus saya lakukan jika laporan saya belum diproses?",
              "Apakah saya bisa memberikan ulasan setelah laporan selesai?",
            ].map((question, index) => (
              <div key={index} className="border rounded-lg bg-emerald-50 hover:bg-emerald-100">
                <button className="flex justify-between items-center w-full p-4 text-left">
                  <span className="font-medium">{question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Satu Solusi untuk Semua Laporan Apartemen Anda</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Akses dan atur semua laporan apartemen dengan cepat dan mudah yang terintegrasi dan terorganisir.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#"
              className="px-6 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
            >
              Download Gratis
            </Link>
            <Link
              href="#"
              className="px-6 py-2 text-sm font-medium text-emerald-500 border border-emerald-500 rounded-md hover:bg-emerald-100"
            >
              Coba Demo
            </Link>
          </div>
        </div>
      </section>

    
    <Footer />
    </div>
  )
}

