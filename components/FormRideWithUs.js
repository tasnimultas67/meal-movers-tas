import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const districts = [
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Jamalpur",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Mymensingh",
  "Narayanganj",
  "Narsingdi",
  "Netrokona",
  "Rajbari",
  "Shariatpur",
  "Sherpur",
  "Tangail",
  "Bogra",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Nawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajgonj",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Barguna",
  "Barisal",
  "Bhola",
  "Jhalokati",
  "Patuakhali",
  "Pirojpur",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chittagong",
  "Comilla",
  "Cox's Bazar",
  "Feni",
  "Khagrachari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Habiganj",
  "Maulvibazar",
  "Sunamganj",
  "Sylhet",
  "Bagerhat",
  "Chuadanga",
  "Jessore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
];

const FormRideWithUs = () => {
  return (
    <div className="bg-white p-7 rounded-xl shadow-2xl">
      <form action="#" method="POST" className="space-y-3">
        {/* Owner Name */}
        <div className="">
          <label
            htmlFor="name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Name
          </label>
          <div className="">
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="enter your full name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="enter your email address"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="enter your phone number"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-themeColor sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm/6 font-medium text-gray-900"
          >
            City
          </label>
          <Select>
            <SelectTrigger className="w-full z-[1000000]">
              <SelectValue placeholder="select city" />
            </SelectTrigger>
            <SelectContent>
              {districts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-themeColor px-3 py-1.5 text-sm/6 font-medium text-white shadow-sm hover:bg-themeColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-themeColor"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormRideWithUs;
