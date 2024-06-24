import AiButton from "@/components/ai-button/AiButton";
import HomePage from "@/components/home/HomePage";
import MarketPlace from "@/components/market-place/MarketPlace";
import NewsLetterBanner from "@/components/news-letter-banner/NewsLetterBanner";

export default function Home() {
  return (
    <>
      <HomePage />
      <NewsLetterBanner />
      <MarketPlace />
      <AiButton />
    </>
  );
}
