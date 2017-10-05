
# Batsu!

Batsu! is an application designed to help people keep accountable when meeting with others at created events.  
Within the application, users are able to create an event, invite other users, and track who arrives and who does not.  
Those that are late or do not show up will receive a punishment that is set within the application.  The application
uses GoogleMaps API to geo-locate the event's position, React.js and Redux for the logical application, and CSS3 for styling.

### Producer
- Eric

### Project Manager
- Collette

### Developers
- Tim
- Brian
- Jay
- Eli
- Kelsey
    
    
Prototype Instructions:

A. Prerequisite: 

   All prototypes require npm to be installed on your local machine because our project is using React. Please take following steps to set up the project environment:
   1. npm install
   2. npm install --save react-router-dom
   3. npm install --save axios
   4. npm install --save react-modal
   5. npm install --save react-burger-menu
   6. npm install --save react-image-slider
   7. npm install --save react-places-autocomplete


   The prototypes also require a LAMP/MAMP stack. Rename "mysql_connect.php.config" to "mysql_connect.php" and fill out your MySQL username and password credentials. 

_________________________________________________________________

B. Account Creation  

   Update the axios call on src/components/sign_up.js within handleAxios() function with the correct file path for your local machine.
   
   Features for this prototype include: Input Validation(email validation, phone validation, password validation, password check, and an age requirement).
   
   Future versions will include: instructions for password(include 1 capital case, 1 lower case, 1 number, and between 8-32 characters) and age requirements(10+ years). 

C. Account Creation with Facebook

   Click on "Continue with Facebook". Adds the user onto the database if the user doesn't have an account within our database(check their email address)

D. Login Authentication
   
   Requires database connect file
        

E. Event Creation
    


