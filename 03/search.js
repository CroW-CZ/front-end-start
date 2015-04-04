/**
 * Created by CroW-CZ on 2015-04-03.
 */
var apikey = '3ea3cdfdb0cb12b17cb9beaa50bcf1ae';
var nowPage = 1;
var searchingKeyword = '';

var searchForm =  document.getElementById('searchForm');
var keyword = document.getElementById('keyword');
var itemList = document.getElementById('itemList');
var more = document.getElementById('moreBtn');

var itemTemplate = document.getElementById('itemTemplate').innerHTML;

var moreBtn = document.createElement('button');
moreBtn.innerHTML = 'show more';

function search(q){
    var url = 'https://apis.daum.net/search/web?apikey='+apikey+'&q='+q+'&output=json&result=10&pageno='+nowPage;
    getJSON(url, displayItem);
}

function displayItem(data){
    var html = tmpl(itemTemplate, {items : data.channel.item});
    itemList.innerHTML += html;
    more.appendChild(moreBtn);
    if(nowPage >= 500){
        more.removeChild(moreBtn);
    }
}

searchForm.addEventListener('submit', function() {
    nowPage = 1;
    itemList.innerHTML = '';
    search(keyword.value);
    searchingKeyword = keyword.value;
});

moreBtn.addEventListener('click', function(){
    nowPage++;
    search(searchingKeyword);
})