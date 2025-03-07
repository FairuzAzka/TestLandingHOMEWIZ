import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function SignUpPage() {
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
              <span className="text-gray-600">Bahasa Indonesia </span>
              {/* <ChevronLeft className="w-4 h-4 rotate-270" /> */}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Bergabunglah dengan Homewiz dan Ubah Manajemen Properti Anda!</h2>
            <p className="text-gray-600">Daftar untuk Mengoptimalkan Pengalaman Manajemen Properti Anda.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Masukkan nama lengkap anda"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

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
                placeholder="Buat kata sandi yang kuat"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Masukkan kembali kata sandi anda untuk konfirmasi"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <button type="submit" className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600">
              Daftar
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Sudah memiliki akun?{" "}
            <Link href="/auth/login" className="text-emerald-500 hover:text-emerald-600">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

