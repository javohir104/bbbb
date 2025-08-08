function addContact() {
  const nameInput = document.getElementById("name");
  const numberInput = document.getElementById("number");

  const name = nameInput.value.trim();
  const number = numberInput.value.trim();

  if (name === "" || number === "") {
    alert("Iltimos, ism va raqamni to‘ldiring.");
    return;
  }

  const contactList = document.getElementById("contactList");

  const contactDiv = document.createElement("div");
  contactDiv.className = "contact";

  contactDiv.innerHTML = `
    <div class="info">
      <strong>${name}</strong><br />
      <small>${number}</small>
    </div>
    <div class="actions">
      <i class="edit">✏️</i>
      <i class="delete">🗑️</i>
    </div>
  `;

  // Delete functionality
  contactDiv.querySelector(".delete").addEventListener("click", () => {
    contactList.removeChild(contactDiv);
  });

  contactList.appendChild(contactDiv);

  // Clear inputs
  nameInput.value = "";
  numberInput.value = "";
}
