import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Mock data (replace with API in Phase 2)
const mockVehicles = [
  // Array of vehicle objects...
];

export default function Search() {
  const router = useRouter();
  const [filters, setFilters] = useState({ make: '', model: '', yearMin: '', priceMax: '', location: '', isEV: false });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredVehicles = mockVehicles.filter((v) => {
    // Filter logic...
    return true; // Placeholder
  });

  return (
    <>
      <Head>
        <title>Search Vehicles - Buyfi</title>
        <meta name="description" content="Search for vehicles by make, model, year, price, location, and more." />
      </Head>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Vehicle Search</h1>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <input name="make" placeholder="Make" onChange={handleFilterChange} className="p-2 border" />
          <input name="model" placeholder="Model" onChange={handleFilterChange} className="p-2 border" />
          <input name="yearMin" type="number" placeholder="Min Year" onChange={handleFilterChange} className="p-2 border" />
          <input name="priceMax" type="number" placeholder="Max Price" onChange={handleFilterChange} className="p-2 border" />
          <select name="location" onChange={handleFilterChange} className="p-2 border">
            <option value="">All Locations</option>
            <option value="Auckland">Auckland</option>
            <option value="Melbourne">Melbourne</option>
          </select>
          <label className="flex items-center">
            <input type="checkbox" name="isEV" onChange={(e) => setFilters({ ...filters, isEV: e.target.checked })} />
            EV/Hybrid Only
          </label>
          <button type="button" onClick={() => router.push({ pathname: '/search', query: filters })} className="bg-blue-500 text-white p-2">Apply Filters</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            // Card components linking to /vehicles/[id]
          ))}
        </div>
      </div>
    </>
  );
}