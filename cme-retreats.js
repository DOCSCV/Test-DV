const cmeOpportunities = [
    {
      title: 'CME Conference - Waikiki, Hawaii - Dec 4-7, 2024',
      description: 'Hospital Medicine Update - LIVE STREAM',
      price: '$995.00 USD',
      link: 'https://cmevacations.com/products/copy-of-cme-conference-san-diego-california-dec-11-14-2024-outpatient-medicine-update-1',
      details: `
          <p>Learn the latest advancements in hospital medicine.</p>
          <p>Network with colleagues and experts in a tropical paradise.</p>
        `
    },
    {
      title: 'CME Conference - Waikiki, Hawaii - April 9-12, 2025',
      description: 'Outpatient Medicine Update',
      price: '$1,095.00 USD',
      link: 'https://cmevacations.com/products/cme-conference-waikiki-hawaii-dec-4-7-2024-hospital-medicine-update-streamline', 
      details: `
          <p>Enhance your outpatient skills with expert-led sessions.</p> 
          <p>Explore the vibrant city of Waikiki during your free time.</p> 
        `
    },
    {
      title: 'CME Conference - Waikiki, Hawaii - Dec 3-6, 2025',
      description: 'Hospital Medicine Update',
      price: '$1,095.00 USD',
      link: 'https://cmevacations.com/products/copy-of-cme-conference-waikiki-hawaii-april-9-12-2025-outpatient-medicine-update', 
      details: `
          <p>Stay at the forefront of hospital medicine with this cutting-edge conference.</p> 
          <p>Gain valuable knowledge and CME credits in a breathtaking setting.</p> 
        `
    }
    // ... add more CME opportunities as needed
  ];
  
  // Function to display CME results
  function displayCmeResults() {
    const resultsContainer = document.getElementById('cme-results');
    resultsContainer.innerHTML = ''; // Clear previous results
  
    // TODO: Filter cmeOpportunities based on user input (from the form)
  
    // For now, display all opportunities (simulation)
    cmeOpportunities.forEach(cme => {
      // Create a new div for each CME opportunity
      const cmeDiv = document.createElement('div');
      cmeDiv.className = 'cme-opportunity'; // Add a class for styling if needed
  
      // Construct the HTML content for the CME opportunity (without the <img> tag)
      const cmeElement = `
          <h3>${cme.title}</h3>
          <p>${cme.description}</p>
          <p class="price">${cme.price}</p>
          ${cme.details} 
          <a href="${cme.link}" target="_blank" class="btn btn-primary">Learn More</a> 
        `;
  
      // Add the HTML content to the div
      cmeDiv.innerHTML = cmeElement;
  
      // Append the div to the results container
      resultsContainer.appendChild(cmeDiv);
    });
  }
  
  // ... (rest of your JavaScript code) ...
  
  // Form submission handler 
  const cmeForm = document.getElementById('cme-form');
  cmeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    displayCmeResults(); // Call the function to display results on submit
  });
  
  // --- Rating Stars Functionality ---
  const ratingStars = document.querySelectorAll('.rating-stars i');
  
  ratingStars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.dataset.rating;
      // TODO: Use this rating value to filter CME results
      console.log("Selected rating:", rating);
  
      // Update star appearance (optional):
      star.classList.toggle('selected');
    });
  });
  
  // --- "All Ratings" Button Functionality ---
  const showAllRatingsButton = document.getElementById('show-all-ratings');
  
  showAllRatingsButton.addEventListener('click', () => {
    // TODO: Add logic to select all ratings
    console.log("Show all ratings clicked");
  });