# Reydar Platform - Model Viewer

## Overview

Web based viewer for 3D models. Displays GLTF/GLB models using Google's model-viewer component. Built using React.

### Staging

https://staging.reybeam.reydar.com

### Production

https://reybeam.reydar.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Query Parameters

### `config_uuid`

Configuration file UUID.

### `show_hotspots`

On load default to 'Explore' mode.

### `product`

Index of default product relative to 'products' array in config file (must be used in conjunction with `variant`).

### `variant`

Index of default variant (must be used in conjunction with `product`).

### `ga_id`

Google Analytics (GA4) measurement ID. Connects ReyBeam as a data stream to GA.

## Viewer Configuration

Viewer parses a configuration file to load in models and customise the UI. Configurations are to be built and deployed via ReyEngine backend.

**_Example config:_**

```
{
   "uuid": "fd9c981e-ee59-11ec-8ea0-0242ac120002",
   "background-environment": "neutral",
   "background-color": "radial-gradient(#adadad, #ececec)",
   "brand-color": "#ff6600",
   "hotspot-color": "#ff6600",
   "show-watermark": true,
   "show-title": true,
   "auto-rotate": true,
   "auto-rotate-speed": "300%",
   "actions": {
      "ar": true,
      "view": true,
      "share": true,
      "explore": true,
      "fullscreen": true,
      "information": true
   },
   "products": [
      {
         "uuid": "2148f749-166b-45a2-9bd0-cd2f965712c1",
         "name": "Laptop",
         "brand": "Hewlett-Packard",
         "variants": [
            {
               "uuid": "a9231662-3f9f-4b46-9e99-fd987b134bd1",
               "variant-name": "Open",
               "description": "",
               "price": "",
               "glb": "a9231662-3f9f-4b46-9e99-fd987b134bd1.glb",
               "gltf": "",
               "usdz": "a9231662-3f9f-4b46-9e99-fd987b134bd1.usdz",
               "thumbnail": "a9231662-3f9f-4b46-9e99-fd987b134bd1.jpg",
               "hotspots": [
                  {
                     "id": "1",
                     "position": {
                        "x": "0.10943167557009126m",
                        "y": "0.09503732154016681m",
                        "z": "-0.13505512588996715m"
                     },
                     "normal": {
                        "x": "0m",
                        "y": "0.15695047289190772m",
                        "z": "0.9876064747960123m"
                     },
                     "content-type": "text",
                     "content": "OLED Screen"
                  },
                  {
                     "id": "2",
                     "position": {
                        "x": "0.07572110965622553m",
                        "y": "0.014915685169398785m",
                        "z": "-0.034167796988096244m"
                     },
                     "normal": {
                        "x": "0m",
                        "y": "1m",
                        "z": "0m"
                     },
                     "content-type": "text",
                     "content": "Butterfly Keyboard"
                  }
               ]
            },
            {
               "uuid": "945b9faf-49ed-4fa4-9d3f-30f72fafed0f",
               "variant-name": "Closed",
               "description": "",
               "price": "",
               "glb": "945b9faf-49ed-4fa4-9d3f-30f72fafed0f.glb",
               "gltf": "",
               "usdz": "945b9faf-49ed-4fa4-9d3f-30f72fafed0f.usdz",
               "thumbnail": "945b9faf-49ed-4fa4-9d3f-30f72fafed0f.jpg"
            }
         ]
      }
   ]
}
```
