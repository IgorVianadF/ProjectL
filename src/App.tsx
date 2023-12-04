import ListGroup from "./componentes/ListGroup";
import Alert from "./componentes/Alert";
import Button from "./componentes/Button";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["Camaragibe", "São Lourenço", "Caxangá", "Recife", "Boa Viagem"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alerta</Alert>
      )}
      <ListGroup
        items={items}
        heading="Cidades"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisibility(true)}>Teste</Button>
    </div>
  );
}

export default App;
