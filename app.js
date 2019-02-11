//Init GitHub
const github = new GitHub;

//Init UI class
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

///Search input event listener
searchUser.addEventListener('keyup',(e)=>
{
	//Get input text
	const userText = e.target.value;
	if(userText!=='')
	{
		//Make http call
		// console.log(userText);
		github.getUser(userText)
		.then(data => {
			if(data.profileData.message ==='Not Found')
			{
				//show alert
				ui.showAlert('User not found','alert alert-danger');
			}
			else
			{
				//show the profile
				ui.showProfile(data.profileData);
			}
				// console.log(data);
			});
		
	}
	else
	{
		// clear profile
		ui.clearProfile();
	}
});