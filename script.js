// Database Data Lukisan
const paintingsData = [
    {
        id: 1,
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503",
        category: "renaisans",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
        description: "Mona Lisa adalah lukisan minyak di atas kayu poplar buatan Leonardo da Vinci pada abad ke-16. Lukisan ini terkenal karena ekspresi subjeknya yang misterius dan teknik sfumato yang revolusioner."
    },
    {
        id: 2,
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        year: "1889",
        category: "impresionisme",
        image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
        description: "Menggambarkan pemandangan malam dari jendela kamar rumah sakit jiwa Van Gogh di Saint-Rémy-de-Provence. Pusaran langit bergelombang mencerminkan kondisi emosional sang seniman yang intens."
    },
    {
        id: 3,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: "1665",
        category: "barok",
        image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1000&q=80",
        description: "Sering disebut sebagai 'Mona Lisa dari Utara', lukisan tronie ini menampilkan seorang gadis muda berkelemben dengan anting-anting mutiara besar yang memantulkan cahaya."
    },
    {
        id: 4,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: "1485",
        category: "renaisans",
        image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1000&q=80",
        description: "Mahakarya Renaisans Italia yang menggambarkan dewi Venus muncul dari laut sebagai wanita dewasa, tiba di pantai setelah kelahirannya."
    },
    {
        id: 5,
        title: "The Great Wave off Kanagawa",
        artist: "Hokusai",
        year: "1831",
        category: "modern",
        image: "https://images.unsplash.com/photo-1579783928621-6a13d66a62d1?auto=format&fit=crop&w=1000&q=80",
        description: "Cetakan kayu Ukiyo-e yang ikonik. Menggambarkan gelombang raksasa yang mengancam perahu di lepas pantai Prefektur Kanagawa, dengan Gunung Fuji di latar belakang."
    },
    {
        id: 6,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: "1931",
        category: "modern",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80",
        description: "Lukisan surealis terkenal yang menampilkan jam-jam meleleh di lanskap yang sepi, merepresentasikan relativitas ruang dan waktu menurut alam bawah sadar."
    }
];

// DOM Elements
const filterBtns = document.querySelectorAll('.filter-btn');
const artCards = document.querySelectorAll('.art-card');
const modal = document.getElementById('artModal');
const modalCloseBtn = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.modal-overlay');

const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalCategory = document.getElementById('modalCategory');

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

// Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Toggle Active Class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        artCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Open Modal Handler
function openModal(id) {
    const data = paintingsData.find(item => item.id === parseInt(id));
    if (!data) return;

    modalImg.src = data.image;
    modalTitle.textContent = data.title;
    modalMeta.textContent = `${data.artist} • ${data.year}`;
    modalDesc.textContent = data.description;
    modalCategory.textContent = data.category;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop Scrolling
}

// Close Modal Handler
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners for Modal
artCards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openModal(id);
    });
});

document.querySelector('.open-featured-modal')?.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-id');
    openModal(id);
});

modalCloseBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close Mobile Menu on Click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
