
import { createServer as createViteServer } from "vite";
import { runApp } from './gluon';

const main = async () => {
  const vite = await createViteServer();
  await vite.listen();
  const [url] = vite.resolvedUrls?.local ?? [""];

  await runApp(url)
};

void main();
