import React from "react";
import '../index.css';
import imagemjava from '../assets/imagemBIG';

function JavaBox(){
    return(
        <div class="box">
                <div class="card">
                /* quinta */
                    <img src={quintaImagem} alt="" />
                    <div>
                        <h2>Java</h2>
                        <h3>Professor: Patricia Mendes</h3>
                    </div>
                </div>
                <div class="descricao">
                    <p>Descrição breve do curso</p>
                </div>
            </div>
    )
};

export default JavaBox;