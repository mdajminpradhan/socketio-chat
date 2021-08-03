import { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';

// no dotenv
const socket = io.connect('https://buddychat-mern.herokuapp.com');
const username = nanoid(4);

function App() {
	const [ message, setMessage ] = useState('');
	const [ chat, setChat ] = useState([]);

	const sendChat = (e) => {
		e.preventDefault();
		socket.emit('chat', { message, username });
		setMessage('');
	};

	useEffect(() => {
		socket.on('chat', (payload) => {
			setChat([ ...chat, payload ]);
		});
	}, [chat]);

  console.log(chat)

	return (
		<div className="App">
			<header className="App-header">
				<h1>Chatty app</h1>
        <small>A Real-Time chatting application with <span>Socket.Io</span></small>
				{chat.map((payload, index) => {
					return (
						<div key={index} className="message">
							<p>{payload.username} - </p> 
							<p>{payload.message}</p>
						</div>
					);
				})}
				<form onSubmit={sendChat}>
					<input
						type="text"
						name="chat"
						placeholder="Write your message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button type="submit">Send</button>
				</form>
			</header>
		</div>
	);
}

export default App;
