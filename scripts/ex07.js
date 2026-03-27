function escolhaPicole() {
    let sabor;
    alert("A - Chocolate R$ 1,50\n B - Morango R$ 2,50\n C - Creme R$ 2,50\n D - Manga R$ 3,20\n E - Melancia  R$ 3,40\n F - Vanilla Ice R$ 3,00\n E - Céu Azul R$ 3,60\n H - Brownie R$ 4,00\n I - Hawaiano R$ 5,00");
    sabor = prompt("Escolha a opção de picolé desejada: ").toUpperCase();

    if (sabor == "A") {
        alert("A opcão escolhida foi Chocolate que custa R$ 1,50");
    } else if (sabor == "B") {
        alert("A opcão escolhida foi Morango que custa R$ 2,50");
    } else if (sabor == "C") {
        alert("A opcão escolhida foi Creme que custa R$ 2,50");
    } else if (sabor == "D") {
        alert("A opcão escolhida foi Manga que custa R$ 3,20");
    } else if (sabor == "E") {
        alert("A opcão escolhida foi Melancia que custa R$ 3,40");
    } else if (sabor == "F") {
        alert("A opcão escolhida foi Vanilla Ice que custa R$ 3,00");
    } else if (sabor == "G") {
        alert("A opcão escolhida foi Céu azul que custa R$ 3,60");
    } else if (sabor == "H") {
        alert("A opcão escolhida foi Brownie que custa R$ 4,00");
    } else if (sabor == "I") {
        alert("A opcão escolhida foi Hawaiano que custa R$ 5,00");
    }
}