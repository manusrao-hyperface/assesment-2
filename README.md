# Task: Image Carousel Component

Three Carousel components are made, both supporting button and touch navigation.

## Transition Carousel Component

**Props**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*infinite*|*boolean*|Value set to enable infinite Carousel.|
|*pagination*|*boolean*|*Value set to show Pagination.*|
|*fraction*|*boolean*|*Value set to show Fraction of progress.*|
|*navButtons*|*boolean*|*Value set to show Navigation Buttons.*|
|*progress*|*boolean*|*Value set to Progress Slider.*|
|*autoplay*|*object*|*Value set for the properties of auto sliding.*|
|*accentColors*|*object*|*Value set for colours of icons and pagination*|
|*icons*|*object*|*Value set for custom icons*|
|*slideStyling*|*object*|*Value set for the styling of slide & image*|
|*callback*|*object*|*Value set for custom callback function*|

*autoplay*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*duration*|*number*|*Value in Milliseconds for slide change duration* |

*accentColors*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*button*|*string*|*Value for setting colour for buttons*|
|*disableButton*|*string*|*Value for setting colour for disabled buttons*|
|*dots*|*string*|*Value for setting colour for pagination dots*|
|*highlightedDots*|*string*|*Value for setting colour for current pagination dot*|
|*fractionColor*|*string*|*Value for setting colour for fraction numbers*|

*slideStyling*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*imgMinWidth*|*string with px*|*Value for setting image width*|
|*slideHeight*|*string with px*|*Value for setting image height*|
|*borderRadius*|*string with px*|*Value for setting borderRadius of slide*|
|*slidesPerView*|*number*|*Value for setting number of slides per each frame of carousel*|
|*gap*|*string with px*|*Value for setting gap between slides in carousel*|

*icons*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*prev*|*SVG Element*|*Icon for prev button*|
|*next*|*SVG Element*|*Icon for next button*|
|*dot*|*SVG Element*|*Icon for pagination dot*|
|*highlightedDot*|*SVG Element*|*Icon for current pagination dot*|

*callback*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*onClickItem*|*function*|*Function for calling on clicking on any slide*|