import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ListOfJourney from './components/ListOfJourney';
import NotSelected from './components/NotSelected';
import DropDown from './components/DropDown';

import { fetchFromStationInfo, fetchToStationInfo, fetchJourneyList } from './utils/apiFetching';

//id: '8000261', // München Hbf
// id: '8004128', // München Donnersbergerbrücke
//id: '8004132', // München Karlsplatz

function App() {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [fromStationInfo, setFromStationInfo] = useState(null);
  const [toStationInfo, setToStationInfo] = useState(null);
  const [journeyList, setJourneyList] = useState([]);
  const [availableArrivalTime, setAvailableArrivalTime] = useState([]);
  const [selectedArrivalTime, setSelectedArrivalTime] = useState("");

  useEffect(() => {
    fetchFromStationInfo(fromStation, setFromStationInfo);
  }, [fromStation])

  useEffect(() => {
    fetchToStationInfo(toStation, setToStationInfo);
  }, [toStation])

  useEffect(() => {
    const fromStationId = fromStationInfo && Object.keys(fromStationInfo)[0];
    const toStationId = toStationInfo && Object.keys(toStationInfo)[0];

    if (fromStationId && toStationId) {
      fetchJourneyList(fromStationId, toStationId, setJourneyList);
    }
  }, [fromStationInfo, toStationInfo])
  
  return (
    <div className="App">
      <Header />
      <div className='flex gap-5 mx-auto px-5 mt-5 mb-5 max-w-[1240px] flex-wrap md:flex-nowrap'>        
        <Search handleStationChange={setFromStation} placeholder='From Station ex: München Hbf' />
        <Search handleStationChange={setToStation} placeholder='To Station ex: München Donnersbergerbrücke' />       
        {availableArrivalTime.length ? <DropDown
          availableArrivalTime={availableArrivalTime} 
          handleSelectedArrivalTime={setSelectedArrivalTime}
        /> : null}
      </div>
      { (fromStation && toStation) ? 
        <ListOfJourney 
          journeyList={journeyList?.journeys}
          setAvailableArrivalTime={setAvailableArrivalTime}
          selectedArrivalTime={selectedArrivalTime}
        /> : <NotSelected />
      } 
    </div>
  );
}

export default App;
