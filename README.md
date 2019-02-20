# Operational Elements of the Contract

A Front End for inputing form elements of contracts.

### Version
1.1.0


### Installation

Clone or download this repo
Make sure you have node installed on computer

CD into the directory

Install the dependencies

```sh
$ npm install
```

Create a config.js file inside the src directory add this to it
```sh
const serverAddy = <BackENDADRESS>

export default serverAddy
```
Replace <BackENDADRESS> with the address of the backend server


### Serve
To serve in the browser  - Runs webpack-dev-server
Use this for development

```sh
$ npm start
```

If you are adding or deleting sections of the forum you may need to delete three seperate parts of the app. You would first want to edit the index.html and find the section you are editing. Then you would go into src folder and remove the event listener from the SubmitPost function, then edit the data object to remove the section, Then go to the Ui.js delete it from the constructor and from the fillForm and clearForm.

### Build
Compile and build

```sh
$ npm run build
```
Save the app.bundle.js on the public drive OEC folder in the build folder
save the index.html in the oec folder and rename it to "OEC forms.html"

## More Info

### Author

Seth Kline


### License

This project is licensed under the MIT License
