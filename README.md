# PaymentWorks Transit Authority Client (pwta-client)

## Overview
* This is a sample REST client that will fetch and display a list of MBTA Subway routes from a REST API.
* If the user selects a route, an asynchronous call will be made to the REST API and the user will be presented with a list of all stops within that route.

## Assumptions
* The user will only want to view MBTA Subway (Rapid Transit) Route and Stop information.
* The user is only interested in viewing a basic list of route names and stop names.

## Design Decisions
* The API data used to support this application is reliably static and small in size. It could be argued to preload all of the data for this application and cache it, without the need to make repeated calls to the REST API. I opted to make an API call for each request to fetch stop information. This approach will demonstrate how Angular is able make an asynchronous call and update the component appropriately when a response is received.

## Angular Project File Naming Conventions
* app.component.ts - TypeScript file that defines the primary application component
* app.component.html - HTML Template for the primary application component
* app.component.css - Cascading Style Sheet definitions for the primary application component
* app.module.ts - TypeScript file that contains application level component declarations
* app-routing.module.ts - Typescript file that contains the application level routing paths
* app.component.spec.ts = Unit test definitions for the main application component

* xxxxxx.component.ts - TypeScript class that defines the behavior of the component
* xxxxxx.component.html - HTML template for a given component
* xxxxxx.component.css - Cascading Style Sheet definitions for a given component
* xxxxxx.component.spec.ts - Unit test definitions for a given component
* xxxxxx.service.ts - TypeScript class that defines a service
* xxxxxx.service.spect.ts - Unit test definitions for a given service
* ixxxxx.tx - Typescript class that defines an interface

## Primary Angular Components
* pwta-routes: This component is responsible for fetching and rendering MBTA route information
* pwta-stops: This component is responsible for fetching and rendering MBTA stop information

## Interfaces
* ipwta-route-api-resource: Responsible for defining the structure of the response received from the REST API call
* ipwta-route: Responsible for defining the object structure used to contain route information
* ipwta-stop-api-resource: Responsible for defining the structure of the response received from the REST API call
* ipwta-stop: Responsible for defining the object structure used to contain stop information

## A note about unit tests
I am not very familiar with writing unit tests in Jasmine. That said, I felt I should acknowledge their importance. I wrote a few basic tests to support the services that are used for fetching route and stop information from the REST API. These tests can be found in pwta-routes.service.spec.ts and pwta-stops.service.spec.ts

## Running the application
Rather than provide extensive instructions on how to configure an environment to support an Angular application, I opted to create a Docker container, which will allow any user to run the application without the need of cluttering their machines up with libraries they may not want.

* To run the Docker container, you'll need to get the docker desktop. You can download it using the link below

https://www.docker.com/get-started

* After you install the desktop, you should see the following screen:

![Docker Desktop](/src/assets/images/readme/docker_desktop.png)

* From a terminal window, execute the following command to download and run the pwts-client image
**docker run -d -p 8080:80 richwjohnson/pwta-client**

* Open a broswer and navigate to http://localhost:8080/. You should see the PaymentWorks Transit Authority Application!
![Application](/src/assets/images/readme/pwta-client.png)
