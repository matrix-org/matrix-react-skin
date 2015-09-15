/*
Copyright 2015 OpenMarket Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var React = require('react');

var CreateRoomController = require('matrix-react-sdk/lib/controllers/organisms/CreateRoom');

var sdk = require('matrix-react-sdk');

module.exports = React.createClass({
    displayName: 'CreateRoom',
    mixins: [CreateRoomController],

    getPreset: function() {
        return this.refs.presets.getPreset();
    },

    getName: function() {
        return this.refs.name_textbox.getName();
    },

    getInvitedUsers: function() {
        return this.refs.user_selector.getUserIds();
    },

    render: function() {
        var CreateRoomButton = sdk.getComponent('atoms.create_room.CreateRoomButton');
        var RoomNameTextbox = sdk.getComponent('atoms.create_room.RoomNameTextbox');
        var Presets = sdk.getComponent('atoms.create_room.Presets');
        var UserSelector = sdk.getComponent('molecules.UserSelector');

        var curr_phase = this.state.phase;
        if (curr_phase == this.phases.CREATING) {
            return (
                <div>Creating...</div>
            );
        } else {
            var error_box = "";
            if (curr_phase == this.phases.ERROR) {
                error_box = (
                    <div className="mx_Error">
                        An error occured: {this.state.error_string}
                    </div>
                );
            }
            return (
                <div className="mx_CreateRoom">
                    <label>Room Name <RoomNameTextbox ref="name_textbox" /></label>
                    <Presets ref="presets"/>
                    <UserSelector ref="user_selector"/>
                    <CreateRoomButton onCreateRoom={this.onCreateRoom} />
                    {error_box}
                </div>
            );
        }
    }
});
