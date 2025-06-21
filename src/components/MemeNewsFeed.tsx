
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";

const MemeNewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      title: "Pepe hits all-time high after celebrity endorsement",
      time: "2 minutes ago",
      impact: "positive",
      meme: "Pepe"
    },
    {
      id: 2,
      title: "Doge market experiences volatility amid market uncertainty",
      time: "15 minutes ago",
      impact: "negative",
      meme: "Doge"
    },
    {
      id: 3,
      title: "Chad meme gains momentum in social media trends",
      time: "1 hour ago",
      impact: "positive",
      meme: "Chad"
    },
    {
      id: 4,
      title: "Wojak sees steady growth in morning trading",
      time: "2 hours ago",
      impact: "positive",
      meme: "Wojak"
    }
  ];

  return (
    <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Meme Market News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((news) => (
            <div key={news.id} className="p-3 bg-gray-800/50 rounded-lg">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-white text-sm font-medium leading-relaxed">
                    {news.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">{news.time}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-blue-400">{news.meme}</span>
                  </div>
                </div>
                {news.impact === 'positive' ? (
                  <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MemeNewsFeed;
