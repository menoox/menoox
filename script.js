document.getElementById('roll-dice').addEventListener('click', function() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const dice3 = document.getElementById('dice3');
    const total = document.getElementById('total');

    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    const roll3 = Math.floor(Math.random() * 6) + 1;

    dice1.textContent = roll1;
    dice2.textContent = roll2;
    dice3.textContent = roll3;

    const sum = roll1 + roll2 + roll3;
    total.textContent = sum;
});
