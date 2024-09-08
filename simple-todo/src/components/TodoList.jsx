import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const filterByStatus = (t) => {
    const { status } = filter;
    switch (status) {
      case 'complete':
        return t.completed
      case 'incomplete':
        return !t.completed

      default:
        return true
    }
  }

  const filterByColor = (t) => {
    const { colors } = filter;
    if (colors.length > 0) {
      return colors.includes(t?.color)
    }
    return true;
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {
        todos
          .filter(filterByStatus)
          .filter(filterByColor)
          .map(t => <Todo key={t.id} t={t} />)
      }
    </div>
  );
}
