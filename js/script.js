// Необходимо построить пирамиду при помощи символа *.Для этого вам нужно запросить у пользователя число, которое будет количеством ярусов и высотой вашей пирамиды.Вся пирамида должна быть одной строкой, при этом важно учесть пробелы перед символами * в каждом ярусе(кроме последнего) для того, чтобы пирамида была выровнена по центру.В итоге alert или console.log должен выводить такую пирамиду:


let stage = +prompt('Введите количество ярусов пирамиды')
let sym = "*";
sym1 = '';
sym2 = ' ';
let obj = {
    stage,
    star: '**',
}
for (i = 0; i < stage; i++) {
    for (j = obj['stage'] - 1; j > 0; j--) {

        sym1 = sym1 + sym2
    }
    obj['stage']--;
    sym1 = sym1 + sym + '\n';
    sym = sym + obj.star;
}

console.log(sym1);

