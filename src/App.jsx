import React from 'react';
import { Header } from './components/Header';
import { InvestmentOverview } from './components/InvestmentOverview';
import { TabNavigation } from './components/TabNavigation';
import { FarmCard } from './components/FarmCard';
import { CropYieldsChart } from './components/CropYieldsChart';
import { Sidebar } from './components/Sidebar';
import { useInvestments } from './hooks/useInvestments';
import './styles/globals.css';

function App() {
  const {
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
  } = useInvestments();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onListFarm={handleListFarm} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <InvestmentOverview
              data={investmentData}
              activeTimeframe={activeTimeframe}
              timeframes={timeframes}
              onTimeframeChange={setActiveTimeframe}
            />

            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* Tab Content */}
            {activeTab === 'investments' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
                {farmListings.map((farm) => (
                  <FarmCard
                    key={farm.id}
                    farm={farm}
                    onInvest={handleInvest}
                  />
                ))}
              </div>
            )}

            {activeTab === 'yields' && (
              <div className="fade-in">
                <CropYieldsChart data={cropYieldData} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <Sidebar
              myInvestments={myInvestments}
              onListFarm={handleListFarm}
              onBrowseInvestments={handleBrowseInvestments}
              onMarketAnalysis={handleMarketAnalysis}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;