
import './ChatWindow.css';

import React, { useEffect, useRef, useState } from 'react';
// import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

function ChatWindow({ onChatClick }) {

// 채팅 복붙
const [messages, setMessages] = useState([]);
const [inputMessage, setInputMessage] = useState('');
const [stompClient, setStompClient] = useState(null);

// 채팅방, 사용자 번호 랜덤으로 만들기
const chatRoomIdRef = useRef(Math.floor(Math.random() * 2) + 1);
const memberIdRef = useRef(Math.floor(Math.random() * 9) + 1);
const chatRoomId = chatRoomIdRef.current;
const memberId = memberIdRef.current;

useEffect(() => {
    
    // const socket = new SockJS('http://localhost:8080/ws-stomp');
    const client = new Client({
        brokerURL: 'ws://localhost:8080/ws', // SockJS 대신 WebSocket URL 사용
        reconnectDelay: 5000,
        // webSocketFactory: () => socket,
        onConnect: (frame) => {
            console.log('Connected: ' + frame);

            // 구독 설정
            client.subscribe(`/sub/chat/${chatRoomId}`, (messageOutput) => {
                const msg = JSON.parse(messageOutput.body);
                // console.log(msg);
                setMessages((prevMessages) => [...prevMessages, msg]);
            });
        },
        onStompError: (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
        },
    });

    client.activate();
    setStompClient(client);

    return () => {
        client.deactivate();
    };
}, []);

const sendMessage = () => {
    if (stompClient && inputMessage.trim() !== '') {
        stompClient.publish({
            destination: `/pub/chat/message/${chatRoomId}/${memberId}`,
            body: JSON.stringify({ message: inputMessage }),
        });
        // console.log(message);
        // console.log(body);
        // console.log(inputMessage);
        setInputMessage('');
    }
};

// 채팅 복붙



  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>Chat</h2>
        <button className="close-button" onClick={onChatClick}>
          닫기
        </button>
      </div>
      <div className="chat-body">
        {/* <h1>Chat Page</h1>
        <h2>채팅방 번호 : {chatRoomId}</h2>
        <h2>사용자 번호 : {memberId}</h2> */}
        <div>
            {messages.map((msg, index) => (
                <div className='message' key={index}>
                    <div>사용자{msg.memberId}</div>
                    <div>{msg.message}</div>
                </div>
            ))}
        </div>
      </div>
      <div className='inputbox'>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="메시지를 입력하세요"
            />
            <button onClick={sendMessage}>전송</button>
        </div>
    </div>
  );
}

export default ChatWindow;