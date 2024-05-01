"use client";

import { useEffect, useState } from "react";
import { Restaurant } from "@prisma/client";
import { notFound, useSearchParams } from "next/navigation";

import { searchForRestaurants } from "./_actions/search";
import Header from "@/app/_components/header";
import RestaurantItem from "@/app/_components/restaurant-item";
import Search from "@/app/_components/search";

const Restaurants = () => {
  const searchParams = useSearchParams();

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const searchFor = searchParams.get("search");

      if (!searchFor) return;
      const response = await searchForRestaurants(searchFor);
      setRestaurants(response);
    };

    fetchRestaurants();
  }, [searchParams]);

  const searchFor = searchParams.get("search");

  if (!searchFor) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="p-5">
        {restaurants.length ? (
          <>
            <h2 className="mb-6 text-lg font-semibold">
              Restaurantes Encontrados
            </h2>
            <div className="flex w-full flex-col gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantItem
                  key={restaurant.id}
                  restaurant={restaurant}
                  className="min-w-full"
                />
              ))}
            </div>
          </>
        ) : (
          <p>Sem resultados para a pesquisa: {searchFor}</p>
        )}
      </div>
    </>
  );
};

export default Restaurants;
