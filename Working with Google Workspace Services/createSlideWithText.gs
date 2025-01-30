function createSlideWithText() {
const presentation = SlidesApp.create("My First Presentation");
const slide = presentation.getSlides()[0];

slide.insertTextBox("Hello from Slides!", 50, 50, 300, 100);
Logger.log("Presentation Created: " + presentation.getUrl());
}