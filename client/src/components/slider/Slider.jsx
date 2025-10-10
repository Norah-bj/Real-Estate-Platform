import { useState } from "react"
import "./slider.scss"


function Slider({images}) {
  const  [imageIndex,setImageIndex] = useState(null)

  const changeSlider = (direction)=>{
    if(direction === "left"){
        if(imageIndex === 0){
            setImageIndex(images.length-1)
        }else{
            setImageIndex(imageIndex-1)
        }
    }else{
        if(imageIndex==images.length-1){
            setImageIndex(0)
        }else{
            setImageIndex(imageIndex+1)
        }
    }
  }

  return (
    <div className="slider">
        {imageIndex !== null &&(
            <div className="fullSlider">
                <div className="arrow">
                    <img src="/arrow.png" alt="" onClick={()=> changeSlider("left")}/>
                </div>
                <div className="imgContainer">
                    <img src={images[imageIndex]} alt="" />
                </div>
                <div className="arrow">
                    <img src="/arrow.png" alt="" className="right" onClick={()=> changeSlider("right")}/>
                </div>
                <div className="close" onClick={()=>setImageIndex(null)}></div>
            </div>
        )}
        
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
        </div>
        <div className="smallImages">
            
            {images.slice(1).map((image, index) => (
                <img src={image} alt="" key={index} onClick={()=>setImageIndex(index+1)}/>
            ))}
        </div>
    </div>
  )
}

export default Slider


{/* This line maps over the images array and returns a new array of img tags. The map function takes a callback function with two arguments, the current element (image) and the index of that element in the array. The callback function returns a new img tag with the src set to the current image and a unique key set to the index. The resulting array of img tags is then rendered in the smallImages div. */}