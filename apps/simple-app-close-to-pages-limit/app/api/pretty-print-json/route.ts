import { prettyPrintJson } from 'pretty-print-json';

export const runtime = "edge";

export async function GET(request: Request) {

  const myObj = {
    this: {
      is: 'a test'
    }, test: true, 'not a test': false,
  };

  return new Response(
    `
      the html generated from:


        prettyPrintJson.toHtml(${
          JSON.stringify(myObj)
        })


      is:


        ${
          prettyPrintJson.toHtml(myObj)
        }
    `
  );
}
