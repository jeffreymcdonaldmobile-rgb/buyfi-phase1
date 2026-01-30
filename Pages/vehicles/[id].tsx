import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import FinanceCalculator from '../../components/FinanceCalculator';

// Mock fetch (Phase 2: API call)
const getVehicleById = (id: string) => {
  return { id, make: 'Toyota', model: 'Camry', year: 2024, price: 35990, specs: { engine: '2.5L', fuel: 'Petrol' }, images: ['/car1.jpg', '/car2.jpg'], location: 'Auckland' };
};

export default function VehicleDetail() {
  const router = useRouter();
  const { id } = router.query;
  const vehicle = getVehicleById(id as string);

  return (
    <>
      <Head>
        <title>{`${vehicle.year} ${vehicle.make} ${vehicle.model} - Buyfi`}</title>
        <meta name="description" content={`Details for ${vehicle.year} ${vehicle.make} ${vehicle.model} in ${vehicle.location}.`} />
      </Head>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{vehicle.year} {vehicle.make} {vehicle.model}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Image src={vehicle.images[0]} alt="Main Image" width={600} height={400} />
            {/* Thumbnail gallery */}
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">${vehicle.price.toLocaleString()}</p>
            <p>Location: {vehicle.location}</p>
            <h2 className="text-xl font-bold mt-6">Specifications</h2>
            <ul>
              {Object.entries(vehicle.specs).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
              ))}
            </ul>
            <FinanceCalculator price={vehicle.price} />
          </div>
        </div>
      </div>
    </>
  );
}