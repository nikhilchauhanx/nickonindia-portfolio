// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "691204fbe26e4ba29d227e50c9daa657"}'
        ></script>
        {/* End Cloudflare Web Analytics */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
