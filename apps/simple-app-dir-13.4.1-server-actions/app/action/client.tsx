'use client';

// import { getRequestCfProperties, getRequestExecutionContext } from '@cloudflare/next-on-pages/utils';
import { useState } from 'react';

export const Data = ({ action }: { action: any }) => {
  const [data, setData] = useState<unknown>();

  // try {
  //   const cf = getRequestCfProperties();
  // } catch (error) {
  //   // We're on the client to this error is expected
  //   console.error(error);
  // }

  // try {
  //   const ctx = getRequestExecutionContext();
  // } catch (error) {
  //   // We're on the client to this error is expected
  //   console.error(error);
  // }

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
