// @ts-ignore
import helloWasm from './add-one_copy_1.wasm?module'

export const runtime = "edge" ;

export default async function WasmRoute() {
  const addOneWasmModule = await WebAssembly.instantiate(helloWasm as WebAssembly.Module);
  const addOne = addOneWasmModule.exports.add_one as (n: number) => number ;

  const n = 6;
  const result = addOne(6);
  const message = `RUST says that ${n} + 1 = ${result}`;

  return (
      <>
          <h1>{message}</h1>
      </>
  );
}

