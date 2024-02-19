import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import {Main} from "./layout/sections/main/Main";
import {Skill} from "./layout/sections/skills/skill/Skill";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Contact} from "./layout/sections/contact/Contact";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

