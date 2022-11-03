# Create a Tableau Dashboard Extension

This project helps create a basic Tableau dashboard extension.  More information about building dashboard extensions for Tableau can be found [here](https://tableau.github.io/extensions-api/)

## Setup
It has not yet been published to npm, so for now here's how to get it working:

Clone this repository
```git clone https://github.com/takashibinns/create-tableau-dashboard-extension```

Install it globally
```npm install -g```

## Using the tool
Now that the create-tableau-dashboard-extension tool has been installed, you can use it by running the following command:

```npx create-tableau-dashboard-extension myExtensionName```

This will create a starter dashboard extension, as well as the trex file needed to run it.  After the build process completes, it will print out the command you need to start the web app.  It should be something like this:
```cd create-tableau-dashboard-extension/{myExtensionName} && npm start```

This will start up the web app, but you still need to open it in Tableau.  Open Tableau Desktop and goto any dashboard.  Drag in a Dashboard Extension object, and navigate to the trex file in your create-tableau-dashboard-extension directory. 

