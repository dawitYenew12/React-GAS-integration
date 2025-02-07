# React-GAS Integration

This project demonstrates how to integrate a React app with Google Apps Script (GAS) and Google Sheets. The React app is deployed as a Google Apps Script web app, and it can be accessed from a dialog within Google Sheets.

## Features
- Display a React app inside Google Sheets via a modal dialog.
- Integrate Google Sheets data with a React frontend.
- Use Google Apps Script to manage sheet data and web app interactions.

## Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [Google Apps Script](https://script.google.com/) account.
- Basic knowledge of Google Sheets and Google Apps Script.

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/react-gas-integration.git
```
cd react-gas-integration

### 2. Install Dependencies

In your project folder, install the required npm packages:

```bash
npm install
```
### 3. deploy on apps script

```bash
npm run deploy
```
### Note
3. Google Apps Script Setup

Your GAS project should include the following files:

index.html
This file serves as the main template for your web app. It always contains the static content:

```bash
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <?!= HtmlService.createHtmlOutputFromFile('index.css.html').getContent(); ?>
  </head>
  <body>
    <div id="root"></div>
    <?!= HtmlService.createHtmlOutputFromFile('index.js.html').getContent(); ?>
  </body>
</html>

and your scripts
