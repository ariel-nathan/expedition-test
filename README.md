<div id="top"></div>

<br />
<div align="center">

<h3 align="center">Expedition Co. React Native Assesment</h3>

  <p align="center">
    An assessment for Expedition Co. in React Native    
    <br />
    <br />
    <a href="https://expo.dev/@arielnathan/expedition-test?serviceType=classic&distribution=expo-go">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## Preview

<img src="https://github.com/ariel-nathan/expedition-test/blob/master/assets/AppPreview.gif" width="200" alt="The mobile version of the login UI" /> | <img src="https://github.com/ariel-nathan/expedition-test/blob/master/assets/MapScreen.png" width="200" alt="The mobile version of the login UI" /> | <img src="https://github.com/ariel-nathan/expedition-test/blob/master/assets/ReceiptScreen.png" width="200" alt="The mobile version of the login UI" />

### Built With

- React Native
- Expo
- TypeScript
- Styled Components

<!-- GETTING STARTED -->

## My notes throughout the process

This was a pretty challenging and fun build to make. I had a lot of fun working on it, and I'm pretty happy with the result.

### Day 1:

I started with an empty project. I ran `expo init` and created a new project.

The project called to recreate a screen made in Figma. I wanted to take it a step further and challenge myself to create a mini app experience.

I broke it up into three stages:

1. The Map Screen
2. The Receipt Screen
3. The Camera Screen

The first issue to tackle was the Map screen.

#### Map Screen

- My vision for the Map Screen was a beautiful full screen map that centered on the users location.
- I wanted the user to be able to search for "parking" locations on the map.

I dove into the Expo docs and found out how to create a map using the MapView. I also found out how to use the MapView to center on the users location.

- this required getting the permissions of the user to access their location.

The next step was to create the search bar. I used a component that interacts with the Google Places API to suggest locations based on the user's input.

- I then had to handle the user's input and store their "parking" location in state.

Once the user selects a location to "park" at, an elegant white button with a small drop shadow appears at the bottom asking to confirm the location.

When the user confirms the location they are taken to the Receipt screen.

#### Receipt Screen

The receipt screen is a recreation of a Figma design I was given. I am very pleased with the result.

The first challenge I noticed when looking at the Figma document was the divider in the receipt.

It took me some time to think of a pretty clever way to accomplish this. By using two divs shaped as circles I was able to position them so that they created the receipt cutout.

I started by creating skeleton components of the receipt screen, such as the receipt itself, the header, and the camera button.

I started by spacing the skeleton components according to the design file in Figma, however I had to adjust some of the spacing to fit the simulator screen I was using (iPhone 12 Pro Max).

On day 1 I was able to space the components to my liking and created the base for the receipt screen.

### Day 2:

#### Receipt Screen

On day 2 I continued to work on the receipt screen. I started to implement the complexities of the receipt itself such as all the svg elements and the text. I was also able to use the users "parking" selection as the text by passing it through the state.

One of the other challenging parts was the Border in between the Start and End Dates. The reason for this was that the receipt divider had to be touching the border. I was able to use another clever styling trick to get over this issue however. I centered a div with a 1px width and added a negative margin to it to push it down to touch the border.

The last step to finish the receipt screen was to add all the svg elements to the skeleton components I had created and positioned.

#### Camera Screen

For the camera screen I wanted to follow the same design as the map screen and create a flawless full-screen camera experience.

I was able to achieve this using the expo-camera package.

I had to figure out how to store the image taken into state and then display it in a preview page.

At the end of the day I was able to create the camera screen and finish the assessment.

Overall I am very happy with the result and I am very proud of what I have created. It was fun challenge and taught me a lot.

### Prerequisites

Install the expo-cli

- npm
  ```sh
  npm install -g expo-cli
  ```

### Installation

1. Clone the repo

2. Install dependencies
   ```sh
   yarn install
   ```
3. Enter your Google API Key in `.env.example` and rename it to `.env`

   ```sh
   const GOOGLE_API_KEY="YOUR_API_KEY"
   ```
4. Start the prorject using expo
   ```sh
   expo start
   ```
   <p align="right">(<a href="#top">back to top</a>)</p>
