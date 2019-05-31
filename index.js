"use strict";

const results = require("./en.1.json");

const table = [];

//This function makes the assumption that all teams play on week 1
function createTeamObjects() {

    //Loops through all the first round of games and gets all the unique teams and creates base objects for them with baseline stats
    for (let x = 0; x < results.rounds[0].matches.length; x++) {

        let team1 = results.rounds[0].matches[x].team1.name;
        let team2 = results.rounds[0].matches[x].team2.name;
        table.push({
            name: team1,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            //Function used to calculate goal difference inside object using this keyword to reference own properties
            goalDifference: function () {
                return this.goalsFor - this.goalsAgainst;
            },
            points: 0
        });
        table.push({
                name: team2,
                wins: 0,
                draws: 0,
                losses: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: function () {
                    return this.goalsFor - this.goalsAgainst;
                },
                points: 0
            }
        )
    }
}

//Function to call the calculate round outcomes for every round
function calculateAllRounds(rounds) {

    rounds.forEach(function (round) {
        calculateRoundOutcomes(round);
    })

}

//Calculate the outcomes per round
function calculateRoundOutcomes(round) {

    //ForEach used for readability even though it is slowest looping method.
    round.matches.forEach(function (match) {

        //Checks for draws
        if (match.score1 === match.score2) {
            table.find(function (element) {
                if (element.name === match.team1.name || element.name === match.team2.name) {
                    element.points += 1;
                    element.draws += 1;
                    element.goalsFor += match.score1;
                    element.goalsAgainst += match.score2;
                }
            });

            //Checks for home wins
        } else if (match.score1 > match.score2) {

            table.find(function (element) {

                if (element.name === match.team1.name) {
                    element.points += 3;
                    element.wins += 1;
                    element.goalsFor += match.score1;
                    element.goalsAgainst += match.score2;
                }

                if (element.name === match.team2.name) {
                    element.losses += 1;
                    element.goalsFor += match.score2;
                    element.goalsAgainst += match.score1;
                }
            });

            //Only outcome left is away win
        } else {

            table.find(function (element) {

                if (element.name === match.team2.name) {
                    element.points += 3;
                    element.wins += 1;
                    element.goalsFor += match.score2;
                    element.goalsAgainst += match.score1;
                }

                if (element.name === match.team1.name) {
                    element.losses += 1;
                    element.goalsFor += match.score1;
                    element.goalsAgainst += match.score2;
                }
            });

        }
    })


}

function sortTable() {

    //nested compare functions to sort first by points, then by goal diff then goals scored.
    table.sort((a, b) => (a.points < b.points) ? 1 : (a.points === b.points) ? ((a.goalDifference() < b.goalDifference()) ? 1 : (a.goalDifference() === b.goalDifference()) ? ((a.goalsFor < b.goalsFor) ? 1 : -1) : -1) : -1)

}

//Works out table object then outputs table in console then outputs full object
function main() {

    createTeamObjects();

    calculateAllRounds(results.rounds);

    sortTable();

    table.forEach(function (team, index) {
        team.rank = index +1;
        console.log(team.name, team.rank, team.wins, team.draws, team.losses, team.goalsFor, team.goalsAgainst, team.goalDifference(), team.points);
    });

    console.log(table);
}

main();

//Exports functions and table for testing
module.exports = {
    main: main,
    createTeamObjects: createTeamObjects,
    calculateRoundOutcomes: calculateRoundOutcomes,
    calculateAllRounds: calculateAllRounds,
    sortTable: sortTable,
    table: table
};
