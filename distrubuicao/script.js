const ELEMENTS = [
    {
        nome: "Hidrogênio",
        simbolo: "H",
        periodo: "1° Período",
        familia: "",
        caracteristica: "Não metal",
        numero: 1,
        massa: 1.008,
    },
    {
        nome: "Hélio",
        simbolo: "He",
        periodo: "1° Período",
        familia: "8A",
        caracteristica: "Gás nobre",
        numero: 2,
        massa: 4.003,
    },
    {
        nome: "Lítio",
        simbolo: "Li",
        periodo: "2° Período",
        familia: "1A",
        caracteristica: "Metal Alcalino",
        numero: 3,
        massa: 6.941,
    },
    {
        nome: "Berílio",
        simbolo: "Be",
        periodo: "2° Período",
        familia: "2A",
        caracteristica: "Metal alcalino-terroso",
        numero: 4,
        massa: 9.012,
    },
    {
        nome: "Boro",
        simbolo: "B",
        periodo: "2° Período",
        familia: "3A",
        caracteristica: "Semimetal",
        numero: 5,
        massa: 10.811,
    },
    {
        nome: "Carbono",
        simbolo: "C",
        periodo: "2° Período",
        familia: "4A",
        caracteristica: "Não metal",
        numero: 6,
        massa: 12.011,
    },
    {
        nome: "Nitrogênio",
        simbolo: "N",
        periodo: "2° Período",
        familia: "5A",
        caracteristica: "Não metal",
        numero: 7,
        massa: 14.007,
    },
    {
        nome: "Oxigênio",
        simbolo: "O",
        periodo: "2° Período",
        familia: "6A",
        caracteristica: "Não metal",
        numero: 8,
        massa: 15.999,
    },
    {
        nome: "Flúor",
        simbolo: "F",
        periodo: "2° Período",
        familia: "7A",
        caracteristica: "Halogênio",
        numero: 9,
        massa: 18.998,
    },
    {
        nome: "Neônio",
        simbolo: "Ne",
        periodo: "2° Período",
        familia: "8A",
        caracteristica: "Gás nobre",
        numero: 10,
        massa: 20.18,
    },
    {
        nome: "Sódio",
        simbolo: "Na",
        periodo: "3° Período",
        familia: "1A",
        caracteristica: "Metal alcalino",
        numero: 11,
        massa: 22.99,
    },
    {
        nome: "Magnésio",
        simbolo: "Mg",
        periodo: "3° Período",
        familia: "2A",
        caracteristica: "Metal alcalino-terroso",
        numero: 12,
        massa: 24.305,
    },
    {
        nome: "Alumínino",
        simbolo: "Al",
        periodo: "3° Período",
        familia: "3A",
        caracteristica: "Outros metais",
        numero: 13,
        massa: 26.982,
    },
    {
        nome: "Silício",
        simbolo: "Si",
        periodo: "3° Período",
        familia: "4A",
        caracteristica: "Semimetal",
        numero: 14,
        massa: 28.086,
    },
    {
        nome: "Fósforo",
        simbolo: "P",
        periodo: "3° Período",
        familia: "5A",
        caracteristica: "Não metal",
        numero: 15,
        massa: 30.974,
    },
    {
        nome: "Enxofre",
        simbolo: "S",
        periodo: "3° Período",
        familia: "6A",
        caracteristica: "Não metal",
        numero: 16,
        massa: 32.065,
    },
    {
        nome: "Cloro",
        simbolo: "Cl",
        periodo: "3° Período",
        familia: "7A",
        caracteristica: "Halogênio",
        numero: 17,
        massa: 35.453,
    },
    {
        nome: "Argônio",
        simbolo: "Ar",
        periodo: "3° Período",
        familia: "8A",
        caracteristica: "Gás nobre",
        numero: 18,
        massa: 39.948,
    },
    {
        nome: "Potássio",
        simbolo: "K",
        periodo: "4° Período",
        familia: "1A",
        caracteristica: "Metal alcalino",
        numero: 19,
        massa: 39.098,
    },
    {
        nome: "Cálcio",
        simbolo: "Ca",
        periodo: "4° Período",
        familia: "2A",
        caracteristica: "Metal alcalino-terroso",
        numero: 20,
        massa: 40.078,
    },
    {
        nome: "Escândio",
        simbolo: "Sc",
        periodo: "4° Período",
        familia: "3B",
        caracteristica: "Metal de transição",
        numero: 21,
        massa: 44.956,
    },
    {
        nome: "Titânio",
        simbolo: "Ti",
        periodo: "4° Período",
        familia: "4B",
        caracteristica: "Metal de transição",
        numero: 22,
        massa: 47.867,
    },
    {
        nome: "Vanádio",
        simbolo: "V",
        periodo: "4° Período",
        familia: "5B",
        caracteristica: "Metal de transição",
        numero: 23,
        massa: 50.942,
    },

    {
        nome: "Cromo",
        simbolo: "Cr",
        periodo: "4° Período",
        familia: "6B",
        caracteristica: "Metal de transição",
        numero: 24,
        massa: 51.996,
    },
    {
        nome: "Manganês",
        simbolo: "Mn",
        periodo: "4° Período",
        familia: "7B",
        caracteristica: "Metal de transição",
        numero: 25,
        massa: 54.938,
    },
    {
        nome: "Ferro",
        simbolo: "Fe",
        periodo: "4° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 26,
        massa: 55.845,
    },
    {
        nome: "Cobalto",
        simbolo: "Co",
        periodo: "4° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 27,
        massa: 558.933,
    },
    {
        nome: "Níquel",
        simbolo: "Ni",
        periodo: "4° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 28,
        massa: 58.693,
    },
    {
        nome: "Cobre",
        simbolo: "Cu",
        periodo: "4° Período",
        familia: "1B",
        caracteristica: "Metal de transição",
        numero: 29,
        massa: 63.546,
    },
    {
        nome: "Zinco",
        simbolo: "Zn",
        periodo: "4° Período",
        familia: "2B",
        caracteristica: "Metal de transição",
        numero: 30,
        massa: 65.409,
    },
    {
        nome: "Gálio",
        simbolo: "Ga",
        periodo: "4° Período",
        familia: "3A",
        caracteristica: "Outro metal",
        numero: 31,
        massa: 69.723,
    },
    {
        nome: "Germânio",
        simbolo: "Ge",
        periodo: "4° Período",
        familia: "4A",
        caracteristica: "Semimetal",
        numero: 32,
        massa: 72.64,
    },
    {
        nome: "Arsênio",
        simbolo: "As",
        periodo: "4° Período",
        familia: "5A",
        caracteristica: "",
        numero: 33,
        massa: 74.922,
    },
    {
        nome: "Selênio",
        simbolo: "Se",
        periodo: "4° Período",
        familia: "6A",
        caracteristica: "Não metal",
        numero: 34,
        massa: 78.96,
    },
    {
        nome: "Bromo",
        simbolo: "Br",
        periodo: "4° Período",
        familia: "7A",
        caracteristica: "Halogênio",
        numero: 35,
        massa: 79.904,
    },
    {
        nome: "Criptônio",
        simbolo: "Kr",
        periodo: "4° Período",
        familia: "8A",
        caracteristica: "Gás nobre",
        numero: 36,
        massa: 83.798,
    },
    {
        nome: "Rubídio",
        simbolo: "Rb",
        periodo: "5° Período",
        familia: "1A",
        caracteristica: "Metal alcalino",
        numero: 37,
        massa: 85.468,
    },
    {
        nome: "Estrôncio",
        simbolo: "Sr",
        periodo: "5° Período",
        familia: "2A",
        caracteristica: "Metal alcalino-terroso",
        numero: 38,
        massa: 87.62,
    },
    {
        nome: "Ítrio",
        simbolo: "Y",
        periodo: "5° Período",
        familia: "3B",
        caracteristica: "Metal de transição",
        numero: 39,
        massa: 88.906,
    },
    {
        nome: "Zircônio",
        simbolo: "Zr",
        periodo: "5° Período",
        familia: "4B",
        caracteristica: "Metal de transição",
        numero: 40,
        massa: 91.224,
    },
    {
        nome: "Nióbio",
        simbolo: "Nb",
        periodo: "5° Período",
        familia: "5B",
        caracteristica: "Metal de transição",
        numero: 41,
        massa: 92.90638,
    },
    {
        nome: "Molibdênio",
        simbolo: "Mo",
        periodo: "5° Período",
        familia: "6B",
        caracteristica: "Metal de transição",
        numero: 42,
        massa: 95.94,
    },
    {
        nome: "Tecnécio",
        simbolo: "Tc",
        periodo: "5° Período",
        familia: "7B",
        caracteristica: "Metal de transição",
        numero: 43,
        massa: 98,
    },
    {
        nome: "Rutênio",
        simbolo: "Ru",
        periodo: "5° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 44,
        massa: 101.07,
    },
    {
        nome: "Ródio",
        simbolo: "Rh",
        periodo: "5° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 45,
        massa: 102.90550,
    },
    {
        nome: "Paládio",
        simbolo: "Pd",
        periodo: "5° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 46,
        massa: 106.42,
    },
    {
        nome: "Prata",
        simbolo: "Ag",
        periodo: "5° Período",
        familia: "1B",
        caracteristica: "Metal de transição",
        numero: 47,
        massa: 107.868,
    },
    {
        nome: "Cádmio",
        simbolo: "Cd",
        periodo: "5° Período",
        familia: "2B",
        caracteristica: "Metal de transição",
        numero: 48,
        massa: 112.411,
    },
    {
        nome: "Índio",
        simbolo: "In",
        periodo: "5° Período",
        familia: "3A",
        caracteristica: "Outro metal",
        numero: 49,
        massa: 114.818,
    },
    {
        nome: "Estanho",
        simbolo: "Sn",
        periodo: "5° Período",
        familia: "4A",
        caracteristica: "Outro metal",
        numero: 50,
        massa: 118.71,
    },
    {
        nome: "Antimônio",
        simbolo: "Sb",
        periodo: "5° Período",
        familia: "5A",
        caracteristica: "Semimetal",
        numero: 51,
        massa: 121.76,
    },
    {
        nome: "Telúrio",
        simbolo: "Te",
        periodo: "5° Período",
        familia: "6A",
        caracteristica: "Semimetal",
        numero: 52,
        massa: 127.6,
    },
    {
        nome: "Iodo",
        simbolo: "I",
        periodo: "5° Período",
        familia: "7A",
        caracteristica: "Halogênio",
        numero: 53,
        massa: 126.90447,
    },
    {
        nome: "Xenônio",
        simbolo: "Xe",
        periodo: "5° Período",
        familia: "8A",
        caracteristica: "Gás nobre",
        numero: 54,
        massa: 131.293,
    },
    {
        nome: "Césio",
        simbolo: "Cs",
        periodo: "6° Período",
        familia: "1A",
        caracteristica: "Metal alcalino",
        numero: 55,
        massa: 132.905,
    },
    {
        nome: "Bário",
        simbolo: "Ba",
        periodo: "6° Período",
        familia: "2A",
        caracteristica: "Metal alcalino-terroso",
        numero: 56,
        massa: 137.327,
    },
    {
        nome: "Lantânio",
        simbolo: "La",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 57,
        massa: 138.905,
    },
    {
        nome: "Cério",
        simbolo: "Ce",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 58,
        massa: 140.116,
    },
    {
        nome: "Praseodímio",
        simbolo: "Pr",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 59,
        massa: 140.908,
    },
    {
        nome: "Neodímio",
        simbolo: "Nd",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 60,
        massa: 144.242,
    },
    {
        nome: "Promécio",
        simbolo: "Pm",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 61,
        massa: 145,
    },
    {
        nome: "Samário",
        simbolo: "Sm",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 62,
        massa: 150.36,
    },
    {
        nome: "Európio",
        simbolo: "Eu",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 63,
        massa: 151.964,
    },
    {
        nome: "Gadolínio",
        simbolo: "Gd",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 64,
        massa: 157.25,
    },
    {
        nome: "Térbio",
        simbolo: "Tb",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 65,
        massa: 158.925,
    },
    {
        nome: "Disprósio",
        simbolo: "Dy",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 66,
        massa: 162.5,
    },
    {
        nome: "Hólmio",
        simbolo: "Ho",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 67,
        massa: 164.93032,
    },
    {
        nome: "Érbio",
        simbolo: "Er",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 68,
        massa: 167.259,
    },
    {
        nome: "Túlio",
        simbolo: "Tm",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 69,
        massa: 168.934,
    },
    {
        nome: "Itérbio",
        simbolo: "Yb",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 70,
        massa: 173.04,
    },
    {
        nome: "Lutécio",
        simbolo: "Lu",
        periodo: "6° Período",
        familia: "3B",
        caracteristica: "Lantanídeo",
        numero: 71,
        massa: 174.967,
    },
    {
        nome: "Háfnio",
        simbolo: "Hf",
        periodo: "6° Período",
        familia: "4B",
        caracteristica: "Metal de transição",
        numero: 72,
        massa: 178.49,
    },
    {
        nome: "Tântalo",
        simbolo: "Ta",
        periodo: "6° Período",
        familia: "5B",
        caracteristica: "Metal de transição",
        numero: 73,
        massa: 180.948,
    },
    {
        nome: "Tungstêio",
        simbolo: "W",
        periodo: "6° Período",
        familia: "6B",
        caracteristica: "Metal de transição",
        numero: 74,
        massa: 183.84,
    },
    {
        nome: "Rênio",
        simbolo: "Re",
        periodo: "6° Período",
        familia: "7B",
        caracteristica: "Metal de transição",
        numero: 75,
        massa: 186.207,
    },
    {
        nome: "Ósmio",
        simbolo: "Os",
        periodo: "6° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 76,
        massa: 190.23,
    },
    {
        nome: "Irídio",
        simbolo: "Ir",
        periodo: "6° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 77,
        massa: 192.217,
    },
    {
        nome: "Platina",
        simbolo: "Pt",
        periodo: "6° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 78,
        massa: 195.084,
    },
    {
        nome: "Ouro",
        simbolo: "Au",
        periodo: "6° Período",
        familia: "1B",
        caracteristica: "Metal de transição",
        numero: 79,
        massa: 196.967,
    },
    {
        nome: "Mercúrio",
        simbolo: "Hg",
        periodo: "6° Período",
        familia: "2B",
        caracteristica: "Metal de transição",
        numero: 80,
        massa: 200.59,
    },
    {
        nome: "Tálio",
        simbolo: "Tl",
        periodo: "6° Período",
        familia: "3A",
        caracteristica: "Outro metal",
        numero: 81,
        massa: 204.383,
    },
    {
        nome: "Chumbo",
        simbolo: "Pb",
        periodo: "6° Período",
        familia: "4A",
        caracteristica: "Outro metal",
        numero: 82,
        massa: 207.2,
    },
    {
        nome: "Bismuto",
        simbolo: "Bi",
        periodo: "6° Período",
        familia: "5A",
        caracteristica: "Outro metal",
        numero: 83,
        massa: 208.98,
    },
    {
        nome: "Polônio",
        simbolo: "Po",
        periodo: "6° Período",
        familia: "6A",
        caracteristica: "Semimetal",
        numero: 84,
        massa: 210,
    },
    {
        nome: "Astato",
        simbolo: "At",
        periodo: "6° Período",
        familia: "7A",
        caracteristica: "Halogênio",
        numero: 85,
        massa: 210,
    },
    {
        nome: "Radônio",
        simbolo: "Rn",
        periodo: "6° Período",
        familia: "8A",
        caracteristica: "Gás nobre",
        numero: 86,
        massa: 220,
    },

    {
        nome: "Frâncio",
        simbolo: "Fr",
        periodo: "7° Período",
        familia: "1A",
        caracteristica: "Metal alcalino",
        numero: 87,
        massa: 223,
    },
    {
        nome: "Rádio",
        simbolo: "Ra",
        periodo: "7e Período",
        familia: "2A",
        caracteristica: "Metal alcalino-terroso",
        numero: 88,
        massa: 226,
    },
    {
        nome: "Actínio",
        simbolo: "Ac",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 89,
        massa: 227,
    },
    {
        nome: "Tório",
        simbolo: "Th",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 90,
        massa: 232.03806,
    },
    {
        nome: "Protactínio",
        simbolo: "Pa",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 91,
        massa: 231.03588,
    },
    {
        nome: "Urânio",
        simbolo: "U",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 92,
        massa: 238.02891,
    },
    {
        nome: "Netúnio",
        simbolo: "Np",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 93,
        massa: 237,
    },
    {
        nome: "Plutônio",
        simbolo: "Pu",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 94,
        massa: 244,
    },
    {
        nome: "Amerício",
        simbolo: "Am",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 95,
        massa: 243,
    },
    {
        nome: "Cúrio",
        simbolo: "Cm",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 96,
        massa: 247,
    },
    {
        nome: "Berquélio",
        simbolo: "Bk",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 97,
        massa: 247,
    },
    {
        nome: "Califórnio",
        simbolo: "Cf",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 98,
        massa: 251,
    },
    {
        nome: "Einsténio",
        simbolo: "Es",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 99,
        massa: 252,
    },
    {
        nome: "Férmio",
        simbolo: "Fm",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 100,
        massa: 257,
    },
    {
        nome: "Mendelévio",
        simbolo: "Md",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 101,
        massa: 258,
    },
    {
        nome: "Nobélio",
        simbolo: "No",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 102,
        massa: 259,
    },
    {
        nome: "Laurêncio",
        simbolo: "Lr",
        periodo: "7° Período",
        familia: "3B",
        caracteristica: "Actinídio",
        numero: 103,
        massa: 262,
    },
    {
        nome: "Rutherfórdio",
        simbolo: "Rf",
        periodo: "7° Período",
        familia: "4B",
        caracteristica: "Metal de transição",
        numero: 104,
        massa: 261,
    },
    {
        nome: "Dúbnio",
        simbolo: "Db",
        periodo: "7° Período",
        familia: "5B",
        caracteristica: "Metal de transição",
        numero: 105,
        massa: 262,
    },
    {
        nome: "Seabórgio",
        simbolo: "Sg",
        periodo: "7° Período",
        familia: "6B",
        caracteristica: "Metal de transição",
        numero: 106,
        massa: 266,
    },
    {
        nome: "Bóhrio",
        simbolo: "Bh",
        periodo: "7° Período",
        familia: "7B",
        caracteristica: "Metal de transição",
        numero: 107,
        massa: 264,
    },
    {
        nome: "Hássio",
        simbolo: "Hs",
        periodo: "7° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 108,
        massa: 277,
    },
    {
        nome: "Meitnério",
        simbolo: "Mt",
        periodo: "7° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 109,
        massa: 268,
    },
    {
        nome: "Darmstádio",
        simbolo: "Ds",
        periodo: "7° Período",
        familia: "8B",
        caracteristica: "Metal de transição",
        numero: 110,
        massa: 271,
    },
    {
        nome: "Roentgênio",
        simbolo: "Rg",
        periodo: "7° Período",
        familia: "1B",
        caracteristica: "Metal de transição",
        numero: 111,
        massa: 272,
    },
    {
        nome: "Copernício",
        simbolo: "Cn",
        periodo: "7° Período",
        familia: "2B",
        caracteristica: "Metal de transição",
        numero: 112,
        massa: 277,
    },
    {
        nome: "Nihônio",
        simbolo: "Nh",
        periodo: "7° Período",
        familia: "3A",
        caracteristica: "Outro metal",
        numero: 113,
        massa: 286,
    },
    {
        nome: "Fleróvio",
        simbolo: "Fl",
        periodo: "7° Período",
        familia: "4A",
        caracteristica: "Outro metal",
        numero: 114,
        massa: 289,
    },
    {
        nome: "Moscóvio",
        simbolo: "Mc",
        periodo: "7° Período",
        familia: "5A",
        caracteristica: "Outro metal",
        numero: 115,
        massa: 288,
    },
    {
        nome: "Livermório",
        simbolo: "Lv",
        periodo: "7° Período",
        familia: "6A",
        caracteristica: "Outro metal",
        numero: 116,
        massa: 293,
    },
    {
        nome: "Tenessino",
        simbolo: "Ts",
        periodo: "7° Período",
        familia: "7A",
        caracteristica: "Halogênio",
        numero: 117,
        massa: 294,
    },
    {
        nome: "Oganessônio",
        simbolo: "Og",
        periodo: "7° Período",
        familia: "8A",
        caracteristica: "Gas nobre",
        numero: 118,
        massa: 294,
    },
];

let btnconfirm = document.querySelector('#confirm');

btnconfirm.addEventListener("click", () => {

    let aNumber = document.querySelector("#aNumber").value, // Input pegado do HTML
        eletrons = Number(aNumber), // Número de eletróns
        distribuicaoEletronica = '', // Aqui serão armazenados os 1s2; 2s2
        count = 0, // Para fazer as diagonais;
        factor; // Elemento pego do array ELEMENTS
    
//  Qual é o elemento?

    for(let i = 0; i < ELEMENTS.length; i++){
        if(eletrons === ELEMENTS[i].numero){
        factor = ELEMENTS[i];

        break; // Quebra do código
        }
    }

//  Distribuição eletrônica

    const CAMADAS = ['K', 'L', 'M', 'N', 'O', 'P', 'Q']; // Camadas
    const SUBNIVEIS = ['s', 'p', 'd', 'f']; // Subníveis

//  Variáveis que vão guardar quantos elétrons possui em cada camada
    let k = 0, 
        l = 0, 
        m = 0, 
        n = 0, 
        o = 0, 
        p = 0, 
        q = 0;
        
    let camadaDeValencia,
        subnivelMaisEnergetico,
        nCamadaDeValencia,
        orbitalMaisEnergetico;
        
    for (let i = 0; i < CAMADAS.length; i++) {
            
        if (eletrons <= 0) {
//          Se o número de eletrons for igual ou menor que zero a distribuição acaba
            break;
        }
            
        const CAMADA = CAMADAS[i]; // Qual camada estamos usando?
        
        for (let j = 0; j < SUBNIVEIS.length; j++) {

            let sub = SUBNIVEIS[j];

            if (eletrons <= 0) {
//          Se o número de eletrons for igual ou menor que zero a distribuição acaba
                break;
            }

            if(CAMADA === 'K'){
                    if(sub === 's'){
                        distribuicaoEletronica += '1';
                        max = 2;
                        
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        k = k + d;
                        camadaDeValencia = 'K';
                        subnivelMaisEnergetico = '1' + sub;
                        orbitalMaisEnergetico = d;
                    }
            }
            else if(CAMADA === 'L'){
                    if(sub === 's'){
                        distribuicaoEletronica += '2';
                        max = 2;
                        
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        l = l + d;
                        camadaDeValencia = 'L';
                        subnivelMaisEnergetico = '2' + sub;
                        orbitalMaisEnergetico = d;
                    }
                    else if(sub === 'p'){
                        distribuicaoEletronica += '2';
                        max = 6;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        l = l + d;
                        camadaDeValencia = 'L';
                        subnivelMaisEnergetico = '2' + sub;
                        orbitalMaisEnergetico = d;
                    }
            }
            else if(CAMADA === 'M'){
                    if(sub === 's' && count < 2){
                        distribuicaoEletronica += '3';
                        max = 2;
                        
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        m = m + d;
                        camadaDeValencia = 'M';
                        subnivelMaisEnergetico = '3' + sub;
                        orbitalMaisEnergetico = d;
                    }
                    else if(sub === 'p' && count < 2){
                        distribuicaoEletronica += '3';
                        max = 6;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        m = m + d;
                        camadaDeValencia = 'M';
                        subnivelMaisEnergetico = '3' + sub;
                        orbitalMaisEnergetico = d;
                        
                        break; 
//                      O código é quebrado para evitar que a próxima distribuição seja 4s e não 3p
                    }
                    else if(sub === 'd' && count === 2){
                        distribuicaoEletronica += '3';
                        max = 10;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        m = m + d;
                        camadaDeValencia = 'M';
                        subnivelMaisEnergetico = '3' + sub;
                        orbitalMaisEnergetico = d;

                        break;
//                      A execução é parada para que vá para a camada 4p
                    }
            }
            else if(CAMADA === 'N'){
                    if(sub === 's' && count < 2){
                        distribuicaoEletronica += '4';
                        max = 2;
                        
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';

                        i = 1; 
//                      Aqui é colocado para a camada anterior da desejada, pois ao quebrar o código ele soma mais um
                        count = 2;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        n = n + d;
                        camadaDeValencia = 'N';
                        subnivelMaisEnergetico = '4' + sub;
                        orbitalMaisEnergetico = d;

                        break;
//                      Para de executar para poder ir para a camada 3d
                    }
                    else if(sub === 'p' && count === 2){
                        distribuicaoEletronica += '4';
                        max = 6;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        n = n + d;
                        camadaDeValencia = 'N';
                        subnivelMaisEnergetico = '4' + sub;
                        orbitalMaisEnergetico = d;

                        count = 0;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 5s
                    }
                    else if(sub === 'd' && count === 3){
                        distribuicaoEletronica += '4';
                        max = 10;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        n = n + d;
                        camadaDeValencia = 'N';
                        subnivelMaisEnergetico = '4' + sub;
                        orbitalMaisEnergetico = d;

                        count = 2;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 5p
                    }
                    else if(sub === 'f' && count === 4){
                        distribuicaoEletronica += '4';
                        max = 14;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        n = n + d;
                        camadaDeValencia = 'N';
                        subnivelMaisEnergetico = '4' + sub;
                        orbitalMaisEnergetico = d;

                        count = 3;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 5d
                    }
            }
            else if(CAMADA === 'O'){
                    if(sub === 's' && count < 2){
                        distribuicaoEletronica += '5';
                        max = 2;
                        
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        o = o + d;
                        camadaDeValencia = 'O';
                        subnivelMaisEnergetico = '5' + sub;
                        orbitalMaisEnergetico = d;

                        i = 2;
//                      Aqui é colocado para a camada anterior da desejada, pois ao quebrar o código ele soma mais um
                        count = 3;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 4d
                    }
                    else if(sub === 'p' && count === 2){
                        distribuicaoEletronica += '5';
                        max = 6;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        o = o + d;
                        camadaDeValencia = 'O';
                        subnivelMaisEnergetico = '5' + sub;
                        orbitalMaisEnergetico = d;

                        count = 0;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 6s
                    }
                    else if(sub === 'd' && count === 3){
                        distribuicaoEletronica += '5';
                        max = 10;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        o = o + d;
                        camadaDeValencia = 'O';
                        subnivelMaisEnergetico = '5' + sub;
                        orbitalMaisEnergetico = d;

                        count = 2;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 6p
                    }
                    else if(sub === 'f' && count === 4){
                        distribuicaoEletronica += '5';
                        max = 14;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        o = o + d;
                        subnivelMaisEnergetico = '5' + sub;
                        orbitalMaisEnergetico = d;

                        count = 3;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 6d
                    }
            }
            else if(CAMADA === 'P'){
                    if(sub === 's' && count < 2){
                        distribuicaoEletronica += '6';
                        max = 2;
                        
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        p = p + d;
                        camadaDeValencia = 'P';
                        subnivelMaisEnergetico = '6' + sub;
                        orbitalMaisEnergetico = d;

                        i = 2;
//                      Aqui é colocado para a camada anterior da desejada, pois ao quebrar o código ele soma mais um
                        count = 4;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 4f
                    }
                    else if(sub === 'p' && count == 2){
                        distribuicaoEletronica += '6';
                        max = 6;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        p = p + d;
                        camadaDeValencia = 'P';
                        subnivelMaisEnergetico = '6' + sub;
                        orbitalMaisEnergetico = d;

                        count = 0;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 7s
                    }
                    else if(sub === 'd' && count === 3){
                        distribuicaoEletronica += '6';
                        max = 10;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        p = p + d;
                        camadaDeValencia = 'P';
                        subnivelMaisEnergetico = '6' + sub;
                        orbitalMaisEnergetico = d;

                        count = 2;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 7p
                    }
            }
            else if(CAMADA === 'Q'){
                    if(sub === 's' && count < 2){
                        distribuicaoEletronica += '7';
                        max = 2;
                        
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        q = q + d;
                        camadaDeValencia = 'Q';
                        subnivelMaisEnergetico = '7' + sub;
                        orbitalMaisEnergetico = d;

                        i = 3;
//                      Aqui é colocado para a camada anterior da desejada, pois ao quebrar o código ele soma mais um
                        count = 4;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 5f
                    }
                    else if(sub === 'p' && count === 2){
                        distribuicaoEletronica += '7';
                        max = 6;
            
                        let d = 0;
                        // d = distribuição da subcamada
                
                        for(let x = 1; x <= max; x++){
                            if(eletrons){
                                eletrons--;
                                d++;
                            }
                        }
                
                        distribuicaoEletronica += sub + d + '; ';
                        q = q + d;
                        camadaDeValencia = 'Q';
                        subnivelMaisEnergetico = '7' + sub;
                        orbitalMaisEnergetico = d;

                        count = 10;
//                      O contador serve para indicar em qual subcamada que irá entrar

                        break;
//                      Para de executar para poder ir para a camada 8s
                    }
            }
        }
    }

    if(camadaDeValencia === "K"){
        nCamadaDeValencia = k;
    }
    if(camadaDeValencia === "L"){
        nCamadaDeValencia = l;
    }
    if(camadaDeValencia === "M"){
        nCamadaDeValencia = m;
    }
    if(camadaDeValencia === "N"){
        nCamadaDeValencia = n;
    }
    if(camadaDeValencia === "O"){
        nCamadaDeValencia = o;
    }
    if(camadaDeValencia === "P"){
        nCamadaDeValencia = p;
    }
    if(camadaDeValencia === "Q"){
        nCamadaDeValencia = q;
    }

    let element = document.querySelector("#element"),
        distribution = document.querySelector("#distribution"),
        other = document.querySelector("#other");

    element.innerHTML = `
        <div>
            <h1>Elemento</h1>
            <p>Nome: ${factor.nome}</p>
            <p>Símbolo: ${factor.simbolo}</p>
            <p>Período: ${factor.periodo}</p>
            <p>Família: ${factor.familia}</p>
            <p>Característica: ${factor.caracteristica}</p>
            <p>Número Atômico: ${factor.numero}</p>
            <p>Massa: ${factor.massa}</p>
        </div>    
    `;

    distribution.innerHTML = `
        <div>
            <h1>Distribuição Eletrônica</h1>
            <p>${distribuicaoEletronica}</p>
            <p>K =  ${k}</p>
            <p>L =  ${l}</p>
            <p>M =  ${m}</p>
            <p>N =  ${n}</p>
            <p>O =  ${o}</p>
            <p>P =  ${p}</p>
            <p>Q =  ${q}</p>
        </div>
    `;

    other.innerHTML = `
        <div>
            <h1>Outros dados</h1>
            <p>Camada de valência: ${camadaDeValencia}</p>
            <p>Nº de elétrons na camada de valência: ${nCamadaDeValencia}</p>
            <p>Subnível (orbital) mais energético: ${subnivelMaisEnergetico}</p>
            <p>Nº de elétrons no orbital mais energético: ${orbitalMaisEnergetico}</p>
        </div>
    `;

    document.querySelector("#answer").classList.remove("hidden");
});