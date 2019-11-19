'use strict'

/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 */

class ChatPermissions {
   /**
    *
    * @param {boolean|null} [canSendMessages]
    * @param {boolean|null} [canSendMediaMessages]
    * @param {boolean|null} [canSendPolls]
    * @param {boolean|null} [canSendOtherMessages]
    * @param {boolean|null} [canAddWebPagePreviews]
    * @param {boolean|null} [canChangeInfo]
    * @param {boolean|null} [canInviteUsers]
    * @param {boolean|null} [canPinMessages]
   */
   constructor(
     canSendMessages, 
     canSendMediaMessages, 
     canSendPolls, 
     canSendOtherMessages, 
     canAddWebPagePreviews, 
     canChangeInfo, 
     canInviteUsers, 
     canPinMessages
   ) {
       this._canSendMessages = canSendMessages
       this._canSendMediaMessages = canSendMediaMessages
       this._canSendPolls = canSendPolls
       this._canSendOtherMessages = canSendOtherMessages
       this._canAddWebPagePreviews = canAddWebPagePreviews
       this._canChangeInfo = canChangeInfo
       this._canInviteUsers = canInviteUsers
       this._canPinMessages = canPinMessages
   }

   /**
    * True, if the user is allowed to send text messages, contacts, locations and venues
    * @returns {boolean|null}
   */
   get canSendMessages() {
       return this._canSendMessages
   }

   /**
    * True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
    * @returns {boolean|null}
   */
   get canSendMediaMessages() {
       return this._canSendMediaMessages
   }

   /**
    * True, if the user is allowed to send polls, implies can_send_messages
    * @returns {boolean|null}
   */
   get canSendPolls() {
       return this._canSendPolls
   }

   /**
    * True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages
    * @returns {boolean|null}
   */
   get canSendOtherMessages() {
       return this._canSendOtherMessages
   }

   /**
    * True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages
    * @returns {boolean|null}
   */
   get canAddWebPagePreviews() {
       return this._canAddWebPagePreviews
   }

   /**
    * True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
    * @returns {boolean|null}
   */
   get canChangeInfo() {
       return this._canChangeInfo
   }

   /**
    * True, if the user is allowed to invite new users to the chat
    * @returns {boolean|null}
   */
   get canInviteUsers() {
       return this._canInviteUsers
   }

   /**
    * True, if the user is allowed to pin messages. Ignored in public supergroups
    * @returns {boolean|null}
   */
   get canPinMessages() {
       return this._canPinMessages
   }

   /**
    *
    * @param {Object} raw
    * @returns {ChatPermissions}
    */
   static deserialize(raw) {
      return new ChatPermissions(
          raw['can_send_messages'] ? raw['can_send_messages'] : null, 
          raw['can_send_media_messages'] ? raw['can_send_media_messages'] : null, 
          raw['can_send_polls'] ? raw['can_send_polls'] : null, 
          raw['can_send_other_messages'] ? raw['can_send_other_messages'] : null, 
          raw['can_add_web_page_previews'] ? raw['can_add_web_page_previews'] : null, 
          raw['can_change_info'] ? raw['can_change_info'] : null, 
          raw['can_invite_users'] ? raw['can_invite_users'] : null, 
          raw['can_pin_messages'] ? raw['can_pin_messages'] : null
      )
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          can_send_messages: this.canSendMessages ? this.canSendMessages : undefined, 
          can_send_media_messages: this.canSendMediaMessages ? this.canSendMediaMessages : undefined, 
          can_send_polls: this.canSendPolls ? this.canSendPolls : undefined, 
          can_send_other_messages: this.canSendOtherMessages ? this.canSendOtherMessages : undefined, 
          can_add_web_page_previews: this.canAddWebPagePreviews ? this.canAddWebPagePreviews : undefined, 
          can_change_info: this.canChangeInfo ? this.canChangeInfo : undefined, 
          can_invite_users: this.canInviteUsers ? this.canInviteUsers : undefined, 
          can_pin_messages: this.canPinMessages ? this.canPinMessages : undefined
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

module.exports = ChatPermissions