// ============================================================================
// TOYO LEMBAH HIJAU - COMPLETE JAVASCRIPT
// AI Chatbot + Animations + Interactions
// ============================================================================

// ================================ AOS INIT ==================================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
});

// ================================ SMOOTH SCROLL =============================
document.addEventListener('DOMContentLoaded', function() {
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ================================ VILLA BUTTON ==============================
document.addEventListener('DOMContentLoaded', function() {
    const availabilityButtons = document.querySelectorAll('.villa-cta');
    
    availabilityButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const villaCard = this.closest('.bg-white, .max-w-4xl');
            let villaName = 'Vila';
            if (villaCard) {
                const titleElement = villaCard.querySelector('h3');
                if (titleElement) {
                    villaName = titleElement.innerText;
                }
            }
            
            showCustomAlert(`✨ Informasi Ketersediaan ${villaName} ✨\n\nSilakan hubungi tim kami via WhatsApp atau hubungi resepsionis untuk detail harga dan ketersediaan kamar.`);
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});

// ================================ CUSTOM ALERT ==============================
function showCustomAlert(message) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4';
    modal.style.animation = 'fadeIn 0.3s ease-out';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'bg-white rounded-2xl p-5 sm:p-6 max-w-md w-full mx-4 text-center transform transition-all';
    modalContent.innerHTML = `
        <div class="w-14 h-14 sm:w-16 sm:h-16 bg-[#0D9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-calendar-check text-[#0D9488] text-xl sm:text-2xl"></i>
        </div>
        <p class="text-gray-700 whitespace-pre-line mb-5 sm:mb-6 text-sm sm:text-base">${message}</p>
        <div class="flex gap-3 justify-center">
            <button class="cancel-btn bg-gray-200 text-gray-700 px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition text-sm sm:text-base">Tutup</button>
            <button class="wa-btn bg-green-500 text-white px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition text-sm sm:text-base">
                <i class="fab fa-whatsapp mr-2"></i>Hubungi WA
            </button>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    if (!document.querySelector('#modal-animation')) {
        const style = document.createElement('style');
        style.id = 'modal-animation';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    };
    
    modal.querySelector('.cancel-btn').addEventListener('click', closeModal);
    modal.querySelector('.wa-btn').addEventListener('click', () => {
        window.open('https://wa.me/6281234567890', '_blank');
        closeModal();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// ================================ LIGHTBOX GALLERY ==========================
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img.src;
            const imgAlt = img.alt;
            
            const lightbox = document.createElement('div');
            lightbox.className = 'fixed inset-0 bg-black/90 flex items-center justify-center z-[200] cursor-pointer p-4';
            lightbox.innerHTML = `
                <div class="relative max-w-4xl max-h-[90vh] w-full">
                    <img src="${imgSrc}" alt="${imgAlt}" class="w-full h-full object-contain rounded-lg">
                    <button class="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl hover:text-gray-300 transition w-10 h-10 sm:w-auto sm:h-auto">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.tagName === 'BUTTON') {
                    lightbox.remove();
                    document.body.style.overflow = '';
                }
            });
        });
    });
});

// ================================ PARALLAX HERO =============================
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < 600) {
                heroSection.style.opacity = 1 - scrolled / 1000;
            }
        });
    }
});

// ============================================================================
// ================================ AI CHATBOT ================================
// ============================================================================

// ================================ KNOWLEDGE BASE ============================
const knowledgeBase = {
    nama: "Toyo Lembah Hijau",
    alamat: "Yogyakarta, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    jamKolam: "08.00 - 17.00 WIB (Setiap Hari)",
    jamResepsionis: "24 Jam",
    
    hargaVilaKeluarga: "Rp 850.000 - 1.200.000 per malam",
    hargaVilaSuite: "Rp 1.200.000 - 1.800.000 per malam",
    hargaVilaGroup: "Rp 2.100.000 - 3.000.000 per malam",
    hargaTiketKolam: "Rp 35.000 (weekday) / Rp 45.000 (weekend)",
    
    kapasitasVilaKeluarga: "4-6 orang",
    kapasitasVilaSuite: "2 orang",
    kapasitasVilaGroup: "8-10 orang",
    
    fasilitasKolam: "Kolam dewasa dengan perosotan air, kolam anak dangkal, area bermain air",
    fasilitasVila: "AC, WiFi cepat, Smart TV, dapur kecil, kamar mandi private, teras",
    fasilitasUmum: "Kantin, Musholla, Kamar bilas, Toilet bersih, Parkir luas, CCTV, Security 24 jam",
    fasilitasTambah: "Gazebo, spot foto instagramable, area barbekyu, ruang serbaguna",
    
    whatsapp: "+62 812-3456-7890",
    instagram: "@toyolembahhijau",
    email: "reservasi@toyolembah.com",
};

// ================================ AI RESPONSE ENGINE =========================
function getAIResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // 1. Harga dan Promo
    if (message.match(/(harga|berapa|biaya|price|cost|mahal|murah|promo|diskon)/)) {
        if (message.match(/(vila|villa|keluarga|menginap|inap)/)) {
            return `🏠 Untuk harga vila keluarga di ${knowledgeBase.nama} mulai dari ${knowledgeBase.hargaVilaKeluarga}. 
            
📝 Detail harga:
• Weekday: Mulai Rp 850.000/malam
• Weekend/Holiday: Mulai Rp 1.200.000/malam
• Sudah termasuk breakfast untuk 4 orang
• Free akses kolam renang selama menginap

💡 Ada promo menarik untuk booking minimal 3 malam, diskon 10%! Ada yang bisa saya bantu lagi? 😊`;
        }
        
        if (message.match(/(suite|deluxe|romantis|couple)/)) {
            return `💕 Untuk Vila Suite Deluxe di ${knowledgeBase.nama}:
            
💰 Harga: ${knowledgeBase.hargaVilaSuite}
• Kapasitas: ${knowledgeBase.kapasitasVilaSuite}
• Fasilitas: King bed, bathtub, private pool view
• Free WiFi, breakfast for 2, welcome drink

🌙 Special honeymoon package tersedia dengan dekorasi romantis!`;
        }
        
        if (message.match(/(group|rombongan|besar|10|8)/)) {
            return `👨‍👩‍👧‍👦 Untuk Vila Group (rombongan) di ${knowledgeBase.nama}:
            
💰 Harga: ${knowledgeBase.hargaVilaGroup}
• Kapasitas: ${knowledgeBase.kapasitasVilaGroup}
• Terdiri dari: 4 kamar tidur + ruang keluarga besar
• Fasilitas BBQ pit, dapur besar, ruang makan luas

🎉 Perfect untuk acara keluarga atau gathering!`;
        }
        
        if (message.match(/(tiket|kolam|masuk|renang|weekend|weekday)/)) {
            return `🎟️ Harga tiket Kolam Renang ${knowledgeBase.nama}:
            
• Weekday (Senin-Jumat): ${knowledgeBase.hargaTiketKolam.split('/')[0]}
• Weekend & Libur Nasional: ${knowledgeBase.hargaTiketKolam.split('/')[1]}
• Anak di bawah 3 tahun: GRATIS
• Diskon grup (min 10 orang): 15%

🏊 Tiket sudah termasuk akses semua wahana air dan gazebo!`;
        }
        
        return `💵 Informasi harga di ${knowledgeBase.nama}:

🏠 Vila Keluarga: ${knowledgeBase.hargaVilaKeluarga}
💑 Vila Suite Deluxe: ${knowledgeBase.hargaVilaSuite}
👨‍👩‍👧‍👦 Vila Group: ${knowledgeBase.hargaVilaGroup}
🎟️ Tiket Kolam Renang: ${knowledgeBase.hargaTiketKolam}

Ada promo spesial untuk booking 2 malam ke atas! Mau detail lebih lanjut? ✨`;
    }
    
    // 2. Fasilitas
    if (message.match(/(fasilitas|wahana|kolam|perosotan|gazebo|spot foto|instagram|kantin|musholla|parkir)/)) {
        if (message.match(/(kolam|renang|air|perosotan)/)) {
            return `🏊‍♂️ Fasilitas Kolam Renang ${knowledgeBase.nama}:
            
• Kolam dewasa dengan perosotan air (tinggi 3 meter!)
• Kolam anak dengan kedalaman 50-80 cm
• Area bermain air dengan pancuran
• Sistem filtrasi air canggih (air selalu jernih)
• Lifeguard profesional selama jam operasional

🤩 Seru banget buat liburan keluarga!`;
        }
        
        if (message.match(/(vila|penginapan|kamar|tidur|ac|wifi|tv)/)) {
            return `🏠 Fasilitas Vila di ${knowledgeBase.nama}:
            
✅ ${knowledgeBase.fasilitasVila}
• Perlengkapan mandi premium
• Tea set & coffee maker
• Lemari pakaian, sandal hotel
• Room service terbatas

Semua vila memiliki pemandangan langsung ke area hijau atau kolam renang!`;
        }
        
        if (message.match(/(spot foto|instagram|foto|selfie|instagramable)/)) {
            return `📸 Spot Foto Instagramable di ${knowledgeBase.nama}:
            
📍 Infinity pool dengan latar belakang pepohonan
📍 Dinding tropis dengan mural artistik
📍 Ayunan bambu di tepi kolam
📍 Gazebo minimalis dengan lampu hias
📍 Jembatan kayu di atas kolam ikan

✨ Setiap sudut instagramable! Bawa kamera terbaik Anda ya! 📷`;
        }
        
        return `🏆 Fasilitas Lengkap ${knowledgeBase.nama}:

🏊 Kolam Renang dewasa & anak + perosotan
🏠 Vila privat dengan fasilitas premium
🌿 Gazebo & area bersantai rindang
📸 Spot foto instagramable
🍽️ Kantin dengan menu beragam
🕌 Musholla yang nyaman
🚿 Kamar bilas & toilet bersih
🅿️ Area parkir luas & aman
🔒 Security & CCTV 24 jam

Lengkap banget kan? 🎉 Ada yang ingin ditanyakan lagi?`;
    }
    
    // 3. Kapasitas
    if (message.match(/(kapasitas|berapa orang|muat|keluarga|rombongan|besar)/)) {
        return `👥 Kapasitas Villa di ${knowledgeBase.nama}:
    
🏠 Villa Keluarga: ${knowledgeBase.kapasitasVilaKeluarga}
   (2 kamar tidur + sofa bed)

💑 Villa Suite: ${knowledgeBase.kapasitasVilaSuite}
   (1 kamar tidur utama + ruang tamu)

👨‍👩‍👧‍👦 Villa Group: ${knowledgeBase.kapasitasVilaGroup}
   (4 kamar tidur + ruang keluarga besar)

📞 Untuk rombongan lebih dari 15 orang, kami bisa atur paket khusus!`;
    }
    
    // 4. Jam operasional
    if (message.match(/(jam|operasional|buka|tutup|hari|senin|minggu|buka sekarang)/)) {
        return `⏰ Jam Operasional ${knowledgeBase.nama}:
    
🏊 Kolam Renang: ${knowledgeBase.jamKolam}
🏠 Resepsionis Villa: ${knowledgeBase.jamResepsionis}
📞 Layanan Customer Service: 08.00 - 21.00 WIB

✨ Setiap hari termasuk hari libur nasional TETAP BUKA!
Check-in villa: 14.00 WIB | Check-out: 12.00 WIB

Mau reservasi untuk tanggal berapa? 😊`;
    }
    
    // 5. Lokasi dan rute
    if (message.match(/(lokasi|alamat|rute|maps|gimana caranya|transportasi|menuju)/)) {
        return `📍 Lokasi ${knowledgeBase.nama}:
    
Alamat: ${knowledgeBase.alamat}

🚗 Cara menuju lokasi:
• Dari pusat Kota Yogyakarta: ± 20 menit
• Dari Bandara YIA: ± 1 jam
• Dari Stasiun Tugu: ± 25 menit

🚙 Transportasi:
• Bisa menggunakan Grab/Gojek
• Tersedia layanan antar jemput (dengan biaya tambahan)
• Area parkir luas untuk mobil pribadi & bus

📌 Buka Google Maps di footer website untuk navigasi langsung!`;
    }
    
    // 6. Kontak dan reservasi
    if (message.match(/(kontak|reservasi|booking|pesan|hubungi|cs|customer service|telepon)/)) {
        if (message.match(/(wa|whatsapp)/)) {
            return `📱 Hubungi kami via WhatsApp untuk reservasi cepat:
      
💬 Nomor: ${knowledgeBase.whatsapp}
⏰ Fast response: 08.00 - 21.00 WIB

Kirimkan:
1. Nama pemesan
2. Tanggal check-in/out
3. Jumlah orang
4. Tipe vila yang diinginkan

Tim kami akan segera membalas! 🚀`;
        }
        
        if (message.match(/(ig|instagram|sosial media)/)) {
            return `📷 Follow Instagram kami untuk update promo & kegiatan seru:
      
✨ Instagram: ${knowledgeBase.instagram}
• Lihat foto-foto pengunjung
• Dapatkan info promo terbaru
• Ikuti giveaway menarik

Follow dan mention kami untuk repost! 📸`;
        }
        
        return `📞 Kontak & Reservasi ${knowledgeBase.nama}:
    
💬 WhatsApp: ${knowledgeBase.whatsapp}
📷 Instagram: ${knowledgeBase.instagram}
📧 Email: ${knowledgeBase.email}
📍 Alamat: ${knowledgeBase.alamat}

Respon tercepat via WhatsApp! Klik tombol WA di website untuk chat langsung. 💚`;
    }
    
    // 7. Promo diskon
    if (message.match(/(promo|diskon|hemat|paket|bundling|gratis)/)) {
        return `🎉 Promo Spesial ${knowledgeBase.nama}:
    
✨ EARLY BIRD: Booking H-30 diskon 15%
✨ FAMILY PACK: 2 malam + free 1 tiket kolam anak
✨ CORPORATE/GROUP: Min 5 vila diskon 20%
✨ WEEKEND GETAWAY: Free breakfast for all

🔥 Promo berlaku terbatas! Booking sekarang sebelum kehabisan!`;
    }
    
    // 8. Pembayaran
    if (message.match(/(bayar|pembayaran|transfer|kartu kredit|cash|qris|dp)/)) {
        return `💳 Metode Pembayaran ${knowledgeBase.nama}:
    
✅ Transfer Bank (BCA, Mandiri, BRI, BNI)
✅ Cash (di tempat)
✅ QRIS (Semua E-Wallet)
✅ Kartu Kredit/Debit (Visa/Mastercard)

📌 Untuk reservasi villa:
• DP 50% untuk konfirmasi booking
• Pelunasan H-1 check-in

💡 Booking online dapat potongan 5%!`;
    }
    
    // 9. Event dan acara
    if (message.match(/(event|acara|ulang tahun|party|gathering|reuni)/)) {
        return `🎊 Event & Acara di ${knowledgeBase.nama}:
    
Tersedia paket spesial untuk:
• 🎂 Ulang tahun anak
• 🥳 Family gathering
• 💍 Lamaran / engagement
• 👔 Company outing
• 🎓 Reuni keluarga/almamater

📞 Kontak kami untuk custom paket sesuai kebutuhan! Termasuk dekorasi, catering, dan MC.`;
    }
    
    // 10. Wisata sekitar
    if (message.match(/(sekitar|dekat|wisata|pariwisata|liburan lain|objek wisata)/)) {
        return `🗺️ Destinasi wisata di sekitar ${knowledgeBase.nama}:
    
📍 Pantai Parangtritis (20 menit)
📍 Candi Prambanan (30 menit)
📍 Malioboro (25 menit)
📍 Tebing Breksi (15 menit)
📍 Goa Jomblang (45 menit)

💡 Rekomendasi itinerary 2 hari 1 malam:
Day 1: Check-in villa → Kolam renang → BBQ malam
Day 2: Sarapan → Wisata sekitar → Check-out

Seru kan? 😊`;
    }
    
    // 11. Sapaan
    if (message.match(/(hai|halo|hello|hey|selamat pagi|selamat siang|selamat sore|selamat malam)/)) {
        return `Halo juga! 👋 Selamat datang di ${knowledgeBase.nama}!

Ada yang bisa saya bantu hari ini? Silakan tanyakan tentang:

🏠 Harga & Promo
🏊 Fasilitas lengkap
📍 Lokasi & Rute
📅 Reservasi & Kontak
🎉 Event & Acara

Tanyakan apapun, saya siap membantu! 😊`;
    }
    
    // 12. Terima kasih
    if (message.match(/(terima kasih|makasih|thanks|thank you)/)) {
        return `Sama-sama! 🙏 Senang bisa membantu Anda.

Ada lagi yang ingin ditanyakan tentang ${knowledgeBase.nama}? Atau mungkin ingin langsung reservasi?

Klik tombol WhatsApp di pojok kanan bawah untuk booking cepat ya! 💚

Selamat berlibur! 🎉`;
    }
    
    // 13. Hewan peliharaan
    if (message.match(/(hewan|peliharaan|dog|cat|binatang|pet)/)) {
        return `🐕 Kebijakan Hewan Peliharaan di ${knowledgeBase.nama}:
    
✅ Area kolam renang: Tidak mengizinkan hewan
✅ Area villa: Hanya area tertentu yang pet-friendly
📌 Syarat: harus dalam pengawasan, tidak mengganggu tamu lain

💡 Rekomendasi: Hubungi kami sebelum booking untuk informasi detail area pet-friendly.`;
    }
    
    // 14. Default - AI tetap mencoba membantu
    return `🤖 Terima kasih atas pertanyaannya!

Saya adalah AI Assistant ${knowledgeBase.nama}. Pertanyaan Anda: "${userMessage.substring(0, 100)}${userMessage.length > 100 ? '...' : ''}"

📌 Informasi yang saya miliki:
• ✅ Harga & Promo
• ✅ Fasilitas lengkap (kolam, vila, gazebo, spot foto)
• ✅ Lokasi & Rute ke Yogyakarta
• ✅ Reservasi & Kontak (WA, IG, Email)
• ✅ Jam operasional (08.00-17.00, villa 24 jam)
• ✅ Kapasitas villa (2-10 orang)
• ✅ Event & acara

Bisa tolong ulangi pertanyaan Anda dengan lebih spesifik? Atau pilih topik di bawah ini:

💰 Harga | 🏊 Fasilitas | 🏠 Villa | 📍 Lokasi | ⏰ Jam

Saya akan dengan senang hati membantu! 😊`;
}

// ================================ CHATBOT UI ================================
document.addEventListener('DOMContentLoaded', function() {
    
    // DOM Elements
    let chatbotContainer = document.getElementById('chatbot-container');
    let chatbotToggle = document.getElementById('chatbot-toggle');
    let chatbotClose = document.getElementById('chatbot-close');
    let chatbotMessages = document.getElementById('chatbot-messages');
    let chatbotInput = document.getElementById('chatbot-input');
    let chatbotSend = document.getElementById('chatbot-send');
    
    let isFirstOpen = true;
    let isTyping = false;
    
    // Fungsi untuk menampilkan animasi typing yang realistis
    function showTypingAnimation() {
        if (isTyping) return;
        isTyping = true;
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.id = 'typing-message';
        typingDiv.innerHTML = `
            <div class="bot-thinking">
                <div class="typing-animation">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Fungsi untuk menghapus animasi typing
    function removeTypingAnimation() {
        const typingDiv = document.getElementById('typing-message');
        if (typingDiv) {
            typingDiv.remove();
        }
        isTyping = false;
    }
    
    // Fungsi untuk menambahkan pesan ke chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        
        // Format teks untuk bot message (support line breaks dan bold)
        if (!isUser) {
            bubble.innerHTML = text.replace(/\n/g, '<br>').replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
        } else {
            bubble.textContent = text;
        }
        
        messageDiv.appendChild(bubble);
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Fungsi untuk mengirim pesan sambutan dengan animasi typing
    function sendWelcomeMessage() {
        showTypingAnimation();
        
        // Simulasi AI sedang mengetik (delay 1-2 detik)
        setTimeout(() => {
            removeTypingAnimation();
            
            const welcomeText = `Halo! 👋 Saya **AI Assistant Toyo Lembah Hijau**.

Ada yang bisa saya bantu? Silakan tanyakan apapun tentang:

💰 **Harga & Promo**
🏊 **Fasilitas lengkap**
🏠 **Detail Villa**
📍 **Lokasi & Rute**
📅 **Reservasi & Kontak**
⏰ **Jam Operasional**
🎉 **Event & Acara**

Tanyakan dengan bahasa santai ya, saya akan jawab sebaik mungkin! 😊`;
            
            addMessage(welcomeText, false);
        }, 1000);
    }
    
    // Fungsi utama untuk memproses pesan user dengan AI
    async function processUserMessage(message) {
        if (!message.trim()) return;
        
        // Add user message
        addMessage(message, true);
        
        // Clear input
        chatbotInput.value = '';
        
        // Show typing animation with random duration for realism (500-1500ms)
        showTypingAnimation();
        
        // Simulate AI thinking time (realistic delay)
        const thinkingTime = 600 + Math.random() * 900;
        
        setTimeout(() => {
            removeTypingAnimation();
            
            // Get AI response based on user message
            const aiResponse = getAIResponse(message);
            
            // Add bot response with slight character-by-character effect
            addMessage(aiResponse, false);
            
        }, thinkingTime);
    }
    
    // Toggle chatbot
    function toggleChatbot() {
        if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
            chatbotContainer.style.display = 'flex';
            // Sembunyikan badge
            const badge = document.querySelector('.chatbot-badge');
            if (badge) badge.style.display = 'none';
            
            // Kirim pesan sambutan jika pertama kali buka
            if (isFirstOpen) {
                isFirstOpen = false;
                sendWelcomeMessage();
            }
        } else {
            chatbotContainer.style.display = 'none';
        }
    }
    
    // Send message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            processUserMessage(message);
        }
    }
    
    // Handle enter key
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    }
    
    // Attach event listeners
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', toggleChatbot);
    }
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', toggleChatbot);
    }
    
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', handleKeyPress);
    }
    
    // Initial state - chatbot hidden
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
    }
    
    // Optional: Auto-focus input when chatbot opens
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'style') {
                if (chatbotContainer.style.display === 'flex') {
                    setTimeout(() => {
                        if (chatbotInput) chatbotInput.focus();
                    }, 300);
                }
            }
        });
    });
    
    if (chatbotContainer) {
        observer.observe(chatbotContainer, { attributes: true });
    }
});

// ================================ END OF FILE ================================