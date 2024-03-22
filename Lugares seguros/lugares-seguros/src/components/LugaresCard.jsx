
import user from '../assets/user.webp'

const Lugares = () => {

    return (
<div className="flex flex-wrap justify-center">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={user} alt="user" className="w-full bg-green-200"></img>
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Lugar</div>
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        
    </div>
</div>
);
};

export default Lugares;