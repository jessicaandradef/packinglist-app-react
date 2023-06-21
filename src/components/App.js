import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [itens, setItem] = useState([]);

  function handleAddItens(item) {
    setItem((itens) => [...itens, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);

    setItem((itens) => itens.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItens={handleAddItens} />
      <PackingList
        itens={itens}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats itens={itens} />
    </div>
  );
}
