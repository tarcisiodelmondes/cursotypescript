import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  hideErrorMessages(form);
  checkForEmptyFields(username, email, password, password2);
  checkEmailIsValid(email);
  checkPassword(password, password2);
  if (shouldSendForm(form)) form.submit();
});

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;

  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, 'Esse campo não pode estar vazio');
  });
}

function checkEmailIsValid(email: HTMLInputElement): void {
  if (email.value === '') return;
  !isEmail(email.value) && showErrorMessage(email, 'Email invalido');
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value === '') return;

  if (password.value.length < 8) {
    showErrorMessage(password, 'Precisa ter no minimo 8 caracteres');
    showErrorMessage(password2, 'Precisa ter no minimo 8 caracteres');
    return;
  }

  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas não são inguais');
    showErrorMessage(password2, 'As senhas não são inguais');
    return;
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));

  return send;
}
