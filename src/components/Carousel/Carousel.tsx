import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const CarouselComponent = ({ carousel_data }: any) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Carousel>
            {carousel_data.map(
              ({ title, subTitle, icon, rating, ratingValue, description }: any) => {
                return (
                  <Carousel.Item>
                    <img className="d-block w-100 img-fluid" src="/slider3.png" alt="Third slide" />
                    <Carousel.Caption>
                      <div className="row flex-row-reverse align-items-center h-100">
                        <div className="col-xl-6"></div>
                        <div className="col-xl-6 text-left">
                          <div className="gen-tag-line">
                            <span>{title}</span>
                          </div>
                          <div className="gen-movie-info">
                            <h3>{subTitle}</h3>
                          </div>
                          <div className="gen-movie-meta-holder">
                            <ul className="gen-meta-after-title">
                              <li className="gen-sen-rating">
                                <span>{rating}</span>
                              </li>

                              <li className="rating">
                                <img src={icon} alt={title} />
                                <span>{ratingValue} </span>
                              </li>
                            </ul>
                            <p className="description">{description}</p>
                          </div>

                          <div className="gen-movie-action">
                            <div className="gen-btn-container button-1">
                              <a href="#" className="gen-button gen-button-flat">
                                <i aria-hidden="true" className="fas fa-play"></i>{' '}
                                <span className="text">Play Now</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              }
            )}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default CarouselComponent
