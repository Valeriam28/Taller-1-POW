import teamsService from './teams.service.js';

const teamsController = {};

teamsController.getTeams= (req, res) => {
    const teams = teamsService.getTeams();
    res.status(200).send ({
        teams: teams
    })
}

teamsController.getTeam= (req, res) => {
    const idTeam = req.params.idTeam;
    const team = teamsService.getTeam(idTeam);
    res.status(200).send ({
        team: team
    })
}

teamsController.addTeam = (req, res) => {
    const nameTeam = req.body.name;
    const countryTeam = req.body.country;
    const leagueTeam = req.body.league;

    const team = teamsService.addTeam(nameTeam, countryTeam, leagueTeam);

    res.status(200).send({
        msg: "Done :)", 
        team:team
    })

}

export default teamsController;