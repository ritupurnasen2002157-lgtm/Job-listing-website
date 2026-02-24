     tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8'
                        },
                        secondary: {
                            500: '#10b981',
                            600: '#059669'
                        },
                        neutral: {
                            50: '#f9fafb',
                            100: '#f3f4f6',
                            700: '#374151',
                            800: '#1f2937',
                            900: '#111827'
                        }
                    },
                    fontFamily: {
                        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif']
                    },
                    spacing: {
                        '18': '4.5rem',
                        '88': '22rem'
                    }
                }
            }
        }

        // Data Layer
        const jobListingsData = [
            {
                id: 1,
                title: "Senior Frontend Developer",
                company: "Infosys Technologies Ltd.",
                location: "Bangalore, Karnataka",
                category: "technology",
                experience: "Senior (5-8 years)",
                salary: "₹18,00,000 - ₹28,00,000 per annum",
                type: "Full-time",
                locationType: "Hybrid",
                description: "We are looking for a highly skilled Senior Frontend Developer to join our dynamic product engineering team. You will be responsible for developing scalable and high-performance web applications using React.js, TypeScript, and modern UI frameworks. The ideal candidate should have strong problem-solving skills and experience working in agile environments.",
                requirements: [
                    "5+ years of experience in React.js development",
                    "Strong proficiency in TypeScript and JavaScript (ES6+)",
                    "Experience with modern CSS frameworks like Tailwind or Bootstrap",
                    "Good understanding of RESTful APIs and integration",
                    "Experience with Git and CI/CD pipelines",
                    "Strong knowledge of performance optimization techniques"
                ],
                date: "2026-02-20",
                remote: true
            },
            {
                id: 2,
                title: "Product Manager",
                company: "Flipkart Internet Pvt. Ltd.",
                location: "Mumbai, Maharashtra",
                category: "product",
                experience: "Mid-Level (3-6 years)",
                salary: "₹25,00,000 - ₹40,00,000 per annum",
                type: "Full-time",
                locationType: "On-site",
                description: "We are looking for a dynamic Product Manager to lead product strategy and execution for our e-commerce platform. You will collaborate closely with engineering, design, data, and marketing teams to deliver customer-centric features and drive business growth.",
                requirements: [
                    "3+ years of experience in Product Management",
                    "Strong understanding of Agile/Scrum methodologies",
                    "Excellent analytical and data-driven decision-making skills",
                    "Experience working with cross-functional teams",
                    "Strong communication and stakeholder management skills",
                    "Basic understanding of SQL and product analytics tools"
                ],
                date: "2026-02-24",
                remote: false
            },
            {
                id: 3,
                title: "UX/UI Designer",
                company: "Zomato Pvt. Ltd.",
                location: "Bengaluru, Karnataka",
                category: "design",
                experience: "Mid-Level (3-5 years)",
                salary: "₹8,00,000 - ₹14,00,000 per annum",
                type: "Full-time",
                locationType: "Hybrid",
                description: "We are looking for a creative UX/UI Designer to design intuitive and engaging digital experiences for our web and mobile applications. You will collaborate with product managers, developers, and marketing teams to deliver user-centered solutions backed by research and usability testing.",
                requirements: [
                    "Strong portfolio showcasing UI/UX case studies",
                    "3+ years of experience in UX/UI design",
                    "Expertise in Figma and prototyping tools",
                    "Experience conducting user research and usability testing",
                    "Understanding of responsive design and design systems",
                    "Basic knowledge of HTML/CSS is a plus"
                ],
                date: "2026-02-24",
                remote: false
            },
            {
                id: 4,
                title: "Senior Backend Engineer",
                company: "Cognizant Technology Solutions Ltd.",
                location: "Pune, Maharashtra",
                category: "technology",
                experience: "Senior (5+ years)",
                salary: "₹22,00,000 - ₹35,00,000 per annum",
                type: "Full-time",
                locationType: "Hybrid",
                description: "Build scalable backend services and APIs using Node.js and Python. Design and implement RESTful APIs, optimize database systems, and contribute to architecture decisions. Collaborate with cross-functional teams to deliver robust and high-performance solutions.",
                requirements: [
                    "5+ years of backend development experience",
                    "Expertise in Node.js and/or Python",
                    "Strong database design and optimization skills (SQL & NoSQL)",
                    "Experience with AWS or GCP cloud services",
                    "Hands-on experience with microservices architecture",
                    "Familiarity with containerization (Docker/Kubernetes)",
                    "Good problem-solving and system design skills"
                ],
                date: "2026-02-24",
                remote: false
            },
            {
                id: 5,
                title: "Digital Marketing Executive",
                company: "GrowthWave Digital Solutions Pvt. Ltd.",
                location: "Mumbai, Maharashtra, India",
                category: "marketing",
                experience: "Entry-level (0-2 years)",
                salary: "₹3,50,000 - ₹5,50,000 per annum (CTC)",
                type: "Full-time",
                locationType: "hybrid",
                description: "Assist in planning and executing digital marketing campaigns including SEO, SEM, social media marketing, and email campaigns. Track campaign performance using analytics tools and generate monthly reports. Collaborate with the design and content team to improve brand visibility and lead generation.",
                requirements: [
                    "Bachelor's degree in Marketing, Business, or related field",
                    "0-2 years experience in digital marketing",
                    "Knowledge of SEO, SEM, and Google Ads",
                    "Familiarity with Google Analytics and Meta Ads Manager",
                    "Basic understanding of content marketing and copywriting",
                    "Strong communication skills"
                ],
                date: "2026-02-11",
                remote: false
            },
            {
                id: 6,
                title: "Senior DevOps Engineer",
                company: "CloudNova Technologies Pvt. Ltd.",
                location: "Bengaluru, Karnataka, India",
                category: "technology",
                experience: "5-8 years",
                salary: "₹20,00,000 - ₹30,00,000 per annum (CTC)",
                type: "Full-time",
                locationType: "hybrid",
                description: "Design, implement, and manage scalable cloud infrastructure on AWS/Azure. Develop and maintain CI/CD pipelines, automate deployments, and ensure high system availability and security. Collaborate with development teams to improve DevOps practices and monitoring systems.",
                requirements: [
                    "5+ years of DevOps or Site Reliability experience",
                    "Strong expertise in Kubernetes and Docker",
                    "Experience with CI/CD tools (Jenkins, GitHub Actions, GitLab CI)",
                    "Hands-on experience with Infrastructure as Code (Terraform/CloudFormation)",
                    "Cloud platform expertise (AWS/Azure/GCP)",
                    "Experience with monitoring tools like Prometheus, Grafana, ELK",
                    "Strong scripting skills (Bash/Python)"
                ],
                date: "2026-01-10",
                remote: false
            },
            {
                id: 7,
                title: "Data Analyst",
                company: "InsightEdge Analytics Pvt. Ltd.",
                location: "Hyderabad, Telangana, India",
                category: "data",
                experience: "2-5 years",
                salary: "₹9,00,000 - ₹14,00,000 per annum (CTC)",
                type: "Full-time",
                locationType: "hybrid",
                description: "Analyze structured and unstructured business data to generate actionable insights. Build dashboards and reports for stakeholders using BI tools. Work closely with product and business teams to support data-driven decision making.",
                requirements: [
                    "2-5 years of experience in Data Analytics",
                    "Strong proficiency in SQL",
                    "Experience with Power BI/Tableau",
                    "Good knowledge of Excel and Google Sheets",
                    "Basic understanding of statistics and data modeling",
                    "Experience with Python (Pandas, NumPy) is a plus"
                ],
                date: "2026-01-09",
                remote: false
            },
            {
                id: 8,
                title: "Senior Sales Manager - Enterprise Solutions",
                company: "NextGen Enterprise Solutions Pvt. Ltd.",
                location: "Gurugram, Haryana, India",
                category: "sales",
                experience: "5-10 years",
                salary: "₹15,00,000 - ₹22,00,000 per annum + Performance Incentives",
                type: "Full-time",
                locationType: "hybrid",
                description: "Drive B2B enterprise sales across India. Identify and onboard large clients, manage key accounts, and achieve quarterly revenue targets. Develop strategic sales plans to expand market presence and strengthen long-term client relationships.",
                requirements: [
                    "5-10 years of B2B or Enterprise Sales experience",
                    "Proven track record of meeting revenue targets",
                    "Experience handling large enterprise clients",
                    "Proficiency in CRM tools (Salesforce/Zoho CRM)",
                    "Strong negotiation and communication skills",
                    "Willingness to travel for client meetings"
                ],
                date: "2026-01-08",
                remote: false
            },
            {
                id: 9,
                title: "Customer Support Executive",
                company: "HelpDesk Solutions India Pvt. Ltd.",
                location: "Noida, Uttar Pradesh, India",
                category: "customer-service",
                experience: "0-2 years",
                salary: "₹2,50,000 - ₹4,00,000 per annum (CTC)",
                type: "Full-time",
                locationType: "hybrid",
                description: "Provide customer support via chat, email, and phone. Resolve customer queries efficiently, troubleshoot technical or service-related issues, and escalate complex cases to senior teams. Maintain high customer satisfaction scores.",
                requirements: [
                    "Bachelor's degree in any discipline",
                    "0-2 years experience in customer support (Freshers can apply)",
                    "Strong verbal and written communication skills",
                    "Basic computer and CRM knowledge",
                    "Problem-solving skills with patience and empathy",
                    "Willingness to work in rotational shifts"
                ],
                date: "2026-01-07",
                remote: false
            },
            {
                id: 10,
                title: "Senior HR Manager",
                company: "PeopleFirst HR Solutions Pvt. Ltd.",
                location: "Mumbai, Maharashtra, India",
                category: "human-resources",
                experience: "8-12 years",
                salary: "₹18,00,000 - ₹28,00,000 per annum (CTC)",
                type: "Full-time",
                locationType: "onsite",
                description: "Lead end-to-end HR operations including recruitment, employee engagement, performance management, and policy development. Ensure compliance with Indian labor laws and manage employee relations. Drive talent acquisition strategies and support organizational growth initiatives.",
                requirements: [
                    "8-12 years of progressive HR experience",
                    "Strong knowledge of Indian labor laws and compliance",
                    "Experience in talent acquisition and workforce planning",
                    "Leadership and team management skills",
                    "Experience with HRMS tools (Darwinbox, Keka, SAP SuccessFactors)",
                    "Strong communication and conflict resolution skills"
                ],
                date: "2026-01-06",
                remote: false
            }
        ];

        const categories = [
            { id: "technology", label: "Technology", icon: "fas fa-laptop-code" },
            { id: "design", label: "Design", icon: "fas fa-palette" },
            { id: "marketing", label: "Marketing", icon: "fas fa-bullhorn" },
            { id: "sales", label: "Sales", icon: "fas fa-chart-line" },
            { id: "product", label: "Product", icon: "fas fa-box" },
            { id: "data", label: "Data & Analytics", icon: "fas fa-chart-bar" },
            { id: "customer-service", label: "Customer Service", icon: "fas fa-headset" },
            { id: "human-resources", label: "Human Resources", icon: "fas fa-users" }
        ];

        const experienceLevels = [
            { id: "entry-level", label: "Entry Level", color: "bg-green-100 text-green-800" },
            { id: "mid-level", label: "Mid Level", color: "bg-blue-100 text-blue-800" },
            { id: "senior", label: "Senior", color: "bg-purple-100 text-purple-800" }
        ];

        const locationTypes = [
            { id: "remote", label: "Remote", icon: "fas fa-home" },
            { id: "onsite", label: "On-site", icon: "fas fa-building" },
            { id: "hybrid", label: "Hybrid", icon: "fas fa-exchange-alt" }
        ];

        const navigationItems = [
            { label: "Home", href: "#", active: true },
            { label: "Browse Jobs", href: "#job-listings" },
        ];

        const jobseekerLinks = [
            { label: "Browse Jobs", href: "#" },
            { label: "Career Advice", href: "#" },
            { label: "Resume Builder", href: "#" },
            { label: "Salary Calculator", href: "#" }
        ];

        const employerLinks = [
            { label: "Post a Job", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Employer Resources", href: "#" },
            { label: "Recruitment Solutions", href: "#" }
        ];

        // Application State
        let savedJobs = new Set();
        let currentJobs = [...jobListingsData];
        let currentFilters = {
            keyword: "",
            location: "",
            category: new Set(),
            experience: new Set(),
            locationType: new Set()
        };
        let currentPage = 1;
        const jobsPerPage = 6;

        // Render Functions
        function renderNavigation() {
            const nav = document.getElementById("main-nav").querySelector("ul");
            nav.innerHTML = navigationItems.map(item => `
                <li>
                    <a href="${item.href}" class="${item.active ? 'text-primary-600 font-medium' : 'text-neutral-700 hover:text-primary-600'} transition">
                        ${item.label}
                    </a>
                </li>
            `).join("");
        }

        function renderCategoryFilters() {
            const container = document.getElementById("category-filters");
            container.innerHTML = categories.map(cat => `
                <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" class="category-filter rounded text-primary-600 focus:ring-primary-500" value="${cat.id}">
                    <span class="flex items-center space-x-2">
                        <i class="${cat.icon} text-primary-600 w-4"></i>
                        <span>${cat.label}</span>
                    </span>
                </label>
            `).join("");
        }

        function renderExperienceFilters() {
            const container = document.getElementById("experience-filters");
            container.innerHTML = experienceLevels.map(exp => `
                <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" class="experience-filter rounded text-primary-600 focus:ring-primary-500" value="${exp.id}">
                    <span class="${exp.color} px-3 py-1 rounded-full text-sm font-medium">
                        ${exp.label}
                    </span>
                </label>
            `).join("");
        }

        function renderLocationFilters() {
            const container = document.getElementById("location-filters");
            container.innerHTML = locationTypes.map(loc => `
                <label class="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" class="location-filter rounded text-primary-600 focus:ring-primary-500" value="${loc.id}">
                    <span class="flex items-center space-x-2">
                        <i class="${loc.icon} text-primary-600 w-4"></i>
                        <span>${loc.label}</span>
                    </span>
                </label>
            `).join("");
        }

        function renderJobCards(jobs) {
            const container = document.getElementById("job-listings");
            if (jobs.length === 0) {
                document.getElementById("no-results").classList.remove("hidden");
                container.innerHTML = "";
                return;
            }

            document.getElementById("no-results").classList.add("hidden");

            const startIndex = (currentPage - 1) * jobsPerPage;
            const endIndex = startIndex + jobsPerPage;
            const paginatedJobs = jobs.slice(startIndex, endIndex);

            container.innerHTML = paginatedJobs.map(job => `
                <div class="job-card bg-white rounded-xl shadow-sm border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-neutral-900 mb-1">${job.title}</h3>
                            <div class="text-lg text-primary-600 font-medium mb-2">${job.company}</div>
                        </div>
                        <button class="save-job-btn text-neutral-400 hover:text-primary-600 transition" data-id="${job.id}">
                            <i class="${savedJobs.has(job.id) ? 'fas' : 'far'} fa-bookmark text-xl"></i>
                        </button>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm">
                            <i class="fas fa-map-marker-alt mr-1"></i> ${job.location}
                        </span>
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            ${job.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                        <span class="px-3 py-1 ${job.experience === 'Senior' ? 'bg-purple-100 text-purple-800' : job.experience === 'Mid-level' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} rounded-full text-sm">
                            ${job.experience}
                        </span>
                        <span class="px-3 py-1 ${job.locationType === 'remote' ? 'bg-green-100 text-green-800' : job.locationType === 'hybrid' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'} rounded-full text-sm">
                            <i class="${job.locationType === 'remote' ? 'fas fa-home' : job.locationType === 'hybrid' ? 'fas fa-exchange-alt' : 'fas fa-building'} mr-1"></i>
                            ${job.locationType.charAt(0).toUpperCase() + job.locationType.slice(1)}
                        </span>
                    </div>
                    
                    <p class="text-neutral-600 mb-4 line-clamp-2">${job.description}</p>
                    
                    <div class="flex justify-between items-center">
                        <div class="text-lg font-bold text-neutral-900">${job.salary}</div>
                        <button class="view-details-btn px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium" data-id="${job.id}">
                            View Details
                        </button>
                    </div>
                </div>
            `).join("");
        }

        function renderPagination(totalJobs) {
            const container = document.getElementById("pagination");
            const totalPages = Math.ceil(totalJobs / jobsPerPage);

            if (totalPages <= 1) {
                container.innerHTML = "";
                return;
            }

            let paginationHTML = "";

            // Previous button
            paginationHTML += `
                <button class="pagination-btn px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}" 
                        data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i>
                </button>
            `;

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                paginationHTML += `
                    <button class="pagination-btn px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition ${currentPage === i ? 'active bg-primary-600 text-white' : ''}" 
                            data-page="${i}">
                        ${i}
                    </button>
                `;
            }

            // Next button
            paginationHTML += `
                <button class="pagination-btn px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" 
                        data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>
                    <i class="fas fa-chevron-right"></i>
                </button>
            `;

            container.innerHTML = paginationHTML;
        }

        function renderFooterLinks() {
            document.getElementById("jobseeker-links").innerHTML = jobseekerLinks.map(link => `
                <li><a href="${link.href}" class="hover:text-white transition">${link.label}</a></li>
            `).join("");

            document.getElementById("employer-links").innerHTML = employerLinks.map(link => `
                <li><a href="${link.href}" class="hover:text-white transition">${link.label}</a></li>
            `).join("");
        }

        function updateJobCount() {
            document.getElementById("job-count").textContent = currentJobs.length;
        }

        function updateSavedCount() {
            document.getElementById("saved-count").textContent = savedJobs.size;
        }

        // Filter Functions
        function filterJobs() {
            let filtered = jobListingsData.filter(job => {
                // Keyword filter
                if (currentFilters.keyword) {
                    const keyword = currentFilters.keyword.toLowerCase();
                    const matchesKeyword = job.title.toLowerCase().includes(keyword) ||
                        job.company.toLowerCase().includes(keyword) ||
                        job.description.toLowerCase().includes(keyword);
                    if (!matchesKeyword) return false;
                }

                // Location filter
                if (currentFilters.location) {
                    const location = currentFilters.location.toLowerCase();
                    const matchesLocation = job.location.toLowerCase().includes(location);
                    if (!matchesLocation) return false;
                }

                // Category filter
                if (currentFilters.category.size > 0) {
                    if (!currentFilters.category.has(job.category)) return false;
                }

                // Experience filter
                if (currentFilters.experience.size > 0) {
                    const experienceMap = {
                        'Senior': 'senior',
                        'Mid-level': 'mid-level',
                        'Entry-level': 'entry-level'
                    };
                    if (!currentFilters.experience.has(experienceMap[job.experience])) return false;
                }

                // Location type filter
                if (currentFilters.locationType.size > 0) {
                    if (!currentFilters.locationType.has(job.locationType)) return false;
                }

                return true;
            });

            // Apply sorting
            const sortBy = document.getElementById("sort-by").value;
            filtered.sort((a, b) => {
                switch (sortBy) {
                    case 'salary-high':
                        const salaryA = parseInt(a.salary.replace(/[^0-9]/g, '')) || 0;
                        const salaryB = parseInt(b.salary.replace(/[^0-9]/g, '')) || 0;
                        return salaryB - salaryA;
                    case 'salary-low':
                        const salaryC = parseInt(a.salary.replace(/[^0-9]/g, '')) || 0;
                        const salaryD = parseInt(b.salary.replace(/[^0-9]/g, '')) || 0;
                        return salaryC - salaryD;
                    default: // recent
                        return new Date(b.date) - new Date(a.date);
                }
            });

            currentJobs = filtered;
            currentPage = 1;
            updateJobCount();
            renderJobCards(currentJobs);
            renderPagination(currentJobs.length);
        }

        // Event Handlers
        function initializeEventHandlers() {
            // Search button
            document.getElementById("search-btn").addEventListener("click", () => {
                currentFilters.keyword = document.getElementById("keyword-search").value.trim();
                currentFilters.location = document.getElementById("location-search").value.trim();
                filterJobs();
            });

            // Quick filter buttons
            document.querySelectorAll(".quick-filter-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const filter = e.target.dataset.filter;
                    document.getElementById("keyword-search").value = filter === "remote" ? "Remote" : "";
                    document.getElementById("location-search").value = filter === "remote" ? "" : "";

                    if (filter === "tech") {
                        currentFilters.category.clear();
                        currentFilters.category.add("technology");
                    } else if (filter === "marketing") {
                        currentFilters.category.clear();
                        currentFilters.category.add("marketing");
                    } else if (filter === "full-time") {
                        // This would filter by job type in a real implementation
                    }

                    filterJobs();
                });
            });

            // Category filter checkboxes
            document.addEventListener("change", (e) => {
                if (e.target.classList.contains("category-filter")) {
                    if (e.target.checked) {
                        currentFilters.category.add(e.target.value);
                    } else {
                        currentFilters.category.delete(e.target.value);
                    }
                    filterJobs();
                }

                if (e.target.classList.contains("experience-filter")) {
                    if (e.target.checked) {
                        currentFilters.experience.add(e.target.value);
                    } else {
                        currentFilters.experience.delete(e.target.value);
                    }
                    filterJobs();
                }

                if (e.target.classList.contains("location-filter")) {
                    if (e.target.checked) {
                        currentFilters.locationType.add(e.target.value);
                    } else {
                        currentFilters.locationType.delete(e.target.value);
                    }
                    filterJobs();
                }
            });

            // Sort by
            document.getElementById("sort-by").addEventListener("change", filterJobs);

            // Save job buttons (delegated)
            document.addEventListener("click", (e) => {
                if (e.target.closest(".save-job-btn")) {
                    const btn = e.target.closest(".save-job-btn");
                    const jobId = parseInt(btn.dataset.id);

                    if (savedJobs.has(jobId)) {
                        savedJobs.delete(jobId);
                        btn.querySelector("i").className = "far fa-bookmark text-xl";
                        btn.closest(".job-card").classList.remove("saved-job");
                    } else {
                        savedJobs.add(jobId);
                        btn.querySelector("i").className = "fas fa-bookmark text-xl";
                        btn.closest(".job-card").classList.add("saved-job");
                    }

                    updateSavedCount();
                }

                if (e.target.closest(".view-details-btn")) {
                    const btn = e.target.closest(".view-details-btn");
                    const jobId = parseInt(btn.dataset.id);
                    const job = jobListingsData.find(j => j.id === jobId);

                    if (job) {
                        document.getElementById("modal-title").textContent = job.title;
                        document.getElementById("modal-company").textContent = job.company;
                        document.getElementById("modal-location").textContent = job.location;
                        document.getElementById("modal-experience").textContent = job.experience;
                        document.getElementById("modal-salary").textContent = job.salary;
                        document.getElementById("modal-description").textContent = job.description;

                        const requirementsList = document.getElementById("modal-requirements");
                        requirementsList.innerHTML = job.requirements.map(req => `<li>${req}</li>`).join("");

                        const saveBtn = document.getElementById("save-job-modal");
                        saveBtn.innerHTML = savedJobs.has(jobId) ?
                            '<i class="fas fa-bookmark mr-2"></i>Saved' :
                            '<i class="far fa-bookmark mr-2"></i>Save Job';
                        saveBtn.dataset.id = jobId;

                        document.getElementById("job-modal").classList.add("active");
                    }
                }
            });

            // Pagination (delegated)
            document.addEventListener("click", (e) => {
                if (e.target.closest(".pagination-btn")) {
                    const btn = e.target.closest(".pagination-btn");
                    if (!btn.disabled) {
                        currentPage = parseInt(btn.dataset.page);
                        renderJobCards(currentJobs);
                        renderPagination(currentJobs.length);
                    }
                }
            });

            // Clear filters
            document.getElementById("clear-filters").addEventListener("click", () => {
                currentFilters = {
                    keyword: "",
                    location: "",
                    category: new Set(),
                    experience: new Set(),
                    locationType: new Set()
                };

                document.getElementById("keyword-search").value = "";
                document.getElementById("location-search").value = "";
                document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

                filterJobs();
            });

            // Reset search
            document.getElementById("reset-search").addEventListener("click", () => {
                currentFilters = {
                    keyword: "",
                    location: "",
                    category: new Set(),
                    experience: new Set(),
                    locationType: new Set()
                };

                document.getElementById("keyword-search").value = "";
                document.getElementById("location-search").value = "";
                document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

                filterJobs();
            });

            // Modal close
            document.getElementById("close-modal").addEventListener("click", () => {
                document.getElementById("job-modal").classList.remove("active");
            });

            // Save job from modal
            document.getElementById("save-job-modal").addEventListener("click", (e) => {
                const jobId = parseInt(e.target.dataset.id);

                if (savedJobs.has(jobId)) {
                    savedJobs.delete(jobId);
                    e.target.innerHTML = '<i class="far fa-bookmark mr-2"></i>Save Job';

                    // Update card if visible
                    const cardBtn = document.querySelector(`.save-job-btn[data-id="${jobId}"]`);
                    if (cardBtn) {
                        cardBtn.querySelector("i").className = "far fa-bookmark text-xl";
                        cardBtn.closest(".job-card").classList.remove("saved-job");
                    }
                } else {
                    savedJobs.add(jobId);
                    e.target.innerHTML = '<i class="fas fa-bookmark mr-2"></i>Saved';

                    // Update card if visible
                    const cardBtn = document.querySelector(`.save-job-btn[data-id="${jobId}"]`);
                    if (cardBtn) {
                        cardBtn.querySelector("i").className = "fas fa-bookmark text-xl";
                        cardBtn.closest(".job-card").classList.add("saved-job");
                    }
                }

                updateSavedCount();
            });

            // Close modal on background click
            document.getElementById("job-modal").addEventListener("click", (e) => {
                if (e.target === document.getElementById("job-modal")) {
                    document.getElementById("job-modal").classList.remove("active");
                }
            });

            // Enter key for search
            document.getElementById("keyword-search").addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    document.getElementById("search-btn").click();
                }
            });

            document.getElementById("location-search").addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    document.getElementById("search-btn").click();
                }
            });

            // Saved jobs button
            document.getElementById("saved-jobs-btn").addEventListener("click", () => {
                currentFilters.keyword = "";
                currentFilters.category.clear();
                currentFilters.experience.clear();
                currentFilters.locationType.clear();

                if (savedJobs.size > 0) {
                    currentJobs = jobListingsData.filter(job => savedJobs.has(job.id));
                } else {
                    currentJobs = [];
                }

                document.getElementById("keyword-search").value = "";
                document.getElementById("location-search").value = "";
                document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

                updateJobCount();
                renderJobCards(currentJobs);
                renderPagination(currentJobs.length);
            });
        }

        // Prevent default anchor behavior
        document.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                e.preventDefault();
                const href = e.target.getAttribute("href");
                if (href && href.startsWith("#")) {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }
            }
        });

        // Initialize
        document.addEventListener("DOMContentLoaded", () => {
            renderNavigation();
            renderCategoryFilters();
            renderExperienceFilters();
            renderLocationFilters();
            renderFooterLinks();
            updateJobCount();
            updateSavedCount();
            renderJobCards(currentJobs);
            renderPagination(currentJobs.length);
            initializeEventHandlers();
        });