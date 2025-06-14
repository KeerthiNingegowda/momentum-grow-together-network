
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface MatchScoreProps {
  score: number;
  factors: {
    name: string;
    score: number;
    weight: number;
  }[];
}

export const MatchScore = ({ score, factors }: MatchScoreProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-100";
    if (score >= 60) return "bg-yellow-100";
    return "bg-red-100";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Match Score</span>
        <Badge className={`${getScoreBg(score)} ${getScoreColor(score)} border-0`}>
          {score}%
        </Badge>
      </div>
      
      <div className="space-y-2">
        {factors.map((factor, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">{factor.name}</span>
              <span className={getScoreColor(factor.score)}>{factor.score}%</span>
            </div>
            <Progress value={factor.score} className="h-1" />
          </div>
        ))}
      </div>
    </div>
  );
};
