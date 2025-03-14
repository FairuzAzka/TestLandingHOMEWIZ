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
      question: "Siapa yang dapat mengirim broadcast di HomeWiz?",
      answer:
        "Hanya pengelola properti dan staf yang memiliki akses untuk mengirim pengumuman ke penghuni.",
    },
    {
      question: "Apa saja jenis informasi yang bisa dikirim melalui fitur Broadcast?",
      answer:
        "Pengumuman bisa berupa pemberitahuan perbaikan, informasi pembayaran, keadaan darurat, atau acara komunitas.",
    },
    {
      question: "Apakah penghuni bisa membalas pesan broadcast?",
      answer:
        "Tidak, broadcast hanya bersifat satu arah untuk penyebaran informasi.",
    },
    {
      question: "Bagaimana saya tahu jika ada pesan broadcast baru?",
      answer:
        "Penghuni akan menerima notifikasi di aplikasi setiap kali ada pesan broadcast baru.",
    },
    {
      question: "Apakah ada batasan jumlah penerima dalam satu broadcast?",
      answer:
        "Tidak, broadcast dapat dikirim ke semua penghuni dalam sistem tanpa batasan jumlah penerima.",
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Efisiensi Komunikasi, Informasi Tersampaikan Lebih Cepat!
              </h1>
              <p className="text-gray-600 mb-6">
                Dapatkan informasi penting langsung dari manajemen, mudah dan cepat. Semua informasi tersaji dalam
                sistem yang terintegrasi.
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
                src="/images/Broadcast.png"
                alt="Staff Broadcast Interface"
                width={400}
                height={700}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-8">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Link
              href="/fitur/broadcast_perusahaan"
              className="p-4 text-center rounded-lg hover:shadow-sm border group hover:border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600 group-hover:text-emerald-500">Perusahaan</span>
              </div>
            </Link>
            <Link
              href="/fitur/broadcast_karyawan"
              className="p-4 text-center rounded-lg bg-white shadow-sm border-2 border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500">Karyawan</span>
              </div>
            </Link>
            <Link
              href="/fitur/broadcast_resident"
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

      {/* Quick Access Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/BroadcastKaryawanHelmKuning.png?height=600&width=300"
                alt="Quick Access Mobile"
                width={400}
                height={700}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Akses Cepat ke Informasi</h2>
              <p className="text-gray-600 mb-6">
                Dapatkan informasi penting langsung dari manajemen, mudah dan cepat. Semua informasi tersaji dalam
                sistem yang terintegrasi. Hingga update tugas, semua informasi diakses secara real-time, sehingga
                karyawan bisa bekerja lebih efisien dan terorganisir.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bell className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Notifikasi real-time untuk informasi penting</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Update tugas dan jadwal secara langsung</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Akses dokumen dan panduan dengan mudah</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Message Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex gap-4">
                <Image
                  src="/images/Broadcast2iPhone16.png?height=600&width=300"
                  alt="Message Detail Mobile"
                  width={600}
                  height={900}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Detail Informasi atau Pesan untuk Karyawan</h2>
              <p className="text-gray-600 mb-6">
                Dapatkan akses ke informasi detail untuk informasi lebih lanjut tentang pengumuman atau event yang
                sedang berlangsung.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Informasi Terorganisir</h3>
                  <p className="text-gray-600">Semua pesan dan pengumuman tersusun rapi dan mudah diakses</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Riwayat Lengkap</h3>
                  <p className="text-gray-600">Akses riwayat pesan dan pengumuman kapan saja</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Notifikasi Pintar</h3>
                  <p className="text-gray-600">Dapatkan notifikasi untuk informasi yang relevan dengan tugas Anda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-500 mb-12">FAQ <span className="text-gray-900">- Fitur Broadcast</span></h2>
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

