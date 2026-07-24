document.addEventListener("DOMContentLoaded", () => {
    const menuToggleBtn = document.getElementById("menu-toggle-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIconOpen = document.getElementById("menu-icon-open");
    const menuIconClose = document.getElementById("menu-icon-close");

    if (menuToggleBtn && mobileMenu) {
        menuToggleBtn.addEventListener("click", () => {
            // Menyu holatini almashtirish
            const isHidden = mobileMenu.classList.contains("hidden");

            if (isHidden) {
                // Menyuni ochish
                mobileMenu.classList.remove("hidden");
                menuIconOpen.classList.add("hidden");
                menuIconClose.classList.remove("hidden");
            } else {
                // Menyuni yopish
                mobileMenu.classList.add("hidden");
                menuIconOpen.classList.remove("hidden");
                menuIconClose.classList.add("hidden");
            }
        });
    }
});