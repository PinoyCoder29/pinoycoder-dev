import { style } from "framer-motion/client";
import Styles from "./style.module.css";
import { FrontEndStacks } from "@/config/techStacks";
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
              </div>
              <div className={Styles.technologyBackend}></div>
            </div>
          </div>
          <div className={Styles.technologyTool}></div>
        </div>
      </section>
    </>
  );
}
