// Données extraites du document
const servicesData = [
    {
        id: "birth_ma_known",
        category: "الولادات",
        title: "تسجيل ولادة من أبوين معلومين وقعت بالمغرب",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "أصل شهادة الولادة مسلمة من المستشفى أو السلطة المحلية",
            "شهادة عدم التسجيل بالحالة المدنية للولادات مسلمة من ضابط الحالة المدنية",
            "نسخة من عقد زواج أو الإقرار بنبوة عند الاقتضاء",
            "نسخة كاملة أو موجزة أو بطاقة تعريف لولادة أبوي المولود",
            "كناش الحالة المدنية عند وجوده"
        ]
    },
    {
        id: "birth_unknown_father",
        category: "الولادات",
        title: "تسجيل ولادة من أب مجهول",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "أصل شهادة الولادة مسلمة من المستشفى أو السلطة المحلية",
            "شهادة عدم التسجيل بالحالة المدنية للولادات",
            "اختيار اسم شخصي وعائلي للأب من قبل مقدمة الطلب وتضمينه بمقال الدعوى",
            "إذا وقعت الولادة خارج المغرب ضروري مرور سنة عن تاريخ الولادة لتسجيلها بالمغرب"
        ]
    },
    {
        id: "birth_abroad",
        category: "الولادات",
        title: "تسجيل ولادة من أبوين معلومين وقعت بالخارج",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية مع إرفاقه بالوثائق التالية",
            "أصل شهادة الولادة مسلمة من الجهة المختصة مع ترجمتها إذا كانت بلغة أجنبية لدى ترجمان محلف",
            "شهادة عدم التسجيل بالحالة المدنية للولادات بالمغرب",
            "شهادة السكنى خاصة بطالب التسجيل",
            "نسخة من عقد الزواج مع ما يفيد تذييله بالصيغة التنفيذية إذا كان مبرم بالخارج",
            "نسخة كاملة أو موجزة لولادتي الطفل(ة) أو نسخة من بطاقة تعريفهما الوطنية"
        ]
    },
    {
        id: "death_ma",
        category: "الوفيات",
        title: "تسجيل وفاة وقعت بالمغرب",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "أصل شهادة الوفاة مسلمة من المستشفى أو السلطة المحلية لمكان وقوع الوفاة",
            "شهادة عدم التسجيل بالحالة المدنية مسلمة من ضابط الحالة المدنية للمكان الذي وقعت فيه الوفاة",
            "نسخة كاملة أو موجزة للمتوفى(ة) أو نسخة من بطاقته(ا) الوطنية للتعريف",
            "كناش الحالة المدنية لإثبات القرابة",
            "أن يكون طالب التسجيل من أقرباء المتوفى"
        ]
    },
    {
        id: "death_abroad",
        category: "الوفيات",
        title: "تسجيل وفاة وقعت خارج المغرب",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "أصل شهادة الوفاة مسلمة من الجهة المختصة مع ترجمتها في حالة ما تكون بلغة أجنبية",
            "شهادة عدم التسجيل بالحالة المدنية للوفيات",
            "شهادة سكنى طالب(ة) تسجيل الوفاة",
            "أن يكون طالب التسجيل من أقرباء المتوفى",
            "إذا وقعت الوفاة خارج المغرب فمن الضروري مرور سنة كاملة من تاريخ الوفاة لتسجيلها بالمغرب"
        ]
    },
    {
        id: "correction_additions",
        category: "التعديلات",
        title: "إصلاح الرسوم والتنقيحات والإضافات",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "النسخة الكاملة لصاحب(ة) الطلب",
            "نسخة كاملة للأب أو الأم المراد إضافة البيان الصحيح في رسم ولادته",
            "نسخة كاملة للجد في حالة كون الإضافة أو الإصلاح ينصب على الجد من جهة الأب أو الأم",
            "ضروري من الإدلاء بكناش الحالة المدنية للمعني(ة) أو والده(ا) أو جده(ا) حسب الأحوال"
        ]
    },
    {
        id: "change_first_name",
        category: "التعديلات",
        title: "تغيير الاسم الشخصي",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "النسخة الكاملة لصاحب(ة) الطلب",
            "لفيف عدلي يثبت الاسم الحقيقي للطالب(ة)",
            "الاستماع لشهود اللفيف عند الاقتضاء في جلسة بحث تعقدها المحكمة",
            "الإدلاء بكل ما هو مفيد في شأن الاسم الحقيقي"
        ]
    },
    {
        id: "change_date",
        category: "التعديلات",
        title: "تغيير اليوم أو الشهر أو السنة",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "النسخة الكاملة لصاحب(ة) الطلب",
            "حجج وأدلة كتابية تفيد الازدياد بالتاريخ المطالب به أو يفيد التاريخ الصحيح للولادة تكون أقوى حجة من التاريخ المضمن بصلب النسخة الكاملة للطالب"
        ]
    },
    {
        id: "add_day_month",
        category: "التعديلات",
        title: "إضافة بيان اليوم والشهر",
        requirements: [
            "مقال افتتاحي مرفوع للسيد رئيس المحكمة الابتدائية",
            "النسخة الكاملة لصاحب(ة) الطلب",
            "اختيار يوم وشهر معين مع ضرورة كونه مناسب ويوافق المنطق المعيار في جميع الأحوال",
            "عدم تعارض التاريخ المختار مع البيانات الأصلية للطالب"
        ]
    }
];

// Éléments du DOM
const categorySection = document.getElementById('category-section');
const servicesSection = document.getElementById('services-section');
const categoriesGrid = document.getElementById('categories-grid');
const servicesGrid = document.getElementById('services-grid');
const backBtn = document.getElementById('back-to-categories');
const selectedCategoryTitle = document.getElementById('selected-category-title');

// Éléments de la modale
const modal = document.getElementById('requirements-modal');
const closeModal = document.getElementById('close-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalTitle = document.getElementById('modal-title');
const requirementsList = document.getElementById('requirements-list');

// Extraire les catégories uniques
const categories = [...new Set(servicesData.map(item => item.category))];

// Initialisation : Afficher les catégories
function init() {
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'btn-category';
        btn.innerText = category;
        btn.onclick = () => showServices(category);
        categoriesGrid.appendChild(btn);
    });
}

// Afficher les services d'une catégorie spécifique
function showServices(category) {
    categorySection.className = 'hidden-section';
    servicesSection.className = 'active-section';
    selectedCategoryTitle.innerText = `الطلبات المتعلقة بـ: ${category}`;
    
    // Vider la grille précédente
    servicesGrid.innerHTML = '';

    // Filtrer et afficher les services
    const filteredServices = servicesData.filter(item => item.category === category);
    filteredServices.forEach(service => {
        const btn = document.createElement('button');
        btn.className = 'btn-service';
        btn.innerText = service.title;
        btn.onclick = () => showRequirements(service);
        servicesGrid.appendChild(btn);
    });
}

// Retour à l'écran principal
backBtn.onclick = () => {
    servicesSection.className = 'hidden-section';
    categorySection.className = 'active-section';
};

// Afficher la modale avec les documents
function showRequirements(service) {
    modalTitle.innerText = `الوثائق المطلوبة لـ: ${service.title}`;
    requirementsList.innerHTML = '';
    
    service.requirements.forEach(req => {
        const li = document.createElement('li');
        li.innerText = req;
        requirementsList.appendChild(li);
    });

    modal.style.display = 'block';
}

// Fermer la modale
function hideModal() {
    modal.style.display = 'none';
}

closeModal.onclick = hideModal;
closeModalBtn.onclick = hideModal;

// Lancer l'application
init();