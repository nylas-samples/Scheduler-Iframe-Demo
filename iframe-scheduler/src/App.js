import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Redirect from './components/redirect';
import Iframe from './components/iframe';
import Meeting from './components/postbooking';
import { useEffect, useState } from 'react';

function App() {

  const iframesrc = process.env.REACT_APP_IFRAME_URL

  const [data, setData] = useState({})

  function listener (e) {
    // Get the sent data
    const iframeData = e.data;

    if (iframeData.account_id){
      setData(iframeData)
      sessionStorage.setItem("renderData", JSON.stringify(iframeData))
    }

  }

  useEffect(() => {
    window.addEventListener('message', listener);

    return () => window.removeEventListener('message', listener)
  }, [setData])

  useEffect(() => {
    if(data.account_id) {
      window.location.assign('http://localhost:3000/meetingdetails')
    }
  }, [data])

  return (
    <Router>
      <div className="App">
        <h2 className='App-header'>IFrame Scheduler Demo</h2>
        <Routes>
          <Route exact path="/" element={<Iframe iframesrc={iframesrc}/>}/>
          <Route exact path="/redirect" element={<Redirect/>}/>
          <Route path="/meetingdetails" element={<Meeting/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
