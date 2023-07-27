import { rm, writeFile, mkdir } from 'node:fs/promises';

await rm('./app/uselessRoutes/routesB', { force: true, recursive: true});

await createRouteBFile();

for (let i = 0 ; i < 180 ; i++ ) {
    await createRouteBFile(i+1);
}

async function createRouteBFile(copyIdx = undefined) {
    const dir = `./app/uselessRoutes/routesB/routeB${copyIdx ? `_copy_${copyIdx}` : ''}`;
    await mkdir(dir, { recursive: true });
    await writeFile(`${dir}/page.tsx`, getRouteBContent(copyIdx));
}

function getRouteBContent(copyIdx = undefined) {
    return `export const runtime = "edge";

export default function RouteB${copyIdx ? `_copy_${copyIdx}` : ''}() {
    return (
        <>
            <h1>Route B ${copyIdx ? `(copy ${copyIdx})` : ''}</h1>
            <h2>This is route B ${copyIdx ? `(copy ${copyIdx})` : ''}</h2>
        </>
    );
}`;
}

