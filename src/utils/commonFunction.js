import moment from 'moment';

export const handleDateTime = (journeyList, setAvailableArrivalTime) => {
  let dateTime = journeyList.map((d) => {
    return moment(d.legs[0]['arrival']).format(moment().format('DD/MM/YYYY, h:mm:ss'));
  })
  dateTime = [...new Set(dateTime)];
  setAvailableArrivalTime(dateTime);
}

export const handleFilterJourney = (journeyList, selectedArrivalTime) => {
  const filtered = journeyList.filter((d) => {
    if (moment(d.legs[0]['arrival']).format(moment().format('DD/MM/YYYY, h:mm:ss')) === selectedArrivalTime)
      return d;
  })

  return filtered;
}
