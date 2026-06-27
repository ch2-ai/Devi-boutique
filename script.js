/* ==========================================================================
   DEVI ATELIER & BOUTIQUE — INTERACTIVE JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Design Collection Database ---
  const designsDatabase = {
    1: {
      title: "Royal Crimson Bridal Lehenga",
      category: "bridal",
      categoryLabel: "Bridal Lehenga",
      code: "DA-BL-01",
      fabrics: "Premium Velvet, Silk Organza",
      embroidery: "Zardozi, Resham Threadwork, Gold Bead Highlights",
      fittime: "5 - 7 Weeks",
      desc: "An exquisite deep crimson red bridal lehenga crafted on heritage velvet, adorned with heavy traditional zardozi patterns, matching gold bead lines, and paired with double matching organza dupattas for a classic royal drape."
    },
    2: {
      title: "Champagne Sequined Evening Gown",
      category: "indo-western",
      categoryLabel: "Indo-Western",
      code: "DA-IW-02",
      fabrics: "Imported Net, Satin Lining",
      embroidery: "Hand-stitched Champagne Sequins, Crystal Drops",
      fittime: "3 - 4 Weeks",
      desc: "A gorgeous modern evening gown featuring a sculpted corset bodice and a voluminous layered skirt, completely hand-embellished with glittering champagne-toned sequins and fine crystal lining that catches the light beautifully."
    },
    3: {
      title: "Pastel Rose Floral Anarkali",
      category: "salwars",
      categoryLabel: "Anarkali & Suits",
      code: "DA-AK-03",
      fabrics: "Pure Georgette, Shantoon Inner",
      embroidery: "Fine Kashmiri Aari Threadwork, Pearl Borders",
      fittime: "2 - 3 Weeks",
      desc: "An elegant, lightweight pastel rose pink Anarkali suit with 32 flared panels. Styled with detailed ivory floral threadwork on the yoke and sleeves, finished with delicate white pearl line borders."
    },
    4: {
      title: "Teal Hand-Crafted Cutwork Blouse",
      category: "blouses",
      categoryLabel: "Custom Blouses",
      code: "DA-CB-04",
      fabrics: "Raw Silk",
      embroidery: "Cutwork Borders, Kundan Stones, Zari Tassels",
      fittime: "10 - 14 Days",
      desc: "A bespoke teal raw silk saree blouse designed with intricate geometric cutwork along the back and sleeves, accented with gold Kundan stone settings and handmade zari hanging tassels."
    },
    5: {
      title: "Emerald Banarasi Silk Saree Styling",
      category: "sarees",
      categoryLabel: "Designer Sarees",
      code: "DA-SR-05",
      fabrics: "Pure Banarasi Katan Silk",
      embroidery: "Zari Weave borders, Hand-stitched Sequin Clusters",
      fittime: "3 Weeks",
      desc: "A classic emerald green Banarasi silk saree customized with a custom structured gold border attachment and tiny scattered sequin highlights throughout the body, complete with a matching designer blouse."
    },
    6: {
      title: "Peach Organza Mirror-Work Lehenga",
      category: "bridal",
      categoryLabel: "Bridal Lehenga",
      code: "DA-BL-06",
      fabrics: "Premium Silk Organza, Banarasi Brocade",
      embroidery: "Real Mirror Work, Foil Print, Gota Patti Border",
      fittime: "4 - 5 Weeks",
      desc: "A fresh, contemporary peach lehenga in silk organza featuring sparkling real mirror embroidery on the blouse and waistband, offset by an elegant Gota Patti border and a floral foil print drape."
    },
    7: {
      title: "Royal Velvet Sweetheart Neck Blouse",
      category: "blouses",
      categoryLabel: "Custom Blouses",
      code: "DA-CB-07",
      fabrics: "Silk Velvet",
      embroidery: "Kardana Beads, French Knots, Zari Embroidery",
      fittime: "10 - 14 Days",
      desc: "A deep royal blue sweetheart neckline velvet blouse embellished with delicate French knot flowers and gold kardana tube beads. Perfect pairing for heritage silk sarees."
    },
    8: {
      title: "Modern Pre-Stitched Ruffled Saree",
      category: "indo-western",
      categoryLabel: "Indo-Western",
      code: "DA-IW-08",
      fabrics: "Crepe Georgette, Sequined Net",
      embroidery: "Fine Sequin Border, Embroidered Waist-Belt",
      fittime: "3 Weeks",
      desc: "A modern fusion outfit featuring a pre-stitched teal crepe saree with tiered ruffles, paired with a matching fully-sequined sleeveless blouse and a hand-worked decorative fabric belt."
    },
    9: {
      title: "Magenta Silk Anarkali Suit",
      category: "salwars",
      categoryLabel: "Anarkali & Suits",
      code: "DA-AK-09",
      fabrics: "Chanderi Silk, Silk Organza Dupatta",
      embroidery: "Gota Patti Motifs, Zari Outline",
      fittime: "2 - 3 Weeks",
      desc: "Traditional hot magenta Chanderi silk suit with classic flared styling. Embellished with classic Rajasthani Gota Patti floral motifs and a sheer organza dupatta with scalloped borders."
    },
    10: {
      title: "Golden Embroidered Zari Blouse",
      category: "blouses",
      categoryLabel: "Custom Blouses",
      code: "DA-CB-10",
      fabrics: "Heavy Brocade",
      embroidery: "Antique Gold Zardozi, Drop Bead Hangings",
      fittime: "12 - 15 Days",
      desc: "A versatile golden brocade blouse featuring detailed antique gold zardozi stitching on the sleeves and neck, finished with elegant pearl and gold drop beads along the lower hem."
    },
    11: {
      title: "Signature Saree Pre-Pleating & Box Folding",
      category: "prepleating",
      categoryLabel: "Saree Pre-Pleating",
      code: "DA-SP-11",
      fabrics: "Silk, Georgette, Organza, Cotton",
      embroidery: "Bespoke Pressing, Exact Pleat Customization",
      fittime: "24 - 48 Hours",
      desc: "Our premium signature pre-pleating service. We measure and fold the pleats to your height, steam-press them to hold shape, and pack the saree in a travel-ready box. Wear your saree in under 2 minutes!"
    },
    12: {
      title: "Bridal Silk Saree Pre-Pleated Setup",
      category: "prepleating",
      categoryLabel: "Saree Pre-Pleating",
      code: "DA-SP-12",
      fabrics: "Heavy Kanjeevaram, Banarasi Silk",
      embroidery: "Shoulder Pleat Setting, Starch Setting",
      fittime: "24 - 48 Hours",
      desc: "Specialist bridal saree pre-pleating. Perfect drape alignment for heavy silks, ensuring you remain comfortable and pristine all day without pins sliding or pleats shifting."
    },
    13: {
      title: "Magenta Silk Thread Bridal Bangle Set",
      category: "bangles",
      categoryLabel: "Thread Bangles",
      code: "DA-TB-13",
      fabrics: "Silk Thread, Acrylic Bases",
      embroidery: "Handcrafted Kundan Work, Gold Stone Chains",
      fittime: "3 - 5 Days",
      desc: "Bespoke magenta silk thread bangles customized with sparkling gold stone chains and kundan flower patterns to match your wedding attire."
    },
    14: {
      title: "Emerald & Gold Designer Bangle Set",
      category: "bangles",
      categoryLabel: "Thread Bangles",
      code: "DA-TB-14",
      fabrics: "Silk Thread, Metal Liners",
      embroidery: "Zircon Stone Lacing, Bead Accents",
      fittime: "2 - 3 Days",
      desc: "Handcrafted emerald green silk thread bangles paired with gold bead accents and shimmering zircon stone borders."
    },
    15: {
      title: "Peacock Blue Kundan Thread Bangles",
      category: "bangles",
      categoryLabel: "Thread Bangles",
      code: "DA-TB-15",
      fabrics: "Premium Silk Thread",
      embroidery: "Rhinestone Patterns, Kundan Settings",
      fittime: "2 - 3 Days",
      desc: "Deep peacock blue thread bangles decorated with beautiful kundan settings and gold velvet thread overlays."
    },
    16: {
      title: "Pastel Pink Silk Thread Bangles",
      category: "bangles",
      categoryLabel: "Thread Bangles",
      code: "DA-TB-16",
      fabrics: "Silk Thread, Plastic Base",
      embroidery: "Moti (Pearl) Laces, Gold Threads",
      fittime: "2 - 3 Days",
      desc: "Soft pink thread bangles wrapped with gold threads and white moti strings for a classic sweet appearance."
    },
    17: {
      title: "Royal Maroon Bridal Chooda Set",
      category: "bangles",
      categoryLabel: "Thread Bangles",
      code: "DA-TB-17",
      fabrics: "Heavy Silk Thread, Velvet Bases",
      embroidery: "Heavy Kundan Flowers, Multi-stone Rows",
      fittime: "3 - 5 Days",
      desc: "A stunning multi-piece heavy bridal bangle set in royal maroon and gold threadwork featuring kundan highlights."
    },
    18: {
      title: "Peach Orange Pre-Pleated Lehenga Saree",
      category: "prepleating",
      categoryLabel: "Saree Pre-Pleating",
      code: "DA-SP-18",
      fabrics: "Premium Organza, Crepe Silk Lining",
      embroidery: "Gota Patti Work, Satin Box Folds",
      fittime: "24 - 48 Hours",
      desc: "A stunning peach orange lehenga-style saree drape featuring pre-pleated, steam-pressed folds ready to wear in under 2 minutes. Elegant structure with box folding convenience."
    },
    19: {
      title: "Pastel Pink Floral Pre-Pleated Saree",
      category: "prepleating",
      categoryLabel: "Saree Pre-Pleating",
      code: "DA-SP-19",
      fabrics: "Soft Silk, Georgette Blend",
      embroidery: "Pre-folded Shoulder Pleats, Waist Drape Setting",
      fittime: "24 - 48 Hours",
      desc: "An elegant pastel pink floral saree pre-pleated and box-folded with custom-measured folds according to height, making bridal and festive drapes quick and hassle-free."
    },
    20: {
      title: "Golden Brocade Kids Anarkali Dress",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-20",
      fabrics: "Silk Brocade, Cotton Lining",
      embroidery: "Gota Patti Lace Borders, Contrast Piping",
      fittime: "7 - 10 Days",
      desc: "A rich, traditional gold brocade kids Anarkali suit with contrast hot pink borders and comfortable cotton lining."
    },
    21: {
      title: "Yellow Floral Kids Dress",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-21",
      fabrics: "Satin, Soft Net Layers",
      embroidery: "Satin Bow accents, Scalloped Edges",
      fittime: "7 - 10 Days",
      desc: "Bright yellow celebratory frock featuring floral overlays and a beautiful handmade rear satin bow."
    },
    22: {
      title: "Sky Blue Layered Tulle Gown",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-22",
      fabrics: "Layered Tulle, Silk Bodice",
      embroidery: "Satin Ribbons, Shimmering Bead Details",
      fittime: "7 - 10 Days",
      desc: "Princess-style layered blue tulle gown with a soft inner cotton layer to keep kids comfortable throughout the event."
    },
    23: {
      title: "Red Velvet Kids Festive Lehenga",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-23",
      fabrics: "Micro Velvet, Chanderi Silk",
      embroidery: "Zari embroidery, Kundan Necklines",
      fittime: "7 - 10 Days",
      desc: "Royal red velvet lehenga choli set tailored to fit kids comfortably, adorned with gold zari details."
    },
    24: {
      title: "Mint Green Organza Kids Frock",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-24",
      fabrics: "Organza, Cotton lining",
      embroidery: "Lightweight Layers, Ribbon Sash",
      fittime: "7 - 10 Days",
      desc: "A fresh and playful mint green frock featuring multiple lightweight organza layers and a soft pink sash ribbon."
    },
    25: {
      title: "Royal Blue Kids Pattu Langa Dress",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-25",
      fabrics: "Kanchipuram Silk, Zari borders",
      embroidery: "Traditional Border styling, Zari piping",
      fittime: "7 - 10 Days",
      desc: "Traditional South Indian style silk skirt and blouse set for kids, made from pure Kanchipuram silk with gold borders."
    },
    26: {
      title: "Lavender Net Kids Party Gown",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-26",
      fabrics: "Soft Net, Satin Lining",
      embroidery: "Sequined Bodice, Tulle layers",
      fittime: "7 - 10 Days",
      desc: "A shiny lavender birthday gown with a sequined corset top and fluffy layered net skirt."
    },
    27: {
      title: "Festive Orange Kids Salwar Kameez",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-27",
      fabrics: "Silk Crepe, Georgette Dupatta",
      embroidery: "Simple Mirror borders, Zari trim",
      fittime: "7 - 10 Days",
      desc: "Bright orange kids salwar kameez featuring mirror highlights on the collar and a matching lightweight dupatta."
    },
    28: {
      title: "Maroon Velvet Kids Frock",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-28",
      fabrics: "Silk Velvet, Cotton trim",
      embroidery: "Lace details, Sweetheart collars",
      fittime: "7 - 10 Days",
      desc: "Rich maroon velvet frock featuring soft cotton collar borders, designed to be warm and elegant."
    },
    29: {
      title: "Pink Ruffled Kids Designer Gown",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-29",
      fabrics: "Net, Soft Lining",
      embroidery: "Layered Ruffles, Sequin work",
      fittime: "7 - 10 Days",
      desc: "A modern tiered ruffled gown in candy pink, featuring a shimmering bodice perfect for birthdays."
    },
    30: {
      title: "Green Silk Kids Kurta Set",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-30",
      fabrics: "Pure Raw Silk",
      embroidery: "Thread embroidery, Gold Buttons",
      fittime: "7 - 10 Days",
      desc: "Traditional green silk kurta pajama set finished with elegant gold button highlights and simple neckline stitching."
    },
    31: {
      title: "Golden Organza Kids Lehenga Set",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-31",
      fabrics: "Organza, Cotton lining",
      embroidery: "Zari Lace borders, Hanging Tassels",
      fittime: "7 - 10 Days",
      desc: "Golden organza lehenga choli with soft cotton liners, finished with tiny gold hangings and laces."
    },
    32: {
      title: "Navy Blue Silk Kids Party Frock",
      category: "kids",
      categoryLabel: "Kids Wear",
      code: "DA-KD-32",
      fabrics: "Raw Silk, Net layers",
      embroidery: "Gold Ribbon borders, Stone details",
      fittime: "7 - 10 Days",
      desc: "A smart raw silk navy blue frock with gold ribbon highlights and sparkling stone linings on the collar."
    }
  };

  // --- State Variables ---
  let activeVisibleIds = []; // Stores IDs of currently visible designs based on filter
  let currentDesignIndex = 0; // Tracks index within activeVisibleIds
  const whatsappBaseNumber = "917382955659"; // Devi's Boutique WhatsApp Contact

  // --- Element Selectors ---
  const navbar = document.getElementById('navbar');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  // Lightbox selectors
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxMainImg = document.getElementById('lightbox-main-img');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCode = document.getElementById('lightbox-code');
  const lightboxFabrics = document.getElementById('lightbox-fabrics');
  const lightboxEmbroidery = document.getElementById('lightbox-embroidery');
  const lightboxFitTime = document.getElementById('lightbox-fittime');
  const lightboxInquiryBtn = document.getElementById('lightbox-inquiry-btn');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  
  // Share modal selectors
  const shareBtn = document.getElementById('header-share-btn');
  const shareModal = document.getElementById('share-modal');
  const shareModalClose = document.getElementById('share-modal-close');
  const shareQrImg = document.getElementById('share-qr-img');
  const shareLinkUrl = document.getElementById('share-link-url');
  const shareCopyBtn = document.getElementById('share-copy-btn');
  
  // Consultation Form
  const consultationForm = document.getElementById('consultation-form');

  // ==========================================================================
  // THEME MANAGEMENT (LIGHT/DARK)
  // ==========================================================================
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  }

  // ==========================================================================
  // SCROLL EFFECTS & STICKY HEADER
  // ==========================================================================
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ==========================================================================
  // MOBILE NAVIGATION
  // ==========================================================================
  mobileNavToggle.addEventListener('click', () => {
    mobileNavToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close nav on menu item click (mobile convenience)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNavToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ==========================================================================
  // GALLERY FILTERING LOGIC
  // ==========================================================================
  // Initialize visible items list
  updateVisibleItemIds('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active classes
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      const favorites = JSON.parse(localStorage.getItem('devi_favorites')) || [];
      
      // Filter portfolio DOM cards
      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const id = parseInt(item.getAttribute('data-id'));
        
        let showItem = false;
        if (filterValue === 'all') {
          showItem = true;
        } else if (filterValue === 'favorites') {
          showItem = favorites.includes(id);
        } else {
          showItem = (itemCategory === filterValue);
        }
        
        if (showItem) {
          item.classList.remove('hidden');
          // Reset card animation
          item.style.animation = 'none';
          item.offsetHeight; // Trigger reflow
          item.style.animation = null;
        } else {
          item.classList.add('hidden');
        }
      });

      // Update visible IDs list for lightbox carousel
      updateVisibleItemIds(filterValue);
    });
  });

  function updateVisibleItemIds(filter) {
    activeVisibleIds = [];
    const favorites = JSON.parse(localStorage.getItem('devi_favorites')) || [];
    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      const id = parseInt(item.getAttribute('data-id'));
      
      if (filter === 'favorites') {
        if (favorites.includes(id)) {
          activeVisibleIds.push(id);
        }
      } else if (filter === 'all' || itemCategory === filter) {
        activeVisibleIds.push(id);
      }
    });
  }

  // ==========================================================================
  // LIGHTBOX / PRODUCT DETAILS WINDOW
  // ==========================================================================
  
  // Attach click listener to cards
  portfolioItems.forEach(item => {
    const detailBtns = item.querySelectorAll('.overlay-btn, .item-inquire-btn, .portfolio-item-img-wrapper');
    const id = parseInt(item.getAttribute('data-id'));
    
    detailBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Prevent lightbox from opening if clicking the wishlist heart button
        if (e.target.closest('.wishlist-btn')) {
          return;
        }
        e.stopPropagation();
        openLightbox(id);
      });
    });
  });

  function openLightbox(designId) {
    currentDesignIndex = activeVisibleIds.indexOf(designId);
    if (currentDesignIndex === -1) currentDesignIndex = 0;
    
    populateLightboxContent(designId);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Unlock background scroll
  }

  lightboxClose.addEventListener('click', closeLightbox);
  
  // Close on outside overlay click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    }
  });

  // Carousel Next/Prev Controls
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });
  
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  function navigateLightbox(direction) {
    currentDesignIndex += direction;
    
    // Wrap around boundaries
    if (currentDesignIndex < 0) {
      currentDesignIndex = activeVisibleIds.length - 1;
    } else if (currentDesignIndex >= activeVisibleIds.length) {
      currentDesignIndex = 0;
    }
    
    const nextDesignId = activeVisibleIds[currentDesignIndex];
    populateLightboxContent(nextDesignId);
  }

  function populateLightboxContent(id) {
    const design = designsDatabase[id];
    if (!design) return;

    // Load Image & details
    lightboxMainImg.src = `images/work-${id}.jpg`;
    lightboxMainImg.alt = design.title;
    
    lightboxCategory.textContent = design.categoryLabel;
    lightboxTitle.textContent = design.title;
    lightboxDesc.textContent = design.desc;
    lightboxCode.textContent = design.code;
    lightboxFabrics.textContent = design.fabrics;
    lightboxEmbroidery.textContent = design.embroidery;
    lightboxFitTime.textContent = design.fittime;

    // Build specific WhatsApp Inquiry text
    const text = `Hi Devi! I saw your outfit "${design.title}" (Design Code: ${design.code}) on your online portfolio. I would like to inquire about pricing, fabric choices, and booking a consultation for this design.`;
    const whatsappUrl = `https://wa.me/${whatsappBaseNumber}?text=${encodeURIComponent(text)}`;
    lightboxInquiryBtn.onclick = () => {
      window.open(whatsappUrl, '_blank');
    };
  }

  // ==========================================================================
  // SHARE SHEET & QR SYSTEM
  // ==========================================================================
  shareBtn.addEventListener('click', () => {
    const currentUrl = window.location.href;
    shareLinkUrl.value = currentUrl;
    
    // Load dynamic QR Code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(currentUrl)}&color=3a2e2b&bgcolor=fcfaf7`;
    shareQrImg.src = qrUrl;
    
    // Reset copy button status
    shareCopyBtn.textContent = "Copy Link";
    shareCopyBtn.classList.remove('copied');
    
    shareModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeShareModal() {
    shareModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  shareModalClose.addEventListener('click', closeShareModal);
  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
      closeShareModal();
    }
  });

  // Copy Link action
  shareCopyBtn.addEventListener('click', () => {
    shareLinkUrl.select();
    shareLinkUrl.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(shareLinkUrl.value)
      .then(() => {
        shareCopyBtn.textContent = "Copied!";
        shareCopyBtn.classList.add('copied');
        setTimeout(() => {
          shareCopyBtn.textContent = "Copy Link";
          shareCopyBtn.classList.remove('copied');
        }, 3000);
      })
      .catch(err => {
        console.error('Could not copy link: ', err);
      });
  });

  // ==========================================================================
  // CONSULTATION FORM WHATSAPP SUBMIT
  // ==========================================================================
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('client-name').value.trim();
      const contact = document.getElementById('client-contact').value.trim();
      const outfitSelect = document.getElementById('outfit-type');
      const outfit = outfitSelect.options[outfitSelect.selectedIndex].text;
      const message = document.getElementById('client-message').value.trim();

      // Compile inquiry text
      let text = `Hi Devi! My name is ${name}. I am looking to customize a dress in the category *${outfit}*.\n\n`;
      text += `Contact WhatsApp: ${contact}\n`;
      if (message) {
        text += `Design preferences/details: "${message}"`;
      } else {
        text += `I would like to book a design consultation with you. Please guide me.`;
      }
      
      const whatsappUrl = `https://wa.me/${whatsappBaseNumber}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // ==========================================================================
  // WISHLIST LOGIC (LOCAL STORAGE & TOGGLING)
  // ==========================================================================
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');
  
  // Load and apply favorite states on load
  function initializeWishlist() {
    const favorites = JSON.parse(localStorage.getItem('devi_favorites')) || [];
    wishlistBtns.forEach(btn => {
      const id = parseInt(btn.getAttribute('data-wishlist-id'));
      const icon = btn.querySelector('i');
      
      if (favorites.includes(id)) {
        btn.classList.add('active');
        icon.className = 'fa-solid fa-heart';
      } else {
        btn.classList.remove('active');
        icon.className = 'fa-regular fa-heart';
      }
    });
  }
  
  initializeWishlist();

  // Attach click listener to wishlist buttons
  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Stop click from bubbling to card detail trigger
      
      const id = parseInt(btn.getAttribute('data-wishlist-id'));
      const icon = btn.querySelector('i');
      let favorites = JSON.parse(localStorage.getItem('devi_favorites')) || [];
      
      if (btn.classList.contains('active')) {
        // Remove from favorites
        btn.classList.remove('active');
        icon.className = 'fa-regular fa-heart';
        favorites = favorites.filter(favId => favId !== id);
      } else {
        // Add to favorites
        btn.classList.add('active');
        icon.className = 'fa-solid fa-heart';
        if (!favorites.includes(id)) {
          favorites.push(id);
        }
      }
      
      localStorage.setItem('devi_favorites', JSON.stringify(favorites));
      
      // If we are currently on the 'favorites' filter view, dynamically hide card
      const activeFilterBtn = document.querySelector('.filter-btn.active');
      if (activeFilterBtn && activeFilterBtn.getAttribute('data-filter') === 'favorites') {
        const card = btn.closest('.portfolio-item');
        if (card && !favorites.includes(id)) {
          card.classList.add('hidden');
          updateVisibleItemIds('favorites');
        }
      }
    });
  });

  // ==========================================================================
  // SCROLL REVEAL INTERSECTION OBSERVER
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
  }

});
