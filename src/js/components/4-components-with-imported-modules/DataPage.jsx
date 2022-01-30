import { useParams } from 'react-router-dom'

const DataPage = (props) => {
  const { dataId = '' } = useParams()
  const data = {
    data1: 'this is the content form data 1',
    data2: 'this is the content form data 2',
  }
  return (
    <div className="data-page">
      { 
        data[dataId]
          ? <div className="data-page__content">{data[dataId]}</div>
          : <div className="data-page__not-found">content not found</div>
      }
    </div>
  )
}

export default DataPage
