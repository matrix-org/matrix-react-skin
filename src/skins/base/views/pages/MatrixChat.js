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
var sdk = require('matrix-react-sdk');

var MatrixChatController = require('matrix-react-sdk/lib/controllers/pages/MatrixChat');

// should be atomised
var Loader = require("react-loader");


module.exports = React.createClass({
    displayName: 'MatrixChat',
    mixins: [MatrixChatController],

    render: function() {
        var RoomList = sdk.getComponent('organisms.RoomList');
        var RoomView = sdk.getComponent('organisms.RoomView');
        var MatrixToolbar = sdk.getComponent('molecules.MatrixToolbar');
        var Login = sdk.getComponent('templates.Login');
        var Register = sdk.getComponent('templates.Register');
        var MemberList = sdk.getComponent('organisms.MemberList');

        if (this.state.logged_in && this.state.ready) {
            return (
                <div className="mx_MatrixChat">
                    <div className="mx_MatrixChat_chatWrapper">
                        <aside className="mx_MatrixChat_leftPanel">
                            <RoomList selectedRoom={this.state.currentRoom} />
                            <MatrixToolbar />
                        </aside>
                        <RoomView roomId={this.state.currentRoom} key={this.state.currentRoom} />
                        <aside className="mx_MatrixChat_rightPanel">
                            <MemberList roomId={this.state.currentRoom} key={this.state.currentRoom} />
                        </aside>
                    </div>
                </div>
            );
        } else if (this.state.logged_in) {
            return (
                <Loader />
            );
        } else if (this.state.screen == 'register') {
            return (
                <Register onLoggedIn={this.onLoggedIn} clientSecret={this.state.register_client_secret}
                    sessionId={this.state.register_session_id} idSid={this.state.register_id_sid}
                    hsUrl={this.state.register_hs_url} isUrl={this.state.register_is_url}
                    registrationUrl={this.props.registrationUrl}
                />
            );
        } else {
            return (
                <Login onLoggedIn={this.onLoggedIn} />
            );
        }
    }
});

