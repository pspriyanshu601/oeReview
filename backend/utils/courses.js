const courses = [
    {
      id: 0,
      name: "MS GPC530 - Seismology",
    },
    {
      id: 1,
      name: "MS GPC531 - Geotechnical Modelling",
    },
    {
      id: 2,
      name: "MS GPC532 - Hydrology",
    },
    {
      id: 3,
      name: "MS GPC533 - Seismic Hazard Zonation",
    },
    {
      id: 4,
      name: "MS GPC534 - Finite Element Analysis",
    },
    {
      id: 5,
      name: "MS GPC535 - Geotechnical Modelling Practical",
    },
    {
      id: 6,
      name: "MS GPC536 - Seismology Practical",
    },
    {
      id: 7,
      name: "MS CHC501 - Advanced Transport Phenomena",
    },
    {
      id: 8,
      name: "MS CHC502 - Advanced Chemical Engineering Thermodynamics",
    },
    {
      id: 9,
      name: "MS CHC503 - Computational Techniques in Chemical Engineering",
    },
    {
      id: 10,
      name: "MS CHC504 - Advanced Chemical Reaction Engineering",
    },
    {
      id: 11,
      name: "MS CHC505 - Advanced Process Control",
    },
    {
      id: 12,
      name: "MS CHC506 - Instrumental Methods of Analysis",
    },
    {
      id: 13,
      name: "MS CHC507 - Computational Techniques Lab",
    },
    {
      id: 14,
      name: "MS CSC501 - Advanced Data Structures & Algorithms",
    },
    {
      id: 15,
      name: "MS CSC502 - Advanced DBMS",
    },
    {
      id: 16,
      name: "MS CSC503 - Algorithmic Graph Theory",
    },
    {
      id: 17,
      name: "MS CSC504 - Computing Techniques and Mathematical Tools",
    },
    {
      id: 18,
      name: "MS CSC505 - High Performance Computer Architecture",
    },
    {
      id: 19,
      name: "MS CSC506 - Advanced Data Structures & Algorithms Lab",
    },
    {
      id: 20,
      name: "MS CSC507 - Computing Techniques and Mathematical Tools Lab",
    },
    {
      id: 21,
      name: "MS ECC500 - Advanced Communication Theory",
    },
    {
      id: 22,
      name: "MS ECC501 - Advanced Optical Communication",
    },
    {
      id: 23,
      name: "MS ECC542 - Microwave Transmission Lines and Matching Networks",
    },
    {
      id: 24,
      name: "MS ECC580 - Mathematical and Simulation Techniques",
    },
    {
      id: 25,
      name: "MS ECC582 - Digital VLSI Circuits Design",
    },
    {
      id: 26,
      name: "MS ECC583 - VLSI & Communication Systems Lab",
    },
    {
      id: 27,
      name: "MS ECC584 - RF & Photonics Lab",
    },
    {
      id: 28,
      name: "MS ESC501 - Ecology and Environmental Microbiology",
    },
    {
      id: 29,
      name: "MS ESC502 - Water Supply and Treatment",
    },
    {
      id: 30,
      name: "MS ESC503 - MATLAB Programming for Numerical Computation",
    },
    {
      id: 31,
      name: "MS ESC504 - Air and Noise Pollution",
    },
    {
      id: 32,
      name: "MS ESC505 - Wastewater Engineering",
    },
    {
      id: 33,
      name: "MS ESC521 - Water Chemistry Practical",
    },
    {
      id: 34,
      name: "MS ESC522 - Air and Noise Monitoring Practical",
    },
    {
      id: 35,
      name: "MS FMC501 - Coal and Mineral Processing",
    },
    {
      id: 36,
      name: "MS FMC502 - Transport Phenomena",
    },
    {
      id: 37,
      name: "MS FMC503 - Numerical Methods & Computer Applications",
    },
    {
      id: 38,
      name: "MS FMC504 - Unit Operations in Extractive Metallurgy",
    },
    {
      id: 39,
      name: "MS FMC506 - Fuel Technology",
    },
    {
      id: 40,
      name: "MS FMC551 - Coal and Mineral Processing Laboratory",
    },
    {
      id: 41,
      name: "MS FMC552 - Process Metallurgy Laboratory",
    },
    {
      id: 42,
      name: "MS MCC531 - Advanced Data Structures & Algorithm",
    },
    {
      id: 43,
      name: "MS MCC532 - Fundamentals of Machine Learning",
    },
    {
      id: 44,
      name: "MS MCC533 - Computer Oriented Numerical Methods",
    },
    {
      id: 45,
      name: "MS MCC534 - Statistics in Decision Makings",
    },
    {
      id: 46,
      name: "MS MCC535 - Soft Computing Techniques",
    },
    {
      id: 47,
      name: "MS MCC536 - Advanced Data Structures & Algorithm Practical",
    },
    {
      id: 48,
      name: "MS MCC537 - Fundamentals of Machine Learning Practical",
    },
    {
      id: 49,
      name: "MS MCC538 - Computer Oriented Numerical Methods Practical",
    },
    {
      id: 50,
      name: "MS PEC501 - Formation Evaluation and Production Logging",
    },
    {
      id: 51,
      name: "MS PEC502 - Advanced Well Testing",
    },
    {
      id: 52,
      name: "MS PEC503 - Numerical Methods for Petroleum Engineers",
    },
    {
      id: 53,
      name: "MS PEC504 - Advanced Production Technologies",
    },
    {
      id: 54,
      name: "MS PEC505 - Petroleum Economics, Risk and Uncertainty Management",
    },
    {
      id: 55,
      name: "MS PEC506 - Reservoir Simulation Practical",
    },
    {
      id: 56,
      name: "MS PEC507 - Term paper or Mini Project",
    },
    {
      id: 57,
      name: "MS MCC501 - Analysis",
    },
    {
      id: 58,
      name: "MS MCC502 - Differential Equations",
    },
    {
      id: 59,
      name: "MS MCC503 - Numerical Methods",
    },
    {
      id: 60,
      name: "MS MCC504 - Data Structures",
    },
    {
      id: 61,
      name: "MS MCC505 - Probability & Statistics",
    },
    {
      id: 62,
      name: "MS MCC505 - Probability & Statistics",
    },
    {
      id: 63,
      name: "MS MCC506 - Numerical Methods Practical",
    },
    {
      id: 64,
      name: "MS MCC507 - Data Structures Practical",
    },
    {
      id: 65,
      name: "MS GLC502 - Applied Geochemistry",
    },
    {
      id: 66,
      name: "MS GLC505 - Mathematics for Geoscientists",
    },
    {
      id: 67,
      name: "MS GLC552 - Sample Preparation and Analytical Technique in Geosciences",
    },
    {
      id: 68,
      name: "MS GLC553 - Geology of Natural Resources",
    },
    {
      id: 69,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 70,
      name: "MS GPC531 - Geotechnical Modelling",
    },
    {
      id: 71,
      name: "MS GPC533 - Seismic Hazard Zonation",
    },
    {
      id: 72,
      name: "MS GPC541 - Numerical Analysis and Data Structure",
    },
    {
      id: 73,
      name: "MS GPC542 - Geophysical Field Theory",
    },
    {
      id: 74,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 75,
      name: "MS CHC501 - Advanced Transport Phenomena",
    },
    {
      id: 76,
      name: "MS CHC502 - Advanced Chemical Engineering Thermodynamics",
    },
    {
      id: 77,
      name: "MS CHC503 - Computational Techniques in Chemical Engineering",
    },
    {
      id: 78,
      name: "MS CHC519 - Catalytic Processes and Reactors",
    },
    {
      id: 79,
      name: "MS CHC520 - Applied Statistics in Chemical Engineering",
    },
    {
      id: 80,
      name: "MS CSC503 - Algorithmic Graph Theory",
    },
    {
      id: 81,
      name: "MS CSC504 - Computing Techniques and Mathematical Tools",
    },
    {
      id: 82,
      name: "MS CSC517 - Selected Topics in Algorithms",
    },
    {
      id: 83,
      name: "MS CSC518 - Number Theory and Cryptography",
    },
    {
      id: 84,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 85,
      name: "MS ECC501 - Advanced Optical Communication",
    },
    {
      id: 86,
      name: "MS ECC504 - Fundamentals of Communication Systems Design",
    },
    {
      id: 87,
      name: "MS ECC505 - Numerical Methods and Optimization Techniques",
    },
    {
      id: 88,
      name: "MS ECC582 - Digital VLSI Circuits Design",
    },
    {
      id: 89,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 90,
      name: "MS ESC501 - Ecology and Environmental Microbiology",
    },
    {
      id: 91,
      name: "MS ESC503 - MATLAB Programming for Numerical Computation",
    },
    {
      id: 92,
      name: "MS ESC508 - Instrumental Techniques in Environmental Analysis",
    },
    {
      id: 93,
      name: "MS ESC525 - Environmental Chemistry",
    },
    {
      id: 94,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 95,
      name: "MS FMC501 - Coal and Mineral Processing",
    },
    {
      id: 96,
      name: "MS FMC503 - Numerical Methods & Computer Applications",
    },
    {
      id: 97,
      name: "MS FMC506 - Fuel Technology",
    },
    {
      id: 98,
      name: "MS FMC509 - Advanced Materials and Applications",
    },
    {
      id: 99,
      name: "MS FMC510 - Mathematical Modeling of Mineral and Metallurgical Processes",
    },
    {
      id: 100,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 101,
      name: "MS MCC502 - Differential Equations",
    },
    {
      id: 102,
      name: "MS MCC503 - Numerical Methods",
    },
    {
      id: 103,
      name: "MS MCC520 - Fourier Analysis and its Applications",
    },
    {
      id: 104,
      name: "MS MCC521 - Bayesian Survival Analysis",
    },
    {
      id: 105,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 106,
      name: "MS MCC502 - Differential Equations",
    },
    {
      id: 107,
      name: "MS MCC503 - Numerical Methods",
    },
    {
      id: 108,
      name: "MS MCC520 - Fourier Analysis and its Applications",
    },
    {
      id: 109,
      name: "MS MCC521 - Bayesian Survival Analysis",
    },
    {
      id: 110,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 111,
      name: "MS PEC503 - Numerical Methods for Petroleum Engineers",
    },
    {
      id: 112,
      name: "MS PEC504 - Advanced Production Technologies",
    },
    {
      id: 113,
      name: "MS PEC513 - Introduction to Python and Petroleum Data Analysis",
    },
    {
      id: 114,
      name: "MS GLC518 - Principles and Applications of Geostatistics",
    },
    {
      id: 115,
      name: "MS GLC519 - Engineering Geology",
    },
    {
      id: 116,
      name: "MS GLC520 - Hydrogeology",
    },
    {
      id: 117,
      name: "MS GLC524 - Principles and Applications of Geostatistics Practical",
    },
    {
      id: 118,
      name: "MS GLC525 - Engineering Geology and Hydrogeology Practical",
    },
    {
      id: 119,
      name: "MS GLD576 - Nanotechnology in Mineral and Hydrocarbon Exploration",
    },
    {
      id: 120,
      name: "MS GLD591 - Rock Slope Engineering",
    },
    {
      id: 121,
      name: "MS GPC516 - Geophysical Inversion",
    },
    {
      id: 122,
      name: "MS GPC517 - Seismic Data Processing and Interpretation",
    },
    {
      id: 123,
      name: "MS GPC518 - Geophysical Inversion Practical",
    },
    {
      id: 124,
      name: "MS GPC519 - Seismic Data Processing and Interpretation  Practical",
    },
    {
      id: 125,
      name: "MS GPD502 - Formation Evaluation",
    },
    {
      id: 126,
      name: "MS GPD503 - Image Processing and Geographic Information System",
    },
    {
      id: 127,
      name: "MS GLC501 - Advanced Mineralogy",
    },
    {
      id: 128,
      name: "MS GLC502 - Applied Geochemistry",
    },
    {
      id: 129,
      name: "MS GLC503 - Methods of Structural Geology",
    },
    {
      id: 130,
      name: "MS GLC504 - Micropaleontology and Vertebrate Palaeontology",
    },
    {
      id: 131,
      name: "MS GLC505 - Mathematics for Geoscientists",
    },
    {
      id: 132,
      name: "MS GLC506 - Mineralogy and Geochemistry Practical",
    },
    {
      id: 133,
      name: "MS GLC506 - Mineralogy and Geochemistry Practical",
    },
    {
      id: 134,
      name: "MS GLC507 - Methods of Structural Geology Practical",
    },
    {
      id: 135,
      name: "MS GLC508 - Micropaleontology and Vertebrate Paleontology Practical",
    },
    {
      id: 136,
      name: "MS GLC202 - Physical and Structural Geology",
    },
    {
      id: 137,
      name: "MS GPC501 - Solid Earth Geophysics",
    },
    {
      id: 138,
      name: "MS GPC502 - Gravity Method",
    },
    {
      id: 139,
      name: "MS GPC503 - Remote Sensing Principles",
    },
    {
      id: 140,
      name: "MS GPC504 - Mathematical Functional Analysis",
    },
    {
      id: 141,
      name: "MS GPC505 - Gravity Method Practical",
    },
    {
      id: 142,
      name: "MS GPC506 - Remote Sensing Principles Practical",
    },
    {
      id: 143,
      name: "MS GPC507 - Mathematical Functional Analysis Practical",
    },
    {
      id: 144,
      name: "MS GLC518 - Principles and Applications of Geostatistics",
    },
    {
      id: 145,
      name: "MS GLC519 - Engineering Geology",
    },
    {
      id: 146,
      name: "MS GLC520 - Hydrogeology",
    },
    {
      id: 147,
      name: "MS GLC524 - Principles and Applications of Geostatistics Practical",
    },
    {
      id: 148,
      name: "MS GLC525 - Engineering Geology and Hydrogeology Practical",
    },
    {
      id: 149,
      name: "MS GLD521 - Stratigraphy",
    },
    {
      id: 150,
      name: "MS GLD522 - Coalbed Methane, Shale Gas and Gas Hydrate Exploration",
    },
    {
      id: 151,
      name: "MS GLO523 - Atmosphere, Ocean and Climate Dynamics",
    },
    {
      id: 152,
      name: "MS GPC516 - Geophysical Inversion",
    },
    {
      id: 153,
      name: "MS GPC517 - Seismic Data Processing and Interpretation",
    },
    {
      id: 154,
      name: "MS GPC518 - Geophysical Inversion Practical",
    },
    {
      id: 155,
      name: "MS GPC519 - Seismic Data Processing and Interpretation  Practical",
    },
    {
      id: 156,
      name: "MS GPD501 - Geothermics and Geodynamics",
    },
    {
      id: 157,
      name: "MS GPD504 - Airborne Geophysics",
    },
    {
      id: 158,
      name: "MS MCC503 - Numerical Methods",
    },
    {
      id: 159,
      name: "MS MCC506 - Numerical Methods Practical",
    },
    {
      id: 160,
      name: "MS MCD512 - Non-Linear Dynamics and Chaos",
    },
    {
      id: 161,
      name: "MS MCD557 - Finite Field Theory",
    },
    {
      id: 162,
      name: "MS MCO401 - Partial Differential Equations",
    },
    {
      id: 163,
      name: "MS MCO502 - Optimization Techniques",
    },
    {
      id: 164,
      name: "MS GLC502 - Applied Geochemistry",
    },
    {
      id: 165,
      name: "MS GLC503 - Methods of Structural Geology",
    },
    {
      id: 166,
      name: "MS GLC504 - Micropaleontology and Vertebrate Palaeontology",
    },
    {
      id: 167,
      name: "MS GLC506 - Mineralogy and Geochemistry Practical",
    },
    {
      id: 168,
      name: "MS GLC506 - Mineralogy and Geochemistry Practical",
    },
    {
      id: 169,
      name: "MS GLC507 - Methods of Structural Geology Practical",
    },
    {
      id: 170,
      name: "MS GLC508 - Micropaleontology and Vertebrate Paleontology Practical",
    },
    {
      id: 171,
      name: "MS GLO532 - Environmental Geology",
    },
    {
      id: 172,
      name: "MS GPC501 - Solid Earth Geophysics",
    },
    {
      id: 173,
      name: "MS GPC502 - Gravity Method",
    },
    {
      id: 174,
      name: "MS GPC504 - Mathematical Functional Analysis",
    },
    {
      id: 175,
      name: "MS GPC505 - Gravity Method Practical",
    },
    {
      id: 176,
      name: "MS GPC507 - Mathematical Functional Analysis Practical",
    },
    {
      id: 177,
      name: "MS GPE202 - Geophysical Prospecting",
    },
    {
      id: 178,
      name: "MS GPE203 - Geophysical Prospecting Practical",
    },
    {
      id: 179,
      name: "MS GPO501 - Groundwater Geophysics",
    },
    {
      id: 180,
      name: "MS MCC301 - Number Theory and Cryptography",
    },
    {
      id: 181,
      name: "MS MCC302 - GPU Computing Practical",
    },
    {
      id: 182,
      name: "MS MCC502 - Differential Equations",
    },
    {
      id: 183,
      name: "MS MCD541 - GPU Computing",
    },
    {
      id: 184,
      name: "MS MCO403 - Graph Algorithms",
    },
    {
      id: 185,
      name: "MS GLC201 - Crystallography and Mineralogy",
    },
    {
      id: 186,
      name: "MS GLC202 - Physical and Structural Geology",
    },
    {
      id: 187,
      name: "MS GLC203 - Crystallography and Optical Mineralogy Practical",
    },
    {
      id: 188,
      name: "MS GLC204 - Structural Geology Practical",
    },
    {
      id: 189,
      name: "MS GLE201 - Geology for Engineering and Sciences",
    },
    {
      id: 190,
      name: "MS GPC501 - Solid Earth Geophysics",
    },
    {
      id: 191,
      name: "MS GLC202 - Physical and Structural Geology",
    },
    {
      id: 192,
      name: "MS GLE203 - Geology for Engineering and Sciences Practical",
    },
    {
      id: 193,
      name: "MS GPC201 - Introduction to Rock Physics",
    },
    {
      id: 194,
      name: "MS GPC202 - Self-Potential Method: Theory and Application",
    },
    {
      id: 195,
      name: "MS GPC203 - Lab on Rock Physics",
    },
    {
      id: 196,
      name: "MS GPC204 - Self-Potential Method Theory & Application Practical",
    },
    {
      id: 197,
      name: "MS GPE202 - Geophysical Prospecting",
    },
    {
      id: 198,
      name: "MS MCC201 - Modern Algebra",
    },
    {
      id: 199,
      name: "MS MCC202 - Computer Organization and Architecture",
    },
    {
      id: 200,
      name: "MS MCC203 - Real Analysis",
    },
    {
      id: 201,
      name: "MS MCC204 - Computer Organization and Architecture Practical",
    },
    {
      id: 202,
      name: "MS MCC505 - Probability & Statistics",
    },
    {
      id: 203,
      name: "MS MCC505 - Probability & Statistics",
    },
    {
      id: 204,
      name: "MS CHD405 - Energy Technology",
    },
    {
      id: 205,
      name: "MS CHD408 - Process Data Analytics",
    },
    {
      id: 206,
      name: "MS CHD413 - Advanced Separation Processes",
    },
    {
      id: 207,
      name: "MS CHD415 - Interfacial Phenomena and Microfluidics",
    },
    {
      id: 208,
      name: "MS CHO401 - Process Integration",
    },
    {
      id: 209,
      name: "MS CHO402 - Biofuels & Biomass Conversion Technology",
    },
    {
      id: 210,
      name: "MS CHO404 - AI in Process Industries",
    },
    {
      id: 211,
      name: "MS CSD407 - Network Security",
    },
    {
      id: 212,
      name: "MS CSD410 - Quantum Computing",
    },
    {
      id: 213,
      name: "MS CSD502 - Cloud Computing",
    },
    {
      id: 214,
      name: "MS CSO403 - Internet Technology",
    },
    {
      id: 215,
      name: "MS CSO404 - Cryptography",
    },
    {
      id: 216,
      name: "MS CSO504 - Machine Learning",
    },
    {
      id: 217,
      name: "MS ECD401 - Antenna and Wave Propagation",
    },
    {
      id: 218,
      name: "MS ECD405 - Digital Systems Design using HDL",
    },
    {
      id: 219,
      name: "MS ECD411 - Machine learning & Artificial Intelligence",
    },
    {
      id: 220,
      name: "MS ECD415 - Optical Communication",
    },
    {
      id: 221,
      name: "MS ECD418 - Semiconductor Device Modeling and Simulation",
    },
    {
      id: 222,
      name: "MS ECD562 - Current Mode Analog Circuits",
    },
    {
      id: 223,
      name: "MS ECO301 - Microprocessor and its Application",
    },
    {
      id: 224,
      name: "MS ECO302 - Power Electronics",
    },
    {
      id: 225,
      name: "MS ECO502 - Neuromorphic Engineering",
    },
    {
      id: 226,
      name: "MS ECO561 - Embedded System Design",
    },
    {
      id: 227,
      name: "MS ESD401 - Biodiversity Conservation",
    },
    {
      id: 228,
      name: "MS ESD405 - Climate Vulnerability and Risk Analysis",
    },
    {
      id: 229,
      name: "MS ESD501 - Environmental Geology and Resource Management",
    },
    {
      id: 230,
      name: "MS ESD502 - Environmental Biotechnology",
    },
    {
      id: 231,
      name: "MS ESD511 - Aerosols in the Atmosphere",
    },
    {
      id: 232,
      name: "MS FMD401 - Powder Metallurgy",
    },
    {
      id: 233,
      name: "MS FMD403 - Engineering Materials Selection and Design",
    },
    {
      id: 234,
      name: "MS FMD461 - Computational Techniques and Modelling",
    },
    {
      id: 235,
      name: "MS FMD517 - Mechanical Behaviour of Materials",
    },
    {
      id: 236,
      name: "MS FMD520 - Advanced Thermodynamics and Kinetics",
    },
    {
      id: 237,
      name: "MS FMO544 - Clean Coal Technology",
    },
    {
      id: 238,
      name: "MS FMO547 - Additive Manufacturing",
    },
    {
      id: 239,
      name: "MS PED401 - Offshore Drilling and Petroleum Production Practices",
    },
    {
      id: 240,
      name: "MS PED402 - Enhanced Oil Recovery Techniques",
    },
    {
      id: 241,
      name: "MS PED403 - Drilling System Design",
    },
    {
      id: 242,
      name: "MS PEO401 - Petroleum Environment, Health and Safety Practices",
    },
    {
      id: 243,
      name: "MS PEO402 - Well Performance",
    },
    {
      id: 244,
      name: "MS PEO406 - Reservoir Geomechanics",
    },
    {
      id: 245,
      name: "MS CHC301 - Separation Processes",
    },
    {
      id: 246,
      name: "MS CHC302 - Chemical Kinetics and Reaction Engineering",
    },
    {
      id: 247,
      name: "MS CHC303 - Process Design and Economics",
    },
    {
      id: 248,
      name: "MS CHC304 - Chemical Kinetics and Reaction Engineering Lab",
    },
    {
      id: 249,
      name: "MS CHC305 - Mass Transfer Lab",
    },
    {
      id: 250,
      name: "MS CHD407 - Materials Characterization",
    },
    {
      id: 251,
      name: "MS CSC301 - Database Management Systems",
    },
    {
      id: 252,
      name: "MS CSC302 - Compiler Design",
    },
    {
      id: 253,
      name: "MS CSC303 - Database Management Systems Lab",
    },
    {
      id: 254,
      name: "MS CSC304 - Compiler Design Lab",
    },
    {
      id: 255,
      name: "MS CSO303 - Artificial Intelligence",
    },
    {
      id: 256,
      name: "MS CSO505 - Soft Computing",
    },
    {
      id: 257,
      name: "MS ECC301 - Principles of Communication Systems",
    },
    {
      id: 258,
      name: "MS ECC302 - Digital Signal Processing",
    },
    {
      id: 259,
      name: "MS ECC303 - VLSI Design",
    },
    {
      id: 260,
      name: "MS ECC304 - Digital Signal Processing Lab",
    },
    {
      id: 261,
      name: "MS ECC305 - Communication System Lab",
    },
    {
      id: 262,
      name: "MS ECD403 - Computer Networks",
    },
    {
      id: 263,
      name: "MS ESC308 - Environmental Geotechnology",
    },
    {
      id: 264,
      name: "MS ESC309 - Wastewater Treatment",
    },
    {
      id: 265,
      name: "MS ESC310 - Environmental Impact Assessment",
    },
    {
      id: 266,
      name: "MS ESC355 - Environmental Geotechnology Practical",
    },
    {
      id: 267,
      name: "MS ESC356 - Wastewater Engineering Practical",
    },
    {
      id: 268,
      name: "MS ESO405 - Cleaner  Energy",
    },
    {
      id: 269,
      name: "MS FMC301 - Coal and Mineral Process Equipment Selection",
    },
    {
      id: 270,
      name: "MS FMC302 - Extractive Metallurgy",
    },
    {
      id: 271,
      name: "MS FMC306 - Coal and Mineral Process Equipment Selection Laboratory",
    },
    {
      id: 272,
      name: "MS FMC351 - Extractive Metallurgy Laboratory",
    },
    {
      id: 273,
      name: "MS FMD518 - Joining of Materials",
    },
    {
      id: 274,
      name: "MS FMO545 - Equipment Design",
    },
    {
      id: 275,
      name: "MS PEC301 - Applied Petroleum Reservoir Engineering and Management",
    },
    {
      id: 276,
      name: "MS PEC302 - Petroleum Production Operations",
    },
    {
      id: 277,
      name: "MS PEC303 - Natural Gas Engineering",
    },
    {
      id: 278,
      name: "MS PEC304 - Petroleum Production Engineering Practical",
    },
    {
      id: 279,
      name: "MS PEC305 - Process Engineering Practical",
    },
    {
      id: 280,
      name: "MS PEO404 - Petroleum Resource Management and Project Evaluation",
    },
    {
      id: 281,
      name: "MS CHC201 - Chemical Process Calculations",
    },
    {
      id: 282,
      name: "MS CHC202 - Fluid and Particle Mechanics",
    },
    {
      id: 283,
      name: "MS CHC203 - Heat Transfer",
    },
    {
      id: 284,
      name: "MS CHC204 - Computational Tools for Chemical Engineers Lab",
    },
    {
      id: 285,
      name: "MS CHC205 - Fluid and Particle Mechanics Lab",
    },
    {
      id: 286,
      name: "MS CHE201 - Engineering Thermodynamics",
    },
    {
      id: 287,
      name: "MS CSC201 - Data Structures",
    },
    {
      id: 288,
      name: "MS CSC202 - Discrete Mathematics",
    },
    {
      id: 289,
      name: "MS CSC203 - Computer Organization",
    },
    {
      id: 290,
      name: "MS CSC204 - Data Structures Lab",
    },
    {
      id: 291,
      name: "MS CSC205 - Computer Organization Lab",
    },
    {
      id: 292,
      name: "MS CSE201 - Data Structures and Algorithms",
    },
    {
      id: 293,
      name: "MS ECC201 - Electronic Devices",
    },
    {
      id: 294,
      name: "MS ECC202 - Signals & Networks",
    },
    {
      id: 295,
      name: "MS ECC203 - Digital Circuits and System Design",
    },
    {
      id: 296,
      name: "MS ECC204 - Digital System Design Lab",
    },
    {
      id: 297,
      name: "MS ECC205 - Signals & Networks Lab",
    },
    {
      id: 298,
      name: "MS ECE301 - Analog Interface Electronics",
    },
    {
      id: 299,
      name: "MS ESC201 - Drinking Water Supply and Treatment",
    },
    {
      id: 300,
      name: "MS ESC202 - Air Pollution",
    },
    {
      id: 301,
      name: "MS ESC203 - Noise  Pollution and Control",
    },
    {
      id: 302,
      name: "MS ESC251 - Water Pollution Practical",
    },
    {
      id: 303,
      name: "MS ESC252 - Air and Noise Pollution Practical",
    },
    {
      id: 304,
      name: "MS ESE201 - Pollution Control and Management",
    },
    {
      id: 305,
      name: "MS FMC201 - Colloids and Interfacial Phenomena",
    },
    {
      id: 306,
      name: "MS FMC202 - Heat and Mass Transfer",
    },
    {
      id: 307,
      name: "MS FMC203 - Physical Separation Processes for Coal and Minerals",
    },
    {
      id: 308,
      name: "MS FMC251 - Particle Technology Laboratory",
    },
    {
      id: 309,
      name: "MS FMC252 - Physical Separation Processes Laboratory",
    },
    {
      id: 310,
      name: "MS FME221 - Particle Technology",
    },
    {
      id: 311,
      name: "MS GLE203 - Geology for Engineering and Sciences Practical",
    },
    {
      id: 312,
      name: "MS PEC201 - Drilling Technology",
    },
    {
      id: 313,
      name: "MS PEC202 - Elements of Reservoir Engineering",
    },
    {
      id: 314,
      name: "MS PEC203 - Drilling Fluids and Cements",
    },
    {
      id: 315,
      name: "MS PEC204 - Reservoir Engineering Practical",
    },
    {
      id: 316,
      name: "MS PEC205 - Drilling Fluids and Cementing Practical",
    },
    {
      id: 317,
      name: "MS PEE201 - Introduction to Petroleum Engineering",
    },
    {
      id: 318,
      name: "MS MSC501 - Management Principles & Practices",
    },
    {
      id: 319,
      name: "MS MSC502 - Research Methodology and Statistics",
    },
    {
      id: 320,
      name: "MS MSC504 - Financial Accounting and Reporting",
    },
    {
      id: 321,
      name: "MS MSC506 - Managerial Economics",
    },
    {
      id: 322,
      name: "MS MSC507 - Decision Modelling",
    },
    {
      id: 323,
      name: "MS MSC508 - Business Analytics Lab",
    },
    {
      id: 324,
      name: "MS MSC509 - Business Communication Lab",
    },
    {
      id: 325,
      name: "MS MSC502 - Research Methodology and Statistics",
    },
    {
      id: 326,
      name: "MS MSC504 - Financial Accounting and Reporting",
    },
    {
      id: 327,
      name: "MS MSC506 - Managerial Economics",
    },
    {
      id: 328,
      name: "MS MSC507 - Decision Modelling",
    },
    {
      id: 329,
      name: "MS MSC508 - Business Analytics Lab",
    },
    {
      id: 330,
      name: "MS MSC522 - Data Mining for Business",
    },
    {
      id: 331,
      name: "MS MSC523 - Multivariate Analysis Lab",
    },
    {
      id: 332,
      name: "MS MSC526 - Strategic Management",
    },
    {
      id: 333,
      name: "MS MSD503 - Sales and Distribution Management",
    },
    {
      id: 334,
      name: "MS MSD507 - Management of Banks and Financial Institutions",
    },
    {
      id: 335,
      name: "MS MSD508 - Advertising and Promotion Management",
    },
    {
      id: 336,
      name: "MS MSD510 - Personnel Management and Industrial Relations",
    },
    {
      id: 337,
      name: "MS MSD511 - Human Resources Development",
    },
    {
      id: 338,
      name: "MS MSD530 - Supply Chain Management and Logistics",
    },
    {
      id: 339,
      name: "MS MSD532 - Computational Finance",
    },
    {
      id: 340,
      name: "MS MSD533 - Marketing Research",
    },
    {
      id: 341,
      name: "MS CYC514 - Photochemistry & Pericyclic Reactions",
    },
    {
      id: 342,
      name: "MS CYC515 - Molecular Spectroscopy",
    },
    {
      id: 343,
      name: "MS CYC516 - Strategies in Organic Synthesis",
    },
    {
      id: 344,
      name: "MS CYC517 - Physical Chemistry Lab - II",
    },
    {
      id: 345,
      name: "MS CYC518 - Analytical Chemistry Lab",
    },
    {
      id: 346,
      name: "MS CYC518 - Analytical Chemistry Lab",
    },
    {
      id: 347,
      name: "MS CYD522 - Advanced Biocatalysis",
    },
    {
      id: 348,
      name: "MS CYD532 - Solid State Materials: Chemistry & Engineering",
    },
    {
      id: 349,
      name: "MS CYD534 - Heterocyclic Chemistry",
    },
    {
      id: 350,
      name: "MS CYD535 - Main Group Chemistry",
    },
    {
      id: 351,
      name: "MS CYD536 - Science of Corrosion & Corrosion Control",
    },
    {
      id: 352,
      name: "MS MCC514 - Functional Analysis",
    },
    {
      id: 353,
      name: "MS MCC515 - Topology",
    },
    {
      id: 354,
      name: "MS MCC516 - Computational Fluid Dynamics",
    },
    {
      id: 355,
      name: "MS MCC517 - Design and Analysis of Algorithms",
    },
    {
      id: 356,
      name: "MS MCC518 - Computational Fluid Dynamics Practical",
    },
    {
      id: 357,
      name: "MS MCC519 - Design and Analysis of Algorithms  Practical",
    },
    {
      id: 358,
      name: "MS MCD514 - Sampling Theory",
    },
    {
      id: 359,
      name: "MS PHC514 - Statistical Mechanics",
    },
    {
      id: 360,
      name: "MS PHC515 - Laser Physics and Technology",
    },
    {
      id: 361,
      name: "MS PHC516 - Nuclear and Particle Physics",
    },
    {
      id: 362,
      name: "MS PHC517 - Computation and Simulation",
    },
    {
      id: 363,
      name: "MS PHC518 - Experimental Physics - V",
    },
    {
      id: 364,
      name: "MS PHD501 - Advanced Quantum Mechanics",
    },
    {
      id: 365,
      name: "MS PHD510 - Quantum Computation and Information",
    },
    {
      id: 366,
      name: "MS CYC501 - Quantum Chemistry",
    },
    {
      id: 367,
      name: "MS CYC502 - Organic Reactions and Stereochemistry",
    },
    {
      id: 368,
      name: "MS CYC503 - Mathematics for Chemists",
    },
    {
      id: 369,
      name: "MS CYC504 - Application of Spectroscopic Methods",
    },
    {
      id: 370,
      name: "MS CYC505 - Coordination Chemistry",
    },
    {
      id: 371,
      name: "MS CYC506 - Inorganic Chemistry lab",
    },
    {
      id: 372,
      name: "MS CYC507 - Organic Chemistry Lab - I",
    },
    {
      id: 373,
      name: "MS PHC501 - Classical Mechanics and Special Theory of Relativity",
    },
    {
      id: 374,
      name: "MS PHC502 - Methods of Mathematical Physics",
    },
    {
      id: 375,
      name: "MS PHC503 - Optics and Optical Instrumentation",
    },
    {
      id: 376,
      name: "MS PHC504 - Electronics",
    },
    {
      id: 377,
      name: "MS PHC505 - Numerical Methods and Computer Programming",
    },
    {
      id: 378,
      name: "MS PHC506 - Experimental Physics - I",
    },
    {
      id: 379,
      name: "MS PHC507 - Experimental Physics - II",
    },
    {
      id: 380,
      name: "MS CYC515 - Molecular Spectroscopy",
    },
    {
      id: 381,
      name: "MS CYC522 - Advanced Techniques in Materials Characterization",
    },
    {
      id: 382,
      name: "MS CYC523 - Numerical Analysis and Methods in Chemistry",
    },
    {
      id: 383,
      name: "MS CYC524 - Advanced Spectroscopic Methods",
    },
    {
      id: 384,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 385,
      name: "MS CEC501 - Numerical Methods in Civil Engineering",
    },
    {
      id: 386,
      name: "MS CEC503 - Mechanics of Deformable Solids",
    },
    {
      id: 387,
      name: "MS CEC504 - Mechanics of Geomaterials",
    },
    {
      id: 388,
      name: "MS CEC512 - Applied Engineering Statistics",
    },
    {
      id: 389,
      name: "MS CEC513 - River Engineering",
    },
    {
      id: 390,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 391,
      name: "MS EEC503 - Numerical Simulation for Electrical Engineering",
    },
    {
      id: 392,
      name: "MS EEC511 - Renewable Energy Sources",
    },
    {
      id: 393,
      name: "MS EEC521 - Battery Management Systems",
    },
    {
      id: 394,
      name: "MS EEC522 - Electromagnetic Compatibility of Power Converters",
    },
    {
      id: 395,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 396,
      name: "MS HSC500 - Research and Technical Communication",
    },
    {
      id: 397,
      name: "MS HSC501 - Research Methodology",
    },
    {
      id: 398,
      name: "MS HSC504 - Social Theory and Sociological Practices",
    },
    {
      id: 399,
      name: "MS HSC508 - Understanding Philosophy",
    },
    {
      id: 400,
      name: "MS HSC509 - Perspectives on Human Behaviour",
    },
    {
      id: 401,
      name: "MS HSI501 - Research Methodology",
    },
    {
      id: 402,
      name: "MS HSC500 - Research and Technical Communication",
    },
    {
      id: 403,
      name: "MS HSC501 - Research Methodology",
    },
    {
      id: 404,
      name: "MS HSC504 - Social Theory and Sociological Practices",
    },
    {
      id: 405,
      name: "MS HSC508 - Understanding Philosophy",
    },
    {
      id: 406,
      name: "MS HSC509 - Perspectives on Human Behaviour",
    },
    {
      id: 407,
      name: "MS HSI501 - Research Methodology",
    },
    {
      id: 408,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 409,
      name: "MS MNC504 - Risk and Workplace Safety Management",
    },
    {
      id: 410,
      name: "MS MNC525 - Remote Sensing and Digital Image Processing",
    },
    {
      id: 411,
      name: "MS MNC535 - Excavation Methods for Tunnels and Caverns",
    },
    {
      id: 412,
      name: "MS MNC539 - Computational Geomechanics and Ground Control",
    },
    {
      id: 413,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 414,
      name: "MS MEC500 - Theory of Elasticity",
    },
    {
      id: 415,
      name: "MS MEC502 - Numerical Methods",
    },
    {
      id: 416,
      name: "MS MEC507 - Incompressible and Compressible Flow",
    },
    {
      id: 417,
      name: "MS MEC516 - Unconventional Manufacturing Processes",
    },
    {
      id: 418,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 419,
      name: "MS MSC502 - Research Methodology and Statistics",
    },
    {
      id: 420,
      name: "MS MSC512 - Operations Management",
    },
    {
      id: 421,
      name: "MS MSC530 - Development Economics",
    },
    {
      id: 422,
      name: "MS MSC531 - Managerial Ethics, Values and CSR",
    },
    {
      id: 423,
      name: "MS MSI502 - Research Methodology and Statistics",
    },
    {
      id: 424,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 425,
      name: "MS MSC502 - Research Methodology and Statistics",
    },
    {
      id: 426,
      name: "MS MSC506 - Managerial Economics",
    },
    {
      id: 427,
      name: "MS MSC530 - Development Economics",
    },
    {
      id: 428,
      name: "MS MSC531 - Managerial Ethics, Values and CSR",
    },
    {
      id: 429,
      name: "MS MSI502 - Research Methodology and Statistics",
    },
    {
      id: 430,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 431,
      name: "MS PHC572 - Theoretical Physics",
    },
    {
      id: 432,
      name: "MS PHC573 - Experimental Physics",
    },
    {
      id: 433,
      name: "MS PHC574 - Numerical Methods and Simulation",
    },
    {
      id: 434,
      name: "MS PHC575 - Physics of Phase Transformation",
    },
    {
      id: 435,
      name: "MS CHC525 - Unit Operations for Pharmaceutics",
    },
    {
      id: 436,
      name: "MS CYC518 - Analytical Chemistry Lab",
    },
    {
      id: 437,
      name: "MS CYC518 - Analytical Chemistry Lab",
    },
    {
      id: 438,
      name: "MS CYC523 - Numerical Analysis and Methods in Chemistry",
    },
    {
      id: 439,
      name: "MS CYC525 - Basic of Pharmacology & Drug Design",
    },
    {
      id: 440,
      name: "MS CYC526 - Pharmaceutical Process Technology",
    },
    {
      id: 441,
      name: "MS CYC527 - Formulation & Drug Delivery Technology",
    },
    {
      id: 442,
      name: "MS CYC528 - Process Chemistry Lab",
    },
    {
      id: 443,
      name: "MS CEC501 - Numerical Methods in Civil Engineering",
    },
    {
      id: 444,
      name: "MS CEC503 - Mechanics of Deformable Solids",
    },
    {
      id: 445,
      name: "MS CEC504 - Mechanics of Geomaterials",
    },
    {
      id: 446,
      name: "MS CEC505 - Engineering Hydrology & Hydraulics",
    },
    {
      id: 447,
      name: "MS CEC506 - Transport System Design & Management",
    },
    {
      id: 448,
      name: "MS CEC507 - Computational Laboratory",
    },
    {
      id: 449,
      name: "MS CEC508 - Civil Engineering Model Development Laboratory",
    },
    {
      id: 450,
      name: "MS EEC502 - Modelling of Electrical Machines",
    },
    {
      id: 451,
      name: "MS EEC504 - Advanced Control System",
    },
    {
      id: 452,
      name: "MS EEC506 - Advanced Electrical Machine Lab",
    },
    {
      id: 453,
      name: "MS EEC507 - Advanced Power System Lab",
    },
    {
      id: 454,
      name: "MS EEC511 - Renewable Energy Sources",
    },
    {
      id: 455,
      name: "MS EEC512 - Soft Computing Techniques",
    },
    {
      id: 456,
      name: "MS EEC518 - Industrial Instrumentation",
    },
    {
      id: 457,
      name: "MS MNC504 - Risk and Workplace Safety Management",
    },
    {
      id: 458,
      name: "MS MNC505 - Geomechanics Practical",
    },
    {
      id: 459,
      name: "MS MNC536 - Computational Subsurface Ventilation and Environment",
    },
    {
      id: 460,
      name: "MS MNC537 - Computational Subsurface Ventilation and Environment Practical",
    },
    {
      id: 461,
      name: "MS MNC538 - Mass Production Mining Technology",
    },
    {
      id: 462,
      name: "MS MNC539 - Computational Geomechanics and Ground Control",
    },
    {
      id: 463,
      name: "MS MNC540 - Mining Equipment Reliability, Maintainability and Availability",
    },
    {
      id: 464,
      name: "MS MEC500 - Theory of Elasticity",
    },
    {
      id: 465,
      name: "MS MEC501 - Mechanical Vibration",
    },
    {
      id: 466,
      name: "MS MEC508 - Advanced Heat Transfer",
    },
    {
      id: 467,
      name: "MS MEC514 - Advances in Machining",
    },
    {
      id: 468,
      name: "MS MEC594 - Basics of Scientific Computing",
    },
    {
      id: 469,
      name: "MS MEC595 - Thermal and Design Lab",
    },
    {
      id: 470,
      name: "MS MEC596 - Manufacturing and Tribology Lab",
    },
    {
      id: 471,
      name: "MS MSC500 - Manufacturing System Engineering",
    },
    {
      id: 472,
      name: "MS MSC503 - Statistical Methods and Applications",
    },
    {
      id: 473,
      name: "MS MSC505 - Stochastic Programming Lab",
    },
    {
      id: 474,
      name: "MS MSC507 - Decision Modelling",
    },
    {
      id: 475,
      name: "MS MSC508 - Business Analytics Lab",
    },
    {
      id: 476,
      name: "MS MSC512 - Operations Management",
    },
    {
      id: 477,
      name: "MS MSC521 - Productivity Management",
    },
    {
      id: 478,
      name: "MS CED401 - Traffic Engineering and Management",
    },
    {
      id: 479,
      name: "MS CED501 - Computational Solid Mechanics",
    },
    {
      id: 480,
      name: "MS CED531 - Advanced Design of Structures",
    },
    {
      id: 481,
      name: "MS CEO301 - Reliability and Risk Assessment",
    },
    {
      id: 482,
      name: "MS CEO401 - Flow and Transport through Porous Media",
    },
    {
      id: 483,
      name: "MS EED401 - Power System Protection and Switchgear",
    },
    {
      id: 484,
      name: "MS EED403 - Industrial Power Electronics",
    },
    {
      id: 485,
      name: "MS EED404 - Reactive Power and Voltage Control",
    },
    {
      id: 486,
      name: "MS EED503 - Digital Control of Power Electronics & Drives",
    },
    {
      id: 487,
      name: "MS EEO403 - Digital Signal Processing",
    },
    {
      id: 488,
      name: "MS EEO404 - Renewable Energy Systems and Energy Audit",
    },
    {
      id: 489,
      name: "MS EEO405 - Industrial Automation",
    },
    {
      id: 490,
      name: "MS MND400 - Rock Excavation Engineering",
    },
    {
      id: 491,
      name: "MS MND401 - Advanced Mine Ventilation",
    },
    {
      id: 492,
      name: "MS MND402 - Open Pit Slope Analysis and Design",
    },
    {
      id: 493,
      name: "MS MND403 - Geospatial Technology in Mining",
    },
    {
      id: 494,
      name: "MS MND404 - Mine System Engineering",
    },
    {
      id: 495,
      name: "MS MND405 - Mine Safety Engineering",
    },
    {
      id: 496,
      name: "MS MND406 - Mine Environmental Engineering",
    },
    {
      id: 497,
      name: "MS MSD506 - Investment Analysis and Portfolio Management",
    },
    {
      id: 498,
      name: "MS MSD513 - Managerial Psychology",
    },
    {
      id: 499,
      name: "MS MED403 - Power Plant",
    },
    {
      id: 500,
      name: "MS MED505 - Fundamental of Classical and Statistical Thermodynamics",
    },
    {
      id: 501,
      name: "MS MED527 - Design of Tribological Components",
    },
    {
      id: 502,
      name: "MS MED540 - Fundamentals of Aeroacoustics",
    },
    {
      id: 503,
      name: "MS MED549 - Cryogenic Engineering",
    },
    {
      id: 504,
      name: "MS MED553 - Laser Processing of Materials",
    },
    {
      id: 505,
      name: "MS MEO534 - Automation and Control",
    },
    {
      id: 506,
      name: "MS MED401 - Energy Conversion Equipment",
    },
    {
      id: 507,
      name: "MS MED503 - Finite Element Method",
    },
    {
      id: 508,
      name: "MS MED529 - Composite Materials",
    },
    {
      id: 509,
      name: "MS MMD505 - Fluid Flow Machines in Mines",
    },
    {
      id: 510,
      name: "MS PHD506 - Characterization Techniques",
    },
    {
      id: 511,
      name: "MS PHD509 - Advanced Condensed Matter Physics",
    },
    {
      id: 512,
      name: "MS PHO302 - Introduction to Astrophysics and Astronomy",
    },
    {
      id: 513,
      name: "MS PHO504 - Optoelectronic Materials and Devices",
    },
    {
      id: 514,
      name: "MS CEC301 - Structural Analysis - II",
    },
    {
      id: 515,
      name: "MS CEC302 - Foundation Engineering",
    },
    {
      id: 516,
      name: "MS CEC303 - Structural Engineering Laboratory",
    },
    {
      id: 517,
      name: "MS CEC304 - Geotechnical Engineering Laboratory",
    },
    {
      id: 518,
      name: "MS CED536 - Water Resources Systems Planning & Management",
    },
    {
      id: 519,
      name: "MS CEO528 - Ground Improvement and Geosynthetics",
    },
    {
      id: 520,
      name: "MS EEC308 - Electrical Machines - II",
    },
    {
      id: 521,
      name: "MS EEC309 - Modern Control",
    },
    {
      id: 522,
      name: "MS EEC310 - Power Electronics",
    },
    {
      id: 523,
      name: "MS EEC375 - Microprocessor and Microcontrollers Lab",
    },
    {
      id: 524,
      name: "MS EEC376 - Electrical Machines and Control Lab",
    },
    {
      id: 525,
      name: "MS EED402 - High Voltage Engineering and Applications",
    },
    {
      id: 526,
      name: "MS HSO301 - Ethical Issues in Science",
    },
    {
      id: 527,
      name: "MS HSO309 - Fundamental of Sociology",
    },
    {
      id: 528,
      name: "MS HSO310 - Psychology of Everyday Life",
    },
    {
      id: 529,
      name: "MS HSO501 - Cognitive Psychology",
    },
    {
      id: 530,
      name: "MS HSO506 - Indian Society and Culture",
    },
    {
      id: 531,
      name: "MS HSO510 - Judgement and Decision Making",
    },
    {
      id: 532,
      name: "MS MNC300 - Surface Mining",
    },
    {
      id: 533,
      name: "MS MNC301 - Mine Planning and Economics",
    },
    {
      id: 534,
      name: "MS MNC302 - Computer Aided Mine Planning and Design",
    },
    {
      id: 535,
      name: "MS MNC303 - Mine Ventilation Practical - II",
    },
    {
      id: 536,
      name: "MS MNO301 - Modern Surveying Techniques",
    },
    {
      id: 537,
      name: "MS MNO303 - Underground Construction Engineering",
    },
    {
      id: 538,
      name: "MS MEC301 - Machine Design",
    },
    {
      id: 539,
      name: "MS MEC302 - Machining and Machine Tools",
    },
    {
      id: 540,
      name: "MS MEC303 - Advanced Solid Mechanics",
    },
    {
      id: 541,
      name: "MS MEC304 - Production Technology Lab",
    },
    {
      id: 542,
      name: "MS MEC305 - Machine Design Lab",
    },
    {
      id: 543,
      name: "MS MED539 - Fundamentals of Aerodynamics",
    },
    {
      id: 544,
      name: "MS MED543 - Solar Energy",
    },
    {
      id: 545,
      name: "MS MEO522 - Condition Monitoring of Machines",
    },
    {
      id: 546,
      name: "MS MED548 - Heat Exchanger Design",
    },
    {
      id: 547,
      name: "MS MEO580 - Measurements in Thermal Engineering",
    },
    {
      id: 548,
      name: "MS MEO583 - Design of Thermal Systems",
    },
    {
      id: 549,
      name: "MS MMC301 - Mineral Beneficiation Equipment",
    },
    {
      id: 550,
      name: "MS MMC302 - Automation and Control in Mining Machineries",
    },
    {
      id: 551,
      name: "MS MMC303 - Mine Electrical Technology Lab",
    },
    {
      id: 552,
      name: "MS MMC304 - Automation and Control Lab",
    },
    {
      id: 553,
      name: "MS MMD512 - Mine Electrical Drives",
    },
    {
      id: 554,
      name: "MS MMO301 - Automobile Engineering",
    },
    {
      id: 555,
      name: "MS PHC300 - Thermal Physics Lab",
    },
    {
      id: 556,
      name: "MS PHC301 - Electronics Lab",
    },
    {
      id: 557,
      name: "MS PHC514 - Statistical Mechanics",
    },
    {
      id: 558,
      name: "MS PHC515 - Laser Physics and Technology",
    },
    {
      id: 559,
      name: "MS PHO300 - Sensors and Transducers",
    },
    {
      id: 560,
      name: "MS CEC201 - Surveying",
    },
    {
      id: 561,
      name: "MS CEC202 - Environmental Engineering",
    },
    {
      id: 562,
      name: "MS CEC203 - Building Materials, Construction and Management",
    },
    {
      id: 563,
      name: "MS CEC204 - Material Testing Laboratory",
    },
    {
      id: 564,
      name: "MS CEC205 - Environmental Engineering Laboratory",
    },
    {
      id: 565,
      name: "MS CEE201 - Mechanics of Solid",
    },
    {
      id: 566,
      name: "MS EEC201 - Signals, Systems and Networks",
    },
    {
      id: 567,
      name: "MS EEC202 - Analog and Digital Electronics",
    },
    {
      id: 568,
      name: "MS EEC203 - Electromagnetic Theory and Applications",
    },
    {
      id: 569,
      name: "MS EEC271 - Networks Lab",
    },
    {
      id: 570,
      name: "MS EEC272 - Analog and Digital Electronics Lab",
    },
    {
      id: 571,
      name: "MS EEE202 - Utilization of Electrical Energy",
    },
    {
      id: 572,
      name: "MS GLE203 - Geology for Engineering and Sciences Practical",
    },
    {
      id: 573,
      name: "MS MNC200 - Elements of Mining",
    },
    {
      id: 574,
      name: "MS MNC201 - Rock Breakage",
    },
    {
      id: 575,
      name: "MS MNC202 - Mine Surveying",
    },
    {
      id: 576,
      name: "MS MNC203 - Mine Surveying Practical",
    },
    {
      id: 577,
      name: "MS MNC204 - Rock Breakage Practical",
    },
    {
      id: 578,
      name: "MS MNE201 - Introduction to Mining",
    },
    {
      id: 579,
      name: "MS MEC201 - Kinematics of Machines",
    },
    {
      id: 580,
      name: "MS MEC202 - Fluid Mechanics",
    },
    {
      id: 581,
      name: "MS MEC203 - Applied Thermodynamics",
    },
    {
      id: 582,
      name: "MS MEC204 - Applied Mechanics Lab",
    },
    {
      id: 583,
      name: "MS MEC205 - Thermodynamics and Fluid Mechanics Lab",
    },
    {
      id: 584,
      name: "MS MEE201 - Engineering Materials",
    },
    {
      id: 585,
      name: "MS MMC201 - Manufacturing Technology",
    },
    {
      id: 586,
      name: "MS MMC202 - Theory of Machines",
    },
    {
      id: 587,
      name: "MS MMC203 - Design of Machine Elements",
    },
    {
      id: 588,
      name: "MS MMC204 - Thermodynamics and Fluid Mechanics Lab",
    },
    {
      id: 589,
      name: "MS MMC205 - Solid Mechanics and Theory of Machines Lab",
    },
    {
      id: 590,
      name: "MS MME202 - Mining Machinery",
    },
    {
      id: 591,
      name: "MS PHC200 - Waves and Acoustics",
    },
    {
      id: 592,
      name: "MS PHC201 - Classical Mechanics",
    },
    {
      id: 593,
      name: "MS PHC202 - Mathematical Physics",
    },
    {
      id: 594,
      name: "MS PHC203 - Mechanics Lab",
    },
    {
      id: 595,
      name: "MS PHC204 - Waves and Acoustics Lab",
    },
    {
      id: 596,
      name: "MS PHE200 - Biomedical Engineering",
    },
    {
      id: 597,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 598,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 599,
      name: "MS HSI500 - Research and Technical Communication",
    },
    {
      id: 600,
      name: "WS CHC206 - Chemical Engineering Thermodynamics",
    },
    {
      id: 601,
      name: "WS CHC207 - Principles of Mass Transfer",
    },
    {
      id: 602,
      name: "WS CHC208 - Chemical Process Technology",
    },
    {
      id: 603,
      name: "WS CHC209 - Process Dynamics and Control",
    },
    {
      id: 604,
      name: "WS CHC210 - Heat Transfer Lab",
    },
    {
      id: 605,
      name: "WS CHC211 - Process Control Lab",
    },
    {
      id: 606,
      name: "WS CHE202 - Transport Phenomena",
    },
    {
      id: 607,
      name: "WS CSC206 - Algorithm Design & Analysis",
    },
    {
      id: 608,
      name: "WS CSC207 - Computer Architecture",
    },
    {
      id: 609,
      name: "WS CSC208 - Theory of Computation",
    },
    {
      id: 610,
      name: "WS CSC209 - Operating Systems",
    },
    {
      id: 611,
      name: "WS CSC210 - Algorithm Design & Analysis Lab",
    },
    {
      id: 612,
      name: "WS CSC211 - Operating Systems Lab",
    },
    {
      id: 613,
      name: "WS CSE202 - Object Oriented Programming",
    },
    {
      id: 614,
      name: "WS CEC206 - Structural Analysis - I",
    },
    {
      id: 615,
      name: "WS CEC207 - Design of Concrete Structures",
    },
    {
      id: 616,
      name: "WS CEC208 - Geotechnical Engineering",
    },
    {
      id: 617,
      name: "WS CEC209 - Transportation Engineering",
    },
    {
      id: 618,
      name: "WS CEC210 - Surveying Laboratory",
    },
    {
      id: 619,
      name: "WS CEC211 - Transportation Engineering Laboratory",
    },
    {
      id: 620,
      name: "WS CEE202 - Fluid Mechanics and Machines",
    },
    {
      id: 621,
      name: "WS ECC206 - Analog Circuits",
    },
    {
      id: 622,
      name: "WS ECC207 - Electromagnetic Theory",
    },
    {
      id: 623,
      name: "WS ECC208 - Control Systems",
    },
    {
      id: 624,
      name: "WS ECC209 - Microprocessors & Microcontrollers",
    },
    {
      id: 625,
      name: "WS ECC210 - Electronic Devices and Circuits Lab",
    },
    {
      id: 626,
      name: "WS ECC211 - Microprocessor & Microcontroller Lab",
    },
    {
      id: 627,
      name: "WS ECE201 - Measurements and Instrumentations",
    },
    {
      id: 628,
      name: "WS EEC204 - Electrical Machines - I",
    },
    {
      id: 629,
      name: "WS EEC205 - Electrical Measurements",
    },
    {
      id: 630,
      name: "WS EEC206 - Control System Engineering",
    },
    {
      id: 631,
      name: "WS EEC207 - Power System Engineering",
    },
    {
      id: 632,
      name: "WS EEC273 - Control and Measurement lab",
    },
    {
      id: 633,
      name: "WS EEC274 - Electrical Machines and Power lab",
    },
    {
      id: 634,
      name: "WS EEE201 - Applied Electrical Engineering",
    },
    {
      id: 635,
      name: "WS ESC204 - Geology and Land use Planning",
    },
    {
      id: 636,
      name: "WS ESC205 - Introduction Ecology and Environmental Microbiology",
    },
    {
      id: 637,
      name: "WS ESC206 - Environmental Policy and Legislation",
    },
    {
      id: 638,
      name: "WS ESC207 - Air Pollution Control",
    },
    {
      id: 639,
      name: "WS ESC253 - Geology  Practical",
    },
    {
      id: 640,
      name: "WS ESC254 - Soil  and Environmental Microbiology Practical",
    },
    {
      id: 641,
      name: "WS ESE202 - Atmospheric  Science and Climate Change",
    },
    {
      id: 642,
      name: "WS FMC204 - Electrochemistry and Corrosion",
    },
    {
      id: 643,
      name: "WS FMC205 - Thermodynamics and Kinetics",
    },
    {
      id: 644,
      name: "WS FMC206 - Phase Transformation and Heat Treatment",
    },
    {
      id: 645,
      name: "WS FMC207 - Fine Particle Processing for Coal and Minerals",
    },
    {
      id: 646,
      name: "WS FMC253 - Fine Particle Processing Laboratory",
    },
    {
      id: 647,
      name: "WS FMC254 - Introduction to Fuel Technology Laboratory",
    },
    {
      id: 648,
      name: "WS FME222 - Introduction to Fuel Technology",
    },
    {
      id: 649,
      name: "WS MNC205 - Rock Mechanics",
    },
    {
      id: 650,
      name: "WS MNC206 - Mine Ventilation",
    },
    {
      id: 651,
      name: "WS MNC207 - Underground Metal Mining",
    },
    {
      id: 652,
      name: "WS MNC208 - Underground Coal Mining",
    },
    {
      id: 653,
      name: "WS MNC209 - Rock Mechanics Practical",
    },
    {
      id: 654,
      name: "WS MNC210 - Mine Ventilation practical - I",
    },
    {
      id: 655,
      name: "WS MNE202 - Introductory Rock Mechanics",
    },
    {
      id: 656,
      name: "WS MEC206 - Fluid Machines",
    },
    {
      id: 657,
      name: "WS MEC207 - Dynamics of Machinery",
    },
    {
      id: 658,
      name: "WS MEC208 - Heat and Mass Transfer",
    },
    {
      id: 659,
      name: "WS MEC209 - Production Technology",
    },
    {
      id: 660,
      name: "WS MEC210 - Heat Transfer and Fluid Machines Lab",
    },
    {
      id: 661,
      name: "WS MEC211 - Machine Dynamics and Solid Modeling Lab",
    },
    {
      id: 662,
      name: "WS MEE202 - Computer Aided Engineering Design",
    },
    {
      id: 663,
      name: "WS MMC206 - Mine Electrical Technology",
    },
    {
      id: 664,
      name: "WS MMC207 - Bulk Material Handling Equipment",
    },
    {
      id: 665,
      name: "WS MMC208 - Design of Mining Equipment Components",
    },
    {
      id: 666,
      name: "WS MMC209 - Hydraulics & Pneumatics",
    },
    {
      id: 667,
      name: "WS MMC210 - Hydraulics & Pneumatics Lab",
    },
    {
      id: 668,
      name: "WS MMC211 - Manufacturing Technology and Soft Computing Lab",
    },
    {
      id: 669,
      name: "WS MME201 - IC Engines",
    },
    {
      id: 670,
      name: "WS PEC206 - Elements of Petroleum Production Engineering",
    },
    {
      id: 671,
      name: "WS PEC207 - Petroleum Formation Evaluation",
    },
    {
      id: 672,
      name: "WS PEC208 - Reservoir Fluid Thermodynamics",
    },
    {
      id: 673,
      name: "WS PEC209 - Petroleum Product Testing Practical",
    },
    {
      id: 674,
      name: "WS PEC210 - Drilling Simulation Practical",
    },
    {
      id: 675,
      name: "WS PEE202 - Petroleum Environmental Management",
    },
    {
      id: 676,
      name: "WS PHC205 - Introduction to Quantum Mechanics",
    },
    {
      id: 677,
      name: "WS PHC206 - Applied Optics",
    },
    {
      id: 678,
      name: "WS PHC207 - Nuclear Science and Engineering",
    },
    {
      id: 679,
      name: "WS PHC208 - Electrodynamics",
    },
    {
      id: 680,
      name: "WS PHC209 - Optics Lab",
    },
    {
      id: 681,
      name: "WS PHC210 - Electricity and Magnetism Lab",
    },
    {
      id: 682,
      name: "WS PHE202 - Material Science and Engineering",
    },
    {
      id: 683,
      name: "WS CHC306 - Chemical Process Equipment Design",
    },
    {
      id: 684,
      name: "WS CHC307 - Process Modelling and Simulation",
    },
    {
      id: 685,
      name: "WS CHC308 - Chemical Process Equipment Design Lab",
    },
    {
      id: 686,
      name: "WS CHC309 - Process Simulation Lab",
    },
    {
      id: 687,
      name: "WS CHD402 - Polymers Science and Engineering",
    },
    {
      id: 688,
      name: "WS CHO301 - Petroleum Refining",
    },
    {
      id: 689,
      name: "WS CHO302 - Industrial Safety and Hazards Management",
    },
    {
      id: 690,
      name: "WS CSC305 - Computer Network",
    },
    {
      id: 691,
      name: "WS CSC306 - Software Engineering",
    },
    {
      id: 692,
      name: "WS CSC307 - Computer Networks Lab",
    },
    {
      id: 693,
      name: "WS CSC308 - Software Engineering Lab",
    },
    {
      id: 694,
      name: "WS CSO302 - Graph Theory",
    },
    {
      id: 695,
      name: "WS CSO304 - Digital Image Processing",
    },
    {
      id: 696,
      name: "WS CSO506 - Principles of Blockchain Technologies",
    },
    {
      id: 697,
      name: "WS CEC305 - Design of Steel Structures",
    },
    {
      id: 698,
      name: "WS CEC306 - Water Resources Engineering",
    },
    {
      id: 699,
      name: "WS CEC307 - Structural Detailing Laboratory",
    },
    {
      id: 700,
      name: "WS CEC308 - Water Resources Engineering Laboratory",
    },
    {
      id: 701,
      name: "WS CEO303 - Construction Management",
    },
    {
      id: 702,
      name: "WS CEO525 - Optimization Methods",
    },
    {
      id: 703,
      name: "WS CEO527 - Bridge Engineering",
    },
    {
      id: 704,
      name: "WS ECC306 - Digital Communication",
    },
    {
      id: 705,
      name: "WS ECC307 - Microwave Engineering",
    },
    {
      id: 706,
      name: "WS ECC308 - Digital Communication Lab",
    },
    {
      id: 707,
      name: "WS ECC309 - Microwave Engineering Lab",
    },
    {
      id: 708,
      name: "WS ECO301 - Microprocessor and its Application",
    },
    {
      id: 709,
      name: "WS ECO302 - Power Electronics",
    },
    {
      id: 710,
      name: "WS ECO402 - Optical Fiber Sensor",
    },
    {
      id: 711,
      name: "WS EEC311 - Power System Analysis and Control",
    },
    {
      id: 712,
      name: "WS EEC312 - Electrical Drives and Applications",
    },
    {
      id: 713,
      name: "WS EEC377 - Power and Switchgear Lab",
    },
    {
      id: 714,
      name: "WS EEC378 - Power Electronics and Drives lab",
    },
    {
      id: 715,
      name: "WS EED505 - Power Electronics for Renewable Energy Systems",
    },
    {
      id: 716,
      name: "WS EEO301 - Microprocessor & Microcontroller",
    },
    {
      id: 717,
      name: "WS EEO302 - Industrial Utilization of Electrical Power",
    },
    {
      id: 718,
      name: "WS ESC311 - Solid Waste Management",
    },
    {
      id: 719,
      name: "WS ESC312 - Geoinformatics",
    },
    {
      id: 720,
      name: "WS ESC357 - Solid Waste Management Practical",
    },
    {
      id: 721,
      name: "WS ESC358 - Geoinformatics Practical",
    },
    {
      id: 722,
      name: "WS ESD404 - Water Resource Planning and Management",
    },
    {
      id: 723,
      name: "WS ESD508 - Social Impact Assessment and R&R",
    },
    {
      id: 724,
      name: "WS ESD513 - Energy Auditing and Management",
    },
    {
      id: 725,
      name: "WS ESO301 - Applied Statistics for Environmental Engineering",
    },
    {
      id: 726,
      name: "WS FMC303 - Mechanical Metallurgy",
    },
    {
      id: 727,
      name: "WS FMC304 - Coal and Mineral Processing Plant Design",
    },
    {
      id: 728,
      name: "WS FMC305 - Coal and Mineral Processing Plant Design Laboratory",
    },
    {
      id: 729,
      name: "WS FMC352 - Heat Treatment and Mechanical Metallurgy Laboratory",
    },
    {
      id: 730,
      name: "WS FMD463 - Non Ferrous Extractive Metallurgy",
    },
    {
      id: 731,
      name: "WS FMD464 - Mineral Policy and Economics",
    },
    {
      id: 732,
      name: "WS FMO431 - Elements of Mineral Engineering",
    },
    {
      id: 733,
      name: "WS HSD512 - Gender Studies",
    },
    {
      id: 734,
      name: "WS HSD533 - Introduction to Yoga Philosophy",
    },
    {
      id: 735,
      name: "WS HSO307 - Philosophy and Critical Thinking",
    },
    {
      id: 736,
      name: "WS HSO308 - Social Psychology",
    },
    {
      id: 737,
      name: "WS HSO320 - Principles of Sociology",
    },
    {
      id: 738,
      name: "WS HSO511 - Brain and Behaviour",
    },
    {
      id: 739,
      name: "WS HSO512 - Experience Psychology",
    },
    {
      id: 740,
      name: "WS HSO514 - Introduction to Climate Change and Society",
    },
    {
      id: 741,
      name: "WS MNC304 - Mine Legislation and Safety",
    },
    {
      id: 742,
      name: "WS MNC305 - Mine Automation and Data Analytics",
    },
    {
      id: 743,
      name: "WS MNC306 - Mine Data Analytics Practical",
    },
    {
      id: 744,
      name: "WS MNC307 - Numerical Modelling/Remote Sensing & GIS Practical",
    },
    {
      id: 745,
      name: "WS MNO302 - Seabed Mining and Asteroid Mining",
    },
    {
      id: 746,
      name: "WS MNO304 - Coal Mine Methane Recovery and Utilization",
    },
    {
      id: 747,
      name: "WS MNO401 - Rock Engineering",
    },
    {
      id: 748,
      name: "WS MEC306 - Computer Aided Manufacturing",
    },
    {
      id: 749,
      name: "WS MEC307 - IC Engines and Gas Turbines",
    },
    {
      id: 750,
      name: "WS MEC308 - Computer Aided Manufacturing Lab",
    },
    {
      id: 751,
      name: "WS MEC309 - Heat Power and Refrigeration Lab",
    },
    {
      id: 752,
      name: "WS MED519 - Engineering Tribology",
    },
    {
      id: 753,
      name: "WS MEO302 - Refrigeration and Air-conditioning",
    },
    {
      id: 754,
      name: "WS MEO586 - Additive Manufacturing",
    },
    {
      id: 755,
      name: "WS MED545 - Turbomachinery",
    },
    {
      id: 756,
      name: "WS MEO581 - Fundamentals of Combustion",
    },
    {
      id: 757,
      name: "WS MEO590 - Advanced Scientific Computing",
    },
    {
      id: 758,
      name: "WS MMC305 - Underground Mining Equipment",
    },
    {
      id: 759,
      name: "WS MMC306 - Opencast Mining Equipment",
    },
    {
      id: 760,
      name: "WS MMC307 - Mining Machinery Lab",
    },
    {
      id: 761,
      name: "WS MMC308 - Pumps Fans & Compressors Lab",
    },
    {
      id: 762,
      name: "WS PEC306 - Directional Drilling",
    },
    {
      id: 763,
      name: "WS PEC307 - Oil and Gas Well Testing",
    },
    {
      id: 764,
      name: "WS PEC308 - Enhanced Oil Recovery Practical",
    },
    {
      id: 765,
      name: "WS PEC309 - Reservoir Characterization Practical",
    },
    {
      id: 766,
      name: "WS PEO301 - Heat and Mass Transfer in Petroleum Operations",
    },
    {
      id: 767,
      name: "WS PEO302 - Oil & Gas Field Development and Planning",
    },
    {
      id: 768,
      name: "WS PEO502 - Flow Assurance",
    },
    {
      id: 769,
      name: "WS PHC302 - Solid State Physics",
    },
    {
      id: 770,
      name: "WS PHC303 - Applied Optics Lab",
    },
    {
      id: 771,
      name: "WS PHC304 - Spectroscopy Lab",
    },
    {
      id: 772,
      name: "WS PHC510 - Atomic and Molecular Physics",
    },
    {
      id: 773,
      name: "WS PHO401 - Introduction to Quantum Devices",
    },
    {
      id: 774,
      name: "WS PHO403 - Energy Storage Technologies",
    },
    {
      id: 775,
      name: "WS CHD404 - Bioprocess Technology",
    },
    {
      id: 776,
      name: "WS CHD411 - Catalytic Reaction Engineering",
    },
    {
      id: 777,
      name: "WS CHD417 - Membrane Science and Engineering",
    },
    {
      id: 778,
      name: "WS CHO403 - Process Intensification",
    },
    {
      id: 779,
      name: "WS CSD401 - Advanced Algorithms",
    },
    {
      id: 780,
      name: "WS CSD403 - Combinatorics and Graph Theory",
    },
    {
      id: 781,
      name: "WS CSD404 - Computer Graphics",
    },
    {
      id: 782,
      name: "WS CSD405 - Evolutionary Computation",
    },
    {
      id: 783,
      name: "WS CSD508 - Distributed Systems",
    },
    {
      id: 784,
      name: "WS CSD510 - Information Retrieval",
    },
    {
      id: 785,
      name: "WS CSD521 - Wireless Networks",
    },
    {
      id: 786,
      name: "WS CSO505 - Soft Computing",
    },
    {
      id: 787,
      name: "WS CED404 - Environmental Engineering - II",
    },
    {
      id: 788,
      name: "WS CED529 - Advanced Foundation Engineering",
    },
    {
      id: 789,
      name: "WS CED542 - Prestressed Concrete Structures",
    },
    {
      id: 790,
      name: "WS CEO526 - Geoinformatics for Civil Engineering",
    },
    {
      id: 791,
      name: "WS ECD404 - Digital Image Processing",
    },
    {
      id: 792,
      name: "WS ECD419 - Satellite Communication",
    },
    {
      id: 793,
      name: "WS ECO500 - Wireless Sensor Networks",
    },
    {
      id: 794,
      name: "WS ECO506 - Machine Learning",
    },
    {
      id: 795,
      name: "WS EED405 - Instrumentation",
    },
    {
      id: 796,
      name: "WS EED406 - Special Purpose Electric Machines and Drives",
    },
    {
      id: 797,
      name: "WS EED511 - Power System Dynamics",
    },
    {
      id: 798,
      name: "WS EED513 - Power Quality",
    },
    {
      id: 799,
      name: "WS EEO504 - Condition Monitoring of Electrical Machines",
    },
    {
      id: 800,
      name: "WS EEO505 - Modern Sensors and Signal Conditioning Circuits",
    },
    {
      id: 801,
      name: "WS ESD402 - Industrial Waste Water Engineering",
    },
    {
      id: 802,
      name: "WS ESD406 - Environmental Nano Technology",
    },
    {
      id: 803,
      name: "WS ESD503 - Environmental Modelling",
    },
    {
      id: 804,
      name: "WS ESO505 - Climate Change and Modelling",
    },
    {
      id: 805,
      name: "WS FMD462 - Process Control and Plant Layout",
    },
    {
      id: 806,
      name: "WS FMD522 - Coal Preparation",
    },
    {
      id: 807,
      name: "WS FMD530 - Biofuels",
    },
    {
      id: 808,
      name: "WS FMD536 - Surface Engineering",
    },
    {
      id: 809,
      name: "WS MND407 - Underground Space Technology",
    },
    {
      id: 810,
      name: "WS MND408 - Innovative Mining Systems",
    },
    {
      id: 811,
      name: "WS MND409 - Introduction to Geographical Information System",
    },
    {
      id: 812,
      name: "WS MND410 - Advanced Blasting Techniques",
    },
    {
      id: 813,
      name: "WS MND411 - Advanced Underground Mining Methods",
    },
    {
      id: 814,
      name: "WS MND412 - Deep Coal Mining",
    },
    {
      id: 815,
      name: "WS MED529 - Composite Materials",
    },
    {
      id: 816,
      name: "WS MED531 - Fracture Mechanics",
    },
    {
      id: 817,
      name: "WS MEO522 - Condition Monitoring of Machines",
    },
    {
      id: 818,
      name: "WS MEO528 - Robotics",
    },
    {
      id: 819,
      name: "WS MED521 - Theory of Lubrication",
    },
    {
      id: 820,
      name: "WS MED541 - Microfluidics",
    },
    {
      id: 821,
      name: "WS MED542 - Finite Element Method in Thermal Engineering",
    },
    {
      id: 822,
      name: "WS MMO504 - Advanced Fluid Power Systems and Control",
    },
    {
      id: 823,
      name: "WS PED404 - Petroleum Engineering Design",
    },
    {
      id: 824,
      name: "WS PED405 - Pipeline Engineering",
    },
    {
      id: 825,
      name: "WS PED406 - Reservoir Modeling and Simulation",
    },
    {
      id: 826,
      name: "WS PED502 - Well Intervention, Workover and Stimulation Techniques",
    },
    {
      id: 827,
      name: "WS PEO405 - Integrated Reservoir Management",
    },
    {
      id: 828,
      name: "WS PEO506 - Carbon Capture And Sequestration",
    },
    {
      id: 829,
      name: "WS PHD503 - High Energy Physics",
    },
    {
      id: 830,
      name: "WS PHD511 - Astrophysics and Cosmology",
    },
    {
      id: 831,
      name: "WS PHD512 - Nonlinear Optics",
    },
    {
      id: 832,
      name: "WS PHD513 - Semiconductor Physics and Technology",
    },
    {
      id: 833,
      name: "WS PHO303 - Physics for Society",
    },
    {
      id: 834,
      name: "WS PHO503 - Physics of Nanomaterials",
    },
    {
      id: 835,
      name: "WS GLC205 - Introduction to Petrology",
    },
    {
      id: 836,
      name: "WS GLC206 - Introduction to Stratigraphy and Paleontology",
    },
    {
      id: 837,
      name: "WS GLC207 - Descriptive Mineralogy",
    },
    {
      id: 838,
      name: "WS GLC208 - Economic Geology and Indian Mineral Deposits",
    },
    {
      id: 839,
      name: "WS GLC209 - Petrology Practical",
    },
    {
      id: 840,
      name: "WS GLC210 - Economic Geology Practical",
    },
    {
      id: 841,
      name: "WS GLE202 - Resource Geology",
    },
    {
      id: 842,
      name: "WS GPC205 - Oceanography",
    },
    {
      id: 843,
      name: "WS GPC206 - Mathematical Geophysics",
    },
    {
      id: 844,
      name: "WS GPC207 - Radiometric Method",
    },
    {
      id: 845,
      name: "WS GPC208 - Radiometric Method Practical",
    },
    {
      id: 846,
      name: "WS GPE201 - Earth and Planetary System",
    },
    {
      id: 847,
      name: "WS MCC205 - Linear Algebra",
    },
    {
      id: 848,
      name: "WS MCC509 - Statistical  Inference",
    },
    {
      id: 849,
      name: "WS MCC510 - Operating Systems",
    },
    {
      id: 850,
      name: "WS MCC512 - Operating Systems Practical",
    },
    {
      id: 851,
      name: "WS MCE301 - Operations Research",
    },
    {
      id: 852,
      name: "WS MCO501 - Discrete Mathematics",
    },
    {
      id: 853,
      name: "WS GLC509 - Igneous Petrology",
    },
    {
      id: 854,
      name: "WS GLC510 - Metamorphic Petrology",
    },
    {
      id: 855,
      name: "WS GLC514 - Igneous and Metamorphic Petrology Practical",
    },
    {
      id: 856,
      name: "WS GLC515 - Sedimentology and Petroleum Geology Practical",
    },
    {
      id: 857,
      name: "WS GLD530 - Geodynamics",
    },
    {
      id: 858,
      name: "WS GLD540 - Geomorphology",
    },
    {
      id: 859,
      name: "WS GPC508 - Earthquake Seismology",
    },
    {
      id: 860,
      name: "WS GPC509 - Geoelectrical Method",
    },
    {
      id: 861,
      name: "WS GPC510 - Well Logging",
    },
    {
      id: 862,
      name: "WS GPC511 - Seismic Data Acquisition",
    },
    {
      id: 863,
      name: "WS GPC512 - Seismic Data Acquisition Practical",
    },
    {
      id: 864,
      name: "WS GPC513 - Geoelectrical Methods Practical",
    },
    {
      id: 865,
      name: "WS GPC515 - Earthquake Seismology and Well Logging Practical",
    },
    {
      id: 866,
      name: "WS GPO503 - Artificial Intelligence and Machine Learning in Geosciences",
    },
    {
      id: 867,
      name: "WS MCC511 - Database Management Systems",
    },
    {
      id: 868,
      name: "WS MCC513 - Database Management Systems Practical",
    },
    {
      id: 869,
      name: "WS MCD501 - Classical Mechanics",
    },
    {
      id: 870,
      name: "WS MCD508 - Theory of Computation",
    },
    {
      id: 871,
      name: "WS MCD511 - Mathematical Ecology",
    },
    {
      id: 872,
      name: "WS MCD560 - Orbital Mechanics",
    },
    {
      id: 873,
      name: "WS GLC513 - Coal Geology",
    },
    {
      id: 874,
      name: "WS GLC516 - Coal Geology Practical",
    },
    {
      id: 875,
      name: "WS GLC526 - Ore Geology",
    },
    {
      id: 876,
      name: "WS GLC533 - Ore Geology Practical",
    },
    {
      id: 877,
      name: "WS GLD528 - Geotechnical Engineering",
    },
    {
      id: 878,
      name: "WS GLD571 - Petroleum Exploration and Micropalaeontology",
    },
    {
      id: 879,
      name: "WS GLO545 - Radiogenic and Stable Isotope Geology",
    },
    {
      id: 880,
      name: "WS GPC520 - Magnetic Method",
    },
    {
      id: 881,
      name: "WS GPC521 - Geoelectromagnetic Method",
    },
    {
      id: 882,
      name: "WS GPC522 - Magnetic Method Practical",
    },
    {
      id: 883,
      name: "WS GPC523 - Geoelectromagnetic Method Practical",
    },
    {
      id: 884,
      name: "WS GPD507 - Geophysics for Mineral Exploration",
    },
    {
      id: 885,
      name: "WS GPD508 - Seismological Data Analysis",
    },
    {
      id: 886,
      name: "WS MCC401 - Software Engineering",
    },
    {
      id: 887,
      name: "WS MCC402 - Software Engineering Practical",
    },
    {
      id: 888,
      name: "WS MCD502 - Graph Theory",
    },
    {
      id: 889,
      name: "WS MCD510 - Complex Analysis",
    },
    {
      id: 890,
      name: "WS MCD516 - Industrial Statistics",
    },
    {
      id: 891,
      name: "WS MCO402 - Modelling and Simulation",
    },
    {
      id: 892,
      name: "WS  - ",
    },
    {
      id: 893,
      name: "WS GPC537 - Remote Sensing: Principles and Data Acquisition System",
    },
    {
      id: 894,
      name: "WS GPC538 - Advanced Numerical Methods",
    },
    {
      id: 895,
      name: "WS GPC539 - Remote Sensing: Principles and Data Acquisition System Practical",
    },
    {
      id: 896,
      name: "WS GPC540 - Advanced Numerical Methods Practical",
    },
    {
      id: 897,
      name: "WS GPD520 - Earthquake Statistics and Hazard",
    },
    {
      id: 898,
      name: "WS CHC530 - Reaction Engineering",
    },
    {
      id: 899,
      name: "WS CHC531 - Chemical Engineering Lab",
    },
    {
      id: 900,
      name: "WS CYC529 - Formulation/Manufacturing Lab",
    },
    {
      id: 901,
      name: "WS CYD524 - Basics of Chemical Biology",
    },
    {
      id: 902,
      name: "WS CYD529 - Computer Aided Drug Discovery",
    },
    {
      id: 903,
      name: "WS CYD530 - Pharmacovigilance and Regulatory Affairs",
    },
    {
      id: 904,
      name: "WS CYD531 - Biotechnology in Pharmaceutical Sciences",
    },
    {
      id: 905,
      name: "WS CHC508 - Advanced Mass transfer",
    },
    {
      id: 906,
      name: "WS CHC509 - Computational Fluid Dynamics",
    },
    {
      id: 907,
      name: "WS CHC510 - Advanced Chemical Engineering Lab",
    },
    {
      id: 908,
      name: "WS CHC511 - Term Paper and Presentation",
    },
    {
      id: 909,
      name: "WS CHD504 - Process Optimization",
    },
    {
      id: 910,
      name: "WS CHD505 - Interfacial and Colloidal Phenomena",
    },
    {
      id: 911,
      name: "WS CHO501 - Rheology",
    },
    {
      id: 912,
      name: "WS CHO503 - Introduction to Granular Mechanics",
    },
    {
      id: 913,
      name: "WS CSC508 - Computing Lab - I",
    },
    {
      id: 914,
      name: "WS CSC509 - Computing Lab - II",
    },
    {
      id: 915,
      name: "WS CSD505 - Cryptography and Network Security",
    },
    {
      id: 916,
      name: "WS CSD509 - Image and Video Processing",
    },
    {
      id: 917,
      name: "WS CSD513 - Internet of Things",
    },
    {
      id: 918,
      name: "WS CSD516 - Optimization Techniques",
    },
    {
      id: 919,
      name: "WS CSD517 - Parallel Computing",
    },
    {
      id: 920,
      name: "WS CSO501 - Principles of Artificial Intelligence",
    },
    {
      id: 921,
      name: "WS CSO503 - Data Mining",
    },
    {
      id: 922,
      name: "WS CSO507 - Deep Learning",
    },
    {
      id: 923,
      name: "WS CSO508 - Building Software Systems",
    },
    {
      id: 924,
      name: "WS CEC509 - Advanced Testing Laboratory",
    },
    {
      id: 925,
      name: "WS CEC510 - Term Project",
    },
    {
      id: 926,
      name: "WS CED528 - Structural Dynamics",
    },
    {
      id: 927,
      name: "WS CED530 - Hydrogeology and Well Hydraulics",
    },
    {
      id: 928,
      name: "WS CED532 - Slope and Retaining Structure",
    },
    {
      id: 929,
      name: "WS CED533 - Hydroclimatology",
    },
    {
      id: 930,
      name: "WS CED534 - Theory of Elastic Stability",
    },
    {
      id: 931,
      name: "WS CED535 - Soil Dynamics",
    },
    {
      id: 932,
      name: "WS CED537 - Earthquake Engineering",
    },
    {
      id: 933,
      name: "WS CEO524 - Finite Element Method",
    },
    {
      id: 934,
      name: "WS CEO531 - Railway Geotechnics",
    },
    {
      id: 935,
      name: "WS ECC507 - Electronics Engineering - I Lab",
    },
    {
      id: 936,
      name: "WS ECC508 - Electronics Engineering - II Lab",
    },
    {
      id: 937,
      name: "WS ECD500 - Advanced Signal Processing",
    },
    {
      id: 938,
      name: "WS ECD501 - Metamaterials and CRLH Transmission Lines",
    },
    {
      id: 939,
      name: "WS ECD503 - Wireless Communication Systems",
    },
    {
      id: 940,
      name: "WS ECD504 - Computer Communication Networks",
    },
    {
      id: 941,
      name: "WS ECD505 - CAD for VLSI",
    },
    {
      id: 942,
      name: "WS ECD514 - Photonic Sensors",
    },
    {
      id: 943,
      name: "WS ECD520 - Optoelectronic and Photonics Devices",
    },
    {
      id: 944,
      name: "WS ECD531 - Photonic Integrated Circuits",
    },
    {
      id: 945,
      name: "WS ECD540 - Advanced Antenna Theory",
    },
    {
      id: 946,
      name: "WS ECD541 - Microwave Measurements",
    },
    {
      id: 947,
      name: "WS ECD560 - Analog IC Design",
    },
    {
      id: 948,
      name: "WS ECD569 - MOS Device Physics and Modelling",
    },
    {
      id: 949,
      name: "WS ECO520 - Optical Networks",
    },
    {
      id: 950,
      name: "WS ECO560 - Test and Verification of VLSI Circuits",
    },
    {
      id: 951,
      name: "WS EEC501 - Power System Analysis",
    },
    {
      id: 952,
      name: "WS EEC508 - Power Electronic Converters",
    },
    {
      id: 953,
      name: "WS EEC513 - Advanced power System Simulation Lab",
    },
    {
      id: 954,
      name: "WS EEC514 - Advanced Power System Protection Lab",
    },
    {
      id: 955,
      name: "WS EED504 - Wireless Power Transfer",
    },
    {
      id: 956,
      name: "WS EEO501 - Smart Grid Technology",
    },
    {
      id: 957,
      name: "WS EEO503 - Electric & Hybrid Electric Vehicles",
    },
    {
      id: 958,
      name: "WS ESC506 - Environmental Laws and Impact Assessment",
    },
    {
      id: 959,
      name: "WS ESC507 - Municipal Solid Waste Management",
    },
    {
      id: 960,
      name: "WS ESC523 - Water and Wastewater Engineering Practical",
    },
    {
      id: 961,
      name: "WS ESC524 - Soil and Microbiology Practical",
    },
    {
      id: 962,
      name: "WS ESD505 - Advanced Water and Wastewater Treatment",
    },
    {
      id: 963,
      name: "WS ESD512 - Groundwater Contaminant Transport",
    },
    {
      id: 964,
      name: "WS ESO501 - Environmental Management System and Auditing",
    },
    {
      id: 965,
      name: "WS ESO502 - Environmental Aspects of Industries",
    },
    {
      id: 966,
      name: "WS FMC553 - Fuel Technology Laboratory",
    },
    {
      id: 967,
      name: "WS FMC556 - Materials Characterization Laboratory",
    },
    {
      id: 968,
      name: "WS FMD525 - Iron and Steel Making",
    },
    {
      id: 969,
      name: "WS FMD528 - Power Plant Engineering",
    },
    {
      id: 970,
      name: "WS FMD531 - Alternate Energy Systems",
    },
    {
      id: 971,
      name: "WS FMD540 - Size Enlargement Processes",
    },
    {
      id: 972,
      name: "WS FMD541 - Processing Equipment Selection",
    },
    {
      id: 973,
      name: "WS MCC539 - Advanced DBMS",
    },
    {
      id: 974,
      name: "WS MCC540 - Neural Networks and Deep Learning",
    },
    {
      id: 975,
      name: "WS MCC541 - Advanced DBMS Practical",
    },
    {
      id: 976,
      name: "WS MCC542 - Neural Networks and Deep Learning Practical",
    },
    {
      id: 977,
      name: "WS MCD543 - Missing Data Analysis in Survey Sampling",
    },
    {
      id: 978,
      name: "WS MCO531 - Stochastic Processes",
    },
    {
      id: 979,
      name: "WS MCO532 - Advanced Multivariate Analysis",
    },
    {
      id: 980,
      name: "WS MNC503 - Mine Planning and Design",
    },
    {
      id: 981,
      name: "WS MNC506 - Computer Aided Mine Planning and Design Practical",
    },
    {
      id: 982,
      name: "WS MNC508 - Geostatistics and Mine Valuation",
    },
    {
      id: 983,
      name: "WS MNC509 - Mine Simulation and Data analytics Practical",
    },
    {
      id: 984,
      name: "WS MND500 - Managerial Decision Making",
    },
    {
      id: 985,
      name: "WS MND556 - Computational Geomechanics",
    },
    {
      id: 986,
      name: "WS MNO501 - Mining, Energy and Climate Change",
    },
    {
      id: 987,
      name: "WS MNO510 - Rock Excavation Technology",
    },
    {
      id: 988,
      name: "WS MEC509 - Mechanical Engineering Lab - I",
    },
    {
      id: 989,
      name: "WS MEC510 - Mechanical Engineering Lab - II",
    },
    {
      id: 990,
      name: "WS MED513 - Thermo-Production Processes",
    },
    {
      id: 991,
      name: "WS MED525 - Rotor Dynamics",
    },
    {
      id: 992,
      name: "WS MED538 - Gas Dynamics",
    },
    {
      id: 993,
      name: "WS MED546 - Conduction and Radiation",
    },
    {
      id: 994,
      name: "WS MED547 - Convective and Two-phase Flow",
    },
    {
      id: 995,
      name: "WS MED554 - Surface Engineering",
    },
    {
      id: 996,
      name: "WS MED555 - Computer Aided Manufacturing and Robotics",
    },
    {
      id: 997,
      name: "WS MEO579 - Computational Fluid Dynamics",
    },
    {
      id: 998,
      name: "WS MSC515 - Software Lab",
    },
    {
      id: 999,
      name: "WS MSC517 - Simulation Modelling & Analysis Lab",
    },
    {
      id: 1000,
      name: "WS MSC519 - Project Management",
    },
    {
      id: 1001,
      name: "WS MSC520 - Quality Management",
    },
    {
      id: 1002,
      name: "WS MSC527 - Machine Learning",
    },
    {
      id: 1003,
      name: "WS MSD512 - Service Operations Management",
    },
    {
      id: 1004,
      name: "WS MSD526 - Supply Chain Management",
    },
    {
      id: 1005,
      name: "WS PEC508 - Petroleum Geomechanics and Hydraulic Fracturing",
    },
    {
      id: 1006,
      name: "WS PEC509 - Advanced Drilling Technology",
    },
    {
      id: 1007,
      name: "WS PEC510 - Petroleum Instrumentation and Measurements Practical",
    },
    {
      id: 1008,
      name: "WS PEC511 - Development of Working Models Practical",
    },
    {
      id: 1009,
      name: "WS PED501 - Reservoir Simulation",
    },
    {
      id: 1010,
      name: "WS PEO501 - Fluid Flow through Porous Media",
    },
    {
      id: 1011,
      name: "WS PEO503 - Unconventional Hydrocarbon Resources",
    },
    {
      id: 1012,
      name: "WS CYC508 - Kinetics and Thermodynamics",
    },
    {
      id: 1013,
      name: "WS CYC509 - Methods in Organic Synthesis",
    },
    {
      id: 1014,
      name: "WS CYC510 - Organometallic Chemistry",
    },
    {
      id: 1015,
      name: "WS CYC511 - Group Theory & Electronic Spectroscopy",
    },
    {
      id: 1016,
      name: "WS CYC512 - Physical Chemistry Lab - I",
    },
    {
      id: 1017,
      name: "WS CYC513 - Organic Chemistry Lab - II",
    },
    {
      id: 1018,
      name: "WS CYD513 - Electroanalytical Methods",
    },
    {
      id: 1019,
      name: "WS CYO503 - Rechargeable Battery Science and Technology",
    },
    {
      id: 1020,
      name: "WS MCC508 - Advanced Algebra",
    },
    {
      id: 1021,
      name: "WS MCC509 - Statistical  Inference",
    },
    {
      id: 1022,
      name: "WS MCC510 - Operating Systems",
    },
    {
      id: 1023,
      name: "WS MCC511 - Database Management Systems",
    },
    {
      id: 1024,
      name: "WS MCC512 - Operating Systems Practical",
    },
    {
      id: 1025,
      name: "WS MCC513 - Database Management Systems Practical",
    },
    {
      id: 1026,
      name: "WS MCD504 - Measure Theory",
    },
    {
      id: 1027,
      name: "WS PHC508 - Quantum Mechanics",
    },
    {
      id: 1028,
      name: "WS PHC509 - Electrodynamics and Radiation theory",
    },
    {
      id: 1029,
      name: "WS PHC510 - Atomic and Molecular Physics",
    },
    {
      id: 1030,
      name: "WS PHC511 - Condensed Matter Physics",
    },
    {
      id: 1031,
      name: "WS PHC512 - Experimental Physics - III",
    },
    {
      id: 1032,
      name: "WS PHC513 - Experimental Physics - IV",
    },
    {
      id: 1033,
      name: "WS PHD502 - Computational Physics",
    },
    {
      id: 1034,
      name: "WS  - ",
    },
    {
      id: 1035,
      name: "WS MSD514 - Financial Econometrics",
    },
    {
      id: 1036,
      name: "WS MSD515 - Services Marketing",
    },
    {
      id: 1037,
      name: "WS MSD521 - Consumer Behaviour",
    },
    {
      id: 1038,
      name: "WS MSC510 - Corporate Finance",
    },
    {
      id: 1039,
      name: "WS MSC511 - Organizational Behaviour",
    },
    {
      id: 1040,
      name: "WS MSC512 - Operations Management",
    },
    {
      id: 1041,
      name: "WS MSC513 - Marketing Management",
    },
    {
      id: 1042,
      name: "WS MSC514 - Human Resources Management",
    },
    {
      id: 1043,
      name: "WS MSC515 - Software Lab",
    },
    {
      id: 1044,
      name: "WS MSC517 - Simulation Modelling & Analysis Lab",
    },
    {
      id: 1045,
      name: "WS MCC539 - Advanced DBMS",
    },
    {
      id: 1046,
      name: "WS MCC541 - Advanced DBMS Practical",
    },
    {
      id: 1047,
      name: "WS MCO531 - Stochastic Processes",
    },
    {
      id: 1048,
      name: "WS MSC510 - Corporate Finance",
    },
    {
      id: 1049,
      name: "WS MSC524 - Marketing Management",
    },
    {
      id: 1050,
      name: "WS MSC525 - Human Resources Management",
    },
    {
      id: 1051,
      name: "WS MSC527 - Machine Learning",
    },
    {
      id: 1052,
      name: "WS MSC528 - Machine Learning Lab",
    },
    {
      id: 1053,
      name: "WS  - ",
    },
    {
      id: 1054,
      name: "WS MSC529 - Big Data Lab",
    },
    {
      id: 1055,
      name: "WS MSD514 - Financial Econometrics",
    },
    {
      id: 1056,
      name: "WS MSD519 - International Finance",
    },
    {
      id: 1057,
      name: "WS MSD520 - Merchant Banking and Financial Services",
    },
    {
      id: 1058,
      name: "WS MSD524 - International Human Resource Management",
    },
    {
      id: 1059,
      name: "WS MSD537 - HR Analytics",
    },
    {
      id: 1060,
      name: "WS GLC509 - Igneous Petrology",
    },
    {
      id: 1061,
      name: "WS GLC510 - Metamorphic Petrology",
    },
    {
      id: 1062,
      name: "WS GLC511 - Applied Sedimentology",
    },
    {
      id: 1063,
      name: "WS GLC512 - Petroleum Geology",
    },
    {
      id: 1064,
      name: "WS GLC513 - Coal Geology",
    },
    {
      id: 1065,
      name: "WS GLC514 - Igneous and Metamorphic Petrology Practical",
    },
    {
      id: 1066,
      name: "WS GLC515 - Sedimentology and Petroleum Geology Practical",
    },
    {
      id: 1067,
      name: "WS GLC516 - Coal Geology Practical",
    },
    {
      id: 1068,
      name: "WS GPC508 - Earthquake Seismology",
    },
    {
      id: 1069,
      name: "WS GPC509 - Geoelectrical Method",
    },
    {
      id: 1070,
      name: "WS GPC510 - Well Logging",
    },
    {
      id: 1071,
      name: "WS GPC511 - Seismic Data Acquisition",
    },
    {
      id: 1072,
      name: "WS GPC512 - Seismic Data Acquisition Practical",
    },
    {
      id: 1073,
      name: "WS GPC513 - Geoelectrical Methods Practical",
    },
    {
      id: 1074,
      name: "WS GPC515 - Earthquake Seismology and Well Logging Practical",
    },
    {
      id: 1075,
      name: "WS GLC526 - Ore Geology",
    },
    {
      id: 1076,
      name: "WS GLC527 - Exploration Geology and Mineral Economics",
    },
    {
      id: 1077,
      name: "WS GLC533 - Ore Geology Practical",
    },
    {
      id: 1078,
      name: "WS GLC534 - Exploration Geology Practical",
    },
    {
      id: 1079,
      name: "WS GLD531 - Sequence Stratigraphy and Basin Analysis",
    },
    {
      id: 1080,
      name: "WS GLD544 - Kinematics of Rock Deformation",
    },
    {
      id: 1081,
      name: "WS GLO542 - Remote Sensing and GIS",
    },
    {
      id: 1082,
      name: "WS GPC520 - Magnetic Method",
    },
    {
      id: 1083,
      name: "WS GPC521 - Geoelectromagnetic Method",
    },
    {
      id: 1084,
      name: "WS GPC522 - Magnetic Method Practical",
    },
    {
      id: 1085,
      name: "WS GPC523 - Geoelectromagnetic Method Practical",
    },
    {
      id: 1086,
      name: "WS GPD509 - Well Log and Electrofacies Analysis",
    },
    {
      id: 1087,
      name: "WS GPD510 - Reservoir Geophysics and Deep Water Imaging",
    },
    {
      id: 1088,
      name: "WS GPO510 - Strong Motion Seismology and Structural Responses",
    },
    {
      id: 1089,
      name: "WS CYP003 - Chemistry - II",
    },
    {
      id: 1090,
      name: "WS CYP004 - Chemistry Lab - II",
    },
    {
      id: 1091,
      name: "WS HSP002 - English - II",
    },
    {
      id: 1092,
      name: "WS MCP002 - Mathematics - II",
    },
    {
      id: 1093,
      name: "WS PHP003 - Physics - II",
    },
    {
      id: 1094,
      name: "WS PHP004 - Physics Lab - II",
    },
    {
      id: 1095,
      name: "WS GPD521 - Time Series Analysis in Geosciences",
    },
    {
      id: 1096,
      name: "WS CYD518 - Metalloenzymes-Special Topics",
    },
    {
      id: 1097,
      name: "WS CYD528 - Modern Separation Techniques",
    },
    {
      id: 1098,
      name: "WS CHD503 - Catalysts & Materials Characterization Techniques",
    },
    {
      id: 1099,
      name: "WS CHD507 - Modelling & Simulation",
    },
    {
      id: 1100,
      name: "WS CHO504 - Electrochemical Energy Science and Engineering",
    },
    {
      id: 1101,
      name: "WS CSD503 - Computational Number Theory",
    },
    {
      id: 1102,
      name: "WS CSD518 - Pattern Recognition",
    },
    {
      id: 1103,
      name: "WS CSO502 - Data Analytics",
    },
    {
      id: 1104,
      name: "WS CEO529 - Blast Protection of Structures",
    },
    {
      id: 1105,
      name: "WS CEO530 - Sustainable Engineering",
    },
    {
      id: 1106,
      name: "WS ECD510 - Quantum Computation",
    },
    {
      id: 1107,
      name: "WS ECD561 - ASIC Design",
    },
    {
      id: 1108,
      name: "WS ECO542 - Advanced Microwave Measurement & Instrument",
    },
    {
      id: 1109,
      name: "WS EED501 - Design of Power Converters",
    },
    {
      id: 1110,
      name: "WS EED502 - Advanced Machine Drives",
    },
    {
      id: 1111,
      name: "WS ESD506 - Biomedical and Hazardous Waste Management",
    },
    {
      id: 1112,
      name: "WS ESD509 - Air and Noise Pollution Control",
    },
    {
      id: 1113,
      name: "WS FMD534 - Metal Forming Technology",
    },
    {
      id: 1114,
      name: "WS FMO541 - Characterization of Materials",
    },
    {
      id: 1115,
      name: "WS MCD540 - Biostatistics",
    },
    {
      id: 1116,
      name: "WS MCO533 - Numerical Linear Algebra",
    },
    {
      id: 1117,
      name: "WS MND504 - Modelling and Analysis of Geospatial data",
    },
    {
      id: 1118,
      name: "WS MND505 - Geospatial Technologies for Natural Resources",
    },
    {
      id: 1119,
      name: "WS MND511 - Modern Blasting Technology in Mining",
    },
    {
      id: 1120,
      name: "WS MND547 - Mine Automation",
    },
    {
      id: 1121,
      name: "WS MED503 - Finite Element Method",
    },
    {
      id: 1122,
      name: "WS MED509 - Advanced Thermodynamics",
    },
    {
      id: 1123,
      name: "WS MED515 - Theory of Metal Forming",
    },
    {
      id: 1124,
      name: "WS MEO534 - Automation and Control",
    },
    {
      id: 1125,
      name: "WS MSD505 - Materials Management",
    },
    {
      id: 1126,
      name: "WS MSD525 - Operations Analytics",
    },
    {
      id: 1127,
      name: "WS PED503 - Enhanced Oil and Gas Recovery Methods",
    },
    {
      id: 1128,
      name: "WS PED504 - Profile Modification & Water Shutoff",
    },
    {
      id: 1129,
      name: "WS CYD501 - Medicinal Chemistry",
    },
    {
      id: 1130,
      name: "WS CYD502 - Polymer Chemistry",
    },
    {
      id: 1131,
      name: "WS CYD505 - Asymmetric Synthesis",
    },
    {
      id: 1132,
      name: "WS CYD506 - Computational Chemistry",
    },
    {
      id: 1133,
      name: "WS CYD512 - Modern Aspects of Catalysis and Surface Science",
    },
    {
      id: 1134,
      name: "WS CYD520 - Advanced Fluorescence Spectroscopy",
    },
    {
      id: 1135,
      name: "WS MCD503 - Integral Equations and Calculus of Variations",
    },
    {
      id: 1136,
      name: "WS MCD513 - Methods of Applied Mathematics",
    },
    {
      id: 1137,
      name: "WS PHD507 - Plasma and Space Physics",
    },
    {
      id: 1138,
      name: "WS PHO502 - Introduction to Biophysics",
    },
    {
      id: 1139,
      name: "WS GLD575 - Modern Instrumental Methods in Exploration Geosciences",
    },
    {
      id: 1140,
      name: "WS GLO501 - Image Processing and Data Analysis",
    },
    {
      id: 1141,
      name: "WS GPD522 - Computational Seismology",
    },
    {
      id: 1142,
      name: "WS GPO511 - Satellite Image Processing and Geographic Information System",
    },
    {
      id: 1143,
      name: "WS  - ",
    },
    {
      id: 1144,
      name: "WS GLD551 - Elements of Rock Engineering",
    },
    {
      id: 1145,
      name: "WS  - ",
    },
    {
      id: 1146,
      name: "WS GPD505 - Near Surface Geophysics and Geotechnical Modelling",
    },
    {
      id: 1147,
      name: "WS MCD532 - Data Mining",
    },
    {
      id: 1148,
      name: "WS MCD535 - Bioinformatics",
    },
    {
      id: 1149,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1150,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1151,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1152,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1153,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1154,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1155,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1156,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1157,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1158,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1159,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1160,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1161,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1162,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1163,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1164,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1165,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1166,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1167,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1168,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1169,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1170,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1171,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1172,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1173,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1174,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1175,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1176,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1177,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1178,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1179,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1180,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1181,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1182,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1183,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1184,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1185,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1186,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1187,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1188,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1189,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1190,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1191,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1192,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1193,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1194,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1195,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1196,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1197,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1198,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1199,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1200,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1201,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1202,
      name: "WS CEI101 - Engineering Graphics",
    },
    {
      id: 1203,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1204,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1205,
      name: "WS MEI101 - Engineering Mechanics",
    },
    {
      id: 1206,
      name: "WS MSI101 - Engineering Economics and Finance",
    },
    {
      id: 1207,
      name: "WS PHI101 - Physics",
    },
    {
      id: 1208,
      name: "WS PHI102 - Physics Lab",
    },
    {
      id: 1209,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1210,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1211,
      name: "WS GLI101 - Earth Sciences",
    },
    {
      id: 1212,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1213,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1214,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1215,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1216,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1217,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1218,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1219,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1220,
      name: "WS ESI101 - Environmental Sciences",
    },
    {
      id: 1221,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1222,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1223,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1224,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1225,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1226,
      name: "WS GLI101 - Earth Sciences",
    },
    {
      id: 1227,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1228,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1229,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1230,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1231,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1232,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1233,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1234,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1235,
      name: "WS ESI101 - Environmental Sciences",
    },
    {
      id: 1236,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1237,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1238,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1239,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1240,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1241,
      name: "WS GLI101 - Earth Sciences",
    },
    {
      id: 1242,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1243,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1244,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1245,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1246,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1247,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1248,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1249,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1250,
      name: "WS ESI101 - Environmental Sciences",
    },
    {
      id: 1251,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1252,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1253,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1254,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1255,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1256,
      name: "WS GLI101 - Earth Sciences",
    },
    {
      id: 1257,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1258,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1259,
      name: "WS MCI103 - Numerical Methods",
    },
    {
      id: 1260,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1261,
      name: "WS CSI101 - Computer Programming",
    },
    {
      id: 1262,
      name: "WS CSI102 - Computer Programming Lab",
    },
    {
      id: 1263,
      name: "WS CYI101 - Chemistry",
    },
    {
      id: 1264,
      name: "WS CYI102 - Chemistry Lab",
    },
    {
      id: 1265,
      name: "WS ESI101 - Environmental Sciences",
    },
    {
      id: 1266,
      name: "WS HSI101 - Communication Skills",
    },
    {
      id: 1267,
      name: "WS MCI102 - Mathematics - II",
    },
    {
      id: 1268,
      name: "WS MEI102 - Manufacturing Processes",
    },
    {
      id: 1269,
      name: "WS GLC591 - Research Methodology",
    },
    {
      id: 1270,
      name: "WS GLD501 - Essentials of Mineral Geostatistics",
    },
    {
      id: 1271,
      name: "WS GPC555 - Research Methodology and Statistics",
    },
    {
      id: 1272,
      name: "WS CYC540 - Research Methodology and Statistics",
    },
    {
      id: 1273,
      name: "WS CHC518 - Research Methodology",
    },
    {
      id: 1274,
      name: "WS CSC516 - Research Methodology",
    },
    {
      id: 1275,
      name: "WS CEC502 - Research Methodology and Statistics",
    },
    {
      id: 1276,
      name: "WS ECC581 - Research Methodology",
    },
    {
      id: 1277,
      name: "WS EEC550 - Research Methodology and Statistics for Electrical Engineering",
    },
    {
      id: 1278,
      name: "WS ESC526 - Research Methodology",
    },
    {
      id: 1279,
      name: "WS HSD507 - Introduction to Drama, Theatre and Performance Studies",
    },
    {
      id: 1280,
      name: "WS HSD521 - Vedanta Philosophy",
    },
    {
      id: 1281,
      name: "WS HSD551 - Psychological Data Science",
    },
    {
      id: 1282,
      name: "WS MCC500 - Research Methodology",
    },
    {
      id: 1283,
      name: "WS MCC500 - Research Methodology",
    },
    {
      id: 1284,
      name: "WS MEC591 - Research Methodology and Statistics",
    },
    {
      id: 1285,
      name: "WS PHC571 - Research Methodology and Statistics",
    },
    {
      id: 1286,
      name: "WS HSC507 - Textual Analysis",
    },
    {
      id: 1287,
      name: "WS HSC516 - Quantitative Techniques Lab",
    },
    {
      id: 1288,
      name: "WS HSC520 - Introduction to Digital Humanities",
    },
    {
      id: 1289,
      name: "WS HSC521 - Data Science Fundamentals",
    },
    {
      id: 1290,
      name: "WS HSC527 - Digital Ethics",
    },
    {
      id: 1291,
      name: "WS HSC532 - Social Research Lab",
    },
    {
      id: 1292,
      name: "WS HSD554 - Mixed Method Research",
    },
    {
      id: 1293,
      name: "WS HSO508 - Digital Society",
    },
    {
      id: 1294,
      name: "WS HSO513 - Environment, Development and Politics",
    },
  ];
  
  export default courses;