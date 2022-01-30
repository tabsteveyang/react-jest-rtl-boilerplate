import { useSearchData } from '@js/hooks/searchData'

const SearchPage = (props) => {
  const [search] = useSearchData()
  const onSearchButtonClick = () => {
    search()
  }

  return (
    <div className="search-page">
      <button onClick={onSearchButtonClick}>search</button>
    </div>
  )
}

export default SearchPage
