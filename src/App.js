import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(altura);
    const pesoEmKg = parseFloat(peso);

    if (!alturaEmMetros || !pesoEmKg) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const imc = (pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc >= 18.5 && imc < 24.9) classificacao = 'Peso normal';
    else if (imc >= 25 && imc < 29.9) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    setResultado(`Seu IMC é ${imc} (${classificacao}).`);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>
          Altura (m):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1.75"
          />
        </label>
      </div>
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </label>
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      <p>{resultado}</p>
    </div>
  );
}

export default App;
