// All this is to test sending attachments.
// Send function is copied from osa-imessage, all credit goes there.
// Link in README.md

const assert = require('assert')
const osa = require('osa2')

let send = (handle, message) => {
  assert(typeof handle == 'string', 'handle must be a string')
  //assert(typeof message == 'string', 'message must be a string')
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
      //Messages.make({ new: attachment, file: '/Users/Ryan/Pictures/OmNom.jpg' })()
      Messages.send({ fileName: "/Users/Ryan/Pictures/OmNom.jpeg", to: target })
    } catch (e) {
      throw new Error(e)
    }
  })(handle, message)
}

send('', "/Users/Ryan/Pictures/OmNom.jpeg")
