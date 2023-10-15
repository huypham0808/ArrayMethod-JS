let courses = [
    { id: 1, name: "Javascript", coin: 250 },
    { id: 2, name: "HTML, CSS", coin: 350 },
    { id: 3, name: "Ruby", coin: 0 },
    { id: 4, name: "PHP", coin: 450 },
    { id: 5, name: "ReactJS", coin: 0 },
    { id: 6, name: "Ruby", coin: 850 },
]
//Các phương thức có sẵn trong Array
//1) forEach - duyệt mảng
courses.forEach((course, index) => {
    //console.log(index, course);
});
//2) every - trả về kết quả boolean (true, false), dùng để kiếm tra các phần tử trong mảng với điều kiện
let isFree = courses.every((course, index) => {
    //console.log(index);
    return course.coin === 0; // Chỉ cần THẰNG ĐẦU sai thì return về false, nếu tất cả từ trên xuống dưới đều đúng thì return true
});
//console.log('Is Free 1: '+ isFree);
let isFree2 = courses.some((course, index) => {
    //console.log(index);
    return course.coin === 0; // Chỉ cần có 1 thằng đúng thì trả về kết quả True, chạy tự trên xuống
});
//console.log('Is Free 2: ' + isFree2);

//3) find - tìm kết quả
let course = courses.find((course, index) => {
    return course.name === "Ruby"; //Return về Object có name = Ruby, chỉ trả về 1 phần tử tìm ra đầu tiên.
});
//console.log(course);

let coursefilter = courses.filter((course, index) => {
    return course.name === "Ruby";
});
//console.log(coursefilter);
//ĐỀ BÀI
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
];
function getMostFavoriteSport(array) {
    return array.filter((item, index) => {
        return item.like > 5;
    })
};
let myResult = getMostFavoriteSport(sports);
//console.log(myResult);
//PHUONG THUC MAP() TRONG ARRAY - THAY DOI ELEMENTS TRONG ARRAY
let newCourse = courses.map((course, index) => {
    return {
        id: course.id,
        name: `Khoá học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá : ${course.coin}`,
        index: index,
        originArray: courses //Trả về array gốc, nếu muốn dùng để tính toán gì đó
    }
});
console.log(newCourse);
//Return về Tên khoá học
let tenKhoaHoc = courses.map((ten, index) => {
    return ten.name;
});
console.log(tenKhoaHoc);

//PHUONG THUC REDUCE() TRONG ARRAY -TRẢ VÊ KẾT QUẢ DUY NHẤT
let i = 0;
function coinHandler(accumulator, currentValue) {
    i++;
    let total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khoá học: ': currentValue.coin,
        'Tích trữ được: ': accumulator + currentValue.coin,
    })
    return total
}
//let total = courses.reduce(coinHandler,0);
//console.log(total);
function handleMedal() {

}
function getTotalGold(array) {
    return array.reduce((a, b) => {
        return a + b.gold;
    }, 0)
};
console.log(getTotalGold(sports));
let inputArr = [1, 2, [3, 4], 5, 6, [7, 8]];
let outputArr = inputArr.reduce((flat, item) => {
    return flat.concat(item);
}, []);
console.log(outputArr);

//Bai tap: Tính rating imdb
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];
let filterFilmByDirector = watchList.filter((film, index) => {
    return film.Director === "Christopher Nolan";
});
//console.log(filterFilmByDirector);

let totalIMDB = filterFilmByDirector.reduce((total, imdb) => {
    return total + parseFloat(imdb.imdbRating);
}, 0);
//console.log("Total " +totalIMDB);
let IMDBTrungBinh = totalIMDB / filterFilmByDirector.length;
//console.log(IMDBTrungBinh);



function calculateRating(arrayListWatch) {
    let filterFilmByDirector = arrayListWatch.filter((film, index) => {
        return film.Director === "Christopher Nolan";
    });
    let totalIMDB = filterFilmByDirector.reduce((total, imdb) => {
        return total + parseFloat(imdb.imdbRating);
    }, 0);
    let IMDBTrungBinh = totalIMDB / filterFilmByDirector.length;
    return IMDBTrungBinh;
}
console.log(calculateRating(watchList));

var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
function arrToObj(arr) {
    return arr.reduce((objectItem, array) => {
        objectItem[array[0]] = array[1];
        return objectItem
    }, {});
}
console.log(arrToObj(arr));

let khoaHoc =['Java','Javascript','AutoCAD','Revit'];
console.log(khoaHoc.includes('Java',0)); //return true
