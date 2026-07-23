document.addEventListener("DOMContentLoaded", () => {
    // Tanlangan holatlarni saqlash obyekti
    const searchParams = {
        category: "Hammasi",
        price: "Narxni belgilang",
        quickFilter: null
    };

    // --- KATEGORIYA DROPDOWN ---
    const categoryTrigger = document.getElementById("category-trigger");
    const categoryDropdown = document.getElementById("category-dropdown");
    const categoryValue = document.getElementById("category-value");
    const categoryOptions = document.querySelectorAll(".category-option");

    categoryTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        priceDropdown.classList.add("hidden"); // Boshqa ochik dropdown'ni yopish
        categoryDropdown.classList.toggle("hidden");
    });

    categoryOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            const selectedText = option.innerText.trim();
            categoryValue.innerText = selectedText;
            searchParams.category = selectedText;
            categoryDropdown.classList.add("hidden");
        });
    });

    // --- NARX DROPDOWN ---
    const priceTrigger = document.getElementById("price-trigger");
    const priceDropdown = document.getElementById("price-dropdown");
    const priceValue = document.getElementById("price-value");
    const priceOptions = document.querySelectorAll(".price-option");

    priceTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        categoryDropdown.classList.add("hidden"); // Boshqa ochik dropdown'ni yopish
        priceDropdown.classList.toggle("hidden");
    });

    priceOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            const selectedText = option.innerText.trim();
            priceValue.innerText = selectedText;
            searchParams.price = selectedText;
            priceDropdown.classList.add("hidden");
        });
    });

    // Tashqariga bosilganda ochiq dropdown'larni yopish
    document.addEventListener("click", () => {
        categoryDropdown.classList.add("hidden");
        priceDropdown.classList.add("hidden");
    });

    // --- TEZKOR FILTERLAR (QUICK FILTERS) ---
    const quickFilterBtns = document.querySelectorAll(".quick-filter-btn");

    quickFilterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filterValue = btn.innerText.trim();

            // Agar oldin bosilgan bo'lsa - faolsizlantirish (Toggle)
            if (btn.classList.contains("border-[#e7c56b]") && btn.classList.contains("text-[#e7c56b]")) {
                btn.classList.remove("border-[#e7c56b]", "text-[#e7c56b]", "bg-[#e7c56b]/10");
                searchParams.quickFilter = null;
            } else {
                // Barcha tugmalardan faollik sinflarini olib tashlash
                quickFilterBtns.forEach((b) => {
                    b.classList.remove("border-[#e7c56b]", "text-[#e7c56b]", "bg-[#e7c56b]/10");
                });

                // Bosilgan tugmani faollashtirish
                btn.classList.add("border-[#e7c56b]", "text-[#e7c56b]", "bg-[#e7c56b]/10");
                searchParams.quickFilter = filterValue;
            }
        });
    });

    // --- QIDIRISH TUGMASI ---
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", () => {
        console.log("Qidiruv parametrlari:", searchParams);
        // Bu yerda backend interfeysiga so'rov yuborishingiz yoki sahifani yo'naltirishingiz mumkin
        // Masalan: window.location.href = `/events?category=${encodeURIComponent(searchParams.category)}&price=${encodeURIComponent(searchParams.price)}&filter=${encodeURIComponent(searchParams.quickFilter || '')}`;
    });
});