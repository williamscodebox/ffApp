import WeeklyScore from "../models/WeeklyScore.js";
import UserScore from "../models/UserScore.js";

export const syncUserScores = async () => {
  const allWeeklyScores = await WeeklyScore.find({});

  // Group by user
  const userScoreMap = new Map();

  allWeeklyScores.forEach((score) => {
    const key = score.userId.toString();
    const weekKey = `Week_${score.week}`;

    if (!userScoreMap.has(key)) {
      userScoreMap.set(key, {
        user: score.userId,
        weekScores: {},
      });
    }

    const userData = userScoreMap.get(key);
    userData.weekScores[weekKey] = score.correctSelections; // Or use accuracy if you'd like
  });

  // Save/update UserScore entries
  for (const userData of userScoreMap.values()) {
    const { user, weekScores } = userData;

    const total = Object.values(weekScores).reduce(
      (sum, val) => sum + (val || 0),
      0
    );

    await UserScore.findOneAndUpdate(
      { user },
      {
        user,
        weekScores,
        total,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );
  }

  console.log("✅ User scores synced successfully.");
};
