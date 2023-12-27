#!/usr/bin/env node

import Emoji from "./emoji.js";

// Next↓
// エラーハンドリング
// 該当の日本語絵文字がなかった場合
// 該当の英語emojiがなかった場合

const [, , emojiJaName] = process.argv;

console.log(emojiJaName);

const emojiArray = Emoji.search(emojiJaName);

emojiArray.forEach((emoji) => {
  console.log(emoji);
  const convertedEmoji = Emoji.which(emoji);
  console.log(convertedEmoji);
});
