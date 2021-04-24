import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Movies from '../../components/Movies/Movies'
import { carousel_data, dummy_data } from '../../data/dummy_data'
import CarouselComponent from '../../components/Carousel/Carousel'
import NavbarComponent from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <NavbarComponent />

      {/* Carousel */}
      <CarouselComponent carousel_data={carousel_data} />

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h3 className="header">Trending Movies</h3>
        <Movies list={dummy_data} type={1} />
      </div>
    </div>
  )
}

export default Home
