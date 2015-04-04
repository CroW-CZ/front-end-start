/**
 * Created by CroW-CZ on 2015-04-03.
 */
var apikey = '3ea3cdfdb0cb12b17cb9beaa50bcf1ae';
var pageNo = 1;
var searchingKeyword = '';

var searchForm =  document.getElementById('searchForm');
var keyword = document.getElementById('keyword');
var itemList = document.getElementById('itemList');
var more = document.getElementById('moreBtn');

var itemTemplate = document.getElementById('itemTemplate').innerHTML;

var moreBtn = document.createElement('button');
moreBtn.innerHTML = 'show more';

function search(q){
    var url = 'https://apis.daum.net/search/web?apikey='+apikey+'&q='+q+'&output=json&result=10&pageno='+pageNo;
    getJSON(url, displayItem);
}

function displayItem(data){
    var html = tmpl(itemTemplate, {items : data.channel.item});

    html = html.replace(/&lt;/g, '<');
    html = html.replace(/&gt;/g, '>');

    itemList.innerHTML += html;
    more.appendChild(moreBtn);
    if(pageNo >= 500){
        more.removeChild(moreBtn);
    }
}

searchForm.addEventListener('submit', function() {
    pageNo = 1;
    itemList.innerHTML = '';
    searchingKeyword = keyword.value;

    if(!searchingKeyword) {
        itemList.innerHTML = 'no result';
        more.removeChild(moreBtn);
        return;
    }
    search(searchingKeyword);
});

moreBtn.addEventListener('click', function(){
    pageNo++;
    search(searchingKeyword);
});