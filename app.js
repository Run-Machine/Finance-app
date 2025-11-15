// --- Storage Helper Functions (localStorage only, no Firebase) ---
function saveToLocalStorage() {
    const data = {
        events: window.app?.dataManager?.getEvents?.() || [],
        timestamp: new Date().toISOString()
    };
    localStorage.setItem("vallamkonda_finance_data", JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem("vallamkonda_finance_data");
    return data ? JSON.parse(data).events : [];
}

// Smooth scroll helper used by header CTA buttons in `index.html`
function scrollToSection(sectionId) {
    try {
        const el = document.getElementById(sectionId);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // update nav active state if nav links exist
        document.querySelectorAll('.nav__link').forEach(link => {
            if (link.dataset && link.dataset.section === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } catch (err) {
        console.error('scrollToSection error:', err);
    }
}
// expose globally so inline onclick in index.html can call it
window.scrollToSection = scrollToSection;

// --- Constants and Default Data ---
const ADMIN_PASSWORD = "vallamkonda@2025";
const DEFAULT_SETTINGS = {
    siteName: "Vallamkonda Finance & Events",
    tagline: "Conscious intelligence in motion",
    designedBy: "Harsha Vallamkonda",
    partneredWith: "Sunday Saradalu"
};

const DEFAULT_EVENT_CATEGORIES = [
    "Food", "Decor", "Entertainment", "Venue", "Travel", "Gifts", "Photography", "Miscellaneous"
];

const DEFAULT_PAYMENT_MODES = [
    "Cash", "UPI", "Bank Transfer", "Credit Card", "Debit Card"
];

const DEFAULT_ACTIVITY_CATEGORIES = [
    "Cultural", "Games", "Food", "Ceremony", "Outdoor", "Indoor"
];

const DEFAULT_FAMILIES = [
    {
        id: "fam1",
        name: "Vallamkonda Main Family",
        contactPerson: "Harsha Vallamkonda",
        phone: "+91-9876543210",
        email: "harsha.vallamkonda@example.com",
        address: "123 Family Lane, Hyderabad, India",
        members: 5
    },
    {
        id: "fam2",
        name: "Kumar Family",
        contactPerson: "Rajesh Kumar",
        phone: "+91-9876543211",
        email: "rajesh.kumar@example.com",
        address: "456 Green Street, Bangalore, India",
        members: 4
    },
    {
        id: "fam3",
        name: "Sharma Family",
        contactPerson: "Priya Sharma",
        phone: "+91-9876543212",
        email: "priya.sharma@example.com",
        address: "789 Lake View, Chennai, India",
        members: 3
    },
    {
        id: "fam4",
        name: "Patel Family",
        contactPerson: "Amit Patel",
        phone: "+91-9876543213",
        email: "amit.patel@example.com",
        address: "101 Mountain Road, Mumbai, India",
        members: 6
    }
];

// Placeholder for default events if Firestore is empty. Will be added if no data exists.
const DEFAULT_EVENTS = [
    {
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
                id: "exp1",
                category: "Decor",
                amount: 25000,
                paymentMode: "UPI",
                description: "Rangoli materials, diyas, lights, and floral decorations",
                date: "2024-10-25",
                vendor: "Laxmi Decorators"
            },
            {
                id: "exp2",
                category: "Food",
                amount: 40000,
                paymentMode: "Cash",
                description: "Sweets, traditional dishes, snacks, and beverages",
                date: "2024-10-30",
                vendor: "Raj Caterers"
            },
            {
                id: "exp3",
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
                id: "inc1",
                family: "Vallamkonda Main Family",
                amount: 50000,
                paymentMode: "Bank Transfer",
                date: "2024-10-20",
                contactPerson: "Harsha Vallamkonda",
                phone: "+91-9876543210"
            },
            {
                id: "inc2",
                family: "Kumar Family",
                amount: 30000,
                paymentMode: "UPI",
                date: "2024-10-22",
                contactPerson: "Rajesh Kumar",
                phone: "+91-9876543211"
            },
            {
                id: "inc3",
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
                id: "act1",
                name: "Lakshmi Puja",
                participants: "All family members",
                time: "18:00",
                duration: "1 hour",
                description: "Traditional prayer ceremony with aarti and prasad distribution",
                location: "Main Prayer Room",
                incharge: "Elder Family Members"
            },
            {
                id: "act2",
                name: "Rangoli Competition",
                participants: "Kids and teenagers",
                time: "16:00",
                duration: "2 hours",
                description: "Creative rangoli making competition with prizes",
                location: "Front Courtyard",
                incharge: "Art Committee"
            },
            {
                id: "act3",
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
                id: "exp4",
                category: "Venue",
                amount: 45000,
                paymentMode: "Bank Transfer",
                description: "Resort booking for 2 days including accommodation",
                date: "2024-05-01",
                vendor: "Hill View Resort"
            },
            {
                id: "exp5",
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
                id: "inc4",
                family: "Vallamkonda Main Family",
                amount: 40000,
                paymentMode: "Bank Transfer",
                date: "2024-05-01",
                contactPerson: "Harsha Vallamkonda",
                phone: "+91-9876543210"
            },
            {
                id: "inc5",
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
                id: "act4",
                name: "Outdoor Games Tournament",
                participants: "All ages",
                time: "10:00",
                duration: "3 hours",
                description: "Cricket, volleyball, badminton, and traditional games",
                location: "Resort Grounds",
                incharge: "Sports Committee"
            },
            {
                id: "act5",
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
];

class DataManager {
    constructor() {
        this.events = [];
        this.families = DEFAULT_FAMILIES;
        this.expenseCategories = DEFAULT_EVENT_CATEGORIES;
        this.paymentModes = DEFAULT_PAYMENT_MODES;
        this.activityCategories = DEFAULT_ACTIVITY_CATEGORIES;
        this.settings = DEFAULT_SETTINGS;
        this.adminPassword = ADMIN_PASSWORD;
        this.onDataChangeCallback = null; // Callback for real-time updates
    }

    async loadInitialData() {
        console.log("Loading initial data from localStorage...");
        
        // Try to load from localStorage first
        const savedEvents = loadFromLocalStorage();
        
        if (savedEvents && savedEvents.length > 0) {
            this.events = savedEvents;
            console.log("Events loaded from localStorage:", this.events);
        } else {
            console.log("No events in localStorage, using default events.");
            this.events = DEFAULT_EVENTS.map(event => ({ 
                ...event, 
                id: event.id || this.generateUniqueId() 
            }));
            // Auto-save defaults
            saveToLocalStorage();
        }
    }

    // Event CRUD Operations
    getEvents() {
        return this.events;
    }

    getEventById(id) {
        return this.events.find(event => event.id === id);
    }

    async addEvent(newEvent) {
        // Assign unique IDs to sub-items
        if (newEvent.expenses) newEvent.expenses = newEvent.expenses.map(exp => ({ ...exp, id: exp.id || this.generateUniqueId() }));
        if (newEvent.income) newEvent.income = newEvent.income.map(inc => ({ ...inc, id: inc.id || this.generateUniqueId() }));
        if (newEvent.activities) newEvent.activities = newEvent.activities.map(act => ({ ...act, id: act.id || this.generateUniqueId() }));

        // Assign ID if not present
        newEvent.id = newEvent.id || this.generateUniqueId();
        newEvent.createdAt = new Date().toISOString();
        
        this.events.push(newEvent);
        saveToLocalStorage();
        
        if (this.onDataChangeCallback) this.onDataChangeCallback();
        return newEvent;
    }

    async updateEvent(updatedEvent) {
        // Ensure sub-item IDs are present
        if (updatedEvent.expenses) updatedEvent.expenses = updatedEvent.expenses.map(exp => ({ ...exp, id: exp.id || this.generateUniqueId() }));
        if (updatedEvent.income) updatedEvent.income = updatedEvent.income.map(inc => ({ ...inc, id: inc.id || this.generateUniqueId() }));
        if (updatedEvent.activities) updatedEvent.activities = updatedEvent.activities.map(act => ({ ...act, id: act.id || this.generateUniqueId() }));

        const index = this.events.findIndex(e => e.id === updatedEvent.id);
        if (index !== -1) {
            updatedEvent.updatedAt = new Date().toISOString();
            this.events[index] = { ...this.events[index], ...updatedEvent };
            saveToLocalStorage();
            if (this.onDataChangeCallback) this.onDataChangeCallback();
            return true;
        }
        return false;
    }

    async deleteEvent(id) {
        const index = this.events.findIndex(e => e.id === id);
        if (index !== -1) {
            this.events.splice(index, 1);
            saveToLocalStorage();
            if (this.onDataChangeCallback) this.onDataChangeCallback();
        }
    }

    // Expense, Income, Activity CRUD Operations (delegated to updateEvent)
    async addSubItem(eventId, itemType, newItem) {
        const event = this.getEventById(eventId);
        if (event) {
            newItem.id = this.generateUniqueId();
            const updatedEvent = { ...event, [itemType]: [...(event[itemType] || []), newItem] };
            await this.updateEvent(updatedEvent);
            return newItem;
        }
        return null;
    }

    async updateSubItem(eventId, itemType, updatedItem) {
        const event = this.getEventById(eventId);
        if (event) {
            const items = event[itemType] || [];
            const index = items.findIndex(item => item.id === updatedItem.id);
            if (index !== -1) {
                const newItems = [...items];
                newItems[index] = { ...newItems[index], ...updatedItem };
                const updatedEvent = { ...event, [itemType]: newItems };
                await this.updateEvent(updatedEvent);
                return true;
            }
        }
        return false;
    }

    async deleteSubItem(eventId, itemType, itemId) {
        const event = this.getEventById(eventId);
        if (event) {
            const updatedEvent = { ...event, [itemType]: (event[itemType] || []).filter(item => item.id !== itemId) };
            await this.updateEvent(updatedEvent);
        }
    }

    // Other data getters (now using constants or will be fetched from Firestore if needed)
    getFamilies() {
        return this.families;
    }

    getExpenseCategories() {
        return this.expenseCategories;
    }

    getPaymentModes() {
        return this.paymentModes;
    }

    getActivityCategories() {
        return this.activityCategories;
    }

    getSettings() {
        return this.settings;
    }

    updateSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
        // TODO: Implement saving settings to Firestore if they need to be persistent across devices
    }

    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    checkAdminPassword(password) {
        return password === this.adminPassword;
    }
}

// --- Main App Class (UI Logic) ---
class App {
    constructor() {
        this.dataManager = new DataManager();
        this.isUserAdmin = false; // Track admin status

        // UI Elements
        this.adminToggleBtn = document.getElementById("adminToggle");
        this.adminBtnText = document.getElementById("adminBtnText");
    // Admin modal elements (support both legacy and current IDs)
    this.adminLoginModal = document.getElementById("adminLoginModal") || document.getElementById("adminModal");
    // Separate login input (in the auth modal) from the admin-panel change-password input
    this.adminLoginPasswordInput = document.getElementById("adminPassword"); // login modal input
    this.adminPanelPasswordInput = document.getElementById("adminPasswordInput"); // admin panel change-password input
    // Backward-compatible alias used by older code paths (prefers login input)
    this.adminPasswordInput = this.adminLoginPasswordInput || this.adminPanelPasswordInput;
    this.adminLoginBtn = document.getElementById("adminLoginBtn"); // legacy button (current uses form submit)
    this.adminLoginForm = document.getElementById("adminLoginForm"); // current markup
    this.adminLogoutBtn = document.getElementById("adminLogoutBtn");
    this.adminCloseModalBtn = document.getElementById("adminCloseModalBtn") || document.getElementById("closeAdminModal");
    this.togglePasswordBtn = document.getElementById("togglePassword");
    this.adminErrorMsg = document.getElementById("adminErrorMsg");

        this.eventsGrid = document.getElementById("eventsGrid");
        this.addEventBtn = document.getElementById("addEventBtn");
    // There are two modals in the markup: a detailed Event modal (read-only overview)
    // and a separate Event Form modal used for creating/editing events. Use the form modal
    // for Add/Edit flows and keep the detail modal for read-only display.
    this.eventModal = document.getElementById("eventModal");
    this.eventModalTitle = document.getElementById("eventModalTitle");
    this.eventFormModal = document.getElementById("eventFormModal");
    this.eventForm = document.getElementById("eventForm");
    // Form inputs in markup use the "...Input" suffix
    this.eventNameInput = document.getElementById("eventNameInput");
    this.eventYearInput = document.getElementById("eventYearInput");
    this.eventDateInput = document.getElementById("eventDateInput");
    this.eventBudgetInput = document.getElementById("eventBudgetInput");
    this.eventVenueInput = document.getElementById("eventVenueInput");
    this.eventGuestsInput = document.getElementById("eventGuestsInput");
    this.eventDescriptionInput = document.getElementById("eventDescInput");
    this.eventPhotosInput = document.getElementById("eventPhotosInput");
    this.closeEventFormBtn = document.getElementById("closeEventFormModal");
    this.cancelEventFormBtn = document.getElementById("cancelEventForm");
    // Buttons inside the detail modal (if any) will be handled separately; add/remove via event cards
    // Support both legacy and current close IDs
    this.closeEventModalBtn = document.getElementById("closeEventModalBtn") || document.getElementById("closeEventModal");
    // Align with current HTML structure
    this.eventTabs = document.querySelectorAll(".tab-btn");
    this.eventTabContents = document.querySelectorAll(".tab-pane");

        this.filterBtn = document.getElementById("filterBtn");
        this.searchInput = document.getElementById("searchInput");

        // Form fields for event details
        this.eventNameInput = document.getElementById("eventName");
        this.eventYearInput = document.getElementById("eventYear");
        this.eventDateInput = document.getElementById("eventDate");
        this.eventBudgetInput = document.getElementById("eventBudget");
        this.eventVenueInput = document.getElementById("eventVenue");
        this.eventGuestsInput = document.getElementById("eventGuests");
        this.eventDescriptionInput = document.getElementById("eventDescription");
        this.eventPhotosInput = document.getElementById("eventPhotosLink");
        this.eventStatusInput = document.getElementById("eventStatus");

        // Finances tab elements
        this.financesTableBody = document.getElementById("financesTableBody");
        this.addExpenseBtn = document.getElementById("addExpenseBtn");
        this.addIncomeBtn = document.getElementById("addIncomeBtn");

        // Activities tab elements
        this.activitiesTableBody = document.getElementById("activitiesTableBody");
        this.addActivityBtn = document.getElementById("addActivityBtn");

        // Hero stats
        this.totalEventsSpan = document.getElementById("totalEvents");
        this.totalFamiliesSpan = document.getElementById("totalFamilies");
        this.totalSpentSpan = document.getElementById("totalSpent");

        // Charts
        this.budgetChartCtx = document.getElementById("budgetChart")?.getContext("2d");
        this.contributionChartCtx = document.getElementById("contributionChart")?.getContext("2d");
        this.expenseChartCtx = document.getElementById("expenseChart")?.getContext("2d");
        this.paymentChartCtx = document.getElementById("paymentChart")?.getContext("2d");
        this.budgetChart = null;
        this.contributionChart = null;
        this.expenseChart = null;
        this.paymentChart = null;

        this.currentEventId = null;

        this.dataManager.onDataChangeCallback = () => {
            this.renderAll();
        };

        this.init();
    }

    async init() {
        await this.dataManager.loadInitialData();
        this.initEventListeners();
        this.renderAll();
        this.updateAdminUI();
    }

    initEventListeners() {
        // Admin toggle
        this.adminToggleBtn.addEventListener("click", () => {
            if (this.isUserAdmin) {
                this.logoutAdmin();
            } else {
                this.showAdminLoginModal();
            }
        });

        // Admin login: support legacy button click or current form submit
        if (this.adminLoginBtn) {
            this.adminLoginBtn.addEventListener("click", () => this.loginAdmin());
        }
        // Listen for Enter on the login modal's password input only
        if (this.adminLoginPasswordInput) {
            this.adminLoginPasswordInput.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    this.loginAdmin();
                }
            });
        }
        if (this.adminLoginForm) {
            this.adminLoginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.loginAdmin();
            });
        }
        if (this.adminCloseModalBtn) {
            this.adminCloseModalBtn.addEventListener("click", () => this.hideAdminLoginModal());
        }
        // Toggle visibility for the login modal password input
        if (this.togglePasswordBtn && this.adminLoginPasswordInput) {
            this.togglePasswordBtn.addEventListener("click", () => {
                const isPassword = this.adminLoginPasswordInput.getAttribute("type") === "password";
                this.adminLoginPasswordInput.setAttribute("type", isPassword ? "text" : "password");
                // Toggle icon if present
                const icon = this.togglePasswordBtn.querySelector("i");
                if (icon) {
                    icon.classList.toggle("fa-eye");
                    icon.classList.toggle("fa-eye-slash");
                }
            });
        }

        // Add Event Button - open the event form modal (create flow)
    if (this.addEventBtn) this.addEventBtn.addEventListener("click", () => this.openEventFormModal());

        // Hook the event form submit (create/update)
    if (this.eventForm) {
        this.eventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.saveEventFromForm();
        });
    }
    // Close / Cancel handlers for the event form modal
    if (this.closeEventFormBtn) this.closeEventFormBtn.addEventListener("click", () => this.closeEventFormModal());
    if (this.cancelEventFormBtn) this.cancelEventFormBtn.addEventListener("click", () => this.closeEventFormModal());
    if (this.eventFormModal) {
        this.eventFormModal.addEventListener("click", (e) => {
            // Close when clicking overlay or outside the modal content
            if (e.target === this.eventFormModal || e.target.classList.contains("modal__overlay")) {
                this.closeEventFormModal();
            }
        });
    }

        // Event Modal Actions
        if (this.saveEventBtn) this.saveEventBtn.addEventListener("click", () => this.saveEvent());
        if (this.deleteEventBtn) this.deleteEventBtn.addEventListener("click", () => this.deleteEvent());
        if (this.closeEventModalBtn) this.closeEventModalBtn.addEventListener("click", () => this.closeEventModal());
        if (this.eventModal) {
            this.eventModal.addEventListener("click", (e) => {
                if (e.target === this.eventModal) this.closeEventModal();
            });
        }

        // Event Tabs
        this.eventTabs.forEach(tab => {
            tab.addEventListener("click", (e) => this.switchEventTab(e.currentTarget));
        });

        // Finances Tab Buttons
    if (this.addExpenseBtn) this.addExpenseBtn.addEventListener("click", () => this.addFinanceItem("expenses"));
    if (this.addIncomeBtn) this.addIncomeBtn.addEventListener("click", () => this.addFinanceItem("income"));

        // Activities Tab Button
    if (this.addActivityBtn) this.addActivityBtn.addEventListener("click", () => this.addActivityItem());

        // Filter and Search
    if (this.searchInput) this.searchInput.addEventListener("input", () => this.renderEvents());
    if (this.filterBtn) this.filterBtn.addEventListener("click", () => this.toggleFilterSortOptions()); // Assuming a function for this
    }

    showAdminLoginModal() {
        if (!this.adminLoginModal) return;
        this.adminLoginModal.classList.remove("hidden");
        if (this.adminLoginPasswordInput) this.adminLoginPasswordInput.value = "";
        if (this.adminErrorMsg) this.adminErrorMsg.textContent = "";
    }

    hideAdminLoginModal() {
        if (!this.adminLoginModal) return;
        this.adminLoginModal.classList.add("hidden");
    }

    loginAdmin() {
        const password = this.adminLoginPasswordInput ? this.adminLoginPasswordInput.value : "";
        if (this.dataManager.checkAdminPassword(password)) {
            this.isUserAdmin = true;
            this.hideAdminLoginModal();
            this.updateAdminUI();
            this.renderAll(); // Re-render to show admin controls
        } else {
            if (this.adminErrorMsg) {
                this.adminErrorMsg.textContent = "Incorrect password.";
            }
        }
    }

    // Open the lightweight Event Form modal used for Add / Edit
    openEventFormModal(eventId = null) {
        if (!this.eventFormModal) return;
        this.eventFormModal.classList.remove("hidden");
        this.currentEventId = eventId;
        // Reset or populate form
        if (eventId) {
            const ev = this.dataManager.getEventById(eventId);
            if (ev) {
                this.eventNameInput.value = ev.name || "";
                this.eventYearInput.value = ev.year || "";
                this.eventDateInput.value = ev.date || "";
                this.eventBudgetInput.value = ev.totalBudget || "";
                this.eventVenueInput.value = ev.venue || "";
                this.eventGuestsInput.value = ev.expectedGuests || "";
                this.eventDescriptionInput.value = ev.description || "";
                this.eventPhotosInput.value = ev.googlePhotosLink || "";
            }
        } else {
            this.eventForm.reset();
        }
    }

    closeEventFormModal() {
        if (!this.eventFormModal) return;
        this.eventFormModal.classList.add("hidden");
        this.currentEventId = null;
    }

    async saveEventFromForm() {
        // Read values from the simple form and create/update event
        const eventData = {
            name: this.eventNameInput.value.trim(),
            year: parseInt(this.eventYearInput.value) || new Date().getFullYear(),
            date: this.eventDateInput.value || "",
            totalBudget: parseFloat(this.eventBudgetInput.value) || 0,
            venue: this.eventVenueInput.value || "",
            expectedGuests: parseInt(this.eventGuestsInput.value) || 0,
            description: this.eventDescriptionInput.value || "",
            googlePhotosLink: this.eventPhotosInput.value || "",
            expenses: [],
            income: [],
            activities: []
        };

        if (this.currentEventId) {
            eventData.id = this.currentEventId;
            await this.dataManager.updateEvent(eventData);
        } else {
            await this.dataManager.addEvent(eventData);
        }

        this.closeEventFormModal();
        this.renderAll();
    }

    logoutAdmin() {
        this.isUserAdmin = false;
        this.updateAdminUI();
        this.renderAll(); // Re-render to hide admin controls
    }

    updateAdminUI() {
        // Use body class to control admin-only visibility per CSS
        if (this.isUserAdmin) {
            if (this.adminBtnText) this.adminBtnText.textContent = "Exit Admin";
            document.body.classList.add("is-admin");
        } else {
            if (this.adminBtnText) this.adminBtnText.textContent = "Admin";
            document.body.classList.remove("is-admin");
        }
    }

    renderAll() {
        this.renderEvents();
        this.updateHeroStats();
        this.renderAnalytics();
    }

    renderEvents() {
        const events = this.dataManager.getEvents();
        const searchTerm = this.searchInput.value.toLowerCase();
        this.eventsGrid.innerHTML = "";

        const filteredEvents = events.filter(event =>
            event.name.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.venue.toLowerCase().includes(searchTerm)
        );

        if (filteredEvents.length === 0) {
            this.eventsGrid.innerHTML = 
                `<div class="no-events">
                    <i class="fas fa-box-open"></i>
                    <p>No events found. ${this.isUserAdmin ? "Click 'Add Event' to create one." : ""}</p>
                </div>`;
            return;
        }

        filteredEvents.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.className = "event-card";
            eventCard.innerHTML = `
                <div class="event-card__header">
                    <span class="event-card__year">${event.year}</span>
                    <h3 class="event-card__title">${event.name}</h3>
                </div>
                <div class="event-card__body">
                    <p class="event-card__description">${event.description.substring(0, 100)}...</p>
                    <div class="event-card__meta">
                        <span><i class="fas fa-calendar-alt"></i> ${event.date}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${event.venue}</span>
                    </div>
                </div>
                <div class="event-card__footer">
                    <span class="event-card__status event-card__status--${event.status}">${event.status}</span>
                    <button class="btn btn--sm btn--outline view-details-btn" data-id="${event.id}">View Details</button>
                    ${this.isUserAdmin ? `<button class="btn btn--sm btn--danger delete-event-btn" data-id="${event.id}">Delete</button>` : ""}
                </div>
            `;
            // view details button
            const viewBtn = eventCard.querySelector(".view-details-btn");
            if (viewBtn) viewBtn.addEventListener("click", (e) => {
                this.openEventModal(e.currentTarget.dataset.id);
            });
            // delete button (admin only)
            const delBtn = eventCard.querySelector(".delete-event-btn");
            if (delBtn) {
                delBtn.addEventListener("click", async (e) => {
                    const id = e.currentTarget.dataset.id;
                    if (confirm("Are you sure you want to delete this event?")) {
                        await this.dataManager.deleteEvent(id);
                        this.renderAll();
                    }
                });
            }
            this.eventsGrid.appendChild(eventCard);
        });
    }

    updateHeroStats() {
        const events = this.dataManager.getEvents();
        this.totalEventsSpan.textContent = events.length;
        this.totalFamiliesSpan.textContent = this.dataManager.getFamilies().length; // Assuming families are static or loaded separately
        const totalSpent = events.reduce((sum, event) => {
            return sum + (event.expenses ? event.expenses.reduce((s, exp) => s + exp.amount, 0) : 0);
        }, 0);
        this.totalSpentSpan.innerHTML = `<i class="fas fa-rupee-sign"></i> ${totalSpent.toLocaleString("en-IN")}`;
    }

    renderAnalytics() {
        const events = this.dataManager.getEvents();
        this.renderBudgetChart(events);
        this.renderContributionChart(events);
        this.renderExpenseChart(events);
        this.renderPaymentChart(events);
    }

    renderBudgetChart(events) {
        const eventNames = events.map(event => event.name);
        const totalBudgets = events.map(event => event.totalBudget || 0);
        const totalExpenses = events.map(event =>
            event.expenses ? event.expenses.reduce((sum, exp) => sum + exp.amount, 0) : 0
        );

        if (this.budgetChart) this.budgetChart.destroy();
        this.budgetChart = new Chart(this.budgetChartCtx, {
            type: "bar",
            data: {
                labels: eventNames,
                datasets: [
                    {
                        label: "Total Budget",
                        data: totalBudgets,
                        backgroundColor: "rgba(75, 192, 192, 0.6)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1
                    },
                    {
                        label: "Total Expenses",
                        data: totalExpenses,
                        backgroundColor: "rgba(255, 99, 132, 0.6)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { callback: (value) => `₹${value.toLocaleString("en-IN")}` }
                    }
                },
                plugins: {
                    tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ₹${context.parsed.y.toLocaleString("en-IN")}` } }
                }
            }
        });
    }

    renderContributionChart(events) {
        const familyContributions = {};
        events.forEach(event => {
            event.income?.forEach(inc => {
                familyContributions[inc.family] = (familyContributions[inc.family] || 0) + inc.amount;
            });
        });

        const labels = Object.keys(familyContributions);
        const data = Object.values(familyContributions);

        if (this.contributionChart) this.contributionChart.destroy();
        this.contributionChart = new Chart(this.contributionChartCtx, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.5,
                plugins: {
                    tooltip: { callbacks: { label: (context) => `${context.label}: ₹${context.parsed.toLocaleString("en-IN")}` } }
                }
            }
        });
    }

    renderExpenseChart(events) {
        const expenseCategories = {};
        events.forEach(event => {
            event.expenses?.forEach(exp => {
                expenseCategories[exp.category] = (expenseCategories[exp.category] || 0) + exp.amount;
            });
        });

        const labels = Object.keys(expenseCategories);
        const data = Object.values(expenseCategories);

        if (this.expenseChart) this.expenseChart.destroy();
        this.expenseChart = new Chart(this.expenseChartCtx, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#58508D", "#BC5090"
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.5,
                plugins: {
                    tooltip: { callbacks: { label: (context) => `${context.label}: ₹${context.parsed.toLocaleString("en-IN")}` } }
                }
            }
        });
    }

    renderPaymentChart(events) {
        const paymentMethods = {};
        events.forEach(event => {
            event.expenses?.forEach(exp => {
                paymentMethods[exp.paymentMode] = (paymentMethods[exp.paymentMode] || 0) + exp.amount;
            });
            event.income?.forEach(inc => {
                paymentMethods[inc.paymentMode] = (paymentMethods[inc.paymentMode] || 0) + inc.amount;
            });
        });

        const labels = Object.keys(paymentMethods);
        const data = Object.values(paymentMethods);

        if (this.paymentChart) this.paymentChart.destroy();
        this.paymentChart = new Chart(this.paymentChartCtx, {
            type: "polarArea",
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: [
                        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.2,
                plugins: {
                    tooltip: { callbacks: { label: (context) => `${context.label}: ₹${context.parsed.toLocaleString("en-IN")}` } }
                }
            }
        });
    }

    openEventModal(eventId = null) {
        this.eventModal.classList.remove("hidden");
        this.currentEventId = eventId;
        this.resetEventForm();
        this.deleteEventBtn.classList.add("hidden"); // Hide delete by default

        if (eventId) {
            this.eventModalTitle.textContent = "Edit Event";
            const event = this.dataManager.getEventById(eventId);
            if (event) {
                this.fillEventForm(event);
                if (this.isUserAdmin) {
                    this.deleteEventBtn.classList.remove("hidden");
                }
            }
        } else {
            this.eventModalTitle.textContent = "Add New Event";
        }
            // Default to the Overview tab in current markup
            const defaultTab = document.querySelector(".tab-btn[data-tab='overview']") || this.eventTabs[0];
            if (defaultTab) this.switchEventTab(defaultTab);
        this.updateAdminControlsInModal();
    }

    closeEventModal() {
        this.eventModal.classList.add("hidden");
        this.currentEventId = null;
        this.resetEventForm();
    }

    resetEventForm() {
        this.eventForm.reset();
        this.financesTableBody.innerHTML = "";
        this.activitiesTableBody.innerHTML = "";
        document.getElementById("eventGooglePhotosLinkPreview").innerHTML = "";
        // Clear any dynamically added finance/activity rows
        const dynamicRows = document.querySelectorAll(".finance-row, .activity-row");
        dynamicRows.forEach(row => row.remove());
    }

    fillEventForm(event) {
        this.eventNameInput.value = event.name || "";
        this.eventYearInput.value = event.year || "";
        this.eventDateInput.value = event.date || "";
        this.eventBudgetInput.value = event.totalBudget || "";
        this.eventVenueInput.value = event.venue || "";
        this.eventGuestsInput.value = event.expectedGuests || "";
        this.eventDescriptionInput.value = event.description || "";
        this.eventPhotosInput.value = event.googlePhotosLink || "";
        this.eventStatusInput.value = event.status || "upcoming";

        // Render finances
        this.financesTableBody.innerHTML = "";
        event.expenses?.forEach(expense => this.addFinanceRow("expenses", expense));
        event.income?.forEach(income => this.addFinanceRow("income", income));

        // Render activities
        this.activitiesTableBody.innerHTML = "";
        event.activities?.forEach(activity => this.addActivityRow(activity));

        this.updateGooglePhotosLinkPreview(event.googlePhotosLink);
    }

    async saveEvent() {
        const eventData = {
            name: this.eventNameInput.value,
            year: parseInt(this.eventYearInput.value),
            date: this.eventDateInput.value,
            totalBudget: parseFloat(this.eventBudgetInput.value),
            venue: this.eventVenueInput.value,
            expectedGuests: parseInt(this.eventGuestsInput.value),
            description: this.eventDescriptionInput.value,
            googlePhotosLink: this.eventPhotosInput.value,
            status: this.eventStatusInput.value,
            expenses: [], // Will be populated from table
            income: [], // Will be populated from table
            activities: [] // Will be populated from table
        };

        // Populate expenses from table
        document.querySelectorAll("#financesTableBody tr.expense-row").forEach(row => {
            eventData.expenses.push({
                id: row.dataset.id || this.dataManager.generateUniqueId(),
                category: row.querySelector('select[name="expenseCategory"]').value,
                amount: parseFloat(row.querySelector('input[name="expenseAmount"]').value),
                paymentMode: row.querySelector('select[name="expensePaymentMode"]').value,
                description: row.querySelector('input[name="expenseDescription"]').value,
                date: row.querySelector('input[name="expenseDate"]').value,
                vendor: row.querySelector('input[name="expenseVendor"]').value
            });
        });

        // Populate income from table
        document.querySelectorAll("#financesTableBody tr.income-row").forEach(row => {
            eventData.income.push({
                id: row.dataset.id || this.dataManager.generateUniqueId(),
                family: row.querySelector('select[name="incomeFamily"]').value,
                amount: parseFloat(row.querySelector('input[name="incomeAmount"]').value),
                paymentMode: row.querySelector('select[name="incomePaymentMode"]').value,
                date: row.querySelector('input[name="incomeDate"]').value,
                contactPerson: row.querySelector('input[name="incomeContactPerson"]').value,
                phone: row.querySelector('input[name="incomePhone"]').value
            });
        });

        // Populate activities from table
        document.querySelectorAll("#activitiesTableBody tr.activity-row").forEach(row => {
            eventData.activities.push({
                id: row.dataset.id || this.dataManager.generateUniqueId(),
                name: row.querySelector('input[name="activityName"]').value,
                participants: row.querySelector('input[name="activityParticipants"]').value,
                time: row.querySelector('input[name="activityTime"]').value,
                duration: row.querySelector('input[name="activityDuration"]').value,
                description: row.querySelector('input[name="activityDescription"]').value,
                location: row.querySelector('input[name="activityLocation"]').value,
                incharge: row.querySelector('input[name="activityIncharge"]').value
            });
        });

        if (this.currentEventId) {
            eventData.id = this.currentEventId; // Ensure ID is set for update
            await this.dataManager.updateEvent(eventData);
        } else {
            await this.dataManager.addEvent(eventData);
        }

        this.closeEventModal();
        this.renderAll(); // Re-render to show updated data
    }

    async deleteEvent() {
        if (this.currentEventId && confirm("Are you sure you want to delete this event?")) {
            await this.dataManager.deleteEvent(this.currentEventId);
            this.closeEventModal();
            this.renderAll();
        }
    }

    switchEventTab(clickedTab) {
        this.eventTabs.forEach(tab => tab.classList.remove("active"));
        clickedTab.classList.add("active");

        const targetTab = clickedTab.dataset.tab;
        this.eventTabContents.forEach(content => {
            if (content.id === `event-modal__tab-${targetTab}`) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    }

    addFinanceItem(type, item = {}) {
        const isExpense = type === "expenses";
        const row = document.createElement("tr");
        row.className = `finance-row ${isExpense ? "expense-row" : "income-row"}`;
        row.dataset.id = item.id || this.dataManager.generateUniqueId();

        let cellsHtml = "";
        if (isExpense) {
            cellsHtml = `
                <td>
                    <select name="expenseCategory" class="form-input" ${this.isUserAdmin ? "" : "disabled"}>
                        ${this.dataManager.getExpenseCategories().map(cat => `<option value="${cat}" ${item.category === cat ? "selected" : ""}>${cat}</option>`).join("")}
                    </select>
                </td>
                <td><input type="number" name="expenseAmount" class="form-input" value="${item.amount || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
                <td>
                    <select name="expensePaymentMode" class="form-input" ${this.isUserAdmin ? "" : "disabled"}>
                        ${this.dataManager.getPaymentModes().map(mode => `<option value="${mode}" ${item.paymentMode === mode ? "selected" : ""}>${mode}</option>`).join("")}
                    </select>
                </td>
                <td><input type="text" name="expenseDescription" class="form-input" value="${item.description || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
                <td><input type="date" name="expenseDate" class="form-input" value="${item.date || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
                <td><input type="text" name="expenseVendor" class="form-input" value="${item.vendor || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            `;
        } else {
            cellsHtml = `
                <td>
                    <select name="incomeFamily" class="form-input" ${this.isUserAdmin ? "" : "disabled"}>
                        ${this.dataManager.getFamilies().map(fam => `<option value="${fam.name}" ${item.family === fam.name ? "selected" : ""}>${fam.name}</option>`).join("")}
                    </select>
                </td>
                <td><input type="number" name="incomeAmount" class="form-input" value="${item.amount || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
                <td>
                    <select name="incomePaymentMode" class="form-input" ${this.isUserAdmin ? "" : "disabled"}>
                        ${this.dataManager.getPaymentModes().map(mode => `<option value="${mode}" ${item.paymentMode === mode ? "selected" : ""}>${mode}</option>`).join("")}
                    </select>
                </td>
                <td><input type="date" name="incomeDate" class="form-input" value="${item.date || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
                <td><input type="text" name="incomeContactPerson" class="form-input" value="${item.contactPerson || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
                <td><input type="text" name="incomePhone" class="form-input" value="${item.phone || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            `;
        }

        row.innerHTML = `
            ${cellsHtml}
            <td class="admin-only ${this.isUserAdmin ? "" : "hidden"}">
                <button type="button" class="btn btn--danger btn--sm delete-finance-item" data-type="${type}" data-id="${row.dataset.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        this.financesTableBody.appendChild(row);

        if (this.isUserAdmin) {
            row.querySelector(".delete-finance-item").addEventListener("click", (e) => this.deleteFinanceItem(e.currentTarget.dataset.type, e.currentTarget.dataset.id));
        }
    }

    addActivityRow(activity = {}) {
        const row = document.createElement("tr");
        row.className = "activity-row";
        row.dataset.id = activity.id || this.dataManager.generateUniqueId();

        row.innerHTML = `
            <td><input type="text" name="activityName" class="form-input" value="${activity.name || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            <td><input type="text" name="activityParticipants" class="form-input" value="${activity.participants || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            <td><input type="time" name="activityTime" class="form-input" value="${activity.time || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            <td><input type="text" name="activityDuration" class="form-input" value="${activity.duration || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            <td><input type="text" name="activityDescription" class="form-input" value="${activity.description || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            <td><input type="text" name="activityLocation" class="form-input" value="${activity.location || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            <td><input type="text" name="activityIncharge" class="form-input" value="${activity.incharge || ""}" ${this.isUserAdmin ? "" : "readonly"}></td>
            <td class="admin-only ${this.isUserAdmin ? "" : "hidden"}">
                <button type="button" class="btn btn--danger btn--sm delete-activity-item" data-id="${row.dataset.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        this.activitiesTableBody.appendChild(row);

        if (this.isUserAdmin) {
            row.querySelector(".delete-activity-item").addEventListener("click", (e) => this.deleteActivityItem(e.currentTarget.dataset.id));
        }
    }

    addActivityItem() {
        this.addActivityRow({});
    }

    async deleteFinanceItem(type, id) {
        if (this.currentEventId && confirm("Are you sure you want to delete this item?")) {
            await this.dataManager.deleteSubItem(this.currentEventId, type, id);
            this.renderAll(); // Re-render to update the modal content
        }
    }

    async deleteActivityItem(id) {
        if (this.currentEventId && confirm("Are you sure you want to delete this activity?")) {
            await this.dataManager.deleteSubItem(this.currentEventId, "activities", id);
            this.renderAll(); // Re-render to update the modal content
        }
    }

    updateGooglePhotosLinkPreview(link) {
        const previewContainer = document.getElementById("eventGooglePhotosLinkPreview");
        previewContainer.innerHTML = "";
        if (link) {
            const linkElement = document.createElement("a");
            linkElement.href = link;
            linkElement.textContent = "View Photos";
            linkElement.target = "_blank";
            linkElement.className = "btn btn--secondary btn--sm mt-2";
            previewContainer.appendChild(linkElement);
        }
    }

    updateAdminControlsInModal() {
        const adminOnlyElements = this.eventModal.querySelectorAll(".admin-only");
        if (this.isUserAdmin) {
            this.eventForm.querySelectorAll("input, select, textarea").forEach(el => el.removeAttribute("readonly"));
            this.eventForm.querySelectorAll("select").forEach(el => el.removeAttribute("disabled"));
            this.saveEventBtn.classList.remove("hidden");
            this.addExpenseBtn.classList.remove("hidden");
            this.addIncomeBtn.classList.remove("hidden");
            this.addActivityBtn.classList.remove("hidden");
            adminOnlyElements.forEach(el => el.classList.remove("hidden"));
        } else {
            this.eventForm.querySelectorAll("input, select, textarea").forEach(el => el.setAttribute("readonly", true));
            this.eventForm.querySelectorAll("select").forEach(el => el.setAttribute("disabled", true));
            this.saveEventBtn.classList.add("hidden");
            this.addExpenseBtn.classList.add("hidden");
            this.addIncomeBtn.classList.add("hidden");
            this.addActivityBtn.classList.add("hidden");
            adminOnlyElements.forEach(el => el.classList.add("hidden"));
        }
    }

    toggleFilterSortOptions() {
        // Implement filter/sort UI logic here if needed
        console.log("Filter/Sort button clicked.");
    }

    // Particles.js initialization (from original file)
    initParticles() {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#000000" },
                    polygon: { nb_sides: 5 },
                    image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });
    }
}

// --- DOM Ready ---
document.addEventListener("DOMContentLoaded", () => {
    window.app = new App();
    // Load particles.js separately if it's not part of the main bundle
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
        if (window.app && window.app.initParticles) {
            window.app.initParticles();
        }
    };
    document.head.appendChild(script);

    // Handle page visibility change to refresh data
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && window.app) {
            window.app.renderAll();
        }
    });
});