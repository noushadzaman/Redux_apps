const incrementValue0 = document.getElementById(`increment-value-0`);
const decrementValue0 = document.getElementById(`decrement-value-0`);
const btnAddMatch = document.getElementById("add-match-btn");
const resetBtn = document.getElementById("reset-btn");
const matchContainer = document.getElementById("match-container");

const initialState = [
  {
    value: 120,
    serial: 0,
  },
];

const INCREMENT = "Increment";
const DECREMENT = "Decrement";
const MATCH = "Match";
const RESET = "Reset";

function valuesReducer(state = initialState, action) {
  const incrementValue = document.getElementById(
    `increment-value-${action.serial}`
  );
  const decrementValue = document.getElementById(
    `decrement-value-${action.serial}`
  );
  let totalValue = document.getElementById(`total-${action.serial}`);

  if (action.type === INCREMENT) {
    const newState = [...state];
    newState[action.serial].value =
      newState[action.serial].value + Number(incrementValue.value);

    totalValue.innerText = newState[action.serial].value;
    incrementValue.value = "";
    return newState;
  } else if (action.type === DECREMENT) {
    const newState = [...state];
    newState[action.serial].value =
      newState[action.serial].value - Number(decrementValue.value);
    totalValue.innerText = newState[action.serial].value;
    decrementValue.value = "";
    return newState;
  } else if (action.type === MATCH) {
    const newState = [
      ...state,
      {
        value: 120,
        serial: action.serial,
      },
    ];

    return newState;
  } else if (action.type === RESET) {
    initialState.forEach((s) => {
      let totalValue = document.getElementById(`total-${s.serial}`);
      totalValue.innerText = 120;
    });
    const resetState = initialState.map((s) => {
      return {
        ...s,
        value: 120,
      };
    });

    return resetState;
  } else {
    return state;
  }
}

resetBtn.addEventListener("click", () => {
  store.dispatch({
    type: RESET,
  });
});

const store = Redux.createStore(valuesReducer);

decrementValue0.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    store.dispatch({
      type: DECREMENT,
      serial: Number(e.target.id.split("-")[2]),
    });
  }
});

incrementValue0.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    store.dispatch({
      type: INCREMENT,
      serial: Number(e.target.id.split("-")[2]),
    });
  }
});

btnAddMatch.addEventListener("click", () => {
  initialState.push({
    value: 120,
    serial: initialState.length,
  });
  store.dispatch({
    type: MATCH,
    serial: initialState.length,
  });
  const newMatch = document.createElement("div");
  newMatch.innerHTML = `
             <div id="match-${initialState.length - 1}" class="match">
                <div class="wrapper">
                    <h3 id="match-name-${
                      initialState.length - 1
                    }" class="lws-matchName">Match 1</h3>
                </div>
                <div class="inc-dec">
                    <form class="incrementForm">
                        <h4>Increment</h4>
                        <input id="increment-value-${
                          initialState.length - 1
                        }" type="number" name="increment" class="lws-increment" />
                    </form>
                    <form class="decrementForm">
                        <h4>Decrement</h4>
                        <input id="decrement-value-${
                          initialState.length - 1
                        }" type="number" name="decrement" class="lws-decrement" />
                    </form>
                </div>
                <div class="numbers">
                    <h2 class="lws-singleResult" id="total-${
                      initialState.length - 1
                    }">120</h2>
                </div>
            </div>
  `;
  matchContainer.appendChild(newMatch);

  const newIncrementInput = document.getElementById(
    `increment-value-${initialState.length - 1}`
  );
  const newDecrementInput = document.getElementById(
    `decrement-value-${initialState.length - 1}`
  );

  newDecrementInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      store.dispatch({
        type: DECREMENT,
        serial: Number(e.target.id.split("-")[2]),
      });
    }
  });

  newIncrementInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      store.dispatch({
        type: INCREMENT,
        serial: Number(e.target.id.split("-")[2]),
      });
    }
  });

  const matchName = document.getElementById(
    `match-name-${initialState.length - 1}`
  );
  matchName.innerText = `Match ${initialState.length}`;
});
