import SearchForm from "../../components/SearchForm/SearchForm"

const SearchLocations = (props) => {
  return (
    <main>
      <SearchForm handleSearch={props.handleSearch} />
    </main>
  )
}
 
export default SearchLocations