import { div, style } from "framer-motion/client";
import Styles from "./style.module.css";
import { Backend, Database, FrontEndStacks, Tools } from "@/config/techStacks";
import { color } from "framer-motion";
export default function Technologies() {
  return (
    <>
      <section id="technologies" className={Styles.technologySection}>
        <div className={Styles.technologyTitle}>
          <h1>Skills & Technologies</h1>
        </div>
        <div className={Styles.technologyContainer}>
          <div className={Styles.technologyWrapper}>
            <div className={Styles.technologyFrontEnd}>
              <p className={Styles.frontEndTitle}> Front-End</p>
              <div className={`row ${Styles.techRow}`}>
                {FrontEndStacks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className={`${Styles.techItem} col-md-3 col-3 `}
                      key={item.name}
                    >
                      <Icon style={{ color: item.color }}></Icon>
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={Styles.bottomRow}>
              <div className={Styles.technologyDatabase}>
                <p className={Styles.databaseTitle}>Database</p>

                <div className={`row ${Styles.databaseRow}`}>
                  {Database.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className={`col-12 `} key={item.name}>
                        <div className={Styles.databaseItem}>
                          <Icon style={{ color: item.color }} />
                          <p className="">{item.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={Styles.technologyBackend}>
                <p className={Styles.backendTitle}>Back-end</p>
                <div className={`row ${Styles.backendRow}`}>
                  {Backend.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="col-md-6 col-lg-4 col-6 " key={item.name}>
                        <div className={Styles.backendItem}>
                          <Icon style={{ color: item.color }} />
                          <p>{item.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.technologyTool}>
            <p className={Styles.toolTitle}>Tools</p>
            <div className={`row ${Styles.toolRow}`}>
              {Tools.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="col-md-12 col-12" key={item.name}>
                    <div className={Styles.toolItem}>
                      <Icon style={{ color: item.color }} />
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
