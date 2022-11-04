# Create a Tableau Dashboard Extension Starter

This project helps create a basic Tableau dashboard extension.  More information about building dashboard extensions for Tableau can be found [here](https://tableau.github.io/extensions-api/).

## Using the starter tool
To get your first Tableau dashboard extension up and running, execute the command below:

```npx create-tableau-dashboard-extension myExtensionName```

This will create a starter dashboard extension, as well as the trex file needed to run it.  After the build process completes, it will print out the command you need to start the web app.  It should be something like this:

```cd create-tableau-dashboard-extension/{myExtensionName} && npm start```

This will start up the web app, but you still need to open it in Tableau.  Open Tableau Desktop and goto any dashboard.  Drag in a Dashboard Extension object, and navigate to the trex file in your create-tableau-dashboard-extension directory. 

*Note: This tool has a dependency on ```git``` being installed, in order to pull source code for the web app.  If you haven't done so already, please [download and install git](https://git-scm.com/downloads)*
