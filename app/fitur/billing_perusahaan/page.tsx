"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, Home, ChevronDown, ChevronUp, Building2, FileText, Calendar, Bell, Clock } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function KaryawanPackagePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const faqs = [
    {
      question: "Bagaimana cara melihat tagihan saya di HomeWiz?",
      answer:
        "Penghuni dapat melihat semua tagihan yang harus dibayarkan langsung di menu Billing pada aplikasi.",
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau virtual account sesuai dengan metode yang disediakan oleh pengelola properti.",
    },
    {
      question: "Apakah saya akan menerima notifikasi saat ada tagihan baru?",
      answer:
        "Ya, penghuni akan menerima notifikasi setiap kali ada tagihan baru yang harus dibayarkan.",
    },
    {
      question: "Bagaimana jika saya mengalami kendala saat melakukan pembayaran?",
      answer:
        "Jika mengalami kendala, penghuni dapat menghubungi pengelola properti atau bagian administrasi melalui aplikasi.",
    },
    {
      question: "Apakah saya bisa melihat riwayat pembayaran saya?",
      answer:
        "Ya, semua riwayat transaksi pembayaran tersedia di dalam aplikasi.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Billing yang Lebih Mudah dan Transparan</h1>
              <p className="text-gray-600 mb-6">
                Kelola dan pantau pembayaran dengan sistem billing yang terintegrasi. Buat invoice, kelola tagihan, dan
                pantau pembayaran dengan mudah.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 text-center"
                >
                  Download Gratis
                </Link>
                <Link
                  href="https://homewiz.suiten.dev/signup"
                  className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 text-center"
                >
                  Coba Demo
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/images/Billing.png"
                alt="Billing Management Dashboard"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="/billing_perusahaan"
              className="p-4 text-center rounded-lg bg-white shadow-sm border-2 border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500">Perusahaan</span>
              </div>
            </Link>
            <Link
              href="/fitur/billing_resident"
              className="p-4 text-center rounded-lg hover:shadow-sm border group hover:border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Home className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600 group-hover:text-emerald-500">Resident</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Financial Reports Section */}

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Laporan Keuangan yang Lengkap</h2>
          <p className="text-gray-600 mb-12">
          Dapatkan insight mendalam tentang pembayaran properti. Lihat arus kas, statistik pembayaran, dan analisis
          keuangan tepat waktu dengan laporan yang terstruktur dan mudah dipahami.
          </p>
          <div className="flex justify-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/BillingPerusahaan.png?height=400&width=600"
                alt="Financial Reports Dashboard"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Billing Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <Image
                  src="/images/iMac24inchBillingPerusahaan.png?height=400&width=600"
                  alt="Billing Management Interface"
                  width={600}
                  height={400}
                />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Kelola Tagihan Tanpa Ribet</h2>
              <p className="text-gray-600 mb-6">
              Atur semua pembayaran properti dalam satu sistem yang terintegrasi. Buat, kelola, dan pantau tagihan dengan lebih mudah
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-gray-600">Monitoring pembayaran real-time dengan status yang jelas</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-gray-600">Kirim pengingat otomatis ke tenant sebelum jatuh tempo</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-gray-600">Buat laporan keuangan instan untuk analisis yang akurat</p>
                </li>
              </ul>
              <div className="flex gap-3 py-5">
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

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Untuk HomeWizers, Kemudahan Adalah Segalanya</h2>
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
                  <p className="text-sm text-gray-500">Pengelola Apartment</p>
                </div>
                <p className="text-gray-600 text-center">
                  "Dengan HomeWiz, pengelolaan properti menjadi lebih efisien. Semua data tersentralisasi dan mudah
                  diakses."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-500 mb-12">FAQ <span className="text-gray-900">- Fitur Billing</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-emerald-50 shadow-md hover:shadow-lg">
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
                  <div className="p-4 text-gray-600 rounded-lg bg-emerald-50 border-gray-100">{faq.answer}</div>
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
                <Image
                  src="/images/logohomewiztanpatulisan.png?"
                  alt="Family Using App"
                  width={30}
                  height={20}
                />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-center">Satu Solusi untuk Semua Hunian Anda</h2>
              <p className="text-gray-600 mb-6 text-center">
              Kelola dan pantau semua laporan apartemen dalam satu sistem yang terintegrasi dan transparan. Dari permasalahan unit pribadi hingga fasilitas umum, ajukan, lacak, dan selesaikan laporan dengan lebih cepat dan efisien langsung dari aplikasi.
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

