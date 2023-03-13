// Define the `currentUser` variable
const currentUser = "John Doe";

// Define the `welcomeMessage` variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define the `excitedWelcomeMessage` variable
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Define the `shortGreeting` variable
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

// Run Mocha tests
mocha.run();
