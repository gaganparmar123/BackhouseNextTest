import EquipmentCarousel from "@/components/equipments/EquipmentCarousel";
import HomePage from "@/components/home/HomePage";
import MarketPlace from "@/components/market-place/MarketPlace";
import NewsLetterBanner from "@/components/news-letter-banner/NewsLetterBanner";

export default function Home() {
  return (
    <>
      <HomePage />
      <EquipmentCarousel />
      <NewsLetterBanner />
      <MarketPlace />
    </>
  );
}
