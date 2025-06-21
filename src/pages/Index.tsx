
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Trophy, BarChart3 } from "lucide-react";

const Index = () => {
  const [balance, setBalance] = useState(10000);
  const [portfolioValue, setPortfolioValue] = useState(10000);
  
  // Mock data for trending memes
  const trendingMemes = [
    { id: 1, name: "Pepe", price: 150, change: 12.5, image: "🐸" },
    { id: 2, name: "Doge", price: 89, change: -3.2, image: "🐕" },
    { id: 3, name: "Wojak", price: 45, change: 8.7, image: "😔" },
    { id: 4, name: "Chad", price: 234, change: 15.3, image: "💪" },
  ];

  // Mock portfolio holdings
  const holdings = [
    { meme: "Pepe", shares: 10, currentPrice: 150, purchasePrice: 120 },
    { meme: "Chad", shares: 5, currentPrice: 234, purchasePrice: 200 },
  ];

  const totalProfitLoss = holdings.reduce((total, holding) => {
    return total + (holding.shares * (holding.currentPrice - holding.purchasePrice));
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              MemeStock Exchange
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-300">Balance</p>
                <p className="text-xl font-bold text-green-400">${balance.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${portfolioValue.toLocaleString()}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total P&L</CardTitle>
              {totalProfitLoss >= 0 ? 
                <TrendingUp className="h-4 w-4 text-green-400" /> : 
                <TrendingDown className="h-4 w-4 text-red-400" />
              }
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${totalProfitLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ${totalProfitLoss.toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Positions</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{holdings.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Rank</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">#42</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Holdings */}
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Your Portfolio</CardTitle>
              <CardDescription className="text-gray-300">Current meme holdings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((holding, index) => {
                  const profitLoss = holding.shares * (holding.currentPrice - holding.purchasePrice);
                  const profitLossPercent = ((holding.currentPrice - holding.purchasePrice) / holding.purchasePrice) * 100;
                  
                  return (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{trendingMemes.find(m => m.name === holding.meme)?.image}</div>
                        <div>
                          <p className="font-semibold text-white">{holding.meme}</p>
                          <p className="text-sm text-gray-400">{holding.shares} shares</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">${(holding.shares * holding.currentPrice).toLocaleString()}</p>
                        <p className={`text-sm ${profitLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {profitLoss >= 0 ? '+' : ''}${profitLoss.toFixed(0)} ({profitLossPercent.toFixed(1)}%)
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Trending Memes Market */}
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Trending Memes</CardTitle>
              <CardDescription className="text-gray-300">Hot memes in the market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingMemes.map((meme) => (
                  <div key={meme.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{meme.image}</div>
                      <div>
                        <p className="font-semibold text-white">{meme.name}</p>
                        <p className="text-sm text-gray-400">${meme.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`text-sm ${meme.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {meme.change >= 0 ? '+' : ''}{meme.change.toFixed(1)}%
                        {meme.change >= 0 ? 
                          <TrendingUp className="inline w-4 h-4 ml-1" /> : 
                          <TrendingDown className="inline w-4 h-4 ml-1" />
                        }
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        Trade
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
