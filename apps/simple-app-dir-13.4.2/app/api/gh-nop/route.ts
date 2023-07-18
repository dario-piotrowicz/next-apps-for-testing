export const runtime = "edge";

export async function GET(request: Request) {
  const resp = await fetch('https://api.github.com/repos/cloudflare/next-on-pages');
  const info = await resp.json();
  return new Response(`
    ========== ${info.full_name} ==========

    ${info.description}


    - open issues: ${info.open_issues_count}

    - language: ${info.language}

    - topics: ${info.topics.join(', ')}


  `);
}
