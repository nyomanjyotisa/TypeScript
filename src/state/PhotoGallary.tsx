import "../resources/css/styles/CSS.css";
import "../resources/css/styles/ImageGallary.css";
import React, { useEffect, useState } from "react";

const PhotoGallery: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  function plusSlides(n: number) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n: number) {
    showSlides(n);
  }

  function showSlides(n: number) {
    let i: number;
    const slides: HTMLCollectionOf<Element> =
      document.getElementsByClassName("mySlides");
    const dots: HTMLCollectionOf<Element> =
      document.getElementsByClassName("demo");
    const captionText: HTMLElement | null = document.getElementById("caption");

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      (dots[i] as HTMLElement).className = (
        dots[i] as HTMLElement
      ).className.replace(" active", "");
    }
    (slides[slideIndex - 1] as HTMLElement).style.display = "block";
    (dots[slideIndex - 1] as HTMLElement).className += " active";

    if (captionText) {
      captionText.innerHTML =
        (dots[slideIndex - 1] as HTMLElement).getAttribute("alt") || "";
    }
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Slideshow Gallery TEST</h2>

      <div className="container">
        <div className="mySlides">
          <div className="numbertext">1 / 6</div>
          <img
            src="../images/slider/img_woods_wide.jpg"
            alt="react logo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides">
          <div className="numbertext">2 / 6</div>
          <img
            src="../images/slider/img_5terre_wide.jpg"
            alt="react logo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides">
          <div className="numbertext">3 / 6</div>
          <img
            src="../images/slider/img_mountains_wide.jpg"
            alt="react logo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides">
          <div className="numbertext">4 / 6</div>
          <img
            src="../images/slider/img_lights_wide.jpg"
            alt="react logo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides">
          <div className="numbertext">5 / 6</div>
          <img
            src="../images/slider/img_nature_wide.jpg"
            alt="react logo"
            style={{ width: "100%" }}
          />
        </div>
        <div className="mySlides">
          <div className="numbertext">6 / 6</div>
          <img
            src="../images/slider/img_snow_wide.jpg"
            alt="react logo"
            style={{ width: "100%" }}
          />
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}></a>

        <a className="prev" onClick={() => plusSlides(1)}></a>
        <div className="caption-container">
          <p id="caption"></p>
        </div>
        <div className="row">
          <div className="column">
            <img
              className="demo cursor"
              src="../images/slider/img_woods_wide.jpg"
              style={{ width: "100%" }}
              onClick={() => currentSlide(1)}
              alt="The Woods"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="../images/slider/img_5terre_wide.jpg"
              style={{ width: "100%" }}
              onClick={() => currentSlide(2)}
              alt="Cinque Terre"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="../images/slider/img_mountains_wide.jpg"
              style={{ width: "100%" }}
              onClick={() => currentSlide(3)}
              alt="Mountains and fjords"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="../images/slider/img_lights_wide.jpg"
              style={{ width: "100%" }}
              onClick={() => currentSlide(4)}
              alt="Northern Lights"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="../images/slider/img_nature_wide.jpg"
              style={{ width: "100%" }}
              onClick={() => currentSlide(5)}
              alt="Nature and sunrise"
            />
          </div>
          <div className="column">
            <img
              className="demo cursor"
              src="../images/slider/img_snow_wide.jpg"
              style={{ width: "100%" }}
              onClick={() => currentSlide(6)}
              alt="Snowy Mountains"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
