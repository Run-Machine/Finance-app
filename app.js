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
        this.supabase = null; // will be set if supabase-config.js is present
        this.families = DEFAULT_FAMILIES;
        this.expenseCategories = DEFAULT_EVENT_CATEGORIES;
        this.paymentModes = DEFAULT_PAYMENT_MODES;
        this.activityCategories = DEFAULT_ACTIVITY_CATEGORIES;
        this.settings = DEFAULT_SETTINGS;
        this.adminPassword = ADMIN_PASSWORD;
        this.onDataChangeCallback = null; // Callback for real-time updates
    }

    // Timeout wrapper for Supabase operations to prevent hanging
    async withTimeout(promise, timeoutMs = 10000, operationName = 'Operation') {
        let timeoutId;
        const timeoutPromise = new Promise((_, reject) => {
            timeoutId = setTimeout(() => {
                reject(new Error(`${operationName} timed out after ${timeoutMs}ms`));
            }, timeoutMs);
        });

        try {
            const result = await Promise.race([promise, timeoutPromise]);
            clearTimeout(timeoutId);
            return result;
        } catch (err) {
            clearTimeout(timeoutId);
            console.error(`${operationName} failed:`, err);
            throw err;
        }
    }

    // Map app event <-> DB row
    fromDbEvent(row) {
        if (!row) return null;
        return {
            id: row.id,
            name: row.name,
            year: row.year,
            date: row.date,
            description: row.description,
            totalBudget: row.total_budget ?? 0,
            status: row.status,
            venue: row.venue,
            expectedGuests: row.expected_guests ?? 0,
            googlePhotosLink: row.google_photos_link || '',
            expenses: Array.isArray(row.expenses) ? row.expenses : [],
            income: Array.isArray(row.income) ? row.income : [],
            activities: Array.isArray(row.activities) ? row.activities : [],
            createdAt: row.created_at,
            updatedAt: row.updated_at
        };
    }

    toDbEvent(ev, forUpdate = false) {
        const db = {
            name: ev.name,
            year: ev.year,
            date: ev.date || null,
            description: ev.description || null,
            total_budget: ev.totalBudget ?? 0,
            status: ev.status || null,
            venue: ev.venue || null,
            expected_guests: ev.expectedGuests ?? 0,
            google_photos_link: ev.googlePhotosLink || null,
            expenses: Array.isArray(ev.expenses) ? ev.expenses : [],
            income: Array.isArray(ev.income) ? ev.income : [],
            activities: Array.isArray(ev.activities) ? ev.activities : []
        };
        if (forUpdate) {
            // updated_at will be set by DB default/trigger if present; else set now
            db.updated_at = new Date().toISOString();
        }
        return db;
    }

    async loadInitialData() {
        console.log("Loading initial data from localStorage...");
        
        // Try to load from Supabase first if client present, else create if config exists
        if (this.supabase || (window.SUPABASE_CONFIG && window.supabase)) {
            try {
                if (!this.supabase) {
                    this.supabase = window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.anonKey);
                    console.log("Supabase client created");
                }
                const { data, error } = await this.withTimeout(
                    this.supabase.from('events').select('*').order('created_at', { ascending: false }),
                    10000,
                    'Load events'
                );
                if (!error && data) {
                    this.events = data.map((r) => this.fromDbEvent(r)).filter(Boolean);
                    console.log("Events loaded from Supabase", this.events);
                    if (this.onDataChangeCallback) this.onDataChangeCallback();
                    this.subscribeToRemoteEvents();
                    return;
                } else {
                    console.log('Supabase read error or empty', error);
                }
            } catch (err) {
                console.error('Supabase initialization error', err);
            }
        }

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
            // Subscribe to remote changes if supabase is configured
            if (this.supabase) this.subscribeToRemoteEvents();
        }
    }

    subscribeToRemoteEvents() {
        if (!this.supabase) return;
        try {
            // subscribe to any changes on the events table using the new API
            const channel = this.supabase
                .channel('events-changes')
                .on('postgres_changes', 
                    { event: '*', schema: 'public', table: 'events' }, 
                    (payload) => {
                        console.log('Realtime event change: ', payload);
                        
                        if (payload.eventType === 'DELETE') {
                            const idx = this.events.findIndex(e => e.id === payload.old.id);
                            if (idx !== -1) {
                                this.events.splice(idx, 1);
                                saveToLocalStorage();
                                if (this.onDataChangeCallback) this.onDataChangeCallback();
                            }
                            return;
                        }
                        
                        // For INSERT or UPDATE, fetch only the changed record
                        const recordId = payload.new?.id;
                        if (recordId) {
                            this.supabase.from('events').select('*').eq('id', recordId).single().then(({ data, error }) => {
                                if (!error && data) {
                                    const updatedEvent = this.fromDbEvent(data);
                                    const idx = this.events.findIndex(e => e.id === recordId);
                                    
                                    if (payload.eventType === 'INSERT' && idx === -1) {
                                        // New event, add to array
                                        this.events.unshift(updatedEvent);
                                    } else if (idx !== -1) {
                                        // Update existing event in place
                                        Object.assign(this.events[idx], updatedEvent);
                                    }
                                    
                                    saveToLocalStorage();
                                    if (this.onDataChangeCallback) this.onDataChangeCallback();
                                }
                            });
                        }
                    }
                )
                .subscribe();
        } catch (err) {
            console.error('Supabase subscribe error', err);
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

        // Assign ID if not present (local only); for Supabase we let DB generate
        newEvent.id = newEvent.id || this.generateUniqueId();
        newEvent.createdAt = new Date().toISOString();
        
        // Add to local state immediately (fast)
        this.events.unshift(newEvent);
        saveToLocalStorage();
        if (this.onDataChangeCallback) this.onDataChangeCallback();
        console.log('Event added locally:', newEvent);
        
        // If supabase configured and user is admin, sync to Supabase in background
        if (this.supabase && window.app && window.app.isUserAdmin) {
            setTimeout(async () => {
                try {
                    const dbEvent = this.toDbEvent(newEvent);
                    console.log('Syncing new event to Supabase:', dbEvent);
                    const { data, error } = await this.withTimeout(
                        this.supabase.from('events').insert([dbEvent]).select('*'),
                        30000,
                        'Insert event'
                    );
                    if (error) {
                        console.error('Supabase insert error (data saved locally):', error);
                    } else if (data && data.length) {
                        console.log('Event synced to Supabase successfully');
                        // Update local event with Supabase-generated ID if different
                        const serverEvent = this.fromDbEvent(data[0]);
                        if (serverEvent.id !== newEvent.id) {
                            const idx = this.events.findIndex(e => e.id === newEvent.id);
                            if (idx !== -1) {
                                this.events[idx].id = serverEvent.id;
                                saveToLocalStorage();
                            }
                        }
                    }
                } catch (err) {
                    console.warn('Supabase sync failed (data saved locally):', err.message);
                }
            }, 0);
        }
        
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
            
            // Deep update the existing object to maintain references
            Object.assign(this.events[index], updatedEvent);
            
            // Ensure arrays are properly replaced
            if (updatedEvent.expenses) this.events[index].expenses = [...updatedEvent.expenses];
            if (updatedEvent.income) this.events[index].income = [...updatedEvent.income];
            if (updatedEvent.activities) this.events[index].activities = [...updatedEvent.activities];
            
            // Save to localStorage immediately (fast, synchronous)
            saveToLocalStorage();
            
            // Trigger callback immediately for UI update
            if (this.onDataChangeCallback) this.onDataChangeCallback();
            
            // Then sync to Supabase in background (non-blocking) - only if properly configured
            if (this.supabase && window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url && window.app && window.app.isUserAdmin) {
                // Use setTimeout to make this truly non-blocking
                setTimeout(async () => {
                    try {
                        const dbEvent = this.toDbEvent(this.events[index], true);
                        const { error } = await this.supabase.from('events').update(dbEvent).eq('id', updatedEvent.id);
                        if (error) {
                            console.warn('Supabase update error:', error.message);
                            // Data is already saved locally, so this is just a warning
                        } else {
                            console.log('Successfully synced to Supabase');
                        }
                    } catch (err) {
                        console.warn('Supabase sync failed (data saved locally):', err.message);
                        // Data is still saved locally, so app continues to work
                    }
                }, 0);
            } else if (!window.SUPABASE_CONFIG || !window.SUPABASE_CONFIG.url) {
                console.log('Supabase not configured - data saved locally only');
            }
            
            return true;
        }
        return false;
    }

    async deleteEvent(id) {
        const index = this.events.findIndex(e => e.id === id);
        if (index !== -1) {
            if (this.supabase && window.app && window.app.isUserAdmin) {
                try {
                    await this.withTimeout(
                        this.supabase.from('events').delete().eq('id', id),
                        10000,
                        'Delete event'
                    );
                } catch (err) {
                    console.error('Delete event exception:', err);
                    // Continue with local delete
                }
                this.events.splice(index, 1);
                saveToLocalStorage();
                if (this.onDataChangeCallback) this.onDataChangeCallback();
                return;
            }

            this.events.splice(index, 1);
            saveToLocalStorage();
            if (this.onDataChangeCallback) this.onDataChangeCallback();
        }
    }

    // Expense, Income, Activity CRUD Operations (delegated to updateEvent)
    async addSubItem(eventId, itemType, newItem) {
        console.log('addSubItem called:', { eventId, itemType, newItem });
        const event = this.getEventById(eventId);
        if (!event) {
            console.error('addSubItem: event not found:', eventId);
            return null;
        }
        console.log('Found event:', event);
        newItem.id = this.generateUniqueId();
        const updatedEvent = { ...event, [itemType]: [...(event[itemType] || []), newItem] };
        console.log('Updated event before updateEvent call:', updatedEvent);
        await this.updateEvent(updatedEvent);
        console.log('addSubItem completed successfully');
        return newItem;
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
    this.adminLoginEmailInput = document.getElementById("adminEmail");
    this.adminPanelPasswordInput = document.getElementById("adminPasswordInput"); // admin panel change-password input
    // Backward-compatible alias used by older code paths (prefers login input)
    this.adminPasswordInput = this.adminLoginPasswordInput || this.adminPanelPasswordInput;
    this.adminLoginBtn = document.getElementById("adminLoginBtn"); // legacy button (current uses form submit)
    this.adminLoginForm = document.getElementById("adminLoginForm"); // current markup
    this.adminLogoutBtn = document.getElementById("adminLogoutBtn");
    this.footerAdminLogoutBtn = document.getElementById("footerAdminLogout");
    this.adminCloseModalBtn = document.getElementById("adminCloseModalBtn") || document.getElementById("closeAdminModal");
    this.togglePasswordBtn = document.getElementById("togglePassword");
    this.adminErrorMsg = document.getElementById("adminErrorMsg");

        this.eventsGrid = document.getElementById("eventsGrid");
        this.addEventBtn = document.getElementById("addEventBtn");
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
    // There are two modals in the markup: a detailed Event modal (read-only overview)
    // and a separate Event Form modal used for creating/editing events. Use the form modal
    // for Add/Edit flows and keep the detail modal for read-only display.
    this.eventModal = document.getElementById("eventModal");
    this.eventModalTitle = document.getElementById("eventModalTitle");
    this.eventFormModal = document.getElementById("eventFormModal");
    this.eventFormTitle = document.getElementById("eventFormTitle");
    this.eventForm = document.getElementById("eventForm");
    // Form inputs in markup use the "...Input" suffix
    this.eventNameInput = document.getElementById("eventNameInput");
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
    // Align with current HTML structure (limit queries to detail modal if present)
    this.eventTabs = this.eventModal ? this.eventModal.querySelectorAll(".tab-btn") : document.querySelectorAll(".tab-btn");
    this.eventTabContents = this.eventModal ? this.eventModal.querySelectorAll(".tab-pane") : document.querySelectorAll(".tab-pane");

        // Detail modal specific elements
        this.detailNameEl = document.getElementById("eventName");
        this.detailDescEl = document.getElementById("eventDescription");
        this.detailDateMini = document.getElementById("eventDateInputMini");
        this.detailBudgetMini = document.getElementById("eventBudgetInputMini");
        this.detailVenueMini = document.getElementById("eventVenueInputMini");
        this.detailGuestsMini = document.getElementById("eventGuestsInputMini");
        this.expensesListEl = document.getElementById("expensesList");
        this.incomeListEl = document.getElementById("incomeList");
        this.activitiesListEl = document.getElementById("activitiesList");
        this.photoGalleryEl = document.getElementById("photoGallery");
        this.googlePhotosInput = document.getElementById("googlePhotosLink");
        this.updatePhotosBtn = document.getElementById("updatePhotosBtn");
        this.toastNotification = document.getElementById("toastNotification");

        this.filterBtn = document.getElementById("filterBtn");
        this.searchInput = document.getElementById("searchInput");

        // Note: Event detail modal uses display elements; keep form inputs mapped to *Input IDs above.

        // Finances tab elements (detail modal lists + action buttons)
        this.addExpenseBtn = document.getElementById("addExpenseBtn");
        this.addIncomeBtn = document.getElementById("addIncomeBtn");

        // Activities tab elements (detail modal list + action button)
        this.addActivityBtn = document.getElementById("addActivityBtn");

        // Finance modal elements
        this.financeModal = document.getElementById("financeModal");
        this.closeFinanceModalBtn = document.getElementById("closeFinanceModal");
        this.cancelFinanceFormBtn = document.getElementById("cancelFinanceForm");
        this.financeForm = document.getElementById("financeForm");
        this.financeTypeInput = document.getElementById("financeType");
        this.familyGroup = document.getElementById("familyGroup");
        this.categoryGroup = document.getElementById("categoryGroup");
        this.familyInput = document.getElementById("familyInput");
        this.categoryInput = document.getElementById("categoryInput");
        this.amountInput = document.getElementById("amountInput");
        this.paymentModeSelect = document.getElementById("paymentModeSelect");
        this.descriptionInput = document.getElementById("descriptionInput");
        this.dateInput = document.getElementById("dateInput");

        // Activity modal elements
        this.activityModal = document.getElementById("activityModal");
        this.closeActivityModalBtn = document.getElementById("closeActivityModal");
        this.cancelActivityFormBtn = document.getElementById("cancelActivityForm");
        this.activityForm = document.getElementById("activityForm");
        this.activityNameInput = document.getElementById("activityNameInput");
        this.participantsInput = document.getElementById("participantsInput");
        this.timeInput = document.getElementById("timeInput");
        this.durationInput = document.getElementById("durationInput");
        this.locationInput = document.getElementById("locationInput");
        this.activityDescInput = document.getElementById("activityDescInput");

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
        this.currentFinanceEditId = null;

        // Chart.js global tweaks for consistent visuals
        if (window.Chart) {
            Chart.defaults.font.family = "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial";
            Chart.defaults.font.size = 12;
            Chart.defaults.plugins.legend.position = 'bottom';
            Chart.defaults.plugins.legend.labels = Chart.defaults.plugins.legend.labels || {};
            Chart.defaults.plugins.legend.labels.boxWidth = 12;
            Chart.defaults.color = "#333";
        }

        this.dataManager.onDataChangeCallback = () => {
            this.renderAll();
        };

        this.init();
    }

    generateColorPalette(count, alpha = 0.85) {
        const palette = [];
        if (!count || count <= 0) return palette;
        for (let i = 0; i < count; i++) {
            const hue = Math.round((i * 360) / Math.max(1, count));
            palette.push(`hsl(${hue} 75% 50% / ${alpha})`);
        }
        return palette;
    }

    async init() {
        // Create supabase client if config exists
        if (window.SUPABASE_CONFIG && typeof supabase !== 'undefined') {
            try {
                window.supabase = supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.anonKey);
                console.log('Supabase initialized from app');
                // set to data manager if present
                if (this.dataManager) this.dataManager.supabase = window.supabase;
            } catch (err) {
                console.error('Supabase init failed', err);
            }
        }
        await this.dataManager.loadInitialData();
        if (window.supabase) this.setupSupabaseAuth();
        this.initEventListeners();
        this.initVenueAutocomplete(); // Initialize Google Maps autocomplete
        this.renderAll();
        this.updateAdminUI();
    }

    showToast(message, type = 'error', duration = 5000) {
        console.log('showToast called:', { message, type, duration, hasElement: !!this.toastNotification });
        
        if (!this.toastNotification) {
            console.error('Toast notification element not found!');
            return;
        }
        
        const messageEl = this.toastNotification.querySelector('.toast-message');
        console.log('Toast message element:', messageEl);
        if (messageEl) messageEl.textContent = message;
        
        // Remove previous type classes
        this.toastNotification.classList.remove('error', 'success', 'warning');
        // Add new type class
        this.toastNotification.classList.add(type);
        // Show toast
        this.toastNotification.classList.add('show');
        
        console.log('Toast classes after show:', this.toastNotification.className);
        
        // Auto hide after duration
        setTimeout(() => {
            this.toastNotification.classList.remove('show');
        }, duration);
    }
    
    initVenueAutocomplete() {
        // Check if Mapple Maps API is loaded
        if (!window.mappleMapsLoaded || typeof mappls === 'undefined') {
            console.log('Mapple Maps API not loaded yet, will retry when callback fires');
            return;
        }
        
        if (!this.eventVenueInput) {
            console.log('Venue input element not found');
            return;
        }
        
        try {
            // Create Mapple Maps autocomplete plugin with enhanced options
            const autoCompleteOptions = {
                map: false,
                location: [20.5937, 78.9629], // Center of India
                region: 'IND',
                tokenizeAddress: true,
                pod: 'City',
                bridge: true,
                distance: true,
                hyperLocal: false
            };
            
            // Initialize Mapple autocomplete
            const autoCompletePlugin = new mappls.search(this.eventVenueInput, autoCompleteOptions, (data) => {
                console.log('Mapple autocomplete callback triggered', data);
                if (data && data.length > 0) {
                    const selectedPlace = data[0];
                    const displayName = selectedPlace.placeName || selectedPlace.placeAddress || selectedPlace.addressTokens?.houseNumber || '';
                    this.eventVenueInput.value = displayName;
                    console.log('Selected place:', displayName, selectedPlace);
                }
            });
            
            console.log('Mapple Maps Autocomplete initialized for venue input successfully');
        } catch (err) {
            console.error('Failed to initialize Mapple Maps Autocomplete:', err);
            // Fallback to basic input if Mapple fails
            console.log('Venue input will work as basic text field');
        }
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
        
        // Footer logout button
        if (this.footerAdminLogoutBtn) {
            this.footerAdminLogoutBtn.addEventListener("click", () => {
                this.logoutAdmin();
            });
        }

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
        // Supabase signup link
        const adminSignUpLink = document.getElementById('adminSignUpLink');
        if (adminSignUpLink) {
            adminSignUpLink.addEventListener('click', (e) => {
                e.preventDefault();
                if (!window.supabase) {
                    alert('Supabase not configured. Please create supabase-config.js');
                    return;
                }
                const email = this.adminLoginEmailInput?.value;
                const password = this.adminLoginPasswordInput?.value;
                if (!email || !password) {
                    alert('Enter an email and password to sign up');
                    return;
                }
                supabase.auth.signUp({ email, password }).then(({ data, error }) => {
                    if (error) {
                        alert('Sign up failed: ' + error.message);
                    } else {
                        alert('Sign up OK. Please confirm your email and ask the project admin to set is_admin to true in profiles.');
                        this.hideAdminLoginModal();
                    }
                });
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

        // Mobile nav toggle
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                const isOpen = this.navMenu.classList.toggle('open');
                this.navToggle.classList.toggle('active', isOpen);
                this.navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }
        // Floating admin button opens admin login (quick access)
        this.floatingAdminBtn = document.getElementById('floatingAdminBtn');
        if (this.floatingAdminBtn) {
            this.floatingAdminBtn.addEventListener('click', () => this.showAdminLoginModal());
        }
        // Close nav when a link is clicked (mobile)
        if (this.navMenu) {
            this.navMenu.querySelectorAll('.nav__link').forEach(link => {
                link.addEventListener('click', () => {
                    if (this.navMenu.classList.contains('open')) {
                        this.navMenu.classList.remove('open');
                        this.navToggle.classList.remove('active');
                        this.navToggle.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }

        // Close mobile menu if window is resized beyond mobile width
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.navMenu && this.navMenu.classList.contains('open')) {
                this.navMenu.classList.remove('open');
                this.navToggle.classList.remove('active');
                this.navToggle.setAttribute('aria-expanded', 'false');
            }
        });

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
    
    // Format budget input with commas as user types
    if (this.eventBudgetInput) {
        this.eventBudgetInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric
            if (value) {
                // Format with commas
                value = parseInt(value).toLocaleString('en-IN');
                e.target.value = value;
            }
        });
    }
    
    if (this.eventFormModal) {
        this.eventFormModal.addEventListener("click", (e) => {
            // Close when clicking overlay or outside the modal content
            if (e.target === this.eventFormModal || e.target.classList.contains("modal__overlay")) {
                this.closeEventFormModal();
            }
        });
    }

        // Event Modal Actions
        if (this.closeEventModalBtn) this.closeEventModalBtn.addEventListener("click", () => this.closeEventModal());
        if (this.eventModal) {
            this.eventModal.addEventListener("click", (e) => {
                if (e.target === this.eventModal || e.target.classList.contains("modal__overlay")) this.closeEventModal();
            });
        }

        // Update Google Photos link in detail modal (admin only)
        if (this.updatePhotosBtn) {
            this.updatePhotosBtn.addEventListener("click", async () => {
                if (!this.isUserAdmin || !this.currentEventId) return;
                
                // Prevent duplicate submissions
                if (this.updatePhotosBtn.disabled) return;
                this.updatePhotosBtn.disabled = true;
                const originalText = this.updatePhotosBtn.innerHTML;
                this.updatePhotosBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';
                
                try {
                    const ev = this.dataManager.getEventById(this.currentEventId);
                    if (!ev) {
                        this.showToast("error", "Event not found");
                        return;
                    }
                    const link = this.googlePhotosInput ? this.googlePhotosInput.value.trim() : "";
                    
                    // Add timeout to prevent hanging
                    const updatePromise = this.dataManager.updateEvent({ ...ev, googlePhotosLink: link });
                    await Promise.race([
                        updatePromise,
                        new Promise((_, reject) => setTimeout(() => reject(new Error('Update timed out')), 10000))
                    ]);
                    
                    const updatedEvent = this.dataManager.getEventById(this.currentEventId);
                    if (updatedEvent) {
                        this.fillDetailModal(updatedEvent);
                        this.updateGooglePhotosPreview(link);
                        this.showToast("success", "Photos link updated");
                    }
                } catch (err) {
                    console.error('Update photos error:', err);
                    this.showToast("error", "Failed to update photos link");
                } finally {
                    this.updatePhotosBtn.disabled = false;
                    this.updatePhotosBtn.innerHTML = originalText;
                }
            });
        }

        // Event Tabs
        this.eventTabs.forEach(tab => {
            tab.addEventListener("click", (e) => this.switchEventTab(e.currentTarget));
        });
        
        // Mobile tab dropdown
        const eventTabSelect = document.getElementById('eventTabSelect');
        if (eventTabSelect) {
            eventTabSelect.addEventListener('change', (e) => {
                const tabName = e.target.value;
                const correspondingBtn = Array.from(this.eventTabs).find(btn => btn.dataset.tab === tabName);
                if (correspondingBtn) {
                    this.switchEventTab(correspondingBtn);
                }
            });
        }

        // Chart maximize/expand action (analytics)
        document.querySelectorAll('.chart-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('.analytics-card');
                if (!card) return;
                const icon = e.currentTarget.querySelector('i');
                const isFullscreen = card.classList.toggle('fullscreen');
                // toggle icon between expand and X (times)
                if (icon) {
                    icon.classList.toggle('fa-expand', !isFullscreen);
                    icon.classList.toggle('fa-times', isFullscreen);
                }
                // when entering fullscreen, scroll to top - helps mobile
                if (isFullscreen) {
                    // store previous scroll so we can restore when exiting fullscreen
                    this._prevScrollY = window.scrollY || 0;
                    document.body.classList.add('no-scroll');
                } else {
                    document.body.classList.remove('no-scroll');
                    // restore previous scroll position so page doesn't jump to top
                    if (typeof this._prevScrollY === 'number') {
                        window.scrollTo({ top: this._prevScrollY, behavior: 'auto' });
                    }
                }
            });
        });

        // Close fullscreen with Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const full = document.querySelector('.analytics-card.fullscreen');
                if (full) {
                    full.classList.remove('fullscreen');
                    const ic = full.querySelector('.chart-action i');
                    if (ic) { ic.classList.remove('fa-times'); ic.classList.add('fa-expand'); }
                    document.body.classList.remove('no-scroll');
                    // restore previous scroll
                    if (typeof this._prevScrollY === 'number') window.scrollTo({ top: this._prevScrollY, behavior: 'auto' });
                }
            }
        });

        // Finances Tab Buttons -> open finance modal
    if (this.addExpenseBtn) this.addExpenseBtn.addEventListener("click", () => {
        this.currentFinanceEditId = null; // Reset to add mode
        this.openFinanceModal("expenses");
    });
    if (this.addIncomeBtn) this.addIncomeBtn.addEventListener("click", () => {
        this.currentFinanceEditId = null; // Reset to add mode
        this.openFinanceModal("income");
    });

        // Activities Tab Button -> open activity modal
    if (this.addActivityBtn) this.addActivityBtn.addEventListener("click", () => this.openActivityModal());

        // Finance modal listeners
        if (this.closeFinanceModalBtn) this.closeFinanceModalBtn.addEventListener("click", () => this.closeFinanceModal());
        if (this.cancelFinanceFormBtn) this.cancelFinanceFormBtn.addEventListener("click", () => this.closeFinanceModal());
        if (this.financeModal) {
            this.financeModal.addEventListener("click", (e) => {
                if (e.target === this.financeModal || e.target.classList.contains("modal__overlay")) this.closeFinanceModal();
            });
        }
        if (this.financeForm) {
            this.financeForm.addEventListener("submit", async (e) => {
                e.preventDefault();
                await this.saveFinanceEntry();
            });
        }
        
        // Format amount input with commas as user types
        if (this.amountInput) {
            this.amountInput.addEventListener("input", (e) => {
                let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric
                if (value) {
                    // Format with commas
                    value = parseInt(value).toLocaleString('en-IN');
                    e.target.value = value;
                }
            });
        }

        // Activity modal listeners
        if (this.closeActivityModalBtn) this.closeActivityModalBtn.addEventListener("click", () => this.closeActivityModal());
        if (this.cancelActivityFormBtn) this.cancelActivityFormBtn.addEventListener("click", () => this.closeActivityModal());
        if (this.activityModal) {
            this.activityModal.addEventListener("click", (e) => {
                if (e.target === this.activityModal || e.target.classList.contains("modal__overlay")) this.closeActivityModal();
            });
        }
        if (this.activityForm) {
            this.activityForm.addEventListener("submit", async (e) => {
                e.preventDefault();
                await this.saveActivityEntry();
            });
        }

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
        // Prefer Supabase auth when available
        if (window.supabase && this.adminLoginEmailInput && this.adminLoginPasswordInput) {
            const email = this.adminLoginEmailInput.value;
            const password = this.adminLoginPasswordInput.value;
            supabase.auth.signInWithPassword({ email, password }).then(async ({ data, error }) => {
                if (error) {
                    if (this.adminErrorMsg) this.adminErrorMsg.textContent = error.message || 'Login failed';
                } else {
                    // ensure a profile exists
                    const userId = data?.user?.id;
                    if (userId) {
                        // upsert profile (create if missing)
                        await supabase.from('profiles').upsert({ id: userId, email }, { returning: 'minimal' });
                        // check admin flag
                        let { data: p, error: pe } = await supabase.from('profiles').select('is_admin').eq('id', userId).maybeSingle();
                        if ((!p || pe) && email) {
                            const q = await supabase.from('profiles').select('is_admin').eq('email', email).maybeSingle();
                            p = q.data; pe = q.error;
                        }
                        console.log('Login check profiles.is_admin =', p?.is_admin, 'error=', pe);
                        this.isUserAdmin = p?.is_admin === true;
                        if (!this.isUserAdmin && this.adminErrorMsg) {
                            this.adminErrorMsg.textContent = 'Signed in, but this account is not an admin.';
                        }
                        this.hideAdminLoginModal();
                        this.updateAdminUI();
                        this.renderAll();
                    }
                }
            });
            return;
        }

        // legacy local password fallback
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
            this.showToast(
                "Wrong password! Please reach out to Harsha Vallamkonda for the correct password.",
                'error',
                6000
            );
        }
    }

    // Open the lightweight Event Form modal used for Add / Edit
    openEventFormModal(eventId = null) {
        if (!this.eventFormModal) return;
        this.eventFormModal.classList.remove("hidden");
        this.currentEventId = eventId;
        // Reset or populate form
        if (eventId) {
            if (this.eventFormTitle) this.eventFormTitle.textContent = "Edit Event";
            const ev = this.dataManager.getEventById(eventId);
            if (ev) {
                this.eventNameInput.value = ev.name || "";
                this.eventDateInput.value = ev.date || "";
                this.eventBudgetInput.value = ev.totalBudget ? ev.totalBudget.toLocaleString('en-IN') : "";
                this.eventVenueInput.value = ev.venue || "";
                this.eventGuestsInput.value = ev.expectedGuests || "";
                this.eventDescriptionInput.value = ev.description || "";
                this.eventPhotosInput.value = ev.googlePhotosLink || "";
            }
        } else {
            if (this.eventFormTitle) this.eventFormTitle.textContent = "Add New Event";
            this.eventForm.reset();
        }
    }

    closeEventFormModal() {
        if (!this.eventFormModal) return;
        this.eventFormModal.classList.add("hidden");
        this.currentEventId = null;
    }

    async saveEventFromForm() {
        // Prevent duplicate submissions
        const submitBtn = this.eventForm?.querySelector('button[type="submit"]');
        if (submitBtn) {
            if (submitBtn.disabled) return; // Already saving
            submitBtn.disabled = true;
            submitBtn.dataset.originalText = submitBtn.textContent;
            submitBtn.textContent = 'Saving...';
        }
        
        try {
            // Validate form first to surface any HTML5 validation errors
            if (this.eventForm && !this.eventForm.reportValidity()) {
                console.warn('Form validation failed');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = submitBtn.dataset.originalText || 'Save Event';
                }
                return;
            }
            const name = (this.eventNameInput?.value || "").trim();
            if (!name) {
                this.showToast("error", "Please enter an event name.");
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = submitBtn.dataset.originalText || 'Save Event';
                }
                return;
            }
            const dateVal = this.eventDateInput?.value || "";
            const yearVal = dateVal ? new Date(dateVal).getFullYear() : new Date().getFullYear();
            // Parse budget - remove commas and currency symbols before parsing
            const budgetStr = (this.eventBudgetInput?.value || "").replace(/[,₹\s]/g, "");
            const budgetVal = parseFloat(budgetStr);
            console.log('Saving event with values:', { name, yearVal, dateVal, budgetVal });
            
            // Read values from the simple form and create/update event
            const eventData = {
                name,
                year: yearVal,
                date: dateVal,
                totalBudget: Number.isFinite(budgetVal) ? budgetVal : 0,
                venue: this.eventVenueInput?.value || "",
                expectedGuests: parseInt(this.eventGuestsInput?.value) || 0,
                description: this.eventDescriptionInput?.value || "",
                googlePhotosLink: this.eventPhotosInput?.value || "",
                status: "upcoming",
                expenses: [],
                income: [],
                activities: []
            };

            console.log('Calling dataManager.addEvent with:', eventData);
            
            if (this.currentEventId) {
                eventData.id = this.currentEventId;
                // updateEvent now returns immediately after saving locally
                await this.dataManager.updateEvent(eventData);
                console.log('Event updated');
            } else {
                // addEvent now returns immediately after saving locally
                const result = await this.dataManager.addEvent(eventData);
                console.log('Event added, result:', result);
            }

            this.closeEventFormModal();
            await this.renderAll();
            this.showToast("success", "Event saved successfully.");
            // Scroll to events grid so user sees the update
            if (typeof scrollToSection === "function") scrollToSection("events");
        } catch (err) {
            console.error("Failed to save event:", err);
            this.showToast("error", 'Failed to save event: ' + err.message);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = submitBtn.dataset.originalText || 'Save Event';
            }
        }
    }

    showToast(type, message) {
        const successToast = document.getElementById("successToast");
        const errorToast = document.getElementById("errorToast");
        const show = (el, msg, duration = 2000) => {
            if (!el) return;
            const span = el.querySelector(".toast-message");
            if (span) span.textContent = msg;
            el.classList.remove("hidden");
            setTimeout(() => el.classList.add("hidden"), duration);
        };
        
        // Show timeout errors longer (4 seconds) so user can read them
        const duration = message && message.toLowerCase().includes('timed out') ? 4000 : 2000;
        
        if (type === "success") return show(successToast, message || "Success", duration);
        return show(errorToast, message || "Something went wrong", duration);
    }

    logoutAdmin() {
        // sign out supabase if using auth
        if (window.supabase) {
            supabase.auth.signOut().catch(err => console.error('Sign out error', err));
        }
        this.isUserAdmin = false;
        this.updateAdminUI();
        this.renderAll(); // Re-render to hide admin controls
    }

    setupSupabaseAuth() {
        if (!window.supabase) return;
        // Listen to auth changes
        supabase.auth.onAuthStateChange(async (event, session) => {
            console.log('Auth state changed', event);
            if (session && session.user) {
                // upsert profile
                await supabase.from('profiles').upsert({ id: session.user.id, email: session.user.email }, { returning: 'minimal' });
                let { data, error } = await supabase.from('profiles').select('is_admin').eq('id', session.user.id).maybeSingle();
                if ((!data || error) && session.user.email) {
                    const q = await supabase.from('profiles').select('is_admin').eq('email', session.user.email).maybeSingle();
                    data = q.data; error = q.error;
                }
                console.log('Auth state profiles.is_admin =', data?.is_admin, 'error=', error);
                this.isUserAdmin = data?.is_admin === true;
            } else {
                this.isUserAdmin = false;
            }
            this.updateAdminUI();
            this.renderAll();
        });
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
            eventCard.dataset.id = event.id;
            eventCard.innerHTML = `
                <div class="event-card__header">
                    <span class="event-card__year">${event.year}</span>
                    <h3 class="event-card__title">${event.name}</h3>
                </div>
                <div class="event-card__body">
                    <p class="event-card__description">${event.description ? event.description.substring(0, 100) + (event.description.length > 100 ? '...' : '') : 'No description'}</p>
                    <div class="event-card__meta">
                        <span><i class="fas fa-calendar-alt"></i> ${event.date || 'No date'}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${event.venue || 'No venue'}</span>
                        <span><i class="fas fa-rupee-sign"></i> ${(event.totalBudget || 0).toLocaleString('en-IN')}</span>
                    </div>
                </div>
                <div class="event-card__footer">
                    <span class="event-card__status event-card__status--${event.status}">${event.status}</span>
                    <div class="event-card__actions">
                        <button class="btn btn--sm btn--outline view-details-btn" data-id="${event.id}">View Details</button>
                        ${this.isUserAdmin ? `<button class="btn btn--sm btn--primary event-card__edit" data-id="${event.id}"><i class="fas fa-edit"></i></button>` : ""}
                        ${this.isUserAdmin ? `<button class="btn btn--sm btn--danger delete-event-btn" data-id="${event.id}"><i class="fas fa-trash"></i></button>` : ""}
                    </div>
                </div>
            `;
            
            // Make entire card clickable to view details
            eventCard.style.cursor = 'pointer';
            eventCard.addEventListener("click", (e) => {
                // Don't open if clicking on buttons
                if (e.target.closest('button')) return;
                this.openEventModal(event.id);
            });
            
            // Edit button (admin only)
            const editBtn = eventCard.querySelector(".event-card__edit");
            if (editBtn) {
                editBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    this.openEventFormModal(e.currentTarget.dataset.id);
                });
            }
            
            // view details button
            const viewBtn = eventCard.querySelector(".view-details-btn");
            if (viewBtn) viewBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                this.openEventModal(e.currentTarget.dataset.id);
            });
            // delete button (admin only)
            const delBtn = eventCard.querySelector(".delete-event-btn");
            if (delBtn) {
                delBtn.addEventListener("click", async (e) => {
                    e.stopPropagation();
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
        
        // Calculate dynamic unique families from all events' income data
        const uniqueFamilies = new Set();
        events.forEach(event => {
            if (event.income && Array.isArray(event.income)) {
                event.income.forEach(inc => {
                    if (inc.family) uniqueFamilies.add(inc.family);
                });
            }
        });
        this.totalFamiliesSpan.textContent = uniqueFamilies.size;
        
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
        // Use numeric conversions and safe defaults when summing
        const eventNames = events.map(event => event.name);
        const totalBudgets = events.map(event => event.totalBudget || 0);
        const totalExpenses = events.map(event =>
            event.expenses ? event.expenses.reduce((sum, exp) => sum + (Number(exp.amount) || 0), 0) : 0
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
                maintainAspectRatio: false,
                aspectRatio: 2,
                scales: {
                    x: {
                        ticks: {
                            callback: function (val, index) {
                                const label = this.getLabelForValue(val) || eventNames[index] || "";
                                return label.length > 18 ? label.substring(0, 15) + "..." : label;
                            },
                            maxRotation: 30,
                            minRotation: 0
                            , autoSkip: true, maxTicksLimit: 10
                    },
                    xAxes: { // alias for Chart v2/v3 compatibility
                        ticks: { autoSkip: true, maxTicksLimit: 10 }
                    },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: { callback: (value) => `₹${Number(value).toLocaleString("en-IN")}` }
                    }
                },
                plugins: {
                    legend: { position: 'bottom' },
                    tooltip: { callbacks: {
                        title: (items) => items && items.length ? (eventNames[items[0].dataIndex] || items[0].label) : '',
                        label: (context) => `${context.dataset.label}: ₹${Number(context.parsed.y || context.parsed).toLocaleString("en-IN")}`
                    } }
                }
            }
        });
    }

    renderContributionChart(events) {
        const familyContributions = {};
        events.forEach(event => {
                event.income?.forEach(inc => {
                    familyContributions[inc.family] = (familyContributions[inc.family] || 0) + (Number(inc.amount) || 0);
            });
        });

        // Sort families by contribution (desc) for better visual clarity
        const sorted = Object.entries(familyContributions).sort((a, b) => b[1] - a[1]);
        const labels = sorted.map(x => x[0]);
        const data = sorted.map(x => x[1]);

        if (this.contributionChart) this.contributionChart.destroy();
        this.contributionChart = new Chart(this.contributionChartCtx, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: this.generateColorPalette(data.length),
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1.5,
                plugins: {
                    tooltip: { callbacks: {
                        title: (items) => items && items.length ? items[0].label : '',
                        label: (context) => `₹${Number(context.parsed).toLocaleString("en-IN")}`
                    } }
                }
            }
        });
    }

    renderExpenseChart(events) {
        const expenseCategories = {};
        events.forEach(event => {
            event.expenses?.forEach(exp => {
                expenseCategories[exp.category] = (expenseCategories[exp.category] || 0) + (Number(exp.amount) || 0);
            });
        });

        const sortedExpenses = Object.entries(expenseCategories).sort((a, b) => b[1] - a[1]);
        const labels = sortedExpenses.map(x => x[0]);
        const data = sortedExpenses.map(x => x[1]);

        if (this.expenseChart) this.expenseChart.destroy();
        this.expenseChart = new Chart(this.expenseChartCtx, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: this.generateColorPalette(data.length, 0.9),
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1.5,
                plugins: {
                    tooltip: { callbacks: {
                        title: (items) => items && items.length ? items[0].label : '',
                        label: (context) => `₹${Number(context.parsed).toLocaleString("en-IN")}`
                    } }
                }
            }
        });
    }

    renderPaymentChart(events) {
        const paymentMethods = {};
        events.forEach(event => {
            event.expenses?.forEach(exp => {
                // Only count if paymentMode exists and is not empty
                if (exp.paymentMode && exp.paymentMode.trim()) {
                    paymentMethods[exp.paymentMode] = (paymentMethods[exp.paymentMode] || 0) + (Number(exp.amount) || 0);
                }
            });
            event.income?.forEach(inc => {
                // Only count if paymentMode exists and is not empty
                if (inc.paymentMode && inc.paymentMode.trim()) {
                    paymentMethods[inc.paymentMode] = (paymentMethods[inc.paymentMode] || 0) + (Number(inc.amount) || 0);
                }
            });
        });

        // Sort payment methods by amount desc for consistency
        const sorted = Object.entries(paymentMethods).sort((a, b) => b[1] - a[1]);
        const labels = sorted.map(x => x[0]);
        const data = sorted.map(x => x[1]);

        if (this.paymentChart) this.paymentChart.destroy();
        this.paymentChart = new Chart(this.paymentChartCtx, {
            type: "polarArea",
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: this.generateColorPalette(data.length),
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1.2,
                plugins: {
                    tooltip: { callbacks: {
                        title: (items) => items && items.length ? items[0].label : '',
                        label: (context) => `₹${Number(context.parsed).toLocaleString("en-IN")}`
                    } }
                }
            }
        });
    }

    openEventModal(eventId = null) {
        if (!this.eventModal) return;
        this.eventModal.classList.remove("hidden");
        this.currentEventId = eventId;
        const ev = eventId ? this.dataManager.getEventById(eventId) : null;
        if (this.eventModalTitle) this.eventModalTitle.textContent = ev?.name ? `${ev.name}` : "Event Details";
        if (ev) this.fillDetailModal(ev);
        // Default to the Overview tab in current markup
        const defaultTab = this.eventModal.querySelector(".tab-btn[data-tab='overview']") || this.eventTabs[0];
        if (defaultTab) this.switchEventTab(defaultTab);
        this.updateAdminControlsInModal();
    }

    closeEventModal() {
        this.eventModal.classList.add("hidden");
        this.currentEventId = null;
        this.resetEventForm();
    }

    resetEventForm() {
        if (this.eventForm) this.eventForm.reset();
        const preview = document.getElementById("eventGooglePhotosLinkPreview");
        if (preview) preview.innerHTML = "";
    }

    fillEventForm(event) {
        // This method is not used for the simple Add Event form
        // The detail modal uses fillDetailModal instead
        this.eventNameInput.value = event.name || "";
        this.eventYearInput.value = event.year || "";
        this.eventDateInput.value = event.date || "";
        this.eventBudgetInput.value = event.totalBudget || "";
        this.eventVenueInput.value = event.venue || "";
        this.eventGuestsInput.value = event.expectedGuests || "";
        this.eventDescriptionInput.value = event.description || "";
        this.eventPhotosInput.value = event.googlePhotosLink || "";
    }

    async saveEvent() {
        // Not used - saveEventFromForm handles new event creation
        console.warn("saveEvent() called but not used for new events");
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

        const targetTab = clickedTab.dataset.tab; // matches ids: overview|finances|activities|photos
        this.eventTabContents.forEach(content => {
            if (content.id === targetTab) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });

        // If user switched to photos tab on a small device, bring the input into viewport
        if (targetTab === "photos" && this.googlePhotosInput) {
            try {
                // Scroll input into view on small screens to ensure user can paste or type
                if (window.innerWidth <= 640) {
                    this.googlePhotosInput.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            } catch (err) {
                // ignore
            }
        }
        
        // Update mobile dropdown to match active tab
        const eventTabSelect = document.getElementById('eventTabSelect');
        if (eventTabSelect) {
            eventTabSelect.value = targetTab;
            // Force update the display value
            eventTabSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
    
    updateGooglePhotosPreview(photoLink) {
        const preview = document.getElementById('photosPreview');
        if (!preview) return;
        
        if (!photoLink || !photoLink.trim()) {
            preview.innerHTML = `
                <div class="photos-empty-state">
                    <i class="fas fa-images"></i>
                    <p>No photo album added yet</p>
                </div>
            `;
            return;
        }
        
        const linkUrl = photoLink.trim();
        
        preview.innerHTML = `
            <div class="photos-link-card">
                <div class="photos-link-header">
                    <i class="fas fa-images"></i>
                    <h4>Event Photo Album</h4>
                </div>
                <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="photos-link-btn">
                    <i class="fas fa-external-link-alt"></i>
                    <span>View Photos</span>
                </a>
            </div>
        `;
    }

    fillDetailModal(event) {
        if (!event) return;
        if (this.detailNameEl) this.detailNameEl.textContent = event.name || "Event";
        if (this.detailDescEl) this.detailDescEl.textContent = event.description || "";
        if (this.detailDateMini) this.detailDateMini.value = event.date || "";
        if (this.detailBudgetMini) this.detailBudgetMini.value = event.totalBudget || 0;
        if (this.detailVenueMini) this.detailVenueMini.value = event.venue || "";
        if (this.detailGuestsMini) this.detailGuestsMini.value = event.expectedGuests || 0;

        // Totals
        const spent = (event.expenses || []).reduce((s, x) => s + (Number(x.amount) || 0), 0);
        const received = (event.income || []).reduce((s, x) => s + (Number(x.amount) || 0), 0);
        const budget = Number(event.totalBudget) || 0;
        const balance = received - spent;
        const usedPct = budget > 0 ? Math.min(100, Math.round((spent / budget) * 100)) : 0;

        const spentEl = document.getElementById("eventTotalSpent");
        const receivedEl = document.getElementById("eventTotalReceived");
        const balanceEl = document.getElementById("eventNetBalance");
        const pctEl = document.getElementById("progressPercent");
        const circleEl = document.getElementById("progressCircle");
        if (spentEl) spentEl.innerHTML = `<i class="fas fa-rupee-sign"></i> ${spent.toLocaleString("en-IN")}`;
        if (receivedEl) receivedEl.innerHTML = `<i class="fas fa-rupee-sign"></i> ${received.toLocaleString("en-IN")}`;
        if (balanceEl) balanceEl.innerHTML = `<i class="fas fa-rupee-sign"></i> ${balance.toLocaleString("en-IN")}`;
        if (pctEl) pctEl.textContent = `${usedPct}%`;
        if (circleEl) circleEl.style.background = `conic-gradient(#36A2EB ${usedPct}%, rgba(0,0,0,0.1) 0)`;

        // Render finances lists
        if (this.expensesListEl) this.expensesListEl.innerHTML = (event.expenses || []).map(exp => (
            `<div class="finance-item">
                <div class="finance-item__left">
                    <span class="badge">${exp.category || "Expense"}</span>
                    <div class="finance-item__desc">${exp.description || ""}</div>
                    <div class="finance-item__meta"><i class="fas fa-calendar"></i> ${exp.date || ""}</div>
                </div>
                <div class="finance-item__right">
                    <div class="finance-item__amount">₹${(Number(exp.amount)||0).toLocaleString("en-IN")}</div>
                    ${this.isUserAdmin ? `
                    <div class="finance-item__actions">
                        <button class="btn-icon btn-icon--sm edit-expense-btn" data-id="${exp.id}" data-event-id="${event.id}" title="Edit expense">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon btn-icon--sm btn-icon--danger delete-expense-btn" data-id="${exp.id}" data-event-id="${event.id}" title="Delete expense">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    ` : ''}
                </div>
            </div>`
        )).join("");

        if (this.incomeListEl) this.incomeListEl.innerHTML = (event.income || []).map(inc => (
            `<div class="finance-item">
                <div class="finance-item__left">
                    <span class="badge badge--info">${inc.family || "Contribution"}</span>
                    <div class="finance-item__meta"><i class="fas fa-calendar"></i> ${inc.date || ""}</div>
                </div>
                <div class="finance-item__right">
                    <div class="finance-item__amount">₹${(Number(inc.amount)||0).toLocaleString("en-IN")}</div>
                    ${this.isUserAdmin ? `
                    <div class="finance-item__actions">
                        <button class="btn-icon btn-icon--sm edit-income-btn" data-id="${inc.id}" data-event-id="${event.id}" title="Edit income">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon btn-icon--sm btn-icon--danger delete-income-btn" data-id="${inc.id}" data-event-id="${event.id}" title="Delete income">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    ` : ''}
                </div>
            </div>`
        )).join("");

        // Render activities timeline
        if (this.activitiesListEl) this.activitiesListEl.innerHTML = (event.activities || []).map(act => (
            `<div class="activity-item">
                <div class="activity-time"><i class="fas fa-clock"></i> ${act.time || ""} • ${act.duration || ""}</div>
                <div class="activity-title">${act.name || "Activity"}</div>
                <div class="activity-meta">${act.location || ""} • ${act.participants || ""}</div>
                <div class="activity-desc">${act.description || ""}</div>
            </div>`
        )).join("");

        // Photos
        if (this.googlePhotosInput) this.googlePhotosInput.value = event.googlePhotosLink || "";
        
        // Update photos preview
        this.updateGooglePhotosPreview(event.googlePhotosLink);
        
        if (this.photoGalleryEl) {
            this.photoGalleryEl.innerHTML = "";
            if (event.googlePhotosLink) {
                const linkUrl = event.googlePhotosLink.trim();
                
                // Create a preview card (Google Photos blocks iframe embedding)
                const container = document.createElement('div');
                container.className = 'photos-preview-card';
                container.innerHTML = `
                    <div class="photos-preview-icon">
                        <i class="fab fa-google"></i>
                    </div>
                    <div class="photos-preview-content">
                        <h3 class="photos-preview-title">
                            <i class="fas fa-images"></i> Event Photo Album
                        </h3>
                        <p class="photos-preview-desc">View all photos from this event in Google Photos</p>
                        <a href="${linkUrl}" target="_blank" class="btn btn--primary photos-preview-btn">
                            <i class="fas fa-external-link-alt"></i>
                            <span>Open Photo Album</span>
                        </a>
                    </div>
                `;
                this.photoGalleryEl.appendChild(container);
            } else {
                this.photoGalleryEl.innerHTML = `<div class="gallery-placeholder">
                    <i class="fas fa-images"></i>
                    <h4>No Photos Yet</h4>
                    <p>Add Google Photos link to display event photos</p>
                </div>`;
            }
        }

        // Admin inline edits for mini fields
        const canEdit = this.isUserAdmin;
        [this.detailDateMini, this.detailBudgetMini, this.detailVenueMini, this.detailGuestsMini].forEach(el => {
            if (!el) return;
            if (canEdit) {
                el.removeAttribute("readonly");
                if (el.tagName === "SELECT") el.removeAttribute("disabled");
            } else {
                el.setAttribute("readonly", true);
                if (el.tagName === "SELECT") el.setAttribute("disabled", true);
            }
        });

        // Save on change if admin
        const saveMiniUpdate = async () => {
            if (!this.isUserAdmin) return;
            const updated = {
                ...event,
                date: this.detailDateMini?.value || event.date || "",
                totalBudget: Number(this.detailBudgetMini?.value) || event.totalBudget || 0,
                venue: this.detailVenueMini?.value || event.venue || "",
                expectedGuests: Number(this.detailGuestsMini?.value) || event.expectedGuests || 0
            };
            await this.dataManager.updateEvent(updated);
            const fresh = this.dataManager.getEventById(updated.id);
            this.fillDetailModal(fresh);
        };
        if (this.detailDateMini) this.detailDateMini.onchange = saveMiniUpdate;
        if (this.detailBudgetMini) this.detailBudgetMini.onchange = saveMiniUpdate;
        if (this.detailVenueMini) this.detailVenueMini.onchange = saveMiniUpdate;
        if (this.detailGuestsMini) this.detailGuestsMini.onchange = saveMiniUpdate;
    }

    openFinanceModal(type) {
        if (!this.financeModal) return;
        if (!this.currentEventId) return;
        
        // Don't reset edit ID here - it's set by the caller when editing
        // this.currentFinanceEditId = null; // REMOVED - causes edit to fail
        
        this.financeTypeInput.value = type;
        // Toggle groups
        if (this.familyGroup) this.familyGroup.style.display = type === "income" ? "block" : "none";
        if (this.categoryGroup) this.categoryGroup.style.display = type === "expenses" ? "block" : "none";
        // Populate suggestions/selects
        if (this.paymentModeSelect) {
            this.paymentModeSelect.innerHTML = this.dataManager.getPaymentModes().map(m => `<option value="${m}">${m}</option>`).join("");
        }
        const famDatalist = document.getElementById("familySuggestions");
        if (famDatalist) famDatalist.innerHTML = this.dataManager.getFamilies().map(f => `<option value="${f.name}"></option>`).join("");
        const catDatalist = document.getElementById("categorySuggestions");
        if (catDatalist) catDatalist.innerHTML = this.dataManager.getExpenseCategories().map(c => `<option value="${c}"></option>`).join("");
        
        // Only reset fields if NOT editing (i.e., adding new entry)
        if (!this.currentFinanceEditId) {
            if (this.familyInput) this.familyInput.value = "";
            if (this.categoryInput) this.categoryInput.value = "";
            if (this.amountInput) this.amountInput.value = "";
            if (this.descriptionInput) this.descriptionInput.value = "";
            if (this.dateInput) this.dateInput.value = "";
        }
        
        this.financeModal.classList.remove("hidden");
    }

    closeFinanceModal() {
        if (this.financeModal) this.financeModal.classList.add("hidden");
        // Reset edit mode when closing
        this.currentFinanceEditId = null;
        // Clear form fields
        if (this.familyInput) this.familyInput.value = "";
        if (this.categoryInput) this.categoryInput.value = "";
        if (this.amountInput) this.amountInput.value = "";
        if (this.descriptionInput) this.descriptionInput.value = "";
        if (this.dateInput) this.dateInput.value = "";
    }

    async saveFinanceEntry() {
        console.log('saveFinanceEntry called, currentEventId:', this.currentEventId);
        if (!this.currentEventId) {
            this.showToast("error", "No event selected");
            return;
        }
        
        // Prevent duplicate submissions
        const submitBtn = this.financeForm?.querySelector('button[type="submit"]');
        if (submitBtn) {
            if (submitBtn.disabled) return; // Already saving
            submitBtn.disabled = true;
            submitBtn.textContent = 'Saving...';
        }
        
        const type = this.financeTypeInput.value;
        // Parse amount - remove commas and currency symbols before parsing
        const amountStr = (this.amountInput?.value || "").replace(/[,₹\s]/g, "");
        const amount = Number(amountStr) || 0;
        console.log('Finance entry type:', type, 'amount:', amount);
        if (!amount) { 
            this.showToast("error", "Enter amount"); 
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Save Entry';
            }
            return; 
        }
        const entry = {
            amount,
            paymentMode: this.paymentModeSelect?.value || "Cash",
            date: this.dateInput?.value || "",
            description: this.descriptionInput?.value || ""
        };
        if (type === "expenses") {
            entry.category = this.categoryInput?.value || "Miscellaneous";
        } else {
            entry.family = this.familyInput?.value || "Unknown";
        }
        
        console.log('Finance entry:', { eventId: this.currentEventId, type, entry, editMode: !!this.currentFinanceEditId });
        
        try {
            // Check if editing existing entry
            if (this.currentFinanceEditId) {
                entry.id = this.currentFinanceEditId;
                await this.dataManager.updateSubItem(this.currentEventId, type, entry);
                this.currentFinanceEditId = null;
            } else {
                await this.dataManager.addSubItem(this.currentEventId, type, entry);
            }
            
            const ev = this.dataManager.getEventById(this.currentEventId);
            console.log('Updated event after save:', ev);
            if (ev) {
                this.fillDetailModal(ev);
                this.closeFinanceModal();
                this.showToast("Entry saved successfully", "success");
            } else {
                this.showToast("Event not found after save", "error");
            }
        } catch (err) {
            console.error('saveFinanceEntry error:', err);
            this.showToast('Failed to save: ' + err.message, "error");
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Save Entry';
            }
        }
    }

    openActivityModal() {
        if (!this.activityModal) return;
        if (!this.currentEventId) return;
        if (this.activityNameInput) this.activityNameInput.value = "";
        if (this.participantsInput) this.participantsInput.value = "";
        if (this.timeInput) this.timeInput.value = "";
        if (this.durationInput) this.durationInput.value = "";
        if (this.locationInput) this.locationInput.value = "";
        if (this.activityDescInput) this.activityDescInput.value = "";
        this.activityModal.classList.remove("hidden");
    }

    closeActivityModal() {
        if (this.activityModal) this.activityModal.classList.add("hidden");
    }

    async saveActivityEntry() {
        console.log('saveActivityEntry called, currentEventId:', this.currentEventId);
        if (!this.currentEventId) {
            this.showToast("error", "No event selected");
            return;
        }
        
        // Prevent duplicate submissions
        const submitBtn = this.activityForm?.querySelector('button[type="submit"]');
        if (submitBtn) {
            if (submitBtn.disabled) return; // Already saving
            submitBtn.disabled = true;
            submitBtn.textContent = 'Saving...';
        }
        
        const act = {
            name: this.activityNameInput?.value || "",
            participants: this.participantsInput?.value || "",
            time: this.timeInput?.value || "",
            duration: this.durationInput?.value || "",
            description: this.activityDescInput?.value || "",
            location: this.locationInput?.value || "",
            incharge: ""
        };
        console.log('Activity data:', act);
        if (!act.name) { 
            this.showToast("error", "Enter activity name"); 
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Save Activity';
            }
            return; 
        }
        try {
            // addSubItem now returns immediately after saving locally
            await this.dataManager.addSubItem(this.currentEventId, "activities", act);
            
            const ev = this.dataManager.getEventById(this.currentEventId);
            console.log('Updated event after addSubItem:', ev);
            if (ev) {
                this.fillDetailModal(ev);
                this.closeActivityModal();
                this.showToast("success", "Activity saved successfully");
            } else {
                this.showToast("error", "Event not found after save");
            }
        } catch (err) {
            console.error('saveActivityEntry error:', err);
            this.showToast("error", 'Failed to save: ' + err.message);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Save Activity';
            }
        }
    }

    addFinanceItem(type, item = {}) {
        console.error('addFinanceItem: financesTableBody does not exist in event form modal');
    }

    addActivityRow(activity = {}) {
        console.error('addActivityRow: activitiesTableBody does not exist in event form modal');
    }

    addActivityItem() {
        this.addActivityRow({});
    }

    // Backwards-compatible wrapper used by older code paths
    addFinanceRow(type, item = {}) {
        console.error('addFinanceRow called but financesTableBody not in event form - this is for detail modal only');
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
        if (!this.eventModal) return;
        const adminOnlyElements = this.eventModal.querySelectorAll(".admin-only");
        if (this.isUserAdmin) {
            if (this.addExpenseBtn) this.addExpenseBtn.classList.remove("hidden");
            if (this.addIncomeBtn) this.addIncomeBtn.classList.remove("hidden");
            if (this.addActivityBtn) this.addActivityBtn.classList.remove("hidden");
            adminOnlyElements.forEach(el => el.classList.remove("hidden"));
        } else {
            if (this.addExpenseBtn) this.addExpenseBtn.classList.add("hidden");
            if (this.addIncomeBtn) this.addIncomeBtn.classList.add("hidden");
            if (this.addActivityBtn) this.addActivityBtn.classList.add("hidden");
            adminOnlyElements.forEach(el => el.classList.add("hidden"));
        }
        
        // Add event listeners for edit/delete buttons using event delegation
        if (this.expensesListEl) {
            this.expensesListEl.addEventListener('click', async (e) => {
                const editBtn = e.target.closest('.edit-expense-btn');
                const deleteBtn = e.target.closest('.delete-expense-btn');
                
                if (editBtn) {
                    const expenseId = editBtn.dataset.id;
                    const eventId = editBtn.dataset.eventId;
                    const event = this.dataManager.getEventById(eventId);
                    const expense = event?.expenses?.find(exp => exp.id === expenseId);
                    if (expense && event) {
                        // Open finance modal in edit mode
                        this.currentFinanceEditId = expenseId;
                        this.openFinanceModal('expenses');
                        // Pre-fill form
                        if (this.categoryInput) this.categoryInput.value = expense.category || '';
                        if (this.amountInput) this.amountInput.value = expense.amount || '';
                        if (this.paymentModeSelect) this.paymentModeSelect.value = expense.paymentMode || '';
                        if (this.descriptionInput) this.descriptionInput.value = expense.description || '';
                        if (this.dateInput) this.dateInput.value = expense.date || '';
                    }
                } else if (deleteBtn) {
                    const expenseId = deleteBtn.dataset.id;
                    const eventId = deleteBtn.dataset.eventId;
                    if (confirm('Delete this expense?')) {
                        await this.dataManager.deleteSubItem(eventId, 'expenses', expenseId);
                        const event = this.dataManager.getEventById(eventId);
                        if (event) this.fillDetailModal(event);
                    }
                }
            });
        }
        
        if (this.incomeListEl) {
            this.incomeListEl.addEventListener('click', async (e) => {
                const editBtn = e.target.closest('.edit-income-btn');
                const deleteBtn = e.target.closest('.delete-income-btn');
                
                if (editBtn) {
                    const incomeId = editBtn.dataset.id;
                    const eventId = editBtn.dataset.eventId;
                    const event = this.dataManager.getEventById(eventId);
                    const income = event?.income?.find(inc => inc.id === incomeId);
                    if (income && event) {
                        // Open finance modal in edit mode
                        this.currentFinanceEditId = incomeId;
                        this.openFinanceModal('income');
                        // Pre-fill form
                        if (this.familyInput) this.familyInput.value = income.family || '';
                        if (this.amountInput) this.amountInput.value = income.amount || '';
                        if (this.paymentModeSelect) this.paymentModeSelect.value = income.paymentMode || '';
                        if (this.dateInput) this.dateInput.value = income.date || '';
                    }
                } else if (deleteBtn) {
                    const incomeId = deleteBtn.dataset.id;
                    const eventId = deleteBtn.dataset.eventId;
                    if (confirm('Delete this income?')) {
                        await this.dataManager.deleteSubItem(eventId, 'income', incomeId);
                        const event = this.dataManager.getEventById(eventId);
                        if (event) this.fillDetailModal(event);
                    }
                }
            });
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

// Mapple Maps initialization callback
window.initMappleMaps = function() {
    console.log('Mapple Maps API loaded');
    window.mappleMapsLoaded = true;
    // Initialize autocomplete if app is ready
    if (window.app && window.app.eventVenueInput) {
        window.app.initVenueAutocomplete();
    }
};

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