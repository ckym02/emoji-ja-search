#!/usr/bin/env node

import emojiJaObject from '../lib/data/emoji_ja.json' assert { type: "json" };
import * as nodeEmoji from 'node-emoji'

const [, , emojiJaName] = process.argv;

console.log(emojiJaName)

const SearchEmoji = () => {
  const array = []
  for (const emoji in emojiJaObject) {
    const emojiMeta= emojiJaObject[emoji]
    if (emojiMeta.keywords.includes(emojiJaName)) {
      array.push(object)
    }
  }
  return array
}

const emojiArray = SearchEmoji()

emojiArray.forEach((emoji) => {
  console.log(emoji)
  const convertedEmoji = nodeEmoji.which(emoji, { markdown: true })
  console.log(convertedEmoji)
})
