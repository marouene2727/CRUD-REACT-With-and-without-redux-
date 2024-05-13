import { useEffect, useState } from "react"


function Home() {
    const [showMessage,setShowMessage] = useState(true);

    useEffect(() => {
        // Après 3 secondes, définir showMessage à false
        const timeoutId = setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        // Nettoyer le timeout si le composant est démonté
        return () => clearTimeout(timeoutId);
    }, []);



  return (
    <>
     <h1>Home</h1>
    {showMessage && <p>Bienvenue !!!</p>}
    
    </>
  )
}

export default Home