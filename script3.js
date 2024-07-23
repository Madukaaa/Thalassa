// Define your prompts in an array of objects
const prompts = [
    { category: "Personal Details", prompt: "Enter your name:" },
    { category: "Personal Details", prompt: "Enter your age:" },
    { category: "Personal Details", prompt: "Select your gender:" },
    { category: "Home Address", prompt: "Enter your home address:" },
    { category: "Home Address", prompt: "Enter your email:" },
    { category: "Home Address", prompt: "Enter your contact number:" },
    { category: "Qualifications", prompt: "Ever experienced a cleanwater crisis (yes/no):" },
    { category: "Qualifications", prompt: "Current Thoughts about clean water:" },
    { category: "Qualifications", prompt: "Do You use a Cleaner to clean your water (yes/no):" },
    { category: "Detail Verification", prompt: "Any inovative ideas about Cleaning unpure water?:" },
    { category: "Detail Verification", prompt: "How clean water in your area(From scale of 1 to 10):" },
    { category: "Detail Verification", prompt: "Will you recomend our site to a friend?:" }
];

let currentStep = 0; // Current step in the form
const totalSteps = prompts.length; // Total number of steps

// Function to display prompts for the current step
function displayPrompt(step) {
    const promptContainer = document.getElementById('prompt-container');
    promptContainer.innerHTML = ''; // Clear previous prompt

    const label = document.createElement('label');
    label.textContent = prompts[step].prompt;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `prompt-${step}`);
    promptContainer.appendChild(label);
    promptContainer.appendChild(input);

    updateProgress();
}

// Function to update progress bar and text
function updateProgress() {
    const progressPercent = ((currentStep + 1) / totalSteps) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercent}%`;

    const progressText = document.getElementById('progress-text');
    progressText.textContent = `Profile Completion: ${progressPercent.toFixed(0)}%`;
}

// Function to handle the next button click
function nextPrompt() {
    const inputValue = document.getElementById(`prompt-${currentStep}`).value;
    const profileOutput = document.getElementById('profile-output');
    const paragraph = document.createElement('p');
    paragraph.textContent = `${prompts[currentStep].prompt} ${inputValue}`;
    profileOutput.appendChild(paragraph);

    if (currentStep < totalSteps - 1) {
        currentStep++;
        displayPrompt(currentStep);
    } else {
        // Handle form completion
        document.getElementById('prompt-container').innerHTML = '';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('skip-button').style.display = 'none';
        document.getElementById('back-button').style.display = 'none';
        displayProfileCompletion();
    }
}

// Function to handle the back button click
function prevPrompt() {
    if (currentStep > 0) {
        currentStep--;
        displayPrompt(currentStep);
    }
}

// Function to handle the skip button click
function skipPrompt() {
    if (currentStep < totalSteps - 1) {
        currentStep++;
        displayPrompt(currentStep);
    } else {
        // Handle form completion
        document.getElementById('prompt-container').innerHTML = '';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('skip-button').style.display = 'none';
        document.getElementById('back-button').style.display = 'none';
        displayProfileCompletion();
    }
}

// Initial call to display the first prompt
displayPrompt(currentStep);
