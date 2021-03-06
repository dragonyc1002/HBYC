const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedBuilder } = require("discord.js");

const github = new SlashCommandBuilder()
	.setName("github")
	.setDescription("取得HBYC原始碼的網址")


module.exports = {
	data: github,

	async execute(interaction){
        let datetime = new Date().getFullYear() + "-" 
                + (new Date().getMonth()+1) + "-" 
                + new Date().getDate() + " " 
                + new Date().getHours() + ":"  
                + new Date().getMinutes() + ":" 
                + new Date().getSeconds();
        
		const githubEmbed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle("HBYC的原始碼連結")
            .addFields(
                { name: "目前版本", value: "https://reurl.cc/vW31De", inline: true },
                { name: "舊版本", value: "https://reurl.cc/O47q13", inline: false }
            )
            .setThumbnail(interaction.client.user.displayAvatarURL())
            .setTimestamp()
        await interaction.reply({ embeds: [githubEmbed] });

        console.log(`>github`);
        console.log(`from ${interaction.guild.name}`);
        console.log(`by ${interaction.user.tag}`);
        console.log(`at ${datetime}`);
        console.log("------------");
	}
}