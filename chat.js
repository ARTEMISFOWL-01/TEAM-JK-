// Simulated database to store user information
const users = [];

// Current user variable
let currentUser;

// Function to switch between login, signup, and profile pages
function showPage(pageId) {
  const pages = ['loginPage', 'signupPage', 'profilePage'];
  pages.forEach(page => {
    document.getElementById(page).style.display = (page === pageId) ? 'block' : 'none';
  });
}

// Event listener for signup link
document.getElementById('signupLink').addEventListener('click', function(event) {
  event.preventDefault();
  showPage('signupPage');
});

// Event listener for login link
document.getElementById('loginLink').addEventListener('click', function(event) {
  event.preventDefault();
  showPage('loginPage');
});

// Event listener for signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  // Create new user object and add to the database
  const newUser = { username: newUsername, password: newPassword, displayName: newUsername, bio: '' };
  users.push(newUser);
  alert('Account created successfully! Please login.');
  showPage('loginPage');
});

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Check if username and password match any user in the database
  currentUser = users.find(user => user.username === username && user.password === password);
  if (currentUser) {
    // Show profile page and display user information
    document.getElementById('currentUser').innerText = currentUser.displayName;
    document.getElementById('displayName').value = currentUser.displayName;
    document.getElementById('bio').value = currentUser.bio;
    showPage('profilePage');
  } else {
    alert('Invalid username or password. Please try again.');
  }
});

// Event listener for logout button
document.getElementById('logoutButton').addEventListener('click', function() {
  showPage('loginPage');
});

// Event listener for profile form submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const newDisplayName = document.getElementById('displayName').value;
  const newBio = document.getElementById('bio').value;
  // Update current user's display name and bio
  currentUser.displayName = newDisplayName;
  currentUser.bio = newBio;
  document.getElementById('currentUser').innerText = newDisplayName;
  alert('Profile updated successfully!');
});

// Event listener for message form submission
document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const message = document.getElementById('message').value;
  // Display the message in the message container
  const messageElement = document.createElement('div');
  messageElement.innerText = currentUser.displayName + ': ' + message;
  document.getElementById('messageContainer').appendChild(messageElement);
  // Clear the message input field
  document.getElementById('message').value = '';
});