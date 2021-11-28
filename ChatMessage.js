function ChatMessage({ data }) {
    return (
        <div className="chat-message">
            <div className="user-info">
                <div className="username">{data.username} </div>
                <div className="email"> {data.email}</div>
                <div className="email"> - id: {data.id}</div>
            </div>
            <div className="message">
                {data.content}
            </div>
            <div className="like-btn">
                <div className="like-icon-container">
                    <div className="like-icon"></div>
                </div>
                <div className="like-amount">{data.nolikes}</div>
            </div>
            <div className="date-info">
                {data.posted}
            </div>
        </div>
    )
}
