**Pure React Carousel Component**

**Installation:** Import the component as below:

    import Carousel from './Components/Carousel/Carousel';

**Dependencies:** *react react-dom*

**Configuration**

    <Carousel carouselSlides={slides} options={options}/>

Where,

    slides is an array of React components.
    options is an object of customization.

**Options - Required**

|**Name**|**Type**|**Default**|**Description**|
| :- | :- | :- | :- |
|*infinite*|*boolean*|<p>***false***</p><p>optional</p>|Value set to enable infinite Carousel.|
|*pagination*|*string*|<p>***“custom”***</p><p>optional</p>|*Value set to show Pagination.*|
|*navigationButtons*|*boolean*|<p>***true***</p><p>optional</p>|*Value set to show Navigation Buttons.*|
|*progress*|*boolean*|<p>***false***</p><p>optional</p>|*Value set to show Progress.*|
|*autoplay*|*object*|<p>***No Value***</p><p>optional</p>|*Value set for the properties of auto sliding.*|
|*accentColors*|*object*|required|*Value set for colours of icons and pagination.*|
|*icons*|*object*|required|*Value set for custom icons.*|
|*slideStyling*|*object*|required|*Value set for the styling of slide & image.*|
|*callback*|*object*|required|*Value set for custom callback function.*|

***autoplay -* optional**
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*duration*|*number*|*Value in Milliseconds for slide change duration* |


***accentColors -* required**
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*button*|*string*|*Value for setting colour for buttons*|
|*disableButton*|*string*|*Value for setting colour for disabled buttons*|
|*progressBackground*|*string*|*Value for setting colour for progress background*|
|*progressColor*|*string*|*Value for setting colour for progress* |
|*fractionColor*|*string*|*Value for setting colour for fraction*|

***slideStyling -* required**
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*carouselWidth*|*string with px*|*Value for setting Max Width for carousel*|
|*slideHeight*|*string with px*|*Value for setting carousel height*|
|*slidesPerView*|*string with px*|*Value for setting number of images per slide*|
|*gap*|*string with px*|*Value for gap between slides*|
|*transition*|*transition property*|*Transition value for slide change & progress animation*|

***icons -* required**
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*prev*|*SVG Element*|*Icon for prev button*|
|*next*|*SVG Element*|*Icon for next button*|
|*dot*|*SVG Element*|*Icon for pagination dot*|
|*highlightedDot*|*SVG Element*|*Icon for current pagination dot*|

***callback -* optional**
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*onClickItem*|*function*|*Function for calling on clicking on a slide*|

*Full Example configuration can found in ‘/config/config.js’*