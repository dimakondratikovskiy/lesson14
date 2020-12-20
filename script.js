//task_1
document.write('task_1' + '</br>');
let arr = [1,2,3,4,5,6];
for (let i = 0; i<arr.length; i++) {
	document.write(arr[i]);
}

//task_2
document.write('</br>' + 'task_2' + '</br>');
let arr2 = [-2,-1,-3,15,0,-4,2,-5,-9,-15,0,4,5,-6,10,7];
for (let i = 0; i<arr2.length; i++) {
	if (arr2[i] > -10 && arr2[i] < -3) document.write(arr2[i]);
}

//task_3
document.write('</br>' + 'task_3' + '</br>');
let arr3 = [];
for (let i = 23; i <= 57; i++) {
	arr3.push(i);
}
document.write('метод for :' + arr3);
document.write('</br>');

let arr4 = [];
let k = 23;
while (k <= 57) {
	arr4.push(k);
	k++;
}
document.write('метод while :' + arr4);
document.write('</br>');
let result = 0;
for (let i = 0; i < arr3.length; i++) {
	result += arr3[i];
}
document.write('сумма чисел массива:' + result);

//task_4
document.write('</br>' + 'task_4' + '</br>');
let arr5 = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr5.length; i++) {
	if (arr5[i][0] == '1' || arr5[i][0] == 2 || arr5[i][0] == 5) {
		document.write(arr5[i] + ' ');
	}
}

//task_5
document.write('</br>' + 'task_5' + '</br>');
let arr6 = ['Понедельник' + 'Вторник' + 'Среда' + 'Четверг' + 'Пятница' + 'Суббота' + 'Воскресенье'];
for (i = 0; i < arr6.length; i++) {
	if (arr6[i] == 'Суббота' || arr6[i] == 'Воскресенье') {
		document.write('\n' + arr6[i].bold());
	} else {
		document.write('\n' + arr6[i]);
	}
}

//task_6
document.write('</br>' + 'task_6' + '</br>');
let arr7 = [2, 5, 7, 8, 12, 14, 22, 31];
document.write('Массив ' + arr7 + '\n');
arr7[arr7.length] = 45;
document.write('Массив ' + arr7 + '\n');
document.write('Последний элемент массива ' + arr7[arr7.length - 1]);



//task_8
document.write('</br>' + 'task_8' + '</br>');
let arr9 = [12, false, 'Текст', 4, 2, -5, 0];
document.write('Массив ' + arr9 + '\n');
i = arr9.length - 1;
document.write('Цикл while ');
while (i < arr9.length && i >= 0) {
	document.write(arr9[i] + ' ');
	i--;
}
document.write('\n Метод reverse ' + arr9.reverse());

//task_9
document.write('</br>' + 'task_9' + '</br>');
let arr10 = [5, 9, 21, , , 9, 78, , , , 6],
	 empty = 0;
for (i = 0; i < arr10.length; i++) {
	if (arr10[i] == null) {
		empty += 1;
	}
}
document.write('Массив ' + arr10 + '\n');
document.write('Количество пустых элементов ' + empty);

//task_10
document.write('</br>' + 'task_10' + '</br>');
let m = prompt('10 задание. Введите значения массива (через пробел):'),
	 arr11 = m.split(' '),
	 sum = 0;
document.write('Массив ' + arr11 + '\n');
let marr11 = arr11.slice(arr11.indexOf('0') + 1, arr11.lastIndexOf('0'));
for (i = 0; i < marr11.length; i++) {
	if (arr11.indexOf('0') == -1 || arr11.lastIndexOf('0') == -1) {
		break;
	} else {
		sum += Number(marr11[i]);
	}
}
document.write('Массив между двумя нулями' + marr11 + '\n');
document.write('Сумма элементов массива меду двумя нулями ' + sum);






















