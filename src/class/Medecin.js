import { Soldat } from "./Soldat";




export class Medecin extends Soldat {
    constructor(firstname, lastname, nationality, team) {
        super(firstname, lastname, nationality, team)
        this.health = 30
        this.medikit = 4
    }

    capaciteSpe = (s) => {
        if (s instanceof Soldat && s.team === this.team) {
            if (s.pv < 100 && s.pv > 0 && this.medikit > 0) {
                s.pv = s.pv + this.health
                this.medikit = this.medikit - 1
                if (s.pv > 100) {
                    s.pv = 100
                }
            }
        }
    }
}