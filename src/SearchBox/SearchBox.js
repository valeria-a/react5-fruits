import { useState } from "react"

export default function SearchBox(props) {

    const [userInput, setUserInput] = useState("")

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.onUserSearchSubmit(userInput)
        }}>
            <input 
                type='text' 
                placeholder="insert fruit or veg" 
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                />
            <button type="submit">SEARCH</button>
        </form>
    // <p>SearchBox Title: {props.myTitle}</p>
    )
}