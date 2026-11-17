/**
 * ====================================================================
 * DATA STORE - IBRAHIM HAIDAR ABDULLAH WAZNI PORTFOLIO & BLOG
 * ====================================================================
 * All portfolio information, courses, books, tech stack, and blog posts
 * are centralized here in bilingual format (Arabic & English).
 * Easily update, add, or customize anything below without editing HTML.
 */

const portfolioData = {
  profile: {
    name: {
      ar: "إبراهيم حيدر عبد الله وزني",
      en: "Ibrahim Haidar Abdullah Wazni"
    },
    shortName: {
      ar: "إبراهيم وزني",
      en: "Ibrahim Wazni"
    },
    roleBadge: {
      ar: "طالب حاسبات وذكاء اصطناعي '26",
      en: "CS & AI Freshman '26"
    },
    headline: {
      ar: "طالب سنة أولى بكلية الحاسبات والذكاء الاصطناعي – جامعة حلوان (جامعة العاصمة) | مهندس برمجيات وباحث ذكاء اصطناعي طموح",
      en: "First-Year Computer Science & AI Student – Helwan University (Capital University) | Aspiring Software Engineer & AI Researcher"
    },
    university: {
      ar: "كلية الحاسبات والذكاء الاصطناعي – جامعة حلوان (جامعة العاصمة)",
      en: "Faculty of Computers & Artificial Intelligence – Helwan University (Capital University)"
    },
    avatar: "profile.jpg",
    location: {
      ar: "القاهرة، مصر",
      en: "Cairo, Egypt"
    },
    email: "ibrahim.haidar.wazni@gmail.com",
    telegram: "https://t.me/ibrahim_wazni",
    whatsapp: "https://wa.me/201000000000", // Easily customizable
    github: "https://github.com/ibrahay-04",
    linkedin: "https://linkedin.com/in/ibrahim-wazni",
    bio: {
      ar: "أنا إبراهيم حيدر، طالب في السنة الأولى بكلية الحاسبات والذكاء الاصطناعي. أؤمن بأن البرمجة ليست مجرد كتابة أسطر برمجية، بل هي فن التفكير المنطقي والهندسة المنضبطة. أكرّس يومياً ما بين 8 إلى 12 ساعة من المذاكرة المركزة والممارسة العملية لبناء أساس أكاديمي وتطبيقي صلب—بدءاً من فهم العتاد والبوابات المنطقية، وصولاً إلى لغات البرمجة منخفضة المستوى مثل C وهياكل البيانات. هدفي المستقبلي هو التميز في هندسة البرمجيات وخوارزميات الذكاء الاصطناعي المتقدمة والمنافسة على المنح الدولية.",
      en: "I am Ibrahim Haidar, a passionate first-year student at the Faculty of Computers & Artificial Intelligence. I strongly believe that programming is not merely typing lines of code, but the art of structured logical problem-solving and rigorous engineering. I dedicate 8–12 hours daily to deep, deliberate study and hands-on practice to forge an unshakeable foundation—from understanding logic gates and computer architecture to low-level C programming and algorithms. My vision is to excel in modern software engineering and deep learning while pursuing top international AI master's scholarships."
    },
    stats: [
      {
        id: "study_hours",
        number: "8-12",
        unit: { ar: "ساعة/يوم", en: "hrs/day" },
        label: { ar: "ساعات التركيز والممارسة اليومية", en: "Daily Deep Work & Practice" },
        icon: "flame"
      },
      {
        id: "academic_year",
        number: "Year 1",
        unit: { ar: "دفعة 2026", en: "Class '26" },
        label: { ar: "حاسبات وذكاء اصطناعي - حلوان", en: "FCAI Helwan (Capital Univ.)" },
        icon: "graduation-cap"
      },
      {
        id: "typing_speed",
        number: "60+",
        unit: { ar: "كلمة/دقيقة", en: "WPM" },
        label: { ar: "الكتابة باللمس السريعة (AR/EN)", en: "Touch Typing Mastery" },
        icon: "keyboard"
      },
      {
        id: "focus_streak",
        number: "100%",
        unit: { ar: "انضباط", en: "Discipline" },
        label: { ar: "شغف الفهم من الصفر حتى الإتقان", en: "Ground-up Mastery Mindset" },
        icon: "target"
      }
    ]
  },

  aboutMindset: {
    philosophy: {
      ar: "فلسفتي: البداية من أدنى مستوى لفهم أعمق نظام",
      en: "My Philosophy: Understanding from the Transistor to the Cloud"
    },
    paragraphs: [
      {
        ar: "لا أكتفي بحفظ الدوال الجاهزة أو النقل الأعمى للأكواد؛ شغفي الحقيقي يكمن في إدراك 'كيف ولماذا' يعمل الحاسوب. أبدأ من تحليل الدوائر الرقمية عبر محاكيات مثل Falstad CircuitJS لفهم البوابات والقلابات، ثم أترجم هذا التفكير المنطقي إلى برامج قوية بلغة C متتبعاً كل بايت ومؤشر وذاكرة حية يدوياً على الورق قبل تشغيل المترجم.",
        en: "I don't settle for memorizing high-level syntax or blindly copying snippets. My true passion lies in understanding 'how and why' computers behave the way they do. I dive into digital logic simulation using tools like Falstad CircuitJS to see how gates and flip-flops operate, then translate that logical precision into robust C code, tracing every byte, pointer, and memory layout by hand on paper before hitting compile."
      },
      {
        ar: "أعتمد نظام إنتاجية صارم يعتمد على التعلم التراكمي: تنظيم كامل للمواد الأكاديمية على Notion، واستخدام التكرار المتباعد عبر Anki لترسيخ المفاهيم المعمارية والمصطلحات التقنية، وتتبع جلسات التركيز العميق عبر تطبيق YPT لبناء انضباط حديدي يستمر طوال سنوات الدراسة الجامعية وما بعدها.",
        en: "I adhere to a high-discipline system built on atomic compounding: architecting a central Second Brain on Notion, employing spaced repetition via Anki to internalize technical concepts and English vocabulary, and tracking deep focus sessions with YPT to cultivate relentless discipline that lasts through university and into the professional world."
      }
    ],
    touchTyping: {
      title: {
        ar: "رحلة إتقان الكتابة باللمس (Touch Typing)",
        en: "Touch-Typing Mastery Journey"
      },
      desc: {
        ar: "التفكير بسرعة الأفكار دون النظر للوحة المفاتيح. أتقن الكتابة باللمس بكلتا اللغتين العربية والإنجليزية لزيادة تدفق التركيز أثناء البرمجة وكتابة الملاحظات التقنية.",
        en: "Thinking at the speed of thought without glancing at keys. Mastering blind touch typing in both Arabic and English to maintain unbroken cognitive flow during coding and technical writing."
      }
    },
    disciplinePillars: {
      title: {
        ar: "ركائز الانضباط اليومي (Daily Discipline)",
        en: "Daily Discipline Pillars"
      },
      items: [
        {
          num: "01",
          title: { ar: "فهم العتاد قبل البرمجيات:", en: "Hardware Before Software:" },
          desc: {
            ar: "التعلم من القاع (Bottom-Up) بدءاً من الدوائر المنطقية والذاكرة إلى لغة C.",
            en: "Ground-up learning starting from digital logic and memory up to C."
          }
        },
        {
          num: "02",
          title: { ar: "8-12 ساعة عمل عميق (Deep Work):", en: "8–12 Hours Net Deep Work:" },
          desc: {
            ar: "تتبع دقيق عبر YPT للقضاء التام على المشتتات والتركيز على الإنتاج الحقيقي.",
            en: "Uncompromising tracking via YPT to eliminate distractions and build stamina."
          }
        },
        {
          num: "03",
          title: { ar: "التكرار المتباعد والدماغ الثاني:", en: "Spaced Repetition & Second Brain:" },
          desc: {
            ar: "أرشفة كل مادة على Notion وتثبيت المفاهيم في الذاكرة عبر Anki.",
            en: "Structuring every module in Notion and locking concepts in memory with Anki."
          }
        },
        {
          num: "04",
          title: { ar: "إتقان الإنجليزية التقنية:", en: "Technical English Fluency:" },
          desc: {
            ar: "قراءة المراجع العالمية ووثائق التقنية مباشرة لفتح آفاق المنح الدولية.",
            en: "Reading CS docs and specs in English to prepare for top scholarships."
          }
        }
      ]
    },
    booksShelf: [
      {
        id: "code-petzold",
        title: {
          ar: "كتاب Code: The Hidden Language",
          en: "Code: The Hidden Language of Hardware & Software"
        },
        author: "Charles Petzold",
        tag: { ar: "معمارية الحاسب", en: "Computer Architecture" },
        desc: {
          ar: "رحلة ساحرة تبدأ من المصباح والبطارية وشفرة مورس، مروراً بالبوابات المنطقية وصنع معالج كامل وفهم الذاكرة.",
          en: "A mesmerizing journey from flashlights, relays, and Morse code to building logic gates, RAM, and a full working CPU."
        },
        impact: {
          ar: "الأثر: جعلني أرى الحاسوب كأوركسترا فيزيائية ومنطقية محكمة، وليس مجرد صندوق أسود غامض.",
          en: "Takeaway: Transformed the computer from a mysterious black box into an elegant physical and logical orchestra."
        },
        icon: "cpu"
      },
      {
        id: "pragmatic-programmer",
        title: {
          ar: "كتاب The Pragmatic Programmer",
          en: "The Pragmatic Programmer"
        },
        author: "David Thomas & Andrew Hunt",
        tag: { ar: "حرفية البرمجة", en: "Software Craftsmanship" },
        desc: {
          ar: "إنجيل مهندس البرمجيات المحترف: المسؤولية الشخصية، تجنب الصدأ البرمجي (Software Entropy)، والتعلم المستمر.",
          en: "The essential guide to professional software craftsmanship: personal accountability, DRY, and relentless learning."
        },
        impact: {
          ar: "الأثر: علمني أن الكود الجيد هو الكود المقروء، القابل للاختبار، والمبني على احترام عقل القارئ المستقبلي.",
          en: "Takeaway: Taught me that great code is clean, testable, and written with deep respect for the next engineer."
        },
        icon: "terminal"
      },
      {
        id: "atomic-habits",
        title: {
          ar: "كتاب Atomic Habits",
          en: "Atomic Habits"
        },
        author: "James Clear",
        tag: { ar: "الانضباط اليومي", en: "Daily Discipline" },
        desc: {
          ar: "كيف تصنع التحسينات الصغيرة بنسبة 1% يومياً فارقاً هائلاً عبر السنوات من خلال النظم وليس الأهداف المجردة.",
          en: "How tiny 1% daily compounding improvements create monumental life transformations through robust systems."
        },
        impact: {
          ar: "الأثر: الأساس وراء جدول مذاكرتي اليومي الممتد لـ 8-12 ساعة والتزامي بالتدوين والتكرار المتباعد.",
          en: "Takeaway: The psychological backbone behind my daily 8–12 hour study regimen, Anki decks, and persistent focus."
        },
        icon: "zap"
      }
    ]
  },

  roadmap: {
    categories: [
      { id: "all", label: { ar: "جميع المواد والمسارات", en: "All Roadmaps" } },
      { id: "current", label: { ar: "المسار الحالي (قيد الدراسة / منجز)", en: "Current & Completed" } },
      { id: "future", label: { ar: "الخطة المستقبلية المتقدمة", en: "Future Milestones" } }
    ],
    items: [
      {
        id: "prog-c",
        status: "current",
        statusBadge: { ar: "قيد الدراسة والممارسة المكثفة", en: "In Progress / Lab Mastery" },
        badgeColor: "emerald",
        title: {
          ar: "البرمجة الهيكلية وحل المشكلات بلغة C",
          en: "Structured Programming & Problem Solving in C"
        },
        institution: { ar: "الكلية + تدريب ومسائل مكثفة", en: "Faculty Labs + Intensive Problem Solving" },
        topics: [
          { ar: "التحكم في المسار والشروط والتكرار (Loops & Control Flow)", en: "Control Flow, Conditions & Complex Nested Loops" },
          { ar: "الدوال وتمرير المعاملات بالقيمة والعنوان (Functions & Scope)", en: "Modular Functions, Pass-by-Value & Pass-by-Reference" },
          { ar: "المصفوفات أحادية وثنائية الأبعاد (Arrays & Matrices)", en: "1D & 2D Array Manipulations, Searching & Sorting" },
          { ar: "المؤشرات وإدارة الذاكرة المباشرة (Pointers & Memory)", en: "Pointers, Address Arithmetic & Direct Memory Tracing" },
          { ar: "تتبع الكود يدوياً وحل مشاكل اللاب البرمجي", en: "Manual Code Tracing, Edge Case Analysis & Lab Exams" }
        ],
        tools: ["MinGW GCC", "Code::Blocks", "VS Code", "Terminal"],
        progress: 85,
        icon: "code"
      },
      {
        id: "digital-logic",
        status: "current",
        statusBadge: { ar: "قيد الدراسة ومحاكاة الدوائر", en: "Active & Circuit Simulation" },
        badgeColor: "cyan",
        title: {
          ar: "التصميم المنطقي والدوائر الرقمية (Digital Logic)",
          en: "Digital Logic & Circuit Design"
        },
        institution: { ar: "الكلية + محاكاة عبر Falstad CircuitJS", en: "Faculty + Hands-on Falstad CircuitJS Simulation" },
        topics: [
          { ar: "الجبر البوليني وتبسيط الدوال المنطقية (Boolean Algebra & K-Maps)", en: "Boolean Algebra, Karnaugh Maps (K-Maps) & Minimization" },
          { ar: "البوابات المنطقية الأساسية والمركبة (AND, OR, NOT, NAND, XOR)", en: "Basic & Universal Logic Gates (NAND/NOR Logic)" },
          { ar: "الدوائر التوافقية (Adders, Multiplexers, Decoders)", en: "Combinational Circuits (Full Adders, MUX, Decoders)" },
          { ar: "الدوائر التتابعية والقلابات (Latches, Flip-Flops & Registers)", en: "Sequential Circuits, Latches, SR/JK/D Flip-Flops" },
          { ar: "محاكاة الدوائر الكهربائية والمنطقية خطوة بخطوة", en: "Hands-on Electrical & Logic Gate Simulation on Falstad" }
        ],
        tools: ["Falstad CircuitJS", "Logic Gates Lab", "Boolean Simulators"],
        progress: 80,
        icon: "cpu"
      },
      {
        id: "info-systems",
        status: "current",
        statusBadge: { ar: "مكتمل / أسس الحوسبة", en: "Completed Fundamentals" },
        badgeColor: "emerald",
        title: {
          ar: "نظم المعلومات وأساسيات علوم الحاسب (IS & Fundamentals)",
          en: "Information Systems & Computer Fundamentals"
        },
        institution: { ar: "المقرر الأكاديمي المنهجي", en: "Core Academic Curriculum" },
        topics: [
          { ar: "معمارية الحاسوب ووحدات الإدخال والمعالجة والتخزين", en: "Computer Architecture, CPU, Bus & Storage Hierarchy" },
          { ar: "أنظمة الترقيم الثنائي والثماني والست عشري والتمثيل الداخلي", en: "Binary, Octal, Hexadecimal Systems & Data Representation" },
          { ar: "دورة حياة تطوير البرمجيات ونظم إدارة قواعد البيانات (SDLC & DBMS)", en: "SDLC Methodologies & Database Management Essentials" },
          { ar: "شبكات الحاسوب وأمن المعلومات الأساسي", en: "Networking Fundamentals & Information Security Concepts" }
        ],
        tools: ["Notion Second Brain", "Anki Spaced Repetition", "Draw.io"],
        progress: 95,
        icon: "database"
      },
      {
        id: "english-mastery",
        status: "current",
        statusBadge: { ar: "دراسة وممارسة يومية مستمرة", en: "Daily Continuous Practice" },
        badgeColor: "cyan",
        title: {
          ar: "إتقان الإنجليزية والتواصل التقني الأكاديمي",
          en: "English Fluency & Technical Communication"
        },
        institution: { ar: "منهاج ZAmericanEnglish + قراءة المراجع العالمية", en: "ZAmericanEnglish Curriculum + Reading Tech Specs" },
        topics: [
          { ar: "دراسة منهجية لقواعد وبناء الجمل الاحترافية", en: "Systematic Grammar, Pronunciation & Natural Phrasing" },
          { ar: "بناء ثروة لغوية تقنية متخصصة في علوم الحاسب والبرمجة", en: "Rich CS Vocabulary, Computing Terminology & Anki Decks" },
          { ar: "قراءة الوثائق والمراجع الأكاديمية الإنجليزية مباشرة", en: "Reading CS Documentation, RFCs, and Textbooks in English" },
          { ar: "الاستعداد لاختبارات اللغة الدولية والمنح (IELTS/TOEFL)", en: "Laying Groundwork for Future International Scholarships" }
        ],
        tools: ["ZAmericanEnglish", "Anki Vocab Deck", "Cambridge Dictionary"],
        progress: 75,
        icon: "globe"
      },
      {
        id: "oop-cpp",
        status: "future",
        statusBadge: { ar: "الهدف القادم (الفصل الثاني)", en: "Next Milestone (Semester 2)" },
        badgeColor: "purple",
        title: {
          ar: "البرمجة كائنية التوجه (OOP) بلغة C++ و Python",
          en: "Object-Oriented Programming (OOP) in C++ & Python"
        },
        institution: { ar: "خطة الصقل الهندسي المتقدم", en: "Advanced Software Engineering Roadmap" },
        topics: [
          { ar: "المفاهيم الأربعة: التغليف، الوراثة، تعدد الأشكال، والتجريد", en: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
          { ar: "إدارة الذاكرة والمؤشرات الذكية في C++ الحديثة (Modern C++)", en: "Pointers, Dynamic Allocation & Smart Pointers in C++" },
          { ar: "مبادئ التصميم النظيف ومبادئ SOLID", en: "Clean Code & SOLID Design Principles" },
          { ar: "بناء مشاريع برمجية متكاملة وقابلة للتطوير", en: "Architecting Modular, Maintainable Object-Oriented Systems" }
        ],
        tools: ["C++20", "GCC Clang", "Git", "Clean Architecture"],
        progress: 20,
        icon: "layers"
      },
      {
        id: "dsa-competitive",
        status: "future",
        statusBadge: { ar: "مسار التميز وحل المشكلات", en: "Core Problem Solving Milestone" },
        badgeColor: "purple",
        title: {
          ar: "هياكل البيانات والخوارزميات (Data Structures & Algorithms)",
          en: "Data Structures & Algorithms (Competitive Programming)"
        },
        institution: { ar: "المسابقات البرمجية + منصات LeetCode و Codeforces", en: "Competitive Programming & Problem Solving Mastery" },
        topics: [
          { ar: "القوائم المترابطة، المكدسات، الطوابير، والأشجار (Trees & Graphs)", en: "Linked Lists, Stacks, Queues, Binary Trees & Graphs" },
          { ar: "خوارزميات الفرز والبحث والبرمجة الديناميكية (Sorting & DP)", en: "Sorting, Binary Search, Graph Traversals (BFS/DFS) & DP" },
          { ar: "تحليل التعقيد الحسابي والذاكرة (Big-O Notation)", en: "Time & Space Complexity Analysis (Big-O, Big-Omega)" },
          { ar: "حل مئات المسائل البرمجية لإعداد مقابلات كبرى الشركات التقنية", en: "Intensive Problem-Solving for Top Tech Engineering Roles" }
        ],
        tools: ["Codeforces", "LeetCode", "C++ STL", "Anki Algorithms"],
        progress: 15,
        icon: "git-commit"
      },
      {
        id: "fullstack-dev",
        status: "future",
        statusBadge: { ar: "مسار بناء البرمجيات الحقيقية", en: "Real-World Software Building" },
        badgeColor: "purple",
        title: {
          ar: "تطوير تطبيقات الويب المتكاملة (Modern Full-Stack Web)",
          en: "Modern Full-Stack Web Development & APIs"
        },
        institution: { ar: "مشاريع عملية تطبيقية في العالم الحقيقي", en: "Production Projects & End-to-End Systems" },
        topics: [
          { ar: "بناء واجهات متجاوبة فائقة السرعة بـ HTML5 و Tailwind و JavaScript", en: "Responsive, Accessible Modern Frontends & UI State" },
          { ar: "تصميم وبناء واجهات البرمجة الخلفية RESTful APIs وقواعد البيانات", en: "Backend Services, Node.js / Python APIs & SQL/NoSQL" },
          { ar: "التحكم في النسخ الجماعي عبر Git و GitHub و CI/CD", en: "Git Workflow, Branching Strategies & Automated Deployments" },
          { ar: "الأمان، التوثيق، وإدارة الجلسات للمستخدمين", en: "Authentication, Web Security, CORS & Performance Optimization" }
        ],
        tools: ["JavaScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
        progress: 30,
        icon: "layout"
      },
      {
        id: "ai-deeplearning",
        status: "future",
        statusBadge: { ar: "القمة التخصصية والمنح الدولية", en: "International Scholarships & Research" },
        badgeColor: "purple",
        title: {
          ar: "الذكاء الاصطناعي، تعلم الآلة، والتعلم العميق (AI & Deep Learning)",
          en: "Artificial Intelligence, Machine Learning & Deep Learning"
        },
        institution: { ar: "التجهيز لمنح الماجستير العالمية والمختبرات البحثية", en: "Preparation for Top Global AI Master's Programs" },
        topics: [
          { ar: "الجبر الخطي، التفاضل والتكامل، والاحتمالات والإحصاء للذكاء الاصطناعي", en: "Linear Algebra, Multivariate Calculus & Statistics for ML" },
          { ar: "نماذج التعلم الخاضع للإشراف وغير الخاضع للإشراف (Supervised/Unsupervised)", en: "Regression, Classification, Clustering & Dimensionality Reduction" },
          { ar: "الشبكات العصبية الاصطناعية ونماذج التعلم العميق (PyTorch & Transformers)", en: "Neural Networks, CNNs, RNNs, PyTorch & Modern LLM Architectures" },
          { ar: "نشر النماذج الذكية في بيئات العمل الحية وتطبيقات الإنتاج", en: "Edge AI, Model Deployment & Responsible AI Ethics" }
        ],
        tools: ["Python", "PyTorch", "NumPy & Pandas", "Jupyter", "Hugging Face"],
        progress: 10,
        icon: "sparkles"
      }
    ]
  },

  techStack: {
    categories: [
      {
        id: "dev",
        title: { ar: "بيئة التطوير والهندسة البرمجية", en: "Development & Engineering Arsenal" },
        desc: {
          ar: "الأدوات والمحررات والمترجمات التي أستخدمها لكتابة واختبار وتحليل الكود يومياً.",
          en: "The compilers, editors, and simulators I rely on daily to write, trace, and test clean code."
        },
        tools: [
          {
            name: "VS Code",
            category: { ar: "المحرر الأساسي", en: "Primary Code Editor" },
            desc: {
              ar: "بيئة عملي الأساسية للمشاريع البرمجية وتطوير الويب، مدعومة بإضافات C/C++ و Gitlens والاختصارات السريعة.",
              en: "My go-to environment for web projects and multi-language development, equipped with C/C++ extensions and GitLens."
            },
            badge: "Daily Driver",
            icon: "code"
          },
          {
            name: "Code::Blocks & MinGW",
            category: { ar: "مترجم وبيئة C/C++", en: "C/C++ IDE & GCC Compiler" },
            desc: {
              ar: "البيئة المعتمدة في اللابات الجامعية مع مترجم GCC MinGW لكتابة وتتبع برامج C الصرفة خطوة بخطوة ومراقبة استهلاك الذاكرة.",
              en: "The standard academic lab environment with GCC MinGW for compiling pure C, step-by-step debugging, and call stack analysis."
            },
            badge: "Lab & Academic",
            icon: "cpu"
          },
          {
            name: "Falstad CircuitJS",
            category: { ar: "محاكي الدوائر الرقمية", en: "Interactive Circuit Simulator" },
            desc: {
              ar: "أداة تفاعلية رائعة لمحاكاة تدفق التيار والإشارات المنطقية في بوابات AND/OR والقلابات وفهم المعمارية من الصفر.",
              en: "An interactive circuit simulator used to visualize electronic flow, logic gate switching, and flip-flop state transitions."
            },
            badge: "Hardware & Logic",
            icon: "activity"
          },
          {
            name: "Git & GitHub",
            category: { ar: "إدارة النسخ والمستودعات", en: "Version Control & Collaboration" },
            desc: {
              ar: "توثيق كل مشروع وتطويره عبر الفروع ومتابعة التغييرات وحفظ الكود السحابي بأمان ومشاركة الأفكار التقنية.",
              en: "Tracking project history, atomic commits, branch workflows, and publishing open-source learning repositories."
            },
            badge: "Version Control",
            icon: "git-branch"
          }
        ]
      },
      {
        id: "productivity",
        title: { ar: "نظام الإنتاجية والدماغ الثاني", en: "Study & Productivity Second Brain" },
        desc: {
          ar: "المنظومة الصارمة التي تدير وقتي، استيعابي للمفاهيم المعقدة، والتكرار المتباعد لتحقيق أقصى استيعاب.",
          en: "The disciplined ecosystem that manages my study schedule, knowledge retention, and sustained focus."
        },
        tools: [
          {
            name: "Notion",
            category: { ar: "الدماغ الثاني وقاعدة المعرفة", en: "Second Brain & Knowledge Base" },
            desc: {
              ar: "قاعدة بياناتي المركزية لكل المواد الجامعية: ملخصات الدروس، حلول الشيتات، جداول المذاكرة، وتوثيق الأهداف الأسبوعية.",
              en: "Central command center for all university coursework: structured lecture notes, problem sets, and weekly milestone trackers."
            },
            badge: "Second Brain",
            icon: "file-text"
          },
          {
            name: "Anki",
            category: { ar: "التكرار المتباعد (Spaced Repetition)", en: "Active Recall & Spaced Repetition" },
            desc: {
              ar: "سلاحي السري لترسيخ المفاهيم البرمجية، مصطلحات معمارية الحاسب، ومفردات اللغة الإنجليزية المتخصصة دون نسيان.",
              en: "My secret weapon for internalizing computing concepts, algorithm complexities, and technical English terminology long-term."
            },
            badge: "Memory Engine",
            icon: "repeat"
          },
          {
            name: "NotebookLM",
            category: { ar: "مساعد البحث الذكي بالذكاء الاصطناعي", en: "Grounded AI Research Partner" },
            desc: {
              ar: "استكشاف المراجع الأكاديمية والكتب الثقيلة واستخراج الأسئلة ومقارنة المفاهيم بالاستناد فقط إلى المصادر الموثوقة.",
              en: "Deep-diving into complex academic textbooks and lecture slides, generating targeted quizzes and concept summaries."
            },
            badge: "AI Research",
            icon: "sparkles"
          },
          {
            name: "YPT (Yeolpumta)",
            category: { ar: "تتبع التركيز العميق (8-12 ساعة)", en: "Deep Work Focus Tracker" },
            desc: {
              ar: "تطبيق قياس ساعات المذاكرة اليومية الصافية، يمنع المشتتات ويضمن الحفاظ على وتيرة 8-12 ساعة من الإنجاز المركز.",
              en: "Timer and discipline accountability app tracking net daily deep study hours, eliminating smartphone distractions."
            },
            badge: "8-12h Focus",
            icon: "clock"
          }
        ]
      }
    ]
  },

  blog: {
    categories: [
      { id: "all", label: { ar: "جميع المقالات", en: "All Articles" } },
      { id: "cs-journey", label: { ar: "رحلة الحاسبات والذكاء الاصطناعي", en: "CS & AI Journey" } },
      { id: "programming", label: { ar: "تعلم البرمجة ولغة C", en: "C & Programming" } },
      { id: "productivity", label: { ar: "الإنتاجية والدراسة المركزة", en: "Productivity & Focus" } }
    ],
    posts: [
      {
        id: "why-cs-ai",
        category: "cs-journey",
        categoryLabel: { ar: "حياة جامعية وشغف", en: "University & Passion" },
        date: "2026-11-15",
        readTime: { ar: "6 دقائق قراءة", en: "6 min read" },
        title: {
          ar: "لماذا اخترت عالم الحاسبات والذكاء الاصطناعي؟ رحلتي كطالب سنة أولى",
          en: "Why I Chose Computer Science & AI: My Freshman Journey at Helwan University"
        },
        excerpt: {
          ar: "قصة انتقالي إلى دراسة الحاسبات والذكاء الاصطناعي بجامعة حلوان، ولماذا أرى البرمجة أعظم أداة للإبداع وحل المشكلات في العصر الحديث.",
          en: "The story behind choosing Computer Science & AI at Helwan University (Capital University), and why software is the most powerful creative medium of our time."
        },
        content: {
          ar: `
            <p class="lead">عندما دخلت أبواب كلية الحاسبات والذكاء الاصطناعي، لم أكن أبحث عن مجرد شهادة جامعية، بل كنت مدفوعاً بفضول جارف لمعرفة ما يحدث داخل تلك الرقائق السيليكونية التي تحرك العالم اليوم.</p>
            
            <h3>1. من مستهلك للتكنولوجيا إلى صانع لها</h3>
            <p>منذ سنواتي الأولى، كنت أنبهر كيف يمكن لبضعة سطور برمجية أن تحل مشكلة معقدة في أجزاء من الثانية. لكن نقطة التحول الحقيقية حدثت عندما أدركت أن التكنولوجيا ليست سحراً غامضاً، بل هي <strong>هندسة منضبطة</strong> تبدأ من أبسط القوانين الفيزيائية لتصل إلى أذكى النماذج العصبية الاصطناعية.</p>
            
            <h3>2. لماذا جامعة حلوان (جامعة العاصمة)؟</h3>
            <p>تمثل كليتنا بيئة تنافسية ملهمة تضم نخبة من الطلاب الذين يحملون شغفاً حقيقياً بالخوارزميات وعلوم البيانات. في السنة الأولى، يتركز التركيز على بناء الأساس الرياضي والمنطقي الصلب؛ فبدون فهم عميق للمصفوفات، الجبر الخطي، والبرمجة الهيكلية، لا يمكن لأي مهندس أن يبني نظام ذكاء اصطناعي يمكن الاعتماد عليه.</p>
            
            <blockquote>
              "البرمجة ليست مجرد كتابة أوامر يطيعها الجهاز، بل هي تدريب العقل على التفكير الصارم وتفكيك المعضلات الكبرى إلى خطوات ذرية بديهية."
            </blockquote>

            <h3>3. طموحي ورؤيتي للمستقبل</h3>
            <p>لا أنظر إلى دراستي الحالية كواجبات ومحاضرات تنتهي بالامتحان، بل كاستثمار استراتيجي. خطتي تمتد إلى:</p>
            <ul>
              <li><strong>إتقان علوم الحاسب الأساسية:</strong> لغات البرمجة منخفضة المستوى، الخوارزميات، وهياكل البيانات.</li>
              <li><strong>المنافسة البرمجية:</strong> خوض غمار حل المسائل على LeetCode و Codeforces لبناء سرعة بديهة تحليلية.</li>
              <li><strong>الذكاء الاصطناعي المتقدم:</strong> التجهيز للقبول في برامج الماجستير الدولية في التعلم العميق والأنظمة الذكية.</li>
            </ul>

            <p>إذا كنت في بداية طريقك الجامعي مثلي، فتذكر دائماً: البداية الصعبة تصنع مهندساً استثنائياً، والتفوق هو نتاج ساعات التركيز اليومية الهادئة بعيداً عن الأضواء.</p>
          `,
          en: `
            <p class="lead">Walking through the gates of the Faculty of Computers & Artificial Intelligence wasn't about obtaining a diploma. It was ignited by an insatiable curiosity to discover what happens within the silicon chips powering modern civilization.</p>
            
            <h3>1. From Tech Consumer to Systems Builder</h3>
            <p>For as long as I can remember, I was captivated by how a few lines of instructions could solve intricate calculations in fractions of a millisecond. But the definitive epiphany struck when I realized technology is not sorcery—it is <strong>rigorous engineering</strong> scaling from physical transistors to the most sophisticated artificial neural networks.</p>
            
            <h3>2. Why Helwan University (Capital University)?</h3>
            <p>Our faculty offers an inspiring, highly competitive atmosphere alongside ambitious peers dedicated to computational thinking and data science. Freshman year here is about building an unshakeable mathematical and architectural bedrock. Without a deep grasp of linear algebra, discrete logic, and low-level structured programming, no engineer can architect resilient AI systems.</p>
            
            <blockquote>
              "Programming is not simply issuing commands to a machine; it is conditioning the human mind to dissect colossal complexities into atomic, provable truths."
            </blockquote>

            <h3>3. The Long-Term Vision</h3>
            <p>I view my current studies not as transactional exam prep, but as strategic capital. My roadmap spans:</p>
            <ul>
              <li><strong>Mastering CS Fundamentals:</strong> Low-level languages, memory architecture, and algorithmic design.</li>
              <li><strong>Competitive Problem Solving:</strong> Continuous practice on LeetCode & Codeforces to hone analytical reflexes.</li>
              <li><strong>Deep Learning Research:</strong> Preparing for prestigious international AI master's scholarships.</li>
            </ul>

            <p>If you are also embarking on your engineering journey, remember: humble, disciplined daily focus behind closed doors builds extraordinary technical foundations.</p>
          `
        }
      },
      {
        id: "mastering-c-from-scratch",
        category: "programming",
        categoryLabel: { ar: "أساسيات C ولابات الجامعة", en: "C Labs & Logic" },
        date: "2026-11-10",
        readTime: { ar: "8 دقائق قراءة", en: "8 min read" },
        title: {
          ar: "كيف أستعد للامتحانات العملية وأتعلم البرمجة بلغة C من الصفر؟",
          en: "How I Master C Programming from Scratch & Ace Practical Lab Exams"
        },
        excerpt: {
          ar: "دليلي العملي لتتبع الأكواد يدوياً على الورق، وفهم المؤشرات والمصفوفات، وحل مسائل اللاب البرمجي بثقة وهدوء.",
          en: "My actionable blueprint for manual code tracing on paper, mastering pointers & arrays, and excelling in practical lab programming tests."
        },
        content: {
          ar: `
            <p class="lead">يتساءل الكثير من الطلاب: "لماذا نبدأ بلغة C القديمة بينما يمكننا كتابة أكواد سريعة بـ Python؟" الإجابة البسيطة: لأن لغة C تجبرك على رؤية الحقيقة العارية للذاكرة وكيف يتعامل المعالج مع البيانات دون أقنعة أو حيل مخفية.</p>

            <h3>1. القاعدة الذهبية: اكتب وتتبع على الورق قبل تشغيل المحرر</h3>
            <p>أكبر خطأ يقع فيه المبتدئ هو الجلوس أمام شاشة الكومبيوتر فور قراءة المسألة والبدء في الكتابة العشوائية وتجربة الحلول بالحظ (Guess & Check). في طريقتي اليومية، لا ألمس لوحة المفاتيح إلا بعد المرور بثلاث مراحل:</p>
            <ol>
              <li><strong>تفكيك المدخلات والمخرجات (I/O Analysis):</strong> ما هي الحالات القصوى (Edge Cases)؟ هل يمكن أن يكون الرقم سالباً؟ هل المصفوفة فارغة؟</li>
              <li><strong>جدول التتبع اليدوي (Trace Table):</strong> أرسم جدولاً بالأعمدة: قيمة المتغير <code>i</code>، قيمة المتغير <code>sum</code>، وشرط التكرار في كل لفة (Iteration).</li>
              <li><strong>كتابة الكود الزائف (Pseudocode):</strong> صياغة خطوات الحل بمنطق بشري واضح قبل تحويله لصياغة C.</li>
            </ol>

            <h3>2. التعامل مع الحلقات التكرارية والمصفوفات (Loops & Nested Logic)</h3>
            <p>معظم مسائل اللاب العملي تدور حول الحلقات المتداخلة (Nested Loops) لتوليد أشكال أو التعامل مع مصفوفات ثنائية الأبعاد (2D Arrays). السر هنا هو فهم دور كل حلقة:</p>
            <ul>
              <li><strong>الحلقة الخارجية (Outer Loop):</strong> مسؤولة دائماً عن التحكم في الصفوف أو المراحل الكبرى.</li>
              <li><strong>الحلقة الداخلية (Inner Loop):</strong> مسؤولة عن الأعمدة أو المقارنة بين العناصر المتجاورة.</li>
            </ul>

            <pre><code class="language-c">// مثال توضيحي لتتبع مصفوفة ثنائية الأبعاد بلغة C
#include &lt;stdio.h&gt;

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int primaryDiagonal = 0;

    for (int i = 0; i &lt; 3; i++) {
        primaryDiagonal += matrix[i][i]; // تتبع سريع للقطر الرئيسي
    }
    printf("مجموع القطر الرئيسي = %d\\n", primaryDiagonal);
    return 0;
}</code></pre>

            <h3>3. كيف تتدرب للامتحان العملي للاب؟</h3>
            <p>الامتحان العملي يعتمد على عاملين: <strong>السرعة</strong> و<strong>الدقة المنطقية</strong> تحت ضغط الوقت. للتفوق:</p>
            <ul>
              <li>تدرّب على بيئة الامتحان الفعلية (Code::Blocks مع مترجم MinGW بدون إكمال تلقائي مفرط).</li>
              <li>تعلم قراءة رسائل المترجم (Compiler Warnings & Errors)؛ رسالة الخطأ ليست عقاباً بل خريطة تدلك على السطر المعطوب.</li>
              <li>احرص على تهيئة المتغيرات دائماً بقيم أولية (Initial Values) لتجنب قراءة بيانات عشوائية (Garbage Values) من الذاكرة.</li>
            </ul>
          `,
          en: `
            <p class="lead">Many students ask: "Why start with mature C when Python allows immediate rapid development?" The answer is simple: C forces you to confront the raw reality of memory, cache, and processor execution without protective illusions.</p>

            <h3>1. The Golden Rule: Trace on Paper Before Touching the Editor</h3>
            <p>The single greatest pitfall for novices is sitting before an IDE and randomly hacking away with trial and error. In my study routine, I do not type a single keystroke before completing three methodical steps:</p>
            <ol>
              <li><strong>I/O and Edge Case Breakdown:</strong> What are the extremes? Can input be zero or negative? Is an array boundary exceeded?</li>
              <li><strong>The Trace Table:</strong> Columns tracking loop indices, accumulator values, and boolean flags across each single iteration.</li>
              <li><strong>Clear Pseudocode:</strong> Formulating mathematical logic in human terms before translating to C syntax.</li>
            </ol>

            <h3>2. Mastering Nested Loops & Arrays</h3>
            <p>Most university lab tests evaluate nested loop reasoning and multi-dimensional matrices. The conceptual key is cleanly delineating responsibilities:</p>
            <ul>
              <li><strong>The Outer Loop:</strong> Dictates the vertical horizon—rows, rounds, or overall phases.</li>
              <li><strong>The Inner Loop:</strong> Dictates the horizontal execution—columns, neighbor comparisons, or boundary sweeps.</li>
            </ul>

            <pre><code class="language-c">// C snippet demonstrating primary diagonal summation
#include &lt;stdio.h&gt;

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int diagonalSum = 0;

    for (int i = 0; i &lt; 3; i++) {
        diagonalSum += matrix[i][i]; // Direct tracing of the main diagonal
    }
    printf("Main Diagonal Sum = %d\\n", diagonalSum);
    return 0;
}</code></pre>

            <h3>3. How to Ace the Practical Exam</h3>
            <p>Practical assessments test two faculties: <strong>logical poise</strong> and <strong>speed</strong> under time limits. My preparation habits:</p>
            <ul>
              <li>Replicate the exact exam environment (Code::Blocks + MinGW GCC without auto-complete crutches).</li>
              <li>Learn to read compiler diagnostics intimately; an error message is not a defeat, but a precise navigation vector to the bug.</li>
              <li>Always initialize variables explicitly to avoid undefined behavior from garbage stack memory.</li>
            </ul>
          `
        }
      },
      {
        id: "daily-productivity-system",
        category: "productivity",
        categoryLabel: { ar: "إنتاجية ودراسة عميقة", en: "Deep Work Systems" },
        date: "2026-11-05",
        readTime: { ar: "7 دقائق قراءة", en: "7 min read" },
        title: {
          ar: "نظام إنتاجيتي اليومي: كيف أنظم 8-12 ساعة بين الجامعة والمذاكرة وتطوير الذات؟",
          en: "My Daily Productivity Engine: Managing 8–12 Hours of Deep Study & University Balance"
        },
        excerpt: {
          ar: "تشريح تفصيلي لنظام يومي حقيقي: استراتيجية الكتل الزمنية، الدماغ الثاني على Notion، التكرار المتباعد بـ Anki، وتتبع التركيز بـ YPT.",
          en: "A granular look inside my real study routine: time-blocking, Notion Second Brain architecture, Anki spaced repetition, and relentless focus tracking with YPT."
        },
        content: {
          ar: `
            <p class="lead">النجاح في كلية الحاسبات لا يقاس بعدد الساعات التي تقضيها جالساً على المكتب وأنت تتصفح هاتفك، بل بـ <strong>ساعات التركيز الصافي (Net Deep Work)</strong> التي تبني خلالها فهماً حقيقياً وتكتب بها أكواداً تعمل بكفاءة.</p>

            <h3>1. هيكل اليوم النموذجي: نظام الكتل الزمنية (Time-Blocking)</h3>
            <p>أقسم يومي إلى ثلاث كتل رئيسية غير قابلة للتفاوض:</p>
            <ul>
              <li><strong>الكتلة الأولى (الصباح الباكر - الحضور الأكاديمي واللابات):</strong> حضور المحاضرات والسكاشن بتركيز كامل، وتدوين الملاحظات الذرية فوراً دون تأجيل.</li>
              <li><strong>الكتلة الثانية (المذاكرة العميقة والتطبيق العملي):</strong> حل الشيتات البرمجية، محاكاة الدوائر على Falstad CircuitJS، وتتبع المسائل الصعبة على الورق.</li>
              <li><strong>الكتلة الثالثة (بناء المهارات التراكمية وتطوير الذات):</strong> مراجعة بطاقات Anki، ممارسة اللغة الإنجليزية على ZAmericanEnglish، وقراءة فصول من كتب معمارية الحاسب والبرمجة.</li>
            </ul>

            <h3>2. الترسانة الرقمية لإدارة المعرفة</h3>
            <p>أعتمد على مثلث رقمي مترابط يضمن عدم ضياع أي معلومة:</p>
            <ol>
              <li><strong>Notion (قاعدة البيانات المركزية):</strong> يحتوي على لوحة لكل مادة، تشمل سلايدات الدكتور، روابط الشيتات، والأكواد التي قمت بحلها، مع تقييم صعوبة كل مسألة.</li>
              <li><strong>Anki (محرك الذاكرة طويلة المدى):</strong> لا أحفظ المعلومات حفظاً أعمى، بل أحول المفاهيم الصعبة (مثل قوانين الجبر البوليني، أو معاني مصطلحات الذاكرة) إلى بطاقات أسئلة وأجوبة تُراجع وفق منحنى النسيان.</li>
              <li><strong>YPT - Yeolpumta (عداد الانضباط):</strong> أسجل كل دقيقة تركيز دون تشتت، مما يخلق التزاماً نفسياً صارماً بإكمال ما بين 8 إلى 12 ساعة يومياً.</li>
            </ol>

            <blockquote>
              "الانضباط هو الجسر بين الأهداف والإنجازات. التحسين بنسبة 1% يومياً هو ما يصنع الفارق بين الطالب العادي والمهندس المبدع."
            </blockquote>

            <h3>3. نصائح للحفاظ على الطاقة الذهنية</h3>
            <p>الدراسة الطويلة بدون منهجية تؤدي سريعاً إلى الاحتراق النفسي (Burnout). لذلك أحرص على:</p>
            <ul>
              <li>فترات راحة قصيرة (Pomodoro معدّل: 50 دقيقة تركيز تام يعقبها 10 دقائق حركة وتمدد بعيداً عن الشاشات).</li>
              <li>شرب الماء بانتظام والنوم المنضبط لتثبيت مسارات الذاكرة التي تم بناؤها خلال اليوم.</li>
              <li>التوقف التام عن استخدام وسائل التواصل أثناء كتل التركيز بوضع الهاتف في غرفة أخرى.</li>
            </ul>
          `,
          en: `
            <p class="lead">Excellence in Computer Science & AI is not judged by the hours spent idle at a desk with notifications buzzing, but by <strong>net deep work</strong>—unbroken cognitive stamina dedicated to real comprehension and writing resilient code.</p>

            <h3>1. The Anatomy of My Daily Rhythm: Time-Blocking</h3>
            <p>I organize my days into three non-negotiable operational blocks:</p>
            <ul>
              <li><strong>Block 1 (Morning & University Lectures):</strong> Active participation in academic lectures and practical labs, capturing atomic notes on the spot.</li>
              <li><strong>Block 2 (Deep Practice & Problem Solving):</strong> Tackling programming problem sets, simulating logic circuits on Falstad CircuitJS, and tracing algorithms by hand.</li>
              <li><strong>Block 3 (Compounding Self-Improvement):</strong> Anki flashcard reviews, technical English practice via ZAmericanEnglish, and reading foundational computer architecture books.</li>
            </ul>

            <h3>2. My Digital Knowledge Infrastructure</h3>
            <p>A synergistic triumvirate ensures zero knowledge leakage:</p>
            <ol>
              <li><strong>Notion (Central Second Brain):</strong> Dedicated dashboards per academic module holding syllabus trackers, lab solutions, and classified problem sets.</li>
              <li><strong>Anki (Spaced Repetition Engine):</strong> Converting boolean algebra theorems, hardware concepts, and technical terminology into active recall flashcards mapped against the forgetting curve.</li>
              <li><strong>YPT - Yeolpumta (Discipline Tracker):</strong> Logging pure stopwatch-tracked focus hours to maintain my strict 8–12 hour daily cadence.</li>
            </ol>

            <blockquote>
              "Discipline is the bridge between goals and accomplishment. A 1% daily atomic compounding creates the gulf between an average student and an exceptional systems architect."
            </blockquote>

            <h3>3. Sustaining Mental Stamina & Avoiding Burnout</h3>
            <p>Marathon study sessions without structural boundaries invite cognitive fatigue. Key sustainable habits:</p>
            <ul>
              <li>Modified Pomodoro intervals: 50 minutes of deep immersion followed by 10 minutes of screen-free physical stretching.</li>
              <li>Hydration and strictly protected sleep cycles to cement newly minted neural memory traces.</li>
              <li>Physical isolation of mobile devices in another room during active deep work blocks.</li>
            </ul>
          `
        }
      }
    ]
  },

  contact: {
    title: { ar: "تواصل معي وشاركني رحلتك", en: "Let's Connect & Collaborate" },
    subtitle: {
      ar: "سواء كنت زميلاً في الكلية، مطوراً شغوفاً، أو ترغب في تبادل الأفكار والنقاش حول التقنية والذكاء الاصطناعي، يسعدني دائماً تواصلك!",
      en: "Whether you're a fellow student, a passionate developer, or looking to exchange ideas about systems and AI, my inbox is always open!"
    },
    channelsTitle: {
      ar: "قنوات التواصل المباشر",
      en: "Direct Connection Channels"
    },
    form: {
      nameLabel: { ar: "الاسم الكريم", en: "Your Full Name" },
      namePlaceholder: { ar: "اكتب اسمك هنا...", en: "e.g. Ahmed Ali" },
      emailLabel: { ar: "البريد الإلكتروني", en: "Email Address" },
      emailPlaceholder: { ar: "example@domain.com", en: "example@domain.com" },
      subjectLabel: { ar: "موضوع الرسالة", en: "Subject" },
      subjectPlaceholder: { ar: "استفسار، تعاون برمجي، نقاش تقني...", en: "Collaboration, Tech Discussion, Question..." },
      messageLabel: { ar: "نص الرسالة", en: "Your Message" },
      messagePlaceholder: { ar: "اكتب رسالتك بكل حرية ووضوح...", en: "Write your message here..." },
      submitBtn: { ar: "إرسال الرسالة الآن 🚀", en: "Send Message Now 🚀" }
    },
    channels: [
      {
        name: "Email",
        label: { ar: "راسلني عبر البريد الإلكتروني", en: "Send an Email" },
        value: "ibrahim.haidar.wazni@gmail.com",
        href: "mailto:ibrahim.haidar.wazni@gmail.com",
        icon: "mail",
        color: "cyan"
      },
      {
        name: "Telegram",
        label: { ar: "محادثة سريعة على تيليجرام", en: "Chat on Telegram" },
        value: "@ibrahim_wazni",
        href: "https://t.me/ibrahim_wazni",
        icon: "send",
        color: "blue"
      },
      {
        name: "WhatsApp",
        label: { ar: "تواصل مباشر عبر واتساب", en: "WhatsApp Direct" },
        value: "+20 100 000 0000",
        href: "https://wa.me/201000000000",
        icon: "message-circle",
        color: "emerald"
      },
      {
        name: "GitHub",
        label: { ar: "مستودعات الكود والمشاريع", en: "GitHub Repositories" },
        value: "github.com/ibrahay-04",
        href: "https://github.com/ibrahay-04",
        icon: "github",
        color: "slate"
      },
      {
        name: "LinkedIn",
        label: { ar: "الملف المهني والأكاديمي", en: "LinkedIn Profile" },
        value: "linkedin.com/in/ibrahim-wazni",
        href: "https://linkedin.com/in/ibrahim-wazni",
        icon: "linkedin",
        color: "blue"
      }
    ]
  },

  ui: {
    nav: {
      about: { ar: "من أنا وفلسفتي", en: "About & Mindset" },
      roadmap: { ar: "المسار التعليمي", en: "Roadmap & Courses" },
      stack: { ar: "أدواتي اليومية", en: "Tech Stack" },
      blog: { ar: "المدونة", en: "Blog" },
      contact: { ar: "تواصل معي", en: "Contact" }
    },
    hero: {
      exploreBtn: { ar: "استكشف مساري التعليمي", en: "Explore My Journey" },
      readBlogBtn: { ar: "اقرأ مدونتي وملاحظاتي", en: "Read My Blog" },
      shareBtn: { ar: "مشاركة رابط ملفي الشخصي", en: "Share Profile Link" },
      badgeStatus: { ar: "متاح للمشاريع والنقاشات التقنية", en: "Open for Tech Discussions & Projects" }
    },
    sections: {
      aboutTitle: { ar: "من أنا وما الفلسفة التي تحركني؟", en: "About Me & The Mindset Fueling My Journey" },
      aboutSubtitle: {
        ar: "طالب علم شغوف بالحوسبة من أصغر بوابة منطقية حتى أعقد خوارزميات الذكاء الاصطناعي.",
        en: "Passionate about computing from fundamental logic gates to sophisticated AI architectures."
      },
      roadmapTitle: { ar: "الكورسات والمسار التعليمي", en: "Academic & Self-Study Roadmap" },
      roadmapSubtitle: {
        ar: "خريطة طريق متكاملة تجمع بين المقررات الجامعية والممارسة الذاتية المكثفة والتحضير للمستقبل.",
        en: "A structured curriculum bridging rigorous faculty coursework, self-study, and future milestones."
      },
      booksTitle: { ar: "كتب ومصادر تشكل طريقة تفكيري", en: "Books & Resources Shaping My Mindset" },
      stackTitle: { ar: "أدواتي وترسانتي التقنية والإنتاجية", en: "My Daily Tech & Productivity Arsenal" },
      stackSubtitle: {
        ar: "البرامج والبيئات التي أعتمد عليها يومياً لكتابة الكود، إدارة الوقت، وترسيخ المعلومات.",
        en: "The tools, IDEs, and cognitive systems powering my daily coding, time-blocking, and learning."
      },
      blogTitle: { ar: "مدونتي وملاحظاتي الدراسية", en: "Personal Blog & Study Notes" },
      blogSubtitle: {
        ar: "أشارك هنا أفكاري وتجاربي العملية، وتلخيصات المواد، وتكتيكات التحصيل الدراسي المنضبط.",
        en: "Reflections, practical lab tactics, subject summaries, and high-discipline study strategies."
      }
    },
    toasts: {
      linkCopied: {
        ar: "تم نسخ رابط الملف الشخصي بنجاح! شكراً لمشاركتك 🚀",
        en: "Profile link copied to clipboard! Thank you for sharing 🚀"
      },
      msgSent: {
        ar: "شكراً لتواصلك يا صديقي! تم استلام رسالتك وسأرد عليك قريباً جداً 🌟",
        en: "Thank you for reaching out! Your message was sent and I'll reply soon 🌟"
      },
      themeChanged: {
        dark: { ar: "تم تفعيل الوضع الليلي 🌙", en: "Dark Mode activated 🌙" },
        light: { ar: "تم تفعيل الوضع النهاري ☀️", en: "Light Mode activated ☀️" }
      }
    },
    common: {
      readArticle: { ar: "قراءة المقال بالكامل", en: "Read Full Article" },
      close: { ar: "إغلاق", en: "Close" },
      shareArticle: { ar: "مشاركة المقال", en: "Share Article" },
      topicsCovered: { ar: "المحاور والمفاهيم المدروسة:", en: "Core Topics & Concepts Covered:" },
      toolsUsed: { ar: "الأدوات والمحررات:", en: "Tools & Frameworks:" },
      progressLabel: { ar: "نسبة الإنجاز والاستيعاب:", en: "Mastery & Progress:" },
      backToTop: { ar: "العودة للأعلى", en: "Back to top" },
      copyEmail: { ar: "نسخ البريد", en: "Copy Email" },
      emailCopied: { ar: "تم نسخ البريد الإلكتروني!", en: "Email copied!" },
      allRightsReserved: {
        ar: "جميع الحقوق محفوظة © 2026 إبراهيم حيدر عبد الله وزني | صُمم بشغف باستخدام HTML5 و Tailwind CSS و Vanilla JS",
        en: "All rights reserved © 2026 Ibrahim Haidar Abdullah Wazni | Crafted with pure HTML5, Tailwind CSS & Vanilla JS"
      }
    }
  }
};

// Make accessible in global window scope for modular vanilla JS
window.portfolioData = portfolioData;
