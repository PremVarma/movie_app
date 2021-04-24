import { Component } from 'react'
import { search_movie } from '../../services/search-movie'
import Movies from '../../components/Movies/Movies'
import { Input } from '../../components/Input/Input'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import './SearchMoviePage.css'

class SearchMoviePage extends Component<any, any> {
  state: any = {
    movies: null,
    loading: false,
    value: '',
    limit: 8,
  }

  searchMovie = async (val: string) => {
    this.setState({ loading: true, limit: 8 })
    const results = await search_movie(`https://api.jikan.moe/v3/search/anime?q=${val}&limit=16`)
    const movies = results
    this.setState({ movies, loading: false })
  }

  onChangeHandler = async (e: any) => {
    setTimeout(() => {
      this.searchMovie(e.target.value)
    }, 500)

    this.setState({ value: e.target.value })
  }

  get renderMovies() {
    let movies = <h1>There's no movies</h1>

    if (this.state.movies) {
      movies = <Movies list={this.state.movies.slice(0, this.state.limit)} />
    }
    return movies
  }

  loadMoreData = () => {
    this.setState({
      limit: this.state.limit + 4,
    })
  }

  render() {
    return (
      <>
        <Header>
          <Input
            type="text"
            name="search"
            value={this.state.value}
            inputHandler={(e) => this.onChangeHandler(e)}
            placeholder="Type something to search...eg. bat"
          />
        </Header>

        <div className="SearchResult">
          {this.state.value && (
            <p>{`Requesting : ${`https://api.jikan.moe/v3/search/anime?q=${this.state.value}&limit=16`}`}</p>
          )}
          {this.renderMovies}
          {this.state.movies && this.state.movies?.length !== this.state.limit && (
            <Button title="Load More" clickHandler={this.loadMoreData} />
          )}
        </div>
      </>
    )
  }
}

export default SearchMoviePage
