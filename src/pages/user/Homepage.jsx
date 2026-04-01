import { useEffect, useState } from "react";

const categories = [
  "Apartments",
  "Houses",
  "Studios",
  "Shared Rooms",
  "Offices",
  "Short Stay",
];

const mockListings = [
  {
    id: 1,
    title: "Modern 2 Bedroom Apartment",
    location: "Lekki, Lagos",
    price: "₦1,200,000 / year",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
  },
  {
    id: 2,
    title: "Cozy Studio Apartment",
    location: "Yaba, Lagos",
    price: "₦600,000 / year",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
  },
  {
    id: 3,
    title: "Luxury Duplex",
    location: "Ikoyi, Lagos",
    price: "₦5,000,000 / year",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    id: 4,
    title: "Office Space",
    location: "Victoria Island, Lagos",
    price: "₦3,500,000 / year",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
  },
];

export default function Homepage() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(stored);
  }, []);

  const handleView = (item) => {
    let updated = [item, ...recentlyViewed.filter((i) => i.id !== item.id)];
    updated = updated.slice(0, 5);

    setRecentlyViewed(updated);
    localStorage.setItem("recentlyViewed", JSON.stringify(updated));
  };

  const Card = ({ item }) => (
    <div
      onClick={() => handleView(item)}
      className="min-w-[250px] bg-white rounded-2xl shadow-md overflow-hidden mr-4 cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-3">
        <h2 className="font-semibold text-sm">{item.title}</h2>
        <p className="text-gray-500 text-xs">{item.location}</p>
        <p className="font-bold text-blue-600 mt-1">{item.price}</p>
      </div>
    </div>
  );

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Find Your Next Rental</h1>
        <p className="text-gray-500 text-sm">
          Discover apartments, houses, and more
        </p>
      </div>

      {/* CATEGORIES */}
      <div className="mb-6">
        <h1 className="font-bold mb-2">CATEGORIES</h1>
        <div className="flex overflow-x-auto space-x-3 pb-2">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white rounded-full shadow text-sm whitespace-nowrap cursor-pointer hover:bg-blue-600 hover:text-white transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED LISTINGS */}
      <div className="mb-6">
        <h1 className="font-bold mb-2">FEATURED</h1>
        <div className="flex overflow-x-auto">
          {mockListings.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* MOST VIEWED */}
      <div className="mb-6">
        <h1 className="font-bold mb-2">MOST VIEWED</h1>
        <div className="flex overflow-x-auto">
          {mockListings
            .slice()
            .reverse()
            .map((item) => (
              <Card key={item.id} item={item} />
            ))}
        </div>
      </div>

      {/* RECENTLY VIEWED */}
      {recentlyViewed.length > 0 && (
        <div className="mb-6">
          <h1 className="font-bold mb-2">RECENTLY VIEWED</h1>
          <div className="flex overflow-x-auto">
            {recentlyViewed.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}