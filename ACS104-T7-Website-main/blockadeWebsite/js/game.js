document.addEventListener("DOMContentLoaded", () => {
    // Dice roller
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const rollBtn = document.getElementById("rollDiceBtn");
    const diceSummary = document.getElementById("diceSummary");
    const diceNote = document.getElementById("diceNote");

    if (rollBtn) {
        rollBtn.addEventListener("click", () => {
            const roll1 = Math.floor(Math.random() * 6) + 1;
            const roll2 = Math.floor(Math.random() * 6) + 1;

            die1.textContent = roll1;
            die2.textContent = roll2;

            diceSummary.textContent = `You get ${roll1} red and ${roll2} yellow movement points.`;

            if (roll1 <= 3 && roll2 <= 3) {
                diceNote.textContent = "Tip: You can combine your dice and spend the total on either color.";
            } else {
                diceNote.textContent = "You may split these movement points between your pieces.";
            }
        });
    }

    // TREE STACK INTERACTION
    const tile1 = document.getElementById("tile1");
    const tile2 = document.getElementById("tile2");
    const tile3 = document.getElementById("tile3");
    const treeMessage = document.getElementById("treeMessage");
    const resetBtn = document.getElementById("resetTree");

    let step = 0;
    let small, medium, large;

    function initTopDownTree() {
        step = 0;
        tile1.innerHTML = '<div class="piece medium" data-size="medium"></div>';
        tile2.innerHTML = '<div class="piece large" data-size="large"></div><div class="piece small" data-size="small"></div>';
        tile3.innerHTML = '';
        treeMessage.textContent = '';

        small = tile2.querySelector('.piece.small');
        medium = tile1.querySelector('.piece.medium');
        large = tile2.querySelector('.piece.large');

        if (small) {
            small.addEventListener("click", () => {
                if (step === 0) {
                    tile3.appendChild(small);
                    treeMessage.textContent = "Small moved to Tile 3.";
                    step++;
                } else if (step === 2) {
                    tile2.appendChild(small);
                    treeMessage.textContent = "Tree completed!";
                    step++;
                }
            });
        }

        if (medium) {
            medium.addEventListener("click", () => {
                if (step === 1) {
                    tile2.appendChild(medium);
                    treeMessage.textContent = "Medium stacked on Tile 2.";
                    step++;
                }
            });
        }
    }

    if (tile1 && tile2 && tile3) initTopDownTree();
    if (resetBtn) resetBtn.addEventListener("click", initTopDownTree);
});