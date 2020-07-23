import React, {useState} from 'react';

import './styles.css';
import App from '../../App';
import api from '../../services/api'
//import { FiChevronRight } from "react-icons/fi";

export default function Dashboard() {
    const [ newProfile, setNewProfile ] = useState('');
    const [ profiles, setProfiles ] = useState([]);


    async function addProfile(event) {
        event.preventDefault();

        const response = await api.get(`/users/${newProfile}`);
        const profile = response.data;

        setProfiles([ ... profiles, profile ]);
        console.log(response);
    }

    return (
     <>
        <form onSubmit={addProfile}>
            <input 
                onChange = {(e) => setNewProfile(e.target.value)}
                placeholder="Digite um perfil" 
            />
            <button type="submit" value="Pesquisar" />
        </form>
        <div className="content">
            {
                profiles.map(profile => 
                    <a key={profile.login} href="#">
                        <img src={profile.avatar_url} />
                        <div>
                            <strong>{profile.name}</strong>
                            <p>{profile.bio}</p>
                        </div>
                    </a>
                )
            }
            
            
        </div>
     </>
    )
}


