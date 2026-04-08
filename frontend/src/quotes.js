export const QUOTES = [
  "Small steps every day lead to big results! 💪",
  "You're building a better version of yourself! 🌟",
  "Consistency is the key to success! 🔑",
  "Every habit checked is a win! 🏆",
  "Your future self will thank you! 🙌",
  "Progress over perfection! 🚀",
  "One day at a time, you've got this! ⚡",
  "Champions are built by daily habits! 🥇",
];

export const getRandomQuote = () => QUOTES[Math.floor(Math.random() * QUOTES.length)];