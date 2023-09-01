import React from "react";
import Gallery from "../components/gallery";

const Home2 = () => {
  return (
    <div className="home2">
      <div className="home2__text">
        <h2>For the body</h2>
        <h1>An expression of care </h1>
        <p>
          Aesop formulations offer the body deserving care, to cleanse,
          replenish, and nourish skin. Each product is a sensory pleasure to use
          with its own delightful aroma.
        </p>
        <a href="/hk/en/r/bathing-rituals/" target="_self">
          Discover Bar Soap &nbsp;
          <i aria-hidden="true">
            <svg
              aria-labelledby="rightArrow-17232"
              class="Icon_base__GKZ58 Icon_light__1TZsq"
              data-testid="data-testid-Icon"
              focusable="false"
              height="12"
              role="img"
              style={{ height: 12, width: 12}}
              tabindex="-1"
              viewBox="0 0 50 50"
              width="12"
            >
              <title id="rightArrow-17232">rightArrow</title>
              <g>
                <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
              </g>
            </svg>
          </i>
        </a>
      </div>
      <div className="cards">
        <Gallery/>
      </div>
    </div>
  );
};

export default Home2;
