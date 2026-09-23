import type { Metadata } from "next";
import "./globals.css";

// កែប្រែ Metadata ឱ្យកាន់តែផ្អែមល្ហែម និងសមស្របនឹងអូនសម្លាញ់ ❤️
export const metadata: Metadata = {
  title: "រីករាយថ្ងៃកំណើត, អូនសម្លាញ់ ❤️ | ថ្ងៃពិសេសរបស់អូន", // ចំណងជើងទំព័រ
  description: "ការភ្ញាក់ផ្អើលខួបកំណើតដ៏ពិសេស និងផ្អែមល្ហែមសម្រាប់មនុស្សដែលបងស្រឡាញ់បំផុត។ #BirthdayGirl #Love", // ការពិពណ៌នា
  
  // បន្ថែមស្លាក Open Graph (សម្រាប់ចែករំលែកលើបណ្តាញសង្គម)
  openGraph: {
    title: "រីករាយថ្ងៃកំណើត, អូនសម្លាញ់ ❤️",
    description: "ចូលរួមអបអរសាទរថ្ងៃពិសេសរបស់អូន!",
    images: [{ url: '/photos/on.jpg' }], // ដាក់ផ្លូវទៅរូបភាពដែលចង់បង្ហាញ
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="km"> { /* ប្តូរភាសាទៅជាខ្មែរ 'km' */ }
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}