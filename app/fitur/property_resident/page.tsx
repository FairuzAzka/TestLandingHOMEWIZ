import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Building2, Users } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PropertyResidentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Akses Properti dengan Mudah di Genggaman</h1>
              <p className="text-gray-600 mb-6">
                Kelola seluruh properti yang Anda miliki dengan mudah. Lihat informasi lengkap unit dan kelola penghuni
                dan dengan praktis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 text-center"
                >
                  Download Gratis
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 text-center"
                >
                  Coba Demo
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/images/properti_kanan_atas.png"
                alt="Mobile Property Access"
                width={600}
                height={1200}
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
              href="/fitur/property_perusahaan"
              className="p-4 text-center rounded-lg hover:shadow-sm border group hover:border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600 group-hover:text-emerald-500">Perusahaan</span>
              </div>
            </Link>
            <Link
              href="/fitur/property_resident"
              className="p-4 text-center rounded-lg bg-white shadow-sm border-2 border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-emerald-500" />
                <span className="text-emerald-500">Resident</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Access Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Akses Properti dengan Mudah</h2>
          <p className="text-gray-600 mb-12">
            Akses informasi properti Anda dengan mudah melalui aplikasi mobile. Lihat detail unit, status pembayaran,
            dan riwayat laporan dalam satu tempat.
          </p>
          <div className="flex justify-center gap-8">
            <Image
              src="/images/fitur_resident_tengah.png"
              alt="Property Details Mobile"
              width={900}
              height={1800}
            />
          </div>
        </div>
      </section>

      {/* Invite Residents Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/undang_penghuni.png?height=600&width=300"
                alt="Invite Residents Interface"
                width={400}
                height={700}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Undang Penghuni Baru dalam Unit Anda</h2>
              <p className="text-gray-600 mb-6">
                Permudah mengajak keluarga atau rekan sebagai penghuni dalam unit Anda dengan memberikan hak akses untuk
                menggunakan fasilitas unit/apartemen, report, dan lainnya.
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

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex gap-4">
                <Image
                  src="/images/DuaiPhone15Pro.png?height=600&width=300"
                  alt="Facilities Mobile"
                  width={600}
                  height={900}
                  className="items-center"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Temukan Fasilitas dan Informasi Penting</h2>
              <p className="text-gray-600 mb-6">
                Akses semua fasilitas, tempat olahraga, serta detail pada pihak manajemen. Anda bisa berbagai fasilitas,
                gedung, dan area publik di properti Anda.
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Apa Kata Mereka Tentang Fitur Properti?</h2>
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
                  "Aplikasi yang sangat membantu untuk mengelola unit saya. Semua informasi tersedia dengan jelas dan
                  mudah diakses."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Bagaimana cara mengundang penghuni baru?",
              "Apakah bisa mengatur akses untuk tiap penghuni?",
              "Bagaimana cara melihat informasi fasilitas?",
              "Apakah bisa melihat riwayat pembayaran?",
              "Bagaimana cara menghubungi manajemen?",
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
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
              <h2 className="text-2xl font-bold mb-4">Satu Solusi untuk Semua Hunian Anda</h2>
              <p className="text-gray-600 mb-6">
                Kelola unit properti Anda dengan lebih mudah. Dari informasi fasilitas hingga manajemen penghuni, semua
                dapat diakses dengan mudah melalui HomeWiz.
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

