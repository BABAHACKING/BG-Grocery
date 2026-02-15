// Firebase Configuration for Baba-grocery
const firebaseConfig = {
    apiKey: "AIzaSyDDBQc5aTHFiAgTSVPzaXwU_uvBP5DHZJY",
    authDomain: "baba-grocery-c8b68.firebaseapp.com",
    projectId: "baba-grocery-c8b68",
    storageBucket: "baba-grocery-c8b68.firebasestorage.app",
    messagingSenderId: "57388917750",
    appId: "1:57388917750:web:e3221506b0f8932f325dd7",
    measurementId: "G-NJNLZMJQS3"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    console.log("🔥 Firebase Backend Live: Connected to Baba-grocery");

    // Make db globally accessible for our other scripts
    window.db = db;
} else {
    console.error("Firebase SDK not loaded. Ensure scripts are included in HTML.");
}
