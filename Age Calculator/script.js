// get the required elements from the DOM

const birthDateInput = document.getElementById("birthdate");
const calculateButton = document.getElementById("calculate-btn");
const resultElement = document.getElementById("result");

// Add click event listener to the calculate button

calculateButton.addEventListener("click", calculateAge);

// Function to calculate the age

function calculateAge() {
  const birthdate = new Date(birthDateInput.value);
  const today = new Date();

  // calculate the age
  const ageInMilliSeconds = today - birthdate;
  const ageInYears = Math.floor(
    ageInMilliSeconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  // Display the result
  if (ageInYears >= 0) {
    resultElement.textContent = `You are ${ageInYears} years old!`;
  } else {
    resultElement.textContent = "Not Valid Input";
  }
}
