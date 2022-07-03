import styled from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";
import {useState} from "react";

function App() {

    const [frases, setFrases] = useState(null);

    const reqApi = async () => {
        const api = await fetch(`https://simpsons-quotes-api.herokuapp.com/quotes?count=3`)
        const frases = await api.json()
        setFrases(frases)
    }

    console.log(frases)
    return (
        <Container>
            <Header/>
            {
                !frases ? (
                    <Welcome reqApi={reqApi}  />
                ): (
                    <CharacterContainer characters={frases} reqApi={reqApi} />
                )
            }


        </Container>
    );
}



export default App;
