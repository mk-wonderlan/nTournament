﻿var nTournamentServices = angular.module('nTournamentServices', ['ngResource']);

nTournamentServices.service('Tournament',['$resource',
function ($resource) {
  var tournamentlist =[];
  var resourceData = $resource('/api/tourData');
  tournamentlist = resourceData.query();

this.tournaments = function () {
    return tournamentlist;
};
this.tournament = function (tournamentId) {
    return Enumerable.From(tournamentlist).SingleOrDefault(null,function(i) { return i.tournamentId == tournamentId; });
}
this.addTournament = function (tournament) {
    tournamentlist.push(tournament);
    console.log(tournamentlist);

}
}
]);
nTournamentServices.service('News',['$resource',
function ($resource){
  var newslist = [];
  var newsData = $resource('/data/news.json');
  newslist = newsData.query();

  this.news = function () {
    return newslist;
  }
  this.addnewsdata = function (news) {
      newslist.push(news);
  }
}
]);
