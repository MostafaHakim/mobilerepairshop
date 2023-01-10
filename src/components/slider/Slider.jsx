import {useState} from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'




const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }else{
            setSlideIndex(1)
        }
    }
  return (
    <div className='w-full h-screen flex items-start justify-center'>
        <div className='w-4/5 h-[450px] justify-center overflow-hidden shadow-md mt-12 relative'>
        <BtnSlider movSlide={nextSlide}/>
            {dataSlider.map((obj, index) => {
                return(
                    <div className="w-full h-full">
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + slideIndex}.jpg`} 
                        />
                    </div>
                )
            })
            }
        </div>
        
    </div>
  )
}

export default Slider