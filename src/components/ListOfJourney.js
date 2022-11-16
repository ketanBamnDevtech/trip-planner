import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Card from './Card';
import { handleDateTime, handleFilterJourney } from '../utils/commonFunction';

const ListOfJourney = ({journeyList, setAvailableArrivalTime, selectedArrivalTime}) => {
  const [filterJourney, setFilterJourney] = useState();

  useEffect(() => {
    journeyList?.length && handleDateTime(journeyList, setAvailableArrivalTime);
  }, [journeyList])

  useEffect(() => {
    let filterJourney = [];
    if (selectedArrivalTime) {
      filterJourney = journeyList?.length && handleFilterJourney(journeyList, selectedArrivalTime)
    } else {
      filterJourney = journeyList;
    }

    setFilterJourney(filterJourney);
  }, [selectedArrivalTime, journeyList])

  return (
      <div className='flex gap-5 mx-auto mt-5 mb-5 max-w-[1240px]'>  
        <div className='p-[40px] px-0 flex flex-wrap justify-center m-auto'>
          { filterJourney?.length ? filterJourney?.map((d, i) => (
              <Card key={i} journey={d.legs[0]} />
            )) : <div><CircularProgress /></div>
          }
        </div>
      </div>
  )
}

export default ListOfJourney;
