// Enhanced Family Event Management System
// Inspired by modern web applications with robust functionality

class DataManager {
    constructor() {
        this.storageKey = 'vallamkonda-family-events-v2';
        this.init();
    }

    init() {
        if (!this.getData()) {
            this.setData(this.getDefaultData());
        }
        this.migrateData();
    }

    getDefaultData() {
        return {
            settings: {
                adminPassword: "vallamkonda@2025",
                siteName: "Vallamkonda Finance & Events",
                tagline: "Conscious intelligence in motion",
                theme: "light",
                designedBy: "Harsha Vallamkonda",
                partneredWith: "Sunday Saradalu"
            },
            events: [
                {
                    id: 1,
                    name: "Diwali Celebration 2024",
                    year: 2024,
                    date: "2024-11-01",
                    description: "Traditional Diwali celebration with the entire family including rangoli competition, traditional games, and grand feast",
                    totalBudget: 150000,
                    status: "upcoming",
                    venue: "Family Ancestral Home",
                    expectedGuests: 45,
                    googlePhotosLink: "https://photos.google.com/share/AF1QipNi_example",
                    expenses: [
                        {
                            id: 1,
                            category: "Decor",
                            amount: 25000,
                            paymentMode: "UPI",
                            description: "Rangoli materials, diyas, lights, and floral decorations",
                            date: "2024-10-25",
                            vendor: "Laxmi Decorators"
                        },
                        {
                            id: 2,
                            category: "Food",
                            amount: 40000,
                            paymentMode: "Cash",
                            description: "Sweets, traditional dishes, snacks, and beverages",
                            date: "2024-10-30",
                            vendor: "Raj Caterers"
                        },
                        {
                            id: 3,
                            category: "Entertainment",
                            amount: 15000,
                            paymentMode: "Bank Transfer",
                            description: "DJ, sound system, and traditional music instruments",
                            date: "2024-11-01",
                            vendor: "Sound Masters"
                        }
                    ],
                    income: [
                        {
                            id: 1,
                            family: "Vallamkonda Main Family",
                            amount: 50000,
                            paymentMode: "Bank Transfer",
                            date: "2024-10-20",
                            contactPerson: "Harsha Vallamkonda",
                            phone: "+91-9876543210"
                        },
                        {
                            id: 2,
                            family: "Kumar Family",
                            amount: 30000,
                            paymentMode: "UPI",
                            date: "2024-10-22",
                            contactPerson: "Rajesh Kumar",
                            phone: "+91-9876543211"
                        },
                        {
                            id: 3,
                            family: "Sharma Family",
                            amount: 25000,
                            paymentMode: "Cash",
                            date: "2024-10-25",
                            contactPerson: "Priya Sharma",
                            phone: "+91-9876543212"
                        }
                    ],
                    activities: [
                        {
                            id: 1,
                            name: "Lakshmi Puja",
                            participants: "All family members",
                            time: "18:00",
                            duration: "1 hour",
                            description: "Traditional prayer ceremony with aarti and prasad distribution",
                            location: "Main Prayer Room",
                            incharge: "Elder Family Members"
                        },
                        {
                            id: 2,
                            name: "Rangoli Competition",
                            participants: "Kids and teenagers",
                            time: "16:00",
                            duration: "2 hours",
                            description: "Creative rangoli making competition with prizes",
                            location: "Front Courtyard",
                            incharge: "Art Committee"
                        },
                        {
                            id: 3,
                            name: "Cultural Dance Performance",
                            participants: "Youth group",
                            time: "20:00",
                            duration: "45 minutes",
                            description: "Classical and folk dance performances",
                            location: "Main Hall",
                            incharge: "Cultural Team"
                        }
                    ]
                },
                {
                    id: 2,
                    name: "Summer Family Reunion 2024",
                    year: 2024,
                    date: "2024-05-15",
                    description: "Annual summer gathering with outdoor activities, games, and family bonding sessions",
                    totalBudget: 120000,
                    status: "completed",
                    venue: "Hill View Resort",
                    expectedGuests: 38,
                    googlePhotosLink: "https://photos.google.com/share/AF1QipNi_example2",
                    expenses: [
                        {
                            id: 4,
                            category: "Venue",
                            amount: 45000,
                            paymentMode: "Bank Transfer",
                            description: "Resort booking for 2 days including accommodation",
                            date: "2024-05-01",
                            vendor: "Hill View Resort"
                        },
                        {
                            id: 5,
                            category: "Food",
                            amount: 35000,
                            paymentMode: "UPI",
                            description: "BBQ, outdoor catering, and refreshments",
                            date: "2024-05-14",
                            vendor: "Outdoor Feast"
                        }
                    ],
                    income: [
                        {
                            id: 4,
                            family: "Vallamkonda Main Family",
                            amount: 40000,
                            paymentMode: "Bank Transfer",
                            date: "2024-05-01",
                            contactPerson: "Harsha Vallamkonda",
                            phone: "+91-9876543210"
                        },
                        {
                            id: 5,
                            family: "Patel Family",
                            amount: 35000,
                            paymentMode: "UPI",
                            date: "2024-05-05",
                            contactPerson: "Amit Patel",
                            phone: "+91-9876543213"
                        }
                    ],
                    activities: [
                        {
                            id: 4,
                            name: "Outdoor Games Tournament",
                            participants: "All ages",
                            time: "10:00",
                            duration: "3 hours",
                            description: "Cricket, volleyball, badminton, and traditional games",
                            location: "Resort Grounds",
                            incharge: "Sports Committee"
                        },
                        {
                            id: 5,
                            name: "Swimming & Water Games",
                            participants: "Kids and adults",
                            time: "14:00",
                            duration: "2 hours",
                            description: "Pool activities, water volleyball, and swimming races",
                            location: "Resort Pool",
                            incharge: "Aqua Team"
                        }
                    ]
                }
            ],
            families: [
                {
                    id: 1,
                    name: "Vallamkonda Main Family",
                    contactPerson: "Harsha Vallamkonda",
                    phone: "+91-9876543210",
                    email: "harsha@vallamkonda.com",
                    members: 6,
                    address: "Nandyala, AP"
                },
                {
                    id: 2,
                    name: "Kumar Family",
                    contactPerson: "Rajesh Kumar",
                    phone: "+91-9876543211",
                    email: "rajesh@kumar.com",
                    members: 4,
                    address: "Hyderabad, TS"
                },
                {
                    id: 3,
                    name: "Sharma Family",
                    contactPerson: "Priya Sharma",
                    phone: "+91-9876543212",
                    email: "priya@sharma.com",
                    members: 5,
                    address: "Bangalore, KA"
                },
                {
                    id: 4,
                    name: "Patel Family",
                    contactPerson: "Amit Patel",
                    phone: "+91-9876543213",
                    email: "amit@patel.com",
                    members: 7,
                    address: "Mumbai, MH"
                }
            ],
            expenseCategories: [
                "Food", "Decor", "Entertainment", "Venue", "Transportation", 
                "Photography", "Gifts", "Electrician", "Security", "Miscellaneous"
            ],
            paymentModes: [
                "Cash", "UPI", "Bank Transfer", "Credit Card", "Debit Card", "Online Payment", "Cheque"
            ],
            activityCategories: [
                "Religious", "Entertainment", "Sports", "Cultural", "Food", "Games", "Photography", "Social"
            ]
        };
    }

    migrateData() {
        const data = this.getData();
        let updated = false;

        // Ensure all events have required fields
        if (data.events) {
            data.events.forEach(event => {
                if (!event.venue) event.venue = "Not specified";
                if (!event.expectedGuests) event.expectedGuests = 0;
                if (!event.status) event.status = "upcoming";
                if (!event.expenses) event.expenses = [];
                if (!event.income) event.income = [];
                if (!event.activities) event.activities = [];
                updated = true;
            });
        }

        if (updated) {
            this.setData(data);
        }
    }

    getData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error reading data:', error);
            return null;
        }
    }

    setData(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    }

    // Event methods
    getEvents() {
        return this.getData()?.events || [];
    }

    getEvent(id) {
        const events = this.getEvents();
        return events.find(event => event.id === parseInt(id));
    }

    addEvent(eventData) {
        const data = this.getData();
        const newEvent = {
            ...eventData,
            id: Date.now(),
            expenses: [],
            income: [],
            activities: [],
            images: eventData.images || [],
            status: new Date(eventData.date) > new Date() ? "upcoming" : "completed"
        };
        
        data.events.push(newEvent);
        this.setData(data);
        return newEvent;
    }

    updateEvent(id, updatedData) {
        const data = this.getData();
        const eventIndex = data.events.findIndex(event => event.id === parseInt(id));
        
        if (eventIndex !== -1) {
            // Merge images arrays if provided
            if (updatedData.images) {
                data.events[eventIndex].images = updatedData.images;
                delete updatedData.images;
            }
            data.events[eventIndex] = { ...data.events[eventIndex], ...updatedData };
            this.setData(data);
            return data.events[eventIndex];
        }
        return null;
    }

    deleteEvent(id) {
        const data = this.getData();
        const initialLength = data.events.length;
        data.events = data.events.filter(event => event.id !== parseInt(id));
        
        if (data.events.length < initialLength) {
            this.setData(data);
            return true;
        }
        return false;
    }

    // Finance methods
    addExpense(eventId, expenseData) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        
        if (event) {
            const newExpense = {
                ...expenseData,
                id: Date.now(),
                amount: parseFloat(expenseData.amount)
            };
            event.expenses.push(newExpense);
            this.setData(data);
            return newExpense;
        }
        return null;
    }

    updateExpense(eventId, expenseId, updatedData) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        if (!event) return null;
        const idx = event.expenses.findIndex(exp => exp.id === parseInt(expenseId));
        if (idx === -1) return null;
        event.expenses[idx] = { ...event.expenses[idx], ...updatedData };
        this.setData(data);
        return event.expenses[idx];
    }

    addIncome(eventId, incomeData) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        
        if (event) {
            const newIncome = {
                ...incomeData,
                id: Date.now(),
                amount: parseFloat(incomeData.amount)
            };
            event.income.push(newIncome);
            this.setData(data);
            return newIncome;
        }
        return null;
    }

    updateIncome(eventId, incomeId, updatedData) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        if (!event) return null;
        const idx = event.income.findIndex(inc => inc.id === parseInt(incomeId));
        if (idx === -1) return null;
        event.income[idx] = { ...event.income[idx], ...updatedData };
        this.setData(data);
        return event.income[idx];
    }

    deleteFinanceItem(eventId, itemType, itemId) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        
        if (event) {
            if (itemType === 'expense') {
                event.expenses = event.expenses.filter(expense => expense.id !== parseInt(itemId));
            } else if (itemType === 'income') {
                event.income = event.income.filter(income => income.id !== parseInt(itemId));
            }
            this.setData(data);
            return true;
        }
        return false;
    }

    // Activity methods
    addActivity(eventId, activityData) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        
        if (event) {
            const newActivity = {
                ...activityData,
                id: Date.now()
            };
            event.activities.push(newActivity);
            this.setData(data);
            return newActivity;
        }
        return null;
    }

    updateActivity(eventId, activityId, updatedData) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        if (!event) return null;
        const idx = event.activities.findIndex(a => a.id === parseInt(activityId));
        if (idx === -1) return null;
        event.activities[idx] = { ...event.activities[idx], ...updatedData };
        this.setData(data);
        return event.activities[idx];
    }

    deleteActivity(eventId, activityId) {
        const data = this.getData();
        const event = data.events.find(e => e.id === parseInt(eventId));
        
        if (event) {
            event.activities = event.activities.filter(activity => activity.id !== parseInt(activityId));
            this.setData(data);
            return true;
        }
        return false;
    }

    // Getters for reference data
    getFamilies() {
        return this.getData()?.families || [];
    }

    getFamilyNames() {
        return this.getFamilies().map(family => family.name);
    }

    getExpenseCategories() {
        return this.getData()?.expenseCategories || [];
    }

    getPaymentModes() {
        return this.getData()?.paymentModes || [];
    }

    getActivityCategories() {
        return this.getData()?.activityCategories || [];
    }

    // Settings methods
    getSettings() {
        return this.getData()?.settings || {};
    }

    updateSettings(newSettings) {
        const data = this.getData();
        data.settings = { ...data.settings, ...newSettings };
        this.setData(data);
        return data.settings;
    }

    // Admin authentication
    validateAdminPassword(password) {
        const settings = this.getSettings();
        return password === settings.adminPassword;
    }

    changeAdminPassword(newPassword) {
        return this.updateSettings({ adminPassword: newPassword });
    }
}

class UIController {
    constructor() {
        this.dataManager = new DataManager();
        this.currentEvent = null;
        this.currentEditingEvent = null;
        this.charts = {};
        this.isAdmin = false;
        this.currentFilters = {
            year: '',
            search: '',
            sortBy: 'date'
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateHeroStats();
        this.renderEvents();
        this.renderAnalytics();
        this.updateAdminUI();
        this.setupAdminPanelHandlers();
        this.applySettingsToUI();
        this.setupVenueAutocomplete();
        this.setupSearchDebounce();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        if (navToggle) {
            navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Admin toggle (safe binding)
        const adminToggleEl = document.getElementById('adminToggle');
        if (adminToggleEl) {
            adminToggleEl.addEventListener('click', () => this.toggleAdmin());
        }

        // Floating admin button
        const floatingAdminBtn = document.getElementById('floatingAdminBtn');
        if (floatingAdminBtn) {
            floatingAdminBtn.addEventListener('click', () => this.toggleAdmin());
        }

        // Footer admin logout button
        const footerAdminLogout = document.getElementById('footerAdminLogout');
        if (footerAdminLogout) {
            footerAdminLogout.addEventListener('click', () => this.logout());
        }

        // Filter and search
        document.getElementById('filterBtn').addEventListener('click', () => this.showFilterModal());
        
        // Real-time search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }

        // Modal handlers
        this.setupModalHandlers();

        // Form handlers
        this.setupFormHandlers();

        // Add event button
        document.getElementById('addEventBtn').addEventListener('click', () => this.showAddEventModal());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    handleKeyboardShortcuts(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'n':
                    if (this.isAdmin) {
                        e.preventDefault();
                        this.showAddEventModal();
                    }
                    break;
                case 'f':
                    e.preventDefault();
                    document.getElementById('searchInput').focus();
                    break;
            }
        }
        
        if (e.key === 'Escape') {
            this.closeAllModals();
        }
    }

    setupSearchDebounce() {
        let searchTimeout;
        this.handleSearch = (query) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.currentFilters.search = query.toLowerCase().trim();
                this.renderEvents();
            }, 300);
        };
    }

    /***** Venue autocomplete using Nominatim (OpenStreetMap) *****/
    setupVenueAutocomplete() {
        const input = document.getElementById('eventVenueInput');
        const dataList = document.getElementById('venueSuggestions');
        if (!input || !dataList) return;

        let timeout;
        input.addEventListener('input', (e) => {
            const q = e.target.value.trim();
            clearTimeout(timeout);
            if (!q) return;
            timeout = setTimeout(async () => {
                try {
                    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}&limit=5`;
                    const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
                    const places = await res.json();
                    dataList.innerHTML = places.map(p => `<option value="${p.display_name}"></option>`).join('');
                } catch (err) {
                    console.warn('Venue autocomplete failed', err);
                }
            }, 400);
        });
    }

    setupModalHandlers() {
        // Close modal handlers
        document.querySelectorAll('.modal__close, .modal__overlay').forEach(element => {
            element.addEventListener('click', (e) => {
                // If this is an overlay, only close when clicking the overlay itself (not children)
                if (element.classList.contains('modal__overlay')) {
                    if (e.target === element) this.closeAllModals();
                    return;
                }

                // For close buttons, allow clicks on the button or any child (e.g., icon)
                if (element.classList.contains('modal__close')) {
                    if (element.contains(e.target)) this.closeAllModals();
                }
            });
        });
    }

    setupFormHandlers() {
        // Admin login form
        document.getElementById('adminLoginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAdminLogin();
        });

        // Event form
        document.getElementById('eventForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleEventForm();
        });

        // Finance form
        document.getElementById('financeForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFinanceForm();
        });

        // Activity form
        document.getElementById('activityForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleActivityForm();
        });

        // Filter form
        this.setupFilterForm();

        // Cancel buttons
        document.getElementById('cancelEventForm').addEventListener('click', () => this.closeAllModals());
        document.getElementById('cancelFinanceForm').addEventListener('click', () => {
            // close finance modal only and keep event modal open on finances tab
            this.closeModal('financeModal');
            const financeTabBtn = document.querySelector('.tab-btn[data-tab="finances"]');
            if (financeTabBtn) financeTabBtn.click();
        });
        document.getElementById('cancelActivityForm').addEventListener('click', () => this.closeAllModals());
    }

    setupFilterForm() {
        // Populate filter year options
        const years = [...new Set(this.dataManager.getEvents().map(event => event.year))].sort((a, b) => b - a);
        const filterYear = document.getElementById('filterYear');
        
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            filterYear.appendChild(option);
        });

        // Filter form handler
        document.getElementById('filterForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.applyFilters();
        });

        document.getElementById('clearFilters').addEventListener('click', () => {
            this.clearFilters();
        });

        document.getElementById('closeFilterModal').addEventListener('click', () => {
            this.closeAllModals();
        });
    }

    handleNavigation(e) {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        
        // Update active nav link
        document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
        
        // Scroll to section
        this.scrollToSection(section);
    }

    scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    toggleMobileMenu() {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.toggle('nav__menu--open');
    }

    toggleAdmin() {
        if (this.isAdmin) {
            this.logout();
        } else {
            this.showModal('adminModal');
        }
    }

    handleAdminLogin() {
        const password = document.getElementById('adminPassword').value;
        
        if (this.dataManager.validateAdminPassword(password)) {
            this.isAdmin = true;
            this.updateAdminUI();
            this.closeAllModals();
            this.showToast('Admin login successful!', 'success');
            // Open admin panel automatically after login so admin can edit settings
            this.openAdminPanel();
            document.getElementById('adminPassword').value = '';
        } else {
            this.showToast('Invalid password.', 'error');
            document.getElementById('adminPassword').focus();
        }
    }

    logout() {
        this.isAdmin = false;
        this.updateAdminUI();
        this.showToast('Logged out successfully', 'success');
    }

    updateAdminUI() {
        const adminElements = document.querySelectorAll('.admin-only');
        const adminToggle = document.getElementById('adminToggle');
        const adminBtnText = document.getElementById('adminBtnText');
        const floatingAdminBtn = document.getElementById('floatingAdminBtn');
        
        // Add/remove admin-active class to body
        if (this.isAdmin) {
            document.body.classList.add('admin-active');
        } else {
            document.body.classList.remove('admin-active');
        }
        
        adminElements.forEach(el => {
            if (this.isAdmin) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
        
        if (adminBtnText) adminBtnText.textContent = this.isAdmin ? 'Logout' : 'Admin';
        if (adminToggle) adminToggle.title = this.isAdmin ? 'Logout from admin panel' : 'Login to admin panel';
        
        // Update floating button title
        if (floatingAdminBtn) {
            floatingAdminBtn.title = this.isAdmin ? 'Logout from Admin' : 'Admin Access';
        }
        // Show/Hide add event button
        const addEventBtn = document.getElementById('addEventBtn');
        if (addEventBtn) {
            if (this.isAdmin) addEventBtn.classList.remove('hidden'); else addEventBtn.classList.add('hidden');
        }
        // Enable/disable inline editable mini controls based on admin state
        const miniDate = document.getElementById('eventDateInputMini');
        const miniBudget = document.getElementById('eventBudgetInputMini');
        const miniVenue = document.getElementById('eventVenueInputMini');
        const miniGuests = document.getElementById('eventGuestsInputMini');
        [miniDate, miniBudget, miniVenue, miniGuests].forEach(el => {
            if (!el) return;
            el.disabled = !this.isAdmin;
            // add a subtle readonly visual affordance
            if (this.isAdmin) el.classList.remove('disabled-nonadmin'); else el.classList.add('disabled-nonadmin');
        });
    }

    // Admin panel methods
    openAdminPanel() {
        // Populate admin panel with current settings
        const settings = this.dataManager.getSettings();
        document.getElementById('siteNameInput').value = settings.siteName || '';
        document.getElementById('taglineInput').value = settings.tagline || '';
        document.getElementById('designedByInput').value = settings.designedBy || '';
        document.getElementById('partneredWithInput').value = settings.partneredWith || '';
        document.getElementById('adminPasswordInput').value = '';

        this.showModal('adminPanelModal');
    }

    setupAdminPanelHandlers() {
        const adminPanelForm = document.getElementById('adminPanelForm');
        if (adminPanelForm) {
            adminPanelForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const newSettings = {
                    siteName: document.getElementById('siteNameInput').value.trim(),
                    tagline: document.getElementById('taglineInput').value.trim(),
                    designedBy: document.getElementById('designedByInput').value.trim(),
                    partneredWith: document.getElementById('partneredWithInput').value.trim()
                };

                const newPassword = document.getElementById('adminPasswordInput').value.trim();
                if (newPassword) {
                    newSettings.adminPassword = newPassword;
                }

                this.dataManager.updateSettings(newSettings);
                this.applySettingsToUI();
                this.closeAllModals();
                this.showToast('Settings updated successfully', 'success');
            });
        }

        const cancelAdminPanel = document.getElementById('cancelAdminPanel');
        if (cancelAdminPanel) cancelAdminPanel.addEventListener('click', () => this.closeAllModals());
        const closeAdminPanelModal = document.getElementById('closeAdminPanelModal');
        if (closeAdminPanelModal) closeAdminPanelModal.addEventListener('click', () => this.closeAllModals());
    }

    applySettingsToUI() {
        const settings = this.dataManager.getSettings();
        const brandTitle = document.getElementById('brandTitle');
        const brandTagline = document.getElementById('brandTagline');
        const designedByEl = document.getElementById('designedBy');
        const partneredWithEl = document.getElementById('partneredWith');

        if (brandTitle) brandTitle.textContent = settings.siteName || 'Vallamkonda ManasAI';
        if (brandTagline) brandTagline.textContent = settings.tagline || 'Conscious intelligence in motion';
        if (designedByEl) designedByEl.textContent = settings.designedBy || '';
        if (partneredWithEl) partneredWithEl.textContent = settings.partneredWith || '';
    }

    showFilterModal() {
        // Set current filter values
        document.getElementById('filterYear').value = this.currentFilters.year;
        document.getElementById('filterSort').value = this.currentFilters.sortBy;
        
        this.showModal('filterModal');
    }

    applyFilters() {
        this.currentFilters.year = document.getElementById('filterYear').value;
        this.currentFilters.sortBy = document.getElementById('filterSort').value;
        
        this.renderEvents();
        this.closeAllModals();
        this.showToast('Filters applied successfully', 'success');
    }

    clearFilters() {
        this.currentFilters = {
            year: '',
            search: '',
            sortBy: 'date'
        };
        
        document.getElementById('filterYear').value = '';
        document.getElementById('filterSort').value = 'date';
        document.getElementById('searchInput').value = '';
        
        this.renderEvents();
        this.closeAllModals();
        this.showToast('Filters cleared', 'success');
    }

    filterAndSortEvents(events) {
        let filteredEvents = [...events];
        
        // Apply year filter
        if (this.currentFilters.year) {
            filteredEvents = filteredEvents.filter(event => event.year === parseInt(this.currentFilters.year));
        }
        
        // Apply search filter
        if (this.currentFilters.search) {
            filteredEvents = filteredEvents.filter(event => 
                event.name.toLowerCase().includes(this.currentFilters.search) ||
                event.description.toLowerCase().includes(this.currentFilters.search) ||
                event.venue.toLowerCase().includes(this.currentFilters.search)
            );
        }
        
        // Apply sorting
        switch (this.currentFilters.sortBy) {
            case 'date':
                filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'date-asc':
                filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'name':
                filteredEvents.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'budget':
                filteredEvents.sort((a, b) => b.totalBudget - a.totalBudget);
                break;
            case 'budget-asc':
                filteredEvents.sort((a, b) => a.totalBudget - b.totalBudget);
                break;
            default:
                filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        
        return filteredEvents;
    }

    updateHeroStats() {
        const events = this.dataManager.getEvents();
        const families = this.dataManager.getFamilies();
        // Compute total spent across all events (sum of all event expenses)
        const totalSpent = events.reduce((sum, event) => {
            const eventExpenses = (Array.isArray(event.expenses) ? event.expenses : []).reduce((s, e) => s + (e.amount || 0), 0);
            return sum + eventExpenses;
        }, 0);

        // Find families involved in existing events
        const involvedFamilyNames = new Set();
        events.forEach(event => {
            if (Array.isArray(event.income)) {
                event.income.forEach(inc => {
                    if (inc.family) involvedFamilyNames.add(inc.family);
                });
            }
        });
        // Sum members of only involved families
        const involvedFamilies = families.filter(fam => involvedFamilyNames.has(fam.name));
        const totalMembers = involvedFamilies.reduce((sum, fam) => sum + (fam.members || 0), 0);

        // Animate numbers
        this.animateNumber('totalEvents', events.length);
        this.animateNumber('totalFamilies', totalMembers);
        // show total spent in hero (currency)
        this.animateNumber('totalSpent', totalSpent, true);
    }

    animateNumber(elementId, targetValue, isCurrency = false) {
        const element = document.getElementById(elementId);
        const startValue = 0;
        const duration = 1000;
        const startTime = performance.now();
        
        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);
            
            if (isCurrency) {
                element.textContent = `₹${this.formatCurrency(currentValue)}`;
            } else {
                element.textContent = currentValue;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };
        
        requestAnimationFrame(updateNumber);
    }

    renderEvents() {
        const eventsGrid = document.getElementById('eventsGrid');
        const allEvents = this.dataManager.getEvents();
        const events = this.filterAndSortEvents(allEvents);
        
        if (events.length === 0) {
            const isEmpty = allEvents.length === 0;
            const message = isEmpty ? 
                'Start by adding your first family event' : 
                'No events match your current filters';
            const icon = isEmpty ? 'fas fa-calendar-plus' : 'fas fa-filter';
            
            eventsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="${icon}"></i>
                    <h3>${isEmpty ? 'No Events Yet' : 'No Results Found'}</h3>
                    <p>${message}</p>
                    ${!isEmpty ? '<button class="btn btn--outline" onclick="app.clearFilters()">Clear Filters</button>' : ''}
                </div>
            `;
            return;
        }
        
        eventsGrid.innerHTML = events.map(event => this.createEventCard(event)).join('');
        
        // Use delegated event handling on the grid so handlers don't duplicate and clicks always work
        const eventsGridEl = document.getElementById('eventsGrid');
        if (eventsGridEl && !eventsGridEl.dataset.delegateAttached) {
            eventsGridEl.addEventListener('click', (e) => {
                // Admin action buttons (edit/delete)
                const adminBtn = e.target.closest('.admin-btn');
                if (adminBtn) {
                    e.stopPropagation();
                    const action = adminBtn.dataset.action;
                    const eventId = adminBtn.dataset.eventId;
                    if (action === 'edit') {
                        this.editEvent(eventId);
                    } else if (action === 'delete') {
                        this.deleteEvent(eventId);
                    }
                    return;
                }

                // Card click -> open details (ignore clicks inside admin-actions)
                const card = e.target.closest('.event-card');
                if (card && !e.target.closest('.admin-actions')) {
                    const eventId = card.dataset.eventId;
                    // Event card click handled
                    this.showEventDetails(eventId);
                }
            });
            eventsGridEl.dataset.delegateAttached = '1';
        }
    }

    createEventCard(event) {
        const totalExpenses = event.expenses.reduce((sum, exp) => sum + exp.amount, 0);
        const totalIncome = event.income.reduce((sum, inc) => sum + inc.amount, 0);
        const budgetUsed = event.totalBudget > 0 ? (totalExpenses / event.totalBudget) * 100 : 0;
        const balance = totalIncome - totalExpenses;

        const statusClass = new Date(event.date) > new Date() ? 'upcoming' : 'completed';
        const statusText = statusClass === 'upcoming' ? 'Upcoming' : 'Completed';

        // Choose image: uploaded images take precedence
        const cardImage = (event.images && event.images.length > 0) ? event.images[0] : '';

        return `
            <div class="event-card" data-event-id="${event.id}">
                <div class="event-card__media">
                    ${cardImage ? `<img src="${cardImage}" alt="${event.name}" class="event-card__img">` : (event.googlePhotosLink ? `<div class="event-card__placeholder"><a href="${event.googlePhotosLink}" target="_blank" class="btn btn--primary btn--sm">View Album</a></div>` : `<div class="event-card__placeholder"><i class="fas fa-images"></i></div>` ) }
                </div>
                <div class="event-card__header">
                    <h3 class="event-card__title">${event.name}</h3>
                    <div class="event-card__date">
                        <i class="fas fa-calendar"></i>
                        ${this.formatDate(event.date)}
                    </div>
                    <div class="event-card__status event-card__status--${statusClass}">
                        ${statusText}
                    </div>
                    <div class="admin-actions admin-only ${this.isAdmin ? '' : 'hidden'}">
                        <button class="admin-btn" data-action="edit" data-event-id="${event.id}" title="Edit Event">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="admin-btn" data-action="delete" data-event-id="${event.id}" title="Delete Event">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="event-card__body">
                    <p class="event-card__description">${event.description}</p>
                    <div class="event-stats">
                        <div class="event-stat">
                            <div class="event-stat__value"><i class='fas fa-rupee-sign'></i> ${this.formatCurrency(event.totalBudget)}</div>
                            <div class="event-stat__label">Budget</div>
                        </div>
                        <div class="event-stat">
                            <div class="event-stat__value"><i class='fas fa-rupee-sign'></i> ${this.formatCurrency(totalExpenses)}</div>
                            <div class="event-stat__label">Spent</div>
                        </div>
                        <div class="event-stat">
                            <div class="event-stat__value"><i class='fas fa-rupee-sign'></i> ${this.formatCurrency(totalIncome)}</div>
                            <div class="event-stat__label">Received</div>
                        </div>
                        <div class="event-stat">
                            <div class="event-stat__value ${balance >= 0 ? 'text-success' : 'text-error'}"><i class='fas fa-rupee-sign'></i> ${this.formatCurrency(Math.abs(balance))}</div>
                            <div class="event-stat__label">${balance >= 0 ? 'Surplus' : 'Deficit'}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    showEventDetails(eventId) {
        const event = this.dataManager.getEvent(eventId);
        if (!event) {
            this.showToast('Event not found', 'error');
            return;
        }
        
        this.currentEvent = event;
        this.populateEventModal(event);
        this.showModal('eventModal');
        this.setupEventTabs();
    }

    populateEventModal(event) {
        // Set modal title and basic info (guard elements that might not exist)
        const evtModalTitle = document.getElementById('eventModalTitle');
        if (evtModalTitle) evtModalTitle.textContent = event.name;
        const eventNameEl = document.getElementById('eventName');
        if (eventNameEl) eventNameEl.textContent = event.name;
        const eventDescriptionEl = document.getElementById('eventDescription');
        if (eventDescriptionEl) eventDescriptionEl.textContent = event.description;
        // populate readable fields (some layouts use mini inputs instead)
        const eventDateEl = document.getElementById('eventDate');
        if (eventDateEl) eventDateEl.textContent = this.formatDate(event.date);
        const eventBudgetEl = document.getElementById('eventBudget');
        if (eventBudgetEl) eventBudgetEl.textContent = `₹${this.formatCurrency(event.totalBudget)}`;
        const eventVenueEl = document.getElementById('eventVenue');
        if (eventVenueEl) eventVenueEl.textContent = event.venue || 'Not specified';
        const eventGuestsEl = document.getElementById('eventGuests');
        if (eventGuestsEl) eventGuestsEl.textContent = `${event.expectedGuests || 0} Guests`;

        // populate mini editable controls (overview quick-edit)
        const miniDate = document.getElementById('eventDateInputMini');
        const miniBudget = document.getElementById('eventBudgetInputMini');
        const miniVenue = document.getElementById('eventVenueInputMini');
        const miniGuests = document.getElementById('eventGuestsInputMini');
        if (miniDate) miniDate.value = event.date || '';
        if (miniBudget) miniBudget.value = event.totalBudget || '';
        if (miniVenue) miniVenue.value = event.venue || '';
        if (miniGuests) miniGuests.value = event.expectedGuests || '';

        // populate venue suggestions for overview from existing datalist
        const venueSuggestionsMini = document.getElementById('venueSuggestionsMini');
        if (venueSuggestionsMini) {
            const venues = this.dataManager.getAllVenues ? this.dataManager.getAllVenues() : [];
            venueSuggestionsMini.innerHTML = venues.map(v => `<option value="${v}"></option>`).join('');
        }
        
        // Calculate totals
        const totalExpenses = event.expenses.reduce((sum, exp) => sum + exp.amount, 0);
        const totalIncome = event.income.reduce((sum, inc) => sum + inc.amount, 0);
        const balance = totalIncome - totalExpenses;
        const budgetUsed = event.totalBudget > 0 ? (totalExpenses / event.totalBudget) * 100 : 0;
        
        const eventSpentEl = document.getElementById('eventTotalSpent');
        if (eventSpentEl) eventSpentEl.textContent = `₹${this.formatCurrency(totalExpenses)}`;
        const eventReceivedEl = document.getElementById('eventTotalReceived');
        if (eventReceivedEl) eventReceivedEl.textContent = `₹${this.formatCurrency(totalIncome)}`;
        const eventNetBalanceEl = document.getElementById('eventNetBalance');
        if (eventNetBalanceEl) {
            eventNetBalanceEl.textContent = `${balance < 0 ? '-' : ''}₹${this.formatCurrency(Math.abs(balance))}`;
        }
        
        // Update progress circle
        const progressCircle = document.getElementById('progressCircle');
        const progressPercent = document.getElementById('progressPercent');
        const clampedProgress = Math.min(budgetUsed, 100);
        if (progressCircle) {
            progressCircle.style.setProperty('--progress-deg', `${(clampedProgress / 100) * 360}deg`);
        }
        if (progressPercent) {
            progressPercent.textContent = `${Math.round(clampedProgress)}%`;
        }

        // Color code the balance
        const eventNetBalanceEl2 = document.getElementById('eventNetBalance');
        if (eventNetBalanceEl2) {
            eventNetBalanceEl2.className = `stat-value ${balance >= 0 ? 'text-success' : 'text-error'}`;
        }
        
        // Populate tabs
        this.populateFinances(event);
        this.populateActivities(event);
        this.setupPhotos(event);
        this.setupFinanceButtons(event);
        this.setupActivityButtons(event);

        // setup quick-save handlers for mini inputs
        this.setupOverviewMiniHandlers(event.id);
    }

    setupOverviewMiniHandlers(eventId) {
        const saveField = async (field, value) => {
            const updated = {};
            if (field === 'date') updated.date = value;
            if (field === 'totalBudget') updated.totalBudget = parseFloat(value) || 0;
            if (field === 'venue') updated.venue = value;
            if (field === 'expectedGuests') updated.expectedGuests = parseInt(value) || 0;
            if (Object.keys(updated).length > 0) {
                this.dataManager.updateEvent(eventId, updated);
                // Refresh current event and UI
                if (this.currentEvent && this.currentEvent.id == eventId) {
                    this.currentEvent = this.dataManager.getEvent(eventId);
                    this.populateEventModal(this.currentEvent);
                }
                this.renderEvents();
                this.renderAnalytics();
            }
        };

        const miniDate = document.getElementById('eventDateInputMini');
        const miniBudget = document.getElementById('eventBudgetInputMini');
        const miniVenue = document.getElementById('eventVenueInputMini');
        const miniGuests = document.getElementById('eventGuestsInputMini');

        if (miniDate) {
            miniDate.onchange = (e) => saveField('date', e.target.value);
        }
        if (miniBudget) {
            miniBudget.onchange = (e) => saveField('totalBudget', e.target.value);
        }
        if (miniVenue) {
            miniVenue.onchange = (e) => saveField('venue', e.target.value);
        }
        if (miniGuests) {
            miniGuests.onchange = (e) => saveField('expectedGuests', e.target.value);
        }
    }

    populateFinances(event) {
        const expensesList = document.getElementById('expensesList');
        const incomeList = document.getElementById('incomeList');
        
        // Expenses
        if (event.expenses.length === 0) {
            expensesList.innerHTML = '<div class="empty-state"><i class="fas fa-receipt"></i><h4>No expenses recorded</h4><p>Start tracking your event expenses</p></div>';
        } else {
            expensesList.innerHTML = event.expenses.map(expense => `
                <div class="finance-item">
                    <div class="finance-item__header">
                        <span class="finance-item__title">${expense.category}</span>
                        <span class="finance-item__amount">₹${this.formatCurrency(expense.amount)}</span>
                    </div>
                    <div class="finance-item__details">
                        <span>${expense.description}</span>
                        <span>${expense.paymentMode} • ${this.formatDate(expense.date)}</span>
                    </div>
                    <div class="finance-item__actions admin-only ${this.isAdmin ? '' : 'hidden'}">
                        <button class="admin-btn" onclick="app.editFinanceItem(${event.id}, 'expense', ${expense.id})" title="Edit Expense">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="admin-btn" onclick="app.deleteFinanceItem(${event.id}, 'expense', ${expense.id})" title="Delete Expense">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
        
        // Income
        if (event.income.length === 0) {
            incomeList.innerHTML = '<div class="empty-state"><i class="fas fa-hand-holding-usd"></i><h4>No contributions recorded</h4><p>Track family contributions here</p></div>';
        } else {
            incomeList.innerHTML = event.income.map(income => `
                <div class="finance-item">
                    <div class="finance-item__header">
                        <span class="finance-item__title">${income.family}</span>
                        <span class="finance-item__amount">₹${this.formatCurrency(income.amount)}</span>
                    </div>
                    <div class="finance-item__details">
                        <span>Family Contribution</span>
                        <span>${income.paymentMode} • ${this.formatDate(income.date)}</span>
                    </div>
                    <div class="finance-item__actions admin-only ${this.isAdmin ? '' : 'hidden'}">
                        <button class="admin-btn" onclick="app.editFinanceItem(${event.id}, 'income', ${income.id})" title="Edit Contribution">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="admin-btn" onclick="app.deleteFinanceItem(${event.id}, 'income', ${income.id})" title="Delete Contribution">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    populateActivities(event) {
        const activitiesList = document.getElementById('activitiesList');
        
        if (event.activities.length === 0) {
            activitiesList.innerHTML = '<div class="empty-state"><i class="fas fa-tasks"></i><h4>No activities scheduled</h4><p>Add activities to create an event timeline</p></div>';
        } else {
            // Sort activities by time
            const sortedActivities = [...event.activities].sort((a, b) => a.time.localeCompare(b.time));
            
            activitiesList.innerHTML = sortedActivities.map(activity => `
                <div class="activity-item">
                    <div class="activity-item__header">
                        <h4 class="activity-item__name">${activity.name}</h4>
                        <span class="activity-item__time">${this.formatTime(activity.time)}</span>
                    </div>
                    <div class="activity-item__details">
                        <strong>Participants:</strong> ${activity.participants}
                        ${activity.duration ? ` • <strong>Duration:</strong> ${activity.duration}` : ''}
                        ${activity.location ? ` • <strong>Location:</strong> ${activity.location}` : ''}
                    </div>
                    <div class="activity-item__description">${activity.description}</div>
                    <div class="activity-item__actions admin-only ${this.isAdmin ? '' : 'hidden'}">
                        <button class="admin-btn" onclick="app.editActivity(${event.id}, ${activity.id})" title="Edit Activity">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="admin-btn" onclick="app.deleteActivity(${event.id}, ${activity.id})" title="Delete Activity">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    setupPhotos(event) {
        const photoGallery = document.getElementById('photoGallery');
        const googlePhotosLink = document.getElementById('googlePhotosLink');
        
        if (googlePhotosLink) {
            googlePhotosLink.value = event.googlePhotosLink || '';
        }
        
        // If uploaded images exist, create a simple carousel
        if (event.images && event.images.length > 0) {
            photoGallery.innerHTML = `
                <div class="carousel" id="eventCarousel">
                    ${event.images.map((src, idx) => `<div class="carousel-slide ${idx===0? 'active' : ''}"><img src="${src}" alt="photo-${idx}"></div>`).join('')}
                </div>
            `;

            // Start auto-rotate
            let carouselIndex = 0;
            if (this._carouselInterval) clearInterval(this._carouselInterval);
            this._carouselInterval = setInterval(() => {
                const slides = photoGallery.querySelectorAll('.carousel-slide');
                if (!slides || slides.length === 0) return;
                slides[carouselIndex].classList.remove('active');
                carouselIndex = (carouselIndex + 1) % slides.length;
                slides[carouselIndex].classList.add('active');
            }, 3000);
        } else if (event.googlePhotosLink) {
            photoGallery.innerHTML = `
                <div class="gallery-placeholder">
                    <i class="fas fa-external-link-alt"></i>
                    <h4>Google Photos Album</h4>
                    <p>Click below to view the photo gallery</p>
                    <a href="${event.googlePhotosLink}" target="_blank" class="btn btn--primary" style="margin-top: 16px;">
                        <i class="fas fa-images"></i>
                        View Photo Album
                    </a>
                </div>
            `;
        } else {
            photoGallery.innerHTML = `
                <div class="gallery-placeholder">
                    <i class="fas fa-images"></i>
                    <h4>No Photos Yet</h4>
                    <p>Add Google Photos link or upload images to display event photos</p>
                </div>
            `;
        }
        
        // Update photos button
        const updateBtn = document.getElementById('updatePhotosBtn');
        if (updateBtn) {
            updateBtn.onclick = () => {
                const link = googlePhotosLink.value.trim();
                if (link && this.isValidUrl(link)) {
                    this.dataManager.updateEvent(event.id, { googlePhotosLink: link });
                    this.setupPhotos({ ...event, googlePhotosLink: link });
                    this.showToast('Photos link updated successfully', 'success');
                } else if (link) {
                    this.showToast('Please enter a valid URL', 'error');
                } else {
                    this.dataManager.updateEvent(event.id, { googlePhotosLink: '' });
                    this.setupPhotos({ ...event, googlePhotosLink: '' });
                    this.showToast('Photos link removed', 'success');
                }
            };
        }
    }

    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    setupFinanceButtons(event) {
        const addExpenseBtn = document.getElementById('addExpenseBtn');
        const addIncomeBtn = document.getElementById('addIncomeBtn');
        
        if (addExpenseBtn) {
            addExpenseBtn.onclick = () => this.showFinanceModal('expense', event.id);
        }
        
        if (addIncomeBtn) {
            addIncomeBtn.onclick = () => this.showFinanceModal('income', event.id);
        }
    }

    setupActivityButtons(event) {
        const addActivityBtn = document.getElementById('addActivityBtn');
        
        if (addActivityBtn) {
            addActivityBtn.onclick = () => this.showActivityModal(event.id);
        }
    }

    setupEventTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;
                
                // Update active tab button
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update active tab pane
                tabPanes.forEach(pane => {
                    pane.classList.remove('active');
                    if (pane.id === targetTab) {
                        pane.classList.add('active');
                    }
                });
            });
        });
    }

    // Event CRUD operations
    showAddEventModal() {
        if (!this.requireAdmin()) return;
        document.getElementById('eventFormTitle').textContent = 'Add New Event';
        const form = document.getElementById('eventForm');
        form.reset();
        delete form.dataset.editId;
        document.getElementById('eventYearInput').value = new Date().getFullYear();
        document.getElementById('eventDateInput').value = new Date().toISOString().split('T')[0];
        // Default budget start and step
        const budgetInput = document.getElementById('eventBudgetInput');
        if (budgetInput) {
            budgetInput.value = 1000;
            budgetInput.step = 1000;
            budgetInput.min = 0;
        }
        this.currentEditingEvent = null;
        this.showModal('eventFormModal');
    }

    editEvent(eventId) {
        if (!this.requireAdmin()) return;
        const event = this.dataManager.getEvent(eventId);
        if (!event) {
            this.showToast('Event not found', 'error');
            return;
        }
        
        this.currentEditingEvent = event;
        document.getElementById('eventFormTitle').textContent = 'Edit Event';
        document.getElementById('eventNameInput').value = event.name;
        document.getElementById('eventYearInput').value = event.year;
        document.getElementById('eventDateInput').value = event.date;
        const budgetInput = document.getElementById('eventBudgetInput');
        if (budgetInput) {
            budgetInput.value = event.totalBudget;
            budgetInput.step = 1000;
            budgetInput.min = 0;
        }
        document.getElementById('eventDescInput').value = event.description;
        document.getElementById('eventVenueInput').value = event.venue || '';
        document.getElementById('eventGuestsInput').value = event.expectedGuests || '';
        document.getElementById('eventPhotosInput').value = event.googlePhotosLink || '';
    // Clear file input since files can't be set programmatically
    const uploadInput = document.getElementById('eventPhotoUpload');
    if (uploadInput) uploadInput.value = '';
        
        // Close event detail modal if open
        this.closeModal('eventModal');
        this.showModal('eventFormModal');
    }

    deleteEvent(eventId) {
        if (!this.requireAdmin()) return;
        const event = this.dataManager.getEvent(eventId);
        if (!event) {
            this.showToast('Event not found', 'error');
            return;
        }
        
        if (confirm(`Are you sure you want to delete "${event.name}"? This action cannot be undone.`)) {
            if (this.dataManager.deleteEvent(eventId)) {
                this.renderEvents();
                this.updateHeroStats();
                this.renderAnalytics();
                this.closeAllModals();
                this.showToast('Event deleted successfully', 'success');
            } else {
                this.showToast('Failed to delete event', 'error');
            }
        }
    }

    async handleEventForm() {
        if (!this.requireAdmin()) return;
        const form = document.getElementById('eventForm');
        const formData = new FormData(form);
        
        const eventData = {
            name: document.getElementById('eventNameInput').value.trim(),
            year: parseInt(document.getElementById('eventYearInput').value),
            date: document.getElementById('eventDateInput').value,
            totalBudget: parseFloat(document.getElementById('eventBudgetInput').value) || 0,
            description: document.getElementById('eventDescInput').value.trim(),
            venue: document.getElementById('eventVenueInput').value.trim(),
            expectedGuests: parseInt(document.getElementById('eventGuestsInput').value) || 0,
            googlePhotosLink: document.getElementById('eventPhotosInput').value.trim()
        };

        // Handle uploaded photos (convert to data URLs)
        const uploadInput = document.getElementById('eventPhotoUpload');
        if (uploadInput && uploadInput.files && uploadInput.files.length > 0) {
            eventData.images = [];
            const files = Array.from(uploadInput.files).slice(0, 10);
            const readPromises = files.map(file => new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (ev) => resolve(ev.target.result);
                reader.readAsDataURL(file);
            }));
            // Because FileReader is async, await them before proceeding
            eventData.images = await Promise.all(readPromises);
        }
        
        // Validate required fields
        if (!eventData.name || !eventData.date || eventData.totalBudget < 0) {
            this.showToast('Please fill in all required fields correctly', 'error');
            return;
        }
        
        let success = false;
        
        if (this.currentEditingEvent) {
            // Update existing event
            const updated = this.dataManager.updateEvent(this.currentEditingEvent.id, eventData);
            if (updated) {
                success = true;
                this.showToast('Event updated successfully', 'success');
            }
        } else {
            // Add new event
            const created = this.dataManager.addEvent(eventData);
            if (created) {
                success = true;
                this.showToast('Event created successfully', 'success');
            }
        }
        
        if (success) {
            this.renderEvents();
            this.updateHeroStats();
            this.renderAnalytics();
            this.closeAllModals();
        } else {
            this.showToast('Failed to save event', 'error');
        }
    }

    // Finance operations
    showFinanceModal(type, eventId) {
        if (!this.requireAdmin()) return;
        document.getElementById('financeType').value = type;
        const form = document.getElementById('financeForm');
        form.dataset.eventId = eventId;
        delete form.dataset.editId;
        
    const familyGroup = document.getElementById('familyGroup');
    const categoryGroup = document.getElementById('categoryGroup');
    const paymentModeSelect = document.getElementById('paymentModeSelect');
        
    // Reset form
    document.getElementById('financeForm').reset();
        document.getElementById('financeType').value = type;
        document.getElementById('dateInput').value = new Date().toISOString().split('T')[0];
        
        if (type === 'expense') {
            document.getElementById('financeModalTitle').textContent = 'Add Expense';
            familyGroup.style.display = 'none';
            categoryGroup.style.display = 'block';
            
            // Populate categories
            const categories = this.dataManager.getExpenseCategories();
            // populate datalist & input
            const categoryInput = document.getElementById('categoryInput');
            const categorySuggestions = document.getElementById('categorySuggestions');
            if (categorySuggestions) categorySuggestions.innerHTML = categories.map(cat => `<option value="${cat}"></option>`).join('');
            if (categoryInput) categoryInput.value = '';
        } else {
            document.getElementById('financeModalTitle').textContent = 'Add Family Contribution';
            familyGroup.style.display = 'block';
            categoryGroup.style.display = 'none';
            
            // Populate families
            const families = this.dataManager.getFamilyNames();
            const familyInput = document.getElementById('familyInput');
            const familySuggestions = document.getElementById('familySuggestions');
            if (familySuggestions) familySuggestions.innerHTML = families.map(family => `<option value="${family}"></option>`).join('');
            if (familyInput) familyInput.value = '';
        }
        
        // Populate payment modes
        const paymentModes = this.dataManager.getPaymentModes();
    paymentModeSelect.innerHTML = paymentModes.map(mode => `<option value="${mode}">${mode}</option>`).join('');
        
    this.showModal('financeModal');
    }

    handleFinanceForm() {
        if (!this.requireAdmin()) return;
        const form = document.getElementById('financeForm');
        const eventId = form.dataset.eventId;
        const type = document.getElementById('financeType').value;
        const editId = form.dataset.editId || null;
        
        const data = {
            amount: parseFloat(document.getElementById('amountInput').value) || 0,
            paymentMode: document.getElementById('paymentModeSelect').value,
            description: document.getElementById('descriptionInput').value.trim(),
            date: document.getElementById('dateInput').value
        };
        
        if (data.amount <= 0) {
            this.showToast('Please enter a valid amount', 'error');
            return;
        }
        
        let success = false;
        
        if (type === 'expense') {
            // allow custom category via input
            data.category = (document.getElementById('categoryInput') || {}).value || document.getElementById('categorySelect') && document.getElementById('categorySelect').value;
            if (editId) {
                success = this.dataManager.updateExpense(eventId, editId, data);
            } else {
                success = this.dataManager.addExpense(eventId, data);
            }
        } else {
            data.family = (document.getElementById('familyInput') || {}).value || document.getElementById('familySelect') && document.getElementById('familySelect').value;
            if (editId) {
                success = this.dataManager.updateIncome(eventId, editId, data);
            } else {
                success = this.dataManager.addIncome(eventId, data);
            }
        }
        
        if (success) {
            // Update current event if modal is open
            if (this.currentEvent && this.currentEvent.id == eventId) {
                this.currentEvent = this.dataManager.getEvent(eventId);
                this.populateEventModal(this.currentEvent);
            }
            
            this.renderEvents();
            this.renderAnalytics();
            // Close only the finance modal and stay on the event details (finances tab)
            this.closeModal('financeModal');
            // Ensure finances tab is active
            const financeTabBtn = document.querySelector('.tab-btn[data-tab="finances"]');
            if (financeTabBtn) financeTabBtn.click();
            this.showToast(`${type === 'expense' ? 'Expense' : 'Contribution'} added successfully`, 'success');
        } else {
            this.showToast(`Failed to add ${type}`, 'error');
        }
    }

    // Edit a finance item (expense or income)
    editFinanceItem(eventId, type, itemId) {
        if (!this.requireAdmin()) return;
        const event = this.dataManager.getEvent(eventId);
        if (!event) return this.showToast('Event not found', 'error');

        let item;
        if (type === 'expense') item = event.expenses.find(e => e.id === parseInt(itemId));
        else item = event.income.find(i => i.id === parseInt(itemId));

        if (!item) return this.showToast('Item not found', 'error');

        // Pre-fill form
        document.getElementById('financeType').value = type;
        document.getElementById('financeForm').dataset.eventId = eventId;
        document.getElementById('financeForm').dataset.editId = itemId;
        document.getElementById('amountInput').value = item.amount;
        document.getElementById('paymentModeSelect').value = item.paymentMode || this.dataManager.getPaymentModes()[0];
        document.getElementById('descriptionInput').value = item.description || '';
        document.getElementById('dateInput').value = item.date || new Date().toISOString().split('T')[0];

        if (type === 'expense') {
            document.getElementById('categoryInput').value = item.category || '';
            document.getElementById('familyGroup').style.display = 'none';
            document.getElementById('categoryGroup').style.display = 'block';
            document.getElementById('financeModalTitle').textContent = 'Edit Expense';
        } else {
            document.getElementById('familyInput').value = item.family || '';
            document.getElementById('familyGroup').style.display = 'block';
            document.getElementById('categoryGroup').style.display = 'none';
            document.getElementById('financeModalTitle').textContent = 'Edit Contribution';
        }

        this.showModal('financeModal');
    }

    // Edit an activity
    editActivity(eventId, activityId) {
        if (!this.requireAdmin()) return;
        const event = this.dataManager.getEvent(eventId);
        if (!event) return this.showToast('Event not found', 'error');

        const activity = event.activities.find(a => a.id === parseInt(activityId));
        if (!activity) return this.showToast('Activity not found', 'error');

        const form = document.getElementById('activityForm');
        form.dataset.eventId = eventId;
        form.dataset.editId = activityId;
        document.getElementById('activityNameInput').value = activity.name || '';
        document.getElementById('participantsInput').value = activity.participants || '';
        document.getElementById('timeInput').value = activity.time || '10:00';
        document.getElementById('durationInput').value = activity.duration || '';
        document.getElementById('locationInput').value = activity.location || '';
        document.getElementById('activityDescInput').value = activity.description || '';

        this.showModal('activityModal');
    }

    deleteFinanceItem(eventId, itemType, itemId) {
        if (!this.requireAdmin()) return;
        const itemName = itemType === 'expense' ? 'expense' : 'contribution';
        
        if (confirm(`Are you sure you want to delete this ${itemName}?`)) {
            if (this.dataManager.deleteFinanceItem(eventId, itemType, itemId)) {
                // Update current event if modal is open
                if (this.currentEvent && this.currentEvent.id == eventId) {
                    this.currentEvent = this.dataManager.getEvent(eventId);
                    this.populateEventModal(this.currentEvent);
                }
                
                this.renderEvents();
                this.renderAnalytics();
                this.showToast(`${itemName} deleted successfully`, 'success');
            } else {
                this.showToast(`Failed to delete ${itemName}`, 'error');
            }
        }
    }

    // Activity operations
    showActivityModal(eventId) {
        if (!this.requireAdmin()) return;
        const form = document.getElementById('activityForm');
        form.reset();
        form.dataset.eventId = eventId;
        delete form.dataset.editId;
        document.getElementById('timeInput').value = '10:00';
        this.showModal('activityModal');
    }

    handleActivityForm() {
        if (!this.requireAdmin()) return;
        const form = document.getElementById('activityForm');
        const eventId = form.dataset.eventId;
        const editId = form.dataset.editId || null;

        const activityData = {
            name: document.getElementById('activityNameInput').value.trim(),
            participants: document.getElementById('participantsInput').value.trim(),
            time: document.getElementById('timeInput').value,
            duration: document.getElementById('durationInput').value.trim(),
            location: document.getElementById('locationInput').value.trim(),
            description: document.getElementById('activityDescInput').value.trim()
        };
        
        if (!activityData.name || !activityData.participants || !activityData.time) {
            this.showToast('Please fill in all required fields', 'error');
            return;
        }
        
        let success = false;
        if (editId) {
            const updated = this.dataManager.updateActivity(eventId, editId, activityData);
            success = !!updated;
        } else {
            success = !!this.dataManager.addActivity(eventId, activityData);
        }

        if (success) {
            // Update current event if modal is open
            if (this.currentEvent && this.currentEvent.id == eventId) {
                this.currentEvent = this.dataManager.getEvent(eventId);
                this.populateEventModal(this.currentEvent);
            }
            this.closeAllModals();
            this.showToast(editId ? 'Activity updated successfully' : 'Activity added successfully', 'success');
        } else {
            this.showToast(editId ? 'Failed to update activity' : 'Failed to add activity', 'error');
        }
    }

    deleteActivity(eventId, activityId) {
        if (!this.requireAdmin()) return;
        if (confirm('Are you sure you want to delete this activity?')) {
            if (this.dataManager.deleteActivity(eventId, activityId)) {
                // Update current event if modal is open
                if (this.currentEvent && this.currentEvent.id == eventId) {
                    this.currentEvent = this.dataManager.getEvent(eventId);
                    this.populateEventModal(this.currentEvent);
                }
                
                this.showToast('Activity deleted successfully', 'success');
            } else {
                this.showToast('Failed to delete activity', 'error');
            }
        }
    }

    // Analytics and Charts
    renderAnalytics() {
        this.renderBudgetChart();
        this.renderContributionChart();
        this.renderExpenseChart();
        this.renderPaymentChart();
    }

    renderBudgetChart() {
        const ctx = document.getElementById('budgetChart').getContext('2d');
        const events = this.dataManager.getEvents();
        
        const data = events.map(event => {
            const totalExpenses = event.expenses.reduce((sum, exp) => sum + exp.amount, 0);
            const totalIncome = event.income.reduce((sum, inc) => sum + inc.amount, 0);
            return {
                event: event.name.length > 15 ? event.name.substring(0, 15) + '...' : event.name,
                budget: event.totalBudget,
                expenses: totalExpenses,
                income: totalIncome
            };
        });
        
        if (this.charts.budget) {
            this.charts.budget.destroy();
        }
        
        this.charts.budget = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(d => d.event),
                datasets: [
                    {
                        label: 'Budget',
                        data: data.map(d => d.budget),
                        backgroundColor: '#3b82f6',
                        borderRadius: 8,
                        borderSkipped: false
                    },
                    {
                        label: 'Expenses',
                        data: data.map(d => d.expenses),
                        backgroundColor: '#ef4444',
                        borderRadius: 8,
                        borderSkipped: false
                    },
                    {
                        label: 'Income',
                        data: data.map(d => d.income),
                        backgroundColor: '#22c55e',
                        borderRadius: 8,
                        borderSkipped: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ₹' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    renderContributionChart() {
        const ctx = document.getElementById('contributionChart').getContext('2d');
        const events = this.dataManager.getEvents();
        
        const familyContributions = {};
        events.forEach(event => {
            event.income.forEach(income => {
                const family = income.family.length > 20 ? income.family.substring(0, 20) + '...' : income.family;
                familyContributions[family] = (familyContributions[family] || 0) + income.amount;
            });
        });
        
        if (this.charts.contribution) {
            this.charts.contribution.destroy();
        }
        
        const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#22c55e', '#f97316', '#ec4899', '#14b8a6'];
        
        this.charts.contribution = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(familyContributions),
                datasets: [{
                    data: Object.values(familyContributions),
                    backgroundColor: colors.slice(0, Object.keys(familyContributions).length),
                    borderWidth: 0,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return context.label + ': ₹' + context.parsed.toLocaleString() + ' (' + percentage + '%)';
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }

    renderExpenseChart() {
        const ctx = document.getElementById('expenseChart').getContext('2d');
        const events = this.dataManager.getEvents();
        
        const categoryExpenses = {};
        events.forEach(event => {
            event.expenses.forEach(expense => {
                categoryExpenses[expense.category] = (categoryExpenses[expense.category] || 0) + expense.amount;
            });
        });
        
        if (this.charts.expense) {
            this.charts.expense.destroy();
        }
        
        const colors = ['#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#22c55e', '#f97316', '#ec4899', '#14b8a6', '#6366f1', '#84cc16'];
        
        this.charts.expense = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(categoryExpenses),
                datasets: [{
                    data: Object.values(categoryExpenses),
                    backgroundColor: colors.slice(0, Object.keys(categoryExpenses).length),
                    borderWidth: 0,
                    hoverBorderWidth: 2,
                    hoverBorderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return context.label + ': ₹' + context.parsed.toLocaleString() + ' (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }

    renderPaymentChart() {
        const ctx = document.getElementById('paymentChart').getContext('2d');
        const events = this.dataManager.getEvents();
        
        const paymentModes = {};
        events.forEach(event => {
            [...event.expenses, ...event.income].forEach(transaction => {
                paymentModes[transaction.paymentMode] = (paymentModes[transaction.paymentMode] || 0) + transaction.amount;
            });
        });
        
        if (this.charts.payment) {
            this.charts.payment.destroy();
        }
        
        this.charts.payment = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(paymentModes),
                datasets: [{
                    label: 'Transaction Amount',
                    data: Object.values(paymentModes),
                    backgroundColor: '#3b82f6',
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Total: ₹' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '₹' + value.toLocaleString();
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Modal management
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            // Only lock body scroll for blocking modals. Some modals (like adminPanel)
            // should allow page scrolling — they will carry the class `modal--allow-scroll`.
            if (!modal.classList.contains('modal--allow-scroll')) {
                document.body.style.overflow = 'hidden';
            }
            
            // Focus first input
            setTimeout(() => {
                const firstInput = modal.querySelector('input:not([type="hidden"]), textarea, select');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 100);
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
        // Only reset overflow if no allow-scroll modals were open
        document.body.style.overflow = '';
    }

    // Toast notifications
    showToast(message, type = 'success') {
        const toastId = type === 'error' ? 'errorToast' : 'successToast';
        const toast = document.getElementById(toastId);
        const messageEl = toast.querySelector('.toast-message');
        
        messageEl.textContent = message;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    // Utility methods
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN').format(amount);
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    formatTime(timeString) {
        return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }

    // Require admin helper - returns true if admin, otherwise shows a toast and returns false
    requireAdmin() {
        if (!this.isAdmin) {
            this.showToast('Admin access required to perform this action', 'error');
            return false;
        }
        return true;
    }
}

// Global functions for inline event handlers
window.scrollToSection = function(sectionId) {
    if (window.app) {
        window.app.scrollToSection(sectionId);
    }
};

// Global app instance
let app;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        app = new UIController();
        
        // Expose methods to global scope for inline event handlers
        window.app = {
            instance: app,
            showEventDetails: (id) => app.showEventDetails(id),
            editEvent: (id) => app.editEvent(id),
            deleteEvent: (id) => app.deleteEvent(id),
            deleteFinanceItem: (eventId, type, id) => app.deleteFinanceItem(eventId, type, id),
            editFinanceItem: (eventId, type, id) => app.editFinanceItem(eventId, type, id),
            deleteActivity: (eventId, id) => app.deleteActivity(eventId, id),
            editActivity: (eventId, id) => app.editActivity(eventId, id),
            clearFilters: () => app.clearFilters(),
            scrollToSection: (id) => app.scrollToSection(id)
        };
        
        // Initialize navbar functionality
        initializeNavbar();
        initializeAnalyticsFullscreen();
        initializePasswordToggle();
        
        console.log('✅ Vallamkonda ManasAI - Family Event Management System initialized successfully');
    } catch (error) {
        console.error('❌ Failed to initialize application:', error);
    }
});

// Modern Navbar Functionality
function initializeNavbar() {
    const header = document.querySelector('.header');
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Use 'open' so it matches the CSS (.nav__menu.open)
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && navMenu.classList.contains('open')) {
                    navToggle.classList.remove('open');
                    navMenu.classList.remove('open');
                }
        });
    }
    
    // Scroll effects
    if (header) {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add scrolled class for styling
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Active nav link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollPosition = window.scrollY + 100;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Add/Remove body class for admin visibility gating
UIController.prototype.updateAdminUI = (function(original){
    return function(){
        const res = original.apply(this, arguments);
        document.body.classList.toggle('is-admin', !!this.isAdmin);
        // Ensure body can still scroll when admin mode is enabled
        if (this.isAdmin && document.body.style.overflow === 'hidden') {
            document.body.style.overflow = '';
            console.log('Restored body scroll in admin mode');
        }
            const adminToggle = document.getElementById('adminToggle');
            if (adminToggle) adminToggle.setAttribute('aria-pressed', this.isAdmin ? 'true' : 'false');
        return res;
    };
})(UIController.prototype.updateAdminUI);

// Toggle password visibility in admin modal
function initializePasswordToggle(){
    const toggle = document.getElementById('togglePassword');
    const input = document.getElementById('adminPassword');
    if(!toggle || !input) return;
    toggle.addEventListener('click', () => {
        const isText = input.type === 'text';
        input.type = isText ? 'password' : 'text';
        toggle.setAttribute('aria-label', isText ? 'Show password' : 'Hide password');
        const icon = toggle.querySelector('i');
        if(icon){ icon.className = isText ? 'fas fa-eye' : 'fas fa-eye-slash'; }
    });
}

// Fullscreen charts per analytics card
function initializeAnalyticsFullscreen(){
    document.querySelectorAll('.analytics-card .chart-action').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.analytics-card');
            if(!card) return;
            const willFullscreen = !card.classList.contains('fullscreen');
            document.querySelectorAll('.analytics-card.fullscreen').forEach(c => c.classList.remove('fullscreen'));
            if(willFullscreen){ card.classList.add('fullscreen'); }
            // Resize charts if present
            if (app && app.charts) {
                setTimeout(() => { Object.values(app.charts).forEach(ch => ch && ch.resize && ch.resize()); }, 50);
            }
        });
    });
}

// Optionally initialize particles.js if available (non-blocking)
(function initParticles(){
    if (!window.particlesJS) return; // user may include particles.js separately
    const pal1 = getComputedStyle(document.documentElement).getPropertyValue('--pal-1').trim() || '#D6E6F2';
    const pal2 = getComputedStyle(document.documentElement).getPropertyValue('--pal-2').trim() || '#C8ABE6';
    const pal3 = getComputedStyle(document.documentElement).getPropertyValue('--pal-3').trim() || '#6EB8E1';
    window.particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: [pal2, pal3] },
            shape: { type: 'circle' },
            opacity: { value: 0.4, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: pal3, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        retina_detect: true
    });
})();

// Handle page visibility change to refresh data
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && app) {
        app.renderEvents();
        app.updateHeroStats();
        app.renderAnalytics();
    }
});

// Handle window resize for charts
window.addEventListener('resize', () => {
    if (app && app.charts) {
        Object.values(app.charts).forEach(chart => {
            if (chart && typeof chart.resize === 'function') {
                chart.resize();
            }
        });
    }
});

// Ensure mobile hamburger wiring (safe id checks)
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        // close menu when a nav link is clicked (single page nav)
        navMenu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    navToggle.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});

// Mobile navbar hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // use 'open' class for CSS and accessibility
            navMenu.classList.toggle('open');
            navToggle.classList.toggle('open');
            const isOpen = navMenu.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
});