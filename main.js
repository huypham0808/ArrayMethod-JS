var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
];
let myString = 'PhamNgoHoangHuy';
for (let key in orders) {
    //console.log(orders[key].name); // Log ra tung ky tu trong chuoi
}
function getTotal(arrayTotal) {
    let arrayLength = arrayTotal.length;
    let total = 0;
    for (let i = 0; i < arrayLength; i++) {
        total += arrayTotal[i].price;
    }
    return total;
}
let object1 = {
    name: 'Nguyen Van A',
    age: 16
};
function run(object) {
    let result = [];
    for (let key in object) {
        let myKey = key;
        let myValue = object[key];
        result.push(`Thuộc tính ${myKey} có giá trị ${myValue}`);
    }
    return result;
}
console.log(run({ name: 'Nguyen Van A', age: 16 }));
//----------DÙNG FOR OF
let myInfor = ['Java', 'PHP', 'C#'];
for (let values of myInfor) {
    console.log(values);
};
//-----------SU DUNG OBJECT ĐỂ DUYỆT MẢNG
let myInfor2 = {
    Name: "Huy Pham",
    Age: 28,
};
console.log(Object.keys(myInfor2)); // Trả về mảng các key ['Name','Age']
console.log(Object.values(myInfor2)); // Trả về mảng các values ['Huy Pham', 28]

for (let value of Object.keys(myInfor2)) {
    //console.log(value); // Trả về Name, Age
    //console.log(myInfor2[value]); // Trả về value Huy Pham, 28
}
for (let value of Object.values(myInfor2)) {
    //console.log(value); // Trả về value Huy Pham, 28
}

//-- VÒNG LẶP WHILE
let i = 0;
while (i < 10) {
    i++;
    //console.log(i);  
};
// Sử dụng Break & Continue
for (let i = 0; i < 10; i++) {
    //console.log(i);
    if (i >= 5) break; // in ra số từ 0 tới 5, mặc dù mảng gồm 10 
};
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue; // Nếu điều kiện đúng thì sẽ tiếp tục vòng lặp (tăng i) bắt đầu từ đây, ko chạy xuống dưới.
    }
    //console.log(i);
};

// VÒNG LẶP LỒNG NHAU
let myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (let i = 0; i < myArr.length; i++) {
    //console.log(myArr[i]);
    for (let j = 0; j < myArr[i].length; j++) {
        //console.log(myArr[i][j]);
    }
}
//TĂNG 5 LẦN TRONG VÒNG LẶP
for(let i = 100; i>=0; i-=5){
    //console.log(i);
}
