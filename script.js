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
          <p><b>Work Balance:</b> 4-day week, 12-16 patients daily, flexible schedule, on-call 1 week/6 months.</p> 
          <p><b>Supportive Team:</b> AARP nurse, AI documentation, specialists, large doctor network.</p> 
          <p><b>Development:</b> <b>$5k</b> CME annually, 7 days PTO.</p> 
          <p><b>Compensation:</b> <b>$275k</b> base (2 yrs), <b>$75k</b> sign-on, up to <b>$100k</b> loan assist, <b>$10k</b> relocation, <b>$15k</b> retention, 10% quality bonus (4 yrs).</p>
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
          <p><b>Work-life balance:</b> Flexible schedule, 3-day weekends, minimal call, outpatient focus.</p>
          <p><b>Support:</b> Collaborative team, experienced nurses, PAs, specialist access.</p>
          <p><b>Development:</b> <b>$4k</b> CME allowance, 5 days CME time, leadership opportunities.</p>
          <p><b>Compensation:</b> Competitive salary & benefits, loan repayment, <b>$60k</b> sign-on bonus.</p>
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
          <p><b>Work-life balance:</b> 4.5-day week, shared call, outpatient focus, telehealth options.</p>
          <p><b>Support:</b> Team-based approach, integrated behavioral health, multidisciplinary team access.</p>
          <p><b>Development:</b> <b>$3.5k</b> CME allowance, 4 days CME time, professional development.</p>
          <p><b>Compensation:</b> Competitive salary & benefits, retirement plan, malpractice insurance.</p>
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
          <p><b>Work-life balance:</b> 5-day week, optional weekend shifts, outpatient focus, manageable patient load.</p>
          <p><b>Support:</b> Friendly team, mentorship, specialist network access.</p>
          <p><b>Development:</b> <b>$3k</b> CME allowance, 3 days CME time, professional growth.</p>
          <p><b>Compensation:</b> Competitive salary & benefits, health insurance, PTO.</p>
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
          <p><b>Work-life balance:</b> 5-day week, some call, outpatient/inpatient mix.</p>
          <p><b>Support:</b> Large healthcare system, patient care focus, research, collaboration.</p>
          <p><b>Development:</b> <b>$2.5k</b> CME allowance, 2 days CME time, training programs.</p>
          <p><b>Compensation:</b> Competitive salary & benefits, retirement plan, malpractice insurance.</p>
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
                <div class="job-details">${job.details}</div> 
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