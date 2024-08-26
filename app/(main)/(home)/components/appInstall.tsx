import { Check, Star } from 'lucide-react'

export default function AppInstall() {
  return (
    <div className='mt-14 h-[443px] rounded-[3rem] bg-[url(https://s1.rdbuz.com/web/images/homeV2/appinstall/appInstallbg.svg)] bg-cover bg-right-bottom bg-no-repeat'>
      <div className='px-8 py-10'>
        <h2 className='text-3xl text-white font-semibold'>Hài lòng với ứng dụng!</h2>
        <div className='mt-8 flex space-x-16'>
          {/* Box information */}
          <div className='rounded-2xl w-[376px] px-6 py-10 bg-white'>
            <ul className='flex flex-col space-y-4'>
              <li className='flex space-x-4 items-center '>
                <div className='w-6 h-6 rounded-full bg-emerald-500 grid place-items-center'>
                  <Check className='w-4 h-4' color='white' />
                </div>
                <span className='text-lg font-semibold text-gray-700'>Ưu đãi hấp dẫn</span>
              </li>
              <li className='flex space-x-4 items-center '>
                <div className='w-6 h-6 rounded-full bg-emerald-500 grid place-items-center'>
                  <Check className='w-4 h-4' color='white' />
                </div>
                <span className='text-lg font-semibold text-gray-700'>Vé điện tử</span>
              </li>
            </ul>

            <div className='mt-14 flex'>
              <div className='w-1/2 border-r-2 border-r-gray-400'>
                <ul className='flex flex-col space-y-2'>
                  <li className='flex items-center space-x-1'>
                    <span className='text-xl font-bold'>4.5</span>
                    <Star className='w-4 h-4' />
                  </li>
                  <li className='text-sm font-light'>50M+ lượt tải</li>
                  <li className='text-sm font-semibold'>Play Store</li>
                </ul>
              </div>
              <div className='w-1/2 flex justify-end'>
                <ul className='flex flex-col space-y-2'>
                  <li className='flex items-center space-x-1'>
                    <span className='text-xl font-bold'>4.6</span>
                    <Star className='w-4 h-4' />
                  </li>
                  <li className='text-sm font-light'>10M+ lượt tải</li>
                  <li className='text-sm font-semibold'>App Store</li>
                </ul>
              </div>
            </div>
          </div>

          {/* QR code */}
          <div className='flex items-center'>
            <div className='flex flex-col'>
              <div className='font-bold text-lg text-white'>Quét để tải</div>
              <img src='https://s3.rdbuz.com/web/images/homeV2/SGMY/MY_QR.svg' alt='QR' className='mt-2' />
            </div>
          </div>

          {/* Stores */}
          <div className='flex items-center'>
            <div className='flex flex-col space-y-2'>
              <div className='font-bold text-lg text-white'>Tải ứng dụng trên</div>
              <img
                src='https://s2.rdbuz.com/web/images/homeV2/appinstall/playStore.svg'
                alt=''
                className='cursor-pointer'
              />
              <img
                src='https://s3.rdbuz.com/web/images/homeV2/appinstall/appStore.svg'
                alt=''
                className='cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
