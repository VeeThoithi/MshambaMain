import React from 'react';
import { Header } from './components/Header';
import { InvestmentOverview } from './components/InvestmentOverview';
import { TabNavigation } from './components/TabNavigation';
import { FarmCard } from './components/FarmCard';
import { CropYieldsChart } from './components/CropYieldsChart';
import { Sidebar } from './components/Sidebar';
import { WalletConnect } from './components/WalletConnect';
import { WalletDashboard } from './components/WalletDashboard';
import { InvestmentModal } from './components/InvestmentModal';
import { useInvestments } from './hooks/useInvestments';
import './styles/globals.css';

function App() {
  const {
    activeTimeframe,
    setActiveTimeframe,
    activeTab,
    setActiveTab,
    wallet,
    showWalletConnect,
    setShowWalletConnect,
    showInvestmentModal,
    setShowInvestmentModal,
    selectedFarm,
    timeframes,
    farmListings,
    myInvestments,
    investmentData,
    cropYieldData,
    handleInvest,
    handleConnectWallet,
    handleWalletConnect,
    handleWalletDisconnect,
    handleInvestmentComplete,
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
            {/* Wallet Dashboard */}
            {wallet && (
              <div className="mb-8">
                <WalletDashboard 
                  wallet={wallet}
                  onDeposit={() => alert('Deposit feature coming soon!')}
                  onWithdraw={() => alert('Withdraw feature coming soon!')}
                  onDisconnect={handleWalletDisconnect}
                />
              </div>
            )}

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
                    hasWallet={!!wallet}
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
              wallet={wallet}
              onListFarm={handleListFarm}
              onBrowseInvestments={handleBrowseInvestments}
              onMarketAnalysis={handleMarketAnalysis}
              onConnectWallet={handleConnectWallet}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <WalletConnect
        isOpen={showWalletConnect}
        onClose={() => setShowWalletConnect(false)}
        onConnect={handleWalletConnect}
      />

      {showInvestmentModal && selectedFarm && (
        <InvestmentModal
          farm={selectedFarm}
          isOpen={showInvestmentModal}
          onClose={() => setShowInvestmentModal(false)}
          onInvest={handleInvestmentComplete}
          walletBalance={wallet?.balance || 0}
        />
      )}
    </div>
  );
}

export default App;