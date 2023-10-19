import React from "react";
import './index.css';
import BancoDeDadosBox from './components/BancoDeDadosBox';
import ExcelBox from './components/ExcelBox';
import PythonBox from './components/PythonBox';
import JavaBox from './components/JavaBox';

function App() {
  return(
    <div class="container">
    <div class="cursos">
        <h1>Nossos cursos:</h1>
    </div>
    <div class="border-box">
        <BancoDeDadosBox/>
        <ExcelBox/>
        <PythonBox/>
        <JavaBox/>
    </div>
</div>
  )
};

export default App;
