class UI
{
	constructor()
	{
		this.profile = document.getElementById('profile');
	}
	showProfile(user)
	{
		// console.log(user);
		this.profile.innerHTML = `
		<div class = "card card-body mb-3">
			<div class = "row">
				<div class = "col-md-3">
				<img class = "img-fluid mb-2" src = "${user.avatar_url}">
				<a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-3">View Profile</a>
				</div>
				<div class = "col-md-9">
				<span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
				<span class="badge badge-secondary">Public gists : ${user.public_gists}</span>
				<span class="badge badge-success">Followers : ${user.followers}</span>
				<span class="badge badge-info">Following : ${user.following}</span>
				<br><br><br>
				<ul class = "list-group">
				<li class = "list-group-item">Company : ${user.company}</li>
				<li class = "list-group-item">Websites : ${user.blog}</li>
				<li class = "list-group-item">Location : ${user.location}</li>
				<li class = "list-group-item">Member Since : ${user.created_at}</li>
				
				</ul>

				</div>
			</div>
		</div>
		<h3 class = "page-heading mb-3">Latest Repos</h3>
		<div id = "repos"></div> 
		
		
		
		
		
		`
	}

	//Show Alert Message
	showAlert(msg,classname)
	{
		const div = document.createElement('div');
		div.className = classname;

		//Add text
		div.appendChild(document.createTextNode(msg));

		//Get Parent
		const container = document.querySelector('.searchContainer');

		//Get the search box
		const search = document.querySelector('.search');

		//Insert the alert
		container.insertBefore(div,search);
	}

	// Clear the profile
	clearProfile()
	{
		this.profile.innerHTML = ``;
	}
}