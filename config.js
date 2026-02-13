// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "My baby Lori", // Your Valentine's name pageTitle: "Will You Be My Valentine? 💝", // Browser tab title // Floating Background Elements floatingEmojis: { hearts: ['❤️', '💖', '💝', '💗', '💓'], // Heart emojis in background bears: ['😽', '🐻'] // Bear/Cat emojis in background }, // Questions and Buttons questions: { first: { text: "Do you like me?", yesBtn: "Yes", noBtn: "No", secretAnswer: "I don't like you, I love you! ❤️" }, second: { text: "How much do you love me?", startText: "This much!", nextBtn: "Next ❤️" }, third: { text: "Will you be my Valentine?", yesBtn: "Yes!", noBtn: "No" } }, // Love Meter Messages loveMessages: { extreme: "hihihihihihihi 🥰🚀💝", // Shows above 5000% high: "To infinity and beyond! 🚀💝", normal: "And beyond! 🥰" }, // Final Celebration celebration: { title: "Guess who's the luckiest person... Me🤭", message: "I love you to the moon and back! 🌙✨", // Fixed: Added text here emojis: "🎁💖🤗💝💋❤️💕" }, // Website Colors colors: { backgroundStart: "#ffafbd", backgroundEnd: "#ffc3a0", buttonBackground: "#ff6b6b", buttonHover: "#ff8787", textColor: "#ff4757" }, // Animation Settings animations: { floatDuration: "15s", floatDistance: "50px", bounceSpeed: "0.5s", heartExplosionSize: 1.5 }, // Music Settings music: { enabled: false, // Set to true if you have a music link autoplay: true, musicUrl: "", startText: "🎵 Play Music", stopText: "🔇 Stop Music", volume: 0.5 } };

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
