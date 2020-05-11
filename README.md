# Devs4U

Devs4U is a web application that connects freelancers with contractors and allows them to manage their projects. It still needs lots of refactor, tests and deployment. Basically is a work in progress. 


### To install the repository 

You must have git installed on your machine.  
Locate the folder that will contain your project and open git bash in that directory.  
  
Then, type in the terminal:

```
	git clone https://github.com/marylicious/Devs4U
```

Once it's downloaded, change the directory using:

```
	cd Devs4U
```



### Installation

You would need yarn and node in their latest versions (LTS)
Check these links to download:
-  https://yarnpkg.com/en/docs/install#windows-stable
- https://nodejs.org/en/

The first time you open the project type
``` 
yarn install
```
to install dependencies

### Running servers

If you want to run only the frontend server, type:
```
yarn start
```
the project will start running on port 3000. You can go to http://localhost:3000/ in any browser to watch it.

If you want to run only the backend server, type:
```
yarn run serve
```
The backend uses port 5000. Use http://localhost:5000/ if you wish to test it using Postman.


If you wish to run both at the same time, try:
``` 
yarn run dev
```
