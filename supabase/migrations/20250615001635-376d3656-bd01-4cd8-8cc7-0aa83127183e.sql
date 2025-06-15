
-- Update the AI summaries for the existing YouTube insights with more detailed, realistic content
UPDATE public.youtube_insights 
SET ai_summary = CASE 
  WHEN video_title = 'Building AI Applications with React and OpenAI' THEN 
    'This tutorial walks through creating a complete AI-powered React application from scratch. Key topics include: setting up OpenAI API integration, managing API keys securely, implementing streaming responses for better UX, handling rate limits and errors gracefully, and deploying AI features to production. The instructor demonstrates building a chatbot interface with proper state management and shows best practices for prompt engineering to get consistent results.'
  
  WHEN video_title = 'Neural Networks Explained Visually' THEN 
    'An exceptional visual journey through neural network fundamentals using 3Blue1Brown''s signature animation style. The video breaks down complex concepts like gradient descent, backpropagation, and activation functions into intuitive visual representations. Covers the mathematical foundations without overwhelming detail, shows how networks learn through examples, and builds intuition for why deep learning works. Perfect for both beginners and those wanting to solidify their understanding of the underlying mechanisms.'
  
  WHEN video_title = 'Statistics Fundamentals for Data Science' THEN 
    'A practical guide to essential statistical concepts that every data scientist encounters daily. Josh Starmer explains hypothesis testing, p-values, confidence intervals, and statistical significance using clear examples and memorable analogies. The video emphasizes when to use different statistical tests, how to interpret results correctly, and common pitfalls to avoid. Includes real-world examples from A/B testing, experimental design, and data analysis scenarios that practicing data scientists face.'
  
  ELSE ai_summary
END
WHERE video_title IN (
  'Building AI Applications with React and OpenAI',
  'Neural Networks Explained Visually', 
  'Statistics Fundamentals for Data Science'
);
