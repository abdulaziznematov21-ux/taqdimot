document.addEventListener('DOMContentLoaded', () => {

  // --- G'OYA YOZISH FORMASI MANIPULYATSIYASI ---
  const openIdeaFormBtn = document.getElementById('openIdeaFormBtn');
  const ideaFormContainer = document.getElementById('ideaFormContainer');
  const closeIdeaFormBtn = document.getElementById('closeIdeaFormBtn');
  const cancelIdeaBtn = document.getElementById('cancelIdeaBtn');
  const saveIdeaBtn = document.getElementById('saveIdeaBtn');
  const ideaTextarea = document.getElementById('ideaTextarea');
  const charCounter = document.getElementById('charCounter');

  // Formani ochish
  openIdeaFormBtn.addEventListener('click', () => {
    ideaFormContainer.classList.remove('hidden');
    ideaTextarea.focus();
  });

  // Formani yopish
  const hideIdeaForm = () => {
    ideaFormContainer.classList.add('hidden');
  };
  closeIdeaFormBtn.addEventListener('click', hideIdeaForm);
  cancelIdeaBtn.addEventListener('click', hideIdeaForm);

  // Belgilar sonini hisoblash
  ideaTextarea.addEventListener('input', (e) => {
    const length = e.target.value.length;
    charCounter.innerText = `${length} / 300`;
    if (length > 300) {
      charCounter.classList.add('text-red-400');
    } else {
      charCounter.classList.remove('text-red-400');
    }
  });

  // Saqlash tugmasi
  saveIdeaBtn.addEventListener('click', () => {
    const val = ideaTextarea.value.trim();
    if (!val) {
      alert('Iltimos, avval g\'oyangizni yozing!');
      return;
    }
    alert('G\'oyangiz muvaffaqiyatli saqlandi!');
    ideaTextarea.value = '';
    charCounter.innerText = '0 / 300';
    hideIdeaForm();
  });


  // --- MASLAHATLAR MODAL OYNASI ---
  const openTipsModalBtn = document.getElementById('openTipsModalBtn');
  const tipsModal = document.getElementById('tipsModal');
  const tipsModalBox = document.getElementById('tipsModalBox');
  const closeTipsModalBtn = document.getElementById('closeTipsModalBtn');
  const gotItBtn = document.getElementById('gotItBtn');

  const showModal = () => {
    tipsModal.classList.remove('hidden');
    setTimeout(() => {
      tipsModalBox.classList.remove('scale-95', 'opacity-0');
      tipsModalBox.classList.add('scale-100', 'opacity-100');
    }, 10);
  };

  const hideModal = () => {
    tipsModalBox.classList.remove('scale-100', 'opacity-100');
    tipsModalBox.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      tipsModal.classList.add('hidden');
    }, 200);
  };

  openTipsModalBtn.addEventListener('click', showModal);
  closeTipsModalBtn.addEventListener('click', hideModal);
  gotItBtn.addEventListener('click', hideModal);

  // Modal tashqarisini bosganda yopish
  tipsModal.addEventListener('click', (e) => {
    if (e.target === tipsModal) {
      hideModal();
    }
  });

});

// Shablonlarni bosganda textarea'ga text kiritish
function insertTemplate(type) {
  const textarea = document.getElementById('ideaTextarea');
  const counter = document.getElementById('charCounter');

  let text = "";
  if (type === 1) {
    text = "Salom! 15-sentyabr kuni bo'lib o'tadigan konsertimizga barchangizni taklif qilamiz. Unutilmas kecha sizni kutmoqda!";
  } else if (type === 2) {
    text = "Daqiqalarni boy bermang! Faqat bugun chiptalarni 20% chegirma bilan band qilishingiz mumkin. Shoshiling!";
  } else if (type === 3) {
    text = "Assalomu alaykum! VIP mehmonlarimiz uchun alohida sovg'alarimiz va maxsus o'rinlarimiz tayyorlab qo'yilgan.";
  }

  textarea.value = text;
  counter.innerText = `${text.length} / 300`;
  textarea.focus();
}