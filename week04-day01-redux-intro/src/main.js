// 1. Increment: INCREMENT_COUNTER
// 2. Decrement: DECREMENT_COUNTER
import store from './redux/store'
import { incrementCounter, decrementCounter } from './redux/modules/counter'
import { updatedName } from './redux/modules/name'
import { recordData } from './redux/modules/record_count';


let unsubscribe = store.subscribe(() => {
    console.log('something has changed')
    console.log(store.getState().counter)
})


store.dispatch(decrementCounter())
store.dispatch(decrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())

// try console-logging something from the store with store.getState()
unsubscribe();



const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const count = document.getElementById("count");

// How will we initially populate this span with content?
count.textContent = null;

incrementButton.addEventListener("click", () => {
    store.dispatch(incrementCounter())
    count.innerHTML = store.getState().counter.count; 
});

decrementButton.addEventListener("click", () => {
    store.dispatch(decrementCounter())
    count.innerHTML = store.getState().counter.count; 
});





// Import the appropriate action creator

const nameInput = document.getElementById("name");
const countedName = document.getElementById("counted-name");

nameInput.addEventListener("input", event => {
  
    store.dispatch(updatedName())
    countedName.innerHTML = store.getState().name.name; 

  // Dispatch an action (with the input value as an argument)
  // Update the name span text
});

const nameInput = document.getElementById("name");
const countedName = document.getElementById("counted-name");

nameInput.addEventListener("input", event => {
  
    store.dispatch(updatedName())
    countedName.innerHTML = store.getState().name.name; 
})

