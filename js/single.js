/* ============================================================
   SINGLE EVENT PAGE — event[] massividan ma'lumot olib,
   hero-banner dizaynida (countdown + key-details) render qiladi
   ============================================================ */

let path = new URLSearchParams(window.location.search);
let id = path.get("eventId");
let singlePage = document.querySelector(".single-page");

/* ------------------------------------------------------------
   1. MA'LUMOTLAR BAZASI
------------------------------------------------------------ */
const DEFAULTS = {
    badge: "Eksklyuziv Tadbir",
    duration: "2 soat 30 daqiqa",
    language: "O‘zbek",
    ageLimit: "12+",
    feeRate: 0.07,
    ticketTiers: [
        { tier: "VIP", price: 550000 },
        { tier: "Standart", price: 320000 },
        { tier: "Ekonom", price: 180000 }
    ]
};

let event = [
    {
        id: 1,
        title: "Yulduzli kecha",
        dateType: "today",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/35340079/14973729_1080_1920_60fps.mp4",
        date: "20-Jul, 19:00",
        venue: "Alisher Navoiy nomidagi teatr",
        tickets: "644 / 750",
        revenue: "76.4 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "July 20, 2026 19:00:00"
    },
    {
        id: 2,
        title: "Simfoniya Bahori",
        dateType: "tomorrow",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/7095842/7095842-uhd_2732_1440_25fps.mp4",
        date: "22-Jul, 18:30",
        venue: "Konservatoriya Katta zali",
        tickets: "510 / 600",
        revenue: "51.0 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "July 22, 2026 18:30:00"
    },
    {
        id: 3,
        title: "Jazz & Wine Night",
        dateType: "weekend",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/9418692/9418692-uhd_2732_1440_25fps.mp4",
        date: "25-Jul, 20:00",
        venue: "Tashkent City Park",
        tickets: "300 / 300",
        revenue: "45.0 mln",
        status: "SOTILDI",
        statusType: "danger",
        concertDateISO: "July 25, 2026 20:00:00"
    },
    {
        id: 4,
        title: "Otabek va Kumush",
        dateType: "today",
        category: "theaters",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/6899904/6899904-uhd_2732_1440_25fps.mp4",
        date: "28-Jul, 18:00",
        venue: "O'zbek Milliy Akademik Teatri",
        tickets: "420 / 500",
        revenue: "33.6 mln",
        status: "KUTILMOQDA",
        statusType: "warning",
        concertDateISO: "July 28, 2026 18:00:00"
    },
    {
        id: 5,
        title: "Rok Festival 2026",
        dateType: "weekend",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/30618930/13107474_2560_1440_24fps.mp4",
        date: "30-Jul, 19:00",
        venue: "Humo Arena",
        tickets: "2400 / 3000",
        revenue: "180.0 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "July 30, 2026 19:00:00"
    },
    {
        id: 6,
        title: "Sharq Taronalari",
        dateType: "tomorrow",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/7095057/7095057-uhd_1440_2732_25fps.mp4",
        date: "02-Aug, 20:30",
        venue: "Registon Maydoni",
        tickets: "850 / 1000",
        revenue: "95.2 mln",
        status: "KUTILMOQDA",
        statusType: "warning",
        concertDateISO: "August 2, 2026 20:30:00"
    },
    {
        id: 7,
        title: "Mocart va Salyeri",
        dateType: "weekend",
        category: "theaters",
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/6899953/6899953-uhd_2732_1440_25fps.mp4",
        date: "05-Aug, 17:00",
        venue: "Operasiya va Balet Teatri",
        tickets: "400 / 400",
        revenue: "40.0 mln",
        status: "SOTILDI",
        statusType: "danger",
        concertDateISO: "August 5, 2026 17:00:00"
    },
    {
        id: 8,
        title: "Pianino Kechasi",
        dateType: "today",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/35340079/14973729_1080_1920_60fps.mp4",
        date: "08-Aug, 19:00",
        venue: "Organ Zali",
        tickets: "180 / 250",
        revenue: "18.5 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "August 8, 2026 19:00:00"
    },
    {
        id: 9,
        title: "Stand-Up Show",
        dateType: "tomorrow",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/7989390/7989390-uhd_2732_1440_25fps.mp4",
        date: "10-Aug, 21:00",
        venue: "Poytaxt Saroyi",
        tickets: "600 / 600",
        revenue: "60.0 mln",
        status: "SOTILDI",
        statusType: "danger",
        concertDateISO: "August 10, 2026 21:00:00"
    },
    {
        id: 10,
        title: "Retro Disco 90-lar",
        dateType: "weekend",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/9418692/9418692-uhd_2732_1440_25fps.mp4",
        date: "12-Aug, 18:00",
        venue: "Muz Saroyi",
        tickets: "1200 / 1500",
        revenue: "96.0 mln",
        status: "KUTILMOQDA",
        statusType: "warning",
        concertDateISO: "August 12, 2026 18:00:00"
    },
    {
        id: 11,
        title: "O'zbek Hip-Hop Fest",
        dateType: "today",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/30618930/13107474_2560_1440_24fps.mp4",
        date: "15-Aug, 19:30",
        venue: "Anhor Lokomotiv",
        tickets: "780 / 1000",
        revenue: "62.4 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "August 15, 2026 19:30:00"
    },
    {
        id: 12,
        title: "Sohir Zamin Sadoalari",
        dateType: "tomorrow",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/7095842/7095842-uhd_2732_1440_25fps.mp4",
        date: "18-Aug, 19:00",
        venue: "Xalqlar Do'stligi",
        tickets: "3500 / 4000",
        revenue: "280.0 mln",
        status: "KUTILMOQDA",
        statusType: "warning",
        concertDateISO: "August 18, 2026 19:00:00"
    },
    {
        id: 13,
        title: "Sintez & Elektronika",
        dateType: "weekend",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/35340079/14973729_1080_1920_60fps.mp4",
        date: "20-Aug, 22:00",
        venue: "Ucell Arena",
        tickets: "500 / 500",
        revenue: "50.0 mln",
        status: "SOTILDI",
        statusType: "danger",
        concertDateISO: "August 20, 2026 22:00:00"
    },
    {
        id: 14,
        title: "Raqs Festivali: Bahor",
        dateType: "today",
        category: "theaters",
        image: "https://images.unsplash.com/photo-1508700915892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/6899953/6899953-uhd_2732_1440_25fps.mp4",
        date: "22-Aug, 16:00",
        venue: "Turkiston Saroyi",
        tickets: "420 / 700",
        revenue: "29.4 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "August 22, 2026 16:00:00"
    },
    {
        id: 15,
        title: "Klassik Gitarist Kechasi",
        dateType: "tomorrow",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/7095057/7095057-uhd_1440_2732_25fps.mp4",
        date: "25-Aug, 18:30",
        venue: "Konservatoriya Kichik Zali",
        tickets: "150 / 200",
        revenue: "12.0 mln",
        status: "KUTILMOQDA",
        statusType: "warning",
        concertDateISO: "August 25, 2026 18:30:00"
    },
    {
        id: 16,
        title: "Balkon Konserti: Akustika",
        dateType: "weekend",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/9418692/9418692-uhd_2732_1440_25fps.mp4",
        date: "27-Aug, 19:00",
        venue: "Art House Tashkent",
        tickets: "80 / 80",
        revenue: "16.0 mln",
        status: "SOTILDI",
        statusType: "danger",
        concertDateISO: "August 27, 2026 19:00:00"
    },
    {
        id: 17,
        title: "Opera va Simfoniya",
        dateType: "today",
        category: "theaters",
        image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/6899904/6899904-uhd_2732_1440_25fps.mp4",
        date: "29-Aug, 18:00",
        venue: "Alisher Navoiy nomidagi teatr",
        tickets: "600 / 750",
        revenue: "72.0 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "August 29, 2026 18:00:00"
    },
    {
        id: 18,
        title: "Lirik Poeziya Kechasi",
        dateType: "tomorrow",
        category: "theaters",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/7989390/7989390-uhd_2732_1440_25fps.mp4",
        date: "01-Sep, 17:30",
        venue: "Yoshlar Teatri",
        tickets: "220 / 300",
        revenue: "15.4 mln",
        status: "KUTILMOQDA",
        statusType: "warning",
        concertDateISO: "September 1, 2026 17:30:00"
    },
    {
        id: 19,
        title: "Mustaqillik Konserti",
        dateType: "weekend",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/30618930/13107474_2560_1440_24fps.mp4",
        date: "03-Sep, 20:00",
        venue: "Mustaqillik Maydoni",
        tickets: "5000 / 5000",
        revenue: "0.0 mln",
        status: "SOTILDI",
        statusType: "danger",
        concertDateISO: "September 3, 2026 20:00:00"
    },
    {
        id: 20,
        title: "Etnik Etudlar",
        dateType: "today",
        category: "concerts",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop",
        video: "https://videos.pexels.com/video-files/35340079/14973729_1080_1920_60fps.mp4",
        date: "05-Sep, 19:00",
        venue: "Muzey Binosi",
        tickets: "110 / 150",
        revenue: "11.0 mln",
        status: "JONLI",
        statusType: "success",
        concertDateISO: "September 5, 2026 19:00:00"
    }
];

let singleData = event.find((el) => el.id == id);

/* ------------------------------------------------------------
   2. HTML GENERATSIYA — hero-banner (Chiroyli Taymer bilan)
------------------------------------------------------------ */
function renderHeroBanner(d) {
    const badge = d.badge || DEFAULTS.badge;

    return `
    <section>
        <div class="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[520px] flex flex-col justify-between p-6 md:p-12 shadow-2xl border border-amber-500/20"
            style="background-image: linear-gradient(180deg, rgba(10,10,12,0.4) 0%, rgba(10,10,12,0.95) 100%), url('${d.image}');">

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end z-10 my-auto pt-8">
                <div class="lg:col-span-2 space-y-6">
                    <div class="flex items-center space-x-3">
                        <span class="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-300 text-xs font-semibold tracking-wider uppercase border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-500/10">
                            ★ ${badge}
                        </span>
                    </div>

                    <h1 class="text-4xl md:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400 tracking-tight leading-tight drop-shadow-md">
                        ${d.title}
                    </h1>

                    <div class="flex flex-wrap gap-6 text-xs md:text-sm text-gray-300 pt-2 font-medium">
                        <div class="flex items-center space-x-2.5 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
                            <i class="fa-regular fa-calendar text-amber-400 text-base"></i>
                            <span>${d.date}</span>
                        </div>
                        <div class="flex items-center space-x-2.5 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
                            <i class="fa-solid fa-location-dot text-amber-400 text-base"></i>
                            <span>${d.venue}</span>
                        </div>
                    </div>
                </div>

                <!-- CHIROYLI NEON TAYMER BLOKI -->
                <div class="bg-black/60 backdrop-blur-xl p-6 rounded-3xl border border-amber-500/30 text-center lg:justify-self-end w-full lg:w-auto shadow-2xl shadow-amber-500/5">
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span class="text-[11px] font-bold tracking-widest text-amber-400 uppercase">
                            Boshlanishiga qoldi
                        </span>
                    </div>
                    
                    <div class="grid grid-cols-4 gap-2 md:gap-3">
                        <div class="flex flex-col items-center bg-zinc-900/90 border border-amber-500/20 px-3 py-2.5 rounded-2xl">
                            <span id="timer-days" class="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">25</span>
                            <span class="text-[9px] font-bold text-amber-500/80 uppercase mt-1">Kun</span>
                        </div>
                        <div class="flex flex-col items-center bg-zinc-900/90 border border-amber-500/20 px-3 py-2.5 rounded-2xl">
                            <span id="timer-hours" class="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">00</span>
                            <span class="text-[9px] font-bold text-amber-500/80 uppercase mt-1">Soat</span>
                        </div>
                        <div class="flex flex-col items-center bg-zinc-900/90 border border-amber-500/20 px-3 py-2.5 rounded-2xl">
                            <span id="timer-minutes" class="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">00</span>
                            <span class="text-[9px] font-bold text-amber-500/80 uppercase mt-1">Daqiqa</span>
                        </div>
                        <div class="flex flex-col items-center bg-zinc-900/90 border border-amber-500/20 px-3 py-2.5 rounded-2xl">
                            <span id="timer-seconds" class="text-2xl md:text-3xl font-extrabold text-amber-400 font-mono tracking-tight animate-pulse drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">00</span>
                            <span class="text-[9px] font-bold text-amber-500/80 uppercase mt-1">Soniya</span>
                        </div>
                    </div>

                    <a href="#seat-section" onclick="document.getElementById('seat-section').scrollIntoView({behavior:'smooth'}); return false;"
                        class="mt-6 w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_auto] hover:bg-right text-black font-extrabold tracking-wide text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t-1 41.5L706-492q-14 24-37.5 38T616-440H310l-40 72q-6 11-1 24.5t18 13.5h473v80H280q-50 0-77-41t-5-83l48-87-142-300H40v-80h114l54 113Z"/>
                        </svg>
                        <span>Chipta sotib olish</span>
                    </a>
                </div>
            </div>
        </div>
    </section>`;
}

function renderKeyDetails(d) {
    const items = [
        {
            label: "Vaqt",
            value: d.date.split(",").pop().trim(),
            icon: `<path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>`
        },
        {
            label: "Davomiyligi",
            value: d.duration || DEFAULTS.duration,
            icon: `<path d="M360-840v-80h240v80H360Zm120 440h80v-240h-80v240Zm0 320q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>`
        },
        {
            label: "Til",
            value: d.language || DEFAULTS.language,
            icon: `<path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/>`
        },
        {
            label: "Yosh cheklovi",
            value: d.ageLimit || DEFAULTS.ageLimit,
            icon: `<path d="M600-120v-120H440v-400h-80v120H80v-320h280v120h240v-120h280v320H600v-120h-80v320h80v-120h280v320H600ZM160-760v160h120v-160H160Zm520 0v160h120v-160H680Zm0 400v160h120v-160H680Z"/>`
        }
    ];

    const cardsHtml = items.map(item => `
        <div class="flex flex-col items-center text-center p-2 pt-4 md:pt-2">
            <div class="p-3 bg-amber-500/10 rounded-xl mb-3 border border-amber-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#F59E0B">
                    ${item.icon}
                </svg>
            </div>
            <span class="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-1">${item.label}</span>
            <span class="text-lg md:text-xl font-bold text-white">${item.value}</span>
        </div>`).join("");

    return `
    <section>
        <div class="w-full bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
                ${cardsHtml}
            </div>
        </div>
    </section>`;
}

/* ------------------------------------------------------------
   2b. JOY TANLASH + TO'LOV + CHIPTA (QR) BOSQICHLARI
------------------------------------------------------------ */
function renderSeatSection(d) {
    return `
    <section id="seat-section">
        <div class="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h2 class="text-2xl md:text-3xl font-serif font-bold text-white">Joy tanlang</h2>
            <div class="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-wider font-medium">
                <span id="seatstep-indicator-1" class="text-amber-400 flex items-center gap-1"><span class="w-5 h-5 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center text-[10px]">1</span> Joylar</span>
                <span class="text-zinc-600">&rarr;</span>
                <span id="seatstep-indicator-2" class="text-zinc-500 flex items-center gap-1"><span class="w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 font-bold flex items-center justify-center text-[10px]">2</span> To'lov</span>
                <span class="text-zinc-600">&rarr;</span>
                <span id="seatstep-indicator-3" class="text-zinc-500 flex items-center gap-1"><span class="w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 font-bold flex items-center justify-center text-[10px]">3</span> Chipta</span>
            </div>
        </div>

        <!-- BOSQICH 1: ZAL SXEMASI + TANLANGAN JOYLAR -->
        <div id="seat-step-1" class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div class="lg:col-span-2 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
                <div class="text-center pb-4">
                    <div class="relative w-48 mx-auto mb-2">
                        <div class="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                    </div>
                    <h3 class="font-serif tracking-[0.35em] text-amber-400 text-sm font-semibold uppercase">SAHNA</h3>
                </div>

                <div class="overflow-auto py-2">
                    <div id="seatMap" class="transition-transform duration-200 origin-top flex flex-col items-center gap-6 min-w-max mx-auto">
                        <div class="flex flex-col items-center gap-2">
                            <span class="text-[10px] uppercase tracking-[0.2em] text-gray-500">BALKON</span>
                            <div id="balkonRows" class="flex gap-2 justify-center"></div>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                            <span class="text-[10px] uppercase tracking-[0.2em] text-gray-500">PARTER</span>
                            <div id="parterRows" class="flex flex-col gap-2 items-center"></div>
                        </div>
                    </div>
                </div>

                <div class="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
                    <div class="flex flex-wrap items-center gap-3">
                        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm bg-gradient-to-br from-amber-400 to-amber-600 block"></span><span>VIP 450k</span></div>
                        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm bg-[#8a7238] block"></span><span>Premium 320k</span></div>
                        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm border border-gray-500 block"></span><span>Standart 180k</span></div>
                        <div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm bg-zinc-800 border border-zinc-700 block"></span><span class="text-gray-500">Sotilgan</span></div>
                    </div>
                    <div class="flex items-center gap-2 ml-auto">
                        <button id="seatResetBtn" class="hover:text-amber-400 font-medium text-xs tracking-wider uppercase">Qayta tiklash</button>
                        <div class="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden p-0.5">
                            <button id="seatZoomIn" class="px-2.5 py-0.5 hover:bg-zinc-800 hover:text-amber-400 font-bold border-r border-zinc-800">+</button>
                            <button id="seatZoomOut" class="px-2.5 py-0.5 hover:bg-zinc-800 hover:text-amber-400 font-bold">&minus;</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between lg:sticky lg:top-6">
                <div>
                    <h3 class="font-serif text-xl text-amber-200 tracking-wide mb-4 pb-3 border-b border-white/10">Tanlangan joylar</h3>
                    <div id="selectedSeatsList" class="flex flex-col gap-2.5 max-h-[280px] overflow-y-auto pr-1 text-xs"></div>
                </div>
                <div class="pt-4 border-t border-white/10 flex flex-col gap-4 mt-4">
                    <div class="flex items-end justify-between">
                        <div>
                            <span class="text-[11px] text-gray-400 block uppercase tracking-wider">Umumiy narx</span>
                            <span class="text-[9px] text-gray-600 font-mono uppercase">O'ZBEK SO'MI</span>
                        </div>
                        <span id="seatTotalPrice" class="font-serif text-2xl font-semibold text-amber-400">0</span>
                    </div>
                    <button id="finalizeBtn" disabled class="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition-all shadow-lg shadow-amber-500/10">
                        Rasmiylashtirish
                    </button>
                </div>
            </div>
        </div>

        <!-- BOSQICH 2: TO'LOV -->
        <div id="seat-step-2" class="hidden max-w-xl mx-auto bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center">
            <div class="w-full text-center mb-5">
                <h3 class="font-serif text-2xl text-amber-400 tracking-wider uppercase mb-1">TO'LOV</h3>
                <p class="text-xs text-gray-400">${d.title} &middot; ${d.venue}</p>
            </div>

            <div class="w-full bg-zinc-900 p-1 rounded-2xl border border-zinc-800 flex mb-5 text-xs font-semibold">
                <button type="button" onclick="switchPayMethod('karta')" id="tab-karta" class="pay-tab flex-1 py-2 rounded-xl transition-all">Karta</button>
                <button type="button" onclick="switchPayMethod('payme')" id="tab-payme" class="pay-tab flex-1 py-2 rounded-xl text-zinc-400 hover:text-white transition-all">Payme</button>
                <button type="button" onclick="switchPayMethod('click')" id="tab-click" class="pay-tab flex-1 py-2 rounded-xl text-zinc-400 hover:text-white transition-all">Click</button>
                <button type="button" onclick="switchPayMethod('muddatli')" id="tab-muddatli" class="pay-tab flex-1 py-2 rounded-xl text-zinc-400 hover:text-white transition-all">Muddatli</button>
            </div>

            <form id="paymentForm" class="w-full space-y-3.5 text-xs">
                <div id="payContent"></div>
                <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                    <button type="button" id="seatBackBtn" class="py-3 px-6 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white transition-all">Orqaga</button>
                    <button type="submit" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold uppercase tracking-wider hover:brightness-110 transition-all">
                        To'lash (<span id="payAmount">0</span> SO'M)
                    </button>
                </div>
            </form>
        </div>

        <!-- BOSQICH 3: CHIPTA TAYYOR (QR) -->
        <div id="seat-step-3" class="hidden max-w-lg mx-auto bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-black font-bold text-xl mb-3 shadow-lg shadow-amber-500/20">&#10003;</div>
            <h3 class="font-serif text-2xl text-amber-100 tracking-wide mb-1">Chiptangiz tayyor!</h3>
            <p class="text-xs text-gray-400 mb-5">QR kod "Chiptalarim" bo'limiga ham qo'shildi.</p>

            <div class="w-full bg-black/40 border border-white/10 rounded-2xl p-5 mb-5 text-left relative">
                <div class="text-center pb-3 border-b border-white/10 mb-4">
                    <h4 id="ticketEventTitle" class="font-serif text-lg text-amber-400 font-semibold">${d.title}</h4>
                    <p id="ticketEventDetails" class="text-[11px] text-gray-400 mt-1">${d.date} &middot; ${d.venue}</p>
                </div>

                <div class="flex flex-col items-center justify-center gap-3">
                    <div class="bg-white p-2 rounded-xl w-40 h-40 flex items-center justify-center shadow-lg">
                        <img id="ticketQrImg" src="" alt="QR" class="w-full h-full">
                    </div>
                    <div class="bg-black/40 p-3 rounded-xl border border-white/10 w-full">
                        <span class="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">Xarid qilingan joylar:</span>
                        <div id="finalSeatsSummary" class="text-xs text-gray-200 font-medium space-y-1"></div>
                    </div>
                    <span id="ticketCode" class="text-[11px] font-mono text-amber-400 tracking-widest">#SHN-00000</span>
                </div>
            </div>

            <div class="w-full space-y-2">
                <a href="./profile.html" class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all block text-center">
                    Chiptalarimga o'tish
                </a>
                <button id="seatAgainBtn" class="w-full py-3 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-xs uppercase tracking-wider transition-all">
                    Yana joy tanlash
                </button>
            </div>
        </div>
    </section>`;
}

/* ------------------------------------------------------------
   3. SAHIFANI RENDERING QILISH
------------------------------------------------------------ */
if (!singleData) {
    singlePage.innerHTML = `
    <div class="max-w-md mx-auto mt-20 text-center p-8 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] shadow-2xl">
      <h2 class="text-2xl font-bold text-white mb-4">Tadbir topilmadi 😢</h2>
      <a href="../index.html" class="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300">
        Bosh sahifaga qaytish
      </a>
    </div>`;
} else {
    singlePage.innerHTML = `
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 md:space-y-16 text-gray-100 font-sans">
            ${renderHeroBanner(singleData)}
            ${renderKeyDetails(singleData)}
            ${renderSeatSection(singleData)}
        </main>
    `;

    // Sanoq taymerini ishga tushirish
    initCountdownTimer(singleData);
    initSeatBooking(singleData);
}

/* ------------------------------------------------------------
   4. TAYMER: O'TIB KETGAN BO'LSA 18:00:00 DAN ORQAGA SANAYDI
------------------------------------------------------------ */
function initCountdownTimer(data) {
    const daysEl = document.getElementById('timer-days');
    const hoursEl = document.getElementById('timer-hours');
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    // Tadbir vaqtini aniqlash
    let targetTime = data.concertDateISO ? new Date(data.concertDateISO).getTime() : NaN;
    const now = new Date().getTime();

    // Agar sana o'tib ketgan bo'lsa yoki yaroqsiz bo'lsa, bugungi kungi ko'rsatilgan vaqtni (masalan 18:00:00) target qilamiz
    if (isNaN(targetTime) || targetTime <= now) {
        const today = new Date();
        let eventHours = 19;
        let eventMinutes = 0;

        // data.date dan vaqtni ajratib olish (masalan "18:00" yoki "19:30")
        if (data.date && data.date.includes(',')) {
            const timeStr = data.date.split(',')[1].trim();
            const [h, m] = timeStr.split(':');
            if (h) eventHours = parseInt(h, 10);
            if (m) eventMinutes = parseInt(m, 10);
        }

        today.setHours(eventHours, eventMinutes, 0, 0);
        
        // Agar o'sha vaqt ham bugun o'tib ketgan bo'lsa, ertangi kungi o'sha vaqtga o'tkazadi
        if (today.getTime() <= now) {
            today.setDate(today.getDate() + 1);
        }
        targetTime = today.getTime();
    }

    function updateTimer() {
        const currentTime = new Date().getTime();
        let diff = targetTime - currentTime;

        if (diff <= 0) {
            // Taymer tugasa avtomatik yana keyingi kungi taymerga o'tadi
            targetTime += 24 * 60 * 60 * 1000;
            diff = targetTime - currentTime;
        }

        const days = Math.floor(diff / (40 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

/* ------------------------------------------------------------
   5. JOY TANLASH + TO'LOV + CHIPTA (QR) LOGIKASI
------------------------------------------------------------ */
function initSeatBooking(d) {
    const SEAT_TYPES = {
        VIP: { price: 450000, class: 'bg-gradient-to-br from-amber-400 to-amber-600 border-transparent' },
        PREMIUM: { price: 320000, class: 'bg-[#8a7238] border-transparent' },
        STANDART: { price: 180000, class: 'border border-gray-500 bg-transparent' },
        SOLD: { price: 0, class: 'bg-zinc-800 border border-zinc-700 cursor-not-allowed opacity-40' }
    };

    const balkonData = Array.from({ length: 8 }, (_, i) => ({
        id: `balkon-1-${i + 1}`, section: 'BALKON', row: 1, seat: i + 1, type: 'STANDART', price: 180000
    }));

    const parterRowsConfig = [
        { row: 1, seats: 12, type: 'VIP', price: 450000 },
        { row: 2, seats: 14, type: 'VIP', price: 450000 },
        { row: 3, seats: 14, type: 'PREMIUM', price: 320000 },
        { row: 4, seats: 16, type: 'PREMIUM', price: 280000 },
        { row: 5, seats: 17, type: 'STANDART', price: 180000 },
    ];
    const soldSeatIds = ['parter-3-1', 'parter-3-2', 'parter-5-10'];

    let selectedSeats = [];
    let currentZoom = 1;
    let currentPayMethod = 'karta';

    const balkonContainer = document.getElementById('balkonRows');
    const parterContainer = document.getElementById('parterRows');
    const selectedListContainer = document.getElementById('selectedSeatsList');
    const totalPriceEl = document.getElementById('seatTotalPrice');
    const finalizeBtn = document.getElementById('finalizeBtn');

    if (!balkonContainer || !parterContainer) return;

    function formatPrice(num) {
        return num.toLocaleString('ru-RU');
    }

    function createSeatElement(seat) {
        const btn = document.createElement('button');
        const isSelected = selectedSeats.some(s => s.id === seat.id);
        const isSold = seat.type === 'SOLD';

        btn.className = `w-5 h-5 md:w-6 md:h-6 rounded-[3px] flex items-center justify-center transition-all duration-150 text-[10px] font-bold ${
            isSold ? SEAT_TYPES.SOLD.class :
            isSelected ? 'bg-gradient-to-br from-amber-400 to-amber-600 border-amber-300 text-black ring-2 ring-amber-400 scale-105' :
            SEAT_TYPES[seat.type].class + ' hover:scale-110'
        }`;

        if (isSelected) btn.innerHTML = '&#10003;';
        if (!isSold) btn.onclick = () => toggleSeatSelection(seat);
        else btn.disabled = true;

        return btn;
    }

    function renderMap() {
        balkonContainer.innerHTML = '';
        balkonData.forEach(seat => balkonContainer.appendChild(createSeatElement(seat)));

        parterContainer.innerHTML = '';
        parterRowsConfig.forEach(rowConfig => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'flex gap-1.5 justify-center';
            for (let i = 1; i <= rowConfig.seats; i++) {
                const seatId = `parter-${rowConfig.row}-${i}`;
                const isSold = soldSeatIds.includes(seatId);
                rowDiv.appendChild(createSeatElement({
                    id: seatId, section: 'PARTER', row: rowConfig.row, seat: i,
                    type: isSold ? 'SOLD' : rowConfig.type, price: rowConfig.price
                }));
            }
            parterContainer.appendChild(rowDiv);
        });
    }

    function toggleSeatSelection(seat) {
        const index = selectedSeats.findIndex(s => s.id === seat.id);
        if (index > -1) selectedSeats.splice(index, 1);
        else selectedSeats.push(seat);
        updateUI();
    }

    function removeSeat(seatId) {
        selectedSeats = selectedSeats.filter(s => s.id !== seatId);
        updateUI();
    }
    window.removeSeat = removeSeat;

    function updateUI() {
        renderMap();
        selectedListContainer.innerHTML = '';

        if (selectedSeats.length === 0) {
            selectedListContainer.innerHTML = `<div class="text-center py-8 text-gray-600 text-xs">Hali hech qanday joy tanlanmadi</div>`;
        } else {
            selectedSeats.forEach(seat => {
                const card = document.createElement('div');
                card.className = 'bg-black/40 border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs';
                card.innerHTML = `
                    <div>
                        <div class="text-[9px] text-gray-400 uppercase font-semibold">${seat.section} &bull; QATOR ${seat.row}</div>
                        <div class="text-gray-100 font-bold">O'rindiq ${seat.seat}</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold text-gray-300">${formatPrice(seat.price)}</span>
                        <button onclick="removeSeat('${seat.id}')" class="text-rose-500 hover:text-rose-400 font-bold text-base">&times;</button>
                    </div>
                `;
                selectedListContainer.appendChild(card);
            });
        }

        const total = selectedSeats.reduce((sum, item) => sum + item.price, 0);
        totalPriceEl.innerText = formatPrice(total);
        finalizeBtn.disabled = selectedSeats.length === 0;
    }

    function goToSeatStep(step) {
        document.getElementById('seat-step-1').classList.toggle('hidden', step !== 1);
        document.getElementById('seat-step-2').classList.toggle('hidden', step !== 2);
        document.getElementById('seat-step-3').classList.toggle('hidden', step !== 3);

        [1, 2, 3].forEach(s => {
            const ind = document.getElementById(`seatstep-indicator-${s}`);
            if (!ind) return;
            if (s === step) {
                ind.className = 'text-amber-400 flex items-center gap-1';
                ind.children[0].className = 'w-5 h-5 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center text-[10px]';
            } else if (s < step) {
                ind.className = 'text-emerald-400 flex items-center gap-1';
                ind.children[0].className = 'w-5 h-5 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center text-[10px]';
            } else {
                ind.className = 'text-zinc-500 flex items-center gap-1';
                ind.children[0].className = 'w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 font-bold flex items-center justify-center text-[10px]';
            }
        });

        document.getElementById('seat-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function switchPayMethod(method) {
        currentPayMethod = method;
        ['karta', 'payme', 'click', 'muddatli'].forEach(m => {
            const tabBtn = document.getElementById(`tab-${m}`);
            if (!tabBtn) return;
            tabBtn.className = m === method
                ? 'pay-tab flex-1 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black transition-all font-bold'
                : 'pay-tab flex-1 py-2 rounded-xl text-zinc-400 hover:text-white transition-all';
        });

        const payContentDiv = document.getElementById('payContent');
        if (!payContentDiv) return;

        if (method === 'karta') {
            payContentDiv.innerHTML = `
                <div>
                    <label class="block text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Karta raqami</label>
                    <input type="text" maxlength="19" placeholder="8600 0000 0000 0000" required class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 outline-none focus:border-amber-400 transition-all font-mono tracking-wider">
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Amal qilish muddati</label>
                        <input type="text" placeholder="MM/YY" maxlength="5" required class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 outline-none focus:border-amber-400 transition-all font-mono text-center">
                    </div>
                    <div>
                        <label class="block text-[10px] text-zinc-400 uppercase tracking-wider mb-1">CVV / CVC</label>
                        <input type="password" maxlength="3" placeholder="&bull;&bull;&bull;" required class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 outline-none focus:border-amber-400 transition-all font-mono text-center">
                    </div>
                </div>
                <div>
                    <label class="block text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Karta egasi</label>
                    <input type="text" placeholder="ISM SHARIF" required class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 outline-none focus:border-amber-400 transition-all uppercase">
                </div>
            `;
        } else if (method === 'payme') {
            payContentDiv.innerHTML = `
                <div class="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-center">
                    <div class="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-bold mb-2">PAYME QUICK PAY</div>
                    <p class="text-zinc-400 text-xs mb-4">Payme ilovasi orqali to'lovni tasdiqlash uchun telefon raqamingizni kiriting:</p>
                    <input type="tel" placeholder="+998 (90) 123-45-67" required class="w-full max-w-xs mx-auto block bg-black/40 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 outline-none focus:border-cyan-400 font-mono text-center">
                </div>
            `;
        } else if (method === 'click') {
            payContentDiv.innerHTML = `
                <div class="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-center">
                    <div class="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold mb-2">CLICK PASS</div>
                    <p class="text-zinc-400 text-xs mb-4">Click ilovasiga ulangan telefon raqam yoki Click ID kiriting:</p>
                    <input type="text" placeholder="Raqam yoki Click ID" required class="w-full max-w-xs mx-auto block bg-black/40 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 outline-none focus:border-blue-400 font-mono text-center">
                </div>
            `;
        } else if (method === 'muddatli') {
            const total = selectedSeats.reduce((sum, item) => sum + item.price, 0);
            const m3 = Math.round(total / 3).toLocaleString('ru-RU');
            const m6 = Math.round(total / 6).toLocaleString('ru-RU');

            payContentDiv.innerHTML = `
                <div class="space-y-3">
                    <p class="text-zinc-400 text-xs text-center">Bo'lib to'lash muddatini tanlang (0% ustama):</p>
                    <div class="grid grid-cols-2 gap-3">
                        <label class="border border-zinc-800 bg-zinc-900 p-3 rounded-xl flex flex-col items-center cursor-pointer hover:border-amber-400">
                            <input type="radio" name="muddat" value="3" checked class="accent-amber-400 mb-1">
                            <span class="text-xs text-zinc-300 font-bold">3 oyga</span>
                            <span class="text-[11px] text-amber-400 font-mono mt-1">${m3} so'm/oy</span>
                        </label>
                        <label class="border border-zinc-800 bg-zinc-900 p-3 rounded-xl flex flex-col items-center cursor-pointer hover:border-amber-400">
                            <input type="radio" name="muddat" value="6" class="accent-amber-400 mb-1">
                            <span class="text-xs text-zinc-300 font-bold">6 oyga</span>
                            <span class="text-[11px] text-amber-400 font-mono mt-1">${m6} so'm/oy</span>
                        </label>
                    </div>
                    <div>
                        <label class="block text-[10px] text-zinc-400 uppercase tracking-wider mb-1">Passport / JSHSHIR raqami</label>
                        <input type="text" placeholder="AA 1234567" required class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-200 outline-none focus:border-amber-400 uppercase">
                    </div>
                </div>
            `;
        }
    }
    window.switchPayMethod = switchPayMethod;

    function generateTicketCode() {
        return `SHN-${d.id}-${Date.now().toString(36).toUpperCase()}${Math.floor(Math.random() * 90 + 10)}`;
    }

    function saveTicket(code) {
        const tickets = JSON.parse(localStorage.getItem('sahna_tickets')) || [];
        const total = selectedSeats.reduce((sum, item) => sum + item.price, 0);
        tickets.push({
            code,
            eventId: d.id,
            title: d.title,
            image: d.image,
            date: d.date,
            venue: d.venue,
            category: d.category,
            seats: selectedSeats.map(s => ({ section: s.section, row: s.row, seat: s.seat, price: s.price })),
            totalPrice: total,
            purchasedAt: new Date().toISOString()
        });
        localStorage.setItem('sahna_tickets', JSON.stringify(tickets));
    }

    // Tugmalar
    document.getElementById('seatResetBtn').addEventListener('click', () => { selectedSeats = []; updateUI(); });
    document.getElementById('seatZoomIn').addEventListener('click', () => { if (currentZoom < 1.3) document.getElementById('seatMap').style.transform = `scale(${currentZoom += 0.1})`; });
    document.getElementById('seatZoomOut').addEventListener('click', () => { if (currentZoom > 0.7) document.getElementById('seatMap').style.transform = `scale(${currentZoom -= 0.1})`; });

    finalizeBtn.addEventListener('click', () => {
        if (selectedSeats.length === 0) return;
        const total = selectedSeats.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('payAmount').innerText = formatPrice(total);
        switchPayMethod(currentPayMethod);
        goToSeatStep(2);
    });

    document.getElementById('seatBackBtn').addEventListener('click', () => goToSeatStep(1));

    document.getElementById('paymentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const code = generateTicketCode();
        saveTicket(code);

        const summaryContainer = document.getElementById('finalSeatsSummary');
        summaryContainer.innerHTML = '';
        selectedSeats.forEach(s => {
            summaryContainer.innerHTML += `<div>&bull; ${s.section}, Qator ${s.row}, O'rindiq ${s.seat} (${formatPrice(s.price)} so'm)</div>`;
        });

        document.getElementById('ticketCode').innerText = '#' + code;
        document.getElementById('ticketQrImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(code)}`;

        goToSeatStep(3);
    });

    document.getElementById('seatAgainBtn').addEventListener('click', () => {
        selectedSeats = [];
        updateUI();
        goToSeatStep(1);
    });

    // Boshlang'ich holat
    updateUI();
}