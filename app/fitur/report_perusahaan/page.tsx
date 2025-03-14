"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Building2, ChevronDown, ChevronUp, Home, Users } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PerusahaanReportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Bagaimana cara membuat laporan permasalahan di HomeWiz?",
      answer:
        "Penghuni dapat mengisi formulir laporan melalui aplikasi, memilih kategori masalah, dan melampirkan foto jika diperlukan. Laporan akan langsung diteruskan ke pengelola properti.",
    },
    {
      question: "Bagaimana saya bisa memantau status laporan saya?",
      answer:
        "Setelah laporan diajukan, pengguna dapat melihat statusnya dalam aplikasi, mulai dari Diajukan, Diproses, hingga Selesai.",
    },
    {
      question: "Apakah saya bisa mengedit laporan setelah diajukan?",
      answer:
        "Laporan yang sudah dikirim tidak dapat diubah, tetapi pengguna bisa menambahkan komentar atau informasi tambahan dalam detail laporan.",
    },
    {
      question: "Siapa yang akan menangani laporan saya?",
      answer:
        "Tim pengelola properti atau teknisi terkait akan menangani laporan sesuai dengan jenis permasalahan yang diajukan.",
    },
    {
      question: "Bagaimana jika laporan saya tidak ditindaklanjuti?",
      answer:
        "Jika laporan belum diproses dalam waktu yang lama, pengguna dapat menghubungi pengelola properti melalui fitur komunikasi dalam aplikasi.",
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
                Cepat. Mudah. Transparan.
                <br />
                Laporan Apartemen Tanpa Ribet!
              </h1>
              <p className="text-gray-600 mb-6">
                Kirim laporan masalah apartemen Anda dalam hitungan detik dan pantau progressnya langsung dari aplikasi.
                Tim kami siap menanggani kendala Anda!
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
                src="/images/FiturReport.png"
                alt="HomeWiz App Preview"
                width={500}
                height={400}
                className="w-full"
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
              href="/fitur/report_perusahaan"
              className="p-4 text-center rounded-lg bg-white shadow-sm border-2 border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500">Perusahaan</span>
              </div>
            </Link>
            <Link
              href="/fitur/report_karyawan"
              className="p-4 text-center rounded-lg hover:shadow-sm border group hover:border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600 group-hover:text-emerald-500">Karyawan</span>
              </div>
            </Link>
            <Link
              href="/fitur/report_resident"
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

      {/* Features Sections */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Delegasi Report Section */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-center mb-2">Delegasi Report Secara realtime</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Delegasi laporan secara real-time memungkinkan pengelola apartemen untuk memantau dan mengelola laporan
              dengan lebih efisien. Tim dapat dengan mudah menerima dan menindaklanjuti setiap laporan yang masuk,
              memastikan respons cepat dan memberikan pengalaman lebih baik kepada resident.
            </p>
            <Image
              src="/images/tongsampah.png?height=400&width=800"
              alt="Delegasi Report Interface"
              width={800}
              height={400}
              className="rounded-lg mx-auto"
            />
          </div>

          {/* List Data Report Section */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/images/ReportiMac24inch.png?height=600&width=300"
                  alt="Mobile App Interface"
                  width={300}
                  height={600}
                  className="mx-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">List Data Report Langsung dari Aplikasi</h2>
                <p className="text-gray-600 mb-6">
                  Pantau laporan secara real-time, lihat status pengerjaan, dan kelola semua data dengan mudah melalui
                  aplikasi. Semua informasi tersaji dalam sistem dengan status yang diperbarui secara otomatis.
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
            </div>
          </div>

          {/* Detail Report Section */}
          {/* <div className="mb-24">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <div className="flex gap-4">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="Report Detail Mobile"
                    width={300}
                    height={600}
                    className="transform rotate-12"
                  />
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="Report Status Mobile"
                    width={300}
                    height={600}
                    className="transform -rotate-12"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Detail Report dengan Work Track</h2>
                <p className="text-gray-600 mb-6">
                  Detail laporan dengan Work Track memungkinkan pengelola untuk melihat dan memantau progress setiap
                  laporan. Status yang selalu diperbarui membantu tim untuk mengambil tindakan yang tepat dan memastikan
                  notifikasi selalu up to date.
                </p>
                <div className="flex gap-3">
                  <Link href="#" className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                    Download Gratis
                  </Link>
                  <Link
                    href="#"
                    className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50"
                  >
                    Coba Demo
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Apa Kata Mereka Tentang Fitur Report?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
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
                  "Saya senang menggunakn fitur report di tempat tinggal, langsung bisa feedback untuk setiap masalah
                  yang datang untuk perbaikan. Sistemnya sangat efektif"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-500 mb-12">FAQ <span className="text-gray-900">- Fitur Report</span></h2>
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

