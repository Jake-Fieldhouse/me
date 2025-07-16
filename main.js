// JavaScript code with reverse animations, content sections, touch, and click support

// Wrap everything in an IIFE to avoid polluting the global scope
(function () {
    // ---------------------- Element Selection ----------------------
    const elements = document.querySelectorAll('.title-line');
    const totalSteps = elements.length * 2 + 1; // Adjusted total steps
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollText = scrollIndicator.querySelector('.scroll-text');
    const scrollArrow = scrollIndicator.querySelector('.scroll-arrow');
    const introSection = document.querySelector('#intro-section');
    const mainContainer = document.querySelector('#main-container');
    const nameElement = document.querySelector('#name');
    const itProfessional = document.querySelector('#it-professional');
    const hardwareSpecialist = document.querySelector('#hardware-specialist');
    const aiAdvocate = document.querySelector('#ai-advocate');

    // Mapping of content sections
    const contentSections = {
        name: document.querySelector('#content-name'),
        itProfessional: document.querySelector('#content-it-professional'),
        hardwareSpecialist: document.querySelector('#content-hardware-specialist'),
        aiAdvocate: document.querySelector('#content-ai-advocate'),
    };

    // Pair each title line with its associated content block
    const sections = [
        { titleLine: nameElement, contentSection: contentSections.name },
        { titleLine: itProfessional, contentSection: contentSections.itProfessional },
        { titleLine: hardwareSpecialist, contentSection: contentSections.hardwareSpecialist },
        { titleLine: aiAdvocate, contentSection: contentSections.aiAdvocate },
    ];

    // ---------------------- State ----------------------
    let currentStep = 0;
    let isScrolling = false;

    // Steps used to determine which stage the animation is in
    const STEPS = {
        INITIAL: 0,
        SHOW_ELEMENTS_END: elements.length - 1, // Last index when elements are shown
        HIGHLIGHT_START: elements.length, // Step when highlighting starts
    };

    /**
     * Update visibility and style classes for all elements based on the step.
     * Handles showing lines, scaling sections and toggling content visibility.
     */
    function updateClasses(step) {
        // Show/hide title lines
        elements.forEach((el, idx) => {
            if (step >= idx) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });

        // Scale intro section once all lines are visible
        if (step >= STEPS.HIGHLIGHT_START) {
            introSection.classList.add('scaled');
            mainContainer.classList.add('active');
        } else {
            introSection.classList.remove('scaled');
            mainContainer.classList.remove('active');
        }

        // Highlight or shrink lines and toggle content blocks
        sections.forEach((section, idx) => {
            const highlightStep = STEPS.HIGHLIGHT_START + idx;
            const shouldHighlight = step === highlightStep;
            const shouldShrink = step > highlightStep;

            if (shouldHighlight) {
                section.titleLine.classList.add('highlight');
                section.titleLine.classList.remove('shrunk');
                section.contentSection.classList.add('visible');
            } else if (shouldShrink) {
                section.titleLine.classList.remove('highlight');
                section.titleLine.classList.add('shrunk');
                section.contentSection.classList.remove('visible');
            } else {
                section.titleLine.classList.remove('highlight', 'shrunk');
                section.contentSection.classList.remove('visible');
            }
        });

        isScrolling = false;
    }

    /**
     * Adjust the fade in/out of the scroll text and arrow.
     */
    function updateScrollIndicator() {
        scrollText.style.opacity = currentStep ? '0' : '1';
        scrollArrow.style.opacity = Math.max(0, 1 - currentStep / totalSteps);
    }

    // Debounce timer for wheel/touch events
    let scrollTimeout;

    /**
     * Generic scroll handler that updates the current step and UI.
     * @param {number} delta Direction of scroll; 1 for down, -1 for up.
     */
    function handleScroll(delta) {
        if (isScrolling) return;
        isScrolling = true;
        if (scrollTimeout) return;

        scrollTimeout = setTimeout(() => {
            scrollTimeout = null;
            currentStep = Math.max(0, Math.min(totalSteps - 1, currentStep + delta));
            updateClasses(currentStep);
            updateScrollIndicator();
        }, 100); // debounce timeout
    }

    // ---------------------- Event Handlers ----------------------
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50; // Minimum swipe distance

    /**
     * Determine if a swipe gesture counts as a scroll and act on it.
     */
    function handleGesture() {
        const deltaY = touchStartY - touchEndY;
        if (Math.abs(deltaY) > minSwipeDistance) {
            const delta = deltaY > 0 ? 1 : -1;
            handleScroll(delta);
        } else {
            isScrolling = false;
        }
    }

    /**
     * Register all event listeners for wheel, touch, click and keyboard input.
     */
    function addEventListeners() {
        // Wheel event for desktop
        window.addEventListener(
            'wheel',
            (event) => {
                const delta = event.deltaY > 0 ? 1 : -1;
                handleScroll(delta);
            },
            { passive: true }
        );

        // Touch events for mobile
        window.addEventListener(
            'touchstart',
            (event) => {
                touchStartY = event.changedTouches[0].screenY;
            },
            { passive: true }
        );

        window.addEventListener(
            'touchend',
            (event) => {
                touchEndY = event.changedTouches[0].screenY;
                handleGesture();
            },
            { passive: true }
        );

        // Click and keyboard events for each title line
        elements.forEach((el, idx) => {
            function activateSection() {
                const targetStep = STEPS.HIGHLIGHT_START + idx;
                currentStep = targetStep;
                updateClasses(currentStep);
                updateScrollIndicator();
            }

            el.addEventListener('click', activateSection);
            el.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    activateSection();
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') handleScroll(1);
            if (e.key === 'ArrowUp') handleScroll(-1);
        });
    }

    // ---------------------- Initialization ----------------------
    addEventListeners();
    updateClasses(currentStep);
})();

