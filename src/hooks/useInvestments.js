import { useState, useCallback } from 'react';
import { farmListings, myInvestments, investmentData, cropYieldData } from '../data/farmData';

export const useInvestments = () => {
  const [activeTimeframe, setActiveTimeframe] = useState('6M');
  const [activeTab, setActiveTab] = useState('investments');

  const timeframes = ['1M', '3M', '6M', '1Y', '2Y', 'All'];

  const handleInvest = useCallback((farmId) => {
    const farm = farmListings.find(f => f.id === farmId);
    if (farm) {
      alert(`Investing in ${farm.name}. Minimum investment: ${farm.minInvestment}`);
      // Here you would typically handle the investment logic
    }
  }, []);

  const handleListFarm = useCallback(() => {
    alert('Redirecting to farm listing form...');
    // Here you would typically navigate to a farm listing form
  }, []);

  const handleBrowseInvestments = useCallback(() => {
    alert('Browsing all available investments...');
    // Here you would typically filter or navigate to investments page
  }, []);

  const handleMarketAnalysis = useCallback(() => {
    alert('Opening market analysis dashboard...');
    // Here you would typically navigate to market analysis page
  }, []);

  return {
    activeTimeframe,
    setActiveTimeframe,
    activeTab,
    setActiveTab,
    timeframes,
    farmListings,
    myInvestments,
    investmentData,
    cropYieldData,
    handleInvest,
    handleListFarm,
    handleBrowseInvestments,
    handleMarketAnalysis,
  };
};