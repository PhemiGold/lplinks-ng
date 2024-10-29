const firebaseConfig = {
  apiKey: "AIzaSyAqToeRUINNO6AIYaIS8QDUs2PjcCDQiHo",
  authDomain: "adlpl-8f445.firebaseapp.com",
  projectId: "adlpl-8f445",
  storageBucket: "adlpl-8f445.appspot.com",
  messagingSenderId: "713832026031",
  appId: "1:713832026031:web:a18668d4a309084706e95a",
  measurementId: "G-TLWWH9XNE9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to check and display ad
function checkAndDisplayAd() {
    const adURLRef = database.ref('adURL');

    adURLRef.once('value')
        .then(snapshot => {
            const adURL = snapshot.val(); // Get the adURL from Firebase

            // Reference to the ad-container and image elements
            const adContainer = document.getElementById('ad-container');
            const adImage = adContainer.querySelector('.centered-image');

            if (adURL) {
                // If adURL is not empty, display the ad-container and set the image source
                adImage.src = adURL;
                adContainer.style.display = 'flex';
                adImage.alt = 'notice'; // Optional: Add an alt text for the image
            } else {
                // If adURL is empty, hide the ad-container
                adContainer.style.display = 'none';
                console.log("No Ad!")
            }
        })
        .catch(error => {
            console.error('Error fetching adURL:', error);
        });
}

// Run the check 5 seconds after the window loads
window.addEventListener('load', () => {
    setTimeout(checkAndDisplayAd, 5000); // 5000 milliseconds = 5 seconds
});

// Function to close the ad container
function closeDiv() {
    const adContainer = document.getElementById('ad-container');
    adContainer.style.display = 'none';
}
