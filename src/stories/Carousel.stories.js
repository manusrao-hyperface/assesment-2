import Carousel from "../Components/Carousel/Carousel";

import img1 from '../images/img_mountains_wide.jpg'
import img2 from '../images/img_snow_wide.jpg'
import img3 from '../images/img_nature_wide.jpg'
import img4 from '../images/2.jpeg'
import { defaultOptions } from "../config/config";

const images = [
    <img src={img1} alt="" />,
    <img src={img2} alt="" />,
    <img src={img3} alt="" />,
    <img src={img4} alt="" />,
    <img src={img1} alt="" />,
    <img src={img2} alt="" />,
]

export default {
    title: "Carousel",
    component: Carousel,
}

const Template = args => <Carousel {...args} />

export const Default = Template.bind({})
Default.args = {
    carouselSlides: images,
    options: defaultOptions
}

export const Infinite = Template.bind({})
Infinite.args = {
    carouselSlides: images,
    options: { ...defaultOptions, infinite: true }
}

export const NoPagination = Template.bind({})
NoPagination.args = {
    carouselSlides: images,
    options: { ...defaultOptions, pagination: false }
}

export const NoNavButtons = Template.bind({})
NoNavButtons.args = {
    carouselSlides: images,
    options: { ...defaultOptions, navButtons: false }
}

export const Progress = Template.bind({})
Progress.args = {
    carouselSlides: images,
    options: { ...defaultOptions, progress: true }
}

export const Fraction = Template.bind({})
Fraction.args = {
    carouselSlides: images,
    options: { ...defaultOptions, fraction: true }
}

export const AutoPlay = Template.bind({})
AutoPlay.args = {
    carouselSlides: images,
    options: { ...defaultOptions, autoplay: { "duration": 3000 } }
}

export const SlidesPerView = Template.bind({})
SlidesPerView.args = {
    carouselSlides: images,
    options: { ...defaultOptions }
}