import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTransaction,
  createTransaction,
} from "../features/transaction/transactionSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, isError, error, editing } = useSelector(
    (state) => state.transaction
  );
  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };
  useEffect(() => {
    const { id, name, amount, type } = editing || {};
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      setEditMode(false);
      reset();
    }
  }, [editing]);

  const cancelEditMode = () => {
    reset();
    setEditMode(false);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name,
        type,
        amount: Number(amount),
      })
    );
    reset();
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: editing?.id,
        data: {
          id: editing?.id,
          name,
          type,
          amount: Number(amount),
        },
      })
    );
    setEditMode(false);
    reset();
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={!editMode ? handleCreate : handleUpdate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="transaction_name"
            placeholder="My Salary"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label>Type</label>
          <div className="radio_group">
            <input
              required
              type="radio"
              value="income"
              name="type"
              checked={type === "income"}
              onChange={(e) => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
              required
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="300"
            name="transaction_amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} type="submit" className="btn">
          {editMode ? "Update Transaction" : "Add Transaction"}
        </button>
        {!isLoading && isError && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {editMode && (
        <button onClick={cancelEditMode} className="btn cancel_edit">
          Cancel Edit
        </button>
      )}
    </div>
  );
}
