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

var ComponentBroker = require('matrix-react-sdk/lib/ComponentBroker');

/*
require('../skins/base/views/atoms/LogoutButton');
require('../skins/base/views/atoms/EnableNotificationsButton');
require('../skins/base/views/atoms/MessageTimestamp');
require('../skins/base/views/atoms/create_room/CreateRoomButton');
require('../skins/base/views/atoms/create_room/RoomNameTextbox');
require('../skins/base/views/atoms/create_room/Presets');
require('../skins/base/views/atoms/EditableText');
require('../skins/base/views/molecules/MatrixToolbar');
require('../skins/base/views/molecules/RoomTile');
require('../skins/base/views/molecules/MessageTile');
require('../skins/base/views/molecules/SenderProfile');
require('../skins/base/views/molecules/UnknownMessageTile');
require('../skins/base/views/molecules/MTextTile');
require('../skins/base/views/molecules/MNoticeTile');
require('../skins/base/views/molecules/MEmoteTile');
require('../skins/base/views/molecules/MImageTile');
require('../skins/base/views/molecules/MFileTile');
require('../skins/base/views/molecules/MRoomMemberTile');
require('../skins/base/views/molecules/RoomHeader');
require('../skins/base/views/molecules/MessageComposer');
require('../skins/base/views/molecules/ProgressBar');
require('../skins/base/views/molecules/ServerConfig');
require('../skins/base/views/organisms/MemberList');
require('../skins/base/views/molecules/MemberTile');
require('../skins/base/views/organisms/RoomList');
require('../skins/base/views/organisms/RoomView');
require('../skins/base/views/templates/Login');
require('../skins/base/views/templates/Register');
require('../skins/base/views/organisms/Notifier');
require('../skins/base/views/organisms/CreateRoom');
require('../skins/base/views/molecules/UserSelector');
*/

ComponentBroker.set('atoms/create_room/CreateRoomButton', require('./views/atoms/create_room/CreateRoomButton'));
ComponentBroker.set('atoms/create_room/Presets', require('./views/atoms/create_room/Presets'));
ComponentBroker.set('atoms/create_room/RoomNameTextbox', require('./views/atoms/create_room/RoomNameTextbox'));
ComponentBroker.set('atoms/EditableText', require('./views/atoms/EditableText'));
ComponentBroker.set('atoms/EnableNotificationsButton', require('./views/atoms/EnableNotificationsButton'));
ComponentBroker.set('atoms/LogoutButton', require('./views/atoms/LogoutButton'));
ComponentBroker.set('atoms/MessageTimestamp', require('./views/atoms/MessageTimestamp'));
ComponentBroker.set('molecules/MatrixToolbar', require('./views/molecules/MatrixToolbar'));
ComponentBroker.set('molecules/MemberTile', require('./views/molecules/MemberTile'));
ComponentBroker.set('molecules/MEmoteTile', require('./views/molecules/MEmoteTile'));
ComponentBroker.set('molecules/MessageComposer', require('./views/molecules/MessageComposer'));
ComponentBroker.set('molecules/MessageTile', require('./views/molecules/MessageTile'));
ComponentBroker.set('molecules/MFileTile', require('./views/molecules/MFileTile'));
ComponentBroker.set('molecules/MImageTile', require('./views/molecules/MImageTile'));
ComponentBroker.set('molecules/MNoticeTile', require('./views/molecules/MNoticeTile'));
ComponentBroker.set('molecules/MRoomMemberTile', require('./views/molecules/MRoomMemberTile'));
ComponentBroker.set('molecules/MTextTile', require('./views/molecules/MTextTile'));
ComponentBroker.set('molecules/ProgressBar', require('./views/molecules/ProgressBar'));
ComponentBroker.set('molecules/RoomHeader', require('./views/molecules/RoomHeader'));
ComponentBroker.set('molecules/RoomTile', require('./views/molecules/RoomTile'));
ComponentBroker.set('molecules/SenderProfile', require('./views/molecules/SenderProfile'));
ComponentBroker.set('molecules/ServerConfig', require('./views/molecules/ServerConfig'));
ComponentBroker.set('molecules/UnknownMessageTile', require('./views/molecules/UnknownMessageTile'));
ComponentBroker.set('molecules/UserSelector', require('./views/molecules/UserSelector'));
ComponentBroker.set('organisms/CreateRoom', require('./views/organisms/CreateRoom'));
ComponentBroker.set('organisms/MemberList', require('./views/organisms/MemberList'));
ComponentBroker.set('organisms/Notifier', require('./views/organisms/Notifier'));
ComponentBroker.set('organisms/RoomList', require('./views/organisms/RoomList'));
ComponentBroker.set('organisms/RoomView', require('./views/organisms/RoomView'));
ComponentBroker.set('pages/MatrixChat', require('./views/pages/MatrixChat'));
ComponentBroker.set('templates/Login', require('./views/templates/Login'));
ComponentBroker.set('templates/Register', require('./views/templates/Register'));

