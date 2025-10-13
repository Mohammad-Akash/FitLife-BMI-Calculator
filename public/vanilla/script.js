// Navigation and Page Management
let currentPage = 'home';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBMICalculator();
    initCalorieCalculator();
    initContactForm();
    
    // Handle initial hash
    const hash = window.location.hash.slice(1) || 'home';
    navigateTo(hash);
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksContainer = document.getElementById('navLinks');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href').slice(1);
            navigateTo(page);
            
            // Close mobile menu
            if (window.innerWidth <= 768) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1) || 'home';
        navigateTo(hash, false);
    });
}

function navigateTo(pageId, updateHistory = true) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;

        // Update URL
        if (updateHistory) {
            history.pushState(null, '', `#${pageId}`);
        }

        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href').slice(1);
            if (href === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// BMI Calculator
function initBMICalculator() {
    const form = document.getElementById('bmiForm');
    const unitTabs = document.querySelectorAll('#bmi-calculator .tab-btn');
    const weightInput = document.getElementById('bmiWeight');
    const heightInput = document.getElementById('bmiHeight');
    const weightUnit = document.getElementById('weightUnit');
    const heightUnit = document.getElementById('heightUnit');
    const resultSection = document.getElementById('bmiResult');
    
    let currentUnit = 'metric';

    // Unit tab switching
    unitTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            unitTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentUnit = tab.getAttribute('data-unit');
            
            if (currentUnit === 'metric') {
                weightUnit.textContent = 'kg';
                heightUnit.textContent = 'cm';
                weightInput.placeholder = '70';
                heightInput.placeholder = '170';
            } else {
                weightUnit.textContent = 'lbs';
                heightUnit.textContent = 'in';
                weightInput.placeholder = '154';
                heightInput.placeholder = '67';
            }
            
            // Clear inputs
            weightInput.value = '';
            heightInput.value = '';
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value);
        
        if (!weight || !height) {
            showToast('Please enter valid values');
            return;
        }

        // Convert imperial to metric if needed
        if (currentUnit === 'imperial') {
            weight = weight * 0.453592; // lbs to kg
            height = height * 2.54; // inches to cm
        }

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        displayBMIResult(bmi);
    });
}

function displayBMIResult(bmi) {
    const resultSection = document.getElementById('bmiResult');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const bmiProgress = document.getElementById('bmiProgress');
    const bmiAdvice = document.getElementById('bmiAdvice');
    
    // Determine category and color
    let category, advice, progressPercent;
    
    if (bmi < 18.5) {
        category = 'Underweight';
        advice = 'Your BMI indicates you may be underweight. Consider consulting with a healthcare provider or nutritionist to develop a healthy weight gain plan. Focus on nutrient-dense foods and strength training exercises.';
        progressPercent = (bmi / 18.5) * 25;
    } else if (bmi < 25) {
        category = 'Normal Weight';
        advice = 'Congratulations! Your BMI is in the healthy range. Maintain your current lifestyle with a balanced diet and regular physical activity. Keep up the great work!';
        progressPercent = 25 + ((bmi - 18.5) / 6.5) * 25;
    } else if (bmi < 30) {
        category = 'Overweight';
        advice = 'Your BMI suggests you may be overweight. Consider making gradual lifestyle changes like increasing physical activity and focusing on whole foods. Small, sustainable changes can lead to significant improvements.';
        progressPercent = 50 + ((bmi - 25) / 5) * 25;
    } else {
        category = 'Obese';
        advice = 'Your BMI indicates obesity, which may increase health risks. We recommend consulting healthcare professionals for personalized guidance. They can help create a safe, effective plan for reaching a healthier weight.';
        progressPercent = Math.min(75 + ((bmi - 30) / 10) * 25, 100);
    }
    
    // Update display
    bmiValue.textContent = bmi.toFixed(1);
    bmiCategory.textContent = category;
    bmiProgress.style.width = `${progressPercent}%`;
    bmiAdvice.textContent = advice;
    
    // Show result section
    resultSection.classList.remove('hidden');
    
    // Scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Calorie Calculator
function initCalorieCalculator() {
    const form = document.getElementById('calorieForm');
    const resultSection = document.getElementById('calorieResult');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const age = parseFloat(document.getElementById('calAge').value);
        const weight = parseFloat(document.getElementById('calWeight').value);
        const height = parseFloat(document.getElementById('calHeight').value);
        const activity = parseFloat(document.getElementById('activity').value);
        
        if (!age || !weight || !height || !activity) {
            showToast('Please fill in all fields');
            return;
        }
        
        // Calculate BMR using Mifflin-St Jeor Equation
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }
        
        const maintenance = bmr * activity;
        
        displayCalorieResult({
            bmr: Math.round(bmr),
            maintenance: Math.round(maintenance),
            mildLoss: Math.round(maintenance - 250),
            weightLoss: Math.round(maintenance - 500),
            extremeLoss: Math.round(maintenance - 1000),
            mildGain: Math.round(maintenance + 250),
            weightGain: Math.round(maintenance + 500)
        });
    });
}

function displayCalorieResult(results) {
    const resultSection = document.getElementById('calorieResult');
    
    document.getElementById('bmrValue').textContent = results.bmr;
    document.getElementById('maintenanceValue').textContent = results.maintenance;
    document.getElementById('mildLoss').textContent = results.mildLoss + ' cal';
    document.getElementById('weightLoss').textContent = results.weightLoss + ' cal';
    document.getElementById('extremeLoss').textContent = results.extremeLoss + ' cal';
    document.getElementById('mildGain').textContent = results.mildGain + ' cal';
    document.getElementById('weightGain').textContent = results.weightGain + ' cal';
    
    resultSection.classList.remove('hidden');
    
    // Scroll to results
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const subject = document.getElementById('contactSubject').value;
        const message = document.getElementById('contactMessage').value;
        
        if (!name || !email || !subject || !message) {
            showToast('Please fill in all fields');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        showToast('Message sent successfully! We\'ll get back to you soon.');
        form.reset();
    });
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}
