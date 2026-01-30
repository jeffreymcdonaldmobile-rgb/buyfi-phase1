import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const mockFeaturedVehicles = [
  { id: '1', make: 'Toyota', model: 'Camry', year: 2024, price: 35990, image: '/placeholder-car.jpg', location: 'Auckland', type: 'Sedan' },
  // Add more mocks...
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Buyfi - Your AU/NZ Vehicle Marketplace</title>
        <meta name="description" content="Find and finance your next vehicle with ease. Search thousands of listings across Australia and New Zealand." />
        <meta name="keywords" content="used cars, new cars, EV, hybrid, Auckland, Melbourne" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Buyfi.com.au</h1>
          </div>
        </header>
        <section className="hero bg-blue-500 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Find Your Perfect Vehicle</h2>
            <div className="max-w-md mx-auto relative">
              <input type="text" placeholder="Search by make, model, or location" className="w-full p-4 rounded" />
              <MagnifyingGlassIcon className="absolute right-4 top-4 h-6 w-6" />
            </div>
          </div>
        </section>
        <section className="featured py-10">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6">Featured Vehicles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockFeaturedVehicles.map((vehicle) => (
                <div key={vehicle.id} className="bg-white p-4 rounded shadow">
                  <Image src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} width={300} height={200} className="mb-4" />
                  <h4 className="font-bold">{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                  <p>${vehicle.price.toLocaleString()}</p>
                  <p>{vehicle.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}