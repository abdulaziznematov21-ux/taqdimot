// Asosiy DOM elementlari
let heroCards = document.querySelector(".hero-cards");
let heroCardss = document.querySelector(".hero-cardss");
let count = document.querySelector(".count");

const dateFilterButtons = document.querySelectorAll(".tab-btn");
const categoryButtons = document.querySelectorAll(".category-btn");

let activeDateFilter = "all";
let activeCategoryFilter = "all";

// Ma'lumotlar bazasi
let products = [

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

    status: "Jonli",

    statusType: "success"

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

    status: "Jonli",

    statusType: "success"

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

    status: "Sotildi",

    statusType: "danger"

  },

  {

    id: 4,

    title: "Otabek va Kumush (Drama)",

    dateType: "today",

    category: "theaters",

    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1000&auto=format&fit=crop",

    video: "https://videos.pexels.com/video-files/6899904/6899904-uhd_2732_1440_25fps.mp4",

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

    video: "https://videos.pexels.com/video-files/7989390/7989390-uhd_2732_1440_25fps.mp4",

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

    video: "https://videos.pexels.com/video-files/7095057/7095057-uhd_1440_2732_25fps.mp4",

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

    video: "https://videos.pexels.com/video-files/30618930/13107474_2560_1440_24fps.mp4",

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

    video: "https://videos.pexels.com/video-files/6899953/6899953-uhd_2732_1440_25fps.mp4",

    date: "12-Aug, 19:30",

    venue: "Turkiston San'at Saroyi",

    tickets: "750 / 800",

    revenue: "90.0 mln",

    status: "Kutilmoqda",

    statusType: "warning"

  }

];



// LocalStorage va Savat holati
let savat = JSON.parse(localStorage.getItem("savat")) || [];

function updateCount() {
  if (count) count.innerHTML = savat.length;
}

// Card shabloni (HTML)
function createCardHTML(el, isCart = false) {
  return `
    <div class="event-card group relative overflow-hidden rounded-[40px] border border-zinc-900 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6 shadow-[0_25px_70px_rgba(0,0,0,.85)] transition-all duration-500 hover:border-[#D4AF37]/30 flex flex-col justify-between" data-id="${el.id}">
      
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

      <!-- Rasm va Drag-able Dumaloq Video Konteyneri -->
      <div class="card-media-wrapper relative z-10 overflow-hidden rounded-[30px] bg-zinc-900/40 border border-zinc-900/80 p-2 flex items-center justify-center h-[236px] select-none">
          <img src="${el.image}" alt="${el.title}" class="w-full h-full object-cover rounded-[22px] transition-all duration-500 group-hover:scale-105 group-hover:brightness-50 pointer-events-none" />
          
          <!-- Drag-able Dumaloq Video Box -->
          <div class="video-container absolute w-36 h-36 rounded-full border-2 border-[#D4AF37]/80 shadow-[0_0_30px_rgba(212,175,55,0.4)] opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 cursor-grab active:cursor-grabbing overflow-hidden z-20 flex items-center justify-center">
              <video src="${el.video}" loop muted playsinline class="w-full h-full object-cover pointer-events-none"></video>
              
              <!-- Mute / Unmute Tugmasi -->
              <button class="mute-btn absolute top-2 right-2 w-8 h-8 rounded-full   flex items-center justify-center transition-transform active:scale-95  z-30 cursor-pointer">
                
              </button>
          </div>
      </div>

      <div class="relative z-10 pt-5 flex-1 flex flex-col justify-between">
          <div>
              <a href="../pages/single.html?eventId=${el.id}" class="text-xl font-serif font-bold text-white tracking-wide transition-colors duration-300 hover:text-[#D4AF37] line-clamp-1">
                  ${el.title}
              </a>
              <div class="space-y-1.5 mb-4 mt-2">
                  <p class="text-zinc-400 text-xs font-light flex items-center gap-2"><span class="truncate">${el.venue}</span></p>
                  <p class="text-zinc-400 text-xs font-light flex items-center gap-2"><span>${el.date}</span></p>
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
                      <h3 class="text-lg font-serif font-bold bg-gradient-to-r from-white via-zinc-300 to-[#D4AF37] bg-clip-text text-transparent">${el.revenue}</h3>
                  </div>
              </div>

              <div class="mt-5 flex items-center gap-3">
                  ${
                    isCart
                      ? `<a href="../pages/joy.html" class="flex-1 py-3.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium flex items-center justify-center hover:bg-[#D4AF37] hover:text-black">Chipta Olish</a>
                         <button onclick="removeFromCart(${el.id})" class="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 flex items-center justify-center hover:border-rose-500/50 hover:text-rose-500">
                           <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg>
                         </button>`
                      : `<button onclick="addToCart(${el.id})" class="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 flex items-center justify-center hover:border-rose-500/50 hover:text-rose-500">
                           <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" class="fill-zinc-500 hover:fill-rose-500"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></path></svg>
                         </button>
                         <a href="./pages/joy.html" class="flex-1 py-3.5 px-4 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium flex items-center justify-center hover:bg-[#D4AF37] hover:text-black">Sotib olish</a>`
                  }
              </div>
          </div>
      </div>
    </div>
  `;
}

// Dynamic Video Interaktivlik Interfeysi (Hover, Unmute & Drag-and-Drop)
function attachMediaInteractions(container) {
  if (!container) return;

  const cards = container.querySelectorAll(".event-card");

  cards.forEach((card) => {
    const videoContainer = card.querySelector(".video-container");
    const video = card.querySelector("video");
    const muteBtn = card.querySelector(".mute-btn");
    const micOff = card.querySelector(".mic-icon-off");
    const micOn = card.querySelector(".mic-icon-on");
    const wrapper = card.querySelector(".card-media-wrapper");

    // 1. HOVER EVENTLARI
    card.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      micOff.classList.remove("hidden");
      micOn.classList.add("hidden");
    });

    // 2. UNMUTE / MUTE TOGGLE
    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Drag-and-drop bilan to'qnash kelmaslik uchun
      video.muted = !video.muted;
      if (video.muted) {
        micOff.classList.remove("hidden");
        micOn.classList.add("hidden");
      } else {
        micOff.classList.add("hidden");
        micOn.classList.remove("hidden");
      }
    });

    // 3. DRAG AND DROP (MOUSE & TOUCH)
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    const onStart = (e) => {
      if (e.target.closest(".mute-btn")) return;
      isDragging = true;

      const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

      startX = clientX;
      startY = clientY;

      const rect = videoContainer.getBoundingClientRect();
      const parentRect = wrapper.getBoundingClientRect();

      initialLeft = rect.left - parentRect.left;
      initialTop = rect.top - parentRect.top;

      videoContainer.style.transition = "none"; // Drag paytida silliq harakatlanish uchun
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onEnd);
      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("touchend", onEnd);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

      const dx = clientX - startX;
      const dy = clientY - startY;

      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;

      // Card media ramkasidan chiqib ketmaslik chegaralari (Boundary Check)
      const maxLeft = wrapper.clientWidth - videoContainer.clientWidth;
      const maxTop = wrapper.clientHeight - videoContainer.clientHeight;

      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));

      videoContainer.style.left = `${newLeft}px`;
      videoContainer.style.top = `${newTop}px`;
      videoContainer.style.transform = "none";
    };

    const onEnd = () => {
      isDragging = false;
      videoContainer.style.transition = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };

    videoContainer.addEventListener("mousedown", onStart);
    videoContainer.addEventListener("touchstart", onStart, { passive: false });
  });
}

// Bosh sahifada ko'rsatish
function showProducts(container, list) {
  if (!container) return;
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-16 text-zinc-500 font-medium text-lg">Ushbu bo'limda hech qanday tadbir topilmadi.</div>`;
    return;
  }

  list.forEach((el) => {
    container.insertAdjacentHTML("beforeend", createCardHTML(el, false));
  });

  attachMediaInteractions(container);
}

// Savat bo'limida ko'rsatish
function showCartProducts() {
  if (!heroCardss) return;
  heroCardss.innerHTML = "";

  if (savat.length === 0) {
    heroCardss.innerHTML = `<div class="col-span-full text-center py-10 text-zinc-500 font-medium">Tanlangan kartochkalar yo'q.</div>`;
    return;
  }

  savat.forEach((el) => {
    heroCardss.insertAdjacentHTML("beforeend", createCardHTML(el, true));
  });

  attachMediaInteractions(heroCardss);
}

// Savat operatsiyalari
function addToCart(productId) {
  let item = products.find((el) => el.id === productId);
  if (item && !savat.some((e) => e.id === productId)) {
    savat.push(item);
    localStorage.setItem("savat", JSON.stringify(savat));
    updateCount();
    showCartProducts();
  }
}

function removeFromCart(productId) {
  savat = savat.filter((el) => el.id !== productId);
  localStorage.setItem("savat", JSON.stringify(savat));
  updateCount();
  showCartProducts();
}

// Filtrlash
function filterAndRender() {
  let filtered = products.filter((item) => {
    const matchDate = activeDateFilter === "all" || item.dateType === activeDateFilter;
    const matchCategory = activeCategoryFilter === "all" || item.category === activeCategoryFilter;
    return matchDate && matchCategory;
  });

  showProducts(heroCards, filtered);
}

// Boshlang'ich yuklash
showProducts(heroCards, products);
showCartProducts();
updateCount();

// Event listeners
dateFilterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeDateFilter = btn.getAttribute("data-filter");
    filterAndRender();
  });
});

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeCategoryFilter = btn.getAttribute("data-category");
    filterAndRender();
  });
});