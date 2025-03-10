import Image from "next/image"
import Link from "next/link"
import { Users, Home, ChevronDown } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function KaryawanPackagePage() {
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
                Tidak perlu lagi khawatir mencari paket! Homewizz menggunakan fitur Package Management, yang
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
            Fitur Add Package di Homewizz memungkinkan staff untuk mencatat setiap paket yang diterima secara digital.
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
                Fitur Take by Package di Homewizz memastikan keamanan setiap paket yang diterima. Dengan sistem ini,
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
                  Fitur Detail Package dengan Work Track di Homewizz memungkinkan staff untuk melihat informasi detail paket
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-center mb-12">FAQ - Fitur Package</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Bagaimana cara mengetahui apakah paket saya sudah tiba?",
              "Bagaimana cara mengambil paket saya?",
              "Apakah saya bisa memeriksa riwayat paket yang pernah saya terima?",
              "Bagaimana jika saya tidak bisa mengambil paket sendiri?",
              "Apa yang harus saya lakukan jika paket saya hilang?",
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
      
    <Footer />
    </div>
  )
}

