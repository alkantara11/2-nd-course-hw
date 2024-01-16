const seasonPlay = () => {
    let season = Number(prompt('Напишите номер месяца (от 1 до 12) а мы ответим Вм, в какое время года попадает этот месяц'));
if (season === 12 || season > 0 && season < 3) {
    return `зима`;
} 
if (season > 2 && season < 6) {
    return `весна`;
} 
if (season > 5 && season < 9) {
    return `лето`;
} 
if (season > 8 && season < 12) {
    return `осень`;
} else {
    return `Такого месяца не существует!!!`;
}
alert (seasonPlay());
}