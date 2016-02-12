/**
 * ToolController
 *
 * @description :: Server-side logic for managing tools
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  integratePivotalTracker : function(req, res){
    var webhook = {
      "occurred_at": 1382568826000,
      "highlight": "accepted",
      "primary_resources": [
        {
          "story_type": "feature",
          "name": "Reactor leak reported in Detention Block AA-23",
          "url": "http:///story/show/563",
          "id": 563,
          "kind": "story"
        }
      ],
      "changes": [
        {
          "story_type": "feature",
          "name": "Reactor leak reported in Detention Block AA-23",
          "new_values": {
            "accepted_at": 1382568827000,
            "before_id": 6024,
            "after_id": 559,
            "current_state": "accepted",
            "updated_at": 1382568826000
          },
          "original_values": {
            "accepted_at": null,
            "before_id": 6643,
            "after_id": 565,
            "current_state": "delivered",
            "updated_at": 1382568825000
          },
          "id": 563,
          "change_type": "update",
          "kind": "story"
        }
      ],
      "message": "Darth Vader accepted this feature",
      "project_version": 1037,
      "performed_by": {
        "name": "Darth Vader",
        "initials": "DV",
        "id": 101,
        "kind": "person"
      },
      "guid": "99_1037",
      "project": {
        "name": "Death Star",
        "id": 99,
        "kind": "project"
      },
      "kind": "story_update_activity"
    }

    // Make sure this is a socket request
    if (!req.isSocket) {return res.badRequest();}
    // Have the socket join the "funSockets" room
    sails.sockets.join(req.socket, "pivotal");
    // Broadcast a "hello" message to all the fun sockets.
    // This message will be sent to all sockets in the "funSockets" room,
    // but will be ignored by any clients that have not done `.on('hello', ...)`
    sails.sockets.broadcast("pivotal", webhook, {id: req.socket.id});
    // Respond to the request with an a-ok message
    res.send("a-ok!");
  }
};

