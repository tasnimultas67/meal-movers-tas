import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Meal Movers — Bringing Delicious Meals right to your doorstep",
  description:
    "Meal Movers is a premier food delivery service dedicated to bringing delicious meals right to your doorstep. We partner with a wide range of local restaurants and eateries to offer a diverse menu that caters to all tastes and dietary preferences. Whether you're craving comfort food, healthy options, or gourmet dishes, Meal Movers ensures a seamless and timely delivery experience. Our mission is to make mealtime convenient and enjoyable, so you can focus on what matters most.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
