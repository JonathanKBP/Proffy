import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/60829107?s=460&u=cb3a5b2374b5a035e1b07e548bff872013ff9a93&v=4" alt="avatar"/>
                <div>
                    <strong>Jonathan Kevin</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores recnologias de química avançada.
                <br /> <br />
                Apaixonada por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiencias.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;