import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div>
      <section className="h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold">
            Savor Every Bite, Delivered Right
          </h1>
          <p className="w-8/12 m-auto text-sm text-gray-700">
            At Meal Movers, we take pride in delivering a delightful dining
            experience straight to your door. Our diverse menu, crafted in
            partnership with local restaurants, ensures that every meal is a
            culinary adventure. Whether you're in the mood for comfort food,
            healthy options, or gourmet dishes, we guarantee a seamless and
            timely delivery, so you can enjoy every bite without any hassle.
          </p>
          <div>
            <input
              type="text"
              className="border p-2 text-sm w-6/12 rounded-md"
            />
            <button>
              <MagnifyingGlassIcon className="size-4" />
            </button>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </div>
  );
}
