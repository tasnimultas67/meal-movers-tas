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
            Whether you're in the mood for comfort food, healthy options, or
            gourmet dishes, we guarantee a seamless and timely delivery, so you
            can enjoy every bite without any hassle.
          </p>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Find your address"
              className="border border-black p-2 text-sm w-6/12 rounded-tl rounded-bl"
            />
            <button className="bg-black p-[0.68rem] rounded-tr rounded-br">
              <MagnifyingGlassIcon className="size-4 text-white" />
            </button>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </div>
  );
}
