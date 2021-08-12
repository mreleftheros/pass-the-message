const messageForm = document.getElementById("messageForm");
const msg = document.getElementById("msg");
const output = document.getElementById("output");

const submitMessageForm = e => {
  e.preventDefault(); // prevent default form submit
  let value = e.target.message.value;
  
  if (value.length === 0) return; // simple check

  e.target.reset(); // reset form fields
};

// events
messageForm.addEventListener("submit", submitMessageForm);