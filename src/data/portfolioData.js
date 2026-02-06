export const eras = [
    {


        company: "d.school Paris at École des Ponts",
        color: "#d79c6f",
        url: "https://dschool.fr/",
        logo: {
            light: "/logos/dschool-light.png",
            dark: "/logos/dschool-dark.png"
        },
        location: "Champs-sur-Marne, France",
        role: "Design Thinking Practitioner",
        period: "2025 — Present",
        description: "Immersive program focusing on radical innovation, human-centric design, and cross-disciplinary collaboration on global challenges.",
        coursework: [
            "Design Thinking Methodology",
            "User Research & Empathy Mapping",
            "Rapid Prototyping & Iteration",
            "Complex Systems Analysis",
            "Strategic Innovation Management",
            "Facilitation & Workshop Leadership"
        ],
        projects: [
            {
                title: "Reverse Logistics for Used Nitrous Oxide bottles",
                type: "Circular Economy + Service Design",
                desc: "A Sugar Network joint project with ISDI Skilltech tackling the waste management of N2O canisters.",
                details: "Collaborated with a cross-functional team to design a reverse logistics ecosystem. Mapped the lifecycle of N2O bottles, interviewed waste management stakeholders, and prototyped a collection service to mitigate environmental impact.",
                tech: ["Service Design", "System Mapping", "Sugar Network"],
                domain: "Design"
            },
            {
                title: "L'Oréal Brandstorm 2026",
                type: "Innovation Strategy",
                desc: "Strategic proposal for L'Oréal's future product ecosystem.",
                details: "Developed a forward-looking innovation concept for L'Oréal. Created a pitch deck and visual assets demonstrating a new product-service system aligned with 2026 consumer behavior predictions.",
                tech: ["Strategy", "Concept Development", "Pitching"],
                domain: "Design"
            }
        ]
    },
    {
        id: "bouygues",
        company: "Bouygues Travaux Publics",
        color: "#df6431",
        url: "https://www.bouygues-tp.com/",
        logo: {
            light: "/logos/bouygues.png",
            dark: "/logos/bouygues.png"
        },
        location: "LabTP, France",
        role: "Innovation & R&D Lead",
        period: "2022 — 2025",
        description: "Leading advanced R&D initiatives at the intersection of automation, structural integrity, and digital twins.",
        projects: [
            {
                title: "HS2 | MSV Data Logistic Cycles Analysis",
                type: "Data + Civil",
                desc: "Analyzed Multi-Service Vehicle (MSV) logistic cycles to optimize underground construction logistics on High Speed 2.",
                details: "Processed telematics data from MSVs to map logistics flows and identify bottlenecks in tunnel supply chains. Developed scripts to automatically flag cycle deviations and suggest schedule optimizations.",
                tech: ["Python", "Data Analysis", "Logistics"],
                domain: "Data"
            },
            {
                title: "HS2 | Connected Launching Girder Cycle Analysis",
                type: "IoT + Dashboarding",
                desc: "Real-time cycle analysis and dashboarding for the launching girder operations.",
                details: "Integrated sensor data from the launching girder into a real-time dashboard. Visualized critical path activities and cycle times to support the site team in achieving performance targets.",
                tech: ["IoT", "PowerBI", "Real-time Data"],
                domain: "Civil"
            },
            {
                title: "HKCKR | Connected Gantry Logistic Cycle Analysis",
                type: "Civil + Optimization",
                desc: "Logistic cycle analysis for connected gantries to improve site efficiency.",
                details: "Conducted deep-dive analysis of gantry crane utilization and movement patterns. Proposed changes to material storage layouts and lifting sequences that improved gantry availability.",
                tech: ["Optimization", "Site Logistics", "Data Viz"],
                domain: "Civil"
            }
        ]
    },
    {
        id: "socotec",
        company: "Socotec Monitoring",
        color: "#588fec",
        url: "https://www.socotec.com/",
        logo: {
            light: "/logos/socotec.png",
            dark: "/logos/socotec.png"
        },
        location: "Paris / International",
        role: "Monitoring Engineer",
        period: "2020 — 2022",
        description: "Deploying high-precision sensor arrays and real-time data analysis for major infrastructure assets.",
        projects: [
            {
                title: "SPMR | Fiber Optic Brillouin Analysis",
                type: "Data + Geotechnics",
                desc: "Monitoring a pipeline in a ground slide area using continuous fiber optic sensing.",
                details: "Analyzed Brillouin scattering data to detect localized strain accumulation along the pipeline. Correlated strain profiles with ground movement metrics to assess failure risks in real-time.",
                tech: ["Fiber Optics", "Python", "Signal Processing"],
                domain: "Data"
            },
            {
                title: "Bonneuil-sur-Marnes | Wall Stability",
                type: "Geotechnical Engineering",
                desc: "Stability analysis of a retention wall using inclinometer displacement data.",
                details: "Processed manual and automated inclinometer datasets to track horizontal displacement profiles. Validated wall performance against design safety factors and triggered alerts for threshold breaches.",
                tech: ["Inclinometers", "Soil Mechanics", "Data Viz"],
                domain: "Civil"
            },
            {
                title: "Total Donges | Chimney Structural Integrity",
                type: "Structural Health Monitoring",
                desc: "Accelerometer data analysis to assess the structural integrity of a refinery chimney.",
                details: "Performed frequency domain analysis (FFT) on accelerometer time-series to identify natural frequencies and damping ratios. Assessed structural behavior under varying wind load conditions.",
                tech: ["Signal Processing", "FFT", "Matlab/Python"],
                domain: "Data"
            }
        ]
    },
    {
        id: "berkeley",
        company: "UC Berkeley",
        color: "#1c305b",
        url: "https://www.berkeley.edu/",
        logo: {
            light: "/logos/berkeley.png",
            dark: "/logos/berkeley.png"
        },
        location: "California, USA",
        role: "Research & Graduate Studies",
        period: "2019 — 2020",
        description: "Specialization in Systems Engineering and Data Science. Focused on the intersection of optimization, transportation behavior, and physical infrastructure.",
        coursework: [
            "Analysis of Transportation Data (CE 262)",
            "Civil Systems and the Environment (CE 268E)",
            "Sensors and Signal Interpretation (CE 271)",
            "Optimization Models in Engineering (EECS 227AT)",
            "Behavioral Modeling for Engineering, Planning, and Policy Analysis (CE 264)",
            "Energy Systems and Control (CE 295)",
            "Applications in Data Analysis (IEOR 242)",
            "Principles & Techniques of Data Science (COMPSCI 100)"
        ],
        projects: [
            {
                title: "Civil Systems Optimization",
                type: "Systems Science",
                desc: "Leveraged data science and optimization to manage complex urban systems.",
                details: "Developed stochastic models for smart city infrastructure resilience. Used Gurobi to optimize resource allocation during simulated emergency events, demonstrating a 20% potential improvement in response times.",
                tech: ["Python (NumPy/Pandas)", "Gurobi/CVX", "GIS"],
                domain: "Data"
            },
            {
                title: "Seismic Resilience Simulation",
                type: "Civil + Design",
                desc: "Researching the impact of bio-inspired structural forms on seismic energy dissipation.",
                details: "Modeled non-linear structural behavior of lattice geometries under seismic loading. Explored how biomimetic designs could offer superior weight-to-performance ratios for earthquake-prone regions.",
                tech: ["SAP2000", "Generative Design"],
                domain: "Civil"
            },
            {
                title: "Urban Informatics Lab",
                type: "Data Science",
                desc: "Analyzing large-scale mobility datasets to propose human-centric urban design interventions.",
                details: "Processed GPS trajectories from 10,000+ vehicles to map congestion patterns. Correlated mobility data with air quality indices to identify pollution hotspots.",
                tech: ["R", "Spatial Statistics", "QGIS"],
                domain: "Data"
            }
        ]
    },
    {
        id: "estp",
        company: "ESTP Paris",
        color: "#6c9d8d",
        url: "https://www.estp.fr/",
        logo: {
            light: "/logos/estp-light.png",
            dark: "/logos/estp-dark.png"
        },
        location: "Cachan, France",
        role: "Engineering Degree (Travaux Publics)",
        period: "2017 — 2019",
        description: "Comprehensive training in large-scale infrastructure, hydraulic systems, and construction management.",
        coursework: [
            "Structural Analysis & Mechanics",
            "Soil Mechanics & Geotechnical Engineering",
            "Fluid Mechanics & Hydraulics",
            "Reinforced & Prestressed Concrete",
            "Construction Management & Site Safety",
            "Topography & Geographic Information Systems",
            "Building Information Modeling (BIM)"
        ],
        projects: [
            {
                title: "Structural Engineering & Public Works",
                type: "Structural Design",
                desc: "Comprehensive study of structural mechanics, soil behavior, and hydraulics.",
                details: "Performed detailed load analysis and reinforcement detailing for a 5-story reinforced concrete building. Validated designs against Eurocode 2 and 8 regulations.",
                tech: ["AutoCAD", "Revit", "Eurocodes"],
                domain: "Civil"
            },
            {
                title: "Infrastructure Project Management",
                type: "Operational Strategy",
                desc: "Focus on the lifecycle of public works projects, from geotechnical assessment to site management.",
                details: "Developed a mock construction execution plan for a bridge project, including scheduling (Gantt), cost estimation, and risk mitigation strategies.",
                tech: ["MS Project", "Geotechnical Modeling"],
                domain: "Civil"
            }
        ]
    },
    {
        id: "cpge",
        company: "CPGE Fénelon Ste Marie",
        color: "#302e59",
        url: "https://www.fenelonsaintemarie.org/",
        logo: {
            light: "/logos/cpge-light.png",
            dark: "/logos/cpge-dark.png"
        },
        location: "Paris, France",
        role: "Classes Préparatoires (MPSI/MP)",
        period: "2015 — 2017",
        description: "Intensive preparation for national competitive exams with a focus on advanced Mathematics and Physics.",
        coursework: [
            "Advanced Linear Algebra & Matrix Theory",
            "Multivariable Calculus & Analysis",
            "Thermodynamics & Statistical Mechanics",
            "Electromagnetism & Maxwell's Equations",
            "Classical Mechanics & Dynamics",
            "Engineering Sciences (SII) & Control Systems",
            "Computer Science (Python & SQL)"
        ],
        projects: [
            {
                title: "Abstract Mathematical Modeling & Logic",
                type: "Analytical Foundations",
                desc: "Mastery of high-level abstraction in MPSI/MP. Developed a rigorous framework for solving complex problems.",
                details: "Intensive training in abstract algebra (groups, rings, fields) and topology. honed the ability to construct and critique rigorous mathematical proofs.",
                tech: ["Python", "LaTeX", "SQL"],
                domain: "Data"
            },
            {
                title: "Theoretical Physics & System Dynamics",
                type: "Physical Systems",
                desc: "Exploration of Thermodynamics, Electromagnetism, and Classical Mechanics.",
                details: "Studied the fundamental laws governing physical systems. Solved complex differential equations to model dynamic systems such as coupled oscillators and electromagnetic fields.",
                tech: ["Numerical Analysis", "Signal Processing"],
                domain: "Civil"
            }
        ]
    }
];

export const featuredProjects = [
    {
        title: "Design Fiction Facilitator",
        desc: "Interactive workshop tool for generating and exploring future scenarios.",
        tech: ["React", "Vite", "Tailwind"],
        link: "https://github.com",
        demo: "https://design-fiction.kieranjanin.com",
        domain: "Design",
        type: "Web App",
        company: "d.school Paris"
    },
    {
        title: "Kieran Janin Web",
        desc: "The portfolio site you are looking at right now. Built with Vite and React.",
        tech: ["React", "Tailwind", "Vite"],
        link: "https://github.com",
        demo: "#",
        domain: "Other",
        type: "Web App",
        company: "Personal Project"
    }
];

export const getAllProjects = () => {
    // Flatten projects from eras and inject company name
    const archiveProjects = eras.flatMap(era =>
        era.projects.map(project => ({
            ...project,
            company: era.company
        }))
    );
    return [...featuredProjects, ...archiveProjects];
};

export const getProjectsByDomain = (domain) => {
    return getAllProjects().filter(project => project.domain === domain);
};
