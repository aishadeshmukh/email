### Sending email using hapi js and nodemailer

Prerequisites - 
1. nodejs and postgresql should be installed.
2. In the config file, update your username and password for node and postgresql server.
3. Install postman to test the api.

#### Clone the repository and follow the below steps:

&nbsp; Step 1: Install the npm packages by executing the following command in the terminal
```
npm install
```

Step 2: Create database
Here, I have used sequelize ORM to create the database.
Follow instructions from their official website https://sequelize.org/master/manual/model-basics.html or follow instructions below.

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Step 1: Install Sequelize CLI
  ```
  npm install --save-dev sequelize-cli

  ```
  
 &nbsp; &nbsp; &nbsp; &nbsp; Step 2: For creating a project execute the below command
  ```
  npx sequelize-cli init

  ```

&nbsp; &nbsp; &nbsp; &nbsp; Step 3: Update the config file as per your server details
  
 &nbsp; &nbsp; &nbsp; &nbsp; Step 4: Create model Product
  ```
  npx sequelize-cli model:generate --name Product --attributes name:string,description:string

  ```
  
  Here, I have just added name and description of the Product as our main focus is to send email to the user. You may further details of the Product sch as its price and image.
  
  
 &nbsp; &nbsp; &nbsp; &nbsp; Step 5: Insert this model into database
  ```
  npx sequelize-cli db:migrate

  ```
  
  Now, the table Product has been created in your database.
  
  Here, we have completed the step of creating a database.
 
 
 Step 3: Update sender email address details
 Go to factory.js file in the factory folder.
 Update the sender email and password.
 
 
 Step 4: Testing the api
 Open postman and execute a post request with below body and gievn api /send/email
 ```
 {
   "id": "Enter product id here",
   "email": "Enter user's email address here"
 }
 ```
 
 For testing purpose, enter one of your email address to check if email is received. You will receive the product details in table format. You may add css for formatting the output.
 
 
 That's all!!!
 Let me know if this helped :)
 
 
 
 
