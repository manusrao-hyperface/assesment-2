import React, { useRef } from 'react'
import './ScrollCarousel.css'

const ScrollCarousel = ({ images, options }) => {
    const { accentColors, icons, slideStyling, callback} = options;
    const listRef = useRef();
    const itemWidth = parseInt(slideStyling.imgMinWidth);
    const padding = 10;
    
    return (
        <div className="container">
            <div className="carousel-view">
                <button id="prev-btn" className="button prev-btn"
                    onClick={() => {
                        callback.onSlideChange()
                        listRef.current.scrollLeft -= itemWidth + padding
                    }} style={{ "color":accentColors.button }}
                    >
                        {icons.prev}
                </button>
                <div id="item-list" className="item-list" ref={listRef} style={{"maxWidth":slideStyling.slideMaxWidth,"gap":slideStyling.gap}}>
                    {images.map((img,ind) => {
                        return <img key={ind} className='item' src={img} alt="" onDragStart={(e) => e.preventDefault()} style={{minWidth:slideStyling.imgMinWidth,minHeight:slideStyling.imgHeight,borderRadius:slideStyling.borderRadius}}/>
                    })}
                </div>
                <button id="next-btn" className="button next-btn" onClick={() => {
                    callback.onSlideChange()
                    listRef.current.scrollLeft += itemWidth + padding
                }} style={{ "color":accentColors.button }}>
                    {icons.next}
                </button>
            </div>
        </div>
    )
}

export default ScrollCarousel;