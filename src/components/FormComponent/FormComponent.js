import React, { useState } from 'react';
import { Artilleur } from "../../class/Artilleur"
import { Medecin } from "../../class/Medecin"
import { Sniper } from "../../class/Sniper"


const FormComponent = ({ onAddSoldier }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nationality, setNationality] = useState('');
    const [team, setTeam] = useState('');
    const [soldierType, setSoldierType] = useState('');

    const handleCreateSoldier = (e) => {


        e.preventDefault();
        let newSoldier;
        switch (soldierType) {
            case 'Sniper':
                newSoldier = new Sniper(firstName, lastName, nationality, team);
                break;
            case 'Artilleur':
                newSoldier = new Artilleur(firstName, lastName, nationality, team);
                break;
            case 'Medecin':
                newSoldier = new Medecin(firstName, lastName, nationality, team);
                break;
            default:
                console.error('Type de soldat non pris en charge');
                return;
        }


        onAddSoldier(newSoldier)


        console.log('Nouveau soldat créé:', newSoldier);




    };

    return (
        <form onSubmit={handleCreateSoldier}>
            <label htmlFor="firstName">Prénom :</label><br />
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            /><br /><br />

            <label htmlFor="lastName">Nom :</label><br />
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            /><br /><br />
            <label htmlFor="nationality">Nationalité :</label><br />
            <input
                type="text"
                id="nationality"
                name="nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
            /><br /><br />

            <label htmlFor="team">Équipe :</label><br />
            <input
                type="text"
                id="team"
                name="team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                required
            /><br /><br />

            <label htmlFor="soldierType">Type de Soldat :</label><br />
            <select
                id="soldierType"
                name="soldierType"
                value={soldierType}
                onChange={(e) => setSoldierType(e.target.value)}
                required
            >
                <option value="">Choisissez un type de soldat</option>
                <option value="Sniper">Sniper</option>
                <option value="Artilleur">Artilleur</option>
                <option value="Medecin">Médecin</option>
            </select><br /><br />

            <input type="submit" value="Créer" />
        </form>
    );
};

export default FormComponent;
