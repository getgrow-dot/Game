// Slot Machine Logic (same as before)
function spinSlots() {
    // Get the selected bet amount
    const betAmount = document.getElementById('bet-amount').value;
    const betDisplay = document.getElementById('bet-display');
    betDisplay.textContent = betAmount + " PKR"; // Display the selected bet

    // You can add logic to handle what happens with the bet here
    // For now, we'll just show an alert with the bet amount
    alert(`You are betting: ${betAmount} PKR`);

    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    const fruits = ['🍒', '🍋', '🍊', '🍇', '7️⃣']; // List of fruit symbols

    // Function to shuffle symbols randomly
    function shuffleSymbols(slot) {
        const symbols = slot.querySelectorAll('.symbol');
        const randomIndex = Math.floor(Math.random() * symbols.length); // Get random index for symbol shuffle
        return symbols[randomIndex].textContent;
    }

    // Add the 'shuffling' class to all slots to start the spin
    slot1.classList.add('shuffling');
    slot2.classList.add('shuffling');
    slot3.classList.add('shuffling');

    // Update the symbols to shuffle during spin
    const shuffleInterval = setInterval(() => {
        slot1.querySelector('.symbol').textContent = shuffleSymbols(slot1);
        slot2.querySelector('.symbol').textContent = shuffleSymbols(slot2);
        slot3.querySelector('.symbol').textContent = shuffleSymbols(slot3);
    }, 100); // Shuffle every 100ms

    // After 3 seconds, stop the shuffle and show the final result
    setTimeout(() => {
        clearInterval(shuffleInterval);  // Stop the shuffle
        // Remove the 'shuffling' class to stop the animation and show the result
        slot1.classList.remove('shuffling');
        slot2.classList.remove('shuffling');
        slot3.classList.remove('shuffling');

        // Optionally, add a 'stopped' class to remove animations
        slot1.classList.add('stopped');
        slot2.classList.add('stopped');
        slot3.classList.add('stopped');

        // Get the final symbols that will be displayed in the slot
        const result1 = slot1.querySelector('.symbol').textContent;
        const result2 = slot2.querySelector('.symbol').textContent;
        const result3 = slot3.querySelector('.symbol').textContent;

        // Check if all three slots are the same
        if (result1 === result2 && result2 === result3) {
            alert("You Win!");
        } else {
            alert("Try Again!");
        }
    }, 3000); // 3000ms (3 seconds) for the spinning effect
}

// Bet Amount Display Logic (same as before)
const betAmountInput = document.getElementById('bet-amount');
const betDisplay = document.getElementById('bet-display');

// Update the displayed bet amount as the user adjusts the slider
betAmountInput.addEventListener('input', () => {
    betDisplay.textContent = betAmountInput.value + " PKR";
});

// Deposit Info Logic (same as before)
function showDepositInfo() {
    const depositInfo = document.getElementById('deposit-info');
    depositInfo.style.display = 'block';  // Show the deposit info when the button is clicked

    // Show the upload section after the deposit info is shown
    const uploadSection = document.querySelector('.upload-section');
    uploadSection.style.display = 'block';
}

// Withdraw Logic (same as before)
function showWithdrawForm() {
    const withdrawForm = document.getElementById('withdraw-form');
    withdrawForm.style.display = 'block';  // Show withdraw form
}

function cancelWithdraw() {
    const withdrawForm = document.getElementById('withdraw-form');
    withdrawForm.style.display = 'none';  // Hide withdraw form
}

function submitWithdraw() {
    const accountNumber = document.getElementById('account-number').value;
    const accountTitle = document.getElementById('account-title').value;

    // Simple validation to ensure both fields are filled
    if (!accountNumber || !accountTitle) {
        alert("Please enter both Account Number and Account Title.");
        return;
    }

    // If validation is successful, show confirmation message
    alert(`Withdrawal requested for Account Number: ${accountNumber} \nAccount Title: ${accountTitle}`);

    // Hide withdraw form after submission
    cancelWithdraw();
}

// Preview the uploaded screenshot
function previewScreenshot(event) {
    const screenshotPreview = document.getElementById('screenshot-preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result; // Set the src to the file's data
            screenshotPreview.innerHTML = ''; // Clear previous previews
            screenshotPreview.appendChild(img); // Display the image
        };

        reader.readAsDataURL(file);
    }
}
