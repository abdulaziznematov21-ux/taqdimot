let heroCardss = document.querySelector(".hero-cardss");

let productss = [
  {
    id: 1,
    title: "Yulduzli kecha",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop", // Yulduzli osmon va teatr atmosferasi
    date: "20-Jul, 19:00",
    venue: "Alisher Navoiy nomidagi teatr",
    tickets: "644 / 750",
    revenue: "76.4 mln",
    status: "Jonli",
    statusType: "success" // emerald
  },
  {
    id: 2,
    title: "Simfoniya Bahori",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1000&auto=format&fit=crop", // Simfoniya va orkestr
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
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop", // Saksafon va djaz kechasi
    date: "25-Jul, 20:00",
    venue: "Tashkent City Park",
    tickets: "300 / 300",
    revenue: "45.0 mln",
    status: "Sotildi",
    statusType: "danger" // rose
  },
  {
    id: 4,
    title: "Otabek va Kumush (Drama)",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1000&auto=format&fit=crop", // Teatr sahnalari va drama
    date: "28-Jul, 18:00",
    venue: "O'zbek Milliy Akademik Teatri",
    tickets: "420 / 500",
    revenue: "33.6 mln",
    status: "Kutilmoqda",
    statusType: "warning" // amber
  },
  {
    id: 5,
    title: "Retro Cinema Premier",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop", // Retro kinoteatr proyektori
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
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop", // Organ va klassik musiqa
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
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop", // Rok konsert va sahna
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
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop", // Zamonaviy raqs shousi
    date: "12-Aug, 19:30",
    venue: "Turkiston San'at Saroyi",
    tickets: "750 / 800",
    revenue: "90.0 mln",
    status: "Kutilmoqda",
    statusType: "warning"
  }
];



function showProducts(x, y) {
    for (let el of y) {
 x.innerHTML += `
<div class="group relative overflow-hidden rounded-[40px] border border-zinc-900 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6 shadow-[0_25px_70px_rgba(0,0,0,.85)] transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/30 hover:shadow-[0_30px_90px_rgba(212,175,55,0.1)] flex flex-col justify-between">

    <!-- Fondagi neonnli yorug'liklar -->
    <div class="absolute -top-24 -left-20 w-60 h-60 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-20 w-60 h-60 bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none"></div>

    <!-- Status Badge (Jonli, Sotildi, Kutilmoqda) -->
    <div class="absolute top-5 right-5 z-20">
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

    <!-- Rasm konteyneri -->
    <div class="relative z-10 overflow-hidden rounded-[30px] bg-zinc-900/40 border border-zinc-900/80 p-2 flex items-center justify-center">
        <img
            src="${el.image}"
            alt="${el.title}"
            onerror="this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500'"
            class="w-full h-[220px] object-cover rounded-[22px] transition duration-700 group-hover:scale-105"
        />
    </div>

    <!-- Ma'lumotlar qismi -->
    <div class="relative z-10 pt-5 flex-1 flex flex-col justify-between">

        <div>
            <!-- Tadbir Sarlavhasi -->
            <h2 class="text-xl font-serif font-bold text-white mb-2 tracking-wide transition-colors duration-300 group-hover:text-[#D4AF37] line-clamp-1">
                ${el.title}
            </h2>

            <!-- O'tkazilish joyi va Sana -->
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

        <!-- Chipta va Tushum ma'lumotlari -->
        <div class="pt-3 border-t border-zinc-900/80">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-zinc-500 text-[10px] uppercase tracking-[2px]">Chiptalar</p>
                    
                </div>

                <div class="text-right">
                    <p class="text-zinc-500 text-[10px] uppercase tracking-[2px]">Tushum</p>
                    <h3 class="text-lg font-serif font-bold bg-gradient-to-r from-white via-zinc-300 to-[#D4AF37] bg-clip-text text-transparent">
                        ${el.revenue}
                    </h3>
                </div>
            </div>

            <!-- Chipta xarid qilish tugmasi -->
            <a href="../pages/joy.html"
                onclick="addToCart('${el.title}')"
                class="mt-5 w-full py-3.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium tracking-wider flex items-center justify-center gap-2.5 transition duration-300 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:font-bold transform active:scale-95 shadow-lg cursor-pointer group/btn"
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12v.75m0 3v.75m0 3v.75m0 3V18M3 8.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 8.25v7.5A2.25 2.25 0 0 1 18.75 18H5.25A2.25 2.25 0 0 1 3 15.75v-7.5Z" />
                </svg>
                Chipta Olish
                 
            </a>
        </div>

    </div>

</div>
`;
    }
}

showProducts(heroCardss, productss);



