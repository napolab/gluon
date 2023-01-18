import * as Gluon from "@gluon-framework/gluon";
import { readFile, writeFile } from "fs/promises";

export const runApp = async (url: string) => {
  const Window = await Gluon.open(url, {
    windowSize: [800, 500]
  });

  Window.ipc.on("read-file", async (filePath: string) => {
    const file = await readFile(filePath);
    return file.toString();
  });

  Window.ipc.on("log", async (data) => {
    try {
      await writeFile("./app.log", data);
      return true;
    } catch {
      return false;
    }
  });
}




