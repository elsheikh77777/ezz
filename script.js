// إعدادات الموقع التفاعلية

// تعريف كائن المحتوى والترجمة على مستوى عالمي
const content = {
    'ar': {
        navLinks: ['الرئيسية', 'من نحن', 'الخدمات', 'احجز موعد', 'تواصل معنا'],
        // محتوى الصفحة الرئيسية
        home: {
            heroTitle: 'مرحباً بكم في مركز خالد عز الرجال',
            heroText: 'نحن نقدم رعاية صحية متخصصة وحلولاً مبتكرة لمساعدتك على استعادة عافيتك وتحسين جودة حياتك. فريقنا من المختصين ملتزم بتقديم أفضل الخدمات والعلاجات باستخدام أحدث التقنيات.',
            ctaButtons: ['📅 احجز موعدك الآن', '🔍 اكتشف خدماتنا'],
            sectionTitle: 'لماذا تختار مركزنا؟',
            sectionDesc: 'نحن ملتزمون بتقديم أعلى مستويات الرعاية الصحية بأحدث التقنيات والأساليب العلاجية',
            featureCards: [
                {title: 'رعاية متخصصة', desc: 'نقدم خدمات طبية متخصصة على أعلى مستوى من الجودة والاحترافية لضمان أفضل النتائج العلاجية.'},
                {title: 'فريق طبي متميز', desc: 'يضم مركزنا نخبة من الأطباء والمختصين ذوي الخبرة العالية في مجال الرعاية الصحية.'},
                {title: 'أحدث التقنيات', desc: 'نستخدم أحدث الأجهزة والتقنيات الطبية لضمان دقة التشخيص وفعالية العلاج.'}
            ],
        },
        // محتوى صفحة من نحن
        about: {
            heroTitle: 'من نحن',
            heroText: 'مركز رائد في مجال الرعاية الصحية المتخصصة، نقدم خدمات طبية متميزة بأعلى معايير الجودة والاحترافية. فريقنا من المختصين ملتزم بتقديم أفضل الرعاية لمرضانا باستخدام أحدث التقنيات الطبية.',
            teamSectionTitle: 'فريقنا الطبي المتميز',
            teamSectionDesc: 'نخبة من الأطباء والمختصين ذوي الخبرة العالية في مجال الرعاية الصحية',
            teamOverlayTitle: 'فريق متكامل من المختصين',
            teamOverlayDesc: 'يضم مركزنا نخبة من الأطباء والمختصين المؤهلين تأهيلاً عالياً لتقديم أفضل مستويات الرعاية الصحية',
            visionMissionTitle: 'رؤيتنا ورسالتنا',
            visionMissionDesc: 'نسعى لأن نكون المرجع الأول في الرعاية الصحية المتخصصة',
            visionCardTitle: 'الرؤية',
            visionCardDesc: 'أن نكون مركزاً رائداً لتحسين صحة الإنسان حول العالم، خاصة في مجال طب وجراحة العيون، نسعى لتقديم أعلى مستويات الرعاية الطبية والصحية المتقدمة، اعتماداً على أدوات البحث والتطوير المستمر وتحقيق أهداف التنمية المستدامة من خلال تطبيق أحدث المعايير الطبية والاستفادة من الذكاء الصناعي والتكنولوجيا المتقدمة.',
            missionCardTitle: 'الرسالة',
            missionCardDesc: 'نسعى لتحسين صحة الإنسان عامة في مجال العيون خاصة بإدارة أفضل وأحدث الطرق والتقنيات والأجهزة المتقدمة لتطوير مجال الطب والجراحة. نهدف إلى تحقيق مؤسسة حياة كريمة لكل موقفنا مع السعي لخدمة المجتمع والإنسانية حول العالم، إيماناً منا بحق المساواة بين جميع البشر.',
            statsSectionTitle: 'إنجازاتنا بالأرقام',
            statsSectionDesc: 'أرقام تعكس التزامنا بتقديم أفضل الخدمات الطبية',
            statLabels: ['عاماً من الخبرة'], 
            valuesSectionTitle: 'قيمنا الأساسية',
            valuesSectionDesc: 'المبادئ التي نؤمن بها ونطبقها في عملنا اليومي',
            valueItems: [
                {title: 'الثقة والأمانة', desc: 'نبني علاقات قوية مع مرضانا على أساس الثقة والشفافية الكاملة'},
                {title: 'الجودة والتميز', desc: 'نسعى دائماً لتحقيق أعلى معايير الجودة في جميع خدماتنا الطبية'},
                {title: 'الابتكار والتطوير', desc: 'نواكب أحدث التطورات في المجال الطبي ونستثمر في التقنيات الحديثة'},
                {title: 'الرحمة والعناية', desc: 'نقدم رعاية شاملة ومتعاطفة لكل مريض يزور مركزنا'},
                {title: 'الالتزام المجتمعي', desc: 'نساهم في خدمة المجتمع ونشر الوعي الصحي'},
                {title: 'المسؤولية المهنية', desc: 'نتحمل مسؤولية كاملة تجاه صحة وسلامة مرضانا'}
            ]
        },
        // محتوى صفحة الخدمات
        services: {
            heroTitle: 'خدماتنا الشاملة والمتكاملة',
            heroText: 'نقدم مجموعة واسعة من الخدمات الطبية المتخصصة في مجال طب وجراحة العيون، باستخدام أحدث التقنيات وأفضل الكفاءات لضمان أفضل النتائج لمرضانا.',
            mainServicesTitle: 'تخصصاتنا الأساسية',
            mainServicesDesc: 'نحن هنا لتقديم الرعاية الصحية الشاملة لعينيك',
            serviceCards: [
                {icon: '👁️', title: 'تصحيح النظر', desc: 'أحدث تقنيات الليزر لتصحيح عيوب الإبصار وتحقيق رؤية واضحة.'},
                {icon: '💧', title: 'الجفاف وأمراض سطح العين', desc: 'تشخيص وعلاج شامل لمشاكل جفاف العين وأمراض السطح.'}, 
                {icon: '🔬', title: 'علاج الشبكية', desc: 'علاج أمراض الشبكية المختلفة بأحدث الأساليب والتقنيات.'},
                {icon: '⚪', title: 'جراحة الماء الأبيض (الكتاراكت)', desc: 'إجراء جراحي آمن وفعال لإزالة الماء الأبيض واستعادة الرؤية.'},
                {icon: '👀', title: 'الحول للأطفال والكبار', desc: 'تشخيص وعلاج حالات الحول المختلفة لجميع الفئات العمرية.'},
                {icon: '🔵', title: 'جراحة الماء الأزرق (الجلوكوما)', desc: 'علاج الجلوكوما للحفاظ على البصر ومنع المضاعفات.'}
            ],
            dryEyeSectionTitle: 'وحدة علاج الجفاف وأمراض سطح العين',
            dryEyeSectionDesc: 'عيونك أمانة لدينا: أحدث التقنيات لتشخيص وعلاج شامل',
            dryEyeContentTitle: 'أحدث جهاز تشخيصي للجفاف وأمراض سطح العين بالعالم',
            dryEyeList: [
                'علاج جفاف العين المزمن',
                'سدادات وحقن الفيلر بالقناة الدمعية',
                'علاج حساسية العيون الموسمية والمزمنة',
                'متابعة وعلاج قرحة القرنية المناعية والمعدية',
                'علاج عتامة القرنية بالعلاج الدوائي والليزر وزراعة القرنية',
                'زراعة الخلايا الجذعية لأمراض نقص الخلايا الجذعية بالقرنية'
            ],
            quickConsultation: {
                sectionTitle: 'احصل على استشارة سريعة ✨',
                sectionDesc: 'صف أعراضك أو استفسارك، وسنساعدك في تحديد الخدمة المناسبة.',
                inputPlaceholder: 'مثال: أعاني من جفاف شديد في العين مع حكة واحمرار...',
                buttonText: '✨ احصل على توصية الخدمة',
                emptyInputMessage: 'الرجاء إدخال وصف لأعراضك أو استفسارك.',
                errorMessage: 'لم نتمكن من تقديم توصية في الوقت الحالي. يرجى المحاولة مرة أخرى.',
                apiErrorMessage: 'حدث خطأ أثناء الاتصال بالخدمة. يرجى المحاولة لاحقاً.'
            }
        },
        // محتوى صفحة حجز المواعيد
        appointment: {
            heroTitle: 'احجز موعدك الآن',
            heroText: 'املأ النموذج أدناه لحجز موعد في مركز خالد عز الرجال. سنتواصل معك لتأكيد الموعد في أقرب وقت ممكن.',
            formTitle: 'نموذج حجز المواعيد',
            formDesc: 'الرجاء ملء جميع الحقول المطلوبة لضمان معالجة طلبك بنجاح.',
            labels: {
                fullName: 'الاسم بالكامل:',
                phoneNumber: 'رقم الهاتف:',
                nationalId: 'الرقم القومي (14 رقم):',
                specialty: 'التخصص المطلوب:',
                age: 'السن:',
                desiredTime: 'الوقت المطلوب للموعد:'
            },
            specialtyOptions: {
                placeholder: 'اختر التخصص',
                visionCorrection: 'تصحيح النظر',
                dryEye: 'الجفاف وأمراض سطح العين',
                retina: 'علاج الشبكية',
                cataract: 'جراحة الماء الأبيض (الكتاراكت)',
                strabismus: 'الحول للأطفال والكبار',
                glaucoma: 'جراحة الماء الأزرق (الجلوكوما)',
                generalConsultation: 'استشارة عامة',
                followUp: 'متابعة' 
            },
            submitButton: '✅ إرسال طلب الحجز',
            successMessage: 'تم إرسال طلب حجز موعدك بنجاح! سنتواصل معك قريباً.',
            errorMessage: 'حدث خطأ أثناء إرسال طلب الحجز. الرجاء المحاولة مرة أخرى.',
            validation: {
                phoneNumber: 'الرجاء إدخال رقم هاتف صالح (10-15 رقم).',
                nationalId: 'الرجاء إدخال 14 رقمًا للرقم القومي.',
                age: 'الرجاء إدخال سن صالح (بين 1 و 120).',
                pastDateTime: 'الرجاء اختيار تاريخ ووقت في المستقبل.', 
                fridaySelection: 'لا يمكن حجز مواعيد يوم الجمعة. الرجاء اختيار يوم آخر.' 
            }
        },
        // محتوى صفحة اتصل بنا
        contact: {
            heroTitle: 'تواصل معنا',
            heroText: 'نحن هنا للإجابة على جميع استفساراتكم وتقديم المساعدة. لا تترددوا في الاتصال بنا أو ملء النموذج أدناه.',
            infoSectionTitle: 'معلومات الاتصال',
            infoSectionDesc: 'يمكنكم التواصل معنا عبر العيادات التالية أو أرقام الهاتف العامة:',
            zaqaziqClinic: {
                title: 'عيادة الزقازيق',
                workingDaysLabel: 'أيام العمل:', // تم التعديل
                workingDays: 'السبت، الاثنين، الأربعاء',
                generalHoursLabel: 'مواعيد العمل العامة:', // تم التعديل
                generalHours: 'من 9 صباحاً حتى 9 مساءً',
                drKhaledHoursLabel: 'مواعيد د. خالد:', // تم التعديل
                drKhaledHours: 'السبت 12 ظهراً - 2 ظهراً، الاثنين والأربعاء 10 صباحاً - 7 مساءً',
                consultantHoursLabel: 'مواعيد الاستشاريين:', // تم التعديل
                consultantHours: 'باقي الأيام (المياه الزرقاء، القُرح والجفاف، الأطفال والحول، عيادة الشبكية)',
                addressLabel: 'العنوان:', // تم التعديل
                address: 'الزقازيق القومية شارع طلبة عويضة امام ايس كريم توته',
                mapLinkText: 'عرض على الخريطة', // تم التعديل
                mapLink: 'https://maps.app.goo.gl/AAHNNJ6c3zvBJmQk9',
                whatsappLinkText: 'واتساب العيادة', // تم التعديل
                whatsappLink: 'https://api.whatsapp.com/send?phone=%2B201005595000',
                facebookLinkText: 'صفحة الفيسبوك', // تم التعديل
                facebookLink: 'https://www.facebook.com/share/16mmwBin46/'
            },
            ibrahimiyaClinic: {
                title: 'عيادة الإبراهيمية',
                workingDaysLabel: 'أيام العمل:', // تم التعديل
                workingDays: 'الأحد، الثلاثاء، الخميس',
                generalHoursLabel: 'مواعيد العمل العامة:', // تم التعديل
                generalHours: 'الأحد والخميس',
                addressLabel: 'العنوان:', // تم التعديل
                address: 'الإبراهيمية حي الصاغة',
                mapLinkText: 'عرض على الخريطة', // تم التعديل
                mapLink: 'https://maps.app.goo.gl/ayEhNVi1kKBcXv1f7',
                whatsappLinkText: 'واتساب العيادة', // تم التعديل
                whatsappLink: 'https://api.whatsapp.com/send?phone=%2B201005595000',
                facebookLinkText: 'صفحة الفيسبوك', // تم التعديل
                facebookLink: 'https://www.facebook.com/share/16mmwBin46/'
            },
            generalPhoneNumbersTitle: 'أرقام الاتصال العامة',
            phoneNumbers: ['+20 10 02470247', '+20 10 05595000'],
            formSectionTitle: 'أرسل شكواك أو مقترحك', 
            formSectionDesc: 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن.',
            formLabels: {
                name: 'الاسم:',
                phone: 'رقم الهاتف:', 
                message: 'رسالتك:'
            },
            formSubmitButton: '✉️ إرسال الرسالة',
            formSuccessMessage: 'تم إرسال شكواك/مقترحك بنجاح! شكراً لك.', 
            formErrorMessage: 'حدث خطأ أثناء إرسال شكواك/مقترحك. الرجاء المحاولة مرة أخرى.' 
        },
        footerText: '© 2025 مركز خالد عز الرجال. جميع الحقوق محفوظة.'
    },
    'en': {
        navLinks: ['Home', 'About Us', 'Services', 'Book Appointment', 'Contact Us'],
        // Home page content
        home: {
            heroTitle: 'Welcome to Khaled Ezz Al-Rijal Center',
            heroText: 'We provide specialized healthcare and innovative solutions to help you regain your health and improve your quality of life. Our team of specialists is committed to providing the best services and treatments using the latest technologies.',
            ctaButtons: ['📅 Book Your Appointment', '🔍 Discover Our Services'],
            sectionTitle: 'Why Choose Our Center?',
            sectionDesc: 'We are committed to providing the highest levels of healthcare with the latest techniques and therapeutic methods',
            featureCards: [
                {title: 'Specialized Care', desc: 'We provide specialized medical services at the highest level of quality and professionalism to ensure the best therapeutic results.'},
                {title: 'Distinguished Medical Team', desc: 'Our center includes a group of doctors and specialists with high experience in the field of healthcare.'},
                {title: 'Latest Technologies', desc: 'We use the latest medical devices and technologies to ensure accurate diagnosis and effective treatment.'}
            ],
        },
        // About Us page content
        about: {
            heroTitle: 'About Us',
            heroText: 'A leading center in specialized healthcare, we provide distinguished medical services with the highest standards of quality and professionalism. Our team of specialists is committed to providing the best care for our patients using the latest medical technologies.',
            teamSectionTitle: 'Our Distinguished Medical Team',
            teamSectionDesc: 'A group of highly experienced doctors and specialists in the field of healthcare',
            teamOverlayTitle: 'A Comprehensive Team of Specialists',
            teamOverlayDesc: 'Our center includes a group of highly qualified doctors and specialists to provide the best levels of healthcare',
            visionMissionTitle: 'Our Vision and Mission',
            visionMissionDesc: 'We strive to be the first reference in specialized healthcare',
            visionCardTitle: 'Vision',
            visionCardDesc: 'To be a leading center for improving human health around the world, especially in the field of ophthalmology and eye surgery. We seek to provide the highest levels of advanced medical and health care, relying on continuous research and development tools and achieving sustainable development goals by applying the latest medical standards and benefiting from artificial intelligence and advanced technology.',
            missionCardTitle: 'Mission',
            missionCardDesc: 'We seek to improve human health in general, especially in the field of ophthalmology, by managing the best and latest methods, techniques, and advanced devices to develop the field of medicine and surgery. We aim to achieve a decent life for all our staff while striving to serve society and humanity around the world, believing in the right to equality among all people.',
            statsSectionTitle: 'Our Achievements in Numbers',
            statsSectionDesc: 'Numbers reflecting our commitment to providing the best medical services',
            statLabels: ['Years of Experience'],
            valuesSectionTitle: 'Our Core Values',
            valuesSectionDesc: 'The principles we believe in and and apply in our daily work',
            valueItems: [
                {title: 'Trust and Integrity', desc: 'We build strong relationships with our patients based on complete trust and transparency'},
                {title: 'Quality and Excellence', desc: 'We always strive to achieve the highest standards of quality in all our medical services'},
                {title: 'Innovation and Development', desc: 'We keep pace with the latest developments in the medical field and invest in modern technologies'},
                {title: 'Compassion and Care', desc: 'We provide comprehensive and compassionate care to every patient who visits our center'},
                {title: 'Community Commitment', desc: 'We contribute to serving the community and spreading health awareness'},
                {title: 'Professional Responsibility', desc: 'We bear full responsibility for the health and safety of our patients'}
            ]
        },
        // Services page content
        services: {
            heroTitle: 'Our Comprehensive and Integrated Services',
            heroText: 'We offer a wide range of specialized medical services in ophthalmology and eye surgery, using the latest technologies and best competencies to ensure optimal results for our patients.',
            mainServicesTitle: 'Our Core Specialties',
            mainServicesDesc: 'We are here to provide comprehensive eye care',
            serviceCards: [
                {icon: '👁️', title: 'Vision Correction', desc: 'The latest laser technologies to correct vision defects and achieve clear vision.'},
                {icon: '💧', title: 'Dry Eye and Ocular Surface Disease', desc: 'Comprehensive diagnosis and treatment for dry eye problems and ocular surface diseases.'}, 
                {icon: '🔬', title: 'Retinal Treatment', desc: 'Treatment of various retinal diseases using the latest methods and technologies.'},
                {icon: '⚪', title: 'Cataract Surgery', desc: 'A safe and effective surgical procedure to remove cataracts and restore vision.'},
                {icon: '👀', title: 'Strabismus for Children and Adults', desc: 'Diagnosis and treatment of various strabismus cases for all age groups.'},
                {icon: '🔵', title: 'Glaucoma Surgery', desc: 'Glaucoma treatment to preserve vision and prevent complications.'}
            ],
            dryEyeSectionTitle: 'Dry Eye and Ocular Surface Disease Unit',
            dryEyeSectionDesc: 'Your eyes are our trust: The latest technologies for comprehensive diagnosis and treatment',
            dryEyeContentTitle: 'The latest diagnostic device for dry eye and ocular surface diseases in the world',
            dryEyeList: [
                'Treatment of chronic dry eye',
                'Punctal plugs and filler injections into the lacrimal canal',
                'Treatment of seasonal and chronic eye allergies',
                'Follow-up and treatment of immune and infectious corneal ulcers',
                'Treatment of corneal opacity with medication, laser, and corneal transplantation',
                'Stem cell transplantation for corneal limbal stem cell deficiency diseases'
            ],
            quickConsultation: {
                sectionTitle: 'Get a Quick Consultation ✨',
                sectionDesc: 'Describe your symptoms or inquiry, and we will help you determine the appropriate service.',
                inputPlaceholder: 'Example: I suffer from severe dry eyes with itching and redness...',
                buttonText: '✨ Get Service Recommendation',
                emptyInputMessage: 'Please enter a description of your symptoms or inquiry.',
                errorMessage: 'Could not provide a recommendation at this time. Please try again.',
                apiErrorMessage: 'An error occurred while connecting to the service. Please try again later.'
            }
        },
        // محتوى صفحة حجز المواعيد
        appointment: {
            heroTitle: 'Book Your Appointment Now',
            heroText: 'Fill out the form below to book an appointment at Khaled Ezz Al-Rijal Center. We will contact you soon to confirm the appointment.',
            formTitle: 'Appointment Booking Form',
            formDesc: 'Please fill in all required fields to ensure your request is processed successfully.',
            labels: {
                fullName: 'Full Name:',
                phoneNumber: 'Phone Number:',
                nationalId: 'National ID (14 digits):',
                specialty: 'Required Specialty:',
                age: 'Age:',
                desiredTime: 'Desired Appointment Time:'
            },
            specialtyOptions: {
                placeholder: 'Select Specialty',
                visionCorrection: 'Vision Correction',
                dryEye: 'Dry Eye and Ocular Surface Disease',
                retina: 'Retinal Treatment',
                cataract: 'Cataract Surgery',
                strabismus: 'Strabismus for Children and Adults',
                glaucoma: 'Glaucoma Surgery',
                generalConsultation: 'General Consultation',
                followUp: 'Follow-up' 
            },
            submitButton: '✅ Submit Booking Request',
            successMessage: 'Your appointment request has been sent successfully! We will contact you soon.',
            errorMessage: 'An error occurred while sending your booking request. Please try again.',
            validation: {
                phoneNumber: 'Please enter a valid phone number (10-15 digits).',
                nationalId: 'Please enter a 14-digit National ID.',
                age: 'Please enter a valid age (between 1 and 120).',
                pastDateTime: 'Please select a future date and time.', 
                fridaySelection: 'Appointments cannot be booked on Fridays. Please choose another day.' 
            }
        },
        // محتوى صفحة اتصل بنا
        contact: {
            heroTitle: 'Contact Us',
            heroText: 'We are here to answer all your inquiries and provide assistance. Do not hesitate to contact us or fill out the form below.',
            infoSectionTitle: 'Contact Information',
            infoSectionDesc: 'You can contact us through the following channels:',
            zaqaziqClinic: {
                title: 'Zaqaziq Clinic',
                workingDaysLabel: 'Working Days:', 
                workingDays: 'Saturday, Monday, Wednesday',
                generalHoursLabel: 'General Working Hours:', 
                generalHours: '9 AM - 9 PM',
                drKhaledHoursLabel: 'Dr. Khaled\'s Hours:', 
                drKhaledHours: 'Saturday 12 PM - 2 PM, Monday & Wednesday 10 AM - 7 PM',
                consultantHoursLabel: 'Consultant Hours:', 
                consultantHours: 'Other days (Glaucoma, Corneal Ulcers & Dry Eye, Pediatrics & Strabismus, Retina Clinic)',
                addressLabel: 'Address:', 
                address: 'Zaqaziq Qawmiya, Tolba Oweida Street, in front of Touta Ice Cream',
                mapLinkText: 'View on Map', 
                mapLink: 'https://maps.app.goo.gl/AAHNNJ6c3zvBJmQk9',
                whatsappLinkText: 'Clinic WhatsApp', 
                whatsappLink: 'https://api.whatsapp.com/send?phone=%2B201005595000',
                facebookLinkText: 'Facebook Page', 
                facebookLink: 'https://www.facebook.com/share/16mmwBin46/'
            },
            ibrahimiyaClinic: {
                title: 'Ibrahimiya Clinic',
                workingDaysLabel: 'Working Days:', 
                workingDays: 'Sunday, Tuesday, Thursday',
                generalHoursLabel: 'General Working Hours:', 
                generalHours: 'Sunday and Thursday',
                addressLabel: 'Address:', 
                address: 'Ibrahimiya, Hay El Sagha',
                mapLinkText: 'View on Map', 
                mapLink: 'https://maps.app.goo.gl/ayEhNVi1kKBcXv1f7',
                whatsappLinkText: 'Clinic WhatsApp', 
                whatsappLink: 'https://api.whatsapp.com/send?phone=%2B201005595000',
                facebookLinkText: 'Facebook Page', 
                facebookLink: 'https://www.facebook.com/share/16mmwBin46/'
            },
            generalPhoneNumbersTitle: 'General Contact Numbers',
            phoneNumbers: ['+20 10 02470247', '+20 10 05595000'],
            formSectionTitle: 'Send Your Complaint or Suggestion', 
            formSectionDesc: 'Fill out the form below and we will contact you as soon as possible.',
            formLabels: {
                name: 'Name:',
                phone: 'Phone Number:', 
                message: 'Your Message:'
            },
            formSubmitButton: '✉️ Send Message',
            formSuccessMessage: 'Your complaint/suggestion has been sent successfully! Thank you.', 
            formErrorMessage: 'An error occurred while sending your complaint/suggestion. Please try again.' 
        },
        footerText: '© 2025 Khaled Ezz Al-Rijal Center. All rights reserved.'
    }
};


document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded: Script loaded and DOM fully parsed.');

    // تحديث Footer
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.textContent = '© 2025 مركز خالد عز الرجال. جميع الحقوق محفوظة.';

    // تحميل اللغة المحفوظة عند بدء الصفحة
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && savedLanguage !== document.documentElement.lang) {
        toggleLanguage();
    }

    // إضافة تأثير النقر على الأزرار (Ripple Effect)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
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
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ===== تأثير إخفاء/إظهار الهيدر عند التمرير =====
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let isScrolling = false;
    
    // تأثير تغيير شفافية الهيدر عند التمرير مع إخفاء/إظهار
    function handleScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // تغيير خلفية الهيدر عند التمرير
                if (scrollTop > 100) {
                    header.style.backgroundColor = 'rgba(25, 118, 210, 0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.backgroundColor = '';
                    header.style.backdropFilter = '';
                }
                
                // إخفاء/إظهار الهيدر بناءً على اتجاه التمرير
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // التمرير للأسفل - إخفاء الهيدر
                    header.classList.add('header-hidden');
                } else {
                    // التمرير للأعلى - إظهار الهيدر
                    header.classList.remove('header-hidden');
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // تجنب القيم السالبة
                isScrolling = false;
            });
        }
        isScrolling = true;
    }
    
    // إضافة مستمع الأحداث مع throttling لتحسين الأداء
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 10); // تأخير صغير لتحسين الأداء
    });

    // تأثير الظهور التدريجي للعناصر عند التمرير
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
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .vm-card, .value-item, .service-card, .dry-eye-text, .dry-eye-image-container, .quick-consultation-section, .appointment-form-container, .contact-info-section, .contact-form-section');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // تأثير كتابة نص متحرك في Hero Section (فقط للصفحة الرئيسية)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && document.body.classList.contains('home-page')) {
        const heroTextContent = heroTitle.textContent;
        function typeWriter(element, text, speed = 50) {
            element.textContent = '';
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            setTimeout(type, 500);
        }

        if (!sessionStorage.getItem('visited')) {
            typeWriter(heroTitle, heroTextContent, 80);
            sessionStorage.setItem('visited', 'true');
        }
    }


    // تأثير الماوس على الكروت
    const hoverCards = document.querySelectorAll('.feature-card, .vm-card, .value-item, .team-image-container, .service-card, .dry-eye-image-container, .info-card');
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // تأثير تتبع الماوس على الأزرار
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2) 0%, transparent 50%), linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)';
        });
    });

    // تحسين الأداء: تأخير تحميل الصور
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // تأثير النقر على الشعار
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            this.style.transform = 'scale(1.02) rotate(2deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }

    // إضافة تأثير التمرير السلس للروابط الداخلية
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // إضافة مؤشر التحميل عند النقر على الروابط الخارجية
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href$=".html"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            setTimeout(() => {
                this.style.opacity = '';
                this.style.pointerEvents = '';
            }, 1000);
        });
    });

    // تحسين تجربة المستخدم: حفظ موضع التمرير
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    });

    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition));
        sessionStorage.removeItem('scrollPosition');
    }
    
    // إضافة تأثيرات صوتية للتفاعل (اختيارية)
    function playClickSound() {
        // يمكن إضافة ملف صوتي هنا إذا أردت
        // const audio = new Audio('assets/sounds/click.mp3');
        // audio.volume = 0.3;
        // audio.play().catch(() => {});
    }
    document.querySelectorAll('.btn, .logo').forEach(element => {
        element.addEventListener('click', playClickSound);
    });

    console.log('🎉 تم تحميل جميع التأثيرات التفاعلية بنجاح!');

    // ******************************************************
    // Gemini API Integration - Service Recommendation Feature
    // ******************************************************

    const getRecommendationBtn = document.getElementById('getRecommendationBtn');
    const consultationInput = document.getElementById('consultationInput');
    const consultationResultDiv = document.getElementById('consultationResult');
    const resultText = document.getElementById('resultText');
    const loadingSpinner = consultationResultDiv ? consultationResultDiv.querySelector('.loading-spinner') : null;

    if (getRecommendationBtn) {
        console.log('Gemini API Integration: getRecommendationBtn found. Attaching event listener.');
        getRecommendationBtn.addEventListener('click', getServiceRecommendation);
    } else {
        console.warn('Gemini API Integration: getRecommendationBtn not found. Feature may not work.');
    }
    if (!consultationInput) console.warn('Gemini API Integration: consultationInput not found.');
    if (!consultationResultDiv) console.warn('Gemini API Integration: consultationResultDiv not found.');
    if (!resultText) console.warn('Gemini API Integration: resultText not found.');
    if (!loadingSpinner) console.warn('Gemini API Integration: loadingSpinner not found.');


    async function getServiceRecommendation() {
        console.log('getServiceRecommendation function called.');
        
        if (!consultationInput || !consultationResultDiv || !resultText || !loadingSpinner) {
            console.error('Missing one or more required DOM elements for consultation feature.');
            return;
        }

        const userInput = consultationInput.value.trim();
        const currentLang = document.documentElement.lang || 'ar';
        const messages = content[currentLang].services.quickConsultation; // الوصول إلى رسائل الخطأ المترجمة

        if (!userInput) {
            consultationResultDiv.style.display = 'block';
            resultText.textContent = messages.emptyInputMessage;
            loadingSpinner.style.display = 'none';
            console.log('User input is empty.');
            return;
        }

        // Show loading state
        consultationResultDiv.style.display = 'flex';
        resultText.textContent = '';
        loadingSpinner.style.display = 'block';
        getRecommendationBtn.disabled = true;
        getRecommendationBtn.style.opacity = '0.7';
        console.log('Loading state activated.');

        const availableServices = [
            content[currentLang].services.serviceCards[0].title, // تصحيح النظر
            content[currentLang].services.serviceCards[1].title, // الجفاف وأمراض سطح العين (بعد التعديل)
            content[currentLang].services.serviceCards[2].title, // علاج الشبكية
            content[currentLang].services.serviceCards[3].title, // جراحة الماء الأبيض
            content[currentLang].services.serviceCards[4].title, // الحول
            content[currentLang].services.serviceCards[5].title  // جراحة الماء الأزرق
        ];

        const prompt = currentLang === 'ar'
            ? `بناءً على الأعراض أو الاستفسار التالي: "${userInput}"، من قائمة الخدمات المتاحة لدينا: ${availableServices.join(', ')}، ما هي الخدمة أو الخدمات الأكثر ملاءمة؟ يرجى تقديم توصية موجزة ومباشرة، مع ذكر اسم الخدمة فقط إذا كانت واضحة، أو شرح موجز إذا كان هناك أكثر من خدمة محتملة. لا تذكر أي معلومات طبية غير مؤكدة، فقط توصية بالخدمة.`
            : `Based on the following symptoms or inquiry: "${userInput}", from our list of available services: ${availableServices.join(', ')}, what is the most suitable service(s)? Please provide a concise and direct recommendation, mentioning only the service name if it's clear, or a brief explanation if there's more than one potential service. Do not mention any unconfirmed medical information, only service recommendation.`;

        let chatHistory = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload = { contents: chatHistory };
        // IMPORTANT: For local development, you need to insert your actual API Key here.
        // For Canvas environment, leave it as an empty string: const apiKey = "";
        const apiKey = "AIzaSyD2qJKikx1cGh2IngA4D215pOfAN5UwRAc"; // <--- تم تحديث مفتاح الـ API هنا
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        let retries = 0;
        const maxRetries = 3;
        const initialDelay = 1000; // 1 second

        while (retries < maxRetries) {
            try {
                console.log(`Attempting API call (retry ${retries + 1}/${maxRetries})...`);
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    const errorBody = await response.text();
                    console.error(`API response not OK: ${response.status} - ${errorBody}`);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('API call successful. Result:', result);

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    resultText.textContent = text;
                } else {
                    console.warn('API response structure unexpected or content missing.');
                    resultText.textContent = messages.errorMessage;
                }
                break; // Exit loop on success
            } catch (error) {
                console.error('Error during API call or processing:', error);
                retries++;
                if (retries < maxRetries) {
                    const delay = initialDelay * Math.pow(2, retries - 1);
                    console.log(`Retrying in ${delay / 1000} seconds...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                } else {
                    resultText.textContent = messages.apiErrorMessage;
                    console.error('Max retries reached. Displaying final error message.');
                }
            } finally {
                loadingSpinner.style.display = 'none';
                getRecommendationBtn.disabled = false;
                getRecommendationBtn.style.opacity = '1';
                console.log('Loading state deactivated. Button re-enabled.');
            }
        }
    }

    // ******************************************************
    // Appointment Form Submission
    // ******************************************************

    const appointmentForm = document.getElementById('appointmentForm');
    const formSpinner = document.getElementById('formSpinner');
    const formMessage = document.getElementById('formMessage');
    const submitButton = appointmentForm ? appointmentForm.querySelector('.form-submit-btn') : null;
    const desiredTimeInput = document.getElementById('desiredTime'); // الحصول على حقل التاريخ والوقت

    // IMPORTANT: REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_APPS_SCRIPT_URL_APPOINTMENT = "https://script.google.com/macros/s/AKfycbxCRPuZtxIeLxAXJkqbu3pfZkKzcbjqoUX6MGUlv9zibkU2lNkutFE1m2cYFJrjWeRc/exec"; 

    // تعيين الحد الأدنى للتاريخ والوقت عند تحميل الصفحة
    function setMinDateTime() {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 1); // إضافة دقيقة واحدة لضمان أن الوقت في المستقبل
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
        if (desiredTimeInput) {
            desiredTimeInput.min = minDateTime;
            console.log('Min datetime set to:', minDateTime);
        }
    }

    // استدعاء الدالة عند تحميل DOM
    if (desiredTimeInput) {
        setMinDateTime();
    }


    if (appointmentForm) {
        console.log('Appointment form found. Attaching submit listener.');
        appointmentForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 

            console.log('Appointment form submitted.');

            const currentLang = document.documentElement.lang || 'ar';
            const messages = content[currentLang].appointment;

            // التحقق من صحة التاريخ والوقت
            const selectedDateTime = new Date(desiredTimeInput.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // لإزالة الوقت من التاريخ الحالي للمقارنة باليوم فقط

            // التحقق من التاريخ الماضي (فقط للتأكيد، لأن min attribute يجب أن يتعامل مع هذا)
            if (selectedDateTime < new Date(new Date().setMinutes(new Date().getMinutes() - 1))) { // مقارنة بالوقت الحالي ناقص دقيقة لضمان عدم قبول الماضي القريب
                formMessage.textContent = messages.validation.pastDateTime;
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
                formMessage.style.opacity = '1';
                console.log('Validation failed: Past date/time selected.');
                return;
            }

            // التحقق من يوم الجمعة (يوم الجمعة هو 5 في getDay() حيث الأحد 0)
            if (selectedDateTime.getDay() === 5) { // 5 represents Friday
                formMessage.textContent = messages.validation.fridaySelection;
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
                formMessage.style.opacity = '1';
                console.log('Validation failed: Friday selected.');
                return;
            }
            
            // إخفاء أي رسائل سابقة
            formMessage.style.display = 'none';
            formMessage.classList.remove('success', 'error');
            formMessage.textContent = '';
            formSpinner.style.display = 'block'; 
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.style.opacity = '0.7';
            }

            // جمع بيانات النموذج
            const formData = new FormData(appointmentForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            try {
                console.log('Sending data to Google Apps Script:', data);
                const response = await fetch(GOOGLE_APPS_SCRIPT_URL_APPOINTMENT, { // استخدام URL الخاص بنموذج المواعيد
                    method: 'POST',
                    mode: 'no-cors', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                formMessage.textContent = messages.successMessage;
                formMessage.classList.add('success');
                formMessage.style.display = 'block';
                formMessage.style.opacity = '1';
                appointmentForm.reset(); 
                console.log('Form submission assumed successful (due to no-cors mode).');

            } catch (error) {
                console.error('Error submitting form:', error); 
                formMessage.textContent = messages.errorMessage;
                formMessage.classList.add('error');
                formMessage.style.display = 'block';
                formMessage.style.opacity = '1';
            } finally {
                formSpinner.style.display = 'none'; 
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.style.opacity = '1';
                }
                // إعادة تعيين الحد الأدنى للتاريخ بعد الإرسال الناجح أو الفشل
                setMinDateTime();
            }
        });
    } else {
        console.warn('Appointment form not found. Form submission feature will not work.');
    }

    // ******************************************************
    // Contact Form Submission (Complaints/Suggestions)
    // ******************************************************

    const contactForm = document.getElementById('contactForm');
    const contactFormSpinner = document.getElementById('contactFormSpinner');
    const contactFormMessage = document.getElementById('contactFormMessage');
    const contactSubmitButton = contactForm ? contactForm.querySelector('.contact-submit-btn') : null;

    // IMPORTANT: REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL FOR CONTACT FORM
    const GOOGLE_APPS_SCRIPT_URL_CONTACT = "https://script.google.com/macros/s/AKfycbz4K7_0gslphMWqRUFiyygEKQDDjjIAWNY-WowHH8pp_Qjh07WdQp_sbVySCpBfxz_I/exec"; 

    if (contactForm) {
        console.log('Contact form found. Attaching submit listener.');
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            console.log('Contact form submitted.');

            // إخفاء أي رسائل سابقة
            contactFormMessage.style.display = 'none';
            contactFormMessage.classList.remove('success', 'error');
            contactFormMessage.textContent = '';
            contactFormSpinner.style.display = 'block';
            if (contactSubmitButton) {
                contactSubmitButton.disabled = true;
                contactSubmitButton.style.opacity = '0.7';
            }

            const currentLang = document.documentElement.lang || 'ar';
            const messages = content[currentLang].contact;

            // جمع بيانات النموذج
            const formData = new FormData(contactForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }

            try {
                console.log('Sending contact form data to Google Apps Script:', data);
                const response = await fetch(GOOGLE_APPS_SCRIPT_URL_CONTACT, { // استخدام URL الخاص بنموذج الاتصال
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                contactFormMessage.textContent = messages.formSuccessMessage;
                contactFormMessage.classList.add('success');
                contactFormMessage.style.display = 'block';
                contactFormMessage.style.opacity = '1';
                contactForm.reset();
                console.log('Contact form submission assumed successful (due to no-cors mode).');

            } catch (error) {
                console.error('Error submitting contact form:', error);
                contactFormMessage.textContent = messages.formErrorMessage;
                contactFormMessage.classList.add('error');
                contactFormMessage.style.display = 'block';
                contactFormMessage.style.opacity = '1';
            } finally {
                contactFormSpinner.style.display = 'none';
                if (contactSubmitButton) {
                    contactSubmitButton.disabled = false;
                    contactSubmitButton.style.opacity = '1';
                }
            }
        });
    } else {
        console.warn('Contact form not found. Contact form submission feature will not work.');
    }
});

// وظيفة تبديل اللغة
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.lang || 'ar';
    
    if (currentLang === 'ar') {
        html.lang = 'en';
        html.dir = 'ltr';
        html.style.textAlign = 'left';
        updateContent('en');
    } else {
        html.lang = 'ar';
        html.dir = 'rtl';
        html.style.textAlign = 'right';
        updateContent('ar');
    }
    
    updateLanguageButton();
    localStorage.setItem('preferred-language', html.lang);
}

// تحديث المحتوى بناءً على اللغة
function updateContent(lang) {
    console.log('updateContent called for language:', lang); 
    const html = document.documentElement; 
    const currentPath = window.location.pathname;
    let pageData; 

    // تحديث روابط التنقل (مشتركة بين جميع الصفحات)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link, index) => {
        if (content[lang].navLinks[index]) link.textContent = content[lang].navLinks[index];
    });
    
    // تحديث محتوى الصفحات الفردية
    if (currentPath.includes('about.html')) {
        pageData = content[lang].about;
        document.title = lang === 'ar' ? 'من نحن - مركز خالد عز الرجال' : 'About Us - Khaled Ezz Al-Rijal Center';
        
        // تحديث قسم Hero
        const aboutHeroTitle = document.querySelector('.about-hero h1');
        const aboutHeroText = document.querySelector('.about-hero p');
        if (aboutHeroTitle) aboutHeroTitle.textContent = pageData.heroTitle;
        if (aboutHeroText) aboutHeroText.textContent = pageData.heroText;

        // تحديث قسم الفريق الطبي
        const teamSectionTitle = document.querySelector('.team-section .section-title h2');
        const teamSectionDesc = document.querySelector('.team-section .section-title p');
        const teamOverlayTitle = document.querySelector('.team-overlay h3');
        const teamOverlayDesc = document.querySelector('.team-overlay p');
        if (teamSectionTitle) teamSectionTitle.textContent = pageData.teamSectionTitle;
        if (teamSectionDesc) teamSectionDesc.textContent = pageData.teamSectionDesc;
        if (teamOverlayTitle) teamOverlayTitle.textContent = pageData.teamOverlayTitle;
        if (teamOverlayDesc) teamOverlayDesc.textContent = pageData.teamOverlayDesc;

        // تحديث قسم الرؤية والرسالة
        const visionMissionTitle = document.querySelector('.vision-mission .section-title h2');
        const visionMissionDesc = document.querySelector('.vision-mission .section-title p');
        const vmCards = document.querySelectorAll('.vm-card');
        if (visionMissionTitle) visionMissionTitle.textContent = pageData.visionMissionTitle;
        if (visionMissionDesc) visionMissionDesc.textContent = pageData.visionMissionDesc;
        if (vmCards[0]) {
            vmCards[0].querySelector('h3').textContent = pageData.visionCardTitle;
            vmCards[0].querySelector('p').textContent = pageData.visionCardDesc;
        }
        if (vmCards[1]) {
            vmCards[1].querySelector('h3').textContent = pageData.missionCardTitle;
            vmCards[1].querySelector('p').textContent = pageData.missionCardDesc;
        }

        // تحديث قسم الإحصائيات (إذا كان موجودًا)
        const statsSectionTitle = document.querySelector('.stats-section .section-title h2');
        const statsSectionDesc = document.querySelector('.stats-section .section-title p');
        const statLabels = document.querySelectorAll('.stat-label');
        if (statsSectionTitle) statsSectionTitle.textContent = pageData.statsSectionTitle;
        if (statsSectionDesc) statsSectionDesc.textContent = pageData.statsSectionDesc;
        if (statLabels[0] && pageData.statLabels[0]) {
            statLabels[0].textContent = pageData.statLabels[0];
        }
        for (let i = 1; i < statLabels.length; i++) {
            const statItem = statLabels[i].closest('.stat-item');
            if (statItem) statItem.style.display = 'none';
        }

        // تحديث قسم القيم الأساسية
        const valuesSectionTitle = document.querySelector('.values-section .section-title h2');
        const valuesSectionDesc = document.querySelector('.values-section .section-title p');
        const valueItems = document.querySelectorAll('.value-item');
        if (valuesSectionTitle) valuesSectionTitle.textContent = pageData.valuesSectionTitle;
        if (valuesSectionDesc) valuesSectionDesc.textContent = pageData.valuesSectionDesc;
        valueItems.forEach((item, index) => {
            const title = item.querySelector('h4');
            const desc = item.querySelector('p');
            if (title && pageData.valueItems[index]) title.textContent = pageData.valueItems[index].title;
            if (desc && pageData.valueItems[index]) desc.textContent = pageData.valueItems[index].desc;
        });

    } else if (currentPath.includes('services.html')) {
        pageData = content[lang].services;
        document.title = lang === 'ar' ? 'الخدمات - مركز خالد عز الرجال' : 'Services - Khaled Ezz Al-Rijal Center';
        
        // تحديث قسم Hero
        const servicesHeroTitle = document.querySelector('.services-hero h1');
        const servicesHeroText = document.querySelector('.services-hero p');
        if (servicesHeroTitle) servicesHeroTitle.textContent = pageData.heroTitle;
        if (servicesHeroText) servicesHeroText.textContent = pageData.heroText;

        // تحديث قسم الخدمات الرئيسية
        const mainServicesTitle = document.querySelector('.features .section-title h2');
        const mainServicesDesc = document.querySelector('.features .section-title p');
        const serviceCards = document.querySelectorAll('.service-card');
        if (mainServicesTitle) mainServicesTitle.textContent = pageData.mainServicesTitle;
        if (mainServicesDesc) mainServicesDesc.textContent = pageData.mainServicesDesc;
        serviceCards.forEach((card, index) => {
            const icon = card.querySelector('.service-icon');
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            if (icon && pageData.serviceCards[index]) icon.textContent = pageData.serviceCards[index].icon;
            if (title && pageData.serviceCards[index]) title.textContent = pageData.serviceCards[index].title;
            if (desc && pageData.serviceCards[index]) desc.textContent = pageData.serviceCards[index].desc;
        });

        // تحديث قسم وحدة علاج الجفاف
        const dryEyeSectionTitle = document.querySelector('.dry-eye-section .section-title h2');
        const dryEyeSectionDesc = document.querySelector('.dry-eye-section .section-title p');
        const dryEyeContentTitle = document.querySelector('.dry-eye-text h2');
        const dryEyeListItems = document.querySelectorAll('.dry-eye-list li');
        if (dryEyeSectionTitle) dryEyeSectionTitle.textContent = pageData.dryEyeSectionTitle;
        if (dryEyeSectionDesc) dryEyeSectionDesc.textContent = pageData.dryEyeSectionDesc;
        if (dryEyeContentTitle) dryEyeContentTitle.textContent = pageData.dryEyeContentTitle;
        dryEyeListItems.forEach((item, index) => {
            if (pageData.dryEyeList[index]) item.lastChild.textContent = pageData.dryEyeList[index];
        });
        
        // تحديث قسم الاستشارة السريعة
        const qcSectionTitle = document.querySelector('.quick-consultation-section .section-title h2');
        const qcSectionDesc = document.querySelector('.quick-consultation-section .section-title p');
        const qcInput = document.getElementById('consultationInput');
        const qcButton = document.getElementById('getRecommendationBtn');
        const consultationResultDiv = document.getElementById('consultationResult');

        if (qcSectionTitle) qcSectionTitle.textContent = pageData.quickConsultation.sectionTitle;
        if (qcSectionDesc) qcSectionDesc.textContent = pageData.quickConsultation.sectionDesc;
        if (qcInput) qcInput.placeholder = pageData.quickConsultation.inputPlaceholder;
        if (qcButton) qcButton.innerHTML = pageData.quickConsultation.buttonText;
        
        // Reset the consultation result display when language changes
        if (consultationResultDiv) {
            consultationResultDiv.style.display = 'none';
            const resultTextElement = consultationResultDiv.querySelector('#resultText');
            if (resultTextElement) resultTextElement.textContent = '';
            const spinnerElement = consultationResultDiv.querySelector('.loading-spinner');
            if (spinnerElement) spinnerElement.style.display = 'none';
        }

    } else if (currentPath.includes('appointment.html')) {
        pageData = content[lang].appointment;
        document.title = lang === 'ar' ? 'احجز موعد - مركز خالد عز الرجال' : 'Book Appointment - Khaled Ezz Al-Rijal Center';

        // Update hero section
        const apptHeroTitle = document.querySelector('.appointment-hero h1');
        const apptHeroText = document.querySelector('.appointment-hero p');
        if (apptHeroTitle) apptHeroTitle.textContent = pageData.heroTitle;
        if (apptHeroText) apptHeroText.textContent = pageData.heroText;

        // Update form section title and description
        const formSectionTitle = document.querySelector('.appointment-form-section .section-title h2');
        const formSectionDesc = document.querySelector('.appointment-form-section .section-title p');
        if (formSectionTitle) formSectionTitle.textContent = pageData.formTitle;
        if (formSectionDesc) formSectionDesc.textContent = pageData.formDesc;

        // Update form labels and placeholders
        document.querySelector('label[for="fullName"]').textContent = pageData.labels.fullName;
        document.querySelector('label[for="phoneNumber"]').textContent = pageData.labels.phoneNumber;
        document.querySelector('input[name="phoneNumber"]').setAttribute('title', pageData.validation.phoneNumber);
        document.querySelector('label[for="nationalId"]').textContent = pageData.labels.nationalId;
        document.querySelector('input[name="nationalId"]').setAttribute('title', pageData.validation.nationalId);
        document.querySelector('label[for="specialty"]').textContent = pageData.labels.specialty;
        document.querySelector('label[for="age"]').textContent = pageData.labels.age;
        document.querySelector('input[name="age"]').setAttribute('title', pageData.validation.age);
        document.querySelector('label[for="desiredTime"]').textContent = pageData.labels.desiredTime;
        
        // Update specialty options
        const specialtySelect = document.getElementById('specialty');
        if (specialtySelect) {
            while (specialtySelect.options.length > 1) {
                specialtySelect.remove(1);
            }
            const specialtyKeys = ['visionCorrection', 'dryEye', 'retina', 'cataract', 'strabismus', 'glaucoma', 'generalConsultation', 'followUp'];
            specialtyKeys.forEach(key => {
                const option = document.createElement('option');
                option.value = pageData.specialtyOptions[key];
                option.textContent = pageData.specialtyOptions[key];
                specialtySelect.appendChild(option);
            });
        }

        // Update submit button text
        const submitBtn = document.querySelector('.form-submit-btn');
        if (submitBtn) submitBtn.innerHTML = pageData.submitButton;

        // Reset form message display
        const formMessageElement = document.getElementById('formMessage');
        if (formMessageElement) {
            formMessageElement.style.display = 'none';
            formMessageElement.classList.remove('success', 'error');
            formMessageElement.textContent = '';
        }

    } else if (currentPath.includes('contact.html')) {
        pageData = content[lang].contact;
        document.title = lang === 'ar' ? 'تواصل معنا - مركز خالد عز الرجال' : 'Contact Us - Khaled Ezz Al-Rijal Center';

        // Update hero section
        const contactHeroTitle = document.querySelector('.contact-hero h1');
        const contactHeroText = document.querySelector('.contact-hero p');
        if (contactHeroTitle) contactHeroTitle.textContent = pageData.heroTitle;
        if (contactHeroText) contactHeroText.textContent = pageData.heroText;

        // Update contact info section
        const infoSectionTitle = document.querySelector('.contact-info-section .section-title h2');
        const infoSectionDesc = document.querySelector('.contact-info-section .section-title p');
        if (infoSectionTitle) infoSectionTitle.textContent = pageData.infoSectionTitle;
        if (infoSectionDesc) infoSectionDesc.textContent = pageData.infoSectionDesc;

        // Update Zaqaziq Clinic card
        const zaqaziqClinicCard = document.getElementById('zaqaziqClinic');
        if (zaqaziqClinicCard) {
            zaqaziqClinicCard.querySelector('h3').textContent = pageData.zaqaziqClinic.title + ' 🏥';
            // تحديث النصوص داخل li باستخدام .card-label و .card-value
            zaqaziqClinicCard.querySelector('li:nth-of-type(1) .card-label').textContent = pageData.zaqaziqClinic.workingDaysLabel;
            zaqaziqClinicCard.querySelector('li:nth-of-type(1) .card-value').textContent = pageData.zaqaziqClinic.workingDays;
            
            zaqaziqClinicCard.querySelector('li:nth-of-type(2) .card-label').textContent = pageData.zaqaziqClinic.generalHoursLabel;
            zaqaziqClinicCard.querySelector('li:nth-of-type(2) .card-value').textContent = pageData.zaqaziqClinic.generalHours;

            zaqaziqClinicCard.querySelector('li:nth-of-type(3) .card-label').textContent = pageData.zaqaziqClinic.drKhaledHoursLabel;
            zaqaziqClinicCard.querySelector('li:nth-of-type(3) .card-value').textContent = pageData.zaqaziqClinic.drKhaledHours;

            zaqaziqClinicCard.querySelector('li:nth-of-type(4) .card-label').textContent = pageData.zaqaziqClinic.consultantHoursLabel;
            zaqaziqClinicCard.querySelector('li:nth-of-type(4) .card-value').textContent = pageData.zaqaziqClinic.consultantHours;

            zaqaziqClinicCard.querySelector('li:nth-of-type(5) .card-label').textContent = pageData.zaqaziqClinic.addressLabel;
            zaqaziqClinicCard.querySelector('li:nth-of-type(5) .card-value').textContent = pageData.zaqaziqClinic.address;

            // تحديث روابط الخرائط وواتساب وفيسبوك
            zaqaziqClinicCard.querySelector('a[href*="maps.app.goo.gl"]').textContent = pageData.zaqaziqClinic.mapLinkText;
            zaqaziqClinicCard.querySelector('a[href*="maps.app.goo.gl"]').href = pageData.zaqaziqClinic.mapLink;
            zaqaziqClinicCard.querySelector('a[href*="whatsapp.com"]').textContent = pageData.zaqaziqClinic.whatsappLinkText;
            zaqaziqClinicCard.querySelector('a[href*="whatsapp.com"]').href = pageData.zaqaziqClinic.whatsappLink;
            zaqaziqClinicCard.querySelector('a[href*="facebook.com"]').textContent = pageData.zaqaziqClinic.facebookLinkText;
            zaqaziqClinicCard.querySelector('a[href*="facebook.com"]').href = pageData.zaqaziqClinic.facebookLink;
        }

        // Update Ibrahimiya Clinic card
        const ibrahimiyaClinicCard = document.getElementById('ibrahimiyaClinic');
        if (ibrahimiyaClinicCard) {
            ibrahimiyaClinicCard.querySelector('h3').textContent = pageData.ibrahimiyaClinic.title + ' 🏥';
            // تحديث النصوص داخل li باستخدام .card-label و .card-value
            ibrahimiyaClinicCard.querySelector('li:nth-of-type(1) .card-label').textContent = pageData.ibrahimiyaClinic.workingDaysLabel;
            ibrahimiyaClinicCard.querySelector('li:nth-of-type(1) .card-value').textContent = pageData.ibrahimiyaClinic.workingDays;

            ibrahimiyaClinicCard.querySelector('li:nth-of-type(2) .card-label').textContent = pageData.ibrahimiyaClinic.generalHoursLabel;
            ibrahimiyaClinicCard.querySelector('li:nth-of-type(2) .card-value').textContent = pageData.ibrahimiyaClinic.generalHours;

            ibrahimiyaClinicCard.querySelector('li:nth-of-type(3) .card-label').textContent = pageData.ibrahimiyaClinic.addressLabel;
            ibrahimiyaClinicCard.querySelector('li:nth-of-type(3) .card-value').textContent = pageData.ibrahimiyaClinic.address;

            // تحديث روابط الخرائط وواتساب وفيسبوك
            ibrahimiyaClinicCard.querySelector('a[href*="maps.app.goo.gl"]').textContent = pageData.ibrahimiyaClinic.mapLinkText;
            ibrahimiyaClinicCard.querySelector('a[href*="maps.app.goo.gl"]').href = pageData.ibrahimiyaClinic.mapLink;
            ibrahimiyaClinicCard.querySelector('a[href*="whatsapp.com"]').textContent = pageData.ibrahimiyaClinic.whatsappLinkText;
            ibrahimiyaClinicCard.querySelector('a[href*="whatsapp.com"]').href = pageData.ibrahimiyaClinic.whatsappLink;
            ibrahimiyaClinicCard.querySelector('a[href*="facebook.com"]').textContent = pageData.ibrahimiyaClinic.facebookLinkText;
            ibrahimiyaClinicCard.querySelector('a[href*="facebook.com"]').href = pageData.ibrahimiyaClinic.facebookLink;
        }

        // Update General Phone Numbers
        const generalPhoneNumbersSection = document.querySelector('.general-contact-info');
        if (generalPhoneNumbersSection) {
            generalPhoneNumbersSection.querySelector('h3').textContent = pageData.generalPhoneNumbersTitle + ' 📞';
            const phoneLinks = generalPhoneNumbersSection.querySelectorAll('.phone-numbers a');
            phoneLinks.forEach((link, index) => {
                if (pageData.phoneNumbers[index]) {
                    link.textContent = pageData.phoneNumbers[index];
                    link.href = `tel:${pageData.phoneNumbers[index].replace(/\s/g, '')}`;
                }
            });
        }

        // Update contact form section
        const contactFormSectionTitle = document.querySelector('.contact-form-section .section-title h2');
        const contactFormSectionDesc = document.querySelector('.contact-form-section .section-title p');
        if (contactFormSectionTitle) contactFormSectionTitle.textContent = pageData.formSectionTitle;
        if (contactFormSectionDesc) contactFormSectionDesc.textContent = pageData.formSectionDesc;

        // Update form labels and button
        document.querySelector('label[for="contactName"]').textContent = pageData.formLabels.name;
        document.querySelector('label[for="contactPhone"]').textContent = pageData.formLabels.phone; 
        document.querySelector('label[for="contactMessage"]').textContent = pageData.formLabels.message;
        document.querySelector('.contact-submit-btn').innerHTML = pageData.formSubmitButton;

    } else { // This block handles index.html
        pageData = content[lang].home;
        document.title = lang === 'ar' ? 'الرئيسية - مركز خالد عز الرجال' : 'Home - Khaled Ezz Al-Rijal Center';

        // تحديث Hero Section
        const heroTitle = document.querySelector('.hero h1');
        const heroText = document.querySelector('.hero p');
        const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
        if (heroTitle) heroTitle.textContent = pageData.heroTitle;
        if (heroText) heroText.textContent = pageData.heroText;
        if (ctaButtons[0]) ctaButtons[0].innerHTML = pageData.ctaButtons[0];
        if (ctaButtons[1]) ctaButtons[1].innerHTML = pageData.ctaButtons[1];

        // تحديث قسم الميزات
        const sectionTitle = document.querySelector('.features .section-title h2');
        const sectionDesc = document.querySelector('.features .section-title p');
        const featureCards = document.querySelectorAll('.feature-card');
        if (sectionTitle) sectionTitle.textContent = pageData.sectionTitle;
        if (sectionDesc) sectionDesc.textContent = pageData.sectionDesc;
        featureCards.forEach((card, index) => {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            if (title && pageData.featureCards[index]) title.textContent = pageData.featureCards[index].title;
            if (desc && pageData.featureCards[index]) desc.textContent = pageData.featureCards[index].desc;
        });
    }
    
    // تحديث Footer (مشترك بين الصفحات)
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.textContent = content[lang].footerText;
}

// تحديث نص زر اللغة
function updateLanguageButton() {
    const langButton = document.querySelector('.lang-toggle');
    const langText = document.querySelector('.lang-text');
    const currentLang = document.documentElement.lang || 'ar';
    
    if (langButton && langText) {
        if (currentLang === 'ar') {
            langText.textContent = 'English';
            langButton.setAttribute('title', 'Switch to English');
        } else {
            langText.textContent = 'عربي';
            langButton.setAttribute('title', 'التبديل للعربية');
        }
    }
}