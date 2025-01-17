"use strict"

const LoginUrl = "someUrl"
const CallbackGame = require("./CallbackGame")

/**
 * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 */

class InlineKeyboardButton {
  /**
   *
   * @param {string} text
   * @param {string|null} [url]
   * @param {LoginUrl|null} [loginUrl]
   * @param {string|null} [callbackData]
   * @param {string|null} [switchInlineQuery]
   * @param {string|null} [switchInlineQueryCurrentChat]
   * @param {CallbackGame|null} [callbackGame]
   * @param {boolean|null} [pay]
   */

  constructor(
    text,
    url,
    loginUrl,
    callbackData,
    switchInlineQuery,
    switchInlineQueryCurrentChat,
    callbackGame,
    pay
  ) {
    this._text = text
    this._url = url
    this._loginUrl = loginUrl
    this._callbackData = callbackData
    this._switchInlineQuery = switchInlineQuery
    this._switchInlineQueryCurrentChat = switchInlineQueryCurrentChat
    this._callbackGame = callbackGame
    this._pay = pay
  }

  /**
   * Label text on the button
   * @returns {string}
   */

  get text() {
    return this._text
  }

  /**
   * HTTP or tg:// url to be opened when button is pressed
   * @returns {string|null}
   */

  get url() {
    return this._url
  }

  /**
   * An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
   * @returns {LoginUrl|null}
   */

  get loginUrl() {
    return this._loginUrl
  }

  /**
   * Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
   * @returns {string|null}
   */

  get callbackData() {
    return this._callbackData
  }

  /**
   * If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
   * @returns {string|null}
   */

  get switchInlineQuery() {
    return this._switchInlineQuery
  }

  /**
   * If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot’s username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
   * @returns {string|null}
   */

  get switchInlineQueryCurrentChat() {
    return this._switchInlineQueryCurrentChat
  }

  /**
   * Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row.
   * @returns {CallbackGame|null}
   */

  get callbackGame() {
    return this._callbackGame
  }

  /**
   * Specify True, to send a Pay button.NOTE: This type of button must always be the first button in the first row.
   * @returns {boolean|null}
   */

  get pay() {
    return this._pay
  }

  /**
   *
   * @param {Object} raw
   * @returns {InlineKeyboardButton}
   */

  static deserialize(raw) {
    return new InlineKeyboardButton(
      raw["text"],
      raw["url"] ? raw["url"] : null,
      raw["login_url"] ? LoginUrl.deserialize(raw["login_url"]) : null,
      raw["callback_data"] ? raw["callback_data"] : null,
      raw["switch_inline_query"] ? raw["switch_inline_query"] : null,
      raw["switch_inline_query_current_chat"]
        ? raw["switch_inline_query_current_chat"]
        : null,
      raw["callback_game"]
        ? CallbackGame.deserialize(raw["callback_game"])
        : null,
      raw["pay"] ? raw["pay"] : null
    )
  }

  /**
   *
   * @returns {Object}
   */

  serialize() {
    return {
      text: this.text ? this.text : undefined,
      url: this.url ? this.url : undefined,
      login_url: this.loginUrl ? this.loginUrl.serialize() : undefined,
      callback_data: this.callbackData ? this.callbackData : undefined,
      switch_inline_query: this.switchInlineQuery
        ? this.switchInlineQuery
        : undefined,
      switch_inline_query_current_chat: this.switchInlineQueryCurrentChat
        ? this.switchInlineQueryCurrentChat
        : undefined,
      callback_game: this.callbackGame
        ? this.callbackGame.serialize()
        : undefined,
      pay: this.pay ? this.pay : undefined
    }
  }

  /**
   *
   * @returns {string}
   */

  toJSON() {
    return this.serialize()
  }
}

module.exports = InlineKeyboardButton
