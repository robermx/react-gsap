import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./app.module.scss";

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const refs = useRef([] as (HTMLDivElement | null)[]);
  const conatainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(refs.current, {
        scale: 0,
        duration: 1,
        // repeat: -1,
        ease: "power2.inOut",
        yoyo: true,
        stagger: {
          each: 0.2,
          // from: "random",
        },
      });
    },
    { scope: conatainerRef }
  );

  return (
    <div ref={conatainerRef} className={styles.main_container}>
      {arr.map((item, idx) => (
        <div
          ref={(element) => (refs.current[idx] = element)}
          key={idx}
          className={styles.box}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
