// Solusi 2: Import dari file JS, bukan JSON
import { useState } from "react";
import { Star } from "lucide-react";
import destination from '../../data/kopi.json';

export default function ProdukQuiz() {
  const { destinations } = destination;

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Beberapa Rekomendasi Hidangan </h1>
        <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-blue-50 transition">
          View All
        </button>
      </div>

      <p className="text-gray-600 mb-8">
        makanan ini sangat lezat dan cocok untuk kamu yang ingin mencoba sesuatu yang baru.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured Destination - Large */}
        <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-lg h-109">
          <img
            src={destinations[0].image}
            alt={destinations[0].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
            <p className="text-sm mb-1">{destinations[0].location}</p>
            <h2 className="text-2xl font-bold mb-2">{destinations[0].name}</h2>
            <div className="flex items-center justify-between">
              <p className="font-semibold">${destinations[0].price} </p>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(destinations[0].rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-sm">{destinations[0].reviews}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Destinations - Small */}
        <div className="space-y-6">
          {destinations.slice(1).map((destination) => (
            <div key={destination.id} className="flex rounded-lg overflow-hidden shadow-md bg-white">
              <div className="w-1/3">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <p className="text-xs text-primary mb-1">{destination.location}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-sm text-gray-700 mb-1">${destination.price} </p>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(destination.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{destination.reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}