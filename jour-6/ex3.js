var prompt = require("prompt");

var properties = [
  {
    name: "email",
    validator: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    warning: "L'email doit être au bon format"
  },
  {
    name: "username",
    validator: /^[A-Za-z0-9]+(?:[ -][A-Za-z0-9]+)*$/,
    warning: "Le username ne doit contenir que des lettres, nombres et tirets"
  },
  {
    name: "password",
    validator: /(?=.*\d)(?=.*[a-z])[a-zA-Z0-9]{6,}/,
    warning: "Le password doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets",
    hidden: true,
    replace: "*"
  },
];

prompt.start(); // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return 1;
}

prompt.get(properties, function checkProfile(err, res) {
  if (err) {
		return onErr(err);
	}

  console.log("All good !");
  
});