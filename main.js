const emojiEnvelope = document.getElementById('emojiEnvelope');
const letterText = document.getElementById('letterText');
const letterBox = document.getElementById('letterBox');

const message = `To You, My Friend—A Gift in Human Form

Your words touched me deeper than you may know,
Like rain on dry earth, they helped my spirit grow.
From the moment we met, something just felt right—
A friendship born not of chance, but of light.

Through laughter and silence, you’ve stood by me 
A safe space, a joy, a calm in life’s sea.
Not many find a friend so rare, so true—
But somehow, God knew I needed you.

Our bond is more than casual chats and shared days,
It’s in the small things, the loyal, quiet ways.
In a world that often rushes by and forgets,
You are the soul who remembers, who never regrets.

They might question why we’re close or how,
But I thank heaven we have this now.
Let them wonder—our friendship won’t bend,
We were built to last, my forever friend.

We’ll rise through deadlines, exams, and stress,
Helping each other give nothing but our best.
And when we finally look back and smile,
It'll be worth every late night and every mile.

So here’s my vow, simple and true—
No matter where life takes us, I’m grateful for you.
You’re more than a friend— a rare one,
And this bond we share will never cease.
`;

emojiEnvelope.addEventListener('click', () => {
  emojiEnvelope.classList.add('clicked');
  letterBox.style.display = 'block';
  typeWriterEffect(message, 0);
});

```function typeWriterEffect(text, i) {
  if (i < text.length) {
    letterText.textContent += text.charAt(i);
    setTimeout(() => typeWriterEffect(text, i + 1), 4);
  }
}```

// Floating emojis
const emojiContainer = document.getElementById("emojiContainer");
const emojis = ["❤️", "💌", "💕", "💖", "💘", "❣️", "❤️‍🔥"];

for (let i = 0; i < 80; i++) {
  const emoji = document.createElement("span");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.top = Math.random() * 100 + "vh";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
  emoji.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
  emojiContainer.appendChild(emoji);
}
function typeWriterEffect(text, i) {
  if (i < text.length) {
    letterText.textContent += text.charAt(i);
    letterBox.scrollTop = letterBox.scrollHeight; // Auto-scroll
    setTimeout(() => typeWriterEffect(text, i + 1), 120); // Adjust speed as you like
  }
}