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

                    <a href="./joy.html?eventId=${d.id}"
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
        </main>
    `;

    // Sanoq taymerini ishga tushirish
    initCountdownTimer(singleData);
    initTicketLogic(singleData.ticketTiers || DEFAULTS.ticketTiers, DEFAULTS.feeRate);
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
   5. CHIPTA HISOB-KITOB LOGIKASI
------------------------------------------------------------ */
function initTicketLogic(ticketTiers, feeRate) {
    let selectedTier = ticketTiers[0]?.tier ?? "";
    let unitPrice = ticketTiers[0]?.price ?? 0;
    let ticketQuantity = 1;

    const tierCards = document.querySelectorAll('.ticket-tier');
    const countEl = document.getElementById('ticket-count');
    const btnDecrease = document.getElementById('btn-decrease');
    const btnIncrease = document.getElementById('btn-increase');

    const summaryTierText = document.getElementById('summary-tier-text');
    const summaryBasePrice = document.getElementById('summary-base-price');
    const summaryFee = document.getElementById('summary-fee');
    const summaryTotal = document.getElementById('summary-total');

    if (!countEl || !summaryTotal) return;

    function formatPrice(num) {
        return num.toLocaleString('uz-UZ').replace(/,/g, ' ');
    }

    function recalculateTotals() {
        const baseTotal = unitPrice * ticketQuantity;
        const feeTotal = Math.round(baseTotal * feeRate);
        const grandTotal = baseTotal + feeTotal;

        if (summaryTierText) summaryTierText.innerText = `Chipta (${ticketQuantity}x ${selectedTier})`;
        if (summaryBasePrice) summaryBasePrice.innerText = `${formatPrice(baseTotal)} so'm`;
        if (summaryFee) summaryFee.innerText = `${formatPrice(feeTotal)} so'm`;
        summaryTotal.innerText = formatPrice(grandTotal);
        countEl.innerText = ticketQuantity;
    }

    tierCards.forEach(card => {
        card.addEventListener('click', () => {
            tierCards.forEach(c => {
                c.classList.remove('border-amber-500/50', 'bg-amber-500/10');
                c.classList.add('border-white/5', 'bg-white/5');
                const p = c.querySelector('p');
                if (p && p.classList.contains('text-amber-400')) {
                    p.classList.remove('text-amber-400');
                    p.classList.add('text-white');
                }
            });

            card.classList.remove('border-white/5', 'bg-white/5');
            card.classList.add('border-amber-500/50', 'bg-amber-500/10');
            const titleP = card.querySelector('p');
            if (titleP) {
                titleP.classList.remove('text-white');
                titleP.classList.add('text-amber-400');
            }

            selectedTier = card.getAttribute('data-tier');
            unitPrice = parseInt(card.getAttribute('data-price'), 10);
            recalculateTotals();
        });
    });

    btnIncrease?.addEventListener('click', () => {
        if (ticketQuantity < 10) {
            ticketQuantity++;
            recalculateTotals();
        }
    });

    btnDecrease?.addEventListener('click', () => {
        if (ticketQuantity > 1) {
            ticketQuantity--;
            recalculateTotals();
        }
    });

    recalculateTotals();
}