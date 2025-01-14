import AppDownloadBanner from "@/components/HomeComponents/AppDownloadBanner";
import DeliverLocation from "@/components/HomeComponents/DeliverLocation";
import FavouriteCuisines from "@/components/HomeComponents/FavouriteCuisines";
import Hero from "@/components/HomeComponents/Hero";

export default function Home() {
  return (
    <div className="w-[95%]  m-auto pb-10">
      <Hero />
      {/* Favourite Cuisines */}
      <section className="border-b py-20">
        <div>
          <div className="space-y-6">
            <h2 className="text-center text-4xl font-bold">
              Favourite Cuisines
            </h2>
            <FavouriteCuisines />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="space-y-8">
          <h2 className="text-center text-4xl font-bold">We deliver to</h2>
          <DeliverLocation />
        </div>
      </section>
      <AppDownloadBanner />
    </div>
  );
}
