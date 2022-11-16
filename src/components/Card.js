import moment from 'moment';

const Card = ({ journey }) => {
  const { arrival, departure, origin, destination } = journey;

  return (
    <div className="px-5 w-full md:w-1/2 xl:w-1/3 mb-8">
      <div className="rounded overflow-hidden shadow-lg cursor-pointer w-full">
        <img 
          className="w-full h-[275px]"
          src={"https://image.shutterstock.com/image-vector/travel-bus-moving-along-sea-260nw-1960035034.jpg"} 
          alt="Happy Journey" 
        />
        <div className="px-6 py-4">
          <div className="text-base mb-2">Origin Station: {origin.name}</div>
          <div className="text-base mb-2">Destination Station: {destination.name}</div>
          <div className="text-base mb-2">Arrival Time: {moment(arrival).format(moment().format('DD/MM/YYYY, h:mm:ss'))}</div>
          <div className="text-base mb-2">Departure Time: {moment(departure).format(moment().format('DD/MM/YYYY, h:mm:ss'))}</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          { Object.keys(origin.products).map((d, i) => {
              if(origin.products[d]) {
                return (
                  <span 
                    key={i} 
                    className="inline-block bg-sky-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >
                    {d}
                  </span>)
              }
              return null     
          })}
        </div>
      </div>
    </div>
  )
}

export default Card;
