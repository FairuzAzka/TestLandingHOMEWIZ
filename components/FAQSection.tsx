"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Apa itu HomeWizz?",
    answer:
      "HomeWizz adalah solusi digital berbasis cloud yang dirancang untuk mempermudah pengelolaan properti, mulai dari apartemen, perumahan, hingga gedung komersial. Aplikasi ini mengintegrasikan berbagai fitur seperti manajemen unit, laporan permasalahan, pembayaran tagihan, parkir, pengelolaan paket, serta sistem akses penghuni dan pengunjung.",
  },
  {
    question: "Siapa saja yang bisa menggunakan HomeWizz?",
    answer:
      "HomeWizz dapat digunakan oleh pengelola properti, staf operasional, dan penghuni (tenant). Setiap peran memiliki akses yang berbeda sesuai dengan kebutuhan dan tanggung jawabnya dalam sistem.",
  },
  {
    question: "Apakah saya bisa melacak riwayat laporan saya?",
    answer:
      "Tidak. Selain apartemen, HomeWizz juga dapat digunakan untuk perumahan, kompleks ruko, gedung perkantoran, dan berbagai jenis properti lainnya yang membutuhkan sistem manajemen terpadu.",
  },
  {
    question: "Bagaimana cara mendaftar dan mulai menggunakan HomeWizz?",
    answer:
      "Anda dapat mendaftar melalui website HomeWizz atau menghubungi tim kami untuk demo dan onboarding. Setelah registrasi, pengelola dapat mulai mengatur unit, menambahkan penghuni, dan mengelola operasional properti melalui dashboard HomeWizz.",
  },
  {
    question: "Apakah data saya aman di HomeWizz?",
    answer:
      "Tentu! HomeWizz menggunakan sistem keamanan berbasis enkripsi dan penyimpanan cloud yang memastikan data pengguna tetap aman dan hanya dapat diakses oleh pihak yang berwenang.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-16 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" rounded-lg bg-white shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-900 bg-gray-900">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
