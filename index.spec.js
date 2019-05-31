"use strict";

const journey = require("./index.js");

const expectedResult = [{
    name: 'Chelsea',
    wins: 30,
    draws: 3,
    losses: 5,
    goalsFor: 85,
    goalsAgainst: 33,
    goalDifference: function () {
        return this.goalsFor - this.goalsAgainst;
    },
    points: 93,
    rank: 1
},
    {
        name: 'Tottenham Hotspur',
        wins: 26,
        draws: 8,
        losses: 4,
        goalsFor: 86,
        goalsAgainst: 26,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 86,
        rank: 2
    },
    {
        name: 'Manchester City',
        wins: 23,
        draws: 9,
        losses: 6,
        goalsFor: 80,
        goalsAgainst: 39,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 78,
        rank: 3
    },
    {
        name: 'Liverpool',
        wins: 22,
        draws: 10,
        losses: 6,
        goalsFor: 78,
        goalsAgainst: 42,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 76,
        rank: 4
    },
    {
        name: 'Arsenal',
        wins: 23,
        draws: 6,
        losses: 9,
        goalsFor: 77,
        goalsAgainst: 44,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 75,
        rank: 5
    },
    {
        name: 'Manchester United',
        wins: 18,
        draws: 15,
        losses: 5,
        goalsFor: 54,
        goalsAgainst: 29,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 69,
        rank: 6
    },
    {
        name: 'Everton',
        wins: 17,
        draws: 10,
        losses: 11,
        goalsFor: 62,
        goalsAgainst: 44,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 61,
        rank: 7
    },
    {
        name: 'Southampton',
        wins: 12,
        draws: 10,
        losses: 16,
        goalsFor: 41,
        goalsAgainst: 48,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 46,
        rank: 8
    },
    {
        name: 'Bournemouth',
        wins: 12,
        draws: 10,
        losses: 16,
        goalsFor: 55,
        goalsAgainst: 67,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 46,
        rank: 9
    },
    {
        name: 'West Bromwich Albion',
        wins: 12,
        draws: 9,
        losses: 17,
        goalsFor: 43,
        goalsAgainst: 51,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 45,
        rank: 10
    },
    {
        name: 'West Ham United',
        wins: 12,
        draws: 9,
        losses: 17,
        goalsFor: 47,
        goalsAgainst: 64,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 45,
        rank: 11
    },
    {
        name: 'Leicester City',
        wins: 12,
        draws: 8,
        losses: 18,
        goalsFor: 48,
        goalsAgainst: 63,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 44,
        rank: 12
    },
    {
        name: 'Stoke City',
        wins: 11,
        draws: 11,
        losses: 16,
        goalsFor: 41,
        goalsAgainst: 56,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 44,
        rank: 13
    },
    {
        name: 'Crystal Palace',
        wins: 12,
        draws: 5,
        losses: 21,
        goalsFor: 50,
        goalsAgainst: 63,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 41,
        rank: 14
    },
    {
        name: 'Swansea',
        wins: 12,
        draws: 5,
        losses: 21,
        goalsFor: 45,
        goalsAgainst: 70,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 41,
        rank: 15
    },
    {
        name: 'Burnley',
        wins: 11,
        draws: 7,
        losses: 20,
        goalsFor: 39,
        goalsAgainst: 55,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 40,
        rank: 16
    },
    {
        name: 'Watford',
        wins: 11,
        draws: 7,
        losses: 20,
        goalsFor: 40,
        goalsAgainst: 68,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 40,
        rank: 17
    },
    {
        name: 'Hull City',
        wins: 9,
        draws: 7,
        losses: 22,
        goalsFor: 37,
        goalsAgainst: 80,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 34,
        rank: 18
    },
    {
        name: 'Middlesbrough',
        wins: 5,
        draws: 13,
        losses: 20,
        goalsFor: 27,
        goalsAgainst: 53,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 28,
        rank: 19
    },
    {
        name: 'Sunderland',
        wins: 6,
        draws: 6,
        losses: 26,
        goalsFor: 29,
        goalsAgainst: 69,
        goalDifference: function () {
            return this.goalsFor - this.goalsAgainst;
        },
        points: 24,
        rank: 20
    }];

describe("Premier League application", function () {

    it("output should equal the expected object of the actual premier league results", function () {

        expect(journey.table.toString()).toEqual(expectedResult.toString());

    });
});

