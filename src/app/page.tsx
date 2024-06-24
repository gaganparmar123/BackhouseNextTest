import EquipmentCarousel from "@/components/equipments/EquipmentCarousel";
import AiButton from "@/components/ai-button/AiButton";
import HomePage from "@/components/home/HomePage";
import MarketPlace from "@/components/market-place/MarketPlace";
import NewsLetterBanner from "@/components/news-letter-banner/NewsLetterBanner";
import Process from "@/components/process/Process";
import Promotion from "@/components/promotion/Promotion";

export default function Home() {
  return (
    <>
      <HomePage />
      <EquipmentCarousel />
      <Promotion />
      <Process />
      <NewsLetterBanner />
      <MarketPlace />
      <AiButton />
    </>
  );
}
