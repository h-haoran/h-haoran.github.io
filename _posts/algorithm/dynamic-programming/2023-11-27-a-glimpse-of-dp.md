---
layout: post
title:  A Glimpse of Dynamic Programming
date:   2023-11-27 19:07:00 +0000
categories: Algorithm
usemathjax: true
---

# Overview 
Dynamic programming (dp) is a powerful tool for solving problem. It was intimidating to start with and difficult to grasp for me, so I made this note to share some insight to dp. The essense of dp is meomorization - storing intermediate reults which can be used to construct the solution.  

There are four major steps for dp:
1. Finding the subproblem
2. Initialization
3. Implementaion
4. Optimization(in memory) 

# 1. How to find the subproblem
The biggest question comes to what information do we want to store as intermediate results? Before answering that question, there are two equivalent of asking such question. How can we didivde this problem into subproblems? Is there any recurrence relation lies within the nature of this problem? IMO, one can never think about one question without considering the other two. For simiplicity, we refer to the above questions as finding the subproblem.

All there questions are related to the subproblem. Firsly, the recurrence relation describe the purpose of finding subproblem. We are looking for reccurrance relation that can construct the final solution. Finding such a reccurrence naturaly gives the subproblem. Secondly what information can be stored, in another word what are all possble states of an intermediate steps, helps us to build the subproblem from scratch.

Let's look at some examples:  
Fibonacci sequence is defined as: $$ F(n) = F(n−1) + F(n−2), F(0) = 0, F(1) = 1 $$  
Here the reccurrence relation is explicit, so $$ F(n) $$ is the subproblem.  

[Maximum Subarray](https://leetcode.cn/problems/maximum-subarray/) 
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.


[Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/)
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
`'.'` Matches any single character.​​​​
`'*'` Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
<details> 
<summary> Example </summary>
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
</details>


[Count Stepping Numbers in Range](https://leetcode.com/problems/count-stepping-numbers-in-range/description/) Given two positive integers low and high represented as strings, find the count of stepping numbers in the inclusive range [low, high].  
A stepping number is an integer such that all of its adjacent digits have an absolute difference of exactly 1.  
Return an integer denoting the count of stepping numbers in the inclusive range [low, high].  
<details> 
<summary> Example </summary>
Input: low = "90", high = "101"  
Output: 2  
Explanation: The stepping numbers in the range [90,101] are 98 and 101. There are a total of 2 stepping numbers in the range. Hence, the output is 2
</details>

[Count of Integers](https://leetcode.com/problems/count-of-integers/description/)
You are given two numeric strings num1 and num2 and two integers max_sum and min_sum. We denote an integer x to be good if:  
- num1 <= x <= num2  
- min_sum <= digit_sum(x) <= max_sum    
Return the number of good integers.
Note that digit_sum(x) denotes the sum of the digits of x.
<details> 
<summary> Example </summary>
Input: num1 = "1", num2 = "12", min_sum = 1, max_sum = 8
Output: 11
Explanation: There are 11 integers whose sum of digits lies between 1 and 8 are 1,2,3,4,5,6,7,8,10,11, and 12. Thus, we return 11.
</details>

In summary, There are several types of subproblem:    
1. 1D dp: the only dimentional is the index which represents the size of the problem.
    1.1. the subproblem is the problem itself   
    1.2. the subproblem is a variation of the problem   
2. multi-dimentional:  
    2.1. all dimention are indices, defining the size of the problem. i.e.[Edit Distance](https://leetcode.com/problems/edit-distance/description/), [Longest Common Subsequences](https://leetcode.com/problems/longest-common-subsequence/description/), [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/)  
    2.2. some dimention are indices and other indices represents other states of the problem  
        - knapsack [Paiting the Walls](https://leetcode.com/problems/painting-the-walls/description/)  
        - store digits for counting number i.e.[Count Stepping Numbers in Range](https://leetcode.com/problems/count-stepping-numbers-in-range/description/), [Count of Integers](https://leetcode.com/problems/count-of-integers/description/)


# 2. Initialization
# 3. Implementaion
Top-down vs Bottom-up   
![bot-up](/assets/img/botup.JPG)  

![bot-up](/assets/img/topdown.JPG)
# 4. Optimization

# Give it a try
[Paiting the walls](https://leetcode.com/problems/painting-the-walls/description/)
You are given two 0-indexed integer arrays, `cost` and `time`, of size n representing the costs and the time taken to paint n different walls respectively. There are two painters available:
- A paid painter that paints the ith wall in `time[i]` units of time and takes `cost[i]` units of money.
- A free painter that paints any wall in 1 unit of time at a cost of 0. But the free painter can only be used if the paid painter is already occupied.
Return the minimum amount of money required to paint the n walls.

Example 1:  
Input: `cost` = [1,2,3,2], `time` = [1,2,3,2]  
Output: 3  
Explanation: The walls at index 0 and 1 will be painted by the paid painter, and it will take 3 units of time; meanwhile, the free painter will paint the walls at index 2 and 3, free of cost in 2 units of time. Thus, the total cost is 1 + 2 = 3.

Initial thoughts: This is a variation of knapsack problem, you want to optimize in both cost and time. The goal is to minimize the cost so we want to choose the wall with lower cost. In the meantime, each wall we choose (to be painted by a paid painter) gives time for the free painter to paint 
`time[i]` walls with 0 cost. Since there is no corelation btween `cost` and `time` for the walls, there is no greedy algorithm for that. 

The first thought is to use brute force algorithm to check all $$ 2^n $$ possible choices. A dfs can be used to explore two choices of wheather be painted by paid or free painter for each wall. We can prune the search tree by recording the number of walls we have painted( = # of walls we chose + # of time units paid painter spent). Once it reached the total number of walls, we can end the current exploration.

Brute force solution:
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
            dfs(cost, time, 0, 0, cost.size(), ans);
            return ans;
        }
    };
```


Observation: repetition

Improvement: Store info

```c++
class Solution {
public:
    int paintWalls(vector<int>& cost, vector<int>& time) {
        int ans = INT_MAX;
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