// إعدادات الموقع التفاعلية المحسنة والمدمجة
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 بدء تحميل الموقع...');
    
    // تحديث Footer
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.textContent = '© 2025 مركز خالد عز الرجال. جميع الحقوق محفوظة.';
    
    // ===== Mobile Menu Toggle - محسن =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuToggle && navMenu) {
        // فتح/إغلاق القائمة
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('mobile-menu-open');
            
            // منع التمرير عند فتح القائمة
            if (navMenu.classList.contains('mobile-menu-open')) {
                document.body.style.overflow = 'hidden';
                // إضافة تأثير blur للخلفية
                document.body.style.backdropFilter = 'blur(5px)';
            } else {
                document.body.style.overflow = '';
                document.body.style.backdropFilter = '';
            }
        });
        
        // إغلاق القائمة عند النقر على رابط
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMenu();
            }
        });
        
        // دالة مساعدة لإغلاق القائمة
        function closeMenu() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
            document.body.style.backdropFilter = '';
        }
        
        // إغلاق القائمة عند الضغط على Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('mobile-menu-open')) {
                closeMenu();
            }
        });
    }
    
    // ===== Header Hide/Show on Scroll - محسن =====
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let isScrolling = false;
    let scrollDirection = 'up';
    
    function handleScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // تحديد اتجاه التمرير
                scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
                
                // تغيير خلفية الهيدر عند التمرير
                if (scrollTop > 100) {
                    header.style.backgroundColor = 'rgba(25, 118, 210, 0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                } else {
                    header.style.backgroundColor = '';
                    header.style.backdropFilter = '';
                    header.style.boxShadow = '';
                }
                
                // إخفاء/إظهار الهيدر
                if (scrollDirection === 'down' && scrollTop > 100) {
                    header.classList.add('header-hidden');
                } else if (scrollDirection === 'up') {
                    header.classList.remove('header-hidden');
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                isScrolling = false;
            });
        }
        isScrolling = true;
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 10);
    }, { passive: true });
    
    // ===== Smooth Scroll for Internal Links =====
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // حساب offset للهيدر الثابت
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== Intersection Observer for Animations - محسن =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
                
                // إضافة تأخير للعناصر المتتالية
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
        });
    }, observerOptions);
    
    // تطبيق الحركات على العناصر المناسبة
    const animatedElements = document.querySelectorAll('.feature-card, .section-title, .service-card, .value-card, .clinic-card, .hero-content');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        observer.observe(el);
    });
    
    // ===== Enhanced Button Click Effects =====
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        // تأثير Ripple
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) ripple.remove();
            }, 600);
        });
        
        // تأثير hover محسن
        button.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // ===== Enhanced Card Hover Effects =====
    const hoverCards = document.querySelectorAll('.feature-card, .service-card, .value-card, .clinic-card');
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // ===== Logo Click Animation =====
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
    
    // ===== Active Navigation Link - محسن =====
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            link.classList.remove('active');
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === 'index.html' && linkPage === '/')) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavLink();
    
    // ===== Form Validation - جديد =====
    function validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'var(--danger-color)';
                isValid = false;
            } else {
                field.style.borderColor = '';
            }
        });
        
        return isValid;
    }
    
    // ===== Loading State Management - محسن =====
    function setLoadingState(button, isLoading) {
        const btnText = button.querySelector('.btn-text');
        const btnLoading = button.querySelector('.btn-loading');
        
        if (isLoading) {
            if (btnText) btnText.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'inline-flex';
            button.disabled = true;
            button.style.cursor = 'not-allowed';
            button.style.opacity = '0.8';
        } else {
            if (btnText) btnText.style.display = 'inline-flex';
            if (btnLoading) btnLoading.style.display = 'none';
            button.disabled = false;
            button.style.cursor = '';
            button.style.opacity = '';
        }
    }
    
    console.log('✅ تم تحميل الأساسيات بنجاح');
});

// ===== Appointment Form Submission - محسن =====
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwRhF2zdVuC9C_JOzpK-Pf_Qrn24pYhU2oBacuggXYSlokKOk5zka0jLwBLaKJqig74/exec";
    
    appointmentForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        if (!submitBtn) return;
        
        // التحقق من صحة البيانات
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#dc3545';
                field.style.boxShadow = '0 0 0 2px rgba(220, 53, 69, 0.2)';
                isValid = false;
            } else {
                field.style.borderColor = '';
                field.style.boxShadow = '';
            }
        });
        
        // التحقق من صحة العمر
        const ageField = this.querySelector('[name="age"]');
        if (ageField && (ageField.value < 1 || ageField.value > 120)) {
            ageField.style.borderColor = '#dc3545';
            ageField.style.boxShadow = '0 0 0 2px rgba(220, 53, 69, 0.2)';
            isValid = false;
            alert('⚠️ العمر يجب أن يكون بين 1 و 120 سنة.');
            return;
        }
        
        if (!isValid) {
            alert('⚠️ الرجاء ملء جميع الحقول المطلوبة.');
            return;
        }
        
        // إظهار حالة التحميل
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
        
        // إعداد FormData مع تحويل القيم للعربية
        const formData = new FormData(this);
        
        // إضافة التوقيت المصري باللغة الإنجليزية مع اسم اليوم
        const now = new Date();
        const egyptTime = now.toLocaleString('en-US', {
            timeZone: 'Africa/Cairo',
            weekday: 'long',     // إضافة اسم اليوم
            year: 'numeric',
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        // تحويل قيم النموذج للعربية
        const clinicMap = {
            'zagazig': 'عيادة الزقازيق',
            'ibrahimiya': 'عيادة الإبراهيمية'
        };
        
        const serviceMap = {
            'vision-correction': 'تصحيح النظر',
            'dry-eye': 'الجفاف وأمراض سطح العين',
            'retina': 'علاج الشبكية',
            'cataract': 'جراحة الماء الأبيض (الكتاراكت)',
            'strabismus': 'الحول للأطفال والكبار',
            'glaucoma': 'جراحة الماء الأزرق (الجلوكوما)',
            'follow-up': 'متابعة',
            'referral': 'تحويل',
            'surgery-follow-up': 'متابعة عملية'
        };
        
        const clinicValue = formData.get('preferredClinic');
        const serviceValue = formData.get('service');
        
        // تحويل التاريخ المفضل مع اسم اليوم (إذا تم اختيار تاريخ)
        const preferredDateValue = formData.get('preferredDate');
        let preferredDateWithDay = preferredDateValue;
        
        if (preferredDateValue) {
            const selectedDate = new Date(preferredDateValue + 'T12:00:00'); // إضافة وقت لتجنب مشاكل التوقيت
            const dayName = selectedDate.toLocaleDateString('ar-EG', { weekday: 'long' });
            preferredDateWithDay = `${preferredDateValue} (${dayName})`;
        }
        
        // إضافة القيم المحولة والمُحدثة
        formData.set('submitTime', egyptTime);
        formData.set('clinicArabic', clinicMap[clinicValue] || clinicValue);
        formData.set('serviceArabic', serviceMap[serviceValue] || serviceValue);
        
        // **هذا هو المهم**: إرسال التاريخ مع اسم اليوم
        if (preferredDateWithDay !== preferredDateValue) {
            formData.set('preferredDateWithDay', preferredDateWithDay);
        }
        
        try {
            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                body: formData
            });
            
            // تأخير للتأكد من رؤية حالة التحميل
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // إظهار رسالة نجاح مخصصة
            showSuccessMessage('✅ تم إرسال طلب حجز موعدك بنجاح!', 'سنتواصل معك خلال 24 ساعة لتأكيد الحجز.');
            this.reset();
            
        } catch (error) {
            console.error('Error:', error);
            showErrorMessage('❌ حدث خطأ أثناء إرسال طلب الحجز', 'الرجاء المحاولة مرة أخرى أو الاتصال بنا مباشرة.');
        } finally {
            // إخفاء حالة التحميل
            if (btnText) btnText.style.display = 'inline-flex';
            if (btnLoading) btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

// دوال عرض الرسائل
function showSuccessMessage(title, message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'success',
            title: title,
            text: message,
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#1976d2'
        });
    } else {
        alert(title + '\n' + message);
    }
}

function showErrorMessage(title, message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#dc3545'
        });
    } else {
        alert(title + '\n' + message);
    }
}


// ===== Contact Form Submission - محسن =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const CONTACT_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdVv-_4PchXzx34WV2NV42KVduY8mJLSNuoRCw7GKOB6V_eTE_uKHkYUCGkrf0_TY/exec";
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('contactSubmitBtn');
        if (!submitBtn) return;
        
        // التحقق من صحة البيانات
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#dc3545';
                field.style.boxShadow = '0 0 0 2px rgba(220, 53, 69, 0.2)';
                isValid = false;
            } else {
                field.style.borderColor = '';
                field.style.boxShadow = '';
            }
        });
        
        if (!isValid) {
            alert('⚠️ الرجاء ملء جميع الحقول المطلوبة.');
            return;
        }
        
        // إظهار حالة التحميل
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        if (btnText) btnText.style.display = 'none';
        if (btnLoading) btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
        
        // إعداد FormData وإضافة الوقت المحلي
        const formData = new FormData(this);
        
        // إضافة التوقيت المصري باللغة الإنجليزية
        const now = new Date();
        const egyptTime = now.toLocaleString('en-US', {
            timeZone: 'Africa/Cairo',
            year: 'numeric',
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        // تحويل نوع الرسالة من الإنجليزية إلى العربية
        const messageTypeMap = {
            'inquiry': 'استفسار',
            'complaint': 'شكوى',
            'suggestion': 'اقتراح'
        };
        
        const messageTypeValue = formData.get('messageType');
        const arabicMessageType = messageTypeMap[messageTypeValue] || messageTypeValue;
        
        // إضافة البيانات المُحدثة
        formData.set('submitTime', egyptTime);
        formData.set('messageTypeArabic', arabicMessageType);
        
        try {
            const response = await fetch(CONTACT_SCRIPT_URL, {
                method: 'POST',
                body: formData
            });
            
            // تأخير للتأكد من رؤية حالة التحميل
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // عرض رسالة النجاح
            showSuccessMessage('✅ تم إرسال رسالتك بنجاح!', 'شكراً لك، سنرد عليك قريباً.');
            this.reset();
            
        } catch (error) {
            console.error('Error:', error);
            showErrorMessage('❌ حدث خطأ أثناء إرسال الرسالة', 'الرجاء المحاولة مرة أخرى أو الاتصال بنا مباشرة.');
        } finally {
            // إخفاء حالة التحميل
            if (btnText) btnText.style.display = 'inline-flex';
            if (btnLoading) btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

// دوال عرض الرسائل
function showSuccessMessage(title, message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'success',
            title: title,
            text: message,
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#1976d2'
        });
    } else {
        alert(title + '\n' + message);
    }
}

function showErrorMessage(title, message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#dc3545'
        });
    } else {
        alert(title + '\n' + message);
    }
}


// دوال عرض الرسائل
function showSuccessMessage(title, message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'success',
            title: title,
            text: message,
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#1976d2'
        });
    } else {
        alert(title + '\n' + message);
    }
}

function showErrorMessage(title, message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'error',
            title: title,
            text: message,
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#dc3545'
        });
    } else {
        alert(title + '\n' + message);
    }
}

// ===== Service Recommendation (Gemini AI) - محسن =====
const getRecommendationBtn = document.getElementById('getRecommendationBtn');
const consultationInput = document.getElementById('consultationInput');
const consultationResult = document.getElementById('consultationResult');

if (getRecommendationBtn && consultationInput && consultationResult) {
    getRecommendationBtn.addEventListener('click', async function() {
        const userInput = consultationInput.value.trim();
        if (!userInput) {
            consultationInput.style.borderColor = 'var(--danger-color)';
            consultationInput.focus();
            showErrorMessage('⚠️ الرجاء إدخال وصف لأعراضك أو استفسارك', '');
            return;
        }
        
        consultationInput.style.borderColor = '';
        
        const resultText = consultationResult.querySelector('#resultText');
        const loadingSpinner = consultationResult.querySelector('.loading-spinner');
        
        consultationResult.style.display = 'block';
        if (resultText) resultText.textContent = '';
        if (loadingSpinner) loadingSpinner.style.display = 'flex';
        getRecommendationBtn.disabled = true;
        
        try {
            const apiKey = "AIzaSyD2qJKikx1cGh2IngA4D215pOfAN5UwRAc";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        role: "user",
                        parts: [{
                            text: `بناءً على الأعراض أو الاستفسار التالي: "${userInput}"، ما هي الخدمة الأنسب من خدمات مركز العيون؟ 
                            
                            الخدمات المتاحة:
                            - فحص العيون الشامل
                            - تصحيح النظر بالليزر (LASIK, PRK)
                            - علاج الجفاف وأمراض سطح العين
                            - علاج أمراض الشبكية والسكري
                            - جراحة الماء الأبيض (الكتاراكت)
                            - علاج الحول للأطفال والكبار
                            - علاج الماء الأزرق (الجلوكوما)
                            - طب عيون الأطفال
                            
                            يرجى تقديم إجابة مفيدة ومختصرة (4-5 جمل) تتضمن:
                            1. الخدمة أو الخدمات المناسبة
                            2. سبب الاختيار
                            3. نصيحة بحجز موعد للفحص الدقيق
                            
                            ملاحظة: هذه استشارة أولية ولا تغني عن الفحص الطبي المتخصص.`
                        }]
                    }],
                    generationConfig: {
                        maxOutputTokens: 200,
                        temperature: 0.7
                    }
                })
            });
            
            const result = await response.json();
            
            if (result.candidates && result.candidates[0]?.content?.parts?.[0]?.text) {
                let responseText = result.candidates[0].content.parts[0].text;
                
                // تنسيق النص
                responseText = responseText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                responseText = responseText.replace(/\n/g, '<br>');
                
                if (resultText) {
                    resultText.innerHTML = responseText;
                } else {
                    consultationResult.innerHTML = `<div class="result-text">${responseText}</div>`;
                }
                
                // إضافة تأثير الظهور التدريجي
                consultationResult.style.animation = 'fadeInUp 0.5s ease-out';
                
            } else {
                const fallbackText = 'لم نتمكن من تقديم توصية دقيقة حالياً. ننصحك بحجز موعد للفحص الشامل مع أحد أطبائنا المختصين للحصول على التشخيص والعلاج المناسب.';
                if (resultText) {
                    resultText.textContent = fallbackText;
                } else {
                    consultationResult.innerHTML = `<div class="result-text">${fallbackText}</div>`;
                }
            }
        } catch (error) {
            console.error('Error:', error);
            const errorText = 'حدث خطأ أثناء الحصول على التوصية. يرجى المحاولة لاحقاً أو التواصل معنا مباشرة.';
            if (resultText) {
                resultText.textContent = errorText;
            } else {
                consultationResult.innerHTML = `<div class="result-text">${errorText}</div>`;
            }
        } finally {
            if (loadingSpinner) loadingSpinner.style.display = 'none';
            getRecommendationBtn.disabled = false;
        }
    });
    
    // إضافة إمكانية الإرسال بالضغط على Enter
    consultationInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            getRecommendationBtn.click();
        }
    });
    
    // إزالة لون الخطأ عند الكتابة
    consultationInput.addEventListener('input', function() {
        this.style.borderColor = '';
    });
}

// ===== Utility Functions - جديد =====
function showSuccessMessage(title, message) {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.5s ease-out;
    `;
    
    alertDiv.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 5px;">${title}</div>
        <div style="opacity: 0.9; font-size: 14px;">${message}</div>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => alertDiv.remove(), 500);
    }, 4000);
}

function showErrorMessage(title, message) {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #dc3545, #c82333);
        color: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.5s ease-out;
    `;
    
    alertDiv.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 5px;">${title}</div>
        <div style="opacity: 0.9; font-size: 14px;">${message}</div>
    `;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => alertDiv.remove(), 500);
    }, 5000);
}

// ===== CSS Animations - جديد =====
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out;
    }
`;

document.head.appendChild(animationStyles);

// ===== Performance Optimization =====
// تأجيل تحميل الصور
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// تسجيل اكتمال التحميل
window.addEventListener('load', () => {
    console.log('🎉 تم تحميل جميع التأثيرات التفاعلية بنجاح!');
    console.log('📊 معلومات الأداء:', {
        'وقت التحميل': `${performance.now().toFixed(2)}ms`,
        'عدد العناصر المتحركة': document.querySelectorAll('.animate-in').length,
        'عدد الأزرار التفاعلية': document.querySelectorAll('.btn').length
    });
});
