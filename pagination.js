const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const Pagination = {
    array : [],
    pageSize : 4,
    currentPage : 1
}
Pagination.init = function (arr,length){
    this.array = arr,
    this.pageSize = length
}
Pagination.getPageItems = function (){
    const firstIndex = (this.currentPage - 1) * this.pageSize
    const lastIndex = firstIndex + this.pageSize
    return this.array.slice(firstIndex, lastIndex)
}
Pagination.getPageItems = function (){
    const firstIndex = (this.currentPage - 1) * this.pageSize
    const lastIndex = firstIndex + this.pageSize
    return this.array.slice(firstIndex, lastIndex)
}
Pagination.prevPage = function(){
    if(this.currentPage > 1) this.currentPage--
    else return "It's a first page"
}
Pagination.nextPage = function(){
    if((this.currentPage + 1) * this.pageSize <= this.array.length) this.currentPage++
    return this
}
Pagination.firstPage = function(){
    this.currentPage = 1
    return this.getPageItems()
}
Pagination.lastPage = function(){
    this.currentPage = Math.ceil(this.array.length/this.pageSize)
    return this.getPageItems()
}
Pagination.gotoPage = function(page){
    if(page <= this.array.length/this.pageSize) {
        this.currentPage = page
        return this.getPageItems()
    }
    return "WHAAAAT??????"
}

Pagination.init(alphabetArray, 3)
Pagination.nextPage().nextPage()
console.log(Pagination.getPageItems())
