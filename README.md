# CS-465

Architecture
•	Compare and contrast the types of frontend development you used in your full stack 
project, including Express HTML, JavaScript, and the single-page application (SPA).

Express is a back-end development framework. It uses templates to render HTML on the server. HTML is used to arrange content and JavaScript adds interaction. Express will produce full page HTML for every request. HTML and JavaScript reloads the entire page even when navigating between pages. In Express, since each interaction will involve a full page reload it tends to be slow. HTML and JavaScript is also not as Ideal as other frontend frameworks.

Single Page Application is concerned with client-side rendering. At first only a single page HTML is loaded, and content is dynamically updated without having to load the full page. SPA uses JavaScript framework to handle that dynamic content and route it to the client side of the application. It also interacts with the APIs for backend communication. SPA has a better consistent and stable user experience. It has faster interactions with not as many interruptions. It is ideal for real-time updates and interactions. 


•	Why did the backend use a NoSQL MongoDB database?

NoSQL MongoDB database was chosen because of its scalability in handling large amounts of data with high traffic. MongoDB is flexible and can allow stored unstructured or partly structured data. MongoDB gives high-performance experience for reading and writing operations. It is efficient in query operations and performance of the database. MongoDB allows developers to use JSON like documents making it easier to map application objects to the database records. It also is preferred for supporting large data and real time analytics. It is open source and has a large community of support that provides plugins and tools to help enhance its functionality.
Functionality

•	How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON is different from JavaScript in the fact that JSON is used for storing and transporting data while JavaScript is used for web development that enables interactive web pages. JSON is a data interchange format and JavaScript is a scripting language used for creating and controlling website content. JSON can be used with different program languages. JavaScript can control HTML and CSS while handling events and performing computations.  How JSON ties the front end and back end together, is when a user interacts with the application, the front-end will send a request to the back end in JSON format. The backend will process the request and interacts with the database and does the necessary operations.  The backend will then send the response back to front end in JSON format and once the front end receives the JSON data it uses JavaScript to render in on the page. 

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components. 

I have in the past, refactored code to eliminate redundant code that has slowed down the performance of my application. The benefits that come with reusable user interface components are efficiency, serviceability, functional reliability, and scalability. Reusable user interface components reuse pre-built components that give developers time to concentrate on other features. It reduces the time needed for maintenance since updates can be made in one place and allows new features without redundant code. 

Testing

•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

The methods that request and retrieve data are designated by :
GET: Request data from server.
POST: Submits the data to server
PUT: Updates existing data server.
DELETE: Deletes data.
PATCH: Update data partially.
Endpoints are specific URLs that the API reveals to the user to interact with the backend server.  They represent the operations that can be performed on the data.  For example, /users/id} will gather a specific user by the ID.  The challenges in testing with added layers of security are:
1.	Making sure the encrypted data is correctly decrypted and processed.
2.	Testing the APIs with authentication and authorization mechanisms that require setting up valid tokens and credentials.
3.	Setting up a testing environment that can be similar to the production environment for accurate testing.
	
Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me to understand the bigger picture in web development and all the necessary components to make that happen. Not sure yet where I will take this new found knowledge, however it has expanded my portfolio for when I do decide. The skills that I gained in this course include problem solving skills, which this class challenged. I would say that I have mastered but is more proficient in JavaScript language that enables me to complete this development project. Helped me to practice writing maintainable code that follow best practices
