import React, { useEffect, useState, useRef } from 'react'
import './Carousel.css'

const Carousel = (props) => {
    const images = props.images;
    const options = props.options;
    const { infinite, autoplay, accentColors, pagination, icons, slideStyling, callback } = options;
    const length = images.length;
    const intervalID = useRef(0);
    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);

    // useEffect for Autoplay 
    useEffect(() => {
        intervalID.current = setInterval(() => {
            if (autoplay !== undefined) {
                if (!infinite && index === images.length - 1)
                    clearInterval(intervalID.current)
                else
                    goNext()
            }
        }, !autoplay ? 0 : autoplay?.duration)
        return ()=>clearInterval(intervalID.current)
    }, [infinite, autoplay])

    // Calculate index
    function goPrevious() {
        setIndex(state => {
            if (state === 0) {
                if (infinite)
                    return length - 1;
                else
                    return 0;
            } else
                return --state % length;
        })
    }

    function goNext() {
        setIndex(state => {
            if (state === length - 1) {
                if (infinite)
                    return 0;
                else
                    return length - 1;
            }
            else
                return ++state % length
        })
    }

    // Handling Touch Events
    function touchStart(e) {
        setIsDragging(true);
        setStartPos(getPositionX(e))
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }

    function touchEnd() {
        setIsDragging(false);
        const movedBy = currentTranslate - prevTranslate
        if (movedBy < -50) goNext()
        if (movedBy > 50) goPrevious()
        setPrevTranslate(currentTranslate)
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event)
            setCurrentTranslate(prevTranslate + currentPosition - startPos)
        }
    }

    return (
        <div className="carousel" tabIndex="0" onKeyDown= {(e)=>{
            switch(e.key){
              case "ArrowLeft":{
                goPrevious();
                break;
              }
              case "ArrowRight":{
                goNext();
                break;
              }
              default:{}
            }  }
        }>
            <div className='container'>
                <button className="button" disabled={infinite ? false : index === 0} onClick={() => {
                    callback.onSlideChange()
                    goPrevious();
                }} style={{ "color": (!infinite && index === 0 ? accentColors.disableButton : accentColors.button) }}
                >
                    {icons.prev}
                </button>
                <div className="slides" style={{ "maxWidth": slideStyling.containerMaxWidth }}>
                    {images.map((img, ind) => {
                        return (
                            <div key={ind} className={"slide " + (index === ind ? "show" : "none")} onTouchStart={(e) => touchStart(e)} onTouchEnd={(e) => touchEnd(e)} onTouchMove={(e) => touchMove(e)}>
                                <img src={img} alt="" className="img" onDragStart={(e) => e.preventDefault()} style={{ minWidth: slideStyling.imgMinWidth, minHeight: slideStyling.imgHeight, borderRadius: slideStyling.borderRadius }} />
                            </div>)
                    })}
                </div>
                <button className="button" disabled={infinite ? false : index === length - 1} onClick={() => {
                    callback.onSlideChange(index)
                    goNext()
                }} style={{ "color": (!infinite && index === length - 1 ? accentColors.disableButton : accentColors.button) }}>
                    {icons.next}
                </button>
            </div>
            {pagination && <div className="pagination">
                {images.map((img, ind) => {
                    return <div className={"dots"} key={ind} onClick={() => {
                        setIndex(ind);
                    }}>
                        {(ind === index) ?
                            icons.highlightedDot
                            :
                            icons.dot
                        }
                    </div>
                })}
            </div>}

        </div>
    )
}

export default Carousel