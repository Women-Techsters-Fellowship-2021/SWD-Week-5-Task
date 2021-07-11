import "../Styles/404.css";

const FourOhFour = () => {
	return (
		<div className='mainbox'>
			<div className='error'>4</div>
			<div className='far'>0</div>
			<div className='error2'>4</div>
			<div className='msg'>
				The Page never existed
				<p>
					Go to <a href='/home'>home</a> and try from there.
				</p>
			</div>
		</div>
	);
};


export default FourOhFour;