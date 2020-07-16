let data = []
// lay title bai bao so sanh
// id = 1;
// while (id) {

//     x = document.getElementById(`title${id}`)
//     if(!x) break
//     console.log(x.title)
//     console.log(id)
//     id++
//     0
// }



//cho bao vao object
// moi trang se co dong title danh sau tu 1 den 1 so nao do,
id = 1;
while (id) {
    x = document.getElementById(`title${id}`)
    if (!x) break
    console.log(id)
    var temp = {
        title: x.title,
        link: x.href,
    }
    data.push(temp)
    id++
}
console.log(data)
// // localStorage.setItem("allData",JSON.stringify(data))
// //sau khi co duoc data cua trang hien tai dang xet, 
// //lay ra data tu localstorage, push them vao data do
// var bigData = JSON.parse(localStorage.getItem("allData"))
// console.log(bigData)
// // //neu k co thi cho vao :D
// if (bigData == null) {
//     localStorage.setItem("allData", JSON.stringify(data))
//     console.log(bigData)
// } else {

//     //neu da co thi push vao nha
//     for (var i = 0; i < data.length; i++) {
//         for (var j = 0; j < bigData.length; j++)
//             if (bigData[j].title != data[i].title)
//                 bigData.push(data[i])
//     }
//     console.log(bigData)
// }
// // //tra lai data to ve local
// localStorage.setItem("allData", JSON.stringify(bigData))

// //localStorage.setItem("dataTitle",JSON.stringify(data))




