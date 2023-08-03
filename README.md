# Animated Project ( Pupil Movement Project )

<img width="800" alt="Screenshot 2023-07-22 195150" src="https://github.com/shitanshuk32/Animated-Eye/assets/86796224/1726cff7-3a96-4c60-94fa-b626eebed099">

## Overview

This project allows pupils' positions to follow the mouse movement within a specific range on an interactive webpage. The pupils are represented as HTML elements with the class name 'pupil'. As the user moves the mouse horizontally and vertically, the pupils will move accordingly within the defined range.

## Getting Started

To use this project, include the provided JavaScript code in your HTML file. The pupils' elements must have the class name 'pupil' to be detected and manipulated by the script.

## How it Works

The JavaScript code provided in `file.js` is responsible for handling the mouse movement and adjusting the pupils' positions accordingly. Here's a brief explanation of the key variables used:

- `pupils`: A collection of all elements with the class name 'pupil'.
- `pupilsArr`: An array converted from the `pupils` collection for easier manipulation.
- `pupilStartPoint`: The initial position of the pupils, set to -100 pixels from the top-left corner.
- `pupilRange`: The range of movement for the pupils, allowing them to move 200 pixels from their starting position.
- `mouseXStartPoint`: The starting position of the mouse along the X-axis, set to 0.
- `mouseXEndPoint`: The ending position of the mouse along the X-axis, which is the window's inner width.
- `currentXPosition`: The current X position of the mouse relative to the `mouseXStartPoint`.
- `fracXValue`: The fraction of how far the mouse has moved along the X-axis compared to the whole range.
- `mouseYEndPoint`: The ending position of the mouse along the Y-axis, which is the window's inner height.
- `Current position`: The current Y position of the mouse.
- `fracYValue`: The fraction of how far the mouse has moved along the Y-axis compared to the whole range.
- `mouseXRange`: The range of the mouse movement along the X-axis, calculated as the difference between `mouseXEndPoint` and `mouseXStartPoint`.

The `mouseMove` function is called whenever the user moves the mouse, updating the pupils' positions based on the mouse movement.

When the window is resized, the `windowResize` function is called, updating the `mouseXEndPoint` and `mouseYEndPoint` values to match the new window size.

## Compatibility

This project uses vanilla JavaScript and should work on most modern web browsers. It does not have any external dependencies.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

This project was inspired by various interactive web designs found across the internet.

Feel free to modify and adapt this project to suit your needs! Happy coding!
