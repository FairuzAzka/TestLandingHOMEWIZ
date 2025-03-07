import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Building2, Users, Home, Bell, Calendar, FileText } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BroadcastResidentPage() {
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
                Kelola dan dapatkan informasi penting dengan mudah. Dari pengumuman hingga event khusus, semua dalam
                satu sistem yang terintegrasi.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 text-center"
                >
                  Download Gratis
                </Link>
                <Link
                  href="#"
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
              className="p-4 text-center rounded-lg hover:shadow-sm border group hover:border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600 group-hover:text-emerald-500">Karyawan</span>
              </div>
            </Link>
            <Link
              href="/fitur/broadcast_resident"
              className="p-4 text-center rounded-lg bg-white shadow-sm border-2 border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Home className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500">Resident</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Updates Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/BroadcastResidentBajuBiru.png?height=600&width=300"
                alt="Property Updates Mobile"
                width={350}
                height={650}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Tetap Update dengan Informasi Properti</h2>
              <p className="text-gray-600 mb-6">
                Mulai berlangganan dengan informasi terbaru dari pengelola properti. Dapatkan notifikasi untuk setiap
                pembaruan dan informasi penting. Dengan notifikasi real-time, Anda tidak akan melewatkan informasi
                penting yang berkaitan dengan hunian Anda.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bell className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Notifikasi real-time untuk pengumuman penting</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Informasi event dan kegiatan properti</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Akses dokumen dan panduan properti</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex gap-4">
                <Image
                  src="/images/BroadcastResident2iPhone16.png?height=600&width=300"
                  alt="Announcements Mobile"
                  width={400}
                  height={700}
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="md:w-1/2 mx-auto">
              <h2 className="text-2xl font-bold mb-4">Pengumuman dan Event</h2>
              <p className="text-gray-600 mb-6">
                Terima semua pengumuman dan event yang relevan dengan properti Anda dalam satu tempat.
              </p>
              {/* <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Pengumuman Properti</h3>
                  <p className="text-gray-600">Dapatkan informasi terkini tentang properti Anda</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Jadwal Event</h3>
                  <p className="text-gray-600">Ikuti berbagai event menarik di properti Anda</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Informasi Pemeliharaan</h3>
                  <p className="text-gray-600">Dapatkan update tentang jadwal pemeliharaan properti</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Bagaimana cara melihat pengumuman terbaru?",
              "Apakah saya akan mendapat notifikasi untuk event?",
              "Dimana saya bisa melihat jadwal pemeliharaan?",
              "Bagaimana cara menyimpan pengumuman penting?",
              "Apakah saya bisa mengatur jenis notifikasi yang diterima?",
            ].map((question, index) => (
              <div key={index} className="border rounded-lg bg-white">
                <button className="flex justify-between items-center w-full p-4 text-left">
                  <span className="font-medium">{question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
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
              <h2 className="text-2xl font-bold mb-4">Satu Solusi untuk Semua Properti Anda</h2>
              <p className="text-gray-600 mb-6">
                Kelola semua properti Anda dalam satu sistem yang terintegrasi. Dari manajemen unit hingga laporan
                keuangan, semua dapat diakses dengan mudah melalui HomeWiz.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">
                  Download Gratis
                </Link>
                <Link
                  href="/auth/signup"
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

