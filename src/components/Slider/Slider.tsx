import { Slide } from "react-slideshow-image";
import "../Slider/Slider.module.css";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import image1 from "../../../public/1. Mannschaft.png";
import image2 from "../../../public/mb-background.jpg";
import image3 from "../../../public/1. Mannschaft.png";
import image4 from "../../../public/mb-background.jpg";

export default function Slider() {
  const sliderImages = [image1, image2, image3, image4];

  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {sliderImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={index}>
              <div
                style={{
                  backgroundImage: `url(${slide})`,
                  height: "80vh", // Ensure full height
                  position: "relative", // Position for absolute text overlay
                  filter: "brightness(60%)",
                }}
              >
                <h1
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  Jacob's Weizen auf die eins, so wie TV Bodenwöhr!
                </h1>
                {/* Text Overlay with Shadow */}
                <div className={styles.textOverlay}>
                  <span>Slide {index + 1}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
