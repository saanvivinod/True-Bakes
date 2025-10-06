document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const productModal = document.getElementById('productModal');
  const galleryModal = document.getElementById('galleryModal');
  const orderForm = document.getElementById('orderForm');
  const formMessage = document.getElementById('form-message');

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  const productDetails = {
    'chocolate-fudge': {
      image: 'assets/product-1.jpg',
      title: 'Chocolate Fudge Cake',
      description: 'Our signature chocolate fudge cake is made with premium cocoa and layered with rich, velvety ganache. Each bite is a decadent experience that chocolate lovers dream about.',
      ingredients: 'Contains: Flour, cocoa, eggs, butter, sugar, dark chocolate',
      price: 'From ₹450'
    },
    'vanilla-cupcakes': {
      image: 'assets/product-2.jpg',
      title: 'Vanilla Cupcakes',
      description: 'Light and fluffy vanilla cupcakes topped with silky smooth buttercream frosting. Perfect for any celebration or as a sweet everyday treat.',
      ingredients: 'Contains: Flour, eggs, butter, vanilla, sugar, milk',
      price: '₹50 each'
    },
    'cookies-box': {
      image: 'assets/product-3.jpg',
      title: 'Cookies Box',
      description: 'A delightful assortment of our best cookies including classic chocolate chip, wholesome oatmeal raisin, and buttery shortbread cookies.',
      ingredients: 'Contains: Flour, butter, sugar, chocolate, oats, eggs',
      price: '₹300/dozen'
    },
    'red-velvet': {
      image: 'assets/product-4.jpg',
      title: 'Red Velvet Cake',
      description: 'Classic red velvet cake with its distinctive color and flavor, topped with smooth cream cheese frosting. A timeless favorite.',
      ingredients: 'Contains: Flour, cocoa, eggs, buttermilk, cream cheese, butter',
      price: 'From ₹550'
    },
    'berry-tart': {
      image: 'assets/product-5.jpg',
      title: 'Berry Tart',
      description: 'A buttery tart shell filled with smooth vanilla custard and topped with fresh seasonal berries. Beautiful and delicious.',
      ingredients: 'Contains: Flour, butter, eggs, cream, fresh berries, sugar',
      price: '₹400'
    },
    'custom-cakes': {
      image: 'assets/product-6.jpg',
      title: 'Custom Cakes',
      description: 'Create your dream cake! We work with you to design and bake personalized cakes for birthdays, weddings, anniversaries, and all special occasions. Contact us to discuss your vision.',
      ingredients: 'Ingredients vary based on your preferences',
      price: 'Price varies'
    }
  };

  document.querySelectorAll('[data-details]').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.getAttribute('data-details');
      const product = productDetails[productId];
      
      if (product) {
        openProductModal(product);
      }
    });
  });

  function openProductModal(product) {
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-image').alt = product.title;
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-ingredients').textContent = product.ingredients;
    document.getElementById('modal-price').textContent = product.price;
    
    productModal.removeAttribute('hidden');
    document.getElementById('modal-order-btn').focus();
    
    document.getElementById('modal-order-btn').onclick = () => {
      closeModal(productModal);
      document.getElementById('order-details').value = `I would like to order: ${product.title}`;
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('name').focus();
      }, 500);
    };
  }

  document.querySelectorAll('[data-product]').forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      document.getElementById('order-details').value = `I would like to order: ${productName}`;
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('name').focus();
      }, 500);
    });
  });

  const galleryImages = document.querySelectorAll('.gallery-item');
  let currentGalleryIndex = 0;
  
  galleryImages.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentGalleryIndex = index;
      openGallery(index);
    });
  });

  function openGallery(index) {
    const img = galleryImages[index].querySelector('img');
    document.getElementById('gallery-modal-image').src = img.src;
    document.getElementById('gallery-modal-image').alt = img.alt;
    galleryModal.removeAttribute('hidden');
    document.querySelector('.gallery-modal .modal-close').focus();
  }

  document.querySelector('.gallery-prev').addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    openGallery(currentGalleryIndex);
  });

  document.querySelector('.gallery-next').addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    openGallery(currentGalleryIndex);
  });

  document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeModal(closeBtn.closest('.modal'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
      closeModal(overlay.closest('.modal'));
    });
  });

  function closeModal(modal) {
    modal.setAttribute('hidden', '');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!productModal.hasAttribute('hidden')) {
        closeModal(productModal);
      }
      if (!galleryModal.hasAttribute('hidden')) {
        closeModal(galleryModal);
      }
    }
    
    if (!galleryModal.hasAttribute('hidden')) {
      if (e.key === 'ArrowLeft') {
        document.querySelector('.gallery-prev').click();
      } else if (e.key === 'ArrowRight') {
        document.querySelector('.gallery-next').click();
      }
    }
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    formMessage.className = 'form-message';
    formMessage.textContent = '';
    
    document.querySelectorAll('.form-error').forEach(error => {
      error.textContent = '';
    });
    
    let isValid = true;
    
    const name = document.getElementById('name');
    if (!name.value.trim()) {
      document.getElementById('name-error').textContent = 'Name is required';
      isValid = false;
    }
    
    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.value.trim()) {
      document.getElementById('phone-error').textContent = 'Phone number is required';
      isValid = false;
    } else if (!phonePattern.test(phone.value.trim())) {
      document.getElementById('phone-error').textContent = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }
    
    const email = document.getElementById('email');
    if (email.value.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        isValid = false;
      }
    }
    
    const orderDetails = document.getElementById('order-details');
    if (!orderDetails.value.trim()) {
      document.getElementById('order-details-error').textContent = 'Please describe your order';
      isValid = false;
    }
    
    if (!isValid) {
      formMessage.className = 'form-message error';
      formMessage.textContent = 'Please fix the errors above';
      return;
    }
    
    const formData = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim(),
      orderDetails: orderDetails.value.trim(),
      delivery: document.querySelector('input[name="delivery"]:checked').value,
      pickupDate: document.getElementById('pickup-date').value,
      timestamp: new Date().toISOString()
    };
    
    let savedOrders = JSON.parse(localStorage.getItem('trueBakesOrders') || '[]');
    savedOrders.push(formData);
    localStorage.setItem('trueBakesOrders', JSON.stringify(savedOrders));
    
    const whatsappMessage = `Hi! I'd like to place an order from True Bakes:\n\nName: ${formData.name}\nPhone: ${formData.phone}\n${formData.email ? 'Email: ' + formData.email + '\n' : ''}Order: ${formData.orderDetails}\nPreference: ${formData.delivery}\n${formData.pickupDate ? 'Date/Time: ' + formData.pickupDate : ''}`;
    
    const whatsappUrl = `https://wa.me/919663550007?text=${encodeURIComponent(whatsappMessage)}`;
    
    formMessage.className = 'form-message success';
    formMessage.textContent = 'Thank you! Your order details have been saved. Click the button below to send your order via WhatsApp.';
    
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = whatsappUrl;
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.className = 'btn btn-primary btn-whatsapp';
    whatsappBtn.style.marginTop = '1rem';
    whatsappBtn.innerHTML = '<span class="whatsapp-icon">💬</span> Send Order via WhatsApp';
    formMessage.appendChild(document.createElement('br'));
    formMessage.appendChild(whatsappBtn);
    
    orderForm.reset();
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
