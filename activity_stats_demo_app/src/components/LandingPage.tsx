

const LandingPage = () => {
    return (
        <div className="grid justify-items-center bg-zinc-100 h-screen"> 
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url('../public/runner.gif')`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                opacity: 0.5, // Adjust the transparency level
                zIndex: 0,
            }}></div>
            <h1 className="text-3xl font-bold relative top-1/2 h-8">Grit Journal</h1>
            <div className="container bg-zinc-400/50 w-64 h-48 rounded-lg border-2 border-stone-500 grid justify-items-center content-center p-4 z-10">
                <div className="m-2 text-center">
                    <input type="text" className="w-4/5 text-center rounded-md" placeholder="Username"/>
                </div>
                <div className="m-2 text-center">
                    <input type="password" className="w-4/5 text-center rounded-md" placeholder="Password"/>
                </div>
                <button className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-1 px-4 rounded inline-block h-8 m-2">
                    Login
                </button>
                <p style={{fontSize: '12px'}}>Don't have an account? Register <a href="https://www.w3schools.com" style={{fontWeight: 'bold'}}>here</a></p>
            </div>
        </div>
    );
}

export default LandingPage;
