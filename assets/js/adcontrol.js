// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdzrOq_aQ_DK7GE7hjHDMbBJlZ5Bh_m4g",
    authDomain: "lplinks-2024.firebaseapp.com",
    projectId: "lplinks-2024",
    storageBucket: "lplinks-2024.appspot.com",
    messagingSenderId: "881621858077",
    appId: "1:881621858077:web:be4d9e861aa0e2943853f4",
    measurementId: "G-73PSN36L7Y"
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
