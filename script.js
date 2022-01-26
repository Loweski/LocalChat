"use strict";

const username = "Hawa";

const menuScreen = document.querySelector("#menu");

const sendMessageButton = document.querySelector("#submitmsg");

const inputMessage = document.querySelector("#usermsg");

const chatBox = document.querySelector("#chatbox");

sendMessageButton.addEventListener("click", function (e) {
  e.preventDefault();
  const message = document.createTextNode(`: ${inputMessage.value}`);
  const boldName = document.createTextNode(username);

  const boldTag = document.createElement("strong");
  boldTag.appendChild(boldName);

  const messageTag = document.createElement("p");
  messageTag.appendChild(boldTag);
  messageTag.appendChild(message);

  chatBox.appendChild(messageTag);

  inputMessage.value = "";
});

const hideChat = function () {
  menuScreen.getElementsByClassName.opacity = 100;
};
hideChat();
