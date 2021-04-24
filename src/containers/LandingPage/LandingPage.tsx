import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from '../../components/Navbar/Navbar'
import '../Home/Home.css'

const LandingPage = () => {
  return (
    <div className="home-container">
      <NavbarComponent />
      <div className="landing-container">
        <img className="d-block w-100 img-fluid" src="/slider3.png" alt="Third slide" />
        <div className="landing-item">
          <div className="row flex-row align-items-center h-100">
            <div className="col-xl-6 text-left">
              <div className="gen-tag-line">
                <span className="movie_title">Welcome To Motabhai.com</span>
              </div>
              <div className="gen-movie-info">
                <h3 className="movie_subtitle">Find your choice</h3>
              </div>
              <div className="gen-movie-meta-holder">
                <ul className="gen-meta-after-title">
                  <li className="gen-sen-rating">
                    <span>TM DB</span>
                  </li>

                  <li className="rating">
                    <img
                      src="http://streamlab.gentechtree.com/red-demo/wp-content/plugins/streamlab-core/public/img/imdb.png"
                      alt="The"
                    />
                    <span>10.0</span>
                  </li>
                </ul>
                <p className="landing-description">
                  High School King of Savvy is a 2014 South Korean television series starring Seo
                  In-guk, Lee Ha-na, Lee Soo-hyuk and Lee Yeol-eum. It aired on tvN from June 16 to
                  August 11, 2014 on Mondays and Tuesdays at 23:00 time slot for 17 episodes.
                </p>
              </div>

              <div className="gen-movie-action">
                <div className="gen-btn-container button-1">
                  <a href="#" className="gen-button gen-button-flat">
                    <span className="text">Play Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
