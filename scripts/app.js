const messageForm = document.getElementById("messageForm");
const msg = document.getElementById("msg");
const output = document.getElementById("output");

// function that submits the form
const submitMessageForm = e => {
  e.preventDefault(); // prevent default form submit
  let value = e.target.message.value;
  
  if (value.length === 0) return; // simple check

  updateMessageUI(value);

  e.target.reset(); // reset form fields
};

const updateMessageUI = value => {
  output.innerHTML = `<strong>${value}</strong>`;
  msg.innerHTML = `<em>Last Message Delivered</em>`;

  setTimeout(() => {
    msg.innerHTML = "";
  },1500)
};

// events
messageForm.addEventListener("submit", submitMessageForm);