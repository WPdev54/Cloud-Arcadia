import Styles from "../Style";
import CloudHero from '../assets/v617-bb-10-technology-fotor-bg-remover-202309202142.png'


const Hero = () => {
    return (
        <section className={`${Styles.paddingX} ${Styles.flexCenter}`}>
            <div className="container">
                <div className="md:grid md:grid-flow-col md:place-content-between md:items-center ">
                    <div className="grid-cols-5 items-center">
                        <div className="text z-10">
                            <h1 className="sm:text-[45px]   text-[37px] w-fullw bg-gradient-to-r from-green-400 to-cyan-600 bg-clip-text text-transparent font-extrabold">
                                Brings The Full Powerful
                                    <br className="none sm:block"/>
                                 Cloud Gaming Experience With
                                 <br className="none sm:block"/>
                                  The New Technology
                            </h1>
                        </div>
                    </div>
                    <div className="grid-cols-5">
                        <div className="img flex">
                            <div  className="bg-blue-gradient h-9 w-9 absolute bottom-28 rounded-full"/>
                            <img src={CloudHero} className="object-contain sm:h-[462px] h-[304px] w-[462px] " />
                            <div  className="bg-gradient-to-bl z-0 from-purple-600 to-pink-600 h-9 w-9 relative right-46 rounded-full"/>
                            {/* <div  className="bg-puin-gradient h-9 w-9 top-16 relative rounded-full"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;