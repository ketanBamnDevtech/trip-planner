const DropDown = ({availableArrivalTime, handleSelectedArrivalTime}) => {
  return (
    <div className='md:w-6/12 w-full'>
      <select
        onChange={(e) => handleSelectedArrivalTime(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 h-[42px] outline-0"
      >
        {availableArrivalTime.map(d => (
          <option key={d} value={d} defaultValue={""}>{d}</option>
        ))}
      </select>
    </div>
  )
}

export default DropDown;
