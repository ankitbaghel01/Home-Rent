import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const LocalitiesExplorer = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  const localities = [
    {
      name: "Mira Road",
      price: "₹9.6K/sq.ft",
      change: 1.57,
      coordinates: { lat: 19.2856, lng: 72.8691 }
    },
    {
      name: "Andheri West",
      price: "₹28.1K/sq.ft",
      change: -4.8,
      coordinates: { lat: 19.1136, lng: 72.8697 }
    },
    {
      name: "Chembur",
      price: "₹20.9K/sq.ft",
      change: 10.7,
      coordinates: { lat: 19.0522, lng: 72.8994 }
    },
    {
      name: "Borivali West",
      price: "₹22.3K/sq.ft",
      change: -1.00,
      coordinates: { lat: 19.2362, lng: 72.8467 }
    },
    {
      name: "Malad West",
      price: "₹18.8K/sq.ft",
      change: 4.67,
      coordinates: { lat: 19.1873, lng: 72.8401 }
    },
    {
      name: "Kandivali West",
      price: "₹20.4K/sq.ft",
      change: 8.57,
      coordinates: { lat: 19.2037, lng: 72.8384 }
    }
  ];

  const categories = ['Popular', 'Investment Hotspots', 'Affordable', 'Great Lifestyle'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Explore <span className="text-purple-600">Top Localities</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Discover premium locations with affordable prices, investment opportunities, and amazing amenities.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Localities List */}
        <div className="space-y-4">
          {localities.map((locality) => (
            <div
              key={locality.name}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-600" />
                  <div>
                    <h3 className="text-lg font-semibold">{locality.name}</h3>
                    <p className="text-sm text-gray-600">{locality.price}</p>
                  </div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm ${
                    locality.change >= 0
                      ? 'text-green-600 bg-green-50'
                      : 'text-red-600 bg-red-50'
                  }`}
                >
                  {locality.change >= 0 ? '+' : ''}{locality.change}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="relative h-[500px] bg-blue-50 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-blue-100/50">
            {/* Placeholder for Map */}
            <img
              src="https://s3-alpha-sig.figma.com/img/465a/671b/7ba07d2c8b89c3bdbd6df9d94c4ff61c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p1tcD338dgaf7nuZIKa0i3zZf8SWRNZgcPVEbJwAbvxJ68haRu8GJRLQSNoVF-4vY6lo-0mQfUo-VdL36wDCGbNtl1CEDcffNZHsLY~XtnzzU--6gpH5I45krcGwhlvJ8K520G06QBYq4xu9pq~ugMNY-NPixiw2UnNmgJIUx6klH5-dN2NH6LT36D3ONU0D0AZdiWQBEMRZgvYSFa6phSK1MNlXkUSM~Zjhy5yCQDZyLlzHgYxun6og886pqrMDr2GQQfN1zCTYn6~f6lCDNN5JgPCqyqzPnLE5FSaAKX~p3pD12W73iEwpVh4Q5jZVLdCwXwz5fHqK0TrDqISnTA__"
              alt="Map"
              className="w-full h-full object-cover"
            />
            {/* Map Markers */}
            {localities.map((locality) => (
              <div
                key={locality.name}
                className="absolute w-3 h-3 bg-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${(locality.coordinates.lng - 72.8) * 1000}%`,
                  top: `${(locality.coordinates.lat - 19.0) * 1000}%`
                }}
              >
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-600/20 rounded-full animate-ping" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalitiesExplorer;
