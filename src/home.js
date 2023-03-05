// import Buns from "./buns.jpg";

export default function home() {
  const content = document.querySelector("#content");

  const contactInfo = document.createElement("div");
  contactInfo.id = "contactInfo";

  const contactTitle = document.createElement("h1");
  contactTitle.id = "contactTitle";
  contactTitle.textContent = "Contact Us";

  const addressDiv = document.createElement("div");
  addressDiv.id = "addressDiv";
  addressDiv.textContent = "Visit Us";

  const address = document.createElement("div");
  address.id = "address";
  address.textContent =
    "Buns Buns Buns\n12345 Miroco Way\nButterville, MD\n 88888";

  addressDiv.appendChild(address);

  const phoneDiv = document.createElement("div");
  phoneDiv.id = "phoneDiv";
  phoneDiv.textContent = "Call Us";

  const phone = document.createElement("div");
  phone.id = "phone";
  phone.textContent = "(555) 888-0000";

  phoneDiv.appendChild(phone);

  const contactForm = document.createElement("form");
  contactForm.id = "form";
  contactForm.textContent = "Write Us";

  const nameForm = document.createElement("input");
  nameForm.id = "nameForm";
  nameForm.setAttribute("type", "text");
  nameForm.setAttribute("placeholder", "Name");

  const nameFormLabel = document.createElement("label");
  nameFormLabel.id = "nameFormLabel";
  nameFormLabel.setAttribute("for", "nameForm");
  nameFormLabel.textContent = "Name: ";

  const emailForm = document.createElement("input");
  emailForm.id = "emailForm";
  emailForm.setAttribute("type", "email");
  nameForm.setAttribute("placeholder", "email@email.com");

  const emailFormLabel = document.createElement("label");
  emailFormLabel.id = "emailFormLabel";
  emailFormLabel.setAttribute("for", "emailForm");
  emailFormLabel.textContent = "Email: ";

  const phoneForm = document.createElement("input");
  phoneForm.id = "phoneForm";
  phoneForm.setAttribute("type", "phone");
  nameForm.setAttribute("placeholder", "(555) 555-5555");

  const phoneFormLabel = document.createElement("label");
  phoneFormLabel.id = "emailFormLabel";
  phoneFormLabel.setAttribute("for", "phoneForm");
  phoneFormLabel.textContent = "Phone: ";

  const textForm = document.createElement("input");
  textForm.id = "textForm";
  textForm.setAttribute("type", "text");
  textForm.setAttribute("placeholder", "Write your concerns here");

  const textFormLabel = document.createElement("label");
  textFormLabel.id = "textFormLabel";
  textFormLabel.setAttribute("for", "textForm");
  textFormLabel.textContent = "Message: ";

  contactForm.appendChild(nameFormLabel);
  contactForm.appendChild(nameForm);
  contactForm.appendChild(emailFormLabel);
  contactForm.appendChild(emailForm);
  contactForm.appendChild(phoneFormLabel);
  contactForm.appendChild(phoneForm);
  contactForm.appendChild(textFormLabel);
  contactForm.appendChild(textForm);

  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(addressDiv);
  contactInfo.appendChild(phoneDiv);
  contactInfo.appendChild(contactForm);

  content.appendChild(contactInfo);
}
