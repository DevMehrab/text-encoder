# Text to Invisible Code Encoder

Convert any visible text into an **invisible sequence** using special Unicode characters like zero-width joiners and spaces. Perfect for **hiding messages in plain sight**, steganography experiments, or just having fun with secret communication!

---

## Features

-  Encode any text into a sequence of invisible Unicode characters
-  Unique invisible code per character
-  Decode back to original text
-  Written in JavaScript, React

---

Each character is mapped to a unique combination of zero-width characters:
- `\u200B` (Zero Width Space)
- `\u200C` (Zero Width Non-Joiner)
- `\u200D` (Zero Width Joiner)
- `\u2060` (Word Joiner)
