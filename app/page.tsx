"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp, Building2, Package, FileText, Receipt, ChevronRight, Users } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Apa itu HomeWizz?",
      answer:
        "HomeWizz adalah solusi digital berbasis cloud yang dirancang untuk mempermudah pengelolaan properti, mulai dari apartemen, perumahan, hingga gedung komersial. Aplikasi ini mengintegrasikan berbagai fitur seperti manajemen unit, laporan permasalahan, pembayaran tagihan, parkir, pengelolaan paket, serta sistem akses penghuni dan pengunjung.",
    },
    {
      question: "Siapa saja yang bisa menggunakan HomeWizz?",
      answer:
        "HomeWizz dapat digunakan oleh pengelola properti, staf operasional, dan penghuni (tenant). Setiap peran memiliki akses yang berbeda sesuai dengan kebutuhan dan tanggung jawabnya dalam sistem.",
    },
    {
      question: "Apakah HomeWizz tersedia dalam versi mobile?",
      answer:
        "Ya, HomeWizz tersedia dalam versi mobile untuk Android dan iOS, sehingga pengguna dapat mengakses dan mengelola properti mereka dari mana saja dan kapan saja.",
    },
    {
      question: "Apakah HomeWizz mendukung integrasi dengan sistem lain?",
      answer:
        "Ya, HomeWizz dirancang dengan API yang memungkinkan integrasi dengan berbagai sistem lain seperti sistem akuntansi, keamanan, dan manajemen fasilitas.",
    },
    {
      question: "Bagaimana cara mendapatkan informasi lebih lanjut?",
      answer:
        "Anda dapat menghubungi tim kami melalui formulir kontak di website atau mengirim email ke info@homewizz.com untuk mendapatkan informasi lebih lanjut atau menjadwalkan demo.",
    },
  ]

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
                HomeWizz adalah solusi pintar untuk penyewa dan pengelola apartemen. Dapatkan akses real-time ke
                informasi unit Anda, kelola properti tanpa stres!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-md hover:bg-emerald-600 text-center"
                >
                  Konsultasi Gratis
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 text-sm font-medium text-emerald-500 border border-emerald-500 rounded-md hover:bg-emerald-100 text-center"
                >
                  Coba Gratis
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/placeholder.png" width={500} height={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:px-8 bg-white text-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Lebih Praktis dengan HomeWiz!</h2>
          <h3 className="font-light text-center mb-16">
            Lihat bagaimana Homewiz membuat segalanya terasa lebih mudah!
          </h3>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Untuk HomeWizzers, Kemudahan Adalah Segalanya
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
            <div className="transition duration-50 hover:scale-125 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-zoom-in">
              <div className="flex flex-col items-center mb-4">
                <Image src="#" width={100} height={100} className="rounded-full border-2 border-emerald-500" />
                <h3 className="text-lg font-semibold mt-3 text-gray-800">Pengguna HomeWizz</h3>
                <p className="text-sm text-gray-500">Penyewa Apartement</p>
              </div>
              <p className="text-gray-600 text-center">
                "HomeWizz bikin hidup lebih simpel! Saya nggak perlu khawatir soal tagihan atau perbaikan lagi!"
              </p>
            </div>
            <div className="transition duration-50 hover:scale-125 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-zoom-in">
              <div className="flex flex-col items-center mb-4">
                <Image src="#" width={100} height={100} className="rounded-full border-2 border-emerald-500" />
                <h3 className="text-lg font-semibold mt-3 text-gray-800">Pengguna HomeWizz</h3>
                <p className="text-sm text-gray-500">Penyewa Apartement</p>
              </div>
              <p className="text-gray-600 text-center">
                "HomeWizz bikin hidup lebih simpel! Saya nggak perlu khawatir soal tagihan atau perbaikan lagi!"
              </p>
            </div>
            <div className="transition duration-50 hover:scale-125 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 hover-zoom-in">
              <div className="flex flex-col items-center mb-4">
                <Image src="#" width={100} height={100} className="rounded-full border-2 border-emerald-500" />
                <h3 className="text-lg font-semibold mt-3 text-gray-800">Pengguna HomeWizz</h3>
                <p className="text-sm text-gray-500">Penyewa Apartement</p>
              </div>
              <p className="text-gray-600 text-center">
                "HomeWizz bikin hidup lebih simpel! Saya nggak perlu khawatir soal tagihan atau perbaikan lagi!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white shadow-md hover:shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-emerald-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-600 bg-white border-t border-gray-100">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/HappyFamily.png?"
                alt="Family Using App"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex justify-center py-4">
                <Image src="/images/logohomewiztanpatulisan.png?" alt="Family Using App" width={30} height={20} />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">Satu Solusi untuk Semua Hunian Anda</h2>
              <p className="text-gray-600 mb-6 text-center">
                Kelola dan pantau semua laporan apartemen dalam satu sistem yang terintegrasi dan transparan. Dari
                permasalahan unit pribadi hingga fasilitas umum, ajukan, lacak, dan selesaikan laporan dengan lebih
                cepat dan efisien langsung dari aplikasi.
              </p>
              <div className="flex gap-3 flex justify-center">
                <Link href="#" className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                  Download Gratis
                </Link>
                <Link
                  href="https://homewiz.suiten.dev/signup"
                  className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50"
                >
                  Coba Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

