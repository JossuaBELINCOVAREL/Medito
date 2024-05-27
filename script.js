let counter = 0;
let canClick = true; // Variable pour contrôler la possibilité de cliquer

// Fonction pour créer un nouveau fruit
function createFruit() {
    if (!canClick) {
        return; // Sortie de la fonction si on ne peut pas cliquer
    }

    canClick = false; // Désactiver la possibilité de cliquer pendant un moment

    const fruits = ['fruit1.png', 'fruit2.png', 'fruit3.png', 'fruit4.png', 'fruit5.png'];
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    
    const fruitElement = document.getElementById('fruit');
    fruitElement.src = `images/${randomFruit}`;
    fruitElement.style.display = 'block';

    // Positionner le fruit au-dessus de l'arbre
    const tree = document.getElementById('tree');
    fruitElement.style.left = `${tree.offsetLeft + (tree.offsetWidth / 2) - (fruitElement.offsetWidth / 2)}px`;
    fruitElement.style.top = `${tree.offsetTop}px`;

    // Animer la chute du fruit
    const endPosition = window.innerHeight - fruitElement.offsetHeight;
    const duration = 2000; // 2 secondes

    fruitElement.style.animation = 'fall 2s ease-in-out forwards';

    // Disparaître le fruit après 2 secondes
    setTimeout(() => {
        fruitElement.style.display = 'none';
        canClick = true; // Réactiver la possibilité de cliquer
    }, duration);

    // Augmenter le compteur
    counter++;
    updateCounter();
}

// Gérer le clic sur l'arbre
document.addEventListener('DOMContentLoaded', () => {
    const tree = document.getElementById('tree');
    tree.addEventListener('click', () => {
        createFruit();
    });
});

// Fonction pour mettre à jour le compteur
function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counter;
}
