export const runtime = 'edge';

export async function GET(request: Request) {
    const body = await fetch(new URL('./test.txt', import.meta.url)).then(
      (res) => res.body,
    );

    const reader = body?.getReader();
    let fromBody = '';
    let tmp = await reader?.read();
    while(!tmp?.done) {
      fromBody += new TextDecoder().decode(tmp?.value);
      tmp = await reader?.read();
    }

    const text = await fetch(new URL('./test.txt', import.meta.url)).then(
      (res) => res.text(),
    );

    const json = await fetch(new URL('./test.json', import.meta.url)).then(
      async (res) => JSON.parse(await res.text())
    );

    const blob = await fetch(new URL('./test.txt', import.meta.url)).then(
      async (res) => new Blob([ await res.text() ])
    );

    const division = "\n\n\n==============\n\n\n";
    return new Response(
      [
        '',
        `body = ${body}\n\n read content = "${fromBody}"`,
        `text = "${text}"`,
        `json = ${JSON.stringify(json)}`,
        `blob = ${blob}\n\n read content = "${await blob.text()}"`,
        ''
      ].join(division)
    );
}

