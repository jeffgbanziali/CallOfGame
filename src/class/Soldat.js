export class Soldat {
    constructor(firstname, lastname, nationality, team) {
        this.firstname = firstname
        this.lastname = lastname
        this.nationality = nationality
        this.pv = 100
        this.armor = 0
        this.damage = 15
        this.team = team
    }

    tirer = (s) => {
        if (s instanceof Soldat) {
            if (s.armor > 0) {
                s.armor = s.armor - this.damage
                if (s.armor < 0) {
                    s.armor = 0
                }
            } else {
                if (s.pv > 0) {
                    s.pv = s.pv - this.damage
                } else {
                    console.log("Il est die!")
                }
            }
        }
    }

    capaciteSpe = (s) => {
        if (s instanceof Soldat) {
            console.log("Je suis un noob!")
        }
    }
}