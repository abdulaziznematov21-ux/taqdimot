const microphone = document.querySelector(".micro");
const searchInput = document.querySelector(".search-input");
const searchCards = document.querySelector(".search-cards");
const body = document.body;

// Mahsulotlar o'rniga tadbirlar massivi joylandi
const events = [
  {
    title: "Yulduzli kecha",
    image: "../images/card23.png",
    date: "20-Jul, 19:00",
    venue: "Alisher Navoiy nomidagi teatr",
    tickets: "644 / 750",
    revenue: "76.4 mln",
    status: "Jonli",
    statusType: "success" // emerald
  },
  {
    title: "Simfoniya Bahori",
    image: "../images/card24.png",
    date: "22-Jul, 18:30",
    venue: "Konservatoriya Katta zali",
    tickets: "510 / 600",
    revenue: "51.0 mln",
    status: "Jonli",
    statusType: "success"
  },
  {
    title: "Jazz & Wine Night",
    image: "../images/card25.png",
    date: "25-Jul, 20:00",
    venue: "Tashkent City Park",
    tickets: "300 / 300",
    revenue: "45.0 mln",
    status: "Sotildi",
    statusType: "danger" // rose
  },
  {
    title: "Otabek va Kumush (Drama)",
    image: "../images/card26.png",
    date: "28-Jul, 18:00",
    venue: "O'zbek Milliy Akademik Teatri",
    tickets: "420 / 500",
    revenue: "33.6 mln",
    status: "Kutilmoqda",
    statusType: "warning" // amber
  },
  {
    title: "Retro Cinema Premier",
    image: "../images/card27.png",
    date: "01-Aug, 21:00",
    venue: "Panorama Kinoteatri",
    tickets: "180 / 400",
    revenue: "14.4 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    title: "Klassik Organ Musiqasi",
    image: "../images/card28.png",
    date: "03-Aug, 19:00",
    venue: "Organ Zali",
    tickets: "120 / 250",
    revenue: "9.6 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    title: "Rok Fest Tashkent",
    image: "../images/card29.png",
    date: "08-Aug, 17:00",
    venue: "Humo Arena",
    tickets: "3200 / 5000",
    revenue: "480.0 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    title: "Zamonaviy Raqs Shousi",
    image: "../images/card30.png",
    date: "12-Aug, 19:30",
    venue: "Turkiston San'at Saroyi",
    tickets: "750 / 800",
    revenue: "90.0 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    title: "Sharq Taronalari Saralash",
    image: "../images/card31.png",
    date: "15-Aug, 18:00",
    venue: "Xalqlar Do'stligi Saroyi",
    tickets: "1800 / 2000",
    revenue: "216.0 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    title: "Bolalar uchun Operetta",
    image: "../images/card32.png",
    date: "20-Aug, 11:00",
    venue: "Qo'g'irchoq Teatri",
    tickets: "150 / 200",
    revenue: "7.5 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  }
];

// Status uchun rang belgilash
function getStatusBadge(type, text) {
  if (type === "success") {
    return `<span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">${text}</span>`;
  } else if (type === "danger") {
    return `<span class="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-semibold border border-rose-500/20">${text}</span>`;
  } else {
    return `<span class="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-semibold border border-amber-500/20">${text}</span>`;
  }
}

// Natijalarni ekranga chiqarish funksiyasi
function renderEvents(query) {
  const trimmedQuery = query.trim().toLowerCase();

  if (!trimmedQuery) {
    searchCards.classList.add("hidden");
    searchCards.innerHTML = "";
    return;
  }

  // Nomi (title) yoki o'tkaziladigan joyi (venue) bo'yicha saralash
  const filtered = events.filter(el =>
    el.title.toLowerCase().includes(trimmedQuery) ||
    el.venue.toLowerCase().includes(trimmedQuery)
  );

  if (filtered.length === 0) {
    searchCards.innerHTML = `
      <div class="p-4 text-center text-zinc-500 text-sm">
        Hech qanday tadbir topilmadi...
      </div>`;
    searchCards.classList.remove("hidden");
    return;
  }

  // Natijalarni ro'yxat ko'rinishida chiqarish
  searchCards.innerHTML = filtered.map(item => `
    <div class="flex items-center justify-between p-3 hover:bg-zinc-800/60 rounded-xl transition cursor-pointer group border-b border-zinc-800/40 last:border-0" onclick="alert('${item.title} tanlandi!')">
      <div class="flex items-center space-x-3 min-w-0">
        <img src="${item.image}" onerror="this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100'" class="w-10 h-10 rounded-lg object-cover shrink-0 border border-zinc-700/50" alt="${item.title}">
        <div class="min-w-0">
          <h4 class="text-white font-semibold text-sm truncate group-hover:text-amber-400 transition-colors">${item.title}</h4>
          <p class="text-zinc-400 text-xs truncate">${item.venue} • <span class="text-zinc-300">${item.date}</span></p>
        </div>
      </div>
      <a href="./pages/joy.html" class="flex items-center space-x-3 shrink-0 ml-2">
        <span class="text-amber-400 font-bold text-xs hidden sm:inline">${item.revenue}</span>
        ${getStatusBadge(item.statusType, item.status)}
      </a>
    </div>
  `).join('');

  searchCards.classList.remove("hidden");
}

// Input hodisasi
searchInput.addEventListener("input", (e) => {
  renderEvents(e.target.value);
});

// Ovozli qidiruv sozlamasi
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const microAudio = new SpeechRecognition();
  microAudio.lang = "uz-UZ";
  microAudio.continuous = false;

  microphone.addEventListener("click", (e) => {
    e.stopPropagation();
    microAudio.start();
    searchInput.placeholder = "Ovoz eshitilmoqda...";
  });

  microAudio.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    searchInput.value = transcript;
    renderEvents(transcript);
    searchInput.placeholder = "Tadbir qidiring...";
  };

  microAudio.onerror = () => {
    searchInput.placeholder = "Tadbir qidiring...";
  };
} else {
  microphone.addEventListener("click", () => {
    alert("Brauzeringiz ovozli qidiruvni qo'llab-quvvatlamaydi.");
  });
}

// Menyu va inputga bosilganda yopilib ketmasligi
searchCards.addEventListener("click", (e) => e.stopPropagation());
searchInput.addEventListener("click", (e) => {
  e.stopPropagation();
  if (searchInput.value.trim()) renderEvents(searchInput.value);
});

// Tashqariga bosganda yopish
body.addEventListener("click", () => {
  searchCards.classList.add("hidden");
});