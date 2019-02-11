class GitHub
{
	constructor()
	{
		this.client_id = '2eae6735a032ea155e3a';
		this.client_secret = '74fafd7a3890e70a7cd130dcd3448443fe1bc18f';
	}
	async getUser(user)
	{
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		
		const profileData = await profileResponse.json();
		// console.log(profileData);
		return {
			profileData
		}
	}

}