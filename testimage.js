// All this is to test sending attachments.
// Send function is copied from osa-imessage, all credit goes there.
// Link in README.md

const assert = require('assert')
const osa = require('osa2')

let send = (handle, message) => {
  assert(typeof handle == 'string', 'handle must be a string')
  return osa((handle, message) => {
    const Messages = Application('Messages')

    let target

    try {
      target = Messages.buddies.whose({ handle: handle })[0]
    } catch (e) {}

    try {
      target = Messages.textChats.byId('iMessage;+;' + handle)()
    } catch (e) {}

    try {
      Messages.send(Path(message), { to: target })
    } catch (e) {
      throw new Error(e)
    }
  })(handle, message)
}

send('+17047926351', '/Users/Ryan/Desktop/compiling.png')

