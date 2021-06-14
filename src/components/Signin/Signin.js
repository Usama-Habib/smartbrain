import React from 'react';

class Signin extends React.Component {
	constructor(){
		super();
		this.state = {
			email_address: "",
			password:''
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
		fetch('https://my-smartbrain-api.herokuapp.com/signin',{
				method:'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email:this.state.email_address,
					password:this.state.password
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
		const {onRouteChange} = this.props;
		return (
			<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					  <legend className="f2 fw6 ph0 mh0">Sign In</legend>
					  <div className="mt3">
						<label className="db fw6 lh-copy f6" htmlFor="email_address">Email</label>
						<input 
							className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
							type="email" 
							name="email_address"  
							id="email_address"
							onChange={this.onChange}
						/>
					  </div>
					  <div className="mv3">
						<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						<input 
							className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
						 	type="password" 
							name="password"  
							id="password"
							onChange={this.onChange}
						/>
					  </div>
					</fieldset>
					<div className="">
					  <input 
					  onClick={this.handleSubmit}
					  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					  type="submit" 
					  value="Sign in"/>
					</div>
					<div className="lh-copy mt3">
					  <p onClick={()=> onRouteChange('register')} className="pointer f6 link dim black db">Register</p>
					</div>
				  </div>
				</main>
			</article>
		);
	}	
}

export default Signin; 