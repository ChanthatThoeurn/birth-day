import type { Metadata } from "next";
import BirthdayPage from "@/components/birthday/BirthdayPage";

// Metadata សម្រាប់ SEO និង Social Media Sharing (Open Graph)
export const metadata: Metadata = {
  title: "Happy 20th Birthday, Teang Panha (អូនសម្លាញ់) ❤️",
  description:
    "អបអរសាទរខួបកំណើតគម្រប់ ២០ ឆ្នាំរបស់ តាំង បញ្ញា (Teang Panha)។ គេហទំព័រពិសេសដែលបង្កើតឡើងដោយក្តីស្រឡាញ់សម្រាប់អូនសម្លាញ់! ✨🎂",
  keywords: [
    "Teang Panha",
    "តាំង បញ្ញា",
    "Happy Birthday Teang Panha",
    "Birthday Surprise",
    "អូនសម្លាញ់",
  ],
  authors: [{ name: "Your Love" }],
  openGraph: {
    title: "Happy 20th Birthday, Teang Panha! 🎉❤️",
    description: "A very special birthday surprise created with love for Teang Panha.",
    url: "https://yourdomain.com", // ជំនួសដោយ Domain របស់បង
    siteName: "Teang Panha Birthday Surprise",
    images: [
      {
        url: "/photos/teang-panha-birthday.jpg", // រូបថត Banner របស់អូនសម្លាញ់
        width: 1200,
        height: 630,
        alt: "Teang Panha 20th Birthday Celebration",
      },
    ],
    locale: "km_KH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy 20th Birthday, Teang Panha! ❤️",
    description: "Special birthday surprise created with love for Teang Panha.",
    images: ["/photos/teang-panha-birthday.jpg"],
  },
};

export default function Home() {
  // Structured Data (JSON-LD) សម្រាប់ជួយឲ្យ Search Engine យល់កាន់តែច្បាស់ពីទំព័រនេះ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Teang Panha's 20th Birthday Celebration",
    startDate: "2026-09-23",
    description: "Special birthday celebration page created for Teang Panha.",
    performer: {
      "@type": "Person",
      name: "Teang Panha",
      alternateName: "តាំង បញ្ញា",
    },
    image: "/photos/teang-panha-birthday.jpg",
  };

  return (
    <>
      {/* បន្ថែម JSON-LD សម្រាប់ SEO ជាន់ខ្ពស់ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Semantic HTML structure សម្រាប់ SEO */}
      <main className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
        {/* Hidden SEO heading សម្រាប់ Google Search Engines Engine Indexing */}
        <h1 className="sr-only">
          Happy 20th Birthday Teang Panha - តាំង បញ្ញា ខួបកំណើត ២០ ឆ្នាំ
        </h1>

        {/* បង្ហាញ UI component ដ៏ស្អាតរបស់អូនសម្លាញ់ */}
        <BirthdayPage />
      </main>
    </>
  );
}