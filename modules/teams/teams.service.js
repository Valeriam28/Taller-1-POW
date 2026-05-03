const teamsService = {};

let teams = [];
let counterID= 1;

teamsService.getTeams = () => {
    return teams;
}

teamsService.getTeam = (id) => {
    for (let team of teams) {
        if (team.id === id) return team
    }
    return null;
}

teamsService.addTeam = (name, country, league) => {
    const NewTeam  = {
        id: counterID,
        name: name,
        country: country,
        league: league,
    }
    counterID++;
    teams.push(NewTeam);
    return NewTeam;
}

export default teamsService;