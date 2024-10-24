
import banner from '../assets/banner.jpg'
import bgBanner from '../assets/background.png'

const Banner = () => {
    return (
        <div >
            <div className="hero bg-base-200 min-h-screen " 
            style={{backgroundImage: `url(${bgBanner})`}}
            >
                <div className="hero-content flex-col lg:flex-row-reverse w-[90%] mx-auto">
                    <img
                        src={banner}
                        className="w-full md:max-w-sm  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl md:text-5xl font-bold">Bottle News</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary bg-[#796ba1] text-white border-none"><a href="#bottle">Get Explore</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;