
import React from 'react';
import Edit from '@/app/components/Edit';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className='flex justify-center mt-6'>
      
      <Edit id={id} />
    </div>
  );
}

