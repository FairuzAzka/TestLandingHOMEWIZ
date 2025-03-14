"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, Home, ChevronDown, ChevronUp } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function KaryawanPackagePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Bagaimana saya tahu jika paket saya telah tiba?",
      answer:
        "Penghuni akan menerima notifikasi langsung di aplikasi ketika paket mereka telah diterima oleh staf pengelola.",
    },
    {
      question: "Bagaimana cara mengambil paket saya?",
      answer:
        "Penghuni dapat menunjukkan ID paket di aplikasi kepada staf untuk mengambil paket mereka.",
    },
    {
      question: "Apakah saya bisa mengecek riwayat paket saya?",
      answer:
        "Ya, semua riwayat penerimaan paket dapat diakses melalui menu Paket di aplikasi.",
    },
    {
      question: "Bagaimana jika paket saya hilang atau salah diserahkan?",
      answer:
        "Penghuni dapat mengajukan laporan melalui aplikasi atau menghubungi pengelola properti untuk investigasi lebih lanjut.",
    },
    {
      question: "Apakah fitur paket dapat digunakan oleh semua penghuni?",
      answer:
        "Ya, fitur ini tersedia untuk semua penghuni yang terdaftar dalam sistem HomeWiz.",
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Paket Tertata, Penghuni Tenang!</h1>
              <p className="text-gray-600 mb-6">
                Tidak perlu lagi khawatir mencari paket! HomeWiz menggunakan fitur Package Management, yang
                memungkinkan penghuni, staff, dan pengelola untuk melacak status paket dengan mudah dan mengambil paket
                dengan lebih praktis dan transparan.
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
                src="/images/package.png"
                alt="HomeWiz Package Management"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-semibold text-center mb-6">
            Homewiz adalah pilihan tepat bagi perusahaan, karyawan, dan resident
          </h2>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="/fitur/package_karyawan"
              className="p-4 text-center rounded-lg bg-white shadow-sm border-2 border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500">Karyawan</span>
              </div>
            </Link>
            <Link
              href="/fitur/package_resident"
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

      {/* Add Package Feature */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Fitur Add Package - Kelola Paket dengan Lebih Mudah & Tertata</h2>
          <p className="text-gray-600 mb-12">
            Fitur Add Package di HomeWiz memungkinkan staff untuk mencatat setiap paket yang diterima secara digital.
            Dengan sistem ini, paket yang masuk akan tercatat dengan rapi, memudahkan proses distribusi dan memastikan
            tidak ada paket yang terlewat.
          </p>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/FiturAddPackage.png"
                alt="Add Package Interface"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safe Package Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/PengambilanPaket.png"
                alt="Package Collection Interface"
                width={300}
                height={600}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Pengambilan Paket yang Aman</h2>
              <p className="text-gray-600 mb-6">
                Fitur Take by Package di HomeWiz memastikan keamanan setiap paket yang diterima. Dengan sistem ini,
                penghuni harus bisa menunjukkan paket mereka dengan nomor resi atau referensi kode yang bisa
                diverifikasi oleh staff untuk paket yang akan diambil.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                  Download Gratis
                </Link>
                <Link
                  href="https://homewiz.suiten.dev/signup"
                  className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50">
                  Coba Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Package Feature */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Fitur Detail Package dengan Work Track</h2>
                <p className="text-gray-600 mb-12">
                  Fitur Detail Package dengan Work Track di HomeWiz memungkinkan staff untuk melihat informasi detail paket
                  yang diterima dan memantau status pengambilan. Jika terjadi masalah dengan paket, sistem akan mencatat
                  tracking setiap perubahan status dan memudahkan proses investigasi.
                </p>
                <div className="flex gap-3">
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
            <div className="flex md:flex-row-reverse">
            <div className="relative">
              <Image
                src="/images/Package_2iPhone16.png"
                alt="Package Detail Interface"
                width={400}
                height={800}
              />  
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-500 mb-12">FAQ <span className="text-gray-900">- Fitur Packgage</span></h2>
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

