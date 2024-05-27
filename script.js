document.getElementById('tree').addEventListener('click', dropFruit);

function dropFruit() {
    const fruits = ['fruit1.png', 'fruit2.png', 'fruit3.png', 'fruit4.png', 'fruit5.png'];
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    const fruitElement = document.getElementById('fruit');
    fruitElement.src = `images/${randomFruit}`;
    fruitElement.style.display = 'block';
    fruitElement.style.animation = 'fall 2s forwards';
}
