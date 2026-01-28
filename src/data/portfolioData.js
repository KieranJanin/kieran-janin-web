export const eras = [
    {
        id: "dschool",
        company: "d.school Paris at École des Ponts",
        location: "Champs-sur-Marne, France",
        role: "Design Thinking Practitioner",
        period: "2025 — Present",
        description: "Immersive program focusing on radical innovation, human-centric design, and cross-disciplinary collaboration on global challenges.",
        projects: [
            {
                title: "Global Innovation Challenge",
                type: "Design + Strategy",
                desc: "Collaborating with corporate partners to redefine user experiences in complex industrial ecosystems through rapid prototyping and empathy-driven research.",
                tech: ["User Research", "Rapid Prototyping", "Systems Thinking"],
                domain: "Design"
            },
            {
                title: "Human-Centric Urban Systems",
                type: "Design + Civil",
                desc: "Applying d.school methodologies to infrastructure challenges, ensuring technical engineering solutions align with actual human behavior and needs.",
                tech: ["Empathy Mapping", "Iterative Testing"],
                domain: "Design"
            }
        ]
    },
    {
        id: "bouygues",
        company: "Bouygues Travaux Publics",
        location: "LabTP, France",
        role: "Innovation & R&D Lead",
        period: "2022 — 2025",
        description: "Leading advanced R&D initiatives at the intersection of automation, structural integrity, and digital twins.",
        projects: [
            {
                title: "Automated Damage Detection",
                type: "Data + Civil",
                desc: "Developed a computer-vision pipeline for identifying structural defects in tunnel linings using autonomous drone data.",
                tech: ["PyTorch", "OpenCV", "BIM"],
                domain: "Data"
            },
            {
                title: "LabTP Innovation Framework",
                type: "Design Thinking",
                desc: "Restructured the internal R&D process to prioritize user-centric design for on-site construction tools.",
                tech: ["Workshop Facilitation", "Prototyping"],
                domain: "Design"
            },
            {
                title: "High-Performance Concrete Modeling",
                type: "Civil Engineering",
                desc: "Predictive analysis of curing cycles for low-carbon concrete formulations in extreme environments.",
                tech: ["Finite Element Analysis", "Matlab"],
                domain: "Civil"
            }
        ]
    },
    {
        id: "socotec",
        company: "Socotec Monitoring",
        location: "Paris / International",
        role: "Monitoring Engineer",
        period: "2020 — 2022",
        description: "Deploying high-precision sensor arrays and real-time data analysis for major infrastructure assets.",
        projects: [
            {
                title: "Grand Paris Express Monitoring",
                type: "Civil + Data",
                desc: "Managing real-time displacement data for tunnel boring machines in high-risk urban density zones.",
                tech: ["IoT", "Real-time SQL", "Instrumentation"],
                domain: "Civil"
            },
            {
                title: "Automated Reporting Engine",
                type: "Data Science",
                desc: "Built a Python-based engine to automate structural health reports, reducing lead time by 70%.",
                tech: ["Python", "Pandas", "ReportLab"],
                domain: "Data"
            }
        ]
    },
    {
        id: "berkeley",
        company: "UC Berkeley",
        location: "California, USA",
        role: "Research & Graduate Studies",
        period: "2019 — 2020",
        description: "Academic focus on advanced structural mechanics and the introduction of computational design methods.",
        projects: [
            {
                title: "Seismic Resilience Simulation",
                type: "Civil + Design",
                desc: "Researching the impact of bio-inspired structural forms on seismic energy dissipation.",
                tech: ["SAP2000", "Generative Design"],
                domain: "Civil"
            },
            {
                title: "Urban Informatics Lab",
                type: "Data Science",
                desc: "Analyzing large-scale mobility datasets to propose human-centric urban design interventions.",
                tech: ["R", "Spatial Statistics", "QGIS"],
                domain: "Data"
            }
        ]
    },
    {
        id: "estp",
        company: "ESTP Paris",
        location: "Cachan, France",
        role: "Engineering Degree (Travaux Publics)",
        period: "2017 — 2019",
        description: "Comprehensive training in large-scale infrastructure, hydraulic systems, and construction management.",
        projects: [
            {
                title: "Reinforced Concrete Optimization",
                type: "Civil Engineering",
                desc: "Structural design and dimensioning of a multi-story complex using Eurocode 2 standards.",
                tech: ["Robot Structural Analysis", "Eurocodes"],
                domain: "Civil"
            },
            {
                title: "Hydraulic Network Simulation",
                type: "Civil + Data",
                desc: "Modeling water distribution transients and surge protection in urban utility networks.",
                tech: ["EPANET", "Fluid Mechanics"],
                domain: "Civil"
            }
        ]
    },
    {
        id: "cpge",
        company: "CPGE Fénelon Ste Marie",
        location: "Paris, France",
        role: "Classes Préparatoires (MPSI/PSI*)",
        period: "2015 — 2017",
        description: "Intensive preparation for national competitive exams with a focus on advanced Mathematics and Physics.",
        projects: [
            {
                title: "TIPE: Aeroelastic Flutter",
                type: "Physics + Math",
                desc: "Individual research project on the stability of suspension bridges under wind-induced oscillation.",
                tech: ["Mathematical Modeling", "Physical Prototyping"],
                domain: "Civil"
            },
            {
                title: "Theoretical Fundamentals",
                type: "Academic Rigor",
                desc: "Mastery of abstract algebra, thermodynamics, and electromagnetism under high-pressure constraints.",
                tech: ["Multivariable Calculus", "Linear Algebra"],
                domain: "Data"
            }
        ]
    }
];

export const getAllProjects = () => {
    // Flatten projects from eras
    return eras.flatMap(era => era.projects);
};

export const getProjectsByDomain = (domain) => {
    return getAllProjects().filter(project => project.domain === domain);
};
