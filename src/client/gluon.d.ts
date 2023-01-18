type Versions = {
  gluon: string;
  builder: string;
  node: string;
  browser: string;
  browserType: string;
  product: string;
};

interface IPCStoreApi {
  get(key: string): any;
  set<T>(key: string, value: T): T;
  [key: string]: any;
}

interface IPC {
  send(type: string, data: any): Promise<any>;
  on(type: string, callback: (data: any) => any): void;
  removeListener(type: string, callback: Function): void;
  store: IPCStoreApi;
}
interface Gluon {
  versions: Versions;
  ipc: IPC;
}

declare const Gluon: Gluon;

interface Window {
  Gluon: typeof Gluon;
}
