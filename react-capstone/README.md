# Course 8: Capstone Instructions


# Overview:
    In this capstone course, you are tasked with building a comprehensive project that encapsulates all the skills you've honed throughout this program. Your mission is to develop a robust website for Little Lemon, a popular dining spot that desires a seamless online reservation system. This project will not only test your technical skills but also your ability to apply them in a real-world scenario.



# ★ Parts of the Project - What Pages and Features are Needed:
# {in dev-two}
    IMPORTANT - “Book a Reservation” Page:
        The primary objective of this project is to develop a reservation flow in your React project. Most of your time and effort should be dedicated to creating a reservation system for the restaurant, guided by your Figma design.

    “About Little Lemon” Page:
        Create a dedicated page to tell the story of Little Lemon, including its history, mission, and values. This section will help personalize the brand and connect with customers on an emotional level.

    Menu Page:
        Highlights and Specials:
            Implement a section that showcases daily specials, seasonal highlights, and promotional events.

    Suggestions for Stretch Goals:
        This can include an interactive calendar or a special offers page that updates regularly to keep the content fresh and engaging.

    Descriptions and Photos of Dishes:
        Enhance the menu pages with detailed descriptions and high-quality photographs of each dish. This will help to visually entice and inform customers about the variety and quality of the food offered, encouraging more reservations.
# {in dev-one}
    Navigation Bar:
        Design a user-friendly and intuitive navigation bar that improves the overall user navigation experience. Ensure that it includes links to all critical sections of the website, such as the Home page, Menu, About Us, Reservations, and Contact Information.

    Footer:
        Develop a comprehensive footer that includes additional information and resources, such as contact details, social media links, opening hours, and quick links to popular pages. This footer should also maintain aesthetic alignment with the rest of the website's design.

    Testimonials:
        Incorporate a testimonials section where customers can share their dining experiences. This will serve as social proof, boosting credibility and attracting new customers. The testimonials could be displayed through a sliding carousel on your homepage or a dedicated testimonial page (stretch goal).



# ★ Checklist - Features and Processes You Must Include:

    Establish meta tags and Open Graph protocol data
        Create a meta description for your project:
            As a reminder, a meta description provides a brief overview of the content on a specific page
<meta name="description" content="Page description here"/>

        Create a og:title for your project:
            As a reminder, the og:title meta tag allows you to assign a title to your shared link or content
<meta name="og:title" content="One Place Fishing"/>

        Create a og:description for your project:
            As a reminder, the og:title meta tag allows you to assign a title to your shared link or content
<meta name="og:description" content="some description here"/>

        Create a og:image for your project:
            As a reminder, the og:description meta tag is used to provide a description that typically follows a title
<meta name="og:image" content="https://example.com/pic.jpg"/>



# Include CSS Styling:

    Implement a Reusable Layout:
        Code a reusable grid or flexbox layout for your website.

    Mobile Layout Check:
        Use browser developer tools to verify that your website layouts correctly on mobile devices.

    Desktop Layout Check:
        Use browser developer tools to ensure that your website layouts correctly on desktop devices.

    Match styling to your Figma File:
        Make sure that the visual elements of the website correspond to the Figma design.



# Create Holistic Project Components:

    Develop the Initial Version of Your Homepage Components:
        Create the first version of the components for your homepage.

    Style All Homepage Components:
        Apply styles to all the components on the homepage to ensure a cohesive look.

    Establish Routing for Various Pages:
        Set up routes to navigate between different pages on your website.

    Utilize the Appropriate HTML5 Tags:
        Make sure to use the correct HTML5 tags to enhance the semantic structure of your webpage.

    Replace Redundant Div Tags with React Fragments:
        Use React fragments instead of div tags where they are redundant to streamline your code.



# Lift State Up:

    Move state to a higher component level (For additional guidance, see "Adding table booking state").

    Elevate the available times state to the Main component.

    Pass State Down: Send the state down to the Bookings and BookingForm components.

    Implement Reducer: Modify the available times to be managed using a reducer.

    Use ARIA attributes where required




# Working with the API:

    Add a table showing the data from the bookingData array:
        For more information on how to do this, you can use the information found at “Connecting the bookings page to the API”

    Update the addition of new bookings to the existing data:
        For more information on how to do this, you can use the information found at “Submitting the new booking page to the API”.

    Update the data using local storage:
        For more information on how to do this, you can use the information found at “Submitting the new booking page to the API”.

    Write unit tests for reading from and writing to local storage in React:
        For more information on how to do this, you can use the information found at “Update the unit tests for the API queries” - we will also discuss this in class.



# Improve the UX of the Project:

    Implement client-side validation for the date input, the time input, the number input, and the select form element:
        For more information on how to do this, you can use the information found at “Adding form validation”.

    Add unit tests for the form input and submission validation:
        For more information on how to do this, you can use the information found at “Adding unit tests for the form validation and submission”.



# Address accessibility needs:

    Improve the accessibility of your app by enhancing the semantic markup used

    Use ARIA attributes

    Label the forms





# Project Criteria - The rubric you’ll be graded on:

UX/UI Design and Implementation: Your work should follow your previously designed “Book a Reservation” Figma file you created in Course 7, and correctly implement the user experience and user interface
Accessibility: Ensure that appropriate accessibility tags are applied throughout the web application to support users with disabilities
Unit Tests: Your submission should include unit tests to verify the functionality of the web application
Booking Form Functionality and Validation: The booking form within your web app should be fully functional and include proper validation to handle user input correctly
Web App Semantics and Responsiveness: The web application should use semantic HTML where appropriate and be responsive across different devices and screen sizes
Git Repository Commit: You must commit your project to a Git repository, demonstrating your version control skills and allowing others to review your code changes










































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
