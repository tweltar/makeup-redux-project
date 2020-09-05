export const brands = [
    "almay",'alva','anna sui','annabelle','benefit','boosh',"burt's bes",'butter london',"c'est moi",'cargo cosmetics','china glaze','clinique','coastal classic creation','colourpop','covergirl','dalish','deciem','dior','dr. hauschka','e.l.f.','essie','fenty','glossier','green people','iman',"l'oreal",'lotus cosmetics usa',"maia's mineral galaxy",'marcelle','marienatie','maybelline','milani','mineral fusion','misa','mistura','moov', 'nudus','nyx','orly','pacifica','penny lane organics','physicians formula','piggy paint', 'pure anada','rejuva minerals','revlon',"sally b's skin yummies",'salon perfect','sante','sinful colours','smashbox','stila','suncoat','w3llpeople','wet n wild','zorah','zorah biocosmetiques'
];

export const products = [
    {
        name: "Blush",
        image: "https://iili.io/29ex19.th.png",
        category: [
            "powder", "cream"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "non-gmo", "purpicks", "usda organic", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc"
        ]
    },
    {
        name: "Bronzer",
        image: "https://iili.io/29eu5b.th.png",
        category: ["powder"],
        tag: [
            "gluten free", "canadian", "natural", "organic", "vegan", "purpicks", "ewg verified"
        ]
    }, 
    {
        name: "Eyebrow",
        image: "https://iili.io/29e7zQ.th.png",
        category: ["pencil"],
        tag: [
            "purpicks", 
            "ewg verified"
        ]
    }, 
    {
        name: "Eyeliner",
        image: "https://iili.io/29eYXV.th.png",
        category: [
            "liquid", "pencil", "gel", "cream"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "purpicks", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc", "ecocert"
        ]
    }, 
    {
        name: "Eyeshadow",
        image: "https://iili.io/29e011.th.png",
        category: [
            "palette", "pencil", "cream", ""
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "non-gmo", "purpicks", "usda organic", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc", "ecocert"
        ]
    }, 
    {
        name: "Foundation",
        image: "https://iili.io/29eGdg.th.png",
        category: [
            "concealer", "liquid", "contour", "bb cc", "cream", "mineral", "powder", "highlighter"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "purpicks", "certclean", "ewg verified", "hypoallergenic", "no talc", "water free", "cruelty free", "alcohol free", "oil free", "silicone free"
        ]
    }, 
    {
        name: "Lip Liner",
        image: "https://iili.io/29eM7a.th.png",
        category: ["pencil"],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "purpicks", "ewg verified", "hypoallergenic", "no talc", "cruelty free"
        ]
    }, 
    {
        name: "Lipstick",
        image: "https://iili.io/29eWmv.th.png",
        category: [
            "lipstick", "lip gloss", "liquid", "lip stain"
        ],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "non-gmo", "peanut free product", "cruelty free", "organic", "purpicks", "organic", "certclean", "chemical free", "ewg verified", "hypoallergenic", "no talc"
        ]
    }, 
    {
        name: "Mascara",
        image: "https://iili.io/29ehIR.th.png",
        category: [""],
        tag: [
            "vegan", "gluten free", "canadian", "natural", "organic", "purpicks", "organic", "certclean", "ewg verified", "hypoallergenic", "no talc", "ecocert", "usda organic"
        ]
    }, 
    {
        name: "Nail Polish",
        image: "https://iili.io/29ekrX.th.png",
        category: [],
        tag: [
            "vegan", "canadian", "natural", "gluten free", "fair trade", "sugar free", "non-gmo", "dairy free"
        ]
    }
];

export const countStars = rating => {
    const numFullStars = rating/5;
    const hasHalfStar = rating%5;
    var stars = "";
    var i = 0;

    while (i < numFullStars) {
        stars += `<i class="fas fa-star"></i>`;
        i++;
    }

    if(hasHalfStar) {
        stars += `<i class="fas fa-star-half-alt"></i>`;
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