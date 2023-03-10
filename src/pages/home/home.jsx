import React, { useState } from 'react';
import Logo from '../../assets/logo.svg'
import './home.css';
import CryptoJS from 'crypto-js';
import { useParams } from 'react-router-dom';




function Home(props) {
    function cifrar(texto, clave) {
        let textodecifrado = CryptoJS.AES.decrypt(texto, clave).toString(CryptoJS.enc.Utf8)
        setText(textodecifrado)
    }
    const [text, setText] = useState("")
    return (
        <div>
            <nav className='navbar'>
                <img src={Logo} className='logo' />
                <span className='titleLogo'>Unlock</span>
            </nav>
            <div className='introContainer'>
                <div className='textareaContainer'>
                    <span className='subTitle'>Encriptado</span>
                    <textarea className='inputEncrypt in' id='textcrypt' />
                </div>
                <div className='claveContainer'>
                    <span className='subTitle'>Clave</span>
                    <input placeholder='######' className='input in' id='key'></input>
                </div>
            </div>
            <div className='buttonContainer'>
                <button className='buttonEncrypt' onClick={() => { cifrar(textcrypt.value, key.value) }} >Desencriptar</button>
            </div>
            <div className='desencryptContainer'>
                <span className='subTitle' >Desencriptado</span>
                <a href={text} target="_blank">{text}</a>
            </div>
        </div>
    );
}



export default Home;