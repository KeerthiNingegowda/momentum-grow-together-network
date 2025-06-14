
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface SkillRadarChartProps {
  skills: { skill: string; required: number; userLevel?: number }[];
  size?: number;
}

export const SkillRadarChart = ({ skills, size = 120 }: SkillRadarChartProps) => {
  return (
    <div style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skills}>
          <PolarGrid />
          <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10 }} />
          <PolarRadiusAxis domain={[0, 10]} tick={false} />
          <Radar
            name="Required"
            dataKey="required"
            stroke="#6b9370"
            fill="#6b9370"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          {skills.some(s => s.userLevel) && (
            <Radar
              name="Your Level"
              dataKey="userLevel"
              stroke="#e11d48"
              fill="#e11d48"
              fillOpacity={0.2}
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          )}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
