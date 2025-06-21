
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TradingModalProps {
  isOpen: boolean;
  onClose: () => void;
  meme: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onTrade: (memeId: number, shares: number, type: 'buy' | 'sell') => void;
}

const TradingModal = ({ isOpen, onClose, meme, onTrade }: TradingModalProps) => {
  const [shares, setShares] = useState(1);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  const handleTrade = () => {
    onTrade(meme.id, shares, tradeType);
    onClose();
    setShares(1);
  };

  const totalCost = shares * meme.price;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Trade {meme.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={meme.image} alt={meme.name} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">{meme.name}</p>
              <p className="text-gray-400">${meme.price}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => setTradeType('buy')}
              variant={tradeType === 'buy' ? 'default' : 'outline'}
              className="flex-1"
            >
              Buy
            </Button>
            <Button 
              onClick={() => setTradeType('sell')}
              variant={tradeType === 'sell' ? 'default' : 'outline'}
              className="flex-1"
            >
              Sell
            </Button>
          </div>

          <div>
            <Label htmlFor="shares">Number of Shares</Label>
            <Input
              id="shares"
              type="number"
              value={shares}
              onChange={(e) => setShares(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div className="bg-gray-800 p-3 rounded-lg">
            <p className="text-sm text-gray-400">Total {tradeType === 'buy' ? 'Cost' : 'Value'}</p>
            <p className="text-xl font-bold text-green-400">${totalCost.toLocaleString()}</p>
          </div>

          <Button 
            onClick={handleTrade}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            {tradeType === 'buy' ? 'Buy' : 'Sell'} {shares} Share{shares > 1 ? 's' : ''}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TradingModal;
