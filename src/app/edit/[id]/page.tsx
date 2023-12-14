
import React from 'react';
import Edit from '@/app/components/Edit';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      {/* Render the Edit component with the id from params */}
      <Edit id={id} />
    </div>
  );
}

