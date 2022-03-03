const { exec } = require("child_process");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const CHANNEL_ID = <discord_channel_id>;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    (async () => {
        var stopped = false;
        while(!stopped) {
            let launchSuccess = await new Promise(resolve => {
                exec('sh change_sharp.sh', (error, stdout, stderr) => {
                    if (error) {
                        //console.log(error.message);
                        client.channels.cache.get(CHANNEL_ID).send(`\`\`\`${error.message.slice(error.message.indexOf('\n') + 1, -1)}\`\`\``);
                        resolve(false);
                        return;
                    }
                    console.log(stdout);
                    client.channels.cache.get(CHANNEL_ID).send('鴿子叼著橄欖葉回來了！');
                    resolve(true);
                });
            });

            if (launchSuccess) stopped = true;
        }
    })();
});

client.login(<discord_token>);
