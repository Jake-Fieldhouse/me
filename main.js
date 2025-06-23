        // JavaScript code with reverse animations, content sections, touch, and click support

        // Get elements
        const elements = document.querySelectorAll('.title-line');
        const totalSteps = elements.length * 2 + 1; // Adjusted total steps
        let currentStep = 0;
        let isScrolling = false;

        const scrollIndicator = document.querySelector('.scroll-indicator');
        const scrollText = scrollIndicator.querySelector('.scroll-text');
        const scrollArrow = scrollIndicator.querySelector('.scroll-arrow');
        const introSection = document.querySelector('#intro-section');
        const mainContainer = document.querySelector('#main-container');
        const nameElement = document.querySelector('#name');
        const itProfessional = document.querySelector('#it-professional');
        const hardwareSpecialist = document.querySelector('#hardware-specialist');
        const aiAdvocate = document.querySelector('#ai-advocate');

        const contentSections = {
            name: document.querySelector('#content-name'),
            itProfessional: document.querySelector('#content-it-professional'),
            hardwareSpecialist: document.querySelector('#content-hardware-specialist'),
            aiAdvocate: document.querySelector('#content-ai-advocate')
        };

        const sections = [
            {
                titleLine: nameElement,
                contentSection: contentSections.name
            },
            {
                titleLine: itProfessional,
                contentSection: contentSections.itProfessional
            },
            {
                titleLine: hardwareSpecialist,
                contentSection: contentSections.hardwareSpecialist
            },
            {
                titleLine: aiAdvocate,
                contentSection: contentSections.aiAdvocate
            }
        ];

        // Define steps using constants
        const STEPS = {
            INITIAL: 0,
            SHOW_ELEMENTS_END: elements.length - 1, // Last index when elements are shown
            HIGHLIGHT_START: elements.length,       // Step when highlighting starts
        };

        const updateClasses = (step) => {
            // Handle element visibility
            elements.forEach((el, idx) => {
                if (step >= idx) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });

            // Toggle scaled and active classes after all elements are visible
            if (step >= STEPS.HIGHLIGHT_START) {
                introSection.classList.add('scaled');
                mainContainer.classList.add('active');
            } else {
                introSection.classList.remove('scaled');
                mainContainer.classList.remove('active');
            }

            // Handle highlighting, shrinking, and content sections
            sections.forEach((section, idx) => {
                const highlightStep = STEPS.HIGHLIGHT_START + idx; // Steps for highlighting
                const shouldHighlight = step === highlightStep;
                const shouldShrink = step > highlightStep;
                if (shouldHighlight) {
                    section.titleLine.classList.add('highlight');
                    section.titleLine.classList.remove('shrunk');
                    // Show content section
                    section.contentSection.classList.add('visible');
                } else if (shouldShrink) {
                    section.titleLine.classList.remove('highlight');
                    section.titleLine.classList.add('shrunk');
                    // Hide content section
                    section.contentSection.classList.remove('visible');
                } else {
                    section.titleLine.classList.remove('highlight', 'shrunk');
                    // Hide content section
                    section.contentSection.classList.remove('visible');
                }
            });

            isScrolling = false;
        };

        const updateScrollIndicator = () => {
            scrollText.style.opacity = currentStep ? '0' : '1';
            scrollArrow.style.opacity = Math.max(0, 1 - currentStep / totalSteps);
        };

        // Debounce scroll events
        let scrollTimeout;
        const handleScroll = (delta) => {
            if (isScrolling) return;
            isScrolling = true;
            if (scrollTimeout) return;
            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
                currentStep = Math.max(0, Math.min(totalSteps - 1, currentStep + delta));
                updateClasses(currentStep);
                updateScrollIndicator();
            }, 100); // Adjust debounce timeout as needed
        };

        // Wheel event for desktop
        window.addEventListener('wheel', (event) => {
            const delta = event.deltaY > 0 ? 1 : -1;
            handleScroll(delta);
        }, { passive: true });

        // Touch events for mobile
        let touchStartY = 0;
        let touchEndY = 0;
        const minSwipeDistance = 50; // Minimum distance to consider it a swipe

        window.addEventListener('touchstart', (event) => {
            touchStartY = event.changedTouches[0].screenY;
        }, { passive: true });

        window.addEventListener('touchend', (event) => {
            touchEndY = event.changedTouches[0].screenY;
            handleGesture();
        }, { passive: true });

        const handleGesture = () => {
            const deltaY = touchStartY - touchEndY;
            if (Math.abs(deltaY) > minSwipeDistance) {
                const delta = deltaY > 0 ? 1 : -1;
                handleScroll(delta);
            } else {
                isScrolling = false;
            }
        };

        // Click events for title lines
        elements.forEach((el, idx) => {
            el.addEventListener('click', () => {
                const targetStep = STEPS.HIGHLIGHT_START + idx;
                currentStep = targetStep;
                updateClasses(currentStep);
                updateScrollIndicator();
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') handleScroll(1);
            if (e.key === 'ArrowUp') handleScroll(-1);
        });

        // Initial setup
        updateClasses(currentStep);

