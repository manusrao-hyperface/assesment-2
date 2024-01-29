import TransitionCarousel from "../Components/TransitionCarousel/TransitionCarousel";

import img1 from '../images/img_mountains_wide.jpg'
import img2 from '../images/img_snow_wide.jpg'
import img3 from '../images/img_nature_wide.jpg'
import { defaultOptions } from "../config/config";

const images = [img1, img2, img3, img1, img2, img3]

export default {
    title:"Transition Carousel",
    component: TransitionCarousel,
}

const Template = args => <TransitionCarousel {...args}/>

export const Default = Template.bind({})
Default.args = {
    images,
    options: defaultOptions
}

export const Infinite = Template.bind({})
Infinite.args = {
    images,
    options: {...defaultOptions,infinite:true}
}

export const NoPagination = Template.bind({})
NoPagination.args = {
    images,
    options: {...defaultOptions,pagination:false}
}

export const NoNavButtons = Template.bind({})
NoNavButtons.args = {
    images,
    options: {...defaultOptions,navButtons:false}
}

export const Progress = Template.bind({})
Progress.args = {
    images,
    options: {...defaultOptions,progress:true}
}

export const Fraction = Template.bind({})
Fraction.args = {
    images,
    options: {...defaultOptions,fraction:true}
}

export const AutoPlay = Template.bind({})
AutoPlay.args = {
    images,
    options: {...defaultOptions,autoplay:{"duration":3000}}
}

export const SlidesPerView = Template.bind({})
SlidesPerView.args = {
    images,
    options: {...defaultOptions}
}