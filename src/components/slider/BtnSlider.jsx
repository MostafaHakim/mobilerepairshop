import {AiOutlineArrowRight , AiOutlineArrowLeft} from 'react-icons/ai'

const BtnSlider = ({movSlide}) => {
  return (
    <div className='w-full h-full flex flex-row items-center justify-between absolute px-8'>
        <button onClick={movSlide} className='p-2 rounded-full bg-gray-900 opacity-40 border-2 text-white text-xl border-blue-800 '>
            <AiOutlineArrowLeft />
        </button>
        <button onClick={movSlide} className='p-2 rounded-full bg-gray-900 opacity-40 border-2 text-white text-xl border-blue-800 '>
            <AiOutlineArrowRight />
        </button>
    </div>
  )
}

export default BtnSlider