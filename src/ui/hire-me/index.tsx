import "./hireme.scss";
import { Link } from "react-scroll";
import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
const HireMe = () => {
  const { t } = useTranslation("hireme");
  const textRef = useRef(null);
  const paragraphRef = useRef(null);
  const handleSaveActive = () => {
    localStorage.setItem("activeIndex", "7");
  };
  useEffect(() => {
    if (textRef.current) {
      const splitText = new SplitType(textRef.current);
      gsap.to(splitText.chars, {
        y: 0,
        stagger: 0.1,
        delay: 0,
        duration: 0.05,
      });
    }
    if (paragraphRef.current) {
      const splitText = new SplitType(paragraphRef.current, { types: "words" });
      gsap.fromTo(
        splitText.words,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          stagger: 0.1,
          delay: 0,
          duration: 0.05,
          ease: "power2.out",
        }
      );
    }
  }, []);
  return (
    <section className="hire-me" id="hire" data-aos-offset="0">
      <div className="hire-content" data-aos="fade-up">
        <div className="left">
          <div ref={textRef} id="my-text">
            <h1 dangerouslySetInnerHTML={{ __html: t("title") }} />
          </div>
          <p ref={paragraphRef}>{t("subtitle")}</p>
          <div className="hire-link">
            <Link
              to={"contact"}
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              onSetActive={() => handleSaveActive()}
            >
              {t("button")} <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(HireMe);
