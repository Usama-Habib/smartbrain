import React from 'react';


class Register extends React.Component {
	constructor(){
		super()
		this.state = {
			useremail:"",
			userpassword: "",
			username:""
		}
	}

	onChange = (event) => {
		const {name,value} = event.target
		this.setState({
			[name]:value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		fetch('https://my-smartbrain-api.herokuapp.com/register',{
				method:'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email:this.state.useremail,
					password:this.state.userpassword,
					name:this.state.username
				})
			})
			.then(response => response.json())
			.then(data => {
				
				if(data.id){
					this.props.loadUser(data)
					this.props.onRouteChange('home')
				}
			})
	}

	render(){
		const {onRouteChange} = this.props
		return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					  <legend className="f2 fw6 ph0 mh0">Register</legend>
					   <div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="user-name">User</label>
						<input 
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="text" 
							name="username"  
							id="username"
							onChange={this.onChange}
						/>
						
					  </div>
					  <div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="email" 
							name="useremail"  
							id="useremail"
							onChange={this.onChange}
						/>
						
					  </div>
					  <div className="mt3">
					  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						<input 
							className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
						 	type="password" 
							name="userpassword"  
							onChange={this.onChange}
							id="userpassword"
						/>
						
					  </div>
					</fieldset>
					<div className="">
					  <input 
					  onClick={this.handleSubmit}
					  className="b ph3 pv2 input-reset ba b--black bg-transparent grow f6 dib" type="submit" 
					  value="Register"/>
					</div>
				  </div>
				</main>
			</article>
		);
	}	
}

export default Register; 