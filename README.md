# Is-This-Food

**Is-This-Food** is an ML-powered web application that analyzes an uploaded image to determine whether it contains any food items. Using an efficient TensorFlow Lite model, this tool provides a quick and intuitive way to check if a given photo consists of food.

[View the Live Demo](https://isthisfood.vercel.app)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

Is-This-Food is designed to provide an easy-to-use interface for detecting food in images. Whether you're curious about your latest photo or want to build a food-related application, this project demonstrates how to leverage machine learning in a user-friendly web app.

---

## Features

- **ML-Based Food Detection:**  
  Uses a pre-trained TensorFlow Lite model (EfficientNet) to determine if an image contains food.

- **Simple, Clean Interface:**  
  A straightforward UI built with HTML, CSS, and JavaScript that makes image upload and result display intuitive.

- **Responsive Design:**  
  Works seamlessly on desktop and mobile browsers.

- **Live Demo:**  
  Try out the app instantly via our live demo hosted on Vercel.

---

## How It Works

1. **Image Upload:**  
   Users can select an image from their device to analyze.

2. **Preprocessing:**  
   The uploaded image is preprocessed (resized and normalized) to meet the input requirements of the model.

3. **Inference:**  
   The TensorFlow Lite model, based on EfficientNet, processes the image to determine the presence of food.

4. **Result Display:**  
   The app displays the prediction result along with confidence scores, letting users know if food was detected.

For more technical details, refer to the accompanying Jupyter Notebook (`data_exploration _01.ipynb`) which outlines our model training and exploration process.

---

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rohan-patnaik/Is-This-Food.git
   cd Is-This-Food
   ```

2. **Install Dependencies:**
   If you plan to run the app locally using a simple web server, you may use:
   ```bash
   npm install
   ```
   or simply open `index.html` in your browser for a static preview.

3. **Set Up a Local Server (Optional):**
   You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VSCode or run:
   ```bash
   npx http-server
   ```
   to serve the project files on a local port.

---

## Usage

1. **Open the Application:**
   - Open `index.html` directly in your browser or run it via your local server.

2. **Upload an Image:**
   - Use the provided interface to upload a photo from your device.

3. **View Results:**
   - The application will process the image and display whether food items are detected, along with any relevant confidence metrics.

4. **Experiment:**
   - Try different images and see how the model performs on various food and non-food images.

---


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **TensorFlow Lite & EfficientNet:**  
  Thanks to the contributors of TensorFlow Lite and EfficientNet for providing powerful tools to run ML models on edge devices.

- **Vercel:**  
  For hosting the live demo and making deployment simple.

---

