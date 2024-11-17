# express-pm2-nginx
Create An Application, Deploy With PM2 And Nginx
npm init -y
npm install express
node app.js

# Install PM2:
npm install pm2 -g
pm2 start app.js


# Install Nginx using Homebrew:
brew install nginx

or on windows
sudo apt install nginx

# Run :

http://localhost:3000/data

# Output :
	
message	"Hello, this is JSON data… by the Express server!"
author	"Vikrant Kalyan"
