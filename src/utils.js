export const brands = {
    1: 'almay',
    2: 'alva',
    3: 'anna sui',
    4: 'annabelle',
    5: 'benefit',
    6: 'boosh',
    7: "burt's bes",
    8: 'butter london',
    9: "c'est moi",
    10: 'cargo cosmetics',
    11: 'china glaze',
    12: 'clinique',
    13: 'coastal classic creation',
    14: 'colourpop',
    15: 'covergirl',
    16: 'dalish',
    17: 'deciem',
    18: 'dior',
    19: 'dr. hauschka',
    20: 'e.l.f.',
    21: 'essie',
    22: 'fenty',
    23: 'glossier',
    24: 'green people',
    25: 'iman', 
    26: "l'oreal",
    27: 'lotus cosmetics usa',
    28: "maia's mineral galaxy",
    29: 'marcelle',
    30: 'marienatie',
    31: 'maybelline',
    32: 'milani',
    33: 'mineral fusion',
    34: 'misa',
    35: 'mistura',
    36: 'moov',
    37: 'nudus',
    38: 'nyx',
    39: 'orly',
    40: 'pacifica',
    41: 'penny lane organics',
    42: 'physicians formula',
    43: 'piggy paint',
    44: 'pure anada',
    45: 'rejuva minerals',
    46: 'revlon',
    47: "sally b's skin yummies",
    48: 'salon perfect',
    49: 'sante',
    50: 'sinful colours',
    51: 'smashbox',
    52: 'stila',
    53: 'suncoat',
    54: 'w3llpeople',
    55: 'wet n wild',
    56: 'zorah',
    57: 'zorah biocosmetiques'
};

export const products = {
    blush: {
        category: [
            "powder", "cream"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "non-gmo", "purpicks", "usda organic", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc"
        ]
    },
    bronzer: {
        category: ["powder"],
        tag: [
            "gluten free", "canadian", "natural", "organic", "vegan", "purpicks", "ewg verified"
        ]
    }, 
    eyebrow: {
        category: ["pencil"],
        tag: [
            "purpicks", 
            "ewg verified"
        ]
    }, 
    eyeliner: {
        category: [
            "liquid", "pencil", "gel", "cream"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "purpicks", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc", "ecocert"
        ]
    }, 
    eyeshadow: {
        category: [
            "palette", "pencil", "cream", ""
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "non-gmo", "purpicks", "usda organic", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc", "ecocert"
        ]
    }, 
    foundation: {
        category: [
            "concealer", "liquid", "contour", "bb cc", "cream", "mineral", "powder", "highlighter"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "purpicks", "certclean", "ewg verified", "hypoallergenic", "no talc", "water free", "cruelty free", "alcohol free", "oil free", "silicone free"
        ]
    }, 
    lipliner: {
        category: ["pencil"],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "purpicks", "ewg verified", "hypoallergenic", "no talc", "cruelty free"
        ]
    }, 
    lipstick: {
        category: [
            "lipstick", "lip gloss", "liquid", "lip stain"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "non-gmo", "peanut free product", "cruelty free", "organic", "purpicks", "organic", "certclean", "chemical free", "ewg verified", "hypoallergenic", "no talc"
        ]
    }, 
    mascara: {
        category: [""],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "organic", "purpicks", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc", "ecocert", "usda organic"
        ]
    }, 
    nail_polish: {
        category: [],
        tag: [
            "vegan", "canadian", "natural", "gluten free", "fair trade", "sugar free", "non-gmo", "dairy free"
        ]
    }
};

export const countStars = rating => {
    const numFullStars = rating/5;
    const hasHalfStar = rating%5;
    var stars = "";
    var i = 0;

    while (i < numFullStars) {
        stars += `<i className="fas fa-star"></i>`;
        i++;
    }

    if(hasHalfStar) {
        stars += `<i className="fas fa-star-half-alt"></i>`;
    };

    stars += `<p>${rating}</p>`;

    return `<div>${stars}</div>`;
};

export const checkProductColor = (colors) => {
    var remain = 0;
    var firstColors = [];

    for (let i = 0; i < 4; i++) {
        firstColors[i] = colors[i];
    };

    if (colors.length > 4) {
        remain = colors.length - 4;
    }

    return [firstColors, remain];
};