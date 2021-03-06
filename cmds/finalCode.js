const { SlashCommandBuilder } = require("@discordjs/builders");
const { DjsFinalCode } = require('@hizollo/games');

const finalCode = new SlashCommandBuilder()
	.setName("finalcode")
	.setDescription("開啟一場終極密碼的遊戲")
	.addUserOption(option => 
		option.setName("p2")
		.setDescription("玩家2")
		.setRequired(false))
	.addUserOption(option => 
		option.setName("p3")
		.setDescription("玩家3")
		.setRequired(false))
	.addUserOption(option => 
		option.setName("p4")
		.setDescription("玩家4")
		.setRequired(false))
	.addUserOption(option => 
		option.setName("p5")
		.setDescription("玩家5")
		.setRequired(false))

module.exports = {
	data: finalCode,

	async execute(interaction) {
		let datetime = new Date().getFullYear() + "-" 
        	 	+ (new Date().getMonth()+1) + "-" 
         		+ new Date().getDate() + " " 
        		+ new Date().getHours() + ":"  
         		+ new Date().getMinutes() + ":" 
        		+ new Date().getSeconds();
		
		const user = interaction.user;
		const p2 = interaction.options.getUser("p2");
		const p3 = interaction.options.getUser("p3");
		const p4 = interaction.options.getUser("p4");
		const p5 = interaction.options.getUser("p5");

		const game = new DjsFinalCode({
			source: interaction,
			players: [user, p2, p3, p4, p5]
		});

		await game.initialize();
		await game.start();
		await game.conclude();

		console.log(`>finalcode`);
		console.log(`from ${interaction.guild.name}`);
		console.log(`by ${interaction.user.tag}`);
		console.log(`at ${datetime}`);
		console.log("------------");
	}
}

