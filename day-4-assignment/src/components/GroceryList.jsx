export function GroceryList({ title, id, handleDelete }) {
  return (
    <div>
      <h3>{title}</h3>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
