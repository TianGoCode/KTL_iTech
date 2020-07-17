
var bigData = JSON.parse(localStorage.getItem("allData"))
var keyWord = localStorage.getItem("kw").replace(/"/g, "")


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
// console.log(bigData)
// console.log(toShow)
var html = ""
for (var i = 0; i < toShow.length; i++) {
    html += `
    <div class="row justify-content-center">
        <div class="col-sm-6"> <a class="hoverText" href=${toShow[i].link}><h4>${toShow[i].title}</h4></a><br></br>
    </div>
    </div>`
}
document.getElementById('search-content').innerHTML = html


