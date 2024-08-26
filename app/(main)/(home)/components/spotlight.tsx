export default function Spotlight() {
  return (
    <div className='mt-14'>
      <h3 className='text-xl font-bold uppercase'>Các điểm nổi bật</h3>
      <ul className='mt-4 flex flex-wrap justify-between'>
        <li className='px-10 py-6 flex flex-col items-center border rounded-xl'>
          <img src='https://st.redbus.in/Images/rdc/36million.svg' alt='spotlight' className='w-[304px] h-[137px]' />
          <span className='font-semibold mt-4'>36 triệu</span>
          <span className='text-sm font-light'>Khách hàng hài lòng trên toàn cầu</span>
        </li>
        <li className='px-10 py-6 flex flex-col items-center border rounded-xl'>
          <img
            src='https://st.redbus.in/Images/rdc/3500worldwide.svg'
            alt='spotlight'
            className='w-[304px] h-[137px]'
          />
          <span className='font-semibold mt-4'>Hơn 5.000</span>
          <span className='text-sm font-light'>Các nhà xe tin cậy chúng tôi trong việc bán vé xe khách</span>
        </li>
        <li className='px-10 py-6 flex flex-col items-center border rounded-xl'>
          <img
            src='https://st.redbus.in/Images/rdc/100000-booked-perday.svg'
            alt='spotlight'
            className='w-[304px] h-[137px]'
          />
          <span className='font-semibold mt-4'>Hơn 200.000</span>
          <span className='text-sm font-light'>vé mỗi ngày</span>
        </li>
      </ul>
    </div>
  )
}
