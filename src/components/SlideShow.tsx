import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const imageCards = fadeImages.map((asd) => (
  <div className="each-fade card">
    <img src={asd} />
  </div>
));

export default function SlideShow() {
  return (
    <div
      className="slide-container"
      style={{ margin: "20px 5%", maxWidth: "900px" }}
    >
      <Fade arrows={false}>{imageCards}</Fade>
    </div>
  );
}
