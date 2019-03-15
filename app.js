'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        // hello> を取得する正規表現
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
        // Hello,{username} とメッセージを送信する
    });
};