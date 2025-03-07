import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/images/LoginRegisterBG.png"
          alt="Modern Architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="p-8">
          <Link href="/">
            <Image src="/images/logo_homewiz_putih.png" alt="HomeWiz Logo" width={150} height={40} />
          </Link>
          </div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">HomeWiz: Mitra Anda dalam Manajemen Properti Tanpa Repot.</h1>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="text-emerald-500 hover:text-emerald-600 flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Kembali ke beranda
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Bahasa Indonesia</span>
              {/* <ChevronLeft className="w-4 h-4 rotate-270" /> */}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Selamat datang kembali di Homewiz!</h2>
            <p className="text-gray-600">Masuk untuk mengelola properti anda dengan mudah.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan alamat email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan kata sandi anda"
                className="w-full px-3 py-2 border rounded-md"
              />
              <div className="flex justify-end mt-1">
                <Link href="/forgot-password" className="text-sm text-emerald-500 hover:text-emerald-600">
                  Lupa kata sandi?
                </Link>
              </div>
            </div>

            <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">
              Masuk ke Homewiz
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Baru di Homewiz?{" "}
            <Link href="/auth/signup" className="text-emerald-500 hover:text-emerald-600">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

