var msg = undefined;

msg = String(msg).trim();

switch (msg) {
  case "cf":
    // cloud foundry
    console.log('cf');
    break;
  case "neo":
  default:
    console.log('neo');
}