import '../App.css'

export default function Meeting(props) {
    
    const renderData = JSON.parse(sessionStorage.getItem('renderData'))
    if(renderData.account_id) {
        console.log('Data has account ID')
      return Object.entries(renderData).map(([key, value], i) => {
        return (
          <div className='Scheduler-data'>
            <b>{key}: </b>
            <p>{value}</p>
          </div>
        )
      })
    } else {
      return(
        <div>
          <p>No Meeting Details</p>
        </div>
      )
    }
  }