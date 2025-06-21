
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Crown, Medal } from "lucide-react";

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, username: "MemeKing420", portfolioValue: 156789, avatar: "👑" },
    { rank: 2, username: "DiamondHands", portfolioValue: 134567, avatar: "💎" },
    { rank: 3, username: "ToTheMoon", portfolioValue: 98765, avatar: "🚀" },
    { rank: 4, username: "HODLer", portfolioValue: 87654, avatar: "🦍" },
    { rank: 5, username: "PumpItUp", portfolioValue: 76543, avatar: "📈" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Medal className="w-5 h-5 text-orange-400" />;
      default: return <Trophy className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData.map((player) => (
            <div 
              key={player.rank} 
              className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {getRankIcon(player.rank)}
                <span className="text-2xl">{player.avatar}</span>
                <div>
                  <p className="font-semibold text-white">{player.username}</p>
                  <p className="text-sm text-gray-400">Rank #{player.rank}</p>
                </div>
              </div>
              <p className="font-bold text-green-400">
                ${player.portfolioValue.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
