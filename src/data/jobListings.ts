
export const jobListings = [
  {
    id: 1,
    title: "Senior Data Scientist",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    posted: "2 days ago",
    description: "We're looking for a senior data scientist to lead our ML initiatives and drive business insights. You'll work with cross-functional teams to develop predictive models, analyze large datasets, and translate complex findings into actionable business strategies. Experience with deep learning, statistical modeling, and data visualization is essential.",
    complexity: "Medium",
    problemType: "Business Analytics",
    teamSize: "8-12 people",
    techStack: [
      { 
        category: "Machine Learning", 
        technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"], 
        color: "#3b82f6",
        description: "Advanced ML frameworks for model development and training"
      },
      { 
        category: "Data Processing", 
        technologies: ["Python", "SQL", "Apache Spark", "Pandas", "NumPy"], 
        color: "#10b981",
        description: "Core data manipulation and analysis tools"
      },
      { 
        category: "Cloud & Infrastructure", 
        technologies: ["AWS SageMaker", "Docker", "Kubernetes", "MLflow"], 
        color: "#f59e0b",
        description: "Scalable deployment and model management platforms"
      },
      { 
        category: "Visualization", 
        technologies: ["Tableau", "PowerBI", "Matplotlib", "D3.js"], 
        color: "#8b5cf6",
        description: "Data visualization and business intelligence tools"
      }
    ],
    companyStats: {
      totalPosted: 24,
      totalFilled: 18,
      confidenceScore: 75
    },
    companyProfile: {
      culture: {
        workStyle: "Hybrid - 3 days in office",
        vibe: "Fast-paced, collaborative",
        values: ["Innovation", "Work-life balance", "Growth mindset"]
      },
      companyInsights: [
        {
          category: "Employee Satisfaction",
          details: ["4.2/5 Glassdoor rating", "92% would recommend to friend", "Strong career growth opportunities"],
          color: "#10b981",
          description: "Overall employee satisfaction and workplace ratings"
        },
        {
          category: "Culture & Management",
          details: ["Flat hierarchy", "Quarterly 1:1s", "Transparent communication", "Results-focused"],
          color: "#3b82f6", 
          description: "Management style and company culture characteristics"
        },
        {
          category: "Company Health",
          details: ["Series C funded ($50M)", "200% revenue growth YoY", "Expanding to 3 new markets"],
          color: "#f59e0b",
          description: "Recent funding, growth metrics, and business trajectory"
        },
        {
          category: "Benefits & Perks",
          details: ["Equity package included", "Free meals & snacks", "$2k learning budget", "4 weeks PTO"],
          color: "#8b5cf6",
          description: "Compensation benefits and workplace perks"
        }
      ],
      perks: [
        { icon: "Coffee", label: "Free meals & snacks" },
        { icon: "Heart", label: "Comprehensive health coverage" },
        { icon: "Zap", label: "Learning stipend $2k/year" }
      ],
      teamInsights: {
        avgTenure: "2.5 years",
        satisfactionScore: 4.2,
        diversityScore: "High",
        mentorshipProgram: true
      },
      recentFeedback: [
        { text: "Great mentorship and learning opportunities", rating: 5 },
        { text: "Good work-life balance, flexible hours", rating: 4 }
      ]
    }
  },
  {
    id: 2,
    title: "AI Engineer",
    company: "Innovation Labs",
    location: "Remote",
    type: "Contract",
    salary: "$80 - $120/hr",
    posted: "1 week ago",
    description: "Join our team to build cutting-edge AI solutions for enterprise clients. You'll architect and implement computer vision systems, work with large language models, and optimize AI pipelines for production environments. Strong experience in deep learning research and practical AI deployment required.",
    complexity: "Very High",
    problemType: "Computer Vision",
    teamSize: "4-6 people",
    techStack: [
      { 
        category: "AI/ML Frameworks", 
        technologies: ["PyTorch", "OpenCV", "Transformers", "CUDA", "TensorRT"], 
        color: "#8b5cf6",
        description: "Advanced AI frameworks for computer vision and NLP"
      },
      { 
        category: "Backend Systems", 
        technologies: ["FastAPI", "Docker", "Redis", "PostgreSQL"], 
        color: "#ef4444",
        description: "High-performance backend infrastructure"
      },
      { 
        category: "Cloud AI Services", 
        technologies: ["GCP Vertex AI", "TPU", "Cloud Storage", "BigQuery"], 
        color: "#f59e0b",
        description: "Google Cloud AI and data processing services"
      },
      { 
        category: "Development Tools", 
        technologies: ["Git", "Jupyter", "Weights & Biases", "DVC"], 
        color: "#06b6d4",
        description: "Version control and experiment tracking tools"
      }
    ],
    companyStats: {
      totalPosted: 12,
      totalFilled: 11,
      confidenceScore: 92
    },
    companyProfile: {
      culture: {
        workStyle: "Fully remote",
        vibe: "Cutting-edge, research-focused",
        values: ["Innovation", "Technical excellence", "Autonomy"]
      },
      companyInsights: [
        {
          category: "Employee Satisfaction",
          details: ["4.6/5 internal rating", "High technical autonomy", "Challenging projects"],
          color: "#10b981",
          description: "Employee satisfaction and work environment quality"
        },
        {
          category: "Culture & Management",
          details: ["Self-managing teams", "Quarterly reviews only", "Research-first mindset", "Remote-native"],
          color: "#3b82f6",
          description: "Management approach and cultural characteristics"
        },
        {
          category: "Company Health", 
          details: ["Bootstrap profitable", "40+ enterprise clients", "AI consulting leader"],
          color: "#f59e0b",
          description: "Financial stability and market position"
        },
        {
          category: "Benefits & Perks",
          details: ["Top-tier equipment", "$5k conference budget", "Flexible PTO", "Performance bonuses"],
          color: "#8b5cf6",
          description: "Compensation and professional development benefits"
        }
      ],
      perks: [
        { icon: "Zap", label: "Top-tier equipment provided" },
        { icon: "Users", label: "Conference budget $5k/year" },
        { icon: "Heart", label: "Flexible PTO policy" }
      ],
      teamInsights: {
        avgTenure: "3.2 years",
        satisfactionScore: 4.6,
        diversityScore: "Medium",
        mentorshipProgram: false
      },
      recentFeedback: [
        { text: "Incredible technical challenges and growth", rating: 5 },
        { text: "Very autonomous, great for self-starters", rating: 4 }
      ]
    }
  },
  {
    id: 3,
    title: "Data Analytics Manager",
    company: "GrowthCorp",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100k - $140k",
    posted: "3 days ago",
    description: "Lead a team of data analysts and drive strategic decision-making through data insights. You'll oversee dashboard development, establish data governance practices, and collaborate with executive leadership to identify growth opportunities. Strong leadership and business acumen required alongside technical expertise.",
    complexity: "Medium",
    problemType: "Business Analytics",
    teamSize: "12-15 people",
    techStack: [
      { 
        category: "Business Intelligence", 
        technologies: ["Tableau", "PowerBI", "Looker", "Google Analytics"], 
        color: "#06b6d4",
        description: "Enterprise BI and analytics platforms"
      },
      { 
        category: "Data Engineering", 
        technologies: ["SQL", "Python", "dbt", "Apache Airflow"], 
        color: "#10b981",
        description: "Data transformation and pipeline orchestration"
      },
      { 
        category: "Data Warehouse", 
        technologies: ["Snowflake", "BigQuery", "Redshift", "S3"], 
        color: "#6366f1",
        description: "Cloud data warehousing and storage solutions"
      },
      { 
        category: "Collaboration", 
        technologies: ["Git", "Slack", "Jira", "Confluence"], 
        color: "#84cc16",
        description: "Team collaboration and project management tools"
      }
    ],
    companyStats: {
      totalPosted: 8,
      totalFilled: 4,
      confidenceScore: 50
    },
    companyProfile: {
      culture: {
        workStyle: "In-office focused",
        vibe: "Traditional, structured",
        values: ["Reliability", "Teamwork", "Results-driven"]
      },
      companyInsights: [
        {
          category: "Employee Satisfaction",
          details: ["3.8/5 Glassdoor rating", "Stable work environment", "Good for work-life balance"],
          color: "#10b981",
          description: "Employee satisfaction and workplace stability"
        },
        {
          category: "Culture & Management",
          details: ["Traditional hierarchy", "Monthly team meetings", "Process-oriented", "Structured reviews"],
          color: "#3b82f6",
          description: "Management structure and organizational culture"
        },
        {
          category: "Company Health",
          details: ["Public company (NYSE: GROW)", "Stock: $45.20 (+2.1%)", "Dividend paying", "Fortune 500"],
          color: "#f59e0b",
          description: "Public company status and financial performance"
        },
        {
          category: "Benefits & Perks",
          details: ["401k matching 6%", "On-site gym & cafe", "Health insurance", "Team events"],
          color: "#8b5cf6",
          description: "Traditional corporate benefits package"
        }
      ],
      perks: [
        { icon: "Heart", label: "401k matching 6%" },
        { icon: "Coffee", label: "On-site gym & cafe" },
        { icon: "Users", label: "Team building events" }
      ],
      teamInsights: {
        avgTenure: "4.1 years",
        satisfactionScore: 3.8,
        diversityScore: "Medium",
        mentorshipProgram: true
      },
      recentFeedback: [
        { text: "Stable environment, good for families", rating: 4 },
        { text: "Process-heavy, slower pace of innovation", rating: 3 }
      ]
    }
  }
];
