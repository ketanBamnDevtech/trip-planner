const Header = () => {

  return (
    <div className='px-[40px] bg-[#025FEB]'>
      <div className='flex h-auto lg:h-[60px] py-2 lg:py-0'>
        <div className='flex gap-2 lg:gap-[40px] w-full justify-center lg:justify-between flex-wrap lg:flex-nowrap items-center'>
          <span className='flex w-full lg:w-auto items-center gap-2 cursor-pointer'>
            <span className='text-[16px] text-white w-full lg:w-auto text-center lg:text-left'>Trip Planner</span>
          </span>
          <div className='flex gap-4 py-2'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
