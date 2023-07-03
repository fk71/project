const form = document.querySelector("form");
const nameField = form.querySelector(".name-field");
const nameInput = nameField.querySelector(".name");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const passwordField = form.querySelector(".password-field");
const passwordInput = passwordField.querySelector(".password");
const cpasswordField = form.querySelector(".cpassword-field");
const cpasswordInput = cpasswordField.querySelector(".cpassword");

function Namev() {
  const nregx = /^[a-zA-Z]+$/;
  const validName = nameInput.value.trim();
  if (!validName.match(nregx) || validName.lenth < 3) {
    return nameField.classList.add("invalid");
  } 
   return nameField.classList.remove("invalid");

  
}

function Emailv() {
  const eregx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const validEmail = emailInput.value.trim();
  if (!validEmail.match(eregx)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

function Passwordv() {
  const Pregx = /^[a-zA-Z]\w{3,14}$/;
  const validpassword = passwordInput.value.trim();
  if (!validpassword.match(Pregx)) {
    return passwordField.classList.add("invalid");
  } else {
    passwordField.classList.remove("invalid");
  }
}



function Cpasswordv() {
  const validpassword = passwordInput.value.trim();
  const validCpassword = cpasswordInput.value;
  if (!validCpassword.match(validpassword) || validCpassword === "") {
    return cpasswordField.classList.add("invalid");
  }
  cpasswordField.classList.remove("invalid");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  Namev();
  Emailv();
  Passwordv();
  Cpasswordv();

  nameInput.addEventListener("keyup", Namev);
  emailInput.addEventListener("keyup", Emailv);
  passwordInput.addEventListener("keyup", Passwordv);
  cpasswordInput.addEventListener("keyup", Cpasswordv);
});


// const form = document.querySelector("form")
// const nameField = form.querySelector(".name-field")
// const nameInput = nameField.querySelector(".name")
// const emailField = form.querySelector(".email-field")
// const emailInput = emailField.querySelector(".email")
// const passwordField = form.querySelector(".password-field")
// const passwordInput = passwordField.querySelector(".password")
// const cpasswordField = form.querySelector(".cpassword-field")
// const cpasswordInput = cpasswordField.querySelector(".cpassword")

// function sendData(nameValue, sRate, count) {
//   if (sRate === count) {
//     alert("login successfull");
//     swal("Welcome!" + nameValue, "Registration successful", "success");
//   }
// }

// function success(nameValue) {
//   let valid = document.querySelectorAll(".field");
//   var count = valid.length - 1;
//   for (var i = 0; i < valid.length; i++) {
//     if (valid[i].classList.contains(!"invalid")) {
//       var sRate = 0 + i;
//       sendData(nameValue, sRate, count);
//     } else {
//       return false;
//     }
//   }
// }

// function validateForm() {
// //   const namePattern = /^[a-zA-Z]+$/;
//   const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//   const passPattern = /^[a-zA-Z]\w{3,14}$/;

//   const nameValue = nameInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value;
//   const cpasswordValue = cpasswordInput.value;

//   if (!nameValue.match(namePattern) || nameValue.length < 3) {
//     nameField.classList.add("invalid");
//   } else {
//     nameField.classList.remove("invalid");
//   }

//   if (!emailValue.match(emailPattern)) {
//     emailField.classList.add("invalid");
//   } else {
//     emailField.classList.remove("invalid");
//   }

//   if (!passwordValue.match(passPattern)) {
//     passwordField.classList.add("invalid");
//   } else {
//     passwordField.classList.remove("invalid");
//   }

//   if (passwordValue !== cpasswordValue || cpasswordValue === "") {
//     cpasswordField.classList.add("invalid");
//   } else {
//     cpasswordField.classList.remove("invalid");
//   }
//   success(nameValue);
// }









// const eyeIcon = document.querySelectorAll(".show-hide")

// eyeIcon.forEach(eyeIcon => {
// 	eyeIcon.addEventListener("click", () => {
// 		const parentInput = eyeIcon.parentElement.querySelector("input")
// 		if (parentInput.type === "password") {
// 			eyeIcon.classList.replace("bi-eye-slash", "bi-eye-fill")
// 			return parentInput.type = "text"
// 		}
// 		eyeIcon.classList.replace("bi-eye-fill", "bi-eye-slash")
// 		parentInput.type = "password"
// 	})
// })

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   validateForm();

//   nameInput.addEventListener("keyup", validateForm);
//   	emailInput.addEventListener("keyup", validateForm);
//   	passwordInput.addEventListener("keyup", validateForm);
//   	cpasswordInput.addEventListener("keyup", validateForm);
// })
//  </script> -->



// const form = document.querySelector("form")
// const nameField = form.querySelector(".name-field")
// const nameInput = nameField.querySelector(".name")
// const emailField = form.querySelector(".email-field")
// const emailInput = emailField.querySelector(".email")
// const passwordField = form.querySelector(".password-field")
// const passwordInput = passwordField.querySelector(".password")
// const cpasswordField = form.querySelector(".cpassword-field")
// const cpasswordInput = cpasswordField.querySelector(".cpassword")



// // function checkName() {
// // 	const namePattern = /^[a-zA-Z]+$/;
// // 	const nameValue = nameInput.value.trim();
// // 	if (!nameValue.match(namePattern)) {
// // 		nameField.classList.add("invalid");
// // 		return
// // 	}
// // 	if (nameValue.length < 3) {
// // 		nameField.classList.add("invalid");
// // 		return
// // 	}
// // 	nameField.classList.remove("invalid")

// // }

// // function checkEmail() {
// // 	const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
// // 	const emailValue = emailInput.value.trim();
// // 	if (!emailValue.match(emailPattern)) {
// // 		return emailField.classList.add("invalid");

// // 	}
// // 	emailField.classList.remove("invalid")

// // }



// // function checkPass() {
// // 	const passPattern = /^[a-zA-Z]\w{3,14}$/;
// // 	if (!passwordInput.value.match(passPattern)) {
// // 		return passwordField.classList.add("invalid");
// // 	}
// // 	passwordField.classList.remove("invalid")

// // }

// // function conformPass() {
// // 	if (passwordInput.value !== cpasswordInput.value || cpasswordInput.value === "") {
// // 		return cpasswordField.classList.add("invalid");
// // 	}
// // 	cpasswordField.classList.remove("invalid")
// // }

// function sendData(nameValue, sRate, count) {
//   if (sRate === count) {
//     alert("login successfull");
//     swal("Welcome!" + nameValue, "Registration successful", "success");
//   }
// }

// function success(nameValue) {
//   let valid = document.querySelectorAll(".field");
//   var count = valid.length - 1;
//   for (var i = 0; i < valid.length; i++) {
//     if (valid[i].classList.contains(!"invalid")) {
//       var sRate = 0 + i;
//       sendData(nameValue, sRate, count);
//     } else {
//       return false;
//     }
//   }
// }

// function validateForm() {
//   const namePattern = /^[a-zA-Z]+$/;
//   const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//   const passPattern = /^[a-zA-Z]\w{3,14}$/;

//   const nameValue = nameInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value;
//   const cpasswordValue = cpasswordInput.value;

//   if (!nameValue.match(namePattern) || nameValue.length < 3) {
//     nameField.classList.add("invalid");
//   } else {
//     nameField.classList.remove("invalid");
//   }

//   if (!emailValue.match(emailPattern)) {
//     emailField.classList.add("invalid");
//   } else {
//     emailField.classList.remove("invalid");
//   }

//   if (!passwordValue.match(passPattern)) {
//     passwordField.classList.add("invalid");
//   } else {
//     passwordField.classList.remove("invalid");
//   }

//   if (passwordValue !== cpasswordValue || cpasswordValue === "") {
//     cpasswordField.classList.add("invalid");
//   } else {
//     cpasswordField.classList.remove("invalid");
//   }
//   success(nameValue);
// }









// const eyeIcon = document.querySelectorAll(".show-hide")

// eyeIcon.forEach(eyeIcon => {
// 	eyeIcon.addEventListener("click", () => {
// 		const parentInput = eyeIcon.parentElement.querySelector("input")
// 		if (parentInput.type === "password") {
// 			eyeIcon.classList.replace("bi-eye-slash", "bi-eye-fill")
// 			return parentInput.type = "text"
// 		}
// 		eyeIcon.classList.replace("bi-eye-fill", "bi-eye-slash")
// 		parentInput.type = "password"
// 	})
// })




// // form.addEventListener("submit", function (e) {
// // 	e.preventDefault()
// // 	checkName()
// // 	checkEmail()
// // 	checkPass()
// // 	conformPass()



// // 	nameInput.addEventListener("keyup", checkName);
// // 	emailInput.addEventListener("keyup", checkEmail);
// // 	passwordInput.addEventListener("keyup", checkPass);
// // 	cpasswordInput.addEventListener("keyup", conformPass);
// // })
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   validateForm();

//   nameInput.addEventListener("keyup", validateForm);
//   	emailInput.addEventListener("keyup", validateForm);
//   	passwordInput.addEventListener("keyup", validateForm);
//   	cpasswordInput.addEventListener("keyup", validateForm);
// })