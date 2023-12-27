import emojiJaObject from "../lib/data/emoji_ja.json" assert { type: "json" };
import * as nodeEmoji from "node-emoji";

export default class Emoji {
  constructor() {}

  static search(emojiJaName) {
    const array = [];
    for (const keyword in emojiJaObject) {
      // 部分一致
      if (keyword.indexOf(emojiJaName) > -1) {
        array.push(emojiJaObject[keyword]);
      }
    }
    return array.flat();
  }

  static which(emoji) {
    return nodeEmoji.which(emoji, { markdown: true });
  }
}
