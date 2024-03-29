import Carousel from './Components/Carousel/Carousel'

import img1 from './images/img_mountains_wide.jpg'
import img2 from './images/img_snow_wide.jpg'
import img3 from './images/img_nature_wide.jpg'
import img4 from './images/2.jpeg'
import compList from './compList'

const icons = {
  "prev": <svg className='svg'
    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path d="M10.4772727,0.477272727 C10.7408632,0.740863176 10.7408632,1.16822773 10.4772727,1.43181818 L1.90909091,10 L10.4772727,18.5681818 C10.7408632,18.8317723 10.7408632,19.2591368 10.4772727,19.5227273 C10.2136823,19.7863177 9.78631772,19.7863177 9.52272727,19.5227273 L0.707106781,10.7071068 C0.316582489,10.3165825 0.316582489,9.68341751 0.707106781,9.29289322 L9.52272727,0.477272727 C9.78631772,0.213682278 10.2136823,0.213682278 10.4772727,0.477272727 Z" transform="translate(4)" fill="currentColor" />
  </svg>,
  "next": <svg className='svg'
    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path d="M1.37727273,19.5227273 C1.11368228,19.2591368 1.11368228,18.8317723 1.37727273,18.5681818 L9.94545455,10 L1.37727273,1.43181818 C1.11368228,1.16822773 1.11368228,0.740863176 1.37727273,0.477272727 C1.64086318,0.213682278 2.06822773,0.213682278 2.33181818,0.477272727 L11.1474387,9.29289322 C11.537963,9.68341751 11.537963,10.3165825 11.1474387,10.7071068 L2.33181818,19.5227273 C2.06822773,19.7863177 1.64086318,19.7863177 1.37727273,19.5227273 Z" transform="translate(4)" fill="currentColor" />
  </svg>,
  "dot": <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256.167" fill="#00b1ff" r="223.167" /></svg>,
  "highlightedDot": <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" fill="#0071bc" r="30" /></svg>
}

function App() {

  // const values
  const printDetails = (index) => {
    console.log("From clicking a slide, clicked index is ", index)
  }

  const images = [
    <img src={img1} alt="" width={"500px"} />,
    <img src={img2} alt="" width={"500px"} />,
    <img src={img3} alt="" width={"500px"} />,
    <img src={img4} alt="" width={"500px"} />,
    <img src={img1} alt="" width={"500px"} />,
    <img src={img2} alt="" width={"500px"} />,
  ]

  const options = {
    'infinite': false,
    'pagination': "custom",
    'navigationButtons': true,
    'progress': true,
    // 'autoplay':{
    //   "duration":3000
    // },
    'accentColors': {
      "button": "#007BFE",
      "disableButton": "#A6D1FE",
      "progressBackground": "BFBEBE",
      "progressColor": "green",
      'fractionColor': "#007BFE",
    },
    "icons": {
      "prev": icons.prev,
      "next": icons.next,
      "dot": icons.dot,
      "highlightedDot": icons.highlightedDot
    },
    "slideStyling": {
      "carouselWidth": "1000px",
      "slideHeight": "300px",
      "slidesPerView": 2,
      "gap": "20px",
      "transition": "all 150ms ease-out"
    },
    "callback": {
      "onClickItem": printDetails
    }
  }

  return (
    <div className='App'>
      <Carousel carouselSlides={images} options={options}>
      </Carousel>
    </div>
  );
}

export default App;