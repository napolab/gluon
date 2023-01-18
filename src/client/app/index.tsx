import { memo, useEffect } from "react";
import * as styles from "./styles.css";

const App = () => {
  useEffect(() => {
    Gluon.ipc.send("log", Date.now());

    Gluon.ipc.send("read-file", "./package.json").then((res) => {
      //
    });
  }, []);

  return (
    <>
      <header></header>
      <main className={styles.container}>
        <h1>gluon app</h1>

        <section>
          <h2>
            <code>Gluon.versions</code>
          </h2>
          <dl>
            <div>
              <dt>
                <code>Gluon.version.browser</code>
              </dt>
              <dd>{Gluon.versions.browser}</dd>
            </div>

            <div>
              <dt>
                <code>Gluon.version.browserType</code>
              </dt>
              <dd>{Gluon.versions.browserType}</dd>
            </div>

            <div>
              <dt>
                <code>Gluon.version.builder</code>
              </dt>
              <dd>{Gluon.versions.builder}</dd>
            </div>

            <div>
              <dt>
                <code>Gluon.version.gluon</code>
              </dt>
              <dd>{Gluon.versions.gluon}</dd>
            </div>

            <div>
              <dt>
                <code>Gluon.version.node</code>
              </dt>
              <dd>{Gluon.versions.node}</dd>
            </div>

            <div>
              <dt>
                <code>Gluon.version.product</code>
              </dt>
              <dd>{Gluon.versions.product}</dd>
            </div>
          </dl>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default memo(App);
