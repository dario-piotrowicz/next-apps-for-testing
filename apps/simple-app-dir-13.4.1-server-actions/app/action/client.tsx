'use client';

import { useState } from 'react';

export const Data = ({ action }: { action: any }) => {
  const [data, setData] = useState<unknown>();

  const handleClick = () => {
    action({ hello: 'world' }).then((result: any) => setData(result));
  };

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <button type="button" onClick={() => handleClick()}>
        Run action
      </button>
    </div>
  );
};
