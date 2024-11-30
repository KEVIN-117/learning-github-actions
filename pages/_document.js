import Blog from "@/components/Blog";
import Team from "@/components/Team";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Blog />
        <Team />
      </body>
    </Html>
  );
}
