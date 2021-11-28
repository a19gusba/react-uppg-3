
/* import { v4 as uuidv4 } from 'uuid'; */

function ChatMessages({ data }) {
    return (
        data.map(data => {
            return <ChatMessage key={1} data={data}></ChatMessage>
        })
    )
}
