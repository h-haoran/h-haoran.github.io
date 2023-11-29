---
layout: post
title:  A Glimpse of Dynamic Programming
date:   2023-11-27 19:07:00 +0000
categories: Algorithm
usemathjax: true
---

Dynamic programming (dp) is a powerful algorithm when solving problem, it can be intimidating to start with. I would like to share some of my insight on how to grasp dp.

Let's start with an example:

 ```c++
class Solution {
public:
    void dfs(vector<int>& costs, vector<int>& time, int i, int cost, int wl2p, int &ans) {
        if (wl2p <= 0) {
            ans = min(ans, cost);
            return;
        }
        if (i == costs.size()) return;
        dfs(costs, time, i+1, cost+costs[i],wl2p-1-time[i],ans);
        dfs(costs, time, i+1, cost, wl2p, ans);
    }
    int paintWalls(vector<int>& cost, vector<int>& time) {
        int ans = INT_MAX;
    //     dfs(cost, time, 0, 0, cost.size(), ans);
        int n = cost.size();
        vector<vector<int>> dp(n,vector<int>(n+1,INT_MAX/2));
        
        dp[0][0] = 0;
        for (int i = 1; i <= min(n, time[0]+1); i++) {
            dp[0][i] = cost[0];
        }
        for (int i = 1; i < n; i++) {
            for (int j = 0; j <= n; j++) {
                // choose
                dp[i][j] = min(dp[i][j], dp[i-1][max(0, j - time[i] - 1)] + cost[i]);
                // not choose
                dp[i][j] = min(dp[i][j], dp[i-1][j]);
            } 
        }
        return dp[n-1][n];
    }
};
```
