'use client';

import GlobalLoader from '@/app/components/loader/GlobalLoader';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

const ViewDetailsPage = () => {
  const params = useParams()
  const { id } = params;
  console.log(params);

  const { data: item, isLoading, isError } = useQuery({
    queryKey: ['item', id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/items/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch item details');
      }
      return res.json();
    }
  });

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (isError) {
    return <p>Error loading item details.</p>;
  }

  return (
    <div>
      <h1>{item?.name}</h1>
      
    </div>
  );
};

export default ViewDetailsPage;
