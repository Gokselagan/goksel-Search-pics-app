Search App

The Search App is a simple web application that allows users to search for images using keywords. Users can enter a search term, click the "Search" button, and view a list of images related to their search. Additionally, users can clear the search results by clicking the "Clear" button.


Features

Search for images based on keywords.
Display search results in a grid layout.
Clear search results with the "Clear" button.


Technologies Used

HTML
CSS
JavaScript


Unsplash API for fetching images


How to Use

Clone the repository to your local machine.
Open the index.html file in a web browser.
Enter a search term in the "search here" input field.
Click the "Search" button to fetch images related to the search term.
View the images displayed in a grid layout.
To clear the search results, click the "Clear" button.


Available Scripts

index.html: Contains the main HTML structure of the application.
style.css: Contains the styles for the application.
script.js: Contains the JavaScript code for fetching images from the Unsplash API and displaying them in the UI.


API Used

The application uses the Unsplash API to fetch images based on the user's search query.
The API requires an access key for authorization, which is included in the code (Authorization : "Client-ID PD-aEo0ccG2IK8WFALztm6IVlajHNfxb--3fmTfNEXc").


Code Structure

The HTML file (index.html) contains the main structure of the application, including the search input, buttons, and image display area.
The CSS file (style.css) provides styles for the elements in the application, such as input fields, buttons, and image cards.
The JavaScript file (script.js) handles user interactions, such as fetching images from the API, displaying images in the UI, and clearing search results.


Additional Notes

Images are fetched from Unsplash based on the user's search query.
The addImageToUI function dynamically creates image elements and appends them to the #img-list container.
Users can search for a variety of images by entering different search terms.
The application provides a simple and intuitive interface for searching and viewing images.


Enjoy using the Search App to explore and discover a wide range of images based on your interests!
