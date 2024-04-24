
console.log("start");
chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
  if (command === "close") {
  }

});

chrome.action.onClicked.addListener((tab) => {
  console.log(`Command: ${tab}`);
});
