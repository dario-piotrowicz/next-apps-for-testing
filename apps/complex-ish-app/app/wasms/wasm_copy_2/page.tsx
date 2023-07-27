// @ts-ignore
import helloWasm from './add-one_copy_2.wasm?module'

export const runtime = "edge" ;

export default async function WasmRoute() {
  const addOneWasmModule = await WebAssembly.instantiate(helloWasm as WebAssembly.Module);
  const addOne = addOneWasmModule.exports.add_one as (n: number) => number ;

  const n = 7;
  const result = addOne(7);
  const message = `RUST says that ${n} + 1 = ${result}`;

  return (
      <>
          <h1>{message}</h1>
      </>
  );
}

