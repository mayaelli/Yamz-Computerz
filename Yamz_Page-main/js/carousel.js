// JavaScript for the card carousel on Services section
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,
  
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

// JavaScript for the modal card opening on click
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");

modal.style.display = "none";

// Sample data for each service (replace with actual data)
const serviceData = {
  "Sales/Services": 
    "<p style='margin-bottom: 10px;'>Previous sales of tech products, including GCash transactions, and more. We offer a variety of services, such as laptop replacements and additional product installations.</p> \
    <img src='images/services/sales-1.png' alt='Sales/Services' style='max-width: 100%; height: auto; border-radius: 5px; margin-top: 15px; margin-botton: 15px;'> \
    <img src='images/services/sales-2.png' alt='Sales/Services' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <img src='images/services/sales-3.png' alt='Sales/Services' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <img src='images/services/sales-4.png' alt='Sales/Services' style='max-width: 100%; height: auto; border-radius: 5px;'>",

  "PC Repair & Upgrades": 
    "<p style='margin-bottom: 10px;'>Records of past repair projects and upgrades performed. We handle everything from troubleshooting to complex upgrades like RAM and SSD replacements. Our team also specializes in thermal paste replacement and RGB fan installations.</p> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Desktop Re-casing</p> \
    <img src='images/services/Desktop Re-casing.png' alt='PC Repair & Upgrades' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Troubleshooting, Thermal Paste and CMOS Battery Replacement</p> \
    <img src='images/services/Troubleshooting-Thermal Paste.png' alt='PC Upgrade' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Troubleshooting</p> \
    <img src='images/services/Troubleshooting.png' alt='PC Repair & Upgrades' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• PC Screen Replacement</p> \
    <img src='images/services/PC Screen Replacement.png' alt='PC Repair & Upgrades' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Server Maintenance, WS Maintenance, LAN Maintenance</p> \
    <img src='images/services/Server Maintenance.png' alt='PC Repair & Upgrades' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Upgrade RAM to 16gb, replace SATA cable, format and install</p> \
    <img src='images/services/Upgrade RAM-replace SATA.png' alt='PC Repair & Upgrades' style='max-width: 100%; height: auto; border-radius: 5px;'> ",

  "Printing/Photocopying Services": 
    "<p style='margin-bottom: 10px;'>Previous high-quality printing and photocopying work for individuals and businesses. From large batch photocopying to customized printing jobs, we deliver professional results every time.</p> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Printer Cleaning and Refilling</p> \
    <img src='images/services/Printer Cleaning and Refilling.png' alt='Printing Services' style='max-width: 100%; height: auto; border-radius: 5px;'>",

  "Laptop Repairs": 
    "<p style='margin-bottom: 10px;'>Recent laptop repair cases handled by our team. This includes screen replacements, troubleshooting hardware issues, and software repairs. We bring your laptops back to top performance.</p> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Acer Battery Replacement</p> \
    <img src='images/services/Acer Battery Replacement.png' alt='Laptop Repairs' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Laptop Screen Replacement</p> \
    <img src='images/services/Laptop Screen Replacement.png' alt='Laptop Repairs' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Screen Replacement</p> \
    <img src='images/services/Screen Replacement.png' alt='Laptop Repairs' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Keyboard Replacement</p> \
    <img src='images/services/Keyboard Replacement.png' alt='Laptop Repairs' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Screen and Keyboard Replacement</p> \
    <img src='images/services/Screen and Keyboard Replacement.png' alt='Laptop Repairs' style='max-width: 100%; height: auto; border-radius: 5px;'>",

  "System Formatting/Installation": 
    "<p style='margin-bottom: 10px;'>Formatting and OS installation cases we've completed, helping clients set up fresh, fast systems. Whether it’s a clean install of Windows, Linux, or macOS, we ensure everything runs smoothly.</p> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Chromebook Installation</p> \
    <img src='images/services/Chromebook Installation.png' alt='System Formatting/Installation' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Format Install</p> \
    <img src='images/services/Format Install.png' alt='System Formatting/Installation' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• OS Installation and CMOS Battery Replacement</p> \
    <img src='images/services/OS Installation and CMOS Battery Replacement.png' alt='System Formatting/Installation' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Windows 11 Ultra Light Installation</p> \
    <img src='images/services/Windows 11 Ultra Light Installation.png' alt='System Formatting/Installation' style='max-width: 100%; height: auto; border-radius: 5px;'>",

  //"Software Upgrades": 
   // "<p style='margin-bottom: 10px;'>Instances of successful software upgrades, ensuring all systems are running the latest versions for security and performance. This includes major OS updates and software patches.</p> ",

  "System Development": 
    "<p style='margin-bottom: 10px;'>Custom systems developed for clients in various industries. Our tailored systems are designed to meet specific business needs, whether it's an internal management system, inventory solution, or custom web app.</p> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Landing Pages</p> \
    <img src='images/services/system-development.png' alt='System Development' style='max-width: 100%; height: auto; border-radius: 5px;'> \
    <p style='margin-bottom: 10px; font-weight: bold; margin-top: 24px;'>• Database Management Systems</p> ",

  //"CD/DVD Burning": 
  //  "<p style='margin-bottom: 10px;'>Previous CD/DVD burning projects for clients, providing reliable data storage and media sharing solutions. From audio CDs to data DVDs, we cater to all burning needs.</p>"
};



// Open modal on card click
document.querySelectorAll('.card-link').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceTitle = card.querySelector(".badge").textContent.trim();
        modalTitle.textContent = serviceTitle;
        modalBody.innerHTML = serviceData[serviceTitle] || "<p>No data available for this service.</p>";
        modal.style.display = "flex";
    });
});

// Close modal
closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};