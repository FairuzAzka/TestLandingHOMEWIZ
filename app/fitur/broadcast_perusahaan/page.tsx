import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Building2, Users, Home, Bell, Calendar, Settings } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BroadcastPerusahaanPage() {
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
                Kelola dan distribusikan informasi penting dengan mudah. Dari pengumuman hingga event khusus, semua
                dalam satu sistem yang terintegrasi.
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
              className="p-4 text-center rounded-lg bg-white shadow-sm border-2 border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500">Perusahaan</span>
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

      {/* Control Panel Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Kontrol Penuh untuk Pengelola</h2>
          <p className="text-gray-600 mb-12">
            Kelola sistem broadcast dan distribusi informasi dengan mudah. Pantau penyebaran informasi, atur event, dan
            kirim pesan ke karyawan atau penghuni terkait pembaruan unit. Pantau laporan publikasi jadwal harian dan
            memastikan konten baru sampai pada tiap unit.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/BroadcastKaryawanTengah.png?height=400&width=800"
              alt="Broadcast Control Panel"
              width={800}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Announcement Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Buat Pengumuman atau Pesan</h2>
              <p className="text-gray-600 mb-6">
                Pastikan setiap penghuni mendapat dan selalu mendapatkan informasi terbaru. Buat dan sebarkan
                pengumuman, event, atau pesan penting dengan mudah melalui sistem broadcast yang terintegrasi.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bell className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Kirim pengumuman ke seluruh penghuni atau unit tertentu</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Atur jadwal pengiriman pesan otomatis</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-gray-600">Kelola template pesan untuk berbagai keperluan</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/iMac24inchBroadcastPerusahaan.png?height=400&width=600"
                alt="Announcement Interface"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Pantau Efektivitas Komunikasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold mb-2">Statistik Pengiriman</h3>
              <p className="text-gray-600">Pantau tingkat keberhasilan pengiriman pesan ke seluruh penghuni</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold mb-2">Engagement Metrics</h3>
              <p className="text-gray-600">Lihat seberapa banyak penghuni yang membaca dan merespons pesan</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="font-semibold mb-2">Optimasi Konten</h3>
              <p className="text-gray-600">Analisis waktu terbaik untuk mengirim pesan dan jenis konten yang efektif</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Bagaimana cara membuat pengumuman baru?",
              "Apakah bisa menjadwalkan pengiriman pesan?",
              "Bagaimana cara memantau efektivitas broadcast?",
              "Apakah bisa mengirim pesan ke unit tertentu saja?",
              "Bagaimana cara membuat template pesan?",
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

