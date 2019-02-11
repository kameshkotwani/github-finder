class GitHub
{
	constructor()
	{
		this.client_id = '2eae6735a032ea155e3a';
		this.client_secret = '74fafd7a3890e70a7cd130dcd3448443fe1bc18f';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}
	async getUser(user)
	{
		//To get the profile
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


		//To fecth repos of the user
		const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		
		const profileData = await profileResponse.json();
		// console.log(profileData);
		const repos = await reposResponse.json();

		return {
			profileData,
			repos
		}
	}

}