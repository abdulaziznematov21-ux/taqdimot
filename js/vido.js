function openVideoModal(title) {
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalVideo = document.getElementById('modalVideo');

    modalTitle.innerText = title + " (Tadbirdan lavha)";
    
    // Sinov uchun namoyish etiladigan video (YouTube Embed URL)
    modalVideo.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    modalVideo.src = ""; // Videoni to'xtatish
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}