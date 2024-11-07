const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(otherLink => {
      otherLink.classList.remove('active');
    });
    this.classList.add('active');
  });
});

const fetchJobsBtn = document.getElementById('fetchJobsBtn');
const jobListings = document.getElementById('jobListings');

fetchJobsBtn.addEventListener('click', () => {
  // Show loading state
  fetchJobsBtn.disabled = true;
  fetchJobsBtn.innerText = "Loading...";

  // Simulate API call with a delay (for testing purposes)
  setTimeout(() => {
    // Reset button state
    fetchJobsBtn.disabled = false;
    fetchJobsBtn.innerText = "Show Job Offers";

    // Clear previous job listings
    jobListings.innerHTML = '';

    // Generate dummy job listings with relevance and details
    const dummyJobs = [
      {
        title: "Family Medicine Physician",
        practice: "Boulder Community Health",
        city: "Fort Collins",
        state: "CO",
        url: "#",
        relevance: 100,
        details: `
          <p><b>Work Balance:</b></p>
          <p>Excellent work-life balance: 4-day week, 12-16 patients daily, flexible schedule with a floating day, and on-call one week every six months.</p>
          <p><b>Supportive team environment:</b></p>
          <p>Each provider is paired with an AARP nurse and has access to advanced AI for documentation. With specialists on staff and a large network of doctors, support is always available.</p>
          <p><b>Educational & Career Development:</b></p>
          <p>We support continuous skill refinement for our physicians, providing up to <span class="salary-amount">$5,000</span> annually for CME and 7 days PTO.</p>
          <p><b>Compensation:</b></p>
          <p>Competitive package with a <span class="salary-amount">$275,000</span> base salary (first two years), <span class="salary-amount">$75,000</span> sign-on bonus, up to <span class="salary-amount">$100,000</span> in student loan assistance, <span class="salary-amount">$10,000</span> relocation support, <span class="salary-amount">$15,000</span> retention bonus, and 10% annual quality bonus for the first four years.</p>
        `
      },
      {
        title: "Family Medicine Physician",
        practice: "Denver Health",
        city: "Denver",
        state: "CO",
        url: "#",
        relevance: 95,
        details: `
          <p><b>Work-life balance:</b></p>
          <p>Flexible schedule with 3-day weekends, minimal call responsibilities, and focus on outpatient care.</p>
          <p><b>Supportive environment:</b></p>
          <p>Collaborative team with experienced nurses and physician assistants. Access to specialists within the network.</p>
          <p><b>Educational opportunities:</b></p>
          <p><span class="salary-amount">$4,000</span> annual CME allowance and 5 days of dedicated CME time. Opportunities for leadership roles.</p>
          <p><b>Compensation:</b></p>
          <p>Competitive salary and benefits package, including loan repayment options and a <span class="salary-amount">$60,000</span> sign-on bonus.</p>
        `
      },
      {
        title: "Family Medicine Physician",
        practice: "UCHealth",
        city: "Colorado Springs",
        state: "CO",
        url: "#",
        relevance: 90,
        details: `
          <p><b>Work-life balance:</b></p>
          <p>4.5-day work week with shared call responsibilities. Primarily outpatient care with opportunities for telehealth.</p>
          <p><b>Supportive environment:</b></p>
          <p>Strong team-based approach with integrated behavioral health services. Access to a multidisciplinary team.</p>
          <p><b>Educational opportunities:</b></p>
          <p><span class="salary-amount">$3,500</span> annual CME allowance and 4 days of dedicated CME time. Opportunities for professional development.</p>
          <p><b>Compensation:</b></p>
          <p>Competitive salary and benefits package, including retirement plan and malpractice insurance.</p>
        `
      },
      {
        title: "Family Medicine Physician",
        practice: "OhioHealth",
        city: "Columbus",
        state: "OH",
        url: "#",
        relevance: 85,
        details: `
          <p><b>Work-life balance:</b></p>
          <p>Standard 5-day work week with optional weekend shifts. Primarily outpatient care with a manageable patient load.</p>
          <p><b>Supportive environment:</b></p>
          <p>Friendly and supportive team environment with opportunities for mentorship. Access to a network of specialists.</p>
          <p><b>Educational opportunities:</b></p>
          <p><span class="salary-amount">$3,000</span> annual CME allowance and 3 days of dedicated CME time. Opportunities for professional growth.</p>
          <p><b>Compensation:</b></p>
          <p>Competitive salary and benefits package, including health insurance and paid time off.</p>
        `
      },
      {
        title: "Family Medicine Physician",
        practice: "Cleveland Clinic",
        city: "Cleveland",
        state: "OH",
        url: "#",
        relevance: 80,
        details: `
          <p><b>Work-life balance:</b></p>
          <p>5-day work week with some call responsibilities. Mix of outpatient and inpatient care.</p>
          <p><b>Supportive environment:</b></p>
          <p>Large, well-established healthcare system with a focus on patient care and research. Opportunities for collaboration.</p>
          <p><b>Educational opportunities:</b></p>
          <p><span class="salary-amount">$2,500</span> annual CME allowance and 2 days of dedicated CME time. Access to a variety of training programs.</p>
          <p><b>Compensation:</b></p>
          <p>Competitive salary and benefits package, including retirement plan and malpractice insurance.</p>
        `
      }
    ];

    // Display the dummy job listings
    dummyJobs.forEach(job => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job-listing');
      jobElement.style.marginBottom = "20px";

      jobElement.innerHTML = `
        <h4>${job.title} - Relevance: ${job.relevance}%</h4> 
        ${job.details}
        <p>${job.practice} - ${job.city}, ${job.state}</p>
        <a href="${job.url}" target="_blank">View Job</a>
      `;
      jobListings.appendChild(jobElement);
    });
  }, 1000);
});

// ... (generateDummyJobs function remains the same)
function generateDummyJobs(count) {
  const jobs = [];
  const practices = ["Denver Health", "UCHealth", "Boulder Community Health", "OhioHealth", "Cleveland Clinic"];
  const cities = ["Denver", "Colorado Springs", "Boulder", "Aurora", "Fort Collins", "Columbus", "Cleveland", "Cincinnati"];
  const states = ["CO", "OH"];

  for (let i = 0; i < count; i++) {
    const practice = practices[Math.floor(Math.random() * practices.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const state = states[Math.floor(Math.random() * states.length)];

    // Calculate relevance score (simulated)
    let relevance = 100 - (i * 5);
    if (state === "CO") {
      relevance += 10;
    }
    relevance = Math.min(relevance, 100); // Ensure relevance doesn't exceed 100

    // Add salary, bonus, and loan repayment details
    const salary = 275000 + (Math.random() * 50000);
    const bonus = 50000 + (Math.random() * 25000);
    const loanRepayment = 100000 + (Math.random() * 50000);

    jobs.push({
      title: "Family Medicine Physician",
      practice: practice,
      city: city,
      state: state,
      url: "#",
      relevance: relevance,
      salary: Math.round(salary),
      bonus: Math.round(bonus),
      loanRepayment: Math.round(loanRepayment)
    });
  }

  return jobs;
}