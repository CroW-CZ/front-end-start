/**
 * Created by CroW-CZ on 2015-04-02.
 */

var boxoffice = 'http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=1';

var listTemplate = document.getElementById("listTemplate").innerHTML;

getJSON(boxoffice, function(data){

    console.log(data);
    var html = tmpl(listTemplate, {list: data.data});

    document.getElementById("wrap").innerHTML = html;
});