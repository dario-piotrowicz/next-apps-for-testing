'use client';

export function KvEntry({ entry: {key, value}, deleteKvEntry }: { entry: { key: string, value: string }, deleteKvEntry: (key: string) => void}) {  
    return <div>
      <button onClick={() => deleteKvEntry(key)}>X</button>
      {key} - {value}
    </div>;
  }
  