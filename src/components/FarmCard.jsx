import React from 'react';
import { MapPin, DollarSign, Coins } from 'lucide-react';

export const FarmCard = ({ farm, onInvest, hasWallet }) => {
  const IconComponent = farm.icon;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${farm.image})` }}>
        <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${farm.color} rounded-lg flex items-center justify-center`}>
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">{farm.name}</h3>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                {farm.location}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <div className="text-gray-400">Farm Size</div>
            <div className="font-medium">{farm.size}</div>
          </div>
          <div>
            <div className="text-gray-400">Crop Type</div>
            <div className="font-medium">{farm.crop}</div>
          </div>
          
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-gray-400 text-sm">Min. Investment</div>
            <div className="font-bold text-lg">{farm.minInvestment}</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400 text-sm">Farmer</div>
            <div className="font-medium">{farm.farmer}</div>
          </div>
        </div>
        
        <button 
  onClick={() => onInvest(farm.id)} 
  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
>
  Invest
</button>

      </div>
    </div>
  );
};