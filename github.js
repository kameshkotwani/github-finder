class GitHub
{
	constructor()
	{
		this.client_id = 'SecretID_here';
		this.client_secret = 'Secret_ID_here';
		this.repos_count = 10;
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