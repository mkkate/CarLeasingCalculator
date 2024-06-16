For better code maintainance, each value given in the **Project Requirements** is set into the corresponding object in **enum.js**. 
That way, whenever values are changed in the requirement, changes in code are made easy by changing them in the enum, instead of seraching for them 
in the index.html.

**index.html**:
The calculator body contains "container" div element, that has two parts: 
- **leaseForm** holding input values
- **leasing-details** holding the results.
All .js and .css file are included, also with project icon and title.

**css**:
All the .css files are grouped into **css** folder, for better code maintainance:
- **styles.css** - holds styles for common elements from "container" part of the index.html
- **form.css** - holds styles for the elements from "leaseForm" part of the index.html
- **leasingDetails.css** - holds styles for the elements from "leasing-details" part of the index.html

**js**:
All the .js files are grouped into **js** folder, for better code maintainance:
- **calculations.js** - holds functions for every calculation related to the result and for updating the values calculated after user's actions
- **dataPopulating.js** - holds functions for populating dropdowns with values from coresponding enums from enums.js
- **enums.js** - holds object with values given in the Project Requirements
- **rangeTextSyncs.js** - holds functions for syncing text inputs with slider outputs and vice versa, slider inputs with text outputs
- **script.js** - holds form initialization
- **setters.js** - holds functions for dynamicaly setting values from enums and label text with range for "Car Value" and "Down Payment"
