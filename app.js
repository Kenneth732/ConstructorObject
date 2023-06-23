
// Contact constructor function
function Contact(name, phoneNumber, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
  
  // Sample contact data
  var contacts = [
    new Contact("John Doe", "1234567890", "john@example.com"),
    new Contact("Jane Smith", "0987654321", "jane@example.com"),
    // Add more sample contacts here
  ];
  
  
  // Function to display contacts
  function displayContacts() {
    var contactsContainer = document.getElementById("contacts");
    contactsContainer.innerHTML = "";
  
    contacts.forEach(function(contact) {
      var contactElement = document.createElement("div");
      contactElement.innerHTML = "<h3>" + contact.name + "</h3>" +
        "<p>Phone: " + contact.phoneNumber + "</p>" +
        "<p>Email: " + contact.email + "</p>";
  
      contactsContainer.appendChild(contactElement);
    });
  }
  