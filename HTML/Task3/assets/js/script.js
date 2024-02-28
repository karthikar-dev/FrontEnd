const form = document.getElementById("contactForm");
const captchaImage = document.getElementById("captcha-image");
const captcha = generateCaptcha();
captchaImage.innerHTML = captcha.data;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log("[SUBMIT_DATA]", data);
});

function generateCaptcha() {
  const result = Math.floor(Math.random() * 1000000);
  const data = result
    .toString()
    .split("")
    .map((digit) => `<span>${digit}</span>`)
    .join("");
  return {
    result: result,
    data: data,
  };
}
