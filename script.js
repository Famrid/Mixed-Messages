const firstData = ['karma', 'étoile', 'chi', 'énergie', 'tantra', 'mana', 'coeur'];
const secondData = ['Thanos', 'Mars', 'Jupiter', 'Saturne', 'du cassoulet', 'du camembert', 'Neptune', 'Pluton'];
const thirdData = ['manger des raviolis', 'vous faire un bain de pied', 'd\'éviter les plats épicés', 'de faire 30 minutes de marche par jour', 'de binge watch l\'intégrale du seigneur des anneaux', 'd\'éviter de croiser un verseau'];

const mixedMessage = (array1, array2, array3) => {
    return `Votre ${firstData[Math.floor(Math.random() * array1.length)]} est aligné avec ${secondData[Math.floor(Math.random() * array2.length)]}. Je vous conseille de ${thirdData[Math.floor(Math.random() * array3.length)]}.`
};

console.log(mixedMessage(firstData, secondData, thirdData));