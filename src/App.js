import './App.css';

function App() {
    const header = ["Acceuil", "Documentation", "Tarification", "À propos" ];

  return (
    <div className="w-full min-h-screen bg-white font-sans">
        <div className="flex items-center justify-between px-35 py-8 max-w-screen-xl mx-auto">
            <img src="logo.svg" alt="logo" />
            <ul className="flex items-center  space-x-8">
                {header.map((libelle,index) =>(
                    <li className="font-sans hover:text-blue-500 hover:underline active:text-blue-500" key={index}>{libelle}</li>
                ))}
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Installer la solution</button>
            </ul>
        </div>
        <div className="flex flex-wrap px-35 py-8 max-w-screen-xl mx-auto justify-between h-auto">
            <div className="flex-1 justify-between ">
                <h1 className="font-extrabold font-sans text-5xl tracking-wide leading-14">Stimulez vos ventes grâce au checkout en 1 clic</h1>
                <p className="font-sans">Activez le checkout en 1 clic sur votre site e-commerce simplement</p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Installer la solution</button>

            </div>
            <div className="flex-1 bg-amber-300">
                ha
            </div>

        </div>
    </div>
  );
}

export default App;
