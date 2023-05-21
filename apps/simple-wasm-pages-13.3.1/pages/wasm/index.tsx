// @ts-ignore
import helloWasm from './hello.wasm?module'

export const config = { runtime: 'experimental-edge' };

export async function getServerSideProps() {
  const helloWasmModule = await WebAssembly.instantiate(helloWasm as WebAssembly.Module);
  const addOne = helloWasmModule.exports.add_one as (n: number) => number ;

  const n = 4;
  const result = addOne(4);
  const message = `RUST says that ${n} + 1 = ${result}`;

  return {
      props: { message }
  }
};

export default function WasmRustTest({ message }: { message: string }) {
  return (
    <>
        <h1>{message}</h1>
    </>
  )
}
