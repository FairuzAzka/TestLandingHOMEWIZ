// import Image from "next/image"
// import Link from "next/link"

// export default function Footer() {
//   return (
//     <footer className="bg-teal-800 text-white py-12">
//       <div className="container mx-auto max-w-6xl px-4">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="mb-8 md:mb-0">
//             <Image src="/images/Logo_homewiz_putih.png" alt="HomeWiz Logo" width={150} height={40} className="mb-4" />
//             <div className="flex space-x-3 mb-4">
//               <Link href="#" className="bg-black text-white px-3 py-1 rounded-md text-xs">
//                 Google Play
//               </Link>
//               <Link href="#" className="bg-black text-white px-3 py-1 rounded-md text-xs">
//                 App Store
//               </Link>
//             </div>
//             <p className="text-sm">© 2024 HomeWiz. All rights reserved.</p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="font-semibold mb-4">Fitur</h3>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link href="/fitur/property_perusahaan" className="hover:text-gray-900">
//                     Property
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/fitur/broadcast_karyawan" className="hover:text-gray-900">
//                     Broadcast
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/fitur/billing_perusahaan" className="hover:text-gray-900">
//                     Billing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/fitur/report_karyawan" className="hover:text-gray-900">
//                     Report
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/fitur/karyawan" className="hover:text-gray-900">
//                     Package
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Solusi</h3>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link href="/solusi#roles" className="hover:text-gray-900">
//                     Roles
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/solusi#solusibisnis" className="hover:text-gray-900">
//                     Untuk Bisnis
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Perusahaan</h3>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link href="https://suiten.id/" className="hover:text-gray-900">
//                     About Suiten
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://suiten.id/services" className="hover:text-gray-900">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://suiten.id/careers" className="hover:text-gray-900">
//                     Careers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-gray-900">
//                     Help Center
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }



import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Bagian Kiri */}
          <div className="mb-8 md:mb-0">
            <Image src="/images/Logo_homewiz_putih.png" alt="HomeWiz Logo" width={220} height={110} className="mb-4" />

            {/* Source Download Button */}
              <div className="flex flex-col space-y-3 mb-4">
                <div className="flex justify-center space-x-10 py-3">
                  <button type="button" className="flex items-center justify-center w-32 text-white bg-black rounded-lg h-10 mx-auto">
                    <div className="mr-3">
                      <svg viewBox="0 0 384 512" width="16">
                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xxs absolute-left">Download on the</div>
                      <div className="-mt-1 font-sans text-xs font-semibold">App Store</div>
                    </div>
                  </button>
                  <button type="button" className="flex items-center justify-center w-32 text-white bg-black rounded-lg h-10 mx-auto">
                  <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="16">
                      <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                      <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                      <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                      <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xxs justify-left">GET IT ON</div>
                    <div className="-mt-1 font-sans text-xs font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
                {/* Form Subscribe */}
                <div className="mt-4">
                  <p className="text-sm mb-2">Stay up to date</p>
                  <div className="flex space-x-3">
                    <input 
                      type="email" 
                      placeholder="Your email here" 
                      className="px-3 py-2 rounded-md text-black text-xs w-48 focus:outline-none" 
                    />
                    <button className="bg-green-500 px-4 py-2 rounded-md text-xs font-semibold">
                      Subscribe
                    </button>
                  </div>
                </div> 
              </div>
          </div>  

        {/* Bagian Kanan */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Fitur</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/fitur/property_perusahaan" className="hover:text-gray-400">Property</Link></li>
                <li><Link href="/fitur/broadcast_karyawan" className="hover:text-gray-400">Broadcast</Link></li>
                <li><Link href="/fitur/billing_perusahaan" className="hover:text-gray-400">Billing</Link></li>
                <li><Link href="/fitur/report_karyawan" className="hover:text-gray-400">Report</Link></li>
                <li><Link href="/fitur/karyawan" className="hover:text-gray-400">Package</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solusi</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/solusi#roles" className="hover:text-gray-400">Roles</Link></li>
                <li><Link href="/solusi#solusibisnis" className="hover:text-gray-400">Skala Bisnis</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="https://suiten.id/" className="hover:text-gray-400">About Suiten</Link></li>
                <li><Link href="https://suiten.id/services" className="hover:text-gray-400">Services</Link></li>
                <li><Link href="https://suiten.id/careers" className="hover:text-gray-400">Careers</Link></li>
                <li><Link href="#" className="hover:text-gray-400">Help Center</Link></li>
              </ul>
            </div>
          </div>
        </div>

        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-white mt-8 pt-4 text-center text-sm">
          © 2025 Suiten Inovasi Sukses. All rights reserved
        </div>
    </footer>
  )
}

