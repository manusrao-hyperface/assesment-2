# Task: Image Carousel Component

Two Carousel components are made, both supporting button and touch navigation.

## Image Carousel Component

**Props**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*infinite*|*boolean*|Value set to enable infinite Carousel.|
|*pagination*|*boolean*|*Value set to show Pagination.*|
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

*slideStyling*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*slideMaxWidth*|*string with px*|*Value for setting Max Width for each slide*|
|*imgMinWidth*|*string with px*|*Value for setting image width*|
|*imgHeight*|*string with px*|*Value for setting image height*|
|*borderRadius*|*string with px*|*Value for setting borderRadius of slide*|



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
|*onSlideChange*|*function*|*Function for calling on slide change*|

## Image Scroll Carousel

**Props**

|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*accentColors*|*object*|*Value set for colours of icons and pagination*|
|*icons*|*object*|*Value set for custom icons*|
|*slideStyling*|*object*|*Value set for the dimensions of slide & image*|
|*callback*|*object*|*Value set for custom callback function*|

*accentColors*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*button*|*string*|*Value for setting colour for buttons*|

*slideStyling*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*slideMaxWidth*|*string with px*|*Value for setting Max Width for each slide*|
|*gap*|*string with px*|*Value for setting gap between slides*|
|*imgMinWidth*|*string with px*|*Value for setting image width*|
|*imgHeight*|*string with px*|*Value for setting image height*|
|*borderRadius*|*string with px*|*Value for setting borderRadius of slide*|

*icons*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*prev*|*React Element*|*Icon for prev button*|
|*next*|*React Element*|*Icon for next button*|

*callback*
|**Name**|**Type**|**Description**|
| :- | :- | :- |
|*onSlideChange*|*function*|*Function for calling on slide change*|
