import React from 'react'
import Slider from 'react-slick'
import Navbar from '../Navbar'
import './index.css'

const HomePage = () => {
  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    arrows: false, // Remove next and previous buttons
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="home-page">
      <div className="horizontal-layout">
        <Navbar />
        <div className="content">
          <div className="search-character">
            <input type="text" placeholder="Search a character..." />
          </div>
          <div className="your-heading">
            <h2>Your Heading</h2>
            <div className="horizontal-images">
              {/* Add your three images here */}
              <img
                src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907192/ai-artificial-intelligence-machine-learning-big-data-analysis-automation-technology-business-industrial-manufacturing-132528154_gvi1ry.webp"
                className="images"
                alt="Character 1"
              />
              <img
                src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907238/download_2_pjpffr.jpg"
                className="images"
                alt="Character 2"
              />
              <img
                src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907250/images_xxloia.jpg"
                className="images"
                alt="Character 3"
              />
            </div>
          </div>
          <div className="try-this-heading">
            <h2>Try This Heading</h2>
            <Slider {...carouselSettings} appendDots={dots => <ul>{dots}</ul>}>
              <div>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907276/images_4_tyfukj.jpg"
                  alt="Image 1"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907264/images_2_qgbfct.jpg"
                  alt="Image 2"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907238/download_2_pjpffr.jpg"
                  alt="Image 3"
                />
              </div>
              {/* Add more images as needed */}
            </Slider>
          </div>
          <div className="features-heading">
            <h2>Features Heading</h2>
            <div className="horizontal-carousel">
              <Slider
                {...carouselSettings}
                appendDots={dots => <ul>{dots}</ul>}
              >
                <div>
                  <img
                    src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907250/images_xxloia.jpg"
                    alt="Feature 1"
                    className="images"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907223/istockphoto-1452604857-612x612_rxhjmz.jpg"
                    alt="Feature 2"
                    className="images"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/df9atzyob/image/upload/v1712907192/ai-artificial-intelligence-machine-learning-big-data-analysis-automation-technology-business-industrial-manufacturing-132528154_gvi1ry.webp"
                    alt="Feature 3"
                    className="images"
                  />
                </div>
                {/* Add more feature images as needed */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
