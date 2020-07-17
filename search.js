
var bigData = JSON.parse(localStorage.getItem("allData"))
var keyWord = localStorage.getItem("kw")
if (keyWord == null) {
    keyWord = document.getElementById("finding-value").value
    localStorage.setItem("kw", keyWord)
} else {

}
var toShow = []
var change = document.getElementById("search-content")
for (var i = 0; i < bigData.length; i++) {
    var check = bigData[i].title.toUpperCase().indexOf(keyWord.toUpperCase())
    if (check != -1)
        toShow.push(bigData[i])
}
console.log(bigData)
console.log(toShow)
