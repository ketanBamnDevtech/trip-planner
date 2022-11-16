const NotSelected = () => {
  return (
    <>
     <div className='flex gap-5 mx-auto px-5 mt-5 mb-5 max-w-[1240px]'>  
        <div className="w-full">
          <div className="md:w-6/12 w-full mx-auto relative">
            <h3 className="absolute text-white text-2xl top-12 md:top-20 left-0 right-0 mx-auto text-center">Please select from and to destination...</h3>
            <img 
              alt="Please select from and to destination..." 
              className="w-full"
              src="https://www.shutterstock.com/image-vector/tourist-bus-on-background-abstract-260nw-1961181532.jpg" 
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default NotSelected;
