let path = new URLSearchParams(window.location.search);
let id = path.get("eventId");
let singlePage = document.querySelector(".single-page");

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
      status: "JONLI",
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
      status: "SOTILDI",
      statusType: "danger"
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
      statusType: "warning"
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
      statusType: "success"
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
      statusType: "warning"
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
      statusType: "danger"
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
      statusType: "success"
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
      statusType: "danger"
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
      statusType: "warning"
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
      statusType: "success"
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
      statusType: "warning"
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
      statusType: "danger"
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
      statusType: "success"
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
      statusType: "warning"
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
      statusType: "danger"
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
      statusType: "success"
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
      statusType: "warning"
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
      statusType: "danger"
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
      statusType: "success"
    }
];

let singleData = event.find((el) => el.id === +id);

if (!singleData) {
  singlePage.innerHTML = `
    <div class="max-w-md mx-auto mt-20 text-center p-8 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] shadow-2xl">
      <h2 class="text-2xl font-bold text-white mb-4">Mahsulot topilmadi 😢</h2>
      <a href="../index.html" class="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300">
        Bosh sahifaga qaytish
      </a>
    </div>
  `;
} else {
  singlePage.innerHTML = `
    <div class="max-w-6xl mx-auto my-10 p-4 sm:p-6 lg:p-8">
      
      <!-- Orqaga qaytish tugmasi -->
      <a href="../index.html" class="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-[#D4AF37] transition duration-300">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        <span>Barcha tadbirlarga qaytish</span>
      </a>

      <!-- Asosiy Container -->
      <div class="relative overflow-hidden rounded-[40px] border border-zinc-900 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,.85)]">
        
        <!-- Neon orqa fon bezaklari -->
        <div class="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          
          <!-- Chap taraf: Media (Rasm va Video) -->
          <div class="lg:col-span-6 space-y-4">
            <div class="relative overflow-hidden rounded-[30px] border border-zinc-900/80 bg-zinc-900/40 p-2 group">
              
              <!-- Status Badge -->
              <div class="absolute top-5 right-5 z-20">
                <span class="px-4 py-1.5 rounded-full border text-xs font-bold tracking-[1.5px] uppercase shadow-lg backdrop-blur-md ${
                  singleData.statusType === 'success'
                    ? 'border-emerald-500/40 bg-emerald-500/20 text-emerald-400'
                    : singleData.statusType === 'danger'
                    ? 'border-rose-500/40 bg-rose-500/20 text-rose-400'
                    : 'border-amber-500/40 bg-amber-500/20 text-amber-400'
                }">
                  ${singleData.status}
                </span>
              </div>

              <!-- Rasm -->
              <img
                src="${singleData.image || 'https://www.gazeta.uz/media/img/2019/03/QH3GPQ15526767897430_l.jpg'}"
                alt="${singleData.title}"
                onerror="this.src='https://www.gazeta.uz/media/img/2019/03/QH3GPQ15526767897430_l.jpg'"
                class="w-full h-[320px] sm:h-[400px] object-cover rounded-[24px]"
              />
            </div>

            <!-- Prevyu Video bo'limi (Agar video bo'lsa) -->
            ${singleData.video ? `
              <div class="rounded-[24px] border border-zinc-900 bg-zinc-950 p-3 flex items-center gap-4">
                <div class="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative border border-[#D4AF37]/40">
                  <video src="${singleData.video}" class="w-full h-full object-cover" autoplay loop muted playsinline></video>
                </div>
                <div>
                  <h4 class="text-white text-sm font-semibold">Tadbirlardan lavha (Treyler)</h4>
                  <p class="text-xs text-zinc-500 mt-1">Jonli muhitni tomosha qiling</p>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- O'ng taraf: Ma'lumotlar -->
          <div class="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <span class="text-xs font-bold tracking-[2px] text-[#D4AF37] uppercase bg-[#D4AF37]/10 px-3 py-1 rounded-md border border-[#D4AF37]/20">
                ${singleData.category}
              </span>

              <h1 class="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide mt-4 mb-4">
                ${singleData.title}
              </h1>

              <div class="space-y-3 mb-6 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800/80">
                <div class="flex items-center gap-3 text-zinc-300">
                  <svg class="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-sm font-medium">${singleData.venue}</span>
                </div>

                <div class="flex items-center gap-3 text-zinc-300">
                  <svg class="w-5 h-5 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span class="text-sm font-medium">${singleData.date}</span>
                </div>
              </div>

              <!-- Chipta va Tushum statikasi -->
              <div class="grid grid-cols-2 gap-4 p-4 rounded-2xl border border-zinc-900 bg-zinc-950">
                <div>
                  <p class="text-zinc-500 text-[10px] uppercase tracking-[2px]">Mavjud Chiptalar</p>
                  <p class="text-lg text-zinc-200 font-bold mt-1">${singleData.tickets}</p>
                </div>
                <div class="text-right">
                  <p class="text-zinc-500 text-[10px] uppercase tracking-[2px]">Umumiy Tushum</p>
                  <h3 class="text-xl font-serif font-bold bg-gradient-to-r from-white via-zinc-300 to-[#D4AF37] bg-clip-text text-transparent mt-1">
                    ${singleData.revenue}
                  </h3>
                </div>
              </div>
            </div>

            <!-- Amallar tugmalari -->
            <div class="pt-4 border-t border-zinc-900 flex items-center gap-4">
              <button
                onclick="addToCart(${singleData.id})"
                title="Tanlanganlarga qo'shish"
                class="w-14 h-14 shrink-0 rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-400 flex items-center justify-center transition-all duration-300 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-500 active:scale-95 cursor-pointer shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/>
                </svg>
              </button>

              <a href="./joy.html?eventId=${singleData.id}"
                class="flex-1 py-4 px-6 rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold tracking-wider flex items-center justify-center gap-3 transition-all duration-300 hover:opacity-90 transform active:scale-95 shadow-xl shadow-amber-500/10 cursor-pointer text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="currentColor">
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t-1 41.5L706-492q-14 24-37.5 38T616-440H310l-40 72q-6 11-1 24.5t18 13.5h473v80H280q-50 0-77-41t-5-83l48-87-142-300H40v-80h114l54 113Z"/>
                </svg>
                <span>Chipta sotib olish</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  `;
}