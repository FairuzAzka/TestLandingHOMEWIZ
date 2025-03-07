"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, ChevronDown } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<"backoffice" | "staff" | "resident">("backoffice")

  const roleContent = {
    backoffice: {
      description: "Optimalkan operasional dan kelola apartemen dengan lebih efisien",
      features: [
        {
          id: "01",
          title: "Kelola Properti & Unit dengan Mudah",
          description: "Akses data unit, pemilik, dan status hunian secara real-time.",
        },
        {
          id: "02",
          title: "Broadcast & Pengumuman",
          description: "Kirim informasi penting ke seluruh penghuni dalam sekali klik.",
        },
        {
          id: "03",
          title: "Tagihan Pembayaran Terintegrasi",
          description: "Atur billing bulanan, pantau pembayaran, dan kirim pengingat otomatis.",
        },
        {
          id: "04",
          title: "Manajemen Laporan & Perbaikan",
          description: "Pantau, delegasikan, dan pastikan penyelesaian laporan dengan sistem otomatis.",
        },
      ],
    },
    staff: {
      description: "Tingkatkan efisiensi kerja dengan sistem yang terintegrasi",
      features: [
        {
          id: "01",
          title: "Tugas & Laporan Perbaikan",
          description: "Akses daftar pekerjaan secara digital & update status pengerjaan secara real-time.",
        },
        {
          id: "02",
          title: "Pengelolaan Paket & Kiriman",
          description: "Catat & informasikan paket masuk agar penghuni dapat mengambilnya tepat waktu.",
        },
        {
          id: "03",
          title: "Manajemen Fasilitas & Keamanan",
          description: "Pastikan area fasilitas selalu dalam kondisi optimal dengan laporan yang terdokumentasi.",
        },
        {
          id: "04",
          title: "Sistem Notifikasi & Reminder",
          description: "Dapatkan tugas baru & update laporan langsung melalui aplikasi.",
        },
      ],
    },
    resident: {
      description: "Nikmati kemudahan akses layanan apartemen",
      features: [
        {
          id: "01",
          title: "Laporan & Perbaikan Mudah",
          description: "Laporkan masalah apartemen langsung dari aplikasi & pantau progresnya secara real time.",
        },
        {
          id: "02",
          title: "Reservasi Fasilitas",
          description: "Booking gym, kolam renang, atau ruang meeting tanpa harus datang ke kantor pengelola.",
        },
        {
          id: "03",
          title: "Broadcast & Pengumuman",
          description: "Dapatkan informasi penting tentang apartemen Anda secara real-time.",
        },
        {
          id: "04",
          title: "Pembayaran Online",
          description: "Bayar tagihan apartemen dengan mudah melalui berbagai metode pembayaran.",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      < Header />

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Digitalisasi Manajemen Properti untuk Bisnis yang Lebih Efisien
              </h1>
              <p className="text-gray-600 mb-6">
                Dapatkan solusi pintar untuk manajemen apartemen yang lebih mudah, cepat, dan efisien. HomeWiz
                menghubungkan pengelola, staff, dan penghuni dalam satu aplikasi terpadu untuk memastikan semua aspek
                properti berjalan lancar.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>Monitor dan kelola properti tanpa stres</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>Tingkatkan pengalaman penghuni dengan layanan digital</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>Otomatisasi operasional dan optimalkan efisiensi staf</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                  Konsultasi Gratis
                </button>
                <button className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50">
                  Coba Gratis
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/pagesolusi_atas_kiri.png"
                alt="Property Management Team"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="roles" className="px-4 py-16 md:px-8 bg-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Solusi untuk Setiap <span className="text-emerald-500">Peran</span> di Apartemen
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            HomeWizz dirancang untuk memenuhi kebutuhan pengelola apartemen (back office), staf operasional, dan
            penghuni (resident/tenant). Berikut solusi yang ditawarkan untuk masing-masing peran:
          </p>

          <div className="flex flex-col md:flex-row gap-8">

            {/* Left Sidebar - Role Selection */}
            <div className="md:w-64 flex-shrink-0">
              <div className="space-y-6">
                <button
                  onClick={() => setSelectedRole("backoffice")}
                  className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors ${
                    selectedRole === "backoffice" ? "text-emerald-500 bg-emerald-50" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-6 h-6 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        d="M3 9.5L12 4L21 9.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium">Back Office</h3>
                    <p className="text-sm">{roleContent.backoffice.description}</p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedRole("staff")}
                  className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors ${
                    selectedRole === "staff" ? "text-emerald-500 bg-emerald-50" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-6 h-6 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium">Staff</h3>
                    {selectedRole === "staff" && <p className="text-sm">{roleContent.staff.description}</p>}
                  </div>
                </button>

                <button
                  onClick={() => setSelectedRole("resident")}
                  className={`w-full flex items-start gap-3 p-3 rounded-lg transition-colors ${
                    selectedRole === "resident" ? "text-emerald-500 bg-emerald-50" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <div className="w-6 h-6 mt-1">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path
                        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium">Resident</h3>
                    {selectedRole === "resident" && <p className="text-sm">{roleContent.resident.description}</p>}
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Features Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {roleContent[selectedRole].features.map((feature) => (
                  <div key={feature.id}>
                    <h3 className="text-lg font-medium mb-2">
                      <span className="text-emerald-500">{feature.id}</span> {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Scale Section */}
      <section id="solusibisnis"  className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-12">
            Kenapa HomeWizz Cocok untuk <span className="text-emerald-500">Skala Bisnis</span> Anda?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
            <div className="p-6 rounded-lg border hover:bg-emerald-50">
              <h3 className="font-medium mb-2">Automasi Penuh</h3>
              <p className="text-gray-600">Kurangi proses manual dengan sistem yang terintegrasi</p>
            </div>
            <div className="p-6 rounded-lg border hover:bg-emerald-50">
              <h3 className="font-medium mb-2">Skalabilitas Tinggi</h3>
              <p className="text-gray-600">Solusi yang bisa berkembang seiring pertumbuhan bisnis Anda</p>
            </div>
            <div className="p-6 rounded-lg border hover:bg-emerald-50">
              <h3 className="font-medium mb-2">Data & Analitik</h3>
              <p className="text-gray-600">Ambil keputusan berbasis data untuk pertumbuhan bisnis yang lebih cepat</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border hover:bg-emerald-50">
              <h3 className="font-medium mb-2">Pengelolaan Multi-Properti</h3>
              <p className="text-gray-600">Cocok untuk manajemen apartemen skala besar dan perusahaan properti</p>
            </div>
            <div className="p-6 rounded-lg border hover:bg-emerald-50">
              <h3 className="font-medium mb-2">Efisiensi Biaya & Operasional</h3>
              <p className="text-gray-600">Kurangi biaya administrasi & tingkatkan produktivitas tim</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            FAQ <span className="text-emerald-500">Solusi</span>
        </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Bagaimana HomeWizz membantu pengelola apartemen dalam mengelola operasional harian?",
              "Apa manfaat HomeWizz bagi penghuni apartemen?",
              "Apakah HomeWizz cocok untuk apartemen dengan jumlah unit yang lebih kecil?",
              "Bagaimana solusi HomeWizz dalam mendukung skala bisnis yang lebih besar seperti grup properti atau developer?",
              "Bagaimana cara bisnis properti mendapatkan manfaat dari HomeWizz?",
            ].map((question, index) => (
              <div key={index} className="rounded-lg border bg-emerald-50 hover:bg-emerald-100">
                <button className="w-full flex items-center justify-between p-4 text-left">
                  <span>{question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/HappyFamily.png?height=400&width=500"
                alt="Happy Family"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Satu Solusi untuk Semua Hunian Anda</h2>
              <p className="text-gray-600 mb-6">
                Kelola dan pantau semua laporan apartemen dalam satu sistem yang terintegrasi dan transparan. Dari
                permasalahan unit pribadi hingga fasilitas umum, aplikasi, tamu, dan sekaligus laporan dengan lebih
                cepat dan efisien langsung dari aplikasi.
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                  Konsultasi Gratis
                </button>
                <button className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50">
                  Coba Gratis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      < Footer />
    </div>
  )
}

