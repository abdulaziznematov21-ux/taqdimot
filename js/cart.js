let cartCards = document.querySelector(".cart-cards");
let countProduct = document.querySelector(".count-product");
let priceProduct = document.querySelector(".price-product");

let discount = document.querySelector(".discount");

let sum = 0;

let namber = 0;

let result;

if (localStorage.getItem("savat")) {
  result = JSON.parse(localStorage.getItem("savat"));
} else {
  result = [];
}



function showCartProducts(x, y) {
  for (let el of y) {

    sum += el.narxi;
    namber += 1;

    x.innerHTML += `
<div class="group relative overflow-hidden rounded-[40px] border border-zinc-900 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-6 shadow-[0_25px_70px_rgba(0,0,0,.85)] transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]/30 hover:shadow-[0_30px_90px_rgba(212,175,55,0.1)] flex flex-col justify-between">

    <!-- Fondagi neonnli yorug'liklar -->
    <div class="absolute -top-24 -left-20 w-60 h-60 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute -bottom-24 -right-20 w-60 h-60 bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none"></div>

    <!-- Status Badge (Jonli, Sotildi, Kutilmoqda) -->
    <div class="absolute top-5 right-5 z-20">
        <span class="px-3 py-1 rounded-full border text-[10px] font-bold tracking-[1.5px] uppercase ${el.statusType === 'success'
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
                    <p class="text-sm font-semibold text-zinc-300 mt-0.5">${el.tickets}</p>
                </div>

                <div class="text-right">
                    <p class="text-zinc-500 text-[10px] uppercase tracking-[2px]">Tushum</p>
                    <h3 class="text-lg font-serif font-bold bg-gradient-to-r from-white via-zinc-300 to-[#D4AF37] bg-clip-text text-transparent">
                        ${el.revenue}
                    </h3>
                </div>
            </div>

            <!-- Chipta xarid qilish tugmasi -->
            <button
                onclick="addToCart('${el.title}')"
                class="mt-5 w-full py-3.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium tracking-wider flex items-center justify-center gap-2.5 transition duration-300 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:font-bold transform active:scale-95 shadow-lg cursor-pointer group/btn"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12v.75m0 3v.75m0 3v.75m0 3V18M3 8.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 8.25v7.5A2.25 2.25 0 0 1 18.75 18H5.25A2.25 2.25 0 0 1 3 15.75v-7.5Z" />
                </svg>
                Chipta Olish
            </button>
        </div>

    </div>

</div>
`;
  }
  priceProduct.textContent = sum;
  countProduct.textContent = namber;
}

showCartProducts(cartCards, result);


discount.addEventListener("input", function (e) {
  let promokode = e.target.value;

  if (promokode == "ABDULAZIZ") {
    sum = sum - (sum * 50) / 100;
  } else {
    sum = 0;

    for (let el of result) {
      sum += el.narxi;
    }
  }

  priceProduct.textContent = sum;
});