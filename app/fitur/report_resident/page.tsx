import Image from "next/image"
import Link from "next/link"
import { Building2, ChevronDown, Home, Users } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ResidentReportPage() {
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
                  href="#"
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
              className="p-4 text-center rounded-lg hover:shadow-sm border group hover:border-emerald-500"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-emerald-500" />
                <span className="text-gray-600 group-hover:text-emerald-500">Perusahaan</span>
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

      {/* Features Sections */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Dashboard Report Section */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold text-center mb-2">Dashboard Report</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Dashboard Report menampilkan rangkaian data informatif yang memungkinkan pengguna untuk melihat, mengolah,
              dan memantau status laporan dalam satu tempat.
            </p>
            <Image
              src="/images/ReportOnlineCukup.png"
              alt="Dashboard Interface"
              width={600}
              height={1200}
              className="rounded-lg mx-auto"
            />
          </div>

          {/* Detail Report Section */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/images/ListDataReportLangsung.png?"
                  alt="Desktop Interface"
                  width={300}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Detail Report dengan Status yang Jelas</h2>
                <p className="text-gray-600 mb-6">
                  Status akan selalu otomatis terupdate setiap perkembangan status, mulai dari Dikirim, Diterima, hingga
                  Selesai, memudahkan transparansi proses bagi penghuni.
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

           {/* Detail Report Section */}
           <div className="mb-24">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <div className="flex gap-4">
                  <Image
                    src="/images/DetailReport.png?height=600&width=300"
                    alt="Report Detail Mobile"
                    width={400}
                    height={700}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Detail Report dengan Work Track</h2>
                <p className="text-gray-600 mb-6">
                Detail Report dengan Work Track memungkinkan penghuni, staf, dan pengelola apartemen untuk melihat progres laporan secara real-time. Setiap laporan perbaikan atau keluhan akan memiliki tracking sistem yang mencatat setiap tahapan pengerjaan, memastikan transparansi dan efisiensi dalam penyelesaian masalah.
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
      <section className="py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            FAQ - <span className="text-emerald-500">Fitur Report</span>
        </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Apa yang bisa saya laporkan melalui Fitur Report?",
              "Bagaimana cara mengetahui status laporan saya?",
              "Apakah saya bisa mengedit atau membatalkan laporan setelah dikirm?",
              "Berapa lama waktu yang dibutuhkan untuk menyelesaikan laporan?",
              "Bagaimana jika masalah belum terselesaikan setelah laporan dinyatakan selesai?",
            ].map((question, index) => (
              <div key={index} className="rounded-lg border bg-emerald-50 hover:bg-emerald-100">
                <button className="flex justify-between items-center w-full p-4 text-left">
                  <span className="font-medium">{question}</span>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </button>
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
                src="/placeholder.svg?height=400&width=600"
                alt="Family Using App"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Satu Solusi untuk Semua Hunian Anda</h2>
              <p className="text-gray-600 mb-6">
                Kelola dan pantau semua laporan apartemen dalam satu sistem yang terintegrasi. Dari pembayaran sewa
                properti hingga laporan kerusakan, semua dapat diakses dengan mudah melalui HomeWiz.
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

    <Footer />
     
    </div>
  )
}

