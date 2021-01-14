

export const addToList=(enteredList)=>({
    type: "ADD_TO_LIST", 
    payload:enteredList
}
)
export const displayList=(enteredList)=>({
    type: "DISPLAY_LIST", 
    payload:enteredList
}
)