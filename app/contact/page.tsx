import Image from "next/image"
import { MessageCircle, Phone, Mail } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-center mb-2">Hubungi Kami</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Solusi Hunian Pintar dengan <span className="text-emerald-500">HomeWizz</span>
          </h2>
        </div>
      </section>

      {/* Contact Form and Options */}
      <section className="px-4 py-8 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="e.g. Zayn Malik"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="e.g. PT Garam dan Madu"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Departemen
                  </label>
                  <select id="department" className="w-full px-3 py-2 border rounded-md">
                    <option value="">Pilih Departement</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="it">IT</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Karyawan
                  </label>
                  <select id="employees" className="w-full px-3 py-2 border rounded-md">
                    <option value="">Pilih Jumlah Karyawan</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Nomor Ponsel
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. 08122334455"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. ryan@company.com"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="decision-maker" className="rounded" />
                  <label htmlFor="decision-maker" className="text-sm text-gray-700">
                    Saya pengambil keputusan dalam pembelian software
                  </label>
                </div>

                <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">
                  Jadwalkan Meeting
                </button>

                <p className="text-xs text-gray-500 mt-4">
                  Dengan klik tombol jadwalkan meeting, saya menyetujui syarat dan ketentuan serta pemberitahuan privasi
                  HomeWizz
                </p>
              </form>
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Beritahu kami, apa yang bisa kami bantu?</h3>

                {/* Live Chat Option */}
                <div className="bg-white p-6 rounded-lg border mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Live Chat</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Tanya langsung tentang fitur dan penawaran harga terbaik.
                      </p>
                      <button className="text-sm text-emerald-500 font-medium hover:text-emerald-600 flex items-center gap-2">
                        WhatsApp Sales
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sales Contact Option */}
                <div className="bg-white p-6 rounded-lg border mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Kontak Sales</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Konsultasikan masalah bisnis Anda dan dapatkan solusi terbaik.
                        <br />
                        Office Hours: 09:00 – 17:00 WIB
                      </p>
                      <button className="text-sm text-emerald-500 font-medium hover:text-emerald-600 flex items-center gap-2">
                        1900 099
                      </button>
                    </div>
                  </div>
                </div>

                {/* Support Team Option */}
                <div className="bg-white p-6 rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hubungi Tim Support</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Hubungi tim support untuk bantuan teknis penggunaan produk.
                      </p>
                      <button className="text-sm text-emerald-500 font-medium hover:text-emerald-600 flex items-center gap-2">
                        Kirim Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-12">Bekerja Sama dengan Partner terbaik</h2>
          <div className="flex justify-center items-center gap-12">
            <Image
              src="/placeholder.svg?height=60&width=150"
              alt="Akamai"
              width={150}
              height={60}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/placeholder.svg?height=60&width=150"
              alt="Alibaba Cloud"
              width={150}
              height={60}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/placeholder.svg?height=60&width=150"
              alt="Buana"
              width={150}
              height={60}
              className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

