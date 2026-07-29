let heroCards = document.querySelector(".hero-cards");
let count = document.querySelector(".count");
let cound = document.querySelector(".cound");

const dateFilterButtons = document.querySelectorAll(".tab-btn");
const categoryButtons = document.querySelectorAll(".category-btn");

// Faol filtr holatlarini saqlash uchun o'zgaruvchilar
let activeDateFilter = "all";
let activeCategoryFilter = "all";

let products = [
  {
    id: 1,
    title: "Yulduzli kecha",
    dateType: "today",       // Bugun, Ertaga, Dam olish kunlari
    category: "concerts",    // concerts, theaters, cinema, sports, exhibitions, business
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    date: "20-Jul, 19:00",
    venue: "Alisher Navoiy nomidagi teatr",
    tickets: "644 / 750",
    revenue: "76.4 mln",
    status: "Jonli",
    statusType: "success"
  },
  {
    id: 2,
    title: "Simfoniya Bahori",
    dateType: "tomorrow",
    category: "concerts",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    date: "22-Jul, 18:30",
    venue: "Konservatoriya Katta zali",
    tickets: "510 / 600",
    revenue: "51.0 mln",
    status: "Jonli",
    statusType: "success"
  },
  {
    id: 3,
    title: "Jazz & Wine Night",
    dateType: "weekend",
    category: "concerts",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    date: "25-Jul, 20:00",
    venue: "Tashkent City Park",
    tickets: "300 / 300",
    revenue: "45.0 mln",
    status: "Sotildi",
    statusType: "danger"
  },
  {
    id: 4,
    title: "Otabek va Kumush (Drama)",
    dateType: "today",
    category: "theaters",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    date: "28-Jul, 18:00",
    venue: "O'zbek Milliy Akademik Teatri",
    tickets: "420 / 500",
    revenue: "33.6 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    id: 5,
    title: "Retro Cinema Premier",
    dateType: "tomorrow",
    category: "cinema",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    date: "01-Aug, 21:00",
    venue: "Panorama Kinoteatri",
    tickets: "180 / 400",
    revenue: "14.4 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    id: 6,
    title: "Klassik Organ Musiqasi",
    dateType: "weekend",
    category: "concerts",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    date: "03-Aug, 19:00",
    venue: "Organ Zali",
    tickets: "120 / 250",
    revenue: "9.6 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    id: 7,
    title: "Rok Fest Tashkent",
    dateType: "weekend",
    category: "concerts",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    date: "08-Aug, 17:00",
    venue: "Humo Arena",
    tickets: "3200 / 5000",
    revenue: "480.0 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  },
  {
    id: 8,
    title: "Zamonaviy Raqs Shousi",
    dateType: "today",
    category: "theaters",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    date: "12-Aug, 19:30",
    venue: "Turkiston San'at Saroyi",
    tickets: "750 / 800",
    revenue: "90.0 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  }
];

let savat = [];
let res;

if (localStorage.getItem("savat")) {
  res = JSON.parse(localStorage.getItem("savat"));
} else {
  res = savat;
}

if (count) count.innerHTML = res.length;

// Kartochkalarni chiqaruvchi asosiy funksiya
function showProducts(x, y) {
  x.innerHTML = "";

  if (y.length === 0) {
    x.innerHTML = `<div class="col-span-full text-center py-16 text-zinc-500 font-medium text-lg">Ushbu bo'limda hech qanday tadbir topilmadi.</div>`;
    return;
  }

  for (let el of y) {
    x.insertAdjacentHTML("beforeend", `
<div class="group relative overflow-hidden rounded-[40px] border border-zinc-900 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6 shadow-[0_25px_70px_rgba(0,0,0,.85)] transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/30 hover:shadow-[0_30px_90px_rgba(212,175,55,0.1)] flex flex-col justify-between" id="card-${el.id}">

    <!-- Fondagi neon yorug'liklar -->
    <div class="absolute -top-24 -left-20 w-60 h-60 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-20 w-60 h-60 bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none"></div>

    <!-- Status Badge -->
    <div class="absolute top-5 right-5 z-30 pointer-events-none">
        <span class="px-3 py-1 rounded-full border text-[10px] font-bold tracking-[1.5px] uppercase ${
          el.statusType === 'success'
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
            : el.statusType === 'danger'
            ? 'border-rose-500/30 bg-rose-500/10 text-rose-400'
            : 'border-amber-500/30 bg-amber-500/10 text-amber-400'
        }">
            ${el.status}
        </span>
    </div>

    <!-- Rasm -->
    <div class="relative z-10 overflow-hidden rounded-[30px] bg-zinc-900/40 border border-zinc-900/80 p-2 flex items-center justify-center" id="imgwrap-${el.id}">
        <img
            src="${el.image || 'https://www.gazeta.uz/media/img/2019/03/QH3GPQ15526767897430_l.jpg'}"
            alt="${el.title}"
            onerror="this.src='https://www.gazeta.uz/media/img/2019/03/QH3GPQ15526767897430_l.jpg'"
            class="w-full h-[220px] object-cover rounded-[22px] transition duration-700 group-hover:scale-105"
        />

        <!-- Dumaloq hover video -->
        <div id="videocircle-${el.id}" class="absolute z-20 w-28 h-28 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_10px_35px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing opacity-0 scale-[0.6] pointer-events-none transition-all duration-500" style="top:20px;left:20px;">
            <video
                id="video-${el.id}"
                src="${el.video || ''}"
                class="w-full h-full object-cover pointer-events-none"
                muted
                loop
                playsinline
                autoplay
            ></video>

            <!-- Mikrofon tugmasi -->
            <button
                id="mic-${el.id}"
                title="Ovozni yoqish"
                class="absolute bottom-1.5 right-1.5 w-8 h-8 rounded-full bg-black/70 border border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center backdrop-blur-sm z-30 transition-colors duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="16" height="16" fill="currentColor"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 320v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-280q83 0 141.5-58.5T680-480h80q0 105-68 184t-172 93v123h-80Z"/></svg>
            </button>
        </div>
    </div>

    <!-- Ma'lumotlar qismi -->
    <div class="relative z-10 pt-5 flex-1 flex flex-col justify-between">
        <div>
            <div class="flex items-center justify-between gap-3 mb-3 group/title">
                <h2 class="text-xl font-serif font-bold text-white tracking-wide transition-colors duration-300 group-hover/title:text-[#D4AF37] line-clamp-1 flex-1 text-left">
                    ${el.title}
                </h2>

                <a
                    href="${el.videoUrl || 'https://www.youtube.com/watch?v=PB1Zbmwl3rU'}"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Videoni tomosha qilish"
                    class="w-10 h-10 shrink-0 flex items-center justify-center relative cursor-pointer"
                >
                    <div class="w-full h-full rounded-full p-0.5 bg-gradient-to-tr from-[#D4AF37] via-amber-200 to-amber-500 opacity-0 scale-75 transition-all duration-300 group-hover/title:opacity-100 group-hover/title:scale-100 shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center">
                        <div class="w-full h-full bg-black rounded-full p-1.5 flex items-center justify-center">
                            <img
                                src="https://www.gazeta.uz/media/img/2019/03/QH3GPQ15526767897430_l.jpg"
                                alt="AI Play"
                                class="w-full h-full object-contain filter drop-shadow-[0_0_3px_#D4AF37]"
                            />
                        </div>
                    </div>
                </a>
            </div>

            <div class="space-y-1.5 mb-4">
                <p class="text-zinc-400 text-xs font-light flex items-center gap-2">
                    <svg class="w-4 h-4 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="truncate">${el.venue}</span>
                </p>

                <p class="text-zinc-400 text-xs font-light flex items-center gap-2">
                    <svg class="w-4 h-4 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>${el.date}</span>
                </p>
            </div>
        </div>

        <div class="pt-3 border-t border-zinc-900/80">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-zinc-500 text-[10px] uppercase tracking-[2px]">Chiptalar</p>
                    <p class="text-sm text-zinc-300 font-medium">${el.tickets}</p>
                </div>

                <div class="text-right">
                    <p class="text-zinc-500 text-[10px] uppercase tracking-[2px]">Tushum</p>
                    <h3 class="text-lg font-serif font-bold bg-gradient-to-r from-white via-zinc-300 to-[#D4AF37] bg-clip-text text-transparent">
                        ${el.revenue}
                    </h3>
                </div>
            </div>

            <div class="mt-5 flex items-center gap-3">
                <button
                    onclick="addToCart(${el.id})"
                    title="Tanlanganlarga qo'shish"
                    class="w-12 h-12 shrink-0 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 flex items-center justify-center transition duration-300 hover:text-rose-500 hover:border-rose-500/50 hover:bg-rose-500/10 active:scale-90 cursor-pointer shadow-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                </button>

                <a href="./pages/joy.html"
                    class="flex-1 py-3.5 px-4 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium tracking-wider flex items-center justify-center gap-2 transition duration-300 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:font-bold transform active:scale-95 shadow-lg cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t-1 41.5L706-492q-14 24-37.5 38T616-440H310l-40 72q-6 11-1 24.5t18 13.5h473v80H280q-50 0-77-41t-5-83l48-87-142-300H40v-80h114l54 113Z"/></svg>
                    <span>Sotib olish</span>
                </a>
            </div>
        </div>
    </div>
</div>
`);

    // --- Hover va Video hodisalari ---
    (function initCardVideoBehavior(id) {
      const card = document.getElementById(`card-${id}`);
      const imgWrap = document.getElementById(`imgwrap-${id}`);
      const circle = document.getElementById(`videocircle-${id}`);
      const video = document.getElementById(`video-${id}`);
      const mic = document.getElementById(`mic-${id}`);

      if (!card || !circle || !video || !mic) return;

      card.addEventListener('mouseenter', () => {
        circle.classList.remove('opacity-0', 'scale-[0.6]', 'pointer-events-none');
        circle.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
        video.currentTime = 0;
        video.play().catch(() => {});
      });

      card.addEventListener('mouseleave', () => {
        circle.classList.add('opacity-0', 'scale-[0.6]', 'pointer-events-none');
        circle.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
        video.pause();
        video.muted = true;
        mic.style.background = '';
        mic.style.color = '';
        mic.title = 'Ovozni yoqish';
      });

      mic.addEventListener('click', (e) => {
        e.stopPropagation();
        video.muted = !video.muted;
        if (!video.muted) {
          mic.style.background = '#D4AF37';
          mic.style.color = '#000';
          mic.title = "Ovozni o'chirish";
        } else {
          mic.style.background = '';
          mic.style.color = '';
          mic.title = 'Ovozni yoqish';
        }
      });

      let isDragging = false;
      let offsetX = 0, offsetY = 0;

      function startDrag(clientX, clientY) {
        isDragging = true;
        circle.style.transition = 'none';
        const rect = circle.getBoundingClientRect();
        offsetX = clientX - rect.left;
        offsetY = clientY - rect.top;
      }

      function moveDrag(clientX, clientY) {
        if (!isDragging) return;
        const bounds = imgWrap.getBoundingClientRect();
        const size = circle.offsetWidth;

        let newLeft = clientX - bounds.left - offsetX;
        let newTop = clientY - bounds.top - offsetY;

        newLeft = Math.max(0, Math.min(newLeft, bounds.width - size));
        newTop = Math.max(0, Math.min(newTop, bounds.height - size));

        circle.style.left = `${newLeft}px`;
        circle.style.top = `${newTop}px`;
      }

      function endDrag() {
        isDragging = false;
        circle.style.transition = '';
      }

      circle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
      });
      window.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
      window.addEventListener('mouseup', endDrag);

      circle.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        startDrag(t.clientX, t.clientY);
      }, { passive: true });
      window.addEventListener('touchmove', (e) => {
        const t = e.touches[0];
        moveDrag(t.clientX, t.clientY);
      }, { passive: true });
      window.addEventListener('touchend', endDrag);
    })(el.id);
  }
}

// Barcha filtrlarni birgalikda ishlatish funksiyasi
function filterAndRender() {
  let filtered = products.filter((item) => {
    const matchDate = activeDateFilter === "all" || item.dateType === activeDateFilter;
    const matchCategory = activeCategoryFilter === "all" || item.category === activeCategoryFilter;
    return matchDate && matchCategory;
  });

  showProducts(heroCards, filtered);
}

// Dastlabki yuklanish
showProducts(heroCards, products);

// 1. SANA FILTR TUGMALARI (Hammasi, Bugun, Ertaga, Dam olish kunlari)
dateFilterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeDateFilter = btn.getAttribute("data-filter");

    dateFilterButtons.forEach((b) => {
      b.classList.remove("text-[#edd38d]", "font-medium");
      b.classList.add("text-[#8c8273]");
      const indicator = b.querySelector(".indicator");
      if (indicator) indicator.classList.add("hidden");
    });

    btn.classList.remove("text-[#8c8273]");
    btn.classList.add("text-[#edd38d]", "font-medium");
    const activeIndicator = btn.querySelector(".indicator");
    if (activeIndicator) activeIndicator.classList.remove("hidden");

    filterAndRender();
  });
});

// 2. KATEGORIYA TUGMALARI (Hammasi, Konsertlar, Teatrlar, Kino...)
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeCategoryFilter = btn.getAttribute("data-category");

    // Barcha kategoriya tugmalarining stilini oddiy holatga qaytarish
    categoryButtons.forEach((b) => {
      b.className = "category-btn flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#181512] text-[#d1ccc4] hover:bg-[#25201a] hover:text-white font-medium text-sm sm:text-base border border-[#302820] transition-all duration-300 shrink-0";
    });

    // Bosilgan kategoriyaga Oltin (Gold) gradient stil berish
    btn.className = "category-btn active flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#edd38d] via-[#deab4a] to-[#c99430] text-[#1c1203] font-semibold text-sm sm:text-base transition-all duration-300 hover:brightness-110 shrink-0 shadow-md hover:shadow-lg";

    filterAndRender();
  });
});

function addToCart(productId) {
  let item = products.find((el) => el.id === productId);

  res.push(item);

  if (count) count.innerHTML = res.length;

  localStorage.setItem("savat", JSON.stringify(res));
}