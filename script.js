const kindnessActs = [
    "Compliment a stranger and make their day.",
    "Donate to a local charity or organization.",
    "Write a heartfelt letter to a friend or family member.",
    "Offer to help someone with their chores or errands.",
    "Plant a tree or flowers in a public space.",
    "Pay for someone's meal or coffee anonymously.",
    "Volunteer your time at a local community center.",
    "Send a positive message to someone you haven't talked to in a while.",
    "Leave an uplifting note in a public place for someone to find.",
    "Bake cookies or treats and share them with your neighbors."
];

function generateRandomAct() {
    const kindnessActElement = document.getElementById("kindness-act");
    const randomIndex = Math.floor(Math.random() * kindnessActs.length);
    const randomAct = kindnessActs[randomIndex];
    kindnessActElement.textContent = randomAct;

    // Reset the "Great Job" message
    document.getElementById("great-job-message").textContent = "";
}

function logKindness() {
    const kindnessStreakElement = document.getElementById("kindness-streak");
    let kindnessStreak = parseInt(localStorage.getItem("kindnessStreak")) || 0;

    // Increment the kindness streak
    kindnessStreak++;
    localStorage.setItem("kindnessStreak", kindnessStreak);

    // Display the streak
    kindnessStreakElement.textContent = `Kindness Streak: ${kindnessStreak}`;
    
    // Show "Great Job" message
    document.getElementById("great-job-message").textContent = "Great Job today!";
}
