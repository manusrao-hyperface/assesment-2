import React, { useState, useRef, useEffect } from 'react'
import './TransitionCarousel.css'
import { defaultOptions } from '../../config/config'

const TransitionCarousel = ({ images, options }) => {
    // const values
    const {infinite, pagination, navButtons, autoplay, accentColors, icons, slideStyling, callback} = (options===undefined?defaultOptions:options)
    const length = images.length;
    const slidesPerView = slideStyling.slidesPerView;
    const slideMaxWidth = parseInt(slideStyling.imageMinWidth) * slidesPerView + parseInt(slideStyling.gap) * (slidesPerView-1);
    const pages = length - slidesPerView + 1;

    // Hooks
    const intervalID = useRef(0);
    const [curr, setCurr] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [percent, setPercent] = useState((curr + 1) * 100 / pages)

    // Calculate current index [curr]
    function prev() {
        setCurr(state => {
            if (state === 0) {
                if (infinite)
                    return length - slidesPerView;
                else
                    return 0;
            } else
                return --state % length;
        })
        callback.onSlideChange(curr)
    }

    function next() {
        setCurr(state => {
            if (state === length - slidesPerView) {
                if (infinite)
                    return 0;
                else
                    return length - slidesPerView;
            }
            else
                return ++state % length
        })
        callback.onSlideChange(curr)
    }

    // useEffect for Autoplay 
    useEffect(() => {
        intervalID.current = setInterval(() => {
            if (autoplay !== undefined) {
                if (!infinite && curr === length - 1)
                    clearInterval(intervalID.current)
                else
                    next()
            }
        }, !autoplay ? 0 : autoplay?.duration)
        return () => clearInterval(intervalID.current)
    }, [curr, infinite, autoplay])

    // useEffect for setting progress
    useEffect(() => {
        setPercent(((curr + 1) * 100) / pages)
    }, [curr,pages])

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
        if (movedBy < -50) next()
        if (movedBy > 50) prev()
        setPrevTranslate(currentTranslate)
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event)
            setCurrentTranslate(prevTranslate + currentPosition - startPos)
        }
    }

    return (
        <div className='carousel' style={{ maxWidth: slideMaxWidth+"px" }} onTouchStart={(e) => { if (!navButtons) return touchStart(e) }} onTouchEnd={(e) => { if (!navButtons) return touchEnd(e) }} onTouchMove={(e) => { if (!navButtons) return touchMove(e) }}>
            <div className='progress' style={{ backgroundColor: accentColors.progressBackground }}>
                <div className='bar' style={{ width: `${percent}%`, color: accentColors.progressColor }}></div>
            </div>
            <div className='slides' style={{ transform: `translateX(-${((curr * (100 + (parseInt(slideStyling.gap) * 100 / slideMaxWidth))) / slidesPerView)}%)`, height: slideStyling.slideHeight, gap: slideStyling.gap }}>
                {
                    images.map((img, ind) => (
                        <img src={img} alt="" key={ind} className='slide' style={{ minWidth: slideStyling.imageMinWidth }} draggable={false}/>
                    ))
                }
            </div>
            {<div className='buttons' onTouchStart={(e) => touchStart(e)} onTouchEnd={(e) => touchEnd(e)} onTouchMove={(e) => touchMove(e)} tabIndex={0} onKeyDown={(e) => {
                switch (e.key) {
                    case "ArrowLeft": {
                        prev();
                        break;
                    }
                    case "ArrowRight": {
                        next();
                        break;
                    }
                    default: { }
                }
            }}
            style={{ visibility: (navButtons ? "visible" : "hidden") }}
            >
                <button onClick={prev} className='button' style={{ "color": (!infinite && curr === 0 ? accentColors.disableButton : accentColors.button) }} disabled={infinite ? false : curr === 0}>
                    {icons.prev}
                </button>
                <button onClick={next} className='button' style={{ "color": (!infinite && curr === length - slidesPerView ? accentColors.disableButton : accentColors.button) }} disabled={infinite ? false : curr === length - slidesPerView}>
                    {icons.next}
                </button>
            </div>}
            {pagination && <div className='pagination'>
                {images.map((_, ind) => {
                    if (ind < length - slidesPerView + 1)
                        return <div className={"dot"} key={ind} onClick={(e) => {
                            setCurr(ind);
                        }}>
                            {(ind === curr) ?
                                icons.highlightedDot
                                :
                                icons.dot
                            }
                        </div>
                    return "";
                })}
            </div>}
        </div>
    )
}

export default TransitionCarousel