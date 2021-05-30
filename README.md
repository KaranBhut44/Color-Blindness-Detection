# SSD4 Color Blindness Detection
## YouTube Demo and Presentation link: https://www.youtube.com/watch?v=oJt_tzEkik0
## Repository link: https://github.com/KaranBhut44/SSD4_Color_Blindness_Test
## Final Presentation link: https://github.com/KaranBhut44/SSD4_Color_Blindness_Test/blob/main/FInal_Presentation.pptx 
## index.html
 - This is the first page of the project consisting of basic form to take patient details. 
 - It also contains Instructions about how to use colorblindness testing framework(built in AFRAME).
 - `form.js` file contains attributes validation of form present in `index.html`. When user presses `Start Test` button, If all user-filled details are valid then it redirects to `color_test.html`. Otherwise it stays on the same page untill user correctly enter valid details.
 - User details are stored in sessionStorage before redirection.
## color_test.html
 - This is the main component in project. It includes `rmtext/clinicf.gltf` file to include room structure.
 - There is an invisible barrier inside the room which ensures that distance between user and the wall(on which the images are shown) is not less than 6 meter. Because 6 meter is the ideal distance for accurate test-results.
 - Ishihara test contains 38 plates of different types. But we have considered 10 of them for demo purpose to utilize time. However we have uploaded all 38 of them in the 'plateimages' repository.
 - We have used 3 types of plates:-
   - ##### Transformation plates:  
        individuals with color vision defect should see a different figure from individuals with normal color vision.
   -  ##### Vanishing plates: 
        only individuals with normal color vision could recognize the figure.
   -  ##### Hidden digit plates:
        only individuals with color vision defect could recognize the figure.
 - `script.js` file contains javascript code for this page. We set dynamic options that appears based on particular question. (some questions contains 4 options and some contains only 2).
 - We have implemented a gazing based pointer for architecture independent working. (works just fine with laptop,mobile or any VR headset). If user puts that pointer on any button for timeseconds more than threshold( 1.5 sec ), then only event will be triggered based on button type.
 - We have implemented options in such a way that, when user hover pointer on any option, then that option's background color becomes darker gray. After threshold time is over, it becomes black, such that user can know that particular option is selected.
 - After option selection, user can move forward or backward by using tringular buttons situated repectively at right and left side of the plateimage.
 - After the test is over, user is redirected to `report.html` page.

## report.html
 - This page is used for sharing test-results with user. It displays userdetails stored in sessionStorage.
 - It also includes individual plates error percentage and overall color-blindness percentage. For example, 
  ![](https://latex.codecogs.com/svg.latex?\small&space;TransformationDesignError=\frac{\text{IncorrectTransformationImages}}{TotalTransformationImages}*100)
 - There is a seperate option to print report in the pdf form.
