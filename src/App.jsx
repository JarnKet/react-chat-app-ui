import moment from "moment";
import { useState } from "react";

function App() {
  const [chats, setChats] = useState([]);
  const [chatText, setChatText] = useState("");

  const handleChatSubmit = () => {
    setChats((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          text: chatText,
          time: new Date().toISOString(),
        },
      ];
    });

    setChatText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChatSubmit();
    }
  };

  return (
    <main className="chat-container">
      <header className="chat-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/640px-Barbieri_-_ViaSophia25668.jpg"
          alt="restaurant "
        />
        <h1>ຮ້ານຄຳສົ່ງປິ້ງໝາ</h1>
      </header>
      <section className="chat-content">
        <div className="received-item">
          <div className="chat-box">
            <p>ຮັກເດີ</p>
            <small>10:00</small>
          </div>
        </div>
        <div className="received-item">
          <div className="chat-box">
            <p>ການອອກແບບທີ່ດີ ແລະ ບໍ່ດີ ແມ່ນເປັນການ...</p>
            <small>10:10</small>
          </div>
        </div>
        {chats.map((chat) => (
          <div className="send-item" key={chat.id}>
            <div className="chat-box">
              <p>{chat.text}</p>
              <small>{moment(chat.time).format("HH:mm")}</small>
            </div>
          </div>
        ))}
      </section>
      <div className="input-container">
        <input type="text" placeholder="ຂໍ້ຄວາມ..." value={chatText} onChange={(e) => setChatText(e.target.value)} onKeyPress={handleKeyPress} />
        <button disabled={!chatText ? true : false} type="button" onClick={handleChatSubmit}>
          Send Message
        </button>
      </div>
    </main>
  );
}

export default App;
