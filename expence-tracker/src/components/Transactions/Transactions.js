import { useDispatch, useSelector } from "react-redux";
import Transaction from "./Transaction";
import { useEffect } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";

export default function Transactions() {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
 
  let content = null;
  if (isLoading) content = <p>loading</p>;
  if (!isLoading && isError) content = <p>Error</p>;
  if (!isLoading && !isError && transactions?.length === 0)
    content = <p>No transaction</p>;
  if (!isLoading && !isError && transactions?.length > 0)
    content = (
      <div>
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </div>
    );

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
